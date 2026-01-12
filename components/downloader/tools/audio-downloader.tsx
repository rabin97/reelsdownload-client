"use client";

import { getInstagramAudioData, InstagramAudioResult } from "@/lib/api";
import { isValidInstagramUrl, sanitizeInput } from "@/lib/utils";
import { Turnstile } from "@marsidev/react-turnstile";
import { useEffect, useRef, useState } from "react";

export default function AudioDownloader() {
    const [result, setResult] = useState<InstagramAudioResult | null>(null);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [inputUrl, setInputUrl] = useState<string>("");
    const [token, setToken] = useState<string | null>(null);
    const resultRef = useRef<HTMLDivElement>(null);
    const turnstileRef = useRef<any>(null);
    const turnstileRefDesktop = useRef<any>(null);

    useEffect(() => {
        if (result && resultRef.current) {
            setTimeout(() => {
                resultRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 100);
        }
    }, [result]);

    const processDownload = async (url: string) => {
        setError("");
        setResult(null);

        const sanitizedUrl = sanitizeInput(url);
        if (!sanitizedUrl) {
            setError("Please enter a valid URL.");
            return;
        }

        if (!isValidInstagramUrl(sanitizedUrl)) {
            setError(
                "Please enter a valid Instagram URL (e.g., instagram.com/p/..., instagram.com/reels/..., etc.)."
            );
            return;
        }

        if (!token) {
            setError("Please complete the security check.");
            return;
        }

        setIsLoading(true);

        try {
            const response = await getInstagramAudioData(sanitizedUrl, token);

            if (!response.success) {
                const errorCode = response.error?.code;
                let errorMessage =
                    response.error?.message || "Failed to fetch data.";

                if (errorCode === "TURNSTILE_VERIFICATION_FAILED") {
                    errorMessage =
                        "Security verification failed. Please try again.";
                    setToken(null);
                    turnstileRef.current?.reset();
                    turnstileRefDesktop.current?.reset();
                } else if (errorCode === "MEDIA_NOT_FOUND") {
                    errorMessage =
                        "No posts found. Make sure the link is correct and the post is not private or deleted.";
                }

                setError(errorMessage);
                return;
            }

            setResult(response);
            setToken(null);
            turnstileRef.current?.reset();
            turnstileRefDesktop.current?.reset();
        } catch (err: any) {
            setError(err.message || "Something went wrong. Please try again.");
            setToken(null);
            turnstileRef.current?.reset();
            turnstileRefDesktop.current?.reset();
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        await processDownload(inputUrl);
    };

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            if (text) {
                setInputUrl(text);
                await processDownload(text);
            }
        } catch (err) {
            setError("Failed to access clipboard. Please paste manually.");
        }
    };

    const handleDownload = async (url: string, filename: string) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to download file");

            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (err) {
            console.error("Download failed:", err);
            setError("Failed to download. Please try again.");
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto mb-6 md:mb-8 px-2 md:px-0">
            {error && (
                <div className="mb-4 md:mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 font-semibold animate-in fade-in slide-in-from-top-2">
                    {error}
                </div>
            )}
            <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row gap-3 md:gap-4 items-center p-1.5 md:p-2 bg-card rounded-[24px] md:rounded-[28px] border-2 border-primary/20 hover:border-primary/40 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all shadow-lg shadow-primary/5"
            >
                <div className="relative flex-1 w-full group flex items-center">
                    <input
                        type="text"
                        placeholder="Paste Instagram Reel or Video URL..."
                        value={inputUrl}
                        onChange={(e) => setInputUrl(e.target.value)}
                        className="w-full pl-5 md:pl-6 pr-16 md:pr-20 py-3 md:py-4 bg-transparent border-none text-base md:text-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-0 transition-all font-medium"
                    />
                    <button
                        type="button"
                        onClick={handlePaste}
                        className="absolute right-1.5 md:right-2 px-3 py-1.5 bg-primary/10 text-primary text-[10px] md:text-xs font-bold rounded-full hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                    >
                        <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                        </svg>
                        PASTE
                    </button>
                </div>

                <div className="md:hidden w-full flex justify-center scale-[0.85] -my-2">
                    <Turnstile
                        ref={turnstileRef}
                        siteKey={
                            process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""
                        }
                        onSuccess={(token) => setToken(token)}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full md:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-primary text-primary-foreground text-base md:text-lg font-bold rounded-2xl md:rounded-4xl shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all whitespace-nowrap uppercase tracking-wider flex items-center justify-center gap-2"
                >
                    {isLoading ? (
                        <>
                            <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 md:h-5 md:w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Processing...
                        </>
                    ) : (
                        <>
                            <svg
                                className="w-4 h-4 md:w-5 md:h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                            Download
                        </>
                    )}
                </button>
            </form>
            <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                <p className="text-sm text-muted-foreground font-medium flex items-center justify-center gap-2">
                    <svg
                        className="w-4 h-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    Example: https://www.instagram.com/reels/Cz7Y8L_M5xV/
                </p>
                <div className="hidden md:block scale-[0.75] origin-center">
                    <Turnstile
                        ref={turnstileRefDesktop}
                        siteKey={
                            process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""
                        }
                        onSuccess={(token) => setToken(token)}
                    />
                </div>
            </div>
            <div ref={resultRef} className="mt-8 md:mt-12">
                {result && (
                    <AudioTool
                        result={result}
                        handleDownload={handleDownload}
                    />
                )}
            </div>
        </div>
    );
}

function AudioTool({
    result,
    handleDownload,
}: {
    result: InstagramAudioResult;
    handleDownload: (url: string, filename: string) => Promise<void>;
}) {
    return (
        <div className="bg-card border-2 border-primary/10 rounded-3xl p-6 md:p-8 shadow-xl animate-in fade-in slide-in-from-bottom-4">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-48 h-48 bg-primary/5 rounded-2xl flex items-center justify-center relative overflow-hidden group border-2 border-primary/20">
                    <svg
                        className="w-20 h-20 text-primary opacity-40 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                        />
                    </svg>
                </div>

                <div className="flex-1 space-y-4 md:space-y-6 w-full">
                    <div className="space-y-1">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground line-clamp-2">
                            {result.title}
                        </h3>
                        <p className="text-primary font-semibold flex items-center justify-center md:justify-start gap-2">
                            <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                            </svg>
                            {result.uploader}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-muted/50 p-3 rounded-2xl border border-border/50">
                            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-1">
                                Duration
                            </p>
                            <p className="text-foreground font-bold">
                                {Math.floor(result.duration)}s
                            </p>
                        </div>
                        <div className="bg-muted/50 p-3 rounded-2xl border border-border/50">
                            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-1">
                                Size
                            </p>
                            <p className="text-foreground font-bold">
                                {(result.file_size / (1024 * 1024)).toFixed(2)}{" "}
                                MB
                            </p>
                        </div>
                        <div className="bg-muted/50 p-3 rounded-2xl border border-border/50 col-span-2 md:col-span-1">
                            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-1">
                                Format
                            </p>
                            <p className="text-foreground font-bold uppercase">
                                MP3
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-muted/30 p-4 rounded-2xl border border-dashed border-primary/30">
                            <audio
                                controls
                                className="w-full h-10"
                                src={result.download_url}
                            >
                                Your browser does not support the audio element.
                            </audio>
                        </div>

                        <button
                            onClick={() =>
                                handleDownload(
                                    result.download_url,
                                    result.file_name
                                )
                            }
                            className="w-full py-4 bg-primary text-primary-foreground text-lg font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/95 hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                        >
                            <svg
                                className="w-6 h-6 group-hover:animate-bounce"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            Download MP3
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
