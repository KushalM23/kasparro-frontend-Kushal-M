'use client';

import { Card, CardContent } from '@/components/ui/card';

export function Mission() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          To empower brands to thrive in the AI-first search era by providing transparent, actionable intelligence about how AI models understand and rank their content.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">🎯 Transparency</h3>
              <p className="text-sm text-muted-foreground">
                Clear visibility into how AI models crawl and comprehend your digital presence.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">⚡ Actionability</h3>
              <p className="text-sm text-muted-foreground">
                Specific, prioritized recommendations you can implement immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">🚀 Impact</h3>
              <p className="text-sm text-muted-foreground">
                Measurable improvements in AI visibility and brand authority.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
