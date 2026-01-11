import PostInsightsDownloader from "@/components/downloader/tools/post-insights-downloader";
import TypeNav from "@/components/downloader/TypeNav";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustIndicators from "@/components/home/TrustIndicators";

export const metadata = {
    title: "Instagram Post Insights - Engagement & Reach Analyzer",
    description:
        "Analyze Instagram post performance, view counts, like counts, and engagement rates for any public Instagram post or reel.",
};

export default function PostInsightsPage() {
    return (
        <main>
            <Hero
                title="Post Insights"
                highlight="Analytics"
                description="Get detailed reach and engagement data for any Instagram post or reel. Fast, accurate, and completely free."
            />

            <section className="max-w-5xl mx-auto px-4 pb-16 text-center">
                <TypeNav activeType="insights" />

                <PostInsightsDownloader />

                <TrustIndicators />
            </section>

            <HowItWorks />
            <Features />

            <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
                            Unlock Hidden{" "}
                            <span className="text-primary">
                                Engagement Data
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Stop guessing how your favorite creators are
                            performing. Our Insights tool brings you the hard
                            numbers behind any public Instagram post.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            From exact view counts to like-to-comment ratios,
                            get the data you need to understand viral trends and
                            content performance.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-[40px] p-8 border-2 border-primary/10 flex items-center justify-center">
                        <div className="space-y-6 w-full max-w-sm">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="h-12 bg-card rounded-2xl animate-pulse flex items-center px-4 gap-4"
                                >
                                    <div className="w-6 h-6 rounded-full bg-primary/20" />
                                    <div className="w-3/4 h-2 bg-muted rounded" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
