interface HeroProps {
    title: string;
    highlight: string;
    description: string;
}

export default function Hero({ title, highlight, description }: HeroProps) {
    return (
        <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-card border border-border rounded-full text-muted-foreground text-xs font-bold mb-8 shadow-sm tracking-wide uppercase">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                Instant High Quality Downloads
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-8 leading-[1.1] tracking-tight">
                {title} <span className="text-primary">{highlight}</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-light leading-relaxed">
                {description}
            </p>
        </section>
    );
}
