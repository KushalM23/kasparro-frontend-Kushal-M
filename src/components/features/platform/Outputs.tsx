'use client';


export function Outputs() {
  const outputs = [
    {
      title: 'Scores',
      desc: 'Numeric scores (0-100) across 7 audit modules showing performance',
    },
    {
      title: 'Insights',
      desc: 'Positive findings and opportunities you\'re already leveraging',
    },
    {
      title: 'Issues',
      desc: 'Specific problems ranked by severity with page-level detail',
    },
    {
      title: 'Recommendations',
      desc: 'Prioritized actions with impact and effort estimates',
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What You Receive
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {outputs.map((output) => (
            <div key={output.title} className="p-6 border border-primary/50 dark:border-accent/50 bg-gradient-to-r from-[#9bb2e5]/10 to-[#698cbf]/10 dark:from-[#9bb2e5]/10 dark:to-[#698cbf]/5">
              <h3 className="text-lg font-bold mb-3">{output.title}</h3>
              <p className="text-muted-foreground">{output.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-background border">
          <p className="text-center text-muted-foreground">
            All data is presented in an intuitive dashboard where you can drill into any module for detailed analysis.
          </p>
        </div>
      </div>
    </section>
  );
}
