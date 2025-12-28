'use client';

export function PipelineFlow() {
  return (
    <section className="mb-32 border-t border-border pt-16">
      <h2 className="text-2xl tracking-tighter mb-12">How Our Platform Analyzes Your Brand</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-8 border border-border space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Stage 01</span>
          <h3 className="tracking-tight text-sm">Data Collection</h3>
          <p className="text-xs text-muted-foreground leading-normal font-medium">
            We gather information from your primary domains and social channels to build a complete picture of your digital presence.
          </p>
        </div>
        <div className="p-8 border border-border space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Stage 02</span>
          <h3 className="tracking-tight text-sm">Context Mapping</h3>
          <p className="text-xs text-muted-foreground leading-normal font-medium">
            We organize your brand data into categories that AI models understand, ensuring that your core values and expertise are clearly identified.
          </p>
        </div>
        <div className="p-8 border border-border space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Stage 03</span>
          <h3 className="tracking-tight text-sm">Core Audit</h3>
          <p className="text-xs text-muted-foreground leading-normal font-medium">
            Your brand is analyzed through our 7 specialized modules, testing how accurately you are represented in major AI platforms.
          </p>
        </div>
        <div className="p-8 border border-border space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Stage 04</span>
          <h3 className="tracking-tight text-sm">Actionable Report</h3>
          <p className="text-xs text-muted-foreground leading-normal font-medium">
            We generate a detailed report with prioritized recommendations and a Visibility Index to track your progress over time.
          </p>
        </div>
      </div>
    </section>
  );
}
