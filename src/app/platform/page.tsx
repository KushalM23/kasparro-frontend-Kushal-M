'use client';

import { PlatformHero } from '@/components/features/platform/PlatformHero';
import { PipelineFlow } from '@/components/features/platform/PipelineFlow';
import { DataInputs } from '@/components/features/platform/DataInputs';
import { Outputs } from '@/components/features/platform/Outputs';
import { Comparison } from '@/components/features/platform/Comparison';

export default function PlatformPage() {
  return (
    <main className="w-full bg-background transition-colors pt-20 pb-32">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Product Description */}
        <PlatformHero />

        {/* Audit Pipeline */}
        <PipelineFlow />

        {/* Detailed Input/Output */}
        <section className="grid lg:grid-cols-2 gap-px bg-border mb-32 border border-border overflow-hidden">
          <DataInputs />
          <Outputs />
        </section>

        {/* Statistical Comparison */}
        <Comparison />
      </div>
    </main>
  );
}
