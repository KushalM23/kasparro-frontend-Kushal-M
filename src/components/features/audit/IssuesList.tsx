import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Issue {
  title: string;
  description: string;
  severity: string;
}

interface IssuesListProps {
  issues: Issue[];
}

export function IssuesList({ issues }: IssuesListProps) {
  if (!issues || issues.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No issues found</p>
        </CardContent>
      </Card>
    );
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Issues</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {issues.map((issue, index) => (
          <div key={index} className="flex gap-3 pb-4 border-b last:border-0">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-medium text-sm">{issue.title}</h4>
                <Badge className={`${getSeverityColor(issue.severity)} text-xs`}>
                  {issue.severity}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                {issue.description}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
