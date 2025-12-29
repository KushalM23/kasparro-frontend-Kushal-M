interface ModuleScoreCardProps {
  score: number;
}

export function ModuleScoreCard({ score }: ModuleScoreCardProps) {
  return (
    <div className="flex items-center gap-4 bg-muted/20 border border-border px-6 py-4">
      <div className="text-right">
        <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground block">Layer Score</span>
        <div className="text-3xl font-heading tracking-tighter text-primary">{score}</div>
      </div>
    </div>
  );
}
