import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

interface Recommendation {
  title: string;
  description: string;
  impact: string;
  effort: string;
}

interface RecommendationsListProps {
  recommendations: Recommendation[];
}

const getScaleColor = (value: string) => {
  switch (value) {
    case 'high':
      return 'bg-red-100 text-red-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export function RecommendationsList({
  recommendations,
}: RecommendationsListProps) {
  if (!recommendations || recommendations.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            No recommendations available
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recommendations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="flex gap-3 pb-4 border-b last:border-0">
            <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-medium text-sm mb-1">{rec.title}</h4>
              <p className="text-xs text-muted-foreground mb-2">
                {rec.description}
              </p>
              <div className="flex gap-2 text-xs">
                <span className={`px-2 py-1 rounded-sm ${getScaleColor(rec.impact)}`}>
                  Impact: {rec.impact}
                </span>
                <span className={`px-2 py-1 rounded-sm ${getScaleColor(rec.effort)}`}>
                  Effort: {rec.effort}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
