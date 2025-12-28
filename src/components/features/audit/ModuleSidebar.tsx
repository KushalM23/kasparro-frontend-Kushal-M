'use client';

import { useAuditStore } from '@/stores/auditStore';
import { AUDIT_MODULE_DEFINITIONS } from '@/data/modules';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

export function ModuleSidebar() {
  const { selectedModule, setSelectedModule } = useAuditStore();

  return (
    <aside className="w-64 border-r bg-muted/50 p-4 overflow-y-auto">
      <h3 className="font-bold mb-4 px-2">Audit Modules</h3>
      <nav className="space-y-2">
        {AUDIT_MODULE_DEFINITIONS.map((module) => {
          const IconComponent = (Icons as any)[module.icon];
          const isSelected = selectedModule === module.id || (selectedModule as any)?.id === module.id;

          return (
            <button
              key={module.id}
              onClick={() => setSelectedModule(module.id)}
              className={cn(
                'w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2',
                isSelected
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-background hover:text-foreground'
              )}
            >
              {IconComponent && <IconComponent className="w-4 h-4" />}
              <span>{module.shortDescription}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
