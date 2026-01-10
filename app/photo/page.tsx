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

            <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
                {/* Brand Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
                            Saving Instagram Photos in{" "}
                            <span className="text-primary">Stunning HD</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We've all been there: you see a breathtaking photo
                            on Instagram, maybe a travel shot or an artistic
                            portrait, and you want to save it as your wallpaper.
                            Taking a screenshot lowers the quality and clutters
                            the image with UI elements.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            **ReelsLoad Photo** solves this by checking the
                            source URL and extracting the original
                            high-resolution image file for you. We pull the raw
                            1080px (or higher) version stored on Instagram's
                            servers, ensuring every pixel is preserved.
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
                                                i * 5
                                            }`}
                                            alt="User"
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm font-semibold text-foreground">
                                Loved by 5k+ Photographers
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full -z-10 group-hover:bg-pink-500/30 transition-colors"></div>
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
                                    The clarity of the downloaded photos is
                                    insane. No more blurry screenshots for my
                                    mood boards. It even downloads the whole
                                    carousel!
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 font-bold">
                                    LW
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">
                                        Liam Wong
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Travel Blogger
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
                            All Photos
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Don't limit yourself. Our tool detects multi-photo
                            posts (carousels) and lets you download every single
                            image in the set.
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
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Max Resolution
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We pull the highest resolution available. No
                            compression, no watermark. Just the original, crisp
                            JPEG file.
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
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Fast Extraction
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Our engine is optimized for speed. Extract and save
                            multiple photos in seconds, ready for your
                            collection.
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
                            Photo Tool FAQs
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Got questions? We've got answers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> Can I
                                download multiple photos from one post?
                            </div>
                            <p className="text-muted-foreground">
                                Yes! If the link leads to a carousel (multiple
                                photos), ReelsLoad will allow you to save them
                                all in their original quality.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> Will
                                the user know I saved their photo?
                            </div>
                            <p className="text-muted-foreground">
                                No, the process is completely anonymous. The
                                user is not notified when you download their
                                photo using our tool.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> Do you
                                support private photos?
                            </div>
                            <p className="text-muted-foreground">
                                Currently, we only support downloading photos
                                from public Instagram accounts to respect user
                                privacy settings.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors">
                            <div className="font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="text-primary">Q:</span> What is
                                the file format of the downloads?
                            </div>
                            <p className="text-muted-foreground">
                                Most photos are saved in high-quality JPEG
                                format, which is compatible with all devices and
                                operating systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
