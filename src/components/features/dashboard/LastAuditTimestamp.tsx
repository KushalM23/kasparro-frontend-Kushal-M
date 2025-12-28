import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LastAuditTimestampProps {
  timestamp: string;
}

export function LastAuditTimestamp({ timestamp }: LastAuditTimestampProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Last Audit</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{timestamp}</p>
        <p className="text-xs text-muted-foreground mt-2">
          Re-audit to get fresh insights
        </p>
      </CardContent>
    </Card>
  );
}
