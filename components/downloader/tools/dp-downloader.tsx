"use client";

import { getInstagramProfileData, InstagramProfile } from "@/lib/api";
import { isValidInstagramUrl, sanitizeInput } from "@/lib/utils";
import { Turnstile } from "@marsidev/react-turnstile";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function DPDownloader() {
    const [result, setResult] = useState<InstagramProfile | null>(null);
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
            const response = await getInstagramProfileData(sanitizedUrl, token);

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

            const profileData = response.profile;
            if (!profileData) {
                setError("No data found for this URL.");
                return;
            }

            setResult(profileData);
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
            const proxiedUrl = `https://images.weserv.nl/?url=${encodeURIComponent(
                url
            )}`;
            const response = await fetch(proxiedUrl);
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

    const formatNumber = (num: number) => {
        if (!num) return "0";
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
        }
        return num.toString();
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
                        placeholder="Paste Instagram Post/Profile URL here..."
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
                    Example: @zuck or https://www.instagram.com/zuck/
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
                    <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                        <div className="bg-card p-6 md:p-10 rounded-[40px] border border-border shadow-lg overflow-hidden relative">
                            {/* Decorative Background Element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] z-0"></div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start text-center md:text-left">
                                {/* Profile Picture Section */}
                                <div className="relative group shrink-0">
                                    <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary/20 p-1 group-hover:border-primary/50 transition-all duration-500 shadow-md">
                                        <Image
                                            src={result.profile_pic_url_hd}
                                            alt={result.username}
                                            width={208}
                                            height={208}
                                            className="w-full h-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <button
                                        onClick={() =>
                                            handleDownload(
                                                result.profile_pic_url_hd,
                                                `profile-${result.username}.jpg`
                                            )
                                        }
                                        className="absolute -bottom-2 right-6 p-4 bg-primary text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all z-20 group/btn"
                                        title="Download High-Res DP"
                                    >
                                        <svg
                                            className="w-6 h-6 group-hover/btn:animate-bounce"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/* Profile Details Section */}
                                <div className="flex-1 space-y-6 flex flex-col justify-center min-w-0 w-full">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                                            <h3 className="text-3xl md:text-4xl font-black text-foreground lowercase tracking-tight truncate max-w-full">
                                                {result.full_name ||
                                                    `@${result.username}`}
                                            </h3>
                                            {result.is_verified && (
                                                <svg
                                                    className="w-7 h-7 text-blue-500 shrink-0"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                                                </svg>
                                            )}
                                        </div>
                                        <p className="text-xl text-muted-foreground font-semibold flex items-center justify-center md:justify-start gap-1">
                                            @
                                            <span className="truncate">
                                                {result.username}
                                            </span>
                                            <div className="flex gap-2 ml-2">
                                                {result.is_private && (
                                                    <span className="flex items-center gap-1 px-2 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-black uppercase tracking-tighter rounded-md border border-amber-500/20">
                                                        <svg
                                                            className="w-2.5 h-2.5"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                        Private
                                                    </span>
                                                )}
                                                {result.is_business_account && (
                                                    <span className="flex items-center gap-1 px-2 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-tighter rounded-md border border-blue-500/20">
                                                        <svg
                                                            className="w-2.5 h-2.5"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                                        </svg>
                                                        Business
                                                    </span>
                                                )}
                                            </div>
                                        </p>
                                    </div>

                                    {/* Stats Badges */}
                                    <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                                        <div className="flex flex-col items-center md:items-start px-5 py-2.5 bg-primary/5 rounded-2xl border border-primary/10 min-w-22.5 shadow-sm">
                                            <span className="text-lg font-black text-foreground">
                                                {formatNumber(
                                                    result.post_count
                                                )}
                                            </span>
                                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                                Posts
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center md:items-start px-5 py-2.5 bg-primary/5 rounded-2xl border border-primary/10 min-w-22.5 shadow-sm">
                                            <span className="text-lg font-black text-foreground">
                                                {formatNumber(
                                                    result.follower_count
                                                )}
                                            </span>
                                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                                Followers
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center md:items-start px-5 py-2.5 bg-primary/5 rounded-2xl border border-primary/10 min-w-22.5 shadow-sm">
                                            <span className="text-lg font-black text-foreground">
                                                {formatNumber(
                                                    result.following_count
                                                )}
                                            </span>
                                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                                Following
                                            </span>
                                        </div>
                                    </div>

                                    {/* Biography */}
                                    {result.biography && (
                                        <div className="relative p-6 bg-muted/30 rounded-[24px] border border-border/50 group/bio transition-all hover:bg-muted/50">
                                            <div className="absolute top-2 left-4 text-3xl text-primary/20 font-serif leading-none">
                                                “
                                            </div>
                                            <p className="text-foreground text-sm md:text-base leading-relaxed font-medium pl-2 relative z-10 whitespace-pre-wrap">
                                                {result.biography}
                                            </p>
                                            {result.external_url && (
                                                <a
                                                    href={result.external_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-3 flex items-center gap-1.5 text-primary text-sm font-bold hover:underline"
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
                                                            strokeWidth={2.5}
                                                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                                        />
                                                    </svg>
                                                    {
                                                        result.external_url
                                                            .replace(
                                                                /^https?:\/\/(www\.)?/,
                                                                ""
                                                            )
                                                            .split("/")[0]
                                                    }
                                                </a>
                                            )}
                                        </div>
                                    )}

                                    {/* Download & View Actions */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button
                                            onClick={() =>
                                                handleDownload(
                                                    result.profile_pic_url_hd,
                                                    `profile-${result.username}-hd.jpg`
                                                )
                                            }
                                            className="flex-1 py-4 bg-primary text-primary-foreground font-black rounded-2xl hover:bg-primary/90 transition-all shadow-md shadow-primary/10 flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
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
                                                    strokeWidth={3}
                                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                />
                                            </svg>
                                            Download HD DP
                                        </button>
                                        <a
                                            href={`https://instagram.com/${result.username}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-4 bg-muted/50 text-foreground font-black rounded-2xl hover:bg-muted transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm border border-border"
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.554-.789.306-1.459.717-2.126 1.384s-1.078 1.337-1.383 2.126c-.297.763-.497 1.634-.554 2.911-.059 1.28-.073 1.688-.073 4.947s.014 3.667.072 4.947c.057 1.277.258 2.148.554 2.911.306.789.717 1.459 1.384 2.126s1.337 1.078 2.126 1.383c.763.297 1.634.497 2.911.554 1.28.059 1.688.073 4.947.073s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.554.789-.306 1.459-.717 2.126-1.384s1.078-1.337 1.383-2.126c.297-.763.497-1.634.554-2.911.059-1.28.073-1.688.073-4.947s-.014-3.667-.072-4.947c-.057-1.277-.258-2.148-.554-2.911-.306-.789-.717-1.459-1.384-2.126s-1.337-1.078-2.126-1.383c-.763-.297-1.634-.497-2.911-.554-1.28-.059-1.688-.073-4.947-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                                            </svg>
                                            View Profile
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
