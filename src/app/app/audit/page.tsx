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

  if (modules.length === 0) {
    return <AuditEmptyState type="no-baseline" />;
  }

  return (
    <div className="flex h-full overflow-hidden bg-background">
      <ModuleSidebar modules={modules.map(m => ({ id: m.moduleId, name: m.moduleName, score: m.score }))} />

      <main className="flex-1 overflow-y-auto p-12 custom-scrollbar bg-background">
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
