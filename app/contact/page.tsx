// app/contact/page.tsx
import { Clock, Mail, MessageSquare } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - Support & Inquiries",
    description:
        "Get in touch with the ReelsLoad team for support, feedback, or business inquiries. We are here to help you.",
    alternates: {
        canonical: "/contact",
    },
};

export default function Contact() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-muted/30 border-b border-border">
                <div className="container mx-auto px-4 py-16 md:py-24 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-card border border-border rounded-full text-muted-foreground text-xs font-semibold mb-6 shadow-sm uppercase tracking-wider">
                        <MessageSquare className="w-3 h-3 text-primary" />
                        Get in Touch
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                        Contact <span className="text-primary">Us</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        We value your feedback and are here to assist you.
                        Whether you have a question, suggestion, or just want to
                        say hi, we're all ears.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-12 -mt-10 mb-12 relative z-10">
                <div className="max-w-xl mx-auto">
                    <div className="bg-card border border-border rounded-3xl shadow-lg p-8 md:p-12 text-center animate-in fade-in zoom-in duration-500">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                            <Mail className="w-10 h-10 text-primary" />
                        </div>

                        <h2 className="text-2xl font-bold text-foreground mb-4">
                            Email Support
                        </h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            The best way to reach us is via email. We typically
                            respond within 24-48 hours.
                        </p>

                        <a
                            href="mailto:support@reelsload.com"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all transform active:scale-95 shadow-lg shadow-primary/20 text-lg w-full md:w-auto"
                        >
                            <Mail className="w-5 h-5" />
                            support@reelsload.com
                        </a>

                        <div className="mt-10 pt-8 border-t border-border flex flex-col items-center gap-3">
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground/80">
                                <Clock className="w-4 h-4" />
                                <span>Response Time: 24 - 48 Hours</span>
                            </div>
                            <p className="text-xs text-muted-foreground/60 max-w-xs">
                                Please include as much detail as possible in
                                your message to help us assist you better.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
