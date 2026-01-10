import DownloadForm from "@/components/downloader/DownloadForm";
import TypeNav from "@/components/downloader/TypeNav";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustIndicators from "@/components/home/TrustIndicators";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Instagram Photo Downloader",
    description:
        "Download Instagram photos, carousels, and images in original high quality. Best online tool to save Instagram pictures for free.",
    alternates: {
        canonical: "/photo",
    },
};

export default function PhotoPage() {
    return (
        <>
            <Hero
                title="Download Instagram Photos"
                highlight="in High Quality"
                description="Save Instagram photos in original quality. Multiple photo download supported."
            />

            <section className="max-w-5xl mx-auto px-4 pb-16 text-center">
                <TypeNav activeType="photo" />
                <DownloadForm
                    placeholder="Paste Instagram Photo URL here..."
                    type="photo"
                />
                <TrustIndicators />
            </section>

            <HowItWorks />
            <Features />

            <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-muted-foreground">
                <div className="mb-16 text-left md:text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Saving Instagram Photos in HD is now simple
                    </h2>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        We've all been there: you see a breathtaking photo on
                        Instagram, maybe a travel shot or an artistic portrait,
                        and you want to save it as your wallpaper. Taking a
                        screenshot lowers the quality and clutters the image
                        with UI elements. ReelsLoad solves this by checking the
                        source URL and extracting the original high-resolution
                        image file for you. It's the cleanest way to download
                        Instagram photos.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Carousels Supported
                        </h3>
                        <p>
                            Don't limit yourself to just the first image. Our
                            tool detects multi-photo posts (carousels) and lets
                            you download all of them.
                        </p>
                    </div>
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Original Resolution
                        </h3>
                        <p>
                            Get the highest quality image available. We pull the
                            1080x1080 (or higher) version stored on Instagram's
                            servers.
                        </p>
                    </div>
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            JPG Format
                        </h3>
                        <p>
                            Images are saved in standard JPG format, making them
                            compatible with every device, photo editor, and
                            gallery app.
                        </p>
                    </div>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
                    <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                        Why use ReelsLoad for Photos?
                    </h2>
                    <p className="text-center text-lg mb-8">
                        ReelsLoad is the ultimate Instagram Photo Downloader
                        because we focus on quality. We know that photographers
                        and enthusiasts care about pixels. That's why we ensure
                        you get the raw image file, not a compressed preview.
                        From mood boards to backups, trust us to keep your
                        visual collection sharp and beautiful.
                    </p>
                </div>

                <div id="faq" className="border-t border-border pt-16">
                    <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 max-w-3xl mx-auto">
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Can I download multiple photos from one post?
                            </h3>
                            <p>
                                Yes! If the link leads to a carousel (multiple
                                photos), ReelsLoad will allow you to save them
                                all.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Will the user know I saved their photo?
                            </h3>
                            <p>
                                No, the process is completely anonymous. The
                                user is not notified when you download their
                                photo using our tool.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Do you support private photos?
                            </h3>
                            <p>
                                Currently, we only support downloading photos
                                from public Instagram accounts to respect user
                                privacy settings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
