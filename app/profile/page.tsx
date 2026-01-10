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

            <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-muted-foreground">
                <div className="mb-16 text-left md:text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        View Instagram Profiles Anonymously
                    </h2>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        Want to check out a public Instagram profile but don't
                        want to log in or accidentally like a photo? ReelsLoad
                        is your solution. Our Anonymous Profile Viewer allows
                        you to browse public Instagram accounts, view their
                        posts, and explore their content without ever revealing
                        your identity.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            No Login Needed
                        </h3>
                        <p>
                            Forget about signing in. Simply enter the username,
                            and we'll show you the profile. Your own Instagram
                            account stays completely separate and safe.
                        </p>
                    </div>
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            100% Anonymous
                        </h3>
                        <p>
                            Since you aren't logged in, the user will never know
                            you viewed their profile. Browse with complete peace
                            of mind and total privacy.
                        </p>
                    </div>
                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Clean Interface
                        </h3>
                        <p>
                            We present the profile content in a neat, organized
                            grid, free from the distractions and infinite
                            scrolling algorithms of the app.
                        </p>
                    </div>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
                    <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                        Why use ReelsLoad Profile Viewer?
                    </h2>
                    <p className="text-center text-lg mb-8">
                        Whether you're doing market research on a competitor,
                        keeping up with a brand, or just want to browse casually
                        without being tracked, ReelsLoad is the perfect tool. We
                        give you information access without the social pressure.
                        It's fast, free, and puts you in control of your viewing
                        experience.
                    </p>
                </div>

                <div id="faq" className="border-t border-border pt-16">
                    <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 max-w-3xl mx-auto">
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Can the user see that I viewed their profile?
                            </h3>
                            <p>
                                No, absolutely not. Because you are not logged
                                in, there is no way for Instagram or the user to
                                trace the view back to you.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Does this work for private profiles?
                            </h3>
                            <p>
                                No, our tool respects Instagram's privacy
                                policies and can only display content from
                                public profiles.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Can I download content from the profile page?
                            </h3>
                            <p>
                                Yes, often you can use our other tools (Reels or
                                Video downloader) to save specific content you
                                find on the profile.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
