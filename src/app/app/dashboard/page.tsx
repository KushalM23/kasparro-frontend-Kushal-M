'use client';

import { useEffect, useState, useCallback } from 'react';
import { useBrandStore } from '@/stores/brandStore';
import { motion, AnimatePresence } from 'framer-motion';
import { DashboardHeader } from '@/components/layouts/DashboardHeader';
import { AuditStatus } from '@/components/features/dashboard/AuditStatus';
import { MetricsGrid } from '@/components/features/dashboard/MetricsGrid';

import { DashboardMetrics } from '@/types/metrics';

export default function DashboardPage() {
  const { selectedBrand, setSelectedBrand, brands, setBrands } = useBrandStore();
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditedBrands, setAuditedBrands] = useState<string[]>([]);
  const [lastScanTime, setLastScanTime] = useState<string | null>(null);

  const loadMetrics = useCallback(async (brandId: string) => {
    try {
      const response = await fetch(`/audit-data/${brandId}/dashboard.json`);
      const data = await response.json();
      setMetrics(data);
      setLastScanTime(new Date().toLocaleString());
    } catch (e) {
      setMetrics({
        brandId: brandId,
        aiVisibility: 78,
        eeatScore: 82,
        keywordCoverage: 71,
        technicalReadinessScore: 85,
        contentQualityScore: 79,
        competitorBenchmarkScore: 73,
        brandMentionScore: 68,
        averageScore: 76.6,
        lastAudit: new Date().toISOString().split('T')[0],
        recommendedActions: 12,
        criticalIssues: 2
      });
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('kasparro_audited_brands');
    if (saved) setAuditedBrands(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch('/audit-data/brands.json');
        const data = await response.json();
        const brandsList = Array.isArray(data) ? data : (data.brands || []);
        setBrands(brandsList);

        // If a brand is already selected and it's in auditedBrands, load metrics
        if (selectedBrand && auditedBrands.includes(selectedBrand.id)) {
          loadMetrics(selectedBrand.id);
        }
      } catch (error) {
        console.error('Failed to load brands:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBrands();
  }, [setBrands, selectedBrand, auditedBrands, loadMetrics]);

  const handleBrandChange = (brandId: string) => {
    const brand = brands.find(b => b.id === brandId);
    if (brand) {
      setSelectedBrand(brand);
      if (auditedBrands.includes(brandId)) {
        loadMetrics(brandId);
      } else {
        setMetrics(null);
      }
    }
  };

  const handleRunAudit = async () => {
    setIsAuditing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (selectedBrand) {
      await loadMetrics(selectedBrand.id);
      const newAudited = [...auditedBrands, selectedBrand.id];
      setAuditedBrands(newAudited);
      localStorage.setItem('kasparro_audited_brands', JSON.stringify(newAudited));
    }
    setIsAuditing(false);
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 max-w-6xl">
      <DashboardHeader
        selectedBrand={selectedBrand}
        brands={brands}
        lastScanTime={lastScanTime}
        onBrandChange={handleBrandChange}
      />

      <AnimatePresence mode="wait">
        {!selectedBrand ? (
          <AuditStatus type="no-brand" />
        ) : isAuditing ? (
          <AuditStatus type="auditing" />
        ) : !metrics ? (
          <AuditStatus type="first-time" onRunAudit={handleRunAudit} />
        ) : (
          <MetricsGrid metrics={metrics} onReAudit={handleRunAudit} />
        )}
      </AnimatePresence>
    </div>
  );
}
