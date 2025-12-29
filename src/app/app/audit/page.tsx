'use client';

import { useEffect, useState } from 'react';
import { useBrandStore } from '@/stores/brandStore';
import { useAuditStore } from '@/stores/auditStore';
import { ModuleSidebar } from '@/components/features/audit/ModuleSidebar';
import { AnimatePresence } from 'framer-motion';
import { getModuleDefinition } from '@/data/modules';
import { AuditEmptyState } from '@/components/features/audit/AuditEmptyState';
import { AuditModuleContent } from '@/components/features/audit/AuditModuleContent';

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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadModules = async () => {
      if (!selectedBrand) {
        setLoading(false);
        return;
      }

      setError(null);
      try {
        const response = await fetch(`/audit-data/${selectedBrand.id}/audit-modules.json`);
        if (!response.ok) throw new Error('Failed to load audit modules');
        const data = await response.json();
        setModules(data);

        if (!selectedModule && data.length > 0) {
          setSelectedModule(data[0].moduleId as any);
        }
      } catch (error) {
        console.error('Failed to load audit data:', error);
        setError('Failed to load audit data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadModules();
  }, [selectedBrand, setSelectedModule, selectedModule]);

  const selectedModuleId = typeof selectedModule === 'string' ? selectedModule : (selectedModule as any)?.moduleId;
  const currentModule = modules.find(m => m.moduleId === selectedModuleId);
  const moduleDefinition = selectedModuleId ? getModuleDefinition(selectedModuleId as any) : null;

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary animate-spin" />
      </div>
    );
  }

  if (!selectedBrand) {
    return <AuditEmptyState type="access-denied" />;
  }

  if (modules.length === 0 && !error) {
    return <AuditEmptyState type="no-baseline" />;
  }

  return (
    <div className="flex flex-col md:flex-row h-full overflow-hidden bg-background relative">
      {error && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
          <div className="bg-destructive text-destructive-foreground px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-lg flex justify-between items-center">
            <span>{error}</span>
            <button onClick={() => setError(null)} className="hover:opacity-70">Dismiss</button>
          </div>
        </div>
      )}
      <ModuleSidebar modules={modules.map(m => ({ id: m.moduleId, name: m.moduleName, score: m.score }))} />

      <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 custom-scrollbar bg-background">
        <AnimatePresence mode="wait">
          <AuditModuleContent
            module={currentModule || null}
            moduleDefinition={moduleDefinition}
            brandName={selectedBrand?.name || ''}
          />
        </AnimatePresence>
      </main>
    </div>
  );
}
