import { InstagramPost } from "@/lib/api";
import Image from "next/image";

interface PhotoToolProps {
    result: InstagramPost;
    handleDownload: (url: string, filename: string) => void;
}

export default function PhotoTool({ result, handleDownload }: PhotoToolProps) {
    const items = result.items || [];

    return (
        <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((item, index) => {
                    const isVideo = item.type === "video";
                    const mediaUrl = item.versions?.[0]?.url;
                    const thumbnail = item.thumbnail;

                    return (
                        <div
                            key={index}
                            className="bg-card p-3 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all group"
                        >
                            {/* Media Container */}
                            <div className="aspect-square bg-black rounded-2xl mb-4 overflow-hidden relative">
                                {/* Type Badge */}
                                <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-white text-xs font-bold border border-white/10">
                                    {isVideo ? "Video" : "Image"}
                                </div>

                                {isVideo ? (
                                    <video
                                        src={mediaUrl}
                                        poster={thumbnail}
                                        controls
                                        className="w-full h-full object-contain"
                                    >
                                        Your browser does not support the video
                                        tag.
                                    </video>
                                ) : (
                                    <Image
                                        src={thumbnail || mediaUrl || ""}
                                        alt={`Photo ${index + 1}`}
                                        width={1080}
                                        height={1080}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                )}
                            </div>

                            {/* Download Button */}
                            <button
                                onClick={() => {
                                    if (mediaUrl) {
                                        window.open(mediaUrl, "_blank");
                                    }
                                }}
                                className="w-full py-2.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
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
                    );
                })}
            </div>
        </div>
    );
}
