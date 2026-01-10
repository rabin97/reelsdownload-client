import DownloadForm from "@/components/downloader/DownloadForm";
import TypeNav from "@/components/downloader/TypeNav";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustIndicators from "@/components/home/TrustIndicators";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Instagram Thumbnail Downloader",
    description:
        "Download high-quality thumbnails from Instagram Reels and Videos. Save cover art in original resolution for free.",
    alternates: {
        canonical: "/thumbnail",
    },
};

export default function ThumbnailPage() {
    return (
        <>
            <Hero
                title="Download Video Thumbnails"
                highlight="Instantly"
                description="View and download thumbnails from Instagram videos and reels in full HD."
            />

            <section className="max-w-5xl mx-auto px-4 pb-16 text-center">
                <TypeNav activeType="thumbnail" />
                <DownloadForm
                    placeholder="Paste Instagram URL here..."
                    type="thumbnail"
                />
                <TrustIndicators />
            </section>

            <HowItWorks />
            <Features />

            <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-muted-foreground">
                <div className="mb-16 text-left md:text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Downloading Instagram Thumbnails in HD
                    </h2>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        The cover image of a Reel or video is often the perfect
                        shot. But how do you save just that image? Screenshots
                        are messy and low quality. ReelsLoad offers the perfect
                        solution with our Instagram Thumbnail Downloader. We
                        retrieve the full-resolution cover art from any video or
                        reel, giving you a clean, high-quality image file in
                        seconds.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Original Quality
                        </h3>
                        <p>
                            We fetch the master image file used by Instagram on
                            their servers, ensuring you get the maximum possible
                            resolution without compression.
                        </p>
                    </div>
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            No Overlay
                        </h3>
                        <p>
                            Get the pure image. No play buttons, no tagged user
                            icons, no interface clutter. Just the clean artwork
                            you want.
                        </p>
                    </div>
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Instant Access
                        </h3>
                        <p>
                            Simply paste the link to the Reel or video, and we
                            will instantly display the thumbnail for you to
                            download.
                        </p>
                    </div>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
                    <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                        Why use ReelsLoad for Thumbnails?
                    </h2>
                    <p className="text-center text-lg mb-8">
                        Designers, marketers, and fans love ReelsLoad because
                        it's the easiest way to grab high-quality assets.
                        Thumbnails are perfect for mood boards, design
                        inspiration, or ensuring you have the right cover image
                        for a repost. We make the process invisible and
                        efficient, so you can focus on creating.
                    </p>
                </div>

                <div id="faq" className="border-t border-border pt-16">
                    <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 max-w-3xl mx-auto">
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                What is the resolution of the downloaded
                                thumbnail?
                            </h3>
                            <p>
                                It depends on the original upload, but we always
                                fetch the highest available version, often
                                1080x1920 for Reels.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Can I download thumbnails from private accounts?
                            </h3>
                            <p>
                                No, the post must be public for our server to
                                access and retrieve the thumbnail image.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Is it free?
                            </h3>
                            <p>
                                Yes, thumbnail downloading is completely free
                                and you can use it as often as you like.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
