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

  // If modules with scores provided, use them; otherwise use definitions
  const displayModules = modules || 
    AUDIT_MODULE_DEFINITIONS.map(def => ({
      id: def.id,
      name: def.name,
      score: 0
    }));

  return (
    <aside className="w-64 border-r border-border bg-background p-4 overflow-y-auto h-full">
      <div className="mb-6">
        <h3 className="font-bold px-2 text-foreground">Audit Modules</h3>
        <p className="text-xs text-muted-foreground px-2 mt-1">Click to view details</p>
      </div>
      
      <nav className="space-y-2">
        {displayModules.map((module, idx) => {
          const moduleDefinition = getModuleDefinition(module.id as any);
          const IconComponent = moduleDefinition ? (Icons as any)[moduleDefinition.icon] : null;
          const isSelected = selectedModule === module.id || (selectedModule as any)?.id === module.id;

          return (
            <motion.button
              key={module.id}
              onClick={() => setSelectedModule(module.id as any)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={cn(
                'w-full text-left px-3 py-3 text-sm transition-all flex items-start gap-3 group',
                isSelected
                  ? 'bg-primary dark:bg-accent text-primary-foreground dark:text-accent-foreground shadow-md'
                  : 'text-muted-foreground hover:bg-primary/10 dark:hover:bg-accent/10 hover:text-foreground border border-transparent hover:border-primary/30 dark:hover:border-accent/30'
              )}
            >
              {IconComponent && (
                <IconComponent className={cn(
                  'w-4 h-4 mt-0.5 shrink-0',
                  isSelected ? 'text-current' : 'group-hover:text-primary dark:group-hover:text-accent'
                )} />
              )}
              <div className="flex-1">
                <div className="font-semibold leading-tight">{moduleDefinition?.shortDescription || module.name}</div>
                <div className={cn(
                  'text-xs mt-1',
                  isSelected ? 'opacity-90' : 'text-muted-foreground'
                )}>
                  Score: {module.score}
                </div>
              </div>
            </motion.button>
          );
        })}
      </nav>
    </aside>
  );
}
