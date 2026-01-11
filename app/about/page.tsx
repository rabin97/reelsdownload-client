import { Info, Target, Users, Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - ReelsLoad Instagram Downloader",
    description:
        "Learn more about ReelsLoad, our mission to provide the best Instagram media extraction tools, and our commitment to user privacy.",
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-muted/30 border-b border-border">
                <div className="container mx-auto px-4 py-16 md:py-24 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-card border border-border rounded-full text-muted-foreground text-xs font-semibold mb-6 shadow-sm uppercase tracking-wider">
                        <Info className="w-3 h-3 text-primary" />
                        Our Mission & Story
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                        About <span className="text-primary">ReelsLoad</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        The ultimate destination for downloading Instagram
                        content with ease, speed, and privacy.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-12 max-w-3xl">
                <div className="bg-card border border-border rounded-2xl shadow-sm p-8 md:p-12 space-y-10">
                    {/* Who We Are */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-foreground">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Users className="w-5 h-5" />
                            </span>
                            Who We Are
                        </h2>
                        <div className="pl-14 text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                <span className="font-semibold text-foreground">
                                    ReelsLoad
                                </span>{" "}
                                is a free, web-based tool designed to help you
                                download your favorite Instagram content,
                                including Reels, Videos, Photos, and Profile
                                pictures. Our goal is to provide a seamless
                                experience for users who want to save
                                high-quality media for offline use or creative
                                projects.
                            </p>
                        </div>
                    </section>

                    <hr className="border-border/50" />

                    {/* What We Do */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-foreground">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Target className="w-5 h-5" />
                            </span>
                            Our Purpose
                        </h2>
                        <div className="pl-14 text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                We noticed that saving content from Instagram
                                for personal use was often complicated or
                                required untrustworthy software. We built
                                ReelsLoad to solve this problem by offering a
                                clean, fast, and secure alternative that works
                                directly in your browser.
                            </p>
                            <p>
                                Whether you're a content creator looking for
                                inspiration, a marketer doing research, or just
                                someone who wants to keep a personal archive of
                                memorable posts, ReelsLoad is here to help.
                            </p>
                        </div>
                    </section>

                    <hr className="border-border/50" />

                    {/* Why Choose Us */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-foreground">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Zap className="w-5 h-5" />
                            </span>
                            Why Choose ReelsLoad?
                        </h2>
                        <div className="pl-14 text-muted-foreground leading-relaxed">
                            <ul className="list-disc list-outside ml-4 space-y-3">
                                <li>
                                    <strong className="text-foreground">
                                        High Quality:
                                    </strong>{" "}
                                    Get the best possible resolution for all
                                    downloads.
                                </li>
                                <li>
                                    <strong className="text-foreground">
                                        No Login Required:
                                    </strong>{" "}
                                    We never ask for your Instagram credentials
                                    or personal data.
                                </li>
                                <li>
                                    <strong className="text-foreground">
                                        Blazing Fast:
                                    </strong>{" "}
                                    Optimized servers ensure instant extraction
                                    and download.
                                </li>
                                <li>
                                    <strong className="text-foreground">
                                        Completely Free:
                                    </strong>{" "}
                                    Access all our tools without any hidden fees
                                    or subscriptions.
                                </li>
                                <li>
                                    <strong className="text-foreground">
                                        Privacy First:
                                    </strong>{" "}
                                    We don't track your specific downloads or
                                    store your browsing history.
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* Closing Note */}
                <div className="mt-12 text-center text-muted-foreground">
                    <p className="max-w-xl mx-auto italic">
                        "Empowering users to save and enjoy digital content
                        responsibly and with absolute privacy."
                    </p>
                </div>
            </div>
        </div>
    );
}
