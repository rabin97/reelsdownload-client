import Link from "next/link";

interface TypeNavProps {
    activeType:
    | "video"
    | "photo"
    | "reels"
    | "thumbnail"
    | "profile"
    | "dp"
    | "caption"
    | "audio"
    | "insights";
}

export default function TypeNav({ activeType }: TypeNavProps) {
    const navItems = [
        {
            type: "video",
            label: "Video",
            iconPath:
                "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
            href: "/download-instagram-videos",
        },
        {
            type: "photo",
            label: "Photo",
            iconPath:
                "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
            href: "/download-instagram-photos",
        },
        {
            type: "reels",
            label: "Reels",
            iconPath:
                "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z",
            href: "/instagram-reels-downloader",
        },
        {
            type: "insights",
            label: "Insights",
            iconPath:
                "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
            href: "/post-insights",
        },
        {
            type: "caption",
            label: "Caption",
            iconPath:
                "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
            href: "/download-instagram-caption",
        },
        {
            type: "audio",
            label: "Audio",
            iconPath:
                "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
            href: "/download-instagram-audio",
        },
        {
            type: "thumbnail",
            label: "Thumbnail",
            iconPath:
                "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
            href: "/thumbnail",
        },
        {
            type: "profile",
            label: "Profile",
            iconPath:
                "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
            href: "/profile",
        },
        // {
        //     type: "dp",
        //     label: "DP",
        //     iconPath:
        //         "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        //     href: "/dp",
        // },

    ];

    return (
        <div className="mb-4 md:mb-5 border-b border-border">
            <div className="flex overflow-x-auto overflow-y-hidden no-scrollbar pb-2 px-1 md:px-2 gap-2 md:gap-8 justify-start md:justify-center items-center">
                {navItems.map((item) => {
                    const isActive = activeType === item.type;
                    return (
                        <Link
                            key={item.type}
                            href={item.href}
                            className={`flex flex-col items-center gap-1.5 md:gap-2 py-2 px-1 min-w-fit transition-all relative group ${isActive
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            <div
                                className={`p-2 md:p-2.5 rounded-xl md:rounded-2xl transition-all ${isActive
                                    ? "bg-primary/10 shadow-sm shadow-primary/20"
                                    : "group-hover:bg-muted"
                                    }`}
                            >
                                <svg
                                    className="w-5 h-5 md:w-6 md:h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={isActive ? 2.5 : 2}
                                        d={item.iconPath}
                                    />
                                </svg>
                            </div>
                            <span className="text-[11px] font-extrabold uppercase tracking-widest">
                                {item.label}
                            </span>
                            {isActive && (
                                <div className="absolute -bottom-2.5 left-2 right-2 h-1 bg-primary rounded-t-full" />
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
