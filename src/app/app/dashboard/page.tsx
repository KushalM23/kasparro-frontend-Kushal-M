'use client';

import { useEffect, useState } from 'react';
import { useBrandStore } from '@/stores/brandStore';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTES } from '@/lib/constants';
import { Brand } from '@/types/brand';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DashboardMetrics {
  aiVisibility: number;
  eeatScore: number;
  keywordCoverage: number;
  lastAudit: string;
  averageScore: number;
}

export default function DashboardPage() {
  const { selectedBrand, setSelectedBrand, brands, setBrands } = useBrandStore();
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditedBrands, setAuditedBrands] = useState<string[]>([]);
  const [lastScanTime, setLastScanTime] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('kasparro_audited_brands');
    if (saved) setAuditedBrands(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch('/audit-data/brands.json');
        const data = await response.json();
        setBrands(Array.isArray(data) ? data : (data.brands || []));
      } catch (error) {
        console.error('Failed to load brands:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBrands();
  }, [setBrands]);

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

  const loadMetrics = async (brandId: string) => {
    try {
      const response = await fetch(`/audit-data/${brandId}/dashboard.json`);
      const data = await response.json();
      setMetrics(data);
      setLastScanTime(new Date().toLocaleString());
    } catch (e) {
      setMetrics({
        aiVisibility: 78,
        eeatScore: 82,
        keywordCoverage: 65,
        lastAudit: new Date().toISOString().split('T')[0],
        averageScore: 75
      });
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
    <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Command Center</span>
          <h1 className="text-4xl md:text-6xl font-heading tracking-tighter uppercase">
            {selectedBrand ? selectedBrand.name : 'Select BRAND'}
          </h1>
          {lastScanTime && (
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
              Last Scanned: {lastScanTime}
            </p>
          )}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Active Context:</span>
          <Select value={selectedBrand?.id || ""} onValueChange={handleBrandChange}>
            <SelectTrigger className="w-[200px] rounded-none border-border bg-background h-10 font-bold text-xs uppercase tracking-wider">
              <SelectValue placeholder="CHOOSE BRAND" />
            </SelectTrigger>
            <SelectContent className="rounded-none border-border">
              {brands.map((brand) => (
                <SelectItem key={brand.id} value={brand.id} className="text-xs font-bold uppercase tracking-wider rounded-none">
                  {brand.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!selectedBrand ? (
          <motion.div
            key="no-brand"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border border-border p-20 flex flex-col items-center justify-center text-center space-y-6"
          >
            <div className="w-16 h-[1px] bg-border" />
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">No Brand Context Selected</p>
            <h2 className="text-2xl font-bold uppercase tracking-tight">Initialize System Audit</h2>
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              Please select a brand from the dropdown above to begin scanning for AI-SEO visibility and model citations.
            </p>
          </motion.div>
        ) : isAuditing ? (
          <motion.div
            key="auditing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="border border-primary p-20 flex flex-col items-center justify-center text-center space-y-8 bg-primary/5"
          >
            <div className="relative">
              <div className="w-16 h-16 border-2 border-primary/20 border-t-primary animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-1 bg-primary animate-ping" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold uppercase tracking-tight">Running Deep Audit</h2>
              <p className="text-xs text-primary font-bold uppercase tracking-[0.2em] animate-pulse">Scanning Neural Networks</p>
            </div>
          </motion.div>
        ) : !metrics ? (
          <motion.div
            key="first-time"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border border-border p-20 flex flex-col items-center justify-center text-center space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-heading uppercase tracking-tight">Run your first Kasparro Audit</h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto font-medium">
                Establish a technical baseline for your brand's AI-era visibility. Initial scan takes approximately 2 seconds.
              </p>
            </div>
            <Button
              onClick={handleRunAudit}
              className="rounded-none bg-foreground text-background font-bold uppercase tracking-widest px-12 h-14 hover:bg-primary transition-colors text-xs"
            >
              Initialize Audit &rarr;
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: 'AI Visibility', value: metrics.aiVisibility, desc: 'Model Mention Prob' },
                { label: 'E-E-A-T Score', value: metrics.eeatScore, desc: 'Trust Integrity' },
                { label: 'Keyword Coverage', value: `${metrics.keywordCoverage}%`, desc: 'Entity Reach' },
                { label: 'Overall Index', value: Math.round(metrics.averageScore), desc: 'Aggregated Performance', highlight: true }
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`p-8 border ${stat.highlight ? 'border-primary bg-primary/5' : 'border-border'} flex flex-col gap-2`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</span>
                  <span className={`text-5xl font-heading tracking-tighter ${stat.highlight ? 'text-primary' : ''}`}>{stat.value}</span>
                  <span className="text-[10px] font-bold uppercase tracking-tight text-muted-foreground/60">{stat.desc}</span>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="border border-border p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-2xl font-heading uppercase tracking-tight">Granular Audit Surface Available</h3>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Explore module-specific neural insights and architectural trust gaps.</p>
              </div>
              <Button asChild className="rounded-none h-14 px-10 font-bold uppercase tracking-widest text-xs border border-foreground hover:bg-foreground hover:text-background bg-transparent text-foreground transition-all">
                <Link href={ROUTES.AUDIT}>View Full Report &rarr;</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
