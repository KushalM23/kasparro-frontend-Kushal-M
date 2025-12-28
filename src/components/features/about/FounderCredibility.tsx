'use client';

export function FounderCredibility() {
    return (
        <section className="mb-32 grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
                <h2 className="text-3xl font-heading uppercase tracking-tighter">Engineered with <span className="text-secondary tracking-normal">Precision</span></h2>
                <div className="space-y-4 text-sm font-medium leading-relaxed text-muted-foreground">
                    <p>
                        Kasparro was founded by a collective of systems engineers and search architects who identified the inevitable transition from crawl-based indexing to neural reasoning.
                    </p>
                    <p>
                        Our expertise in large-scale data infrastructure and machine learning allows us to dismantle the "black box" of AI discovery. We don't guess how LLMs perceive brands; we build deterministic testing frameworks to audit them.
                    </p>
                    <p>
                        The platform represents thousands of hours of model benchmarking and technical validation, ensuring that every recommendation is rooted in empirical evidence and model-specific logic.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-muted/30 border border-border p-8 flex flex-col justify-end">
                    <span className="text-[40px] font-heading text-primary leading-none">15+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest mt-4">Years in Systems Engineering</span>
                </div>
                <div className="aspect-square bg-muted/30 border border-border p-8 flex flex-col justify-end">
                    <span className="text-[40px] font-heading text-secondary leading-none">8.5k</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest mt-4">Validated Model Signatures</span>
                </div>
            </div>
        </section>
    );
}
