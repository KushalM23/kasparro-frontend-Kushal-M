interface Recommendation {
  title: string;
  description: string;
  priority?: string;
  estimatedImpact?: string;
  implementationEffort?: string;
  impact?: string;
  effort?: string;
}

interface RecommendationsListProps {
  recommendations: Recommendation[];
}

export function RecommendationsList({ recommendations }: RecommendationsListProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Recommendations</h2>
        <div className="h-[1px] flex-1 bg-border/40" />
      </div>
      <div className="space-y-4">
        {recommendations.map((rec, idx) => (
          <div key={idx} className="bg-primary/5 border-l-4 border-primary p-4 space-y-3">
            <div className="flex justify-between items-start">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary">{rec.title}</h4>
              {rec.priority && (
                <span className="text-[8px] font-bold uppercase tracking-tighter px-1.5 py-0.5 bg-primary text-primary-foreground">
                  {rec.priority}
                </span>
              )}
            </div>
            <p className="text-xs font-bold text-foreground leading-normal">{rec.description}</p>
            <div className="flex gap-4 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-tighter text-muted-foreground/60">
                Impact: <span className="text-primary">{rec.estimatedImpact || rec.impact}</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-tighter text-muted-foreground/60">
                Effort: <span className="text-foreground/40">{rec.implementationEffort || rec.effort}</span>
              </span>
            </div>
          </div>
        ))}
        {recommendations.length === 0 && (
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50 px-4">No recommendations available.</p>
        )}
      </div>
    </section>
  );
}
