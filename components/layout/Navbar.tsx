import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-2 hover:opacity-90 transition-opacity "
                >
                    <Image
                        src="/logo.svg"
                        alt="ReelsLoad Logo"
                        width={42}
                        height={42}
                        className="object-contain text-primary  "
                    />
                    <span className="text-xl font-bold text-foreground tracking-tight ">
                        Reels<span className="text-primary">Load</span>
                    </span>
                </Link>
                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex gap-8 text-sm font-medium">
                        <Link
                            href="/#how-it-works"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            How it works
                        </Link>
                        <Link
                            href="/#features"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="/#faq"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            FAQ
                        </Link>
                    </nav>
                    <div className="pl-6 border-l border-border md:block hidden">
                        <ThemeToggle />
                    </div>
                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}
