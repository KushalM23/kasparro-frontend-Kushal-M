interface Issue {
  title: string;
  description: string;
  severity: string;
}

interface IssuesListProps {
  issues: Issue[];
}

export function IssuesList({ issues }: IssuesListProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high':
      case 'critical':
        return 'border-destructive bg-destructive/5';
      case 'medium':
        return 'border-orange-500 bg-orange-500/5';
      case 'low':
        return 'border-blue-500 bg-blue-500/5';
      default:
        return 'border-foreground/20 bg-muted/10';
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/60">Identified Issues</h2>
        <div className="h-[1px] flex-1 bg-border/40" />
      </div>
      <div className="space-y-4">
        {issues && issues.length > 0 ? issues.map((issue, idx) => (
          <div key={idx} className={`border-l-4 p-4 space-y-1 ${getSeverityColor(issue.severity)}`}>
            <div className="flex justify-between items-start">
              <h4 className="text-xs font-bold uppercase tracking-widest">{issue.title}</h4>
              <span className="text-[8px] font-bold uppercase tracking-tighter px-1.5 py-0.5 border border-current opacity-60">
                {issue.severity}
              </span>
            </div>
            <p className="text-xs font-medium leading-normal text-muted-foreground/80">{issue.description}</p>
          </div>
        )) : (
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50 px-4">No critical issues detected.</p>
        )}
      </div>
    </section>
  );
}
