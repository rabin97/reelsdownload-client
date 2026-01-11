"use client";

import { getInstagramPostData, InstagramPost } from "@/lib/api";
import { isValidInstagramUrl, sanitizeInput } from "@/lib/utils";
import { Turnstile } from "@marsidev/react-turnstile";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ThumbnailDownloader() {
    const [result, setResult] = useState<InstagramPost | null>(null);
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
                "Please enter a valid Instagram URL (e.g., instagram.com/p/...)."
            );
            return;
        }

        if (!token) {
            setError("Please complete the security check.");
            return;
        }

        setIsLoading(true);

        try {
            const response = await getInstagramPostData(sanitizedUrl, token);

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
                } else if (errorCode === "INVALID_INSTAGRAM_URL") {
                    errorMessage = response.error?.details || errorMessage;
                }

                setError(errorMessage);
                return;
            }

            const postData = response.results?.[0];
            if (!postData) {
                setError("No data found for this URL.");
                return;
            }

            setResult(postData);
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
            // Use weserv.nl for images only. Video URLs should be fetched directly.
            const isImage =
                url.includes(".jpg") ||
                url.includes(".webp") ||
                url.includes(".png") ||
                url.includes("t51.");
            const proxiedUrl = isImage
                ? `https://images.weserv.nl/?url=${encodeURIComponent(url)}`
                : url;

            const response = await fetch(proxiedUrl);
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
                        placeholder="Paste Instagram URL for Thumbnail..."
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
                                className="w-4 h-4 md:w-5"
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
                    Example: https://www.instagram.com/p/Cz7Y8L_M5xV/
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
                    <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
                            <div className="p-8 space-y-6">
                                {/* Caption Section */}
                                {result.caption && (
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-bold text-foreground">
                                            Caption
                                        </h3>
                                        <div className="relative bg-muted/20 rounded-2xl border border-border/50 p-6">
                                            <div className="absolute top-4 left-4 text-4xl text-primary/10 font-serif leading-none">
                                                "
                                            </div>
                                            <p className="relative z-10 text-foreground text-base leading-relaxed whitespace-pre-wrap">
                                                {result.caption}
                                            </p>
                                            <div className="absolute bottom-4 right-4 text-4xl text-primary/10 font-serif leading-none">
                                                "
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="relative w-full bg-black flex justify-center">
                                {/* Thumbnail Display */}
                                <Image
                                    src={result.thumbnail || ""}
                                    alt={result.caption || "Thumbnail"}
                                    width={1080}
                                    height={1080}
                                    className="w-auto h-auto max-h-150 object-contain"
                                />
                            </div>

                            <div className="p-8">
                                {/* Download Button */}
                                <button
                                    onClick={async () => {
                                        const thumbnailUrl = result.thumbnail;
                                        if (thumbnailUrl) {
                                            await handleDownload(
                                                thumbnailUrl,
                                                `thumbnail-${result.code}.jpg`
                                            );
                                        }
                                    }}
                                    className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                        />
                                    </svg>
                                    Download Thumbnail
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
