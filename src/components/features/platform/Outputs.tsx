'use client';

export function Outputs() {
  const outputs = [
    { title: 'Visibility Index', items: ['LLM Mention Share', 'Reference Confidence', 'Topic Ownership'] },
    { title: 'Strategic Roadmap', items: ['Priority fixes', 'Content gaps', 'E-E-A-T signals'] },
    { title: 'Architecture Export', items: ['SVG system diagrams', 'JSON raw audit data', 'Implementation specs'] }
  ];

  return (
    <div className="bg-background p-12 space-y-8">
      <h2 className="text-2xl font-heading uppercase tracking-tighter">Deliverable Assets (Output)</h2>
      <div className="space-y-6">
        {outputs.map((group) => (
          <div key={group.title} className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-secondary">{group.title}</h4>
            <ul className="grid grid-cols-1 gap-1">
              {group.items.map(item => <li key={item} className="text-sm font-medium border-l border-secondary/20 pl-3">{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
