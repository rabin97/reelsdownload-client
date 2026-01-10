import { InstagramPost } from "@/lib/api";
import Image from "next/image";

interface ProfileToolProps {
    result: InstagramPost;
    handleDownload: (url: string, filename: string) => void;
}

export default function ProfileTool({
    result,
    handleDownload,
}: ProfileToolProps) {
    return (
        <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
            <div className="bg-card p-8 rounded-[32px] border border-border shadow-2xl flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="relative group">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 p-1 group-hover:border-primary/50 transition-all">
                        <Image
                            src={result.user_profile_pic}
                            alt="Profile"
                            width={160}
                            height={160}
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                    <button
                        onClick={() =>
                            handleDownload(
                                result.user_profile_pic,
                                `profile-${result.author}.jpg`
                            )
                        }
                        className="absolute -bottom-2 right-4 p-3 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-all"
                        title="Download DP"
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
                    </button>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                        @{result.author}
                        {result.is_verified && (
                            <svg
                                className="inline w-6 h-6 ml-2 text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                        )}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                        {result.user_full_name}
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                        <div className="px-4 py-2 bg-muted rounded-full">
                            <span className="font-bold text-foreground">
                                {result.like_count?.toLocaleString()}
                            </span>{" "}
                            <span className="text-sm text-muted-foreground">
                                Likes
                            </span>
                        </div>
                        <div className="px-4 py-2 bg-muted rounded-full">
                            <span className="font-bold text-foreground">
                                {result.view_count?.toLocaleString()}
                            </span>{" "}
                            <span className="text-sm text-muted-foreground">
                                Views
                            </span>
                        </div>
                        <div className="px-4 py-2 bg-muted rounded-full">
                            <span className="font-bold text-foreground">
                                {result.comment_count?.toLocaleString()}
                            </span>{" "}
                            <span className="text-sm text-muted-foreground">
                                Comments
                            </span>
                        </div>
                    </div>
                    <p className="text-foreground leading-relaxed italic opacity-80 mb-0">
                        "{result.caption || "No bio available"}"
                    </p>
                </div>
            </div>
        </div>
    );
}
