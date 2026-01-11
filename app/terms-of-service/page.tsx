import { AlertCircle, Copyright, FileText, Scale } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service - ReelsLoad Usage Guidelines",
    description:
        "Terms and conditions for using ReelsLoad services. Please read these terms carefully before using our platform.",
    alternates: {
        canonical: "/terms-of-service",
    },
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-muted/30 border-b border-border">
                <div className="container mx-auto px-4 py-16 md:py-24 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-card border border-border rounded-full text-muted-foreground text-xs font-semibold mb-6 shadow-sm uppercase tracking-wider">
                        <Scale className="w-3 h-3 text-primary" />
                        Legal Agreement
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                        Terms of <span className="text-primary">Service</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Please read these terms carefully before using our
                        service. Using ReelsLoad means you agree to these rules.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-12 max-w-3xl">
                <div className="bg-card border border-border rounded-2xl shadow-sm p-8 md:p-12 space-y-10">
                    {/* Acceptance */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-foreground">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                <FileText className="w-5 h-5" />
                            </span>
                            1. Acceptance of Terms
                        </h2>
                        <div className="pl-14 text-muted-foreground leading-relaxed">
                            <p>
                                By accessing and using this website, you accept
                                and agree to be bound by the terms and provision
                                of this agreement. If you do not agree to abide
                                by these terms, please do not use this service.
                            </p>
                        </div>
                    </section>

                    <hr className="border-border/50" />

                    {/* Usage */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-foreground">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                <AlertCircle className="w-5 h-5" />
                            </span>
                            2. Use of Service
                        </h2>
                        <div className="pl-14 text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                This service is provided "as is" and is intended
                                for{" "}
                                <strong className="text-foreground">
                                    personal use only
                                </strong>
                                .
                            </p>
                            <ul className="list-disc leading-relaxed space-y-2 ml-4">
                                <li>
                                    You agree not to use this service for any
                                    unlawful purpose.
                                </li>
                                <li>
                                    You agree not to use this service in any way
                                    that could damage, disable, overburden, or
                                    impair the service.
                                </li>
                                <li>
                                    You are solely responsible for how you use
                                    the downloaded content.
                                </li>
                            </ul>
                        </div>
                    </section>

                    <hr className="border-border/50" />

                    {/* IP Rights */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-foreground">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Copyright className="w-5 h-5" />
                            </span>
                            3. Intellectual Property
                        </h2>
                        <div className="pl-14 text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                ReelsLoad is a tool for facilitating the
                                download of public media. We do not claim
                                ownership of any content downloaded through our
                                service.
                            </p>
                            <p>
                                All rights to the content belong to their
                                respective owners. Users are responsible for
                                respecting the intellectual property rights of
                                content creators. We strongly discourage
                                copyright infringement.
                            </p>
                        </div>
                    </section>

                    <hr className="border-border/50" />

                    {/* Disclaimer */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-foreground">
                            4. Disclaimer
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We are not affiliated, associated, authorized,
                            endorsed by, or in any way officially connected with
                            Instagram, Meta, or any of their subsidiaries or
                            affiliates. The names Instagram and Meta as well as
                            related names, marks, emblems and images are
                            registered trademarks of their respective owners.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
