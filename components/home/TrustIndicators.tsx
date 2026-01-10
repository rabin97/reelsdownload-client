export default function TrustIndicators() {
    return (
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8">
            <div className="flex items-center gap-3 px-5 py-2.5 bg-card/50 border border-border/50 rounded-full shadow-sm">
                <div className="w-5 h-5 bg-green-500/10 rounded-full flex items-center justify-center">
                    <svg
                        className="w-3 h-3 text-green-600 dark:text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Free Forever
                </span>
            </div>

            <div className="flex items-center gap-3 px-5 py-2.5 bg-card/50 border border-border/50 rounded-full shadow-sm">
                <div className="w-5 h-5 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <svg
                        className="w-3 h-3 text-blue-600 dark:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    No Watermark
                </span>
            </div>

            <div className="flex items-center gap-3 px-5 py-2.5 bg-card/50 border border-border/50 rounded-full shadow-sm">
                <div className="w-5 h-5 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <svg
                        className="w-3 h-3 text-purple-600 dark:text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                    </svg>
                </div>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Unlimited
                </span>
            </div>

            <div className="flex items-center gap-3 px-5 py-2.5 bg-card/50 border border-border/50 rounded-full shadow-sm">
                <div className="w-5 h-5 bg-orange-500/10 rounded-full flex items-center justify-center">
                    <svg
                        className="w-3 h-3 text-orange-600 dark:text-orange-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                    </svg>
                </div>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Secure
                </span>
            </div>
        </div>
    );
}
