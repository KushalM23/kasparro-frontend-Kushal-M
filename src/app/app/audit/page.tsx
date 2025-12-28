'use client';

import { useEffect, useState } from 'react';
import { useBrandStore } from '@/stores/brandStore';
import { useAuditStore } from '@/stores/auditStore';
import { ModuleSidebar } from '@/components/features/audit/ModuleSidebar';
import { motion } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface AuditModule {
  id: string;
  name: string;
  description: string;
  score: number;
  insights: Array<{ title: string; description: string }>;
  issues: Array<{ title: string; description: string; severity: string }>;
  recommendations: Array<{
    title: string;
    description: string;
    impact: string;
    effort: string;
  }>;
}

export default function AuditPage() {
  const { selectedBrand } = useBrandStore();
  const { selectedModule, setSelectedModule } = useAuditStore();
  const [modules, setModules] = useState<AuditModule[]>([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const loadModules = async () => {
      if (!selectedBrand) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `/audit-data/${selectedBrand.id}/audit-modules.json`
        );
        const data = await response.json();
        setModules(data);

        if (!selectedModule && data.length > 0) {
          setSelectedModule(data[0]);
        }
      } catch (error) {
        console.error('Failed to load audit modules:', error);
      } finally {
        setLoading(false);
      }
    };

    loadModules();
  }, [selectedBrand, setSelectedModule]);

  const selectedModuleData = typeof selectedModule === 'string'
    ? modules.find((m) => m.id === selectedModule)
    : selectedModule;

  if (loading) {
    return (
      <div className="flex h-full">
        <div className="w-64 border-r border-border bg-background animate-pulse" />
        <div className="flex-1 p-8">
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-32 bg-muted dark:bg-muted/50 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!selectedBrand) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">No Brand Selected</h2>
          <p className="text-muted-foreground">
            Please select a brand from the dashboard to view its audit results.
          </p>
        </div>
      </div>
    );
  }

  if (!selectedModuleData || modules.length === 0) {
    return (
      <div className="flex h-full">
        <ModuleSidebar />
        <div className="flex-1 p-8 flex items-center justify-center">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold mb-4">No Audit Data</h2>
            <p className="text-muted-foreground">
              No audit has been run for this brand yet. Run your first audit from the dashboard to see detailed module results.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full bg-background dark:bg-background relative">
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed bottom-6 right-6 z-40 shadow-lg bg-gradient-to-r from-[#9bb2e5] to-[#698cbf] text-foreground hover:opacity-90 h-14 w-14"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSidebarOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: sidebarOpen ? 0 : -100, opacity: sidebarOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:static md:translate-x-0 md:opacity-100 fixed md:relative w-64 h-full z-40 top-0 left-0"
        onMouseLeave={() => setSidebarOpen(false)}
      >
        <ModuleSidebar modules={modules} />
      </motion.div>

      <div className="flex-1 overflow-auto border-l border-border">
        <motion.div
          key={selectedModuleData.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-4 md:p-8 max-w-5xl"
        >
          {/* Module Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">{selectedModuleData.name}</h1>
            <p className="text-muted-foreground mb-6">{selectedModuleData.description}</p>

            {/* Score Display */}
            <div className="flex items-end gap-4 p-6 border border-primary/20 dark:border-accent/20 bg-gradient-to-r from-[#9bb2e5]/10 to-[#698cbf]/10 dark:from-[#9bb2e5]/10 dark:to-[#698cbf]/5">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Module Score</div>
                <div className="text-6xl font-bold bg-gradient-to-r from-[#9bb2e5] to-[#698cbf] bg-clip-text text-transparent">
                  {selectedModuleData.score}
                </div>
              </div>
              <div className="flex-1 h-2 bg-background overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary dark:from-accent dark:to-secondary transition-all"
                  style={{ width: `${selectedModuleData.score}%` }}
                />
              </div>
              <div className="text-sm font-semibold text-foreground">
                {selectedModuleData.score >= 80
                  ? 'Excellent'
                  : selectedModuleData.score >= 60
                  ? 'Good'
                  : selectedModuleData.score >= 40
                  ? 'Fair'
                  : 'Needs Work'}
              </div>
            </div>
          </div>

          {/* Key Insights */}
          {selectedModuleData.insights.length > 0 && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6">Key Insights</h2>
              <div className="space-y-4">
                {selectedModuleData.insights.map((insight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    className="p-4 border border-border hover:border-primary/50 dark:hover:border-accent/50 transition-all"
                  >
                    <h3 className="font-semibold text-foreground mb-2">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Issues */}
          {selectedModuleData.issues.length > 0 && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6">Issues & Flags</h2>
              <div className="space-y-4">
                {selectedModuleData.issues.map((issue, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    className={`p-4 border-l-4 ${
                      issue.severity === 'critical'
                        ? 'border-l-destructive bg-destructive/5 dark:bg-destructive/10 border border-destructive/20'
                        : issue.severity === 'warning'
                        ? 'border-l-yellow-500 bg-yellow-500/5 dark:bg-yellow-500/10 border border-yellow-500/20'
                        : 'border-l-blue-500 bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`shrink-0 ${
                        issue.severity === 'critical' ? 'text-destructive' :
                        issue.severity === 'warning' ? 'text-yellow-500' :
                        'text-blue-500'
                      }`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{issue.title}</h3>
                        <p className="text-sm text-muted-foreground">{issue.description}</p>
                        <div className="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          Severity: {issue.severity}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Recommendations */}
          {selectedModuleData.recommendations.length > 0 && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6">Recommendations</h2>
              <div className="space-y-4">
                {selectedModuleData.recommendations.map((rec, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    className="p-4 border border-border hover:border-primary/50 dark:hover:border-accent/50 transition-all"
                  >
                    <h3 className="font-semibold text-foreground mb-2">{rec.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                    <div className="flex gap-4 text-xs">
                      <div className="px-2 py-1 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent font-semibold">
                        Impact: {rec.impact}
                      </div>
                      <div className="px-2 py-1 bg-secondary/10 dark:bg-secondary/5 text-secondary dark:text-secondary font-semibold">
                        Effort: {rec.effort}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </motion.div>
      </div>
    </div>
  );
}
