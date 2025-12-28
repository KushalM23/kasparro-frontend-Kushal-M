interface Issue {
  title: string;
  description: string;
  severity: string;
}

interface IssuesListProps {
  issues: Issue[];
}

export function IssuesList({ issues }: IssuesListProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/60">Identified Issues</h2>
        <div className="h-[1px] flex-1 bg-border/40" />
      </div>
      <div className="space-y-4">
        {issues && issues.length > 0 ? issues.map((issue, idx) => (
          <div key={idx} className="bg-muted/10 border-l-4 border-foreground/20 p-4 space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-widest">{issue.title}</h4>
            <p className="text-xs font-medium leading-normal text-muted-foreground/80">{issue.description}</p>
          </div>
        )) : (
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50 px-4">No critical issues detected.</p>
        )}
      </div>
    </section>
  );
}
