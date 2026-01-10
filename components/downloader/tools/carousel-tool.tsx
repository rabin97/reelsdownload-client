import { InstagramPost } from "@/lib/api";
import Image from "next/image";

interface CarouselToolProps {
    result: InstagramPost;
    handleDownload: (url: string, filename: string) => void;
}

export default function CarouselTool({
    result,
    handleDownload,
}: CarouselToolProps) {
    return (
        <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Carousel Header */}
            <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-border">
                        <Image
                            src={result.user_profile_pic}
                            alt={result.author}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-1.5 font-bold text-lg text-foreground">
                            @{result.author || "instagram_user"}
                            {result.is_verified && (
                                <svg
                                    className="w-4 h-4 text-blue-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                                </svg>
                            )}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                            {result.user_full_name} •{" "}
                            {result.carousel_media_count ||
                                result.items?.length ||
                                0}{" "}
                            items
                        </div>
                    </div>
                </div>

                {/* Caption */}
                <div className="bg-muted/30 p-4 rounded-2xl mb-6 border border-border/50">
                    <p className="text-foreground text-sm leading-relaxed line-clamp-4 italic">
                        "{result.caption || "No caption available"}"
                    </p>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 text-sm">
                    <div className="px-3 py-2 bg-muted/20 rounded-lg">
                        <span className="font-bold text-foreground">
                            {result.like_count?.toLocaleString()}
                        </span>{" "}
                        <span className="text-muted-foreground">Likes</span>
                    </div>
                    <div className="px-3 py-2 bg-muted/20 rounded-lg">
                        <span className="font-bold text-foreground">
                            {result.comment_count?.toLocaleString()}
                        </span>{" "}
                        <span className="text-muted-foreground">Comments</span>
                    </div>
                    {result.view_count !== undefined &&
                        result.view_count !== 0 && (
                            <div className="px-3 py-2 bg-muted/20 rounded-lg">
                                <span className="font-bold text-foreground">
                                    {result.view_count?.toLocaleString()}
                                </span>{" "}
                                <span className="text-muted-foreground">
                                    Views
                                </span>
                            </div>
                        )}
                </div>
            </div>

            {/* Carousel Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {result.items?.map((item, index) => {
                    const mediaUrl = item.versions?.[0]?.url;
                    const isVideo = item.type === "video";

                    return (
                        <div
                            key={index}
                            className="group relative bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all"
                        >
                            {/* Media Display */}
                            <div className="aspect-square bg-muted overflow-hidden relative">
                                {isVideo ? (
                                    <>
                                        <Image
                                            src={item.thumbnail || ""}
                                            alt={`Carousel item ${index + 1}`}
                                            width={800}
                                            height={800}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                                            <svg
                                                className="w-12 h-12 text-white opacity-80"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                            </svg>
                                        </div>
                                    </>
                                ) : (
                                    <Image
                                        src={item.thumbnail || mediaUrl || ""}
                                        alt={`Carousel item ${index + 1}`}
                                        width={800}
                                        height={800}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                )}
                            </div>

                            {/* Item Badge */}
                            <div className="absolute top-2 right-2 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-bold">
                                {isVideo ? "VIDEO" : "PHOTO"}
                            </div>

                            {/* Item Counter */}
                            <div className="absolute top-2 left-2 px-2.5 py-1 bg-primary/80 backdrop-blur-sm rounded-full text-white text-xs font-bold">
                                {index + 1}/
                                {result.carousel_media_count ||
                                    result.items?.length}
                            </div>

                            {/* Download Button */}
                            <div className="p-2">
                                <button
                                    onClick={() =>
                                        handleDownload(
                                            mediaUrl || "",
                                            `carousel-${index + 1}.${
                                                isVideo ? "mp4" : "jpg"
                                            }`
                                        )
                                    }
                                    className="w-full py-2 bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-1.5"
                                >
                                    <svg
                                        className="w-3.5 h-3.5"
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
                    );
                })}
            </div>

            {/* Download All Button */}
            {result.allUrls && result.allUrls.length > 0 && (
                <div className="flex justify-center">
                    <button
                        onClick={() =>
                            handleDownload(
                                result.allUrls?.[0] || "",
                                `carousel-complete-${result.code}.zip`
                            )
                        }
                        className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg flex items-center gap-2"
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
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        Download All (
                        {result.carousel_media_count || result.items?.length})
                    </button>
                </div>
            )}
        </div>
    );
}
