'use client';

export function DataInputs() {
  const inputs = [
    { title: 'Domain Structure', desc: 'Site architecture, URL patterns, navigation' },
    { title: 'Content', desc: 'Pages, articles, metadata, structured data' },
    { title: 'Technical Signals', desc: 'Performance, Core Web Vitals, crawlability' },
    { title: 'Authority Signals', desc: 'Domain age, backlinks, author credentials' },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What We Consume
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {inputs.map((input) => (
            <div key={input.title} className="p-6 border border-border">
              <h3 className="text-lg font-bold mb-3">{input.title}</h3>
              <p className="text-muted-foreground">{input.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-background border">
          <p className="text-center text-muted-foreground">
            We analyze your entire digital presence to understand how AI models crawl, parse, and understand your content.
          </p>
        </div>
      </div>
    </section>
  );
}
