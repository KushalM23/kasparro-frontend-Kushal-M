'use client';


export function Comparison() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Traditional SEO vs AI-Native SEO
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-bold">Aspect</th>
                <th className="text-left p-4 font-bold">Traditional SEO</th>
                <th className="text-left p-4 font-bold">AI-Native SEO</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">Focus</td>
                <td className="p-4">Keyword density, backlinks</td>
                <td className="p-4">E-E-A-T, semantic understanding</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Optimization For</td>
                <td className="p-4">Google algorithm</td>
                <td className="p-4">AI model comprehension</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Measurement</td>
                <td className="p-4">Rankings, organic traffic</td>
                <td className="p-4">AI visibility, model understanding</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Timeline</td>
                <td className="p-4">3-6 months for results</td>
                <td className="p-4">Immediate feedback loop</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Data Model</td>
                <td className="p-4">Limited transparency</td>
                <td className="p-4">Clear, actionable metrics</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 p-6 bg-background border">
          <p className="text-center text-muted-foreground">
            As search evolves, brands need to understand both ranking algorithms and AI reasoning. Kasparro provides visibility into the AI side of the equation.
          </p>
        </div>
      </div>
    </section>
  );
}
