'use client';

export function CorePillars() {
    return (
        <section className="grid md:grid-cols-3 gap-px bg-border mb-32 border border-border">
            {/* Mission */}
            <div className="bg-background p-10 space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">01. Mission</span>
                <h3 className="text-xl font-heading uppercase tracking-tight">The Neural Edge</h3>
                <p className="text-xs font-medium leading-relaxed text-muted-foreground">
                    Our mission is to provide global brands with absolute transparency into the neural networks that govern modern commerce. We bridge the gap between human intent and machine comprehension.
                </p>
            </div>

            {/* Philosophy */}
            <div className="bg-background p-10 space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">02. Philosophy</span>
                <h3 className="text-xl font-heading uppercase tracking-tight">Technical Determinism</h3>
                <p className="text-xs font-medium leading-relaxed text-muted-foreground">
                    We operate on the principle of technical determinism. Every insight delivered by Kasparro must be reproducible, verifiable, and aligned with model-specific diagnostic outputs.
                </p>
            </div>

            {/* Vision */}
            <div className="bg-background p-10 space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">03. Vision</span>
                <h3 className="text-xl font-heading uppercase tracking-tight">Deterministic SEO</h3>
                <p className="text-xs font-medium leading-relaxed text-muted-foreground">
                    We envision a future where brand visibility is no longer a heuristic gamble. In the agentic era, visibility is an engineered outcome of high-quality, contexts-rich structured knowledge.
                </p>
            </div>
        </section>
    );
}
