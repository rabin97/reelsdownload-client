import ReelsDownloader from "@/components/downloader/tools/reels-downloader";
import TypeNav from "@/components/downloader/TypeNav";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustIndicators from "@/components/home/TrustIndicators";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Instagram Reels Downloader – Download Reels Without Watermark",
    description:
        "Download Instagram reels in HD MP4 without watermark. Free, fast, and secure Instagram reels downloader online.",
    alternates: {
        canonical: "/instagram-reels-downloader",
    },
    openGraph: {
        title: "Instagram Reels Downloader – Download Reels Without Watermark",
        description:
            "Download Instagram reels in HD MP4 without watermark. Free, fast, and secure Instagram reels downloader online.",
        url: "https://reelsload.com/instagram-reels-downloader",
        type: "website",
    },
};

export default function ReelsPage() {
    return (
        <>
            <Hero
                title="Instagram Reels Downloader"
                highlight="No Watermark"
                description="Download Instagram Reels in HD Quality. Fast, Free & Secure."
            />

            <section className="max-w-5xl mx-auto px-4 pb-16 text-center">
                <TypeNav activeType="reels" />
                <ReelsDownloader />
                <TrustIndicators />
            </section>

            <HowItWorks />
            <Features />

            <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-foreground/90 space-y-12">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                        Instagram Reels Downloader – Download Reels in HD Quality
                    </h1>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        Welcome to the ultimate <strong>Instagram Reels Downloader</strong>. Whether you want to save a funny clip, a dance trend, or an inspiring tutorial, our tool makes it effortless to download Instagram Reels in the highest possible quality without any watermark.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        Instagram Reels are short, entertaining videos that have taken the world by storm. However, Instagram doesn't provide a built-in option to download them directly to your device for offline viewing. That's where <strong>ReelsLoad</strong> comes in. We provide a seamless, safe, and free solution to save your favorite content forever.
                    </p>
                </div>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Why Use Our Instagram Reels Downloader?</h2>
                    <ul className="grid md:grid-cols-2 gap-6">
                        <li className="bg-card p-6 rounded-xl border border-border">
                            <h3 className="font-semibold text-lg mb-2">No Watermark</h3>
                            <p className="text-muted-foreground">Get clean videos without the annoying TikTok-style watermark or username overlay.</p>
                        </li>
                        <li className="bg-card p-6 rounded-xl border border-border">
                            <h3 className="font-semibold text-lg mb-2">Original Quality (HD/4K)</h3>
                            <p className="text-muted-foreground">We fetch the original file from Instagram servers, ensuring you get the exact same quality as the upload.</p>
                        </li>
                        <li className="bg-card p-6 rounded-xl border border-border">
                            <h3 className="font-semibold text-lg mb-2">Completely Free</h3>
                            <p className="text-muted-foreground">Unlimited downloads with zero cost. No hidden fees or subscription required.</p>
                        </li>
                        <li className="bg-card p-6 rounded-xl border border-border">
                            <h3 className="font-semibold text-lg mb-2">No Login Required</h3>
                            <p className="text-muted-foreground">Keep your account safe. We never ask for your password or personal details.</p>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">How to Download Instagram Reels Step-by-Step</h2>
                    <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                        <ol className="list-decimal pl-6 space-y-4 text-lg">
                            <li>
                                <strong>Copy the Link:</strong> Open the Instagram app or website. Go to the Reel you want to download. Tap the three dots (menu) and select <strong>"Copy Link"</strong>.
                            </li>
                            <li>
                                <strong>Paste in ReelsLoad:</strong> Come back to <Link href="/instagram-reels-downloader" className="text-primary hover:underline">ReelsLoad.com</Link> and paste the link into the input box above.
                            </li>
                            <li>
                                <strong>Hit Download:</strong> Click the <strong>Download</strong> button. Our engine will process the video instantly.
                            </li>
                            <li>
                                <strong>Save Video:</strong> You will see a preview of the reel. Click the <strong>"Download MP4"</strong> button to save it to your gallery or computer.
                            </li>
                        </ol>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">Supported Devices</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                        Our web-based tool works perfectly on all modern devices and browsers:
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full font-medium">iPhone (iOS)</span>
                        <span className="px-4 py-2 bg-green-500/10 text-green-500 rounded-full font-medium">Android</span>
                        <span className="px-4 py-2 bg-purple-500/10 text-purple-500 rounded-full font-medium">Windows PC</span>
                        <span className="px-4 py-2 bg-gray-500/10 text-gray-500 rounded-full font-medium">Mac / iPad</span>
                    </div>
                </section>

                <section id="faq" className="pt-8 border-t border-border">
                    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="grid gap-4">
                        {[
                            {
                                q: "Is it free to download Instagram Reels?",
                                a: "Yes! ReelsLoad is 100% free. You can download as many reels as you like without paying a dime."
                            },
                            {
                                q: "Do you remove the watermark from Reels?",
                                a: "Absolutely. Our technology removes the Instagram watermark, giving you a clean video file perfect for reposting or editing."
                            },
                            {
                                q: "Can I download Reels from a private account?",
                                a: "No. Due to privacy restrictions, we can only download content from public Instagram accounts. If an account is private, you need to follow them to view their content, and our tool cannot bypass this permission."
                            },
                            {
                                q: "Where serve the downloaded videos saved?",
                                a: "On Mobile, they are saved to your 'Photos' or 'Gallery' app. On PC/Mac, they are usually saved to your 'Downloads' folder."
                            },
                            {
                                q: "Is my data safe?",
                                a: "Yes. We do not track your download history or store copies of the downloaded videos. Your usage is anonymous and secure."
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
                    <p className="text-muted-foreground mb-4">Looking for other tools?</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/download-instagram-videos" className="text-primary hover:underline">Download Instagram Videos</Link>
                        <span className="text-muted-foreground">•</span>
                        <Link href="/download-instagram-photos" className="text-primary hover:underline">Download Instagram Photos</Link>
                        <span className="text-muted-foreground">•</span>
                        <Link href="/download-instagram-audio" className="text-primary hover:underline">Download Instagram Audio</Link>
                    </div>
                </section>
            </section>
        </>
    );
}
