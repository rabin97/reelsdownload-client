import { InstagramPost } from "@/lib/api";

interface AudioToolProps {
    result: InstagramPost;
    handleDownload: (url: string, filename: string) => void;
}

export default function AudioTool({ result, handleDownload }: AudioToolProps) {
    const audioVideoUrl =
        result.videoUrl || result.items?.[0]?.versions?.[0]?.url;

    return (
        <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-card p-8 rounded-[32px] border border-border shadow-2xl flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 shadow-inner">
                    <svg
                        className="w-12 h-12 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                        />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                    {result.caption?.split("\n")[0] || "Original Audio"}
                </h3>
                <p className="text-muted-foreground mb-8">
                    Original Audio extracted from Reel (@{result.author})
                </p>

                <button
                    onClick={() =>
                        handleDownload(
                            audioVideoUrl || "",
                            `audio-${result.code}.mp4`
                        )
                    }
                    className="w-full max-w-xs py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
                >
                    <svg
                        className="w-6 h-6"
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
                    Download Reel (Audio Included)
                </button>
            </div>
        </div>
    );
}
