'use client';

export function Comparison() {
  const stats = [
    { metric: 'Optimization Depth', trad: '85% Keywords', kasp: '100% Entities', diff: '+15%' },
    { metric: 'Analysis Latency', trad: 'Weeks (Manual)', kasp: '2.4s (Automated)', diff: '-99%' },
    { metric: 'Reference Accuracy', trad: '42% estimated', kasp: '94% deterministic', diff: '2.2x' },
    { metric: 'Model Alignment', trad: 'Low (Crawler only)', kasp: 'High (LLM specific)', diff: 'Critical' }
  ];

  return (
    <section className="mb-32">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-heading tracking-tighter uppercase leading-[0.9]">
          Statistical <span className="text-secondary tracking-normal">Matrix</span>
        </h2>
        <p className="text-muted-foreground font-bold text-xs uppercase tracking-[0.2em] mt-2">Performance Benchmarking vs Traditional SEO</p>
      </div>
      <div className="border border-border">
        {stats.map((row, idx) => (
          <div key={idx} className="grid grid-cols-4 border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
            <div className="p-6 font-bold text-xs uppercase border-r border-border">{row.metric}</div>
            <div className="p-6 text-sm text-muted-foreground border-r border-border">{row.trad}</div>
            <div className="p-6 text-sm font-bold border-r border-border">{row.kasp}</div>
            <div className="p-6 text-sm font-bold text-secondary">{row.diff}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
