import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface MetricSkeletonProps {
  count?: number;
}

export function MetricSkeleton({ count = 1 }: MetricSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i}>
          <CardHeader className="pb-3">
            <div className="h-5 bg-muted rounded w-24 animate-pulse" />
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="h-10 bg-muted rounded w-20 animate-pulse" />
            <div className="h-4 bg-muted rounded w-full animate-pulse" />
          </CardContent>
        </Card>
      ))}
    </>
  );
}
