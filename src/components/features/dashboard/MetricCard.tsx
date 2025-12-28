import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: number;
  label?: string;
  description?: string;
  trend?: number;
}

export function MetricCard({
  title,
  value,
  label,
  description,
  trend,
}: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-2">{value}{label && <span className="text-lg text-muted-foreground">{label}</span>}</div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {trend !== undefined && (
          <p className={`text-sm mt-2 ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend >= 0 ? '+' : ''}{trend}% from last audit
          </p>
        )}
      </CardContent>
    </Card>
  );
}
