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
    }
};

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground flex flex-col`}
            >
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
            </body>
        </html>
    );
}
