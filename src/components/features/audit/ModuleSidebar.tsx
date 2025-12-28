'use client';

import { useAuditStore } from '@/stores/auditStore';
import { AUDIT_MODULE_DEFINITIONS, getModuleDefinition } from '@/data/modules';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AuditModule {
  id: string;
  name: string;
  score: number;
}

interface ModuleSidebarProps {
  modules?: AuditModule[];
}

export function ModuleSidebar({ modules }: ModuleSidebarProps) {
  const { selectedModule, setSelectedModule } = useAuditStore();

  const displayModules = modules ||
    AUDIT_MODULE_DEFINITIONS.map(def => ({
      id: def.id,
      name: def.name,
      score: 0
    }));

  return (
    <aside className="w-80 border-r border-border bg-background flex flex-col h-full">
      <div className="p-8 border-b border-border">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Index</span>
        <h3 className="text-xl font-heading uppercase tracking-tighter mt-1">Audit <span className="text-primary">Layers</span></h3>
      </div>

      <nav className="flex-1 overflow-y-auto">
        {displayModules.map((module, idx) => {
          const moduleDefinition = getModuleDefinition(module.id as any);
          const IconComponent = moduleDefinition ? (Icons as any)[moduleDefinition.icon] : null;
          const isSelected = selectedModule === module.id || (selectedModule as any)?.id === module.id;

          return (
            <motion.button
              key={module.id}
              onClick={() => setSelectedModule(module.id as any)}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={cn(
                'w-full text-left px-8 py-6 transition-all flex items-center justify-between group border-b border-border last:border-0',
                isSelected
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-primary/5'
              )}
            >
              <div className="flex items-center gap-4">
                {IconComponent && (
                  <IconComponent className={cn(
                    'w-4 h-4 shrink-0',
                    isSelected ? 'text-primary-foreground' : 'text-primary'
                  )} />
                )}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider leading-tight">
                    {moduleDefinition?.name || module.name}
                  </div>
                  <div className={cn(
                    'text-[10px] font-bold uppercase tracking-widest mt-1',
                    isSelected ? 'opacity-70' : 'text-muted-foreground'
                  )}>
                    DIMENSION {idx + 1}
                  </div>
                </div>
              </div>
              <div className={cn(
                'text-lg font-heading tracking-tighter',
                isSelected ? 'text-primary-foreground' : 'text-secondary'
              )}>
                {module.score}
              </div>
            </motion.button>
          );
        })}
      </nav>
    </aside>
  );
}
