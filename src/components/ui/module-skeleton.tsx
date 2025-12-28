import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function ModuleSkeleton() {
  return (
    <div className="space-y-6">
      {/* Score display skeleton */}
      <Card>
        <CardHeader className="pb-3">
          <div className="h-6 bg-muted rounded w-32 animate-pulse" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="h-16 bg-muted rounded w-24 animate-pulse" />
          <div className="h-2 bg-muted rounded w-full animate-pulse" />
        </CardContent>
      </Card>

      {/* Insights & Issues skeleton */}
      <div className="grid md:grid-cols-2 gap-6">
        {Array.from({ length: 2 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="pb-3">
              <div className="h-5 bg-muted rounded w-20 animate-pulse" />
            </CardHeader>
            <CardContent className="space-y-3">
              {Array.from({ length: 3 }).map((_, j) => (
                <div key={j} className="h-4 bg-muted rounded w-full animate-pulse" />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recommendations skeleton */}
      <Card>
        <CardHeader className="pb-3">
          <div className="h-5 bg-muted rounded w-32 animate-pulse" />
        </CardHeader>
        <CardContent className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-4 bg-muted rounded w-full animate-pulse" />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
