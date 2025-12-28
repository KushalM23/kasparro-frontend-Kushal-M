import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package } from 'lucide-react';

export function ContextPackNode() {
  return (
    <Card className="border-2 border-purple-500/50 bg-purple-50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <Package className="w-5 h-5 text-purple-600" />
          Context Pack
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <p>Unified representation of site for AI processing</p>
      </CardContent>
    </Card>
  );
}
