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
    <aside className="w-full md:w-80 border-b md:border-b-0 md:border-r border-border bg-background flex flex-col md:h-full">
      <div className="p-4 md:p-8 border-b border-border">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/80">Index</span>
        <h3 className="text-lg md:text-xl uppercase tracking-tighter mt-1">Audit <span className="text-primary">Layers</span></h3>
      </div>

      <nav className="flex md:flex-col overflow-x-auto md:overflow-x-visible md:overflow-y-auto custom-scrollbar flex-1">
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
                'text-left px-4 py-4 md:px-8 md:py-6 transition-all flex items-center justify-between group border-r md:border-r-0 md:border-b border-border/50 last:border-0 flex-shrink-0 md:w-full',
                isSelected
                  ? 'bg-primary text-white shadow-inner'
                  : 'text-foreground hover:bg-muted/50'
              )}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex flex-col">
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider leading-tight whitespace-nowrap md:whitespace-normal">
                    {moduleDefinition?.name || module.name}
                  </div>
                  <div className={cn(
                    'text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mt-1',
                    isSelected ? 'text-white/80' : 'text-muted-foreground/60'
                  )}>
                    DIM 0{idx + 1}
                  </div>
                </div>
              </div>
              <div className={cn(
                'text-xl md:text-2xl font-heading tracking-tighter ml-2',
                isSelected ? 'text-white' : 'text-foreground/20'
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
