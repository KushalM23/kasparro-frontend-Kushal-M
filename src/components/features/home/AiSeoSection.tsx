'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function AiSeoSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Why AI-Native SEO Matters
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Traditional SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>✗ Optimizes for search engine algorithms</p>
              <p>✗ Focuses on keyword density and backlinks</p>
              <p>✗ Limited visibility into AI model understanding</p>
              <p>✗ Reactive approach to ranking changes</p>
            </CardContent>
          </Card>

          <Card className="border-primary/50 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-lg">AI-Native SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>✓ Optimizes for AI understanding and reasoning</p>
              <p>✓ Focuses on E-E-A-T, context, and structured knowledge</p>
              <p>✓ Direct signals for AI model comprehension</p>
              <p>✓ Proactive optimization for the AI-first era</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-background border rounded-lg">
          <p className="text-center text-muted-foreground">
            As search evolves toward AI-driven results, brands that understand how AI reads, understands, and ranks content will win in organic search.
          </p>
        </div>
      </div>
    </section>
  );
}
