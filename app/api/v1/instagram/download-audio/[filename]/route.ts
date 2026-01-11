import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ filename: string }> }
) {
    const { filename } = await context.params;
    const backendUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!backendUrl) {
        return NextResponse.json(
            { error: "Backend URL not configured" },
            { status: 500 }
        );
    }

    try {
        // Construct the source URL from backend
        // Assuming the backend has the same path structure or similar
        const sourceUrl = `${backendUrl}/api/v1/instagram/download-audio/${filename}`;

        const response = await fetch(sourceUrl);

        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to fetch file from source" },
                { status: response.status }
            );
        }

        // Get the file content as a buffer
        const buffer = await response.arrayBuffer();

        // Return the file with proper headers for download
        return new NextResponse(buffer, {
            headers: {
                "Content-Type":
                    response.headers.get("Content-Type") || "audio/mpeg",
                "Content-Disposition": `attachment; filename="${filename}"`,
            },
        });
    } catch (error) {
        console.error("Download proxy error:", error);
        return NextResponse.json(
            { error: "Internal server error during download" },
            { status: 500 }
        );
    }
}
