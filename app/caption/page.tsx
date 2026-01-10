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

            <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
                {/* Brand Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
                            Extract Every Word with{" "}
                            <span className="text-primary">Caption Pro</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Ever found a Reel with a perfectly written caption,
                            insightful quote, or a list of resources you wanted
                            to save? Copying text from the Instagram app is
                            notoriously impossible. **ReelsLoad Caption** fixes
                            this instantly.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our tool extracts the full text description and
                            every single hashtag from any public post. Paste the
                            link, and get clear, copyable text in high-fidelity.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {[9, 10, 11, 12].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold overflow-hidden"
                                    >
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${
                                                i * 15
                                            }`}
                                            alt="User"
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm font-semibold text-foreground">
                                Essential for Social Managers
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
                                    I use this daily to save research notes from
                                    educational Reels. It's a huge time saver
                                    compared to typing everything out!
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    AK
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">
                                        Alex Kim
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Strategy Lead
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
                                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Copy Text
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            No manual highlighting needed. Our interface
                            provides a dedicated "Copy" button for both the main
                            text and the hashtags separately.
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
                                    d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Extract Hashtags
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Specifically target tags. We clean the text and
                            provide a neatly grouped list of hashtags used in
                            the post for your own research.
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
                                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 11.37 9.198 15.298 6 19.718"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Preserve Emojis
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We keep all the formatting, line breaks, and emojis
                            intact, so the text you copy is 100% accurate to the
                            original.
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
                            Caption Tool FAQs
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Common questions about our caption extraction tool.
                        </p>
                    </div>
                    <div className="grid gap-4 max-w-4xl mx-auto">
                        {[
                            {
                                q: "Does this tool work on iOS and Android?",
                                a: "Yes, it works effectively on all mobile devices and desktop browsers.",
                            },
                            {
                                q: "Does it copy the comments too?",
                                a: "Currently, we focus on extracting the main caption of the post, but we are working on adding comment support soon.",
                            },
                            {
                                q: "Is it free?",
                                a: "Yes, the caption extraction tool is completely free to use.",
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
