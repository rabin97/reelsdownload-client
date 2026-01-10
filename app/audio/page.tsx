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

            <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-muted-foreground">
                <div className="mb-16 text-left md:text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Convert Instagram Video to Audio instantly
                    </h2>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        Found a Reel with a catchy song or a dialogue you want
                        to use? You don't need to keep the whole video.
                        ReelsLoad makes it incredibly easy to extract audio from
                        Instagram Reels and videos. We strip away the visual
                        layer and give you just the sound, perfect for your
                        playlist or your next creative project.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            MP3 Format
                        </h3>
                        <p>
                            We convert the audio stream directly into a
                            high-quality MP3 file, universally compatible with
                            all music players and editing software.
                        </p>
                    </div>
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            High Bitrate
                        </h3>
                        <p>
                            Sound quality matters. We ensure the extracted audio
                            maintains the highest possible bitrate from the
                            original source for crisp sound.
                        </p>
                    </div>
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Fast Extraction
                        </h3>
                        <p>
                            No waiting in queues. Our servers process the video
                            instantly, separating the audio track in seconds so
                            you can download and go.
                        </p>
                    </div>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
                    <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                        Why use ReelsLoad for Audio?
                    </h2>
                    <p className="text-center text-lg mb-8">
                        ReelsLoad is the go-to Instagram Audio Downloader for
                        creators and music lovers. Whether you want to save a
                        trending sound to use in your own Reel later, or just
                        keep a motivational speech for offline listening, we
                        provide the tools you need. It's simple, efficient, and
                        requires absolutely no technical skills.
                    </p>
                </div>

                <div id="faq" className="border-t border-border pt-16">
                    <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 max-w-3xl mx-auto">
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Can I use the audio for my own Reels?
                            </h3>
                            <p>
                                Yes, once you download the MP3, you can import
                                it into any video editing app to create your own
                                content.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Does it work with any video?
                            </h3>
                            <p>
                                As long as the Instagram post is public and
                                contains audio, our tool can extract it for you.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Is the service free?
                            </h3>
                            <p>
                                Yes, extracting audio with ReelsLoad is
                                completely free and unlimited.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
