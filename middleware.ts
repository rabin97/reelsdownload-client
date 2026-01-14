import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the request is for the API
    if (pathname.startsWith("/api/")) {
        // Exclude specific paths that are handled by local Route Handlers
        // The download-audio route is already a proxy handler in the app, so we let Next.js handle it
        if (pathname.includes("/download-audio")) {
            return NextResponse.next();
        }

        // For all other API requests, rewrite to the backend URL
        // This hides the backend URL from the browser
        const backendUrl = process.env.NEXT_PUBLIC_API_URL;
        if (backendUrl) {
            // Construct the target URL
            // request.nextUrl.pathname includes /api/..., so we append it to backendUrl
            // But we need to be careful if backendUrl already has /api or not.
            // Typically backendUrl is the host.
            // In .env.local it is "https://...app" (no trailing slash)

            const targetUrl = new URL(pathname, backendUrl);
            targetUrl.search = request.nextUrl.search;

            return NextResponse.rewrite(targetUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/api/:path*",
};
