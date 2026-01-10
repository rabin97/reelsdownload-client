import { EyeOff, Lock, MapPin, Shield } from "lucide-react";

export default function PrivacyPolicy() {
    const lastUpdated = "January 11, 2026";

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-muted/30 border-b border-border">
                <div className="container mx-auto px-4 py-16 md:py-24 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-card border border-border rounded-full text-muted-foreground text-xs font-semibold mb-6 shadow-sm uppercase tracking-wider">
                        <Shield className="w-3 h-3 text-primary" />
                        Privacy & Data Protection
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                        Privacy <span className="text-primary">Policy</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        We believe in transparency and user privacy. Learn how
                        we handle your data (spoiler: we don't collect much).
                    </p>
                    <p className="mt-4 text-xs font-medium text-muted-foreground/60 uppercase tracking-widest">
                        Last Updated: {lastUpdated}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-12 max-w-3xl">
                <div className="bg-card border border-border rounded-2xl shadow-sm p-8 md:p-12 space-y-10">
                    {/* Introduction */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-foreground">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Lock className="w-5 h-5" />
                            </span>
                            Introduction
                        </h2>
                        <div className="pl-14 text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                By using{" "}
                                <span className="font-semibold text-foreground">
                                    ReelsLoad
                                </span>{" "}
                                ("we", "our", or "us"), you acknowledge and
                                agree to the practices described in this Privacy
                                Policy.
                            </p>
                            <p>
                                We are committed to protecting your privacy and
                                ensuring transparency about how we operate. We
                                strictly adhere to a user-first approach where
                                functionality does not come at the cost of your
                                privacy.
                            </p>
                        </div>
                    </section>

                    <hr className="border-border/50" />

                    {/* Data Collection */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-foreground">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                <EyeOff className="w-5 h-5" />
                            </span>
                            Data Minimization
                        </h2>
                        <div className="pl-14 text-muted-foreground leading-relaxed">
                            <p>
                                We respect your anonymity. We{" "}
                                <strong className="text-foreground">
                                    do not collect any personal information
                                </strong>{" "}
                                from our users. You can use our service fully
                                without creating an account, providing an email,
                                or sharing any personal details.
                            </p>
                        </div>
                    </section>

                    <hr className="border-border/50" />

                    {/* Analytics */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-foreground">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                <MapPin className="w-5 h-5" />
                            </span>
                            Analytics & Geo-Location
                        </h2>
                        <div className="pl-14 text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                We use a privacy-focused, cookie-free analytics
                                solution to understand aggregate usage patterns.
                            </p>
                            <ul className="list-disc list-outside ml-4 space-y-2">
                                <li>
                                    <strong className="text-foreground">
                                        Purpose:
                                    </strong>{" "}
                                    To optimize our download service and server
                                    infrastructure speed.
                                </li>
                                <li>
                                    <strong className="text-foreground">
                                        Data Point:
                                    </strong>{" "}
                                    We only check general geo-location
                                    (country/region level).
                                </li>
                                <li>
                                    <strong className="text-foreground">
                                        Anonymity:
                                    </strong>{" "}
                                    This data is completely anonymized and
                                    cannot be used to identify you personally.
                                </li>
                            </ul>
                        </div>
                    </section>

                    <hr className="border-border/50" />

                    {/* Cookies */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-foreground">
                            Cookie Policy
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We operate a{" "}
                            <strong className="text-foreground">
                                no-cookie policy
                            </strong>{" "}
                            for our core services. We do not use cookies to
                            track your browsing history or behavior across other
                            websites.
                        </p>
                    </section>

                    <hr className="border-border/50" />

                    {/* Changes */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-foreground">
                            Changes to Policy
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may update our Privacy Policy from time to time
                            to reflect changes in our practices or for other
                            operational, legal, or regulatory reasons. You are
                            advised to review this page periodically for any
                            changes.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
