import { MetricCard } from './MetricCard';

interface AiVisibilityCardProps {
  score: number;
}

export function AiVisibilityCard({ score }: AiVisibilityCardProps) {
  return (
    <MetricCard
      title="AI Visibility Score"
      value={score}
      label="/100"
      description="How well AI models can discover and understand your content"
    />
  );
}
