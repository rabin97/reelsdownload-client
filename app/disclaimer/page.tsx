import { AlertTriangle, Copyright, Scale, ShieldAlert } from "lucide-react";

export default function DisclaimerPage() {
    const lastUpdated = "January 11, 2026";

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-muted/30 border-b border-border">
                <div className="container mx-auto px-4 py-16 md:py-24 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-card border border-border rounded-full text-muted-foreground text-xs font-semibold mb-6 shadow-sm uppercase tracking-wider">
                        <AlertTriangle className="w-3 h-3 text-primary" />
                        Legal Information
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                        Legal <span className="text-primary">Disclaimer</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Please read this disclaimer carefully before using our
                        services.
                    </p>
                    <p className="mt-4 text-xs font-medium text-muted-foreground/60 uppercase tracking-widest">
                        Last Updated: {lastUpdated}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-12 max-w-3xl">
                <div className="bg-card border border-border rounded-2xl shadow-sm p-8 md:p-12 space-y-10">
                    {/* Affiliation */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-foreground">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                <ShieldAlert className="w-5 h-5" />
                            </span>
                            No Affiliation
                        </h2>
                        <div className="pl-14 text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                <span className="font-semibold text-foreground">
                                    ReelsLoad
                                </span>{" "}
                                is an independent service and is{" "}
                                <strong className="text-foreground underline underline-offset-4 decoration-primary/40">
                                    not affiliated, associated, authorized,
                                    endorsed by, or in any way officially
                                    connected
                                </strong>{" "}
                                with Instagram, Meta Platforms, Inc., or any of
                                its subsidiaries or its affiliates.
                            </p>
                            <p>
                                The official Instagram website can be found at
                                https://www.instagram.com. The name "Instagram"
                                as well as related names, marks, emblems, and
                                images are registered trademarks of their
                                respective owners.
                            </p>
                        </div>
                    </section>

                    <hr className="border-border/50" />

                    {/* Intellectual Property */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-foreground">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Copyright className="w-5 h-5" />
                            </span>
                            Intellectual Property
                        </h2>
                        <div className="pl-14 text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                ReelsLoad provides a tool for users to download
                                content that is publicly available on Instagram.
                                We do not host any of the downloaded content on
                                our servers. All media is downloaded directly
                                from Instagram CDN servers to the user's device.
                            </p>
                            <p>
                                We strongly encourage users to respect the
                                intellectual property rights of content
                                creators. You should only download media for
                                personal use and ensure you have the necessary
                                permissions before sharing or repurposing any
                                downloaded content.
                            </p>
                        </div>
                    </section>

                    <hr className="border-border/50" />

                    {/* Liability */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-foreground">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Scale className="w-5 h-5" />
                            </span>
                            Limitation of Liability
                        </h2>
                        <div className="pl-14 text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                The information and tools provided by ReelsLoad
                                are for educational and personal use only. The
                                service is provided on an "as is" and "as
                                available" basis without any warranties.
                            </p>
                            <p>
                                ReelsLoad will not be liable for any misuse of
                                the tools provided or for any copyright
                                infringement committed by the users. By using
                                this website, you agree that you are solely
                                responsible for your actions and the content you
                                download.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mt-12 p-6 bg-muted/50 rounded-xl border border-border/50 text-sm text-muted-foreground italic text-center">
                    If you have any legal concerns or copyright claims, please
                    contact us through our official contact page.
                </div>
            </div>
        </div>
    );
}
