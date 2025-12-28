'use client';

import { useEffect, useState } from 'react';
import { useBrandStore } from '@/stores/brandStore';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ROUTES } from '@/lib/constants';
import { Brand } from '@/types/brand';

interface DashboardMetrics {
  aiVisibility: number;
  eeatScore: number;
  keywordCoverage: number;
  lastAudit: string;
  averageScore: number;
}

export default function DashboardPage() {
  const { selectedBrand, setSelectedBrand } = useBrandStore();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [auditRunning, setAuditRunning] = useState(false);
  const [showSelector, setShowSelector] = useState(!selectedBrand);

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const response = await fetch('/audit-data/brands.json');
        const data = await response.json();
        // Handle both array and object formats
        setBrands(Array.isArray(data) ? data : (data.brands || []));
      } catch (error) {
        console.error('Failed to load brands:', error);
      }
    };

    loadBrands();
  }, []);

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
        setShowSelector(false);
      } catch (error) {
        console.error('Failed to load metrics:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMetrics();
  }, [selectedBrand]);

  const handleBrandSelect = (brand: Brand) => {
    setSelectedBrand(brand);
  };

  const handleRunAudit = async () => {
    setAuditRunning(true);
    setLoading(true);
    // Simulate audit running
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setAuditRunning(false);
    // After audit, load metrics
    if (selectedBrand) {
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
    }
  };

  // Brand Selector Screen
  if (showSelector && !selectedBrand) {
    return (
      <div className="flex items-center justify-center min-h-full p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Select a Brand</h1>
            <p className="text-muted-foreground">
              Choose a brand to view its AI-SEO audit results
            </p>
          </div>

          <div className="space-y-3">
            {brands.map((brand) => (
              <motion.button
                key={brand.id}
                onClick={() => {
                  handleBrandSelect(brand);
                  setShowSelector(false);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 text-left border border-border hover:border-primary dark:hover:border-accent hover:bg-primary/5 dark:hover:bg-accent/5 transition-all"
              >
                <div className="font-semibold text-foreground">{brand.name}</div>
                <div className="text-sm text-muted-foreground">{brand.description}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header skeleton */}
          <div className="h-16 bg-muted dark:bg-muted/50 animate-pulse" />
          {/* Cards skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-32 bg-muted dark:bg-muted/50 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Show first audit prompt or loading state
  if (auditRunning || loading) {
    return (
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="py-12 text-center"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-primary dark:border-accent border-t-transparent animate-spin" />
              <h2 className="text-2xl font-bold">
                {auditRunning ? 'Running Audit...' : 'Loading...'}
              </h2>
              <p className="text-muted-foreground">
                {auditRunning ? 'Analyzing your brand for AI-SEO readiness' : 'Please wait'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Show first audit prompt
  if (!metrics && selectedBrand) {
    return (
      <div className="p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{selectedBrand?.name}</h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-between p-8 border border-border"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Run Your First Kasparro Audit
              </h2>
              <p className="text-muted-foreground">
                No audit has been run for this brand yet. Click below to start analyzing how your brand appears to AI search engines.
              </p>
            </div>
            <Button
              onClick={handleRunAudit}
              disabled={auditRunning}
              size="lg"
              className="bg-gradient-to-r from-[#9bb2e5] to-[#698cbf] hover:opacity-90 text-foreground border-0"
            >
              Run First Audit
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  if (!metrics) return null;

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header with brand name and change button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{selectedBrand?.name}</h1>
            <p className="text-muted-foreground mt-1">
              Last updated: {metrics.lastAudit}
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setShowSelector(true);
              setMetrics(null);
            }}
            className="border-border hover:bg-primary/10 dark:hover:bg-accent/10"
          >
            Change Brand
          </Button>
        </motion.div>

        {/* Quick Snapshot Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* AI Visibility */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-6 border border-border hover:border-primary/50 dark:hover:border-accent/50 transition-all"
          >
            <div className="text-sm text-muted-foreground mb-2">AI Visibility Score</div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-4xl font-bold bg-gradient-to-r from-[#9bb2e5] to-[#698cbf] bg-clip-text text-transparent mb-1"
            >
              {metrics.aiVisibility}
            </motion.div>
            <div className="text-xs text-muted-foreground">How visible you are to AI models</div>
          </motion.div>

          {/* E-E-A-T Score */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-6 border border-border hover:border-primary/50 dark:hover:border-accent/50 transition-all"
          >
            <div className="text-sm text-muted-foreground mb-2">E-E-A-T Score</div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-4xl font-bold bg-gradient-to-r from-[#9bb2e5] to-[#698cbf] bg-clip-text text-transparent mb-1"
            >
              {metrics.eeatScore}
            </motion.div>
            <div className="text-xs text-muted-foreground">Trust & authority signals</div>
          </motion.div>

          {/* Keyword Coverage */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-6 border border-border hover:border-primary/50 dark:hover:border-accent/50 transition-all"
          >
            <div className="text-sm text-muted-foreground mb-2">Keyword Coverage</div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-4xl font-bold bg-gradient-to-r from-[#9bb2e5] to-[#698cbf] bg-clip-text text-transparent mb-1"
            >
              {metrics.keywordCoverage}%
            </motion.div>
            <div className="text-xs text-muted-foreground">Non-branded keywords</div>
          </motion.div>

          {/* Overall Score */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-6 border border-primary/50 dark:border-accent/50 bg-gradient-to-br from-[#9bb2e5]/10 to-[#698cbf]/10"
          >
            <div className="text-sm text-muted-foreground mb-2">Overall Score</div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-4xl font-bold bg-gradient-to-r from-[#9bb2e5] to-[#698cbf] bg-clip-text text-transparent mb-1"
            >
              {Math.round(metrics.averageScore)}
            </motion.div>
            <div className="text-xs text-muted-foreground">All 7 modules average</div>
          </motion.div>
        </motion.div>

        {/* Detailed Audit Report CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-between p-8 border border-border"
        >
          <div>
            <h3 className="text-lg font-bold mb-2">Detailed Audit Report</h3>
            <p className="text-muted-foreground text-sm">
              View module-by-module analysis including scores, insights, issues, and recommendations for each dimension of your AI-SEO performance.
            </p>
          </div>
          <Button asChild className="bg-gradient-to-r from-[#9bb2e5] to-[#698cbf] hover:opacity-90 text-foreground border-0">
            <Link href={ROUTES.AUDIT}>
              View Full Audit Report
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
