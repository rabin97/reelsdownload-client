import PhotoDownloader from "@/components/downloader/tools/photo-downloader";
import TypeNav from "@/components/downloader/TypeNav";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustIndicators from "@/components/home/TrustIndicators";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Download Instagram Photos – Save HD Images Online",
    description:
        "Download Instagram photos in full HD quality for free. Save profile photos, posts, and carousels instantly.",
    alternates: {
        canonical: "/download-instagram-photos",
    },
    openGraph: {
        title: "Download Instagram Photos – Save HD Images Online",
        description:
            "Download Instagram photos in full HD quality for free. Save profile photos, posts, and carousels instantly.",
        url: "https://reelsload.com/download-instagram-photos",
        type: "website",
    },
};

export default function PhotoPage() {
    return (
        <>
            <Hero
                title="Download Instagram Photos"
                highlight="in High Quality"
                description="Save Instagram photos in their original resolution. No watermark, instant download."
            />

            <section className="max-w-5xl mx-auto px-4 pb-16 text-center">
                <TypeNav activeType="photo" />
                <PhotoDownloader />
                <TrustIndicators />
            </section>

            <HowItWorks />
            <Features />

            <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 space-y-12">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                        Download Instagram Photos in Full HD Quality
                    </h1>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        <strong>ReelsLoad Photo Downloader</strong> helps you save any Instagram photo in its original high quality. Whether it's a stunning landscape shot, a celebrity portrait, or an infographic you want to keep, our tool ensures you get the crystal-clear image file directly from Instagram's servers.
                    </p>
                </div>

                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-card p-8 rounded-3xl border border-border">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-2xl">📸</span> Save Full Resolution
                        </h3>
                        <p className="text-muted-foreground">
                            Don't rely on screenshots that ruin the quality. Screenshots capture your screen's resolution, not the image's fasts through. Our downloader extracts the original uploaded file, typically 1080x1080 or higher.
                        </p>
                    </div>
                    <div className="bg-card p-8 rounded-3xl border border-border">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-2xl">🖼️</span> Carousel Support
                        </h3>
                        <p className="text-muted-foreground">
                            See a post with multiple swipes? No problem. Paste the link, and we will list every single photo (and video) in that album so you can download the specific ones you want or grab them all.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">How to Save Instagram Photos?</h2>
                    <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                        <ol className="list-decimal pl-6 space-y-4 text-lg">
                            <li>Find the Instagram post with the photo you love.</li>
                            <li>Tap the three dots (top right of post) and select <strong>"Copy Link"</strong>.</li>
                            <li>Paste the link into the box above on <strong>ReelsLoad</strong>.</li>
                            <li>Click <strong>Download</strong> and choose the image size you prefer.</li>
                        </ol>
                    </div>
                </section>

                <section id="faq" className="pt-8 border-t border-border">
                    <h2 className="text-3xl font-bold mb-8 text-center">Photo Downloader FAQ</h2>
                    <div className="grid gap-4">
                        {[
                            {
                                q: "Is it free to download Instagram photos?",
                                a: "Yes, our Instagram Photo Downloader is completely free to use with no limits."
                            },
                            {
                                q: "Can I download photos from a private account?",
                                a: "No. The account must be public for our server to access and fetch the photo link."
                            },
                            {
                                q: "What is the quality of the downloaded images?",
                                a: "We fetch the highest quality available, which is usually 1080px width or higher (Original Upload Quality)."
                            },
                            {
                                q: "Can I download profile pictures?",
                                a: "Yes! While this tool is for posts, you can use our dedicated 'Profile' tool to download high-resolution DP/Profile Pictures."
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
                    <p className="text-muted-foreground mb-4">Check out our other tools:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/instagram-reels-downloader" className="text-primary hover:underline">Download Instagram Reels</Link>
                        <span className="text-muted-foreground">•</span>
                        <Link href="/download-instagram-videos" className="text-primary hover:underline">Download Instagram Videos</Link>
                    </div>
                </section>
            </section>
        </>
    );
}
