'use client';

export function Comparison() {

  return (
    <section>
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl tracking-tighter uppercase leading-[0.9]">
          How We <span className="text-primary tracking-normal">Compare</span>
        </h2>
        <p className="text-muted-foreground font-bold text-xs uppercase tracking-[0.2em] mt-4">The AI-Native Advantage</p>
      </div>
      <div className="border border-border">
        {[
          { metric: 'Discovery Level', trad: 'Keyword Matching', kasp: 'Context & Intent', diff: 'Superior' },
          { metric: 'Time to Insight', trad: 'Weeks of Manual Work', kasp: 'Real-time Analysis', diff: 'Immediate' },
          { metric: 'Citation Trace', trad: 'Limited Estimation', kasp: 'Actual Model Tracking', diff: 'Data-Driven' },
          { metric: 'Platform Support', trad: 'Search Engines only', kasp: 'GPT, Gemini, Perplexity', diff: 'Universal' }
        ].map((row, idx) => (
          <div key={idx} className="grid grid-cols-4 border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
            <div className="p-6 font-bold text-[10px] uppercase tracking-wider text-muted-foreground border-r border-border self-center">{row.metric}</div>
            <div className="p-6 text-sm text-foreground/50 border-r border-border self-center">{row.trad}</div>
            <div className="p-6 text-sm font-bold text-foreground border-r border-border self-center">{row.kasp}</div>
            <div className="p-6 text-xs font-bold text-primary uppercase tracking-widest self-center">{row.diff}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
