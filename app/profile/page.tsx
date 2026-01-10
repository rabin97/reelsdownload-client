import DownloadForm from "@/components/downloader/DownloadForm";
import TypeNav from "@/components/downloader/TypeNav";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustIndicators from "@/components/home/TrustIndicators";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Instagram Profile Viewer",
    description:
        "View and download Instagram profile content anonymously. Access public profile data without login for free.",
    alternates: {
        canonical: "/profile",
    },
};

export default function ProfilePage() {
    return (
        <>
            <Hero
                title="View Instagram Profile"
                highlight="Anonymously"
                description="View and download Instagram profile content without logging in."
            />

            <section className="max-w-5xl mx-auto px-4 pb-16 text-center">
                <TypeNav activeType="profile" />
                <DownloadForm
                    placeholder="Paste Username or Profile URL..."
                    type="profile"
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
                            Explore Profiles with{" "}
                            <span className="text-primary">Total Privacy</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Want to check out a public Instagram profile but
                            don't want to log in or accidentally like a photo?
                            ReelsLoad is your solution. Our Anonymous Profile
                            Viewer allows you to browse public accounts without
                            ever revealing your identity.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            **ReelsLoad Profile** gives you a sandbox
                            environment to view posts, bios, and follower
                            summaries without the social pressure or tracking
                            algorithms. It's the ultimate tool for researchers,
                            marketers, and casual browsers who value their
                            anonymity.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {[21, 22, 23, 24].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold overflow-hidden"
                                    >
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${
                                                i * 7
                                            }`}
                                            alt="User"
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm font-semibold text-foreground">
                                Trusted by 4k+ Analysts
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full -z-10 group-hover:bg-purple-500/30 transition-colors"></div>
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
                                    ReelsLoad lets me do competitive research
                                    without having to log in to my personal
                                    account. It's fast, neat, and truly
                                    anonymous.
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600 font-bold">
                                    AK
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">
                                        Alex Kim
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Marketing Analyst
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
                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Strict Anonymity
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            No login required. We don't track your activity or
                            your identity. Browse any public profile with zero
                            digital footprint.
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
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Original View
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We pull the profile data directly from source,
                            displaying the most current posts and bios in a
                            neat, ad-free grid.
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
                            Instant Access
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Simply enter a username and browse. No app
                            downloads, no complicated setups. Access profile
                            content from any device.
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
                            Profile Tool FAQs
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Answering your questions about anonymous profile
                            browsing.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> Can the
                                user see that I viewed their profile?
                            </div>
                            <p className="text-muted-foreground">
                                No, absolutely not. Because you are not logged
                                in, there is no way for Instagram or the user to
                                trace the view back to you. Your anonymity is
                                guaranteed.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> Does
                                this work for private profiles?
                            </div>
                            <p className="text-muted-foreground">
                                No, our tool respects Instagram's privacy
                                policies and can only display content from
                                public profiles that are accessible to the
                                general web.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> Can I
                                download content from the profile?
                            </div>
                            <p className="text-muted-foreground">
                                Yes! Once you find a post or Reel you like on
                                our profile viewer, you can use our dedicated
                                download tools to save that specific content.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> Is
                                there a limit to how many profiles I can view?
                            </div>
                            <p className="text-muted-foreground">
                                No, there are no limits. You can search and view
                                as many public Instagram profiles as you want,
                                all for free.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
