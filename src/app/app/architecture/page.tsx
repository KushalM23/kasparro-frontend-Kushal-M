'use client';

import { useState } from 'react';
import { AUDIT_MODULE_DEFINITIONS } from '@/data/modules';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { InputAssemblerNode } from '@/components/features/architecture/InputAssemblerNode';
import { ContextPackNode } from '@/components/features/architecture/ContextPackNode';
import { IntelligenceLayerNode } from '@/components/features/architecture/IntelligenceLayerNode';
import { OutputNode } from '@/components/features/architecture/OutputNode';

export default function ArchitecturePage() {
  const [selectedModule, setSelectedModule] = useState(AUDIT_MODULE_DEFINITIONS[0]);

  return (
    <div className="container mx-auto px-8 py-16 max-w-7xl space-y-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">System Infrastructure</span>
        <h1 className="text-5xl md:text-7xl font-heading tracking-tighter uppercase">
          Neural <span className="text-primary">Architecture</span>
        </h1>
        <p className="text-sm md:text-lg text-muted-foreground max-w-2xl font-medium leading-relaxed">
          The Kasparro engine processes brand signals through a multi-stage deterministic pipeline before arriving at AI-readiness metrics.
        </p>
      </motion.div>

      {/* Pipeline Visualization */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-heading uppercase tracking-tighter">Processing Pipeline</h2>
          <div className="h-[1px] flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="relative">
            <InputAssemblerNode />
            <div className="hidden md:block absolute -right-1 top-1/2 -translate-y-1/2 z-10">
              <Icons.ChevronRight className="w-4 h-4 text-border" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="relative">
            <ContextPackNode />
            <div className="hidden md:block absolute -right-1 top-1/2 -translate-y-1/2 z-10">
              <Icons.ChevronRight className="w-4 h-4 text-border" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="relative">
            <IntelligenceLayerNode />
            <div className="hidden md:block absolute -right-1 top-1/2 -translate-y-1/2 z-10">
              <Icons.ChevronRight className="w-4 h-4 text-primary" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="relative">
            <OutputNode />
          </motion.div>
        </div>
      </section>

      {/* Module Inspection */}
      <section className="space-y-12 pb-24">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-heading uppercase tracking-tighter">Module Inspection</h2>
          <div className="h-[1px] flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
          {/* Module List */}
          <div className="grid grid-cols-1 gap-2">
            {AUDIT_MODULE_DEFINITIONS.map((module, idx) => {
              const Icon = (Icons as any)[module.icon] || Icons.Box;
              const isSelected = selectedModule.id === module.id;

              return (
                <button
                  key={module.id}
                  onClick={() => setSelectedModule(module)}
                  className={cn(
                    "flex items-center gap-4 p-6 border text-left transition-all",
                    isSelected
                      ? "bg-foreground text-background border-foreground"
                      : "border-border hover:bg-muted font-medium"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isSelected ? "text-primary" : "text-muted-foreground")} />
                  <span className="text-xs font-bold uppercase tracking-widest leading-none">
                    {module.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Module Detail Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedModule.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="p-12 border border-border bg-muted/20 flex flex-col justify-between"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Detailed Definition</span>
                  </div>
                  <h3 className="text-4xl font-heading uppercase tracking-tighter leading-tight">
                    {selectedModule.name}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground leading-relaxed max-w-xl">
                    {selectedModule.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-border">
                  <div className="space-y-4">
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Key Dimensions</h4>
                    <ul className="space-y-3">
                      {["Deterministic signal analysis", "Cross-model citation probability", "Entity relationship mapping"].map(item => (
                        <li key={item} className="text-xs font-bold text-foreground flex items-center gap-3">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">Inference Goals</h4>
                    <ul className="space-y-3">
                      {["Visibility optimization", "Trust integrity baseline", "Content gap identification"].map(item => (
                        <li key={item} className="text-xs font-bold text-foreground flex items-center gap-3">
                          <Icons.Plus className="w-2.5 h-2.5 text-secondary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border/50">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  * Module executes in ~200ms within the contextual parallelization engine.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
