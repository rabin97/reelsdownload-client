import DownloadForm from "@/components/downloader/DownloadForm";
import TypeNav from "@/components/downloader/TypeNav";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustIndicators from "@/components/home/TrustIndicators";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Instagram Caption Extractor",
    description:
        "Extract and copy Instagram captions from posts and reels. Copy hashtags and text instantly with our free tool.",
    alternates: {
        canonical: "/caption",
    },
};

export default function CaptionPage() {
    return (
        <>
            <Hero
                title="Download Instagram Captions"
                highlight="Copy in Seconds"
                description="Extract and copy captions from any Instagram post, reel, or video easily and for free."
            />

            <section className="max-w-5xl mx-auto px-4 pb-16 text-center">
                <TypeNav activeType="caption" />
                <DownloadForm
                    placeholder="Paste Instagram URL here..."
                    type="caption"
                />
                <TrustIndicators />
            </section>

            <HowItWorks />
            <Features />

            <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-muted-foreground">
                <div className="mb-16 text-left md:text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Copy Instagram Captions & Hashtags instantly
                    </h2>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        Ever tried to copy a funny caption or a useful list of
                        hashtags from the Instagram app? You can't. It's
                        frustrating. ReelsLoad's Instagram Caption Extractor
                        solves this annoying problem. We extract the text from
                        any post, Reel, or video so you can copy, paste, and
                        save it with a single click.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Copy Text
                        </h3>
                        <p>
                            Get the full caption text exactly as it appears. No
                            need to manually type it out from a screenshot
                            anymore.
                        </p>
                    </div>
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Extract Hashtags
                        </h3>
                        <p>
                            Smartly separate and copy hashtags. Great for social
                            media managers looking to analyze or reuse winning
                            tag strategies.
                        </p>
                    </div>
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Preserve Emojis
                        </h3>
                        <p>
                            We keep all the formatting, line breaks, and emojis
                            intact, so the text you copy is 100% accurate to the
                            original.
                        </p>
                    </div>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
                    <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                        Why use ReelsLoad Caption Tool?
                    </h2>
                    <p className="text-center text-lg mb-8">
                        ReelsLoad is the secret weapon for savvy Instagram
                        users. Whether you want to quote a friend, save a recipe
                        found in a caption, or study the hashtag strategy of a
                        viral post, we make the text accessible. Stop typing and
                        start copying.
                    </p>
                </div>

                <div id="faq" className="border-t border-border pt-16">
                    <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 max-w-3xl mx-auto">
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Does this tool work on iOS and Android?
                            </h3>
                            <p>
                                Yes, it works effectively on all mobile devices
                                and desktop browsers.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Does it copy the comments too?
                            </h3>
                            <p>
                                Currently, we focus on extracting the main
                                caption of the post, but we are working on
                                adding comment support soon.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Is it free?
                            </h3>
                            <p>
                                Yes, the caption extraction tool is completely
                                free to use.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
