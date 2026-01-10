export default function Features() {
    return (
        <section id="features" className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
                    Powerful Features for{" "}
                    <span className="text-primary">Pro Users</span>
                </h2>
                <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                    Experience the best-in-class Instagram downloader. Fast,
                    secure, and completely free for everyone.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card p-8 rounded-[32px] border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg
                            className="w-7 h-7 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                        </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        Ultra-Fast
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                        Lightning-fast download speeds optimized for
                        high-quality Instagram content delivery.
                    </p>
                </div>

                <div className="bg-card p-8 rounded-[32px] border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg
                            className="w-7 h-7 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        Secure & Private
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                        We respect your privacy. No logs, no history tracking,
                        and no personal data storage.
                    </p>
                </div>

                <div className="bg-card p-8 rounded-[32px] border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg
                            className="w-7 h-7 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        Cross-Platform
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                        Works perfectly on any device - iPhone, Android, Mac, or
                        PC with any modern browser.
                    </p>
                </div>

                <div className="bg-card p-8 rounded-[32px] border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg
                            className="w-7 h-7 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                        </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        100% Free
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                        Unlimited downloads without any hidden costs or premium
                        subscriptions.
                    </p>
                </div>
            </div>
        </section>
    );
}
