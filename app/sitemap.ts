import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://reelsload.com";

    const routes = [
        "",
        "/about",
        "/blog",
        "/blog/how-to-download-instagram-reels",
        "/contact",
        "/disclaimer",
        "/download-instagram-audio",
        "/download-instagram-caption",
        "/download-instagram-photos",
        "/download-instagram-videos",
        "/dp",
        "/instagram-reels-downloader",
        "/post-insights",
        "/privacy-policy",
        "/profile",
        "/terms-of-service",
        "/thumbnail",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : 0.8,
    }));
}
