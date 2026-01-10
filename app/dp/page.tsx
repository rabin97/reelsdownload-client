import DownloadForm from "@/components/downloader/DownloadForm";
import TypeNav from "@/components/downloader/TypeNav";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustIndicators from "@/components/home/TrustIndicators";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Instagram DP Downloader",
    description:
        "View and download Instagram profile pictures in full size HD. Best Insta DP downloader for high-resolution images.",
    alternates: {
        canonical: "/dp",
    },
};

export default function DPPage() {
    return (
        <>
            <Hero
                title="Download Profile Picture"
                highlight="in HD"
                description="View and download Instagram profile pictures (DP) in full size and high quality."
            />

            <section className="max-w-5xl mx-auto px-4 pb-16 text-center">
                <TypeNav activeType="dp" />
                <DownloadForm
                    placeholder="Paste Username or Profile URL..."
                    type="dp"
                />
                <TrustIndicators />
            </section>

            <HowItWorks />
            <Features />

            <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-muted-foreground">
                <div className="mb-16 text-left md:text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        See Instagram Profile Pictures in Full Size
                    </h2>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        We've all struggled with that tiny circle on Instagram.
                        Someone requests to follow you, or you see a brand
                        update their logo, but you just can't see the details.
                        ReelsLoad's Instagram DP Downloader solves this
                        instantly. We let you view and download any public
                        Instagram profile picture (Insta DP) in its original,
                        full-size quality.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Original HD Quality
                        </h3>
                        <p>
                            We bypass the small thumbnail and fetch the
                            high-definition version of the profile photo stored
                            on the server.
                        </p>
                    </div>
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Zoom & Save
                        </h3>
                        <p>
                            Finally, you can zoom in! See every detail clearly
                            and save the image directly to your gallery for
                            future reference.
                        </p>
                    </div>
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Instant View
                        </h3>
                        <p>
                            Just type the username. No need to follow the person
                            or wait for approval. If the profile is public, the
                            DP is yours to view.
                        </p>
                    </div>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
                    <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                        Why use ReelsLoad to View DPs?
                    </h2>
                    <p className="text-center text-lg mb-8">
                        ReelsLoad offers the fastest way to "un-shrink"
                        Instagram profile pictures. Whether you are verifying a
                        friend's identity, checking out a business logo, or just
                        curious, our tool gives you the clarity you need. It's a
                        simple, respectful utility that makes browsing Instagram
                        that much better.
                    </p>
                </div>

                <div id="faq" className="border-t border-border pt-16">
                    <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 max-w-3xl mx-auto">
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Can I view profile pictures of private accounts?
                            </h3>
                            <p>
                                Typically, yes! Even for private accounts, the
                                profile picture itself is often publicly
                                accessible via our tool, unlike their posts.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Is the quality really HD?
                            </h3>
                            <p>
                                We fetch the best quality Instagram has
                                available. If the user uploaded a high-res
                                photo, that is exactly what you will get.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Do they know I viewed their DP?
                            </h3>
                            <p>
                                No, viewing or downloading a profile picture is
                                completely anonymous. The user is never
                                notified.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
