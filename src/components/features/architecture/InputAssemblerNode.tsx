import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Network } from 'lucide-react';

export function InputAssemblerNode() {
  return (
    <Card className="border-2 border-blue-500/50 bg-blue-50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <Network className="w-5 h-5 text-blue-600" />
          Input Assembler
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <ul className="space-y-1 text-muted-foreground">
          <li>• Domain structure</li>
          <li>• Content & metadata</li>
          <li>• Technical signals</li>
          <li>• Authority data</li>
        </ul>
      </CardContent>
    </Card>
  );
}
