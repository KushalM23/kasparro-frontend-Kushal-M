'use client';

export function Outputs() {
  const outputs = [
    { title: 'Visibility Index', items: ['AI Search Visibility', 'Brand Accuracy', 'Topic Authority'] },
    { title: 'Strategic Roadmap', items: ['Priority actions', 'Content opportunities', 'E-E-A-T improvements'] },
    { title: 'Technical Docs', items: ['Audit summaries', 'Raw analysis data', 'Technical checklists'] }
  ];

  return (
    <div className="bg-background p-12 space-y-8 text-left">
      <h2 className="text-2xl uppercase tracking-tighter">Deliverable Assets (Output)</h2>
      <div className="space-y-6">
        {outputs.map((group) => (
          <div key={group.title} className="space-y-2">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary">{group.title}</h4>
            <ul className="grid grid-cols-1 gap-1">
              {group.items.map(item => <li key={item} className="text-sm font-medium border-l border-primary/40 pl-3 text-foreground/80">{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
