'use client';

export function PipelineFlow() {
  return (
    <section className="mb-32 border-t border-border pt-16">
      <h2 className="text-2xl font-heading uppercase tracking-tighter mb-12">Intelligence Pipeline Workflow</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-8 border border-border space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Stage 01</span>
          <h3 className="font-bold uppercase tracking-tight text-sm">Signal Ingestion</h3>
          <p className="text-xs text-muted-foreground leading-normal">
            Harvests primary domains and cross-references multi-channel brand footprints. Normalizes raw data into structured markdown and semantic entity maps for LLM consumption.
          </p>
        </div>
        <div className="p-8 border border-border space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Stage 02</span>
          <h3 className="font-bold uppercase tracking-tight text-sm">Context Normalization</h3>
          <p className="text-xs text-muted-foreground leading-normal">
            Enriches ingestion packs with industry-specific training benchmarks. Embeds normalized signals into high-dimensional vector spaces for deterministic module auditing.
          </p>
        </div>
        <div className="p-8 border border-border space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Stage 03</span>
          <h3 className="font-bold uppercase tracking-tight text-sm">Neural Processing</h3>
          <p className="text-xs text-muted-foreground leading-normal">
            Parallelized execution of 7 specialized diagnostic modules, simulating model-specific reasoning loops to identify citation triggers and trust gaps.
          </p>
        </div>
        <div className="p-8 border border-border space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Stage 04</span>
          <h3 className="font-bold uppercase tracking-tight text-sm">Synthesis Output</h3>
          <p className="text-xs text-muted-foreground leading-normal">
            Generates a holistic Visibility Index, actionable technical roadmaps, and architectural visualizations for stakeholder-level implementation.
          </p>
        </div>
      </div>
    </section>
  );
}
