import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const toolGroups = [
        {
            title: "Downloaders",
            links: [
                { label: "Reels", href: "/" },
                { label: "Video", href: "/video" },
                { label: "Photo", href: "/photo" },
                { label: "Audio", href: "/audio" },
            ],
        },
        {
            title: "More Tools",
            links: [
                { label: "Thumbnail", href: "/thumbnail" },
                { label: "Profile", href: "/profile" },
                { label: "DP / Avatar", href: "/dp" },
                { label: "Caption", href: "/caption" },
            ],
        },
        {
            title: "Popular",
            links: [
                { label: "Instagram Downloader", href: "/" },
                { label: "Instagram Reels Downloader", href: "/" },
                {
                    label: "Instagram Profile Picture Downloader",
                    href: "/dp",
                },
                { label: "Instagram Photo Downloader", href: "/photo" },
                { label: "Instagram Profile Downloader", href: "/profile" },
                { label: "Instagram to MP3", href: "/audio" },
                { label: "instagram", href: "/" },
            ],
        },
    ];

    const supportLinks = [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Contact Us", href: "/contact" },
    ];

    return (
        <footer className="relative mt-20 border-t border-border bg-card/30 backdrop-blur-sm">
            {/* Design Element - subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3 transition-opacity hover:opacity-90"
                        >
                            <Image
                                src="/logo.svg"
                                alt="ReelsLoad Logo"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                            <span className="text-2xl font-black tracking-tighter text-foreground">
                                REELS<span className="text-primary">LOAD</span>
                            </span>
                        </Link>
                        <div className="space-y-4">
                            <p className="text-sm leading-relaxed text-muted-foreground max-w-[280px]">
                                The professional standard for Instagram media
                                extraction. Built for speed, privacy, and
                                high-fidelity output.
                            </p>
                            <div className="flex items-center gap-3 px-3 py-1.5 bg-background/50 rounded-full w-fit border border-border/50">
                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">
                                    Systems Operational
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Tool Groups */}
                    {toolGroups.map((group, idx) => (
                        <div
                            key={group.title}
                            className={`space-y-6 ${
                                idx === 2 ? "lg:col-span-3" : "lg:col-span-2"
                            }`}
                        >
                            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40">
                                {group.title}
                            </h4>
                            <ul className="space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-all flex items-center group whitespace-nowrap"
                                        >
                                            <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100 text-primary shrink-0">
                                                →
                                            </span>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Support & Legal */}
                    <div className="lg:col-span-1 space-y-6">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {supportLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-all whitespace-nowrap"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] md:text-xs text-muted-foreground font-medium text-center md:text-left">
                        © {currentYear} ReelsLoad. This project is for
                        educational purposes and is not affiliated with or
                        endorsed by Instagram or Meta.
                    </p>
                    <div className="flex gap-4">
                        <div className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold text-primary uppercase tracking-widest">
                            v1.0.4 Premium
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
