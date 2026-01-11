import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.cdninstagram.com",
            },
            {
                protocol: "https",
                hostname: "images.weserv.nl",
            },
        ],
    },
};

export default nextConfig;
