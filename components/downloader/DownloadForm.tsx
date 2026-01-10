"use client";

import { api } from "@/lib/api";
import { isValidInstagramUrl, sanitizeInput } from "@/lib/utils";
import { Turnstile } from "@marsidev/react-turnstile";
import React, { useEffect, useRef, useState } from "react";

type DownloadType =
    | "video"
    | "photo"
    | "reels"
    | "thumbnail"
    | "profile"
    | "dp"
    | "caption"
    | "audio";

interface DownloadFormProps {
    placeholder: string;
    type: DownloadType;
}

export default function DownloadForm({ placeholder, type }: DownloadFormProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [inputUrl, setInputUrl] = useState<string>("");
    const [token, setToken] = useState<string | null>(null);
    const resultRef = useRef<HTMLDivElement>(null);
    const turnstileRef = useRef<any>(null);
    const turnstileRefDesktop = useRef<any>(null);

    useEffect(() => {
        if (result && resultRef.current) {
            // Small timeout to ensure DOM is updated and layout stable
            setTimeout(() => {
                resultRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 100);
        }
    }, [result]);

    const processDownload = async (url: string) => {
        setError(null);
        setResult(null);

        // 1. Sanitize
        const sanitizedUrl = sanitizeInput(url);

        if (!sanitizedUrl) {
            setError("Please enter a valid URL.");
            return;
        }

        // 2. Validate format
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
            const response = await api.post<any>("/download", {
                url: sanitizedUrl,
                type,
                token,
            });
            setResult(response.data);
            // Reset token after success
            setToken(null);
            turnstileRef.current?.reset();
            turnstileRefDesktop.current?.reset();
        } catch (err: any) {
            setError(err.message || "Something went wrong. Please try again.");
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

    const renderResult = () => {
        if (!result) return null;

        const handleDownload = (url: string, filename: string) => {
            const link = document.createElement("a");
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        switch (type) {
            case "video":
            case "reels":
                return (
                    <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-1/3 aspect-9/16 bg-muted rounded-3xl overflow-hidden relative shadow-2xl group">
                                <img
                                    src={result.thumbnail}
                                    alt="Video Preview"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                                    <svg
                                        className="w-16 h-16 text-white opacity-80"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1 w-full text-left">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                        {result.username?.[0]?.toUpperCase() ||
                                            "U"}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-lg text-foreground">
                                            @
                                            {result.username ||
                                                "instagram_user"}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {result.duration || "0:15"}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-muted/30 p-4 rounded-2xl mb-6">
                                    <p className="text-foreground line-clamp-3">
                                        {result.title}
                                    </p>
                                </div>
                                <button
                                    onClick={() =>
                                        handleDownload(
                                            result.url,
                                            "reels-video.mp4"
                                        )
                                    }
                                    className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20 group"
                                >
                                    <svg
                                        className="w-6 h-6 group-hover:translate-y-0.5 transition-transform"
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
                                    Download Video (HD)
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case "photo":
                const photos = Array.isArray(result) ? result : [result];
                return (
                    <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {photos.map((item: any, index: number) => (
                                <div
                                    key={index}
                                    className="bg-card p-3 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all group"
                                >
                                    <div className="aspect-square bg-muted rounded-2xl mb-4 overflow-hidden relative">
                                        <img
                                            src={item.thumbnail || item.url}
                                            alt={`Photo ${index + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <button
                                        onClick={() =>
                                            handleDownload(
                                                item.url,
                                                `photo-${index + 1}.jpg`
                                            )
                                        }
                                        className="w-full py-2.5 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2"
                                    >
                                        <svg
                                            className="w-4 h-4"
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
                                        Download
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case "thumbnail":
                return (
                    <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-card p-4 rounded-3xl border border-border shadow-xl">
                                <img
                                    src={result.url}
                                    className="w-full rounded-2xl mb-6 shadow-sm"
                                    alt="Thumbnail"
                                />
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {result.qualities?.map(
                                        (q: any, i: number) => (
                                            <button
                                                key={i}
                                                onClick={() =>
                                                    handleDownload(
                                                        q.url,
                                                        `thumbnail-${q.label}.jpg`
                                                    )
                                                }
                                                className="py-3 bg-muted hover:bg-primary hover:text-primary-foreground text-foreground font-semibold rounded-xl transition-all text-sm"
                                            >
                                                {q.label}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "dp":
            case "profile":
                return (
                    <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                        <div className="bg-card p-8 rounded-[32px] border border-border shadow-2xl flex flex-col md:flex-row gap-8 items-center md:items-start">
                            <div className="relative group">
                                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 p-1 group-hover:border-primary/50 transition-all">
                                    <img
                                        src={result.profile_pic}
                                        alt="Profile"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <button
                                    onClick={() =>
                                        handleDownload(
                                            result.profile_pic,
                                            "profile-picture.jpg"
                                        )
                                    }
                                    className="absolute -bottom-2 right-4 p-3 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-all"
                                    title="Download DP"
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
                                </button>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-foreground mb-1">
                                    @{result.username}
                                </h3>
                                <p className="text-lg text-muted-foreground mb-4">
                                    {result.full_name}
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                                    <div className="px-4 py-2 bg-muted rounded-full">
                                        <span className="font-bold text-foreground">
                                            {result.stats?.posts}
                                        </span>{" "}
                                        <span className="text-sm text-muted-foreground">
                                            Posts
                                        </span>
                                    </div>
                                    <div className="px-4 py-2 bg-muted rounded-full">
                                        <span className="font-bold text-foreground">
                                            {result.stats?.followers}
                                        </span>{" "}
                                        <span className="text-sm text-muted-foreground">
                                            Followers
                                        </span>
                                    </div>
                                    <div className="px-4 py-2 bg-muted rounded-full">
                                        <span className="font-bold text-foreground">
                                            {result.stats?.following}
                                        </span>{" "}
                                        <span className="text-sm text-muted-foreground">
                                            Following
                                        </span>
                                    </div>
                                </div>
                                <p className="text-foreground leading-relaxed italic opacity-80 mb-0">
                                    "{result.biography}"
                                </p>
                            </div>
                        </div>
                    </div>
                );

            case "caption":
                return (
                    <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="relative bg-card rounded-2xl border border-border p-6 shadow-lg">
                            <p className="text-foreground whitespace-pre-wrap mb-4 text-lg leading-relaxed">
                                {result.text}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {result.hashtags?.map(
                                    (tag: string, i: number) => (
                                        <span
                                            key={i}
                                            className="text-primary font-medium hover:underline cursor-pointer"
                                        >
                                            {tag}
                                        </span>
                                    )
                                )}
                            </div>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        result.text || ""
                                    );
                                    alert("Caption copied to clipboard!");
                                }}
                                className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
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
                                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                    />
                                </svg>
                                Copy Caption
                            </button>
                        </div>
                    </div>
                );

            case "audio":
                return (
                    <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-card p-8 rounded-[32px] border border-border shadow-2xl flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 shadow-inner">
                                <svg
                                    className="w-12 h-12 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">
                                {result.title}
                            </h3>
                            <p className="text-muted-foreground mb-8">
                                Original Audio extracted in high quality
                            </p>

                            <audio controls className="w-full max-w-md mb-8">
                                <source src={result.url} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>

                            <button
                                onClick={() =>
                                    handleDownload(result.url, "audio.mp3")
                                }
                                className="w-full max-w-xs py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
                            >
                                <svg
                                    className="w-6 h-6"
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
                                Download MP3
                            </button>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    const getExampleText = () => {
        switch (type) {
            case "profile":
            case "dp":
                return "Example: @zuck or https://www.instagram.com/zuck/";
            case "reels":
            case "audio":
                return "Example: https://www.instagram.com/reel/Cz7Y8L_M5xV/";
            default:
                return "Example: https://www.instagram.com/p/Cz7Y8L_M5xV/";
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto mb-8 md:mb-12 px-2 md:px-0 text-center">
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
                        placeholder={placeholder}
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

                {/* Mobile Security Check */}
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
                    {getExampleText()}
                </p>

                {/* Desktop Security Check */}
                <div className="hidden md:block scale-[0.75] origin-center -ml-2">
                    <Turnstile
                        ref={turnstileRefDesktop}
                        siteKey={
                            process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""
                        }
                        onSuccess={(token) => setToken(token)}
                    />
                </div>
            </div>

            <div ref={resultRef} className="mt-8 md:mt-12 text-left">
                {renderResult()}
            </div>
        </div>
    );
}
