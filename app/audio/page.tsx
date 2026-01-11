import AudioDownloader from "@/components/downloader/tools/audio-downloader";
import TypeNav from "@/components/downloader/TypeNav";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustIndicators from "@/components/home/TrustIndicators";

export default function AudioPage() {
    return (
        <>
            <Hero
                title="Download Reels Audio"
                highlight="MP3 Format"
                description="Extract and download audio from any Instagram Reel or Video in high quality MP3 format."
            />

            <section className="max-w-5xl mx-auto px-4 pb-16 text-center">
                <TypeNav activeType="audio" />

                <AudioDownloader />

                <TrustIndicators />
            </section>

            <HowItWorks />
            <Features />

            <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
                {/* Brand Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
                            Save Instagram Videos in{" "}
                            <span className="text-primary">Ultra HD</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Sometimes a Reel isn't enough. You want the full
                            IGTV video, the educational tutorial, or that viral
                            clip in its original glory. **ReelsLoad Video** is
                            designed specifically for high-bitrate video
                            extraction.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our advanced engine detects the highest available
                            source resolution (up to 4K when available) and
                            provides a direct link. No more blurry screen
                            recordings or low-quality captures.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {[5, 6, 7, 8].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold overflow-hidden"
                                    >
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${
                                                i * 12
                                            }`}
                                            alt="User"
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm font-semibold text-foreground">
                                Trusted by Video Editors
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full -z-10 group-hover:bg-blue-500/30 transition-colors"></div>
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
                                    Finally an IG video downloader that doesn't
                                    kill the quality. The MP4 files look
                                    stunning on my big screen!
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                                    MR
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">
                                        Mark Rivera
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Professional Editor
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
                                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            MP4 Format
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We convert and download videos in the universal MP4
                            format, ensuring compatibility with every media
                            player and device instantly.
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
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            IGTV Support
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Not just short clips. Our tool handles longer IGTV
                            videos with ease, letting you save lengthy content
                            to watch offline later.
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
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            No Watermarks
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Don't settle for blurry screen recordings. We fetch
                            the original source file so you get the crispest
                            video quality without any annoying watermarks.
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
                            Video Tool FAQs
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Common questions about our high-quality video
                            downloader.
                        </p>
                    </div>
                    <div className="grid gap-4 max-w-4xl mx-auto">
                        {[
                            {
                                q: "Can I download videos from private accounts?",
                                a: "No, we respect user privacy. ReelsLoad only allows you to download videos from public Instagram accounts.",
                            },
                            {
                                q: "Does the downloaded video have sound?",
                                a: "Yes, absolutely. The downloaded MP4 file will include the original audio track from the video.",
                            },
                            {
                                q: "Is it safe to use this downloader?",
                                a: "Yes, our service is secure. We don't store your history or require any personal information from you.",
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
