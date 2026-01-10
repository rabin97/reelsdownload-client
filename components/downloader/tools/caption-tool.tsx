import { InstagramPost } from "@/lib/api";

interface CaptionToolProps {
    result: InstagramPost;
}

export default function CaptionTool({ result }: CaptionToolProps) {
    return (
        <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Caption Content */}
            <div className="relative bg-card rounded-2xl border border-border/50 p-8 shadow-lg mb-6">
                <div className="absolute top-4 left-4 text-4xl text-primary/20">
                    "
                </div>
                <p className="text-foreground whitespace-pre-wrap text-lg leading-relaxed font-medium">
                    {result.caption || "No caption available"}
                </p>
                <div className="absolute bottom-4 right-4 text-4xl text-primary/20">
                    "
                </div>
            </div>

            {/* Copy Button */}
            <button
                onClick={() => {
                    navigator.clipboard.writeText(result.caption || "");
                    alert("Caption copied to clipboard!");
                }}
                className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg"
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
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                </svg>
                Copy Caption to Clipboard
            </button>
        </div>
    );
}
