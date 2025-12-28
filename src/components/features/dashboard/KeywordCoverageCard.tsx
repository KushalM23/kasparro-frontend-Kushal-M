import { MetricCard } from './MetricCard';

interface KeywordCoverageCardProps {
  score: number;
}

export function KeywordCoverageCard({ score }: KeywordCoverageCardProps) {
  return (
    <MetricCard
      title="Keyword Coverage"
      value={score}
      label="/100"
      description="How comprehensively you cover target keywords and semantic topics"
    />
  );
}
