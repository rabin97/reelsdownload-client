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
            { status: 500 }
        );
    }
}
