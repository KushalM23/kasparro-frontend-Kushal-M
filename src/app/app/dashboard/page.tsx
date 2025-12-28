'use client';

import { useEffect, useState } from 'react';
import { useBrandStore } from '@/stores/brandStore';
import { AiVisibilityCard } from '@/components/features/dashboard/AiVisibilityCard';
import { EeatScoreCard } from '@/components/features/dashboard/EeatScoreCard';
import { KeywordCoverageCard } from '@/components/features/dashboard/KeywordCoverageCard';
import { LastAuditTimestamp } from '@/components/features/dashboard/LastAuditTimestamp';

interface DashboardMetrics {
  aiVisibility: number;
  eeatScore: number;
  keywordCoverage: number;
  lastAudit: string;
  averageScore: number;
}

export default function DashboardPage() {
  const { selectedBrand } = useBrandStore();
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMetrics = async () => {
      if (!selectedBrand) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `/audit-data/${selectedBrand.id}/dashboard.json`
        );
        const data = await response.json();
        setMetrics({
          aiVisibility: data.aiVisibility,
          eeatScore: data.eeatScore,
          keywordCoverage: data.keywordCoverage,
          lastAudit: data.lastAudit,
          averageScore: data.averageScore,
        });
      } catch (error) {
        console.error('Failed to load metrics:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMetrics();
  }, [selectedBrand]);

  if (loading) {
    return (
      <div className="p-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-32 bg-muted rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (!selectedBrand || !metrics) {
    return (
      <div className="p-8">
        <p className="text-muted-foreground">Select a brand to view metrics</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">{selectedBrand.name}</h2>
        <p className="text-muted-foreground">
          Last updated: {metrics.lastAudit}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AiVisibilityCard score={metrics.aiVisibility} />
        <EeatScoreCard score={metrics.eeatScore} />
        <KeywordCoverageCard score={metrics.keywordCoverage} />
        <LastAuditTimestamp timestamp={metrics.lastAudit} />
      </div>

      <div className="mt-12 p-8 bg-muted/50 rounded-lg border">
        <h3 className="text-lg font-bold mb-4">Overall Score</h3>
        <div className="text-5xl font-bold text-primary mb-2">
          {Math.round(metrics.averageScore)}
        </div>
        <p className="text-muted-foreground">
          Average across all 7 audit modules
        </p>
      </div>
    </div>
  );
}
