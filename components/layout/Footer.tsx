export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t border-border bg-background mt-auto">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <img
                                src="/logo.svg"
                                alt="ReelsLoad"
                                className="w-8 h-8"
                            />
                            <span className="text-xl font-extrabold tracking-tighter text-foreground">
                                REELS<span className="text-primary">LOAD</span>
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            The ultimate premium tool for high-quality Instagram
                            media extraction.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-muted-foreground">
                        <a
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border text-center">
                    <p className="text-xs text-muted-foreground font-medium">
                        © {currentYear} ReelsLoad. This service is not
                        affiliated with Instagram or Meta.
                    </p>
                </div>
            </div>
        </footer>
    );
}
