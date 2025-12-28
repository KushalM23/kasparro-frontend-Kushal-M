/**
 * Platform Page - How Kasparro Works
 * URL: /platform
 * 
 * Displays how the Kasparro platform processes audits and delivers insights
 */

import { PipelineFlow } from '@/components/features/platform/PipelineFlow';
import { DataInputs } from '@/components/features/platform/DataInputs';
import { Outputs } from '@/components/features/platform/Outputs';
import { Comparison } from '@/components/features/platform/Comparison';

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 md:py-32 px-4 md:px-6 border-b">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Kasparro Works
          </h1>
          <p className="text-xl text-muted-foreground">
            From input to actionable intelligence in minutes, not months.
          </p>
        </div>
      </section>

      <PipelineFlow />
      <DataInputs />
      <Outputs />
      <Comparison />
    </main>
  );
}
