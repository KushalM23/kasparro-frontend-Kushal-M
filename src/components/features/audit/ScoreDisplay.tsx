import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ScoreDisplayProps {
  score: number;
  moduleName: string;
}

export function ScoreDisplay({ score, moduleName }: ScoreDisplayProps) {
  return (
    <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10">
      <CardHeader>
        <CardTitle className="text-lg">{moduleName}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-6xl font-bold text-primary mb-2">{score}</div>
        <p className="text-sm text-muted-foreground">/100</p>
        <div className="mt-4 w-full bg-muted h-2 overflow-hidden">
          <div
            className="bg-primary h-full transition-all"
            style={{ width: `${score}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
