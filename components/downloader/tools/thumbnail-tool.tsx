import { InstagramPost } from "@/lib/api";
import Image from "next/image";

interface ThumbnailToolProps {
    result: InstagramPost;
    handleDownload: (url: string, filename: string) => void;
}

export default function ThumbnailTool({
    result,
    handleDownload,
}: ThumbnailToolProps) {
    // Collect all thumbnails from items
    const allThumbnails =
        result.items?.map((item) => item.thumbnail).filter(Boolean) || [];

    // Add main thumbnail if not already in items
    if (result.thumbnail && !allThumbnails.includes(result.thumbnail)) {
        allThumbnails.unshift(result.thumbnail);
    }

    return (
        <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Thumbnails Grid */}
            {allThumbnails.length > 0 ? (
                <div
                    className={
                        allThumbnails.length === 1 ? "flex justify-center" : ""
                    }
                >
                    <div
                        className={
                            allThumbnails.length === 1
                                ? "w-full max-w-md"
                                : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                        }
                    >
                        {allThumbnails.map((thumb, index) => (
                            <div
                                key={index}
                                className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all"
                            >
                                {/* Thumbnail Image */}
                                <div
                                    className={`relative bg-black overflow-hidden ${
                                        allThumbnails.length === 1
                                            ? "max-h-screen"
                                            : "aspect-square"
                                    }`}
                                >
                                    <Image
                                        src={thumb || ""}
                                        alt={`Thumbnail ${index + 1}`}
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Download Button */}
                                <div className="p-3">
                                    <button
                                        onClick={() => {
                                            if (thumb) {
                                                window.open(thumb, "_blank");
                                            }
                                        }}
                                        className="w-full py-2.5 bg-primary text-primary-foreground text-xs font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                            />
                                        </svg>
                                        Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center py-8 bg-muted/30 rounded-xl border border-border/50">
                    <p className="text-muted-foreground font-medium">
                        No thumbnails available
                    </p>
                </div>
            )}
        </div>
    );
}
