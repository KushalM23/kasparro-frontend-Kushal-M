'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export function PipelineView() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          How Kasparro Works
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {/* Input */}
          <Card className="w-full md:w-48 flex-shrink-0">
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold mb-2">🔗</div>
              <h3 className="font-bold">Input</h3>
              <p className="text-xs text-muted-foreground mt-2">
                Brand domain & content structure
              </p>
            </CardContent>
          </Card>

          <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />

          {/* Processing */}
          <Card className="w-full md:w-48 flex-shrink-0">
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold mb-2">⚙️</div>
              <h3 className="font-bold">Processing</h3>
              <p className="text-xs text-muted-foreground mt-2">
                Run 7 specialized AI modules
              </p>
            </CardContent>
          </Card>

          <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />

          {/* Output */}
          <Card className="w-full md:w-48 flex-shrink-0">
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold mb-2">📊</div>
              <h3 className="font-bold">Output</h3>
              <p className="text-xs text-muted-foreground mt-2">
                Scores, insights & recommendations
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
