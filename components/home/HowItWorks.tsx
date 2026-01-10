"use client";

import { usePathname } from "next/navigation";

export default function HowItWorks() {
    const pathname = usePathname();

    const getSteps = () => {
        if (pathname?.includes("/photo")) {
            return {
                one: "Copy Photo Link",
                two: "Paste Photo URL",
                desc1: "Open the Instagram post and copy the link of the photo you want to save.",
                desc2: "Paste the copied photo link into the input box above.",
            };
        } else if (pathname?.includes("/video")) {
            return {
                one: "Copy Video Link",
                two: "Paste Video URL",
                desc1: "Open the Instagram video and copy the link from the share menu.",
                desc2: "Paste the video link into the downloader input field.",
            };
        } else if (pathname?.includes("/caption")) {
            return {
                one: "Copy Video Link",
                two: "Paste Video URL",
                desc1: "Open the Instagram video or post and copy the link from the share menu.",
                desc2: "Paste the video or post link into the downloader input field.",
            };
        } else if (pathname?.includes("/audio")) {
            return {
                one: "Copy Reel/Video Link",
                two: "Paste for Audio",
                desc1: "Find the Reel or Video containing the audio you want to extract.",
                desc2: "Paste the link to extract and download the audio track (MP3).",
            };
        } else if (pathname?.includes("/profile")) {
            return {
                one: "Copy Username/Link",
                two: "Paste & Search",
                desc1: "Copy the Instagram profile URL or just remember the username.",
                desc2: "Paste the profile link or username to view and download content.",
            };
        } else if (pathname?.includes("/dp")) {
            return {
                one: "Copy Username/Link",
                two: "Paste & Search",
                desc1: "Copy the Instagram profile URL or just remember the username.",
                desc2: "Paste the profile link or username to view and download content.",
            };
        }
        // Default (Reels)
        return {
            one: "Copy Reel Link",
            two: "Paste Reel URL",
            desc1: "Open Instagram and copy the link of the Reel you want to download.",
            desc2: "Paste the link into the input box and click Download.",
        };
    };

    const steps = getSteps();

    return (
        <section
            id="how-it-works"
            className="max-w-6xl mx-auto px-4 py-16 mb-12"
        >
            <div className="bg-card rounded-[40px] p-8 md:p-16 shadow-lg shadow-black/5 border border-border/50 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

                <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-foreground tracking-tight relative z-10">
                    Get Started in{" "}
                    <span className="text-primary">3 Easy Steps</span>
                </h3>

                <div className="grid md:grid-cols-3 gap-12 relative z-10">
                    <div className="relative text-center group">
                        <div className="w-20 h-20 bg-linear-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-primary/10">
                            <span className="text-3xl font-black text-primary">
                                1
                            </span>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-foreground">
                            {steps.one}
                        </h4>
                        <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-62.5 mx-auto">
                            {steps.desc1}
                        </p>
                    </div>

                    <div className="hidden md:block absolute top-10 left-1/3 w-1/3 h-0.5 bg-linear-to-r from-transparent via-border to-transparent -z-10 opacity-50"></div>

                    <div className="relative text-center group">
                        <div className="w-20 h-20 bg-linear-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-primary/10">
                            <span className="text-3xl font-black text-primary">
                                2
                            </span>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-foreground">
                            {steps.two}
                        </h4>
                        <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-62.5 mx-auto">
                            {steps.desc2}
                        </p>
                    </div>

                    <div className="hidden md:block absolute top-10 right-1/3 w-1/3 h-0.5 bg-linear-to-r from-transparent via-border to-transparent -z-10 opacity-50"></div>

                    <div className="relative text-center group">
                        <div className="w-20 h-20 bg-linear-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-primary/10">
                            <span className="text-3xl font-black text-primary">
                                3
                            </span>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-foreground">
                            Download File
                        </h4>
                        <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-62.5 mx-auto">
                            Save your high-quality media directly to your device
                            instantly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
