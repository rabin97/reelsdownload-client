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

            <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
                {/* Brand Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
                            Save Video Cover Art in{" "}
                            <span className="text-primary">
                                Full Definition
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            The cover image of a Reel or video is often the
                            perfect shot. But how do you save just that image?
                            Screenshots are messy, low quality, and often
                            include interface clutter.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            **ReelsLoad Thumbnail** offers the perfect solution.
                            We retrieve the full-resolution master image file
                            used by Instagram, giving you a clean, crisp artwork
                            file in seconds. No play buttons, no overlays, just
                            the pure visual.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {[17, 18, 19, 20].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold overflow-hidden"
                                    >
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${
                                                i * 3
                                            }`}
                                            alt="User"
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm font-semibold text-foreground">
                                Used by 2k+ Graphic Designers
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full -z-10 group-hover:bg-green-500/30 transition-colors"></div>
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
                                    I needed high-res covers for my blog posts.
                                    This tool is a lifesaver – it gives me the
                                    exact image file without any quality loss.
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 font-bold">
                                    SM
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">
                                        Sarah Miller
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Graphic Designer
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
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Full HD Clarity
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We pull the original image file directly from the
                            source, ensuring the highest possible resolution for
                            your cover art.
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
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Clean Image
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            No watermarks, no play buttons, and no UI elements.
                            You get a clean, professional image file ready for
                            any use.
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
                            One-Click Save
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Simply paste the link and save the image. Our tool
                            strips away the complexity so you can get your
                            assets instantly.
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
                            Thumbnail Tool FAQs
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Answering common questions about cover image
                            downloads.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> What is
                                the resolution of the thumbnail?
                            </div>
                            <p className="text-muted-foreground">
                                It depends on the original upload, but we always
                                fetch the highest available version, often up to
                                1080p for high-quality Reels.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> Can I
                                download thumbnails from private accounts?
                            </div>
                            <p className="text-muted-foreground">
                                No, the post must be public for our server to
                                access and retrieve the thumbnail image.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> Is it
                                free to use?
                            </div>
                            <p className="text-muted-foreground">
                                Yes, thumbnail downloading is completely free on
                                ReelsLoad. You can download as many as you need
                                for your projects.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> Which
                                formats are supported?
                            </div>
                            <p className="text-muted-foreground">
                                We typically provide thumbnails in high-quality
                                JPEG format, which works with all photo viewers
                                and editors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
