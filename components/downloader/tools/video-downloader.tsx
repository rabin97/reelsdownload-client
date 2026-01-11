"use client";

import { getInstagramPostData, InstagramPost } from "@/lib/api";
import { isValidInstagramUrl, sanitizeInput } from "@/lib/utils";
import { Turnstile } from "@marsidev/react-turnstile";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function VideoDownloader() {
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
            // Use weserv.nl for images to bypass CORS, as Instagram CDN doesn't allow direct fetch
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

    const formatDuration = (seconds: number) => {
        if (!seconds) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
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
                        placeholder="Paste Instagram Video or Post URL here..."
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
                    Example: https://www.instagram.com/reel/Cz7Y8L_M5xV/
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
                    <>
                        {result.type === "carousel" ? (
                            <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {/* Carousel Header */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border border-border">
                                            <Image
                                                src={result.user_profile_pic}
                                                alt={result.author}
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-1.5 font-bold text-lg text-foreground">
                                                @
                                                {result.author ||
                                                    "instagram_user"}
                                                {result.is_verified && (
                                                    <svg
                                                        className="w-4 h-4 text-blue-500"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                                                    </svg>
                                                )}
                                            </div>
                                            <div className="text-sm text-muted-foreground font-medium">
                                                {result.user_full_name} •{" "}
                                                {result.carousel_media_count ||
                                                    result.items?.length ||
                                                    0}{" "}
                                                items
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caption */}
                                    <div className="bg-muted/30 p-4 rounded-2xl mb-6 border border-border/50">
                                        <p className="text-foreground text-sm leading-relaxed line-clamp-4 italic">
                                            "
                                            {result.caption ||
                                                "No caption available"}
                                            "
                                        </p>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex flex-wrap gap-4 text-sm">
                                        <div className="px-3 py-2 bg-muted/20 rounded-lg">
                                            <span className="font-bold text-foreground">
                                                {result.like_count?.toLocaleString()}
                                            </span>{" "}
                                            <span className="text-muted-foreground">
                                                Likes
                                            </span>
                                        </div>
                                        <div className="px-3 py-2 bg-muted/20 rounded-lg">
                                            <span className="font-bold text-foreground">
                                                {result.comment_count?.toLocaleString()}
                                            </span>{" "}
                                            <span className="text-muted-foreground">
                                                Comments
                                            </span>
                                        </div>
                                        {result.view_count !== undefined &&
                                            result.view_count !== 0 && (
                                                <div className="px-3 py-2 bg-muted/20 rounded-lg">
                                                    <span className="font-bold text-foreground">
                                                        {result.view_count?.toLocaleString()}
                                                    </span>{" "}
                                                    <span className="text-muted-foreground">
                                                        Views
                                                    </span>
                                                </div>
                                            )}
                                    </div>
                                </div>

                                {/* Carousel Items Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                                    {result.items?.map((item, index) => {
                                        const mediaUrl =
                                            item.versions?.[0]?.url;
                                        const isVideo = item.type === "video";

                                        return (
                                            <div
                                                key={index}
                                                className="group relative bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all"
                                            >
                                                {/* Media Display */}
                                                <div className="aspect-square bg-muted overflow-hidden relative">
                                                    {isVideo ? (
                                                        <>
                                                            <Image
                                                                src={
                                                                    item.thumbnail ||
                                                                    ""
                                                                }
                                                                alt={`Carousel item ${
                                                                    index + 1
                                                                }`}
                                                                width={800}
                                                                height={800}
                                                                className="w-full h-full object-cover"
                                                            />
                                                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                                                                <svg
                                                                    className="w-12 h-12 text-white opacity-80"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                                                </svg>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <Image
                                                            src={
                                                                item.thumbnail ||
                                                                mediaUrl ||
                                                                ""
                                                            }
                                                            alt={`Carousel item ${
                                                                index + 1
                                                            }`}
                                                            width={800}
                                                            height={800}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    )}
                                                </div>

                                                {/* Item Badge */}
                                                <div className="absolute top-2 right-2 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-bold">
                                                    {isVideo
                                                        ? "VIDEO"
                                                        : "PHOTO"}
                                                </div>

                                                {/* Item Counter */}
                                                <div className="absolute top-2 left-2 px-2.5 py-1 bg-primary/80 backdrop-blur-sm rounded-full text-white text-xs font-bold">
                                                    {index + 1}/
                                                    {result.carousel_media_count ||
                                                        result.items?.length}
                                                </div>

                                                {/* Download Button */}
                                                <div className="p-2">
                                                    <button
                                                        onClick={() =>
                                                            handleDownload(
                                                                mediaUrl || "",
                                                                `carousel-${
                                                                    index + 1
                                                                }.${
                                                                    isVideo
                                                                        ? "mp4"
                                                                        : "jpg"
                                                                }`
                                                            )
                                                        }
                                                        className="w-full py-2 bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-1.5"
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
                                                                strokeWidth={2}
                                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                            />
                                                        </svg>
                                                        Download
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Download All Button */}
                                {result.allUrls &&
                                    result.allUrls.length > 0 && (
                                        <div className="flex justify-center">
                                            <button
                                                onClick={() =>
                                                    handleDownload(
                                                        result.allUrls?.[0] ||
                                                            "",
                                                        `carousel-complete-${result.code}.zip`
                                                    )
                                                }
                                                className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg flex items-center gap-2"
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
                                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>
                                                Download All (
                                                {result.carousel_media_count ||
                                                    result.items?.length}
                                                )
                                            </button>
                                        </div>
                                    )}
                            </div>
                        ) : (
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

                                    {result.videoUrl ||
                                    result.items?.[0]?.type === "video" ? (
                                        <div className="relative w-full bg-black">
                                            {/* Video Player */}
                                            <video
                                                src={
                                                    result.videoUrl ||
                                                    result.items?.[0]
                                                        ?.versions?.[0]?.url
                                                }
                                                controls
                                                className="w-full h-auto max-h-150 object-contain"
                                                controlsList="nodownload"
                                            >
                                                Your browser does not support
                                                the video tag.
                                            </video>

                                            {/* Duration Badge */}
                                            <div className="absolute top-4 right-4 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full text-white text-sm font-bold border border-white/10">
                                                {formatDuration(
                                                    result.video_duration || 0
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative w-full bg-black flex justify-center">
                                            {/* Single Photo Display */}
                                            <Image
                                                src={result.thumbnail || ""}
                                                alt={
                                                    result.caption ||
                                                    "Instagram Photo"
                                                }
                                                width={1080}
                                                height={1080}
                                                className="w-auto h-auto max-h-150 object-contain"
                                            />
                                        </div>
                                    )}

                                    <div className="p-8">
                                        {/* Download Button */}
                                        <button
                                            onClick={() => {
                                                const mediaUrl =
                                                    result.videoUrl ||
                                                    result.items?.[0]
                                                        ?.versions?.[0]?.url ||
                                                    result.thumbnail;
                                                const isVideo = !!(
                                                    result.videoUrl ||
                                                    result.items?.[0]?.type ===
                                                        "video"
                                                );

                                                if (mediaUrl) {
                                                    handleDownload(
                                                        mediaUrl,
                                                        `instagram-post-${
                                                            result.code
                                                        }.${
                                                            isVideo
                                                                ? "mp4"
                                                                : "jpg"
                                                        }`
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
                                            Download{" "}
                                            {result.videoUrl ||
                                            result.items?.[0]?.type === "video"
                                                ? "Video"
                                                : "Photo"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
