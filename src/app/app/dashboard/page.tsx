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
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditedBrands, setAuditedBrands] = useState<Set<string>>(new Set());
  const [lastScanTime, setLastScanTime] = useState<string>('');

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
    if (saved) setAuditedBrands(new Set(JSON.parse(saved)));
  }, []);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch('/audit-data/brands.json');
        const data = await response.json();
        const brandsList = Array.isArray(data) ? data : (data.brands || []);
        setBrands(brandsList);
        } catch {
        // Brand loading failed silently - empty state will be shown
      }
    };
    fetchBrands();
  }, [setBrands]);

  useEffect(() => {
    if (selectedBrand && auditedBrands.has(selectedBrand.id)) {
      loadMetrics(selectedBrand.id);
    } else {
      setMetrics(null);
    }
  }, [selectedBrand, auditedBrands, loadMetrics]);

  const handleBrandChange = (brandId: string) => {
    const brand = brands.find(b => b.id === brandId);
    if (brand) {
      setSelectedBrand(brand);
      if (auditedBrands.has(brandId)) {
        loadMetrics(brandId);
      } else {
        setMetrics(null);
      }
    }
  };

  const handleRunAudit = async () => {
    if (!selectedBrand) return;

    setIsAuditing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    await loadMetrics(selectedBrand.id);
    const newAudited = new Set([...auditedBrands, selectedBrand.id]);
    setAuditedBrands(newAudited);
    localStorage.setItem('kasparro_audited_brands', JSON.stringify([...newAudited]));
    setIsAuditing(false);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-12 py-6 md:py-8 lg:py-12 max-w-6xl">
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
