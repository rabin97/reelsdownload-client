import VideoDownloader from "@/components/downloader/tools/video-downloader";
import TypeNav from "@/components/downloader/TypeNav";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustIndicators from "@/components/home/TrustIndicators";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Download Instagram Videos Online – Free HD Video Downloader",
    description:
        "Download Instagram videos in MP4 format without watermark. Save reels, posts, and IGTV videos easily.",
    alternates: {
        canonical: "/download-instagram-videos",
    },
    openGraph: {
        title: "Download Instagram Videos Online – Free HD Video Downloader",
        description:
            "Download Instagram videos in MP4 format without watermark. Save reels, posts, and IGTV videos easily.",
        url: "https://reelsload.com/download-instagram-videos",
        type: "website",
    },
};

export default function VideoPage() {
    return (
        <>
            <Hero
                title="Download Instagram Videos"
                highlight="Fast & Easy"
                description="Save Instagram videos in MP4 format. High quality, no watermark, fast download."
            />

            <section className="max-w-5xl mx-auto px-4 pb-16 text-center">
                <TypeNav activeType="video" />
                <VideoDownloader />
                <TrustIndicators />
            </section>

            <HowItWorks />
            <Features />

            <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 space-y-12">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                        Download Instagram Videos Online in HD Quality
                    </h1>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        Looking for a reliable way to <strong>download Instagram videos</strong>? Whether it's a memorable IGTV episode, a friend's video post, or a viral clip, ReelsLoad provides the most robust solution to save Instagram videos in high-quality MP4 format directly to your device.
                    </p>
                </div>

                <section className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Why Choose ReelsLoad Video Downloader?</h2>
                        <p className="text-muted-foreground">
                            Instagram is full of amazing video content, but the app limits you to watching it online. Our tool breaks these barriers, giving you freedom to own the content you love.
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <span className="text-primary font-bold">✓</span> Supports Video Posts, TV, and Reels
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary font-bold">✓</span> 1080p, 2K, and 4K support (when available)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary font-bold">✓</span> Fast servers for instant downloading
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary font-bold">✓</span> completely Anonymous
                            </li>
                        </ul>
                    </div>
                    <div className="bg-card p-6 rounded-2xl border border-border shadow-lg">
                        <div className="text-center space-y-4">
                            <div className="text-4xl font-black text-primary">100%</div>
                            <div className="text-xl font-medium">Free & Secure</div>
                            <p className="text-sm text-muted-foreground">
                                We have optimized our engine to process video data efficiently, ensuring you get the smallest file size with the highest visual fidelity.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">Reels vs Posts vs IGTV: One Tool for All</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-card rounded-xl border border-border">
                            <h3 className="font-bold text-lg mb-2">Video Posts</h3>
                            <p className="text-sm text-muted-foreground">Download standard feed videos that appear on your timeline.</p>
                        </div>
                        <div className="p-6 bg-card rounded-xl border border-border">
                            <h3 className="font-bold text-lg mb-2">IGTV / Long Video</h3>
                            <p className="text-sm text-muted-foreground">Save long-form video content without duration limits.</p>
                        </div>
                        <div className="p-6 bg-card rounded-xl border border-border">
                            <h3 className="font-bold text-lg mb-2">Multi-Video Carousel</h3>
                            <p className="text-sm text-muted-foreground">We can detect and download all videos from a carousel post.</p>
                        </div>
                    </div>
                </section>

                <section id="faq" className="pt-8 border-t border-border">
                    <h2 className="text-3xl font-bold mb-8 text-center">Video Downloader FAQ</h2>
                    <div className="grid gap-4">
                        {[
                            {
                                q: "Can I download videos from private accounts?",
                                a: "No, we respect user privacy. ReelsLoad only allows you to download videos from public Instagram accounts."
                            },
                            {
                                q: "Does the downloaded video have sound?",
                                a: "Yes, absolutely. The downloaded MP4 file will include the original audio track from the video."
                            },
                            {
                                q: "Is it safe to use this downloader?",
                                a: "Yes, our service is secure. We don't store your history or require any personal information from you."
                            },
                            {
                                q: "What format are the videos saved in?",
                                a: "All videos are saved in the widely supported MP4 format, ensuring compatibility with iPhone, Android, Windows, and Mac media players."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-card p-6 rounded-xl border border-border">
                                <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                                <p className="text-muted-foreground">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="text-center pt-8">
                    <p className="text-muted-foreground mb-4">Explore more downloading options:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/instagram-reels-downloader" className="text-primary hover:underline">Instagram Reels Downloader</Link>
                        <span className="text-muted-foreground">•</span>
                        <Link href="/download-instagram-photos" className="text-primary hover:underline">Download Instagram Photos</Link>
                    </div>
                </section>
            </section>
        </>
    );
}
