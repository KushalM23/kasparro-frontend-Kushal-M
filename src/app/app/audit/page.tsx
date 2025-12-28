'use client';

import { useEffect, useState } from 'react';
import { useBrandStore } from '@/stores/brandStore';
import { useAuditStore } from '@/stores/auditStore';
import { ModuleSidebar } from '@/components/features/audit/ModuleSidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { getModuleDefinition } from '@/data/modules';
import * as Icons from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';
import Link from 'next/link';

interface AuditModuleData {
  id: string;
  moduleId: string;
  moduleName: string;
  description: string;
  score: number;
  insights: Array<{ title: string; description: string; type: string }>;
  issues: Array<{ title: string; description: string; severity: string }>;
  recommendations: Array<{ title: string; description: string; priority: string; estimatedImpact: string; implementationEffort: string }>;
}

export default function AuditPage() {
  const { selectedBrand } = useBrandStore();
  const { selectedModule, setSelectedModule } = useAuditStore();
  const [modules, setModules] = useState<AuditModuleData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadModules = async () => {
      if (!selectedBrand) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/audit-data/${selectedBrand.id}/audit-modules.json`);
        const data = await response.json();
        setModules(data);

        if (!selectedModule && data.length > 0) {
          setSelectedModule(data[0].moduleId as any);
        }
      } catch (error) {
        console.error('Failed to load audit data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadModules();
  }, [selectedBrand, setSelectedModule, selectedModule]);

  // Handle both string and object selectedModule from store
  const selectedModuleId = typeof selectedModule === 'string' ? selectedModule : (selectedModule as any)?.moduleId;
  const currentModule = modules.find(m => m.moduleId === selectedModuleId);
  const moduleDefinition = selectedModuleId ? getModuleDefinition(selectedModuleId as any) : null;
  const IconComponent = moduleDefinition ? (Icons as any)[moduleDefinition.icon] : null;

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary animate-spin" />
      </div>
    );
  }

  if (!selectedBrand) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center space-y-4 max-w-md border border-border p-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Restriction</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight">Access Denied</h2>
          <p className="text-xs text-muted-foreground font-medium">Please select a brand context from the Dashboard to proceed with the audit view.</p>
          <Button asChild className="rounded-none bg-foreground text-background font-bold uppercase tracking-widest px-8 mt-4 hover:bg-primary transition-colors text-xs">
            <Link href={ROUTES.DASHBOARD}>&larr; Return to Dashboard</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (modules.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center space-y-6 max-w-md border border-border p-20">
          <h2 className="text-2xl font-bold uppercase tracking-tight">No Audit Baseline</h2>
          <p className="text-sm text-muted-foreground font-medium">This brand has not been audited yet. Technical findings are currently unavailable.</p>
          <Button asChild className="rounded-none bg-foreground text-background font-bold uppercase tracking-widest px-8 h-12 hover:bg-primary transition-colors text-xs">
            <Link href={ROUTES.DASHBOARD}>Initialize First Audit &rarr;</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full overflow-hidden bg-background">
      <ModuleSidebar modules={modules.map(m => ({ id: m.moduleId, name: m.moduleName, score: m.score }))} />

      <main className="flex-1 overflow-y-auto p-12 custom-scrollbar bg-background">
        <AnimatePresence mode="wait">
          {!currentModule ? (
            <motion.div
              key="select-module"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex items-center justify-center text-center"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">Navigation</span>
                <p className="text-sm font-bold uppercase tracking-tighter text-muted-foreground">Select an audit layer from the sidebar for analysis.</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={currentModule.moduleId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl space-y-16"
            >
              {/* Module Header */}
              <div className="flex items-start justify-between gap-8 border-b border-border pb-12">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    {IconComponent && <IconComponent className="w-5 h-5 text-primary" />}
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Intelligence Layer</span>
                  </div>
                  <h1 className="text-5xl font-heading tracking-tighter uppercase leading-none">
                    {currentModule.moduleName}
                  </h1>
                  <p className="text-sm font-medium leading-relaxed text-muted-foreground max-w-2xl">
                    {currentModule.description}
                  </p>
                </div>
                <div className="p-8 border border-primary bg-primary/5 text-center min-w-[160px]">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Score</span>
                  <div className="text-6xl font-heading tracking-tighter text-primary mt-2">{currentModule.score}</div>
                </div>
              </div>

              {/* Insights */}
              <section className="space-y-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-heading uppercase tracking-tighter">Strategic Insights</h2>
                  <div className="h-[1px] flex-1 bg-border" />
                </div>
                <div className="grid gap-4">
                  {currentModule.insights.map((insight, idx) => (
                    <div key={idx} className="p-6 border border-border hover:bg-muted/5 transition-colors">
                      <div className="flex items-start gap-4">
                        <span className="text-[10px] font-bold text-secondary mt-1">[{String(idx + 1).padStart(2, '0')}]</span>
                        <div className="space-y-1">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider">{insight.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed font-medium">{insight.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Grid: Issues & Recommendations */}
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Issues */}
                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <h2 className="text-xl font-heading uppercase tracking-tighter text-secondary">Identified Issues</h2>
                    <div className="h-[1px] flex-1 bg-border" />
                  </div>
                  <div className="space-y-4">
                    {currentModule.issues.length > 0 ? currentModule.issues.map((issue, idx) => (
                      <div key={idx} className="bg-muted/10 border-l-2 border-secondary p-4 space-y-1">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary">{issue.title}</h4>
                        <p className="text-xs font-bold leading-normal text-muted-foreground">{issue.description}</p>
                      </div>
                    )) : (
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50 px-4">No critical issues detected.</p>
                    )}
                  </div>
                </section>

                {/* Recommendations */}
                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <h2 className="text-xl font-heading uppercase tracking-tighter text-primary">Recommendations</h2>
                    <div className="h-[1px] flex-1 bg-border" />
                  </div>
                  <div className="space-y-4">
                    {currentModule.recommendations.map((rec, idx) => (
                      <div key={idx} className="bg-primary/5 border-l-2 border-primary p-4 space-y-2">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary">{rec.title}</h4>
                        <p className="text-xs font-bold text-foreground leading-normal">{rec.description}</p>
                        <div className="flex gap-4 pt-1">
                          <span className="text-[9px] font-bold uppercase tracking-tighter text-muted-foreground">Impact: <span className="text-primary">{rec.estimatedImpact}</span></span>
                          <span className="text-[9px] font-bold uppercase tracking-tighter text-muted-foreground">Effort: <span className="text-secondary">{rec.implementationEffort}</span></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
