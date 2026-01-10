import DownloadForm from "@/components/downloader/DownloadForm";
import TypeNav from "@/components/downloader/TypeNav";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustIndicators from "@/components/home/TrustIndicators";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Instagram Audio Downloader",
    description:
        "Extract and download audio from Instagram Reels and Videos. Save as high-quality MP3 instantly. Free Instagram Audio Downloader.",
    alternates: {
        canonical: "/audio",
    },
};

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
                <DownloadForm
                    placeholder="Paste Instagram Reel or Video URL..."
                    type="audio"
                />
                <TrustIndicators />
            </section>

            <HowItWorks />
            <Features />

            <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
                {/* Brand Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
                            Extract Audio in{" "}
                            <span className="text-primary">
                                Crystal Clear MP3
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Found a Reel with a catchy song or a dialogue you
                            want to use? You don't need to keep the whole video.
                            ReelsLoad makes it incredibly easy to extract audio
                            from Instagram Reels and videos.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            **ReelsLoad Audio** strips away the visual layer and
                            provides you with a high-bitrate MP3 track. Perfect
                            for creators looking to save trending sounds or
                            music lovers building their offline playlists.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {[13, 14, 15, 16].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold overflow-hidden"
                                    >
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${
                                                i * 8
                                            }`}
                                            alt="User"
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm font-semibold text-foreground">
                                Trusted by 3k+ Sound Designers
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full -z-10 group-hover:bg-yellow-500/30 transition-colors"></div>
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
                                    I use this to grab trending audio for my own
                                    Reels. The extraction is instant and the MP3
                                    quality is top-notch.
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600 font-bold">
                                    DA
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">
                                        David Chen
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Social Media Manager
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
                                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Pure MP3
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We convert the audio stream directly to standard MP3
                            format, making it compatible with every player and
                            editor.
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
                                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            High Bitrate
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Sound quality is our priority. We extract the audio
                            at the highest possible bitrate for crisp, clear
                            playback.
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
                            Super Fast
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Our optimized engine processes the video and
                            extracts the audio in seconds. No waiting, just pure
                            speed.
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
                            Audio Tool FAQs
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Common questions about extracting Instagram audio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> Can I
                                use the audio for my own Reels?
                            </div>
                            <p className="text-muted-foreground">
                                Yes, once you download the MP3, you can import
                                it into any video editing app like CapCut or
                                Premiere to create your own content.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> Does it
                                work with any Instagram video?
                            </div>
                            <p className="text-muted-foreground">
                                As long as the Instagram post is public and
                                contains an audio track, our tool can extract it
                                for you instantly.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> What is
                                the quality of the downloaded MP3?
                            </div>
                            <p className="text-muted-foreground">
                                We extract audio at the highest bitrate allowed
                                by the source, typically around 128kbps to
                                320kbps for maximum clarity.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> Is this
                                tool free to use?
                            </div>
                            <p className="text-muted-foreground">
                                Yes, ReelsLoad Audio is completely free to use.
                                You can extract as many audio tracks as you want
                                without any limits.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
