"use client";

import { isValidInstagramUrl, sanitizeInput } from "@/lib/utils";
import React, { useState } from "react";

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
    const [result, setResult] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [inputUrl, setInputUrl] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setResult(false);

        // 1. Sanitize
        const sanitizedUrl = sanitizeInput(inputUrl);

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

        setIsLoading(true);

        try {
            // Simulate API call with artificial delay to show loader
            // const data = await api.post('/download', { url: sanitizedUrl, type }); // Future integration

            await new Promise((resolve) => setTimeout(resolve, 1500)); // Fake delay

            setResult(true);
        } catch (err) {
            console.error("Download failed:", err);
            setError("Failed to process the request. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const renderResult = () => {
        if (!result) return null;

        switch (type) {
            case "video":
            case "reels":
                return (
                    <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-1/3 bg-black rounded-xl overflow-hidden aspect-9/16 relative shadow-lg group">
                                <div className="absolute inset-0 flex items-center justify-center">
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
                                {/* Video Preview Placeholder */}
                                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400 text-sm">
                                    Video Preview
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-muted"></div>
                                    <div className="flex-1">
                                        <div className="h-4 bg-muted rounded w-1/3 mb-2"></div>
                                        <div className="h-3 bg-muted/50 rounded w-1/4"></div>
                                    </div>
                                </div>
                                <div className="space-y-2 mb-6">
                                    <div className="h-3 bg-muted/50 rounded w-full"></div>
                                    <div className="h-3 bg-muted/50 rounded w-5/6"></div>
                                </div>
                                <button className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-sm">
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
                                    Download Video (HD)
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case "photo":
            case "thumbnail":
            case "dp":
            case "profile":
                return (
                    <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Mock Item 1 */}
                            <div className="bg-card p-4 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="aspect-square bg-muted rounded-xl mb-4 overflow-hidden relative">
                                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                        Image Preview
                                    </div>
                                </div>
                                <button className="w-full py-2.5 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
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
                                    Download Image
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case "caption":
                return (
                    <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="relative">
                            <textarea
                                readOnly
                                className="w-full h-48 p-4 bg-muted border border-border rounded-xl text-foreground resize-none focus:outline-none focus:border-ring transition-colors"
                                value="Here is a sample caption extracted from the post! #instagram #downloader #cool"
                            ></textarea>
                            <button
                                className="absolute top-4 right-4 p-2 bg-card text-muted-foreground hover:text-primary rounded-lg border border-border shadow-sm hover:shadow-md transition-all"
                                title="Copy Text"
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
                            </button>
                        </div>
                        <div className="mt-4 flex gap-3">
                            <button className="flex-1 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors">
                                Copy Caption
                            </button>
                        </div>
                    </div>
                );

            case "audio":
                return (
                    <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-muted/50 p-6 rounded-2xl flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg animate-pulse">
                                <svg
                                    className="w-8 h-8 text-primary-foreground"
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
                            <h3 className="text-lg font-semibold text-foreground mb-1">
                                Original Audio
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                Extracted from Reel
                            </p>

                            {/* Fake Audio Player */}
                            <div className="w-full max-w-md bg-card rounded-full h-12 flex items-center px-4 shadow-sm border border-border mb-6">
                                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mr-3 text-muted-foreground">
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                    </svg>
                                </div>
                                <div className="flex-1 h-1 bg-muted rounded-full mx-2 relative">
                                    <div className="w-1/3 h-full bg-primary rounded-full"></div>
                                </div>
                                <div className="text-xs text-muted-foreground font-mono">
                                    0:15
                                </div>
                            </div>

                            <button className="w-full max-w-xs py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
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
                                Download Audio (MP3)
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
        <div className="w-full max-w-4xl mx-auto mb-12 px-4 md:px-0 text-center">
            {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 font-semibold animate-in fade-in slide-in-from-top-2">
                    {error}
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row gap-4 items-center p-2 bg-card rounded-[28px] border-2 border-primary/20 hover:border-primary/40 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all shadow-lg shadow-primary/5"
            >
                <div className="relative flex-1 w-full group">
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={inputUrl}
                        onChange={(e) => setInputUrl(e.target.value)}
                        className="w-full pl-6 pr-4 py-4 bg-transparent border-none text-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-0 transition-all font-medium"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground text-lg font-bold rounded-4xl shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all whitespace-nowrap uppercase tracking-wider flex items-center justify-center gap-2"
                >
                    {isLoading ? (
                        <>
                            <svg
                                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
                                className="w-5 h-5"
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

            <p className="text-sm text-muted-foreground mt-4 font-medium flex items-center justify-center gap-2">
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

            <div className="mt-12 text-left">{renderResult()}</div>
        </div>
    );
}
