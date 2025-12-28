interface Insight {
  title: string;
  description: string;
}

interface InsightsListProps {
  insights: Insight[];
}

export function InsightsList({ insights }: InsightsListProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/70">Strategic Insights</h2>
        <div className="h-[1px] flex-1 bg-border/40" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border divide-x divide-y md:divide-y-0 divide-border">
        {insights.map((insight, idx) => (
          <div key={idx} className="p-4 bg-muted/5 space-y-2">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-primary">Insight 0{idx + 1}</h4>
            <div className="space-y-1">
              <h5 className="text-[11px] font-bold uppercase tracking-tight text-foreground">{insight.title}</h5>
              <p className="text-xs text-muted-foreground leading-tight font-medium">{insight.description}</p>
            </div>
          </div>
        ))}
        {insights.length === 0 && (
          <p className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground/50">No insights available.</p>
        )}
      </div>
    </section>
  );
}
