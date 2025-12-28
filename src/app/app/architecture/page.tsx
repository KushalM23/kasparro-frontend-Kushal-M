/**
 * Architecture Page - System Diagram
 * URL: /app/architecture
 * 
 * Shows how the Kasparro system processes audits
 */

import { SystemDiagram } from '@/components/features/architecture/SystemDiagram';

export default function ArchitecturePage() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">System Architecture</h1>
        <p className="text-muted-foreground">
          How Kasparro processes sites and delivers intelligence
        </p>
      </div>

      <SystemDiagram />

      <div className="mt-12 p-6 bg-muted/50 rounded-lg border">
        <h3 className="font-bold mb-3">The Pipeline</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Kasparro assembles all signals about your site into a unified context
          pack that is fed to 7 specialized AI modules running in parallel. Each
          module analyzes a specific dimension of your AI-readiness, producing
          scores, insights, issues, and recommendations. The results are
          synthesized into an actionable intelligence dashboard.
        </p>
      </div>
    </div>
  );
}
