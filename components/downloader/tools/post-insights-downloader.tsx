"use client";

import { getPostInsights, InstagramPost } from "@/lib/api";
import { formatNumber, isValidInstagramUrl, sanitizeInput } from "@/lib/utils";
import { Turnstile } from "@marsidev/react-turnstile";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PostInsightsDownloader() {
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

    const processInsights = async (url: string) => {
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
            const response = await getPostInsights(sanitizedUrl, token);

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
        await processInsights(inputUrl);
    };

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            if (text) {
                setInputUrl(text);
                await processInsights(text);
            }
        } catch (err) {
            setError("Failed to access clipboard. Please paste manually.");
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
                        placeholder="Paste Instagram Post or Reel URL for Insights..."
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
                            Analyzing...
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
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                            </svg>
                            Get Insights
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
                    Check reach, engagement and more.
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
                {result && <InsightsView post={result} />}
            </div>
        </div>
    );
}

function InsightsView({ post }: { post: InstagramPost }) {
    return (
        <div className="bg-card border-2 border-primary/10 rounded-3xl p-6 md:p-8 shadow-xl animate-in fade-in slide-in-from-bottom-4">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8">
                {/* Visual Content Column */}
                <div className="lg:col-span-4 space-y-4">
                    <div className="relative aspect-9/16 rounded-2xl overflow-hidden border-2 border-primary/10 group shadow-lg bg-black">
                        {post.videoUrl && post.type === "reel" ? (
                            <video
                                src={post.videoUrl}
                                poster={`https://images.weserv.nl/?url=${encodeURIComponent(
                                    post.thumbnail
                                )}`}
                                className="w-full h-full object-cover"
                                loop
                                muted
                                playsInline
                                autoPlay
                            />
                        ) : (
                            <Image
                                src={`https://images.weserv.nl/?url=${encodeURIComponent(
                                    post.thumbnail
                                )}`}
                                alt="Post Thumbnail"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                unoptimized
                            />
                        )}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4 pointer-events-none">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-wider w-fit">
                                {post.type}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-2xl border border-border/50">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/20">
                            <Image
                                src={
                                    post.user_profile_pic
                                        ? `https://images.weserv.nl/?url=${encodeURIComponent(
                                              post.user_profile_pic
                                          )}`
                                        : ""
                                }
                                alt={post.author}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-foreground truncate">
                                {post.user_full_name}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">
                                @{post.author}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Insights Data Column */}
                <div className="lg:col-span-8 flex flex-col h-full space-y-6">
                    <div>
                        <h3 className="text-xl md:text-2xl font-black tracking-tight text-foreground mb-4">
                            Post Performance
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            <StatCard
                                label="Likes"
                                value={formatNumber(post.like_count)}
                                icon={
                                    <svg
                                        className="w-5 h-5 text-red-500"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                }
                            />
                            <StatCard
                                label="Views"
                                value={formatNumber(post.view_count || 0)}
                                icon={
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M24 12s-4.5-9-12-9-12 9-12 9 4.5 9 12 9 12-9 12-9z"
                                        />
                                    </svg>
                                }
                            />
                            <StatCard
                                label="Comments"
                                value={formatNumber(post.comment_count)}
                                icon={
                                    <svg
                                        className="w-5 h-5 text-primary"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
                                    </svg>
                                }
                            />
                        </div>
                    </div>

                    <div className="flex-1 space-y-6">
                        <div className="bg-muted/30 p-5 rounded-2xl border border-border/50">
                            <h4 className="text-[11px] font-black uppercase tracking-widest text-foreground/40 mb-3">
                                Caption
                            </h4>
                            <p className="text-sm text-foreground/80 leading-relaxed max-h-32 overflow-y-auto thin-scrollbar">
                                {post.caption || "No caption available."}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/30">
                                    Duration
                                </span>
                                <span className="text-sm font-bold text-foreground">
                                    {post.video_duration
                                        ? `${post.video_duration.toFixed(1)}s`
                                        : "N/A"}
                                </span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/30">
                                    Posted On
                                </span>
                                <span className="text-sm font-bold text-foreground">
                                    {new Date(
                                        post.timestamp * 1000
                                    ).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() =>
                            window.open(
                                `https://instagram.com/p/${post.code}`,
                                "_blank"
                            )
                        }
                        className="w-full py-4 bg-foreground text-background text-sm font-black uppercase tracking-widest rounded-2xl hover:opacity-90 transition-all active:scale-[0.98]"
                    >
                        View Original Post
                    </button>
                </div>
            </div>
        </div>
    );
}

function StatCard({
    label,
    value,
    icon,
}: {
    label: string;
    value: string;
    icon: React.ReactNode;
}) {
    return (
        <div className="bg-background border border-border/50 p-4 rounded-2xl hover:border-primary/30 transition-colors group">
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 transition-transform group-hover:scale-110">
                    {icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">
                    {label}
                </span>
            </div>
            <p className="text-2xl font-black tracking-tighter text-foreground">
                {value}
            </p>
        </div>
    );
}
