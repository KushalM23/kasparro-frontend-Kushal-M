'use client';

export function DataInputs() {
  const inputs = [
    { title: 'Semantic Core', items: ['Domain metadata', 'Schema.org graphs', 'Topic clusters'] },
    { title: 'Brand Echo', items: ['News citations', 'Social sentiment', 'Review consistency'] },
    { title: 'Technical Stack', items: ['Crawl efficiency', 'API accessibility', 'Markdown structure'] }
  ];

  return (
    <div className="bg-background p-12 space-y-8">
      <h2 className="text-2xl font-heading uppercase tracking-tighter">System Context (Input)</h2>
      <div className="space-y-6">
        {inputs.map((group) => (
          <div key={group.title} className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary">{group.title}</h4>
            <ul className="grid grid-cols-1 gap-1">
              {group.items.map(item => <li key={item} className="text-sm font-medium border-l border-primary/20 pl-3">{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
