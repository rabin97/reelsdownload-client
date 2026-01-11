import ReelsDownloader from "@/components/downloader/tools/reels-downloader";
import TypeNav from "@/components/downloader/TypeNav";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustIndicators from "@/components/home/TrustIndicators";

export default function Home() {
    return (
        <>
            <Hero
                title="Download Instagram Reels"
                highlight="in Seconds"
                description="Save Instagram reels in high quality. No watermark, no login required, completely free."
            />

            <section className="max-w-5xl mx-auto px-4 pb-16 text-center">
                <TypeNav activeType="reels" />

                <ReelsDownloader />

                <TrustIndicators />
            </section>

            <HowItWorks />
            <Features />

            <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
                {/* Brand Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
                            Downloading Reels is now{" "}
                            <span className="text-primary">Way More Easy</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We know the feeling – you scroll through Instagram,
                            find a Reel that perfectly captures a mood or a
                            memory, and you want to keep it. But Instagram
                            doesn't give you a save button.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            That's why we created **ReelsLoad**. We've made the
                            Best Instagram Reels Downloader that actually works,
                            letting you save reels directly to your gallery in
                            seconds. No complicated apps, no sign-ups, just a
                            simple link paste.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold overflow-hidden"
                                    >
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${
                                                i * 42
                                            }`}
                                            alt="User"
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm font-semibold text-foreground">
                                Joined by 10k+ daily users
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10 group-hover:bg-primary/30 transition-colors"></div>
                        <div className="bg-card p-8 md:p-10 rounded-[40px] border border-border shadow-2xl relative overflow-hidden ring-1 ring-primary/5">
                            <div className="flex gap-4 items-start mb-8 italic text-lg text-foreground font-medium leading-relaxed">
                                <svg
                                    className="w-10 h-10 text-primary shrink-0 opacity-50"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V11C21.017 9.89543 20.1216 9 19.017 9H16.017C14.9124 9 14.017 8.10457 14.017 7V4C14.017 2.89543 14.9124 2 16.017 2H19.017C21.2261 2 23.017 3.79086 23.017 6V14C23.017 17.866 19.883 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C9.12157 16 10.017 15.1046 10.017 14V11C10.017 9.89543 9.12157 9 8.017 9H5.017C3.91243 9 3.017 8.10457 3.017 7V4C3.017 2.89543 3.91243 2 5.017 2H8.017C10.2261 2 12.017 3.79086 12.017 6V14C12.017 17.866 8.883 21 5.017 21H3.017Z" />
                                </svg>
                                <span>
                                    ReelsLoad made saving videos so simple, I
                                    don't even need a separate app anymore. It's
                                    blazing fast and the quality is always
                                    perfect!
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    JS
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">
                                        Jessica Smith
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Content Creator
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-24">
                    <div className="group bg-card p-8 rounded-3xl border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <svg
                                className="w-7 h-7"
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
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Original Quality
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Whether it's HD, 1080p, or 4K, we download the Reel
                            in the exact quality it was uploaded. No
                            compression, no pixelation.
                        </p>
                    </div>
                    <div className="group bg-card p-8 rounded-3xl border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Safe & Secure
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We prioritize your privacy. No logs are kept, and no
                            login is required. Your downloads stay your
                            business.
                        </p>
                    </div>
                    <div className="group bg-card p-8 rounded-3xl border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                        <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Any Device
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Works flawlessly on iPhone (iOS), Android, Mac, or
                            Windows PC. ReelsLoad is your universal saver tool.
                        </p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div
                    id="faq"
                    className="scroll-mt-24 pt-16 border-t border-border"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                            Got Questions?
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Everything you need to know about downloading
                            Instagram content.
                        </p>
                    </div>
                    <div className="grid gap-4 max-w-4xl mx-auto">
                        {[
                            {
                                q: "Is ReelsLoad free to use?",
                                a: "Yes! Our Reel downloader is 100% free. You can download as many videos as you like without any hidden costs.",
                            },
                            {
                                q: "Do I need to log in to my Instagram account?",
                                a: "Absolutely not. We prioritize your security. You only need the link to the Reel; we never ask for your Instagram password.",
                            },
                            {
                                q: "Where are the downloaded videos saved?",
                                a: "On mobile, they usually go to your Gallery or 'Downloads' folder. On PC/Mac, they will be in your default 'Downloads' folder.",
                            },
                        ].map((faq, i) => (
                            <div
                                key={i}
                                className="bg-card p-6 md:p-8 rounded-3xl border border-border hover:border-primary/30 transition-colors group"
                            >
                                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-black shrink-0">
                                        Q
                                    </span>
                                    {faq.q}
                                </h3>
                                <div className="pl-11 border-l-2 border-primary/10">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
