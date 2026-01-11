import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "ReelsLoad - Best Instagram Reels & Video Downloader",
        template: "%s | ReelsLoad",
    },
    description:
        "Download Instagram Reels, Videos, Photos, Stories, and Profiles for free in high quality. No login required, fast and secure Instagram downloader.",
    keywords: [
        "Instagram Downloader",
        "Reels Downloader",
        "Download Instagram Reels",
        "Insta Video Downloader",
        "Save Instagram Photos",
        "ReelsLoad",
        "Instagram Story Downloader",
        "Download Instagram DP",
        "Instagram Caption Extractor",
    ],
    authors: [{ name: "ReelsLoad Team" }],
    creator: "ReelsLoad",
    publisher: "ReelsLoad",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://reelsload.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "ReelsLoad - Best Instagram Reels & Video Downloader",
        description:
            "Save any Instagram content instantly in HD. Fast, free, and secure Instagram downloader.",
        url: "https://reelsload.com",
        siteName: "ReelsLoad",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/og-image.webp",
                width: 1200,
                height: 630,
                alt: "ReelsLoad - Best Instagram Downloader",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ReelsLoad - Best Instagram Reels Downloader",
        description:
            "Download Instagram Reels, Videos, and Photos in high quality for free with ReelsLoad.",
        images: ["/og-image.webp"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    other: {
        "google-adsense-account": "ca-pub-9134772791608206",
    },
};

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebApplication",
                name: "ReelsLoad",
                alternateName: "ReelsLoad - Instagram Downloader",
                url: "https://reelsload.com",
                image: "https://reelsload.com/og-image.webp",
                description:
                    "Download Instagram Reels, Videos, Photos, Stories, and Profiles for free in high quality. No login required, fast and secure Instagram downloader.",
                applicationCategory: "MultimediaApplication",
                operatingSystem: "All",
                offers: {
                    "@type": "Offer",
                    price: "0.00",
                    priceCurrency: "USD",
                },
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    ratingCount: "1542",
                },
            },
            {
                "@type": "Organization",
                name: "ReelsLoad",
                url: "https://reelsload.com",
                logo: "https://reelsload.com/og-image.webp",
                sameAs: ["https://www.instagram.com/"],
            },
            {
                "@type": "WebSite",
                name: "ReelsLoad",
                url: "https://reelsload.com",
                description:
                    "The best platform to save Instagram content without login.",
                publisher: {
                    "@id": "https://reelsload.com/#organization",
                },
            },
        ],
    };

    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground flex flex-col`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </ThemeProvider>

                <Script
                    id="site-behaviour-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              (function() {
                var sbSiteSecret = "4a57dd25-a7b3-4a8c-bafb-05f503c608d7";
                window.sitebehaviourTrackingSecret = sbSiteSecret;
                var scriptElement = document.createElement('script');
                scriptElement.async = true;
                scriptElement.id = 'site-behaviour-script-v2';
                scriptElement.src = "https://sitebehaviour-cdn.fra1.cdn.digitaloceanspaces.com/index.min.js?sitebehaviour-secret=" + sbSiteSecret;
                document.head.appendChild(scriptElement); 
              })();
            `,
                    }}
                />
            </body>
        </html>
    );
}
