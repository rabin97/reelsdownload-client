import { InstagramPost } from "@/lib/api";

interface ReelsToolProps {
    result: InstagramPost;
    handleDownload: (url: string, filename: string) => void;
}

export default function ReelsTool({ result, handleDownload }: ReelsToolProps) {
    // Get duration in MM:SS format
    const formatDuration = (seconds: number) => {
        if (!seconds) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    // Get main video URL
    const videoUrl = result.videoUrl || result.items?.[0]?.versions?.[0]?.url;

    return (
        <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
                <div className="p-8 space-y-6">
                    {/* Caption Section */}
                    {result.caption && (
                        <div className="space-y-3">
                            <h3 className="text-lg font-bold text-foreground">
                                Caption
                            </h3>
                            <div className="relative bg-muted/20 rounded-2xl border border-border/50 p-6">
                                <div className="absolute top-4 left-4 text-4xl text-primary/10 font-serif leading-none">
                                    "
                                </div>
                                <p className="relative z-10 text-foreground text-base leading-relaxed whitespace-pre-wrap">
                                    {result.caption}
                                </p>
                                <div className="absolute bottom-4 right-4 text-4xl text-primary/10 font-serif leading-none">
                                    "
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {videoUrl && (
                    <div className="relative w-full bg-black">
                        {/* Video Player */}
                        <video
                            src={videoUrl}
                            controls
                            className="w-full h-auto max-h-150 object-contain"
                            controlsList="nodownload"
                        >
                            Your browser does not support the video tag.
                        </video>

                        {/* Duration Badge */}
                        <div className="absolute top-4 right-4 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full text-white text-sm font-bold border border-white/10">
                            {formatDuration(result.video_duration || 0)}
                        </div>
                    </div>
                )}

                <div className="p-8">
                    {/* Download Button */}
                    <button
                        onClick={() => {
                            if (videoUrl) {
                                window.open(videoUrl, "_blank");
                            }
                        }}
                        className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                        <svg
                            className="w-5 h-5"
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
                        Download Video
                    </button>
                </div>
            </div>
        </div>
    );
}
