import AudioDownloader from "@/components/downloader/tools/audio-downloader";
import TypeNav from "@/components/downloader/TypeNav";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustIndicators from "@/components/home/TrustIndicators";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Download Instagram Audio – Reels to MP3 Converter",
    description:
        "Extract and download high-quality MP3 audio from any Instagram Reel or Video. Free, fast, and easy to use.",
    alternates: {
        canonical: "/download-instagram-audio",
    },
    openGraph: {
        title: "Download Instagram Audio – Reels to MP3 Converter",
        description:
            "Extract and download high-quality MP3 audio from any Instagram Reel or Video. Free, fast, and easy to use.",
        url: "https://reelsload.com/download-instagram-audio",
        type: "website",
    },
};

export default function AudioPage() {
    return (
        <>
            <Hero
                title="Download Instagram Audio"
                highlight="MP3 Format"
                description="Extract and download audio from any Instagram Reel or Video in high quality MP3 format."
            />

            <section className="max-w-5xl mx-auto px-4 pb-16 text-center">
                <TypeNav activeType="audio" />
                <AudioDownloader />
                <TrustIndicators />
            </section>

            <HowItWorks />
            <Features />

            <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 space-y-12">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500">
                        Instagram Audio Downloader & MP3 Converter
                    </h1>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        Love a song you heard on a Reel? Want to save a motivational speech or a funny dialogue script? Our <strong>Instagram Audio Downloader</strong> allows you to extract pure MP3 audio from any Instagram video or Reel instantly.
                    </p>
                </div>

                <section className="bg-card p-8 rounded-3xl border border-border">
                    <h2 className="text-2xl font-bold mb-4">Why Extract Audio from Instagram?</h2>
                    <ul className="grid md:grid-cols-2 gap-6">
                        <li className="flex items-start gap-4">
                            <span className="text-3xl">🎵</span>
                            <div>
                                <h3 className="font-bold">Trending Music</h3>
                                <p className="text-sm text-muted-foreground">Save trending songs to use in your own creations.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-3xl">🎙️</span>
                            <div>
                                <h3 className="font-bold">Podcasts & Speeches</h3>
                                <p className="text-sm text-muted-foreground">Listen to long-form content offline like a podcast.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-3xl">✂️</span>
                            <div>
                                <h3 className="font-bold">Video Editing</h3>
                                <p className="text-sm text-muted-foreground">Get clean audio tracks for your video editing projects.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-3xl">🚀</span>
                            <div>
                                <h3 className="font-bold">Fast & Lightweight</h3>
                                <p className="text-sm text-muted-foreground">Audio files are much smaller than videos, saving you data.</p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">How to Convert Instagram Reels to MP3?</h2>
                    <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                        <ol className="list-decimal pl-6 space-y-4 text-lg">
                            <li>Find the Reel or Video with the audio you want.</li>
                            <li>Tap the three dots and copy the link.</li>
                            <li>Paste the link into <strong>ReelsLoad Audio Downloader</strong>.</li>
                            <li>Click <strong>Download</strong> and we will extract the MP3 for you instantly.</li>
                        </ol>
                    </div>
                </section>

                <section id="faq" className="pt-8 border-t border-border">
                    <h2 className="text-3xl font-bold mb-8 text-center">Audio Downloader FAQ</h2>
                    <div className="grid gap-4">
                        {[
                            {
                                q: "Is it free to download Instagram audio?",
                                a: "Yes, converting Instagram videos to MP3 is completely free on ReelsLoad."
                            },
                            {
                                q: "Can I download audio from Reels?",
                                a: "Yes! Our tool works perfectly with Instagram Reels, extracting the audio track as a standalone MP3 file."
                            },
                            {
                                q: "What is the bitrate of the MP3?",
                                a: "We extract the audio in the highest quality available from the source video, typically 128kbps or higher."
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
                    <p className="text-muted-foreground mb-4">Try our other free tools:</p>
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
