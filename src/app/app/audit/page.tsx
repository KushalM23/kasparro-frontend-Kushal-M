'use client';

import { useEffect, useState } from 'react';
import { useBrandStore } from '@/stores/brandStore';
import { useAuditStore } from '@/stores/auditStore';
import { ModuleSidebar } from '@/components/features/audit/ModuleSidebar';
import { ModuleDetail } from '@/components/features/audit/ModuleDetail';
import { AUDIT_MODULE_DEFINITIONS } from '@/data/modules';

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

        // Auto-select first module if none selected
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

  if (loading) {
    return (
      <div className="flex h-full">
        <div className="w-64 bg-muted animate-pulse" />
        <div className="flex-1 p-8">
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-32 bg-muted rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!selectedBrand || !selectedModule || modules.length === 0) {
    return (
      <div className="flex h-full">
        <ModuleSidebar />
        <div className="flex-1 p-8">
          <p className="text-muted-foreground">
            Select a brand to view audit results
          </p>
        </div>
      </div>
    );
  }

  // Find the selected module from loaded data
  const selectedModuleData = typeof selectedModule === 'string'
    ? modules.find((m) => m.id === selectedModule)
    : selectedModule;

  return (
    <div className="flex h-full bg-white">
      <ModuleSidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-8 max-w-5xl">
          {selectedModuleData && <ModuleDetail module={selectedModuleData} />}
        </div>
      </div>
    </div>
  );
}
