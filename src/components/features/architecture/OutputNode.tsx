import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database } from 'lucide-react';

export function OutputNode() {
  return (
    <Card className="border-2 border-green-500/50 bg-green-50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <Database className="w-5 h-5 text-green-600" />
          Output Surfaces
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <ul className="space-y-1 text-muted-foreground">
          <li>• Numeric scores</li>
          <li>• Insights & findings</li>
          <li>• Issues & severity</li>
          <li>• Recommendations</li>
        </ul>
      </CardContent>
    </Card>
  );
}
