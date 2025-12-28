import { MetricCard } from './MetricCard';

interface EeatScoreCardProps {
  score: number;
}

export function EeatScoreCard({ score }: EeatScoreCardProps) {
  return (
    <MetricCard
      title="E-E-A-T Score"
      value={score}
      label="/100"
      description="Experience, Expertise, Authoritativeness, Trustworthiness rating"
    />
  );
}
