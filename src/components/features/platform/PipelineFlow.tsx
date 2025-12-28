'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export function PipelineFlow() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          The Kasparro Pipeline
        </h2>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">1. Input Assembly</h3>
              <p className="text-muted-foreground">
                Aggregate domain structure, content, metadata, and technical signals to create a comprehensive understanding of your site.
              </p>
            </div>
            <div className="text-4xl">🔗</div>
          </div>

          <div className="flex md:justify-center">
            <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-4xl">⚙️</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">2. Module Processing</h3>
              <p className="text-muted-foreground">
                Run 7 specialized AI modules in parallel: AI Visibility, E-E-A-T, Content Quality, Technical Readiness, Brand Mentions, Competitor Benchmarking, and Keyword Coverage.
              </p>
            </div>
          </div>

          <div className="flex md:justify-center">
            <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">3. Intelligence Output</h3>
              <p className="text-muted-foreground">
                Generate actionable insights, identify critical issues, provide prioritized recommendations with impact and effort scores.
              </p>
            </div>
            <div className="text-4xl">📊</div>
          </div>
        </div>
      </div>
    </section>
  );
}
