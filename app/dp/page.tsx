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

            <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
                {/* Brand Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
                            Viewing Profile Pictures in{" "}
                            <span className="text-primary">True HD</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We've all struggled with that tiny circle on
                            Instagram. Someone requests to follow you, or you
                            see a brand update their logo, but you just can't
                            see the details.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            **ReelsLoad DP** solves this instantly. We bypass
                            the small thumbnail and fetch the high-definition
                            version of the profile photo. See every detail
                            clearly and save the image in its original size
                            without any compression or cropping.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {[25, 26, 27, 28].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold overflow-hidden"
                                    >
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${
                                                i * 9
                                            }`}
                                            alt="User"
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm font-semibold text-foreground">
                                Helped 8k+ users identify accounts
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full -z-10 group-hover:bg-red-500/30 transition-colors"></div>
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
                                    I always use this to see brand logos better.
                                    The quality is perfect, and I can actually
                                    save the image in high resolution.
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-600 font-bold">
                                    BR
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">
                                        Ben Ross
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Freelance Designer
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
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Deep Zoom
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Don't squint at tiny thumbnails. We fetch the master
                            image so you can zoom in and see every detail
                            clearly.
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
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Original HD
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We pull the 1080p source file when available. No
                            compression, no pixelation – just the pure image
                            file.
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
                            Instant View
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Simply paste the username or profile URL and the HD
                            image appears instantly. No login or verification
                            required.
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
                            Insta DP FAQs
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Answering common questions about profile picture
                            viewing.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> Can I
                                view profile pictures of private accounts?
                            </div>
                            <p className="text-muted-foreground">
                                Yes! Even for private accounts, the profile
                                picture itself is often publicly accessible via
                                our tool, unlike their actual posts or stories.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> Is the
                                quality really HD?
                            </div>
                            <p className="text-muted-foreground">
                                We fetch the highest resolution version
                                Instagram provides for profile photos. If the
                                original upload was HD, that is what you'll see.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> Do they
                                know I viewed their DP?
                            </div>
                            <p className="text-muted-foreground">
                                No, viewing or saving a profile picture using
                                ReelsLoad is completely anonymous. The user
                                receives no notification of your visit.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> What
                                file format is used?
                            </div>
                            <p className="text-muted-foreground">
                                DPs are typically saved in high-quality JPEG
                                format, ensuring compatibility with all devices
                                and image viewers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
