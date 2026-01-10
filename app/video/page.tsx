import DownloadForm from "@/components/downloader/DownloadForm";
import TypeNav from "@/components/downloader/TypeNav";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustIndicators from "@/components/home/TrustIndicators";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Instagram Video Downloader",
    description:
        "Download Instagram videos online in high quality. Save IGTV and Feed videos to MP4 format instantly. Free and secure video downloader.",
    alternates: {
        canonical: "/video",
    },
};

export default function VideoPage() {
    return (
        <>
            <Hero
                title="Download Instagram Videos"
                highlight="Fast & Easy"
                description="Save Instagram videos in MP4 format. High quality, no watermark, fast download."
            />

            <section className="max-w-5xl mx-auto px-4 pb-16 text-center">
                <TypeNav activeType="video" />
                <DownloadForm
                    placeholder="Paste Instagram Video URL here..."
                    type="video"
                />
                <TrustIndicators />
            </section>

            <HowItWorks />
            <Features />

            <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-muted-foreground">
                <div className="mb-16 text-left md:text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Downloading Instagram Videos made simple
                    </h2>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        Instagram is full of amazing videos, from long IGTV
                        episodes to short feed clips. Sometimes you want to
                        watch them without using data, or share them with
                        friends who don't have the app. With ReelsLoad,
                        downloading Instagram videos is now easier than ever. We
                        help you save standard videos, reels, and IGTV content
                        in high-quality MP4 format directly to your device.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            MP4 Format
                        </h3>
                        <p>
                            We convert and download videos in the universal MP4
                            format, ensuring compatibility with every media
                            player and device instantly.
                        </p>
                    </div>
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            IGTV Support
                        </h3>
                        <p>
                            Not just short clips. Our tool handles longer IGTV
                            videos with ease, letting you save lengthy content
                            to watch offline later.
                        </p>
                    </div>
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Preserve Quality
                        </h3>
                        <p>
                            Don't settle for blurry screen recordings. We fetch
                            the original source file so you get the crispest
                            video quality possible.
                        </p>
                    </div>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
                    <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                        Why use ReelsLoad for Videos?
                    </h2>
                    <p className="text-center text-lg mb-8">
                        We built ReelsLoad to be the most reliable Instagram
                        Video Downloader on the web. We don't cap your speeds,
                        we don't watermark the output, and we certainly don't
                        charge you. It's a tool made for users who appreciate
                        simplicity and quality. Whether for archiving memories
                        or creative projects, we are here to help.
                    </p>
                </div>

                <div id="faq" className="border-t border-border pt-16">
                    <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 max-w-3xl mx-auto">
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Can I download videos from private accounts?
                            </h3>
                            <p>
                                No, we respect user privacy. ReelsLoad only
                                allows you to download videos from public
                                Instagram accounts.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Does the downloaded video have sound?
                            </h3>
                            <p>
                                Yes, absolutely. The downloaded MP4 file will
                                include the original audio track from the video.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Is it safe to use this downloader?
                            </h3>
                            <p>
                                Yes, our service is secure. We don't store your
                                history or require any personal information from
                                you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
