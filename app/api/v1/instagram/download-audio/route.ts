import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!backendUrl) {
        return NextResponse.json(
            { error: "Backend URL not configured" },
            { status: 500 }
        );
    }

    try {
        // Get the request body
        const body = await request.json();

        // Get the Turnstile token from headers
        const turnstileToken = request.headers.get("CF-Turnstile-Response");

        // Forward the request to the backend
        const response = await fetch(
            `${backendUrl}/api/v1/instagram/download-audio`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(turnstileToken && {
                        "CF-Turnstile-Response": turnstileToken,
                    }),
                },
                body: JSON.stringify(body),
            }
        );

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            return NextResponse.json(
                errorData || { error: "Failed to process audio download" },
                { status: response.status }
            );
        }

        // Return the response from the backend
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Audio download proxy error:", error);
        return NextResponse.json(
            { error: "Internal server error during audio download" },
            { status: 500 },
        );
    }
}

export async function GET(request: NextRequest) {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!backendUrl) {
        return NextResponse.json(
            { error: "Backend URL not configured" },
            { status: 500 },
        );
    }

    try {
        const searchParams = request.nextUrl.searchParams;
        const path = searchParams.get("path");

        if (!path) {
            return NextResponse.json(
                { error: "Path parameter is required" },
                { status: 400 },
            );
        }

        // Construct the full URL for the backend file
        // Ensure we don't duplicate slashes
        const normalizedPath = path.startsWith("/") ? path : `/${path}`;
        const fileUrl = `${backendUrl}${normalizedPath}`;

        const response = await fetch(fileUrl);

        if (!response.ok) {
            console.error(
                `Failed to fetch audio from backend. Status: ${response.status}`,
                await response.text(),
            );
            return NextResponse.json(
                { error: "Failed to fetch audio file" },
                { status: response.status },
            );
        }

        // Forward the response headers and body
        const headers = new Headers();
        const contentType = response.headers.get("content-type");
        const contentLength = response.headers.get("content-length");
        const contentDisposition = response.headers.get("content-disposition");

        if (contentType) headers.set("Content-Type", contentType);
        if (contentLength) headers.set("Content-Length", contentLength);
        if (contentDisposition)
            headers.set("Content-Disposition", contentDisposition);

        return new NextResponse(response.body, {
            status: 200,
            headers,
        });
    } catch (error) {
        console.error("Audio download GET proxy error:", error);
        return NextResponse.json(
            { error: "Internal server error during audio file download" },
            { status: 500 },
        );
    }
}
