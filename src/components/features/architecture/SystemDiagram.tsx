'use client';

import { InputAssemblerNode } from './InputAssemblerNode';
import { ContextPackNode } from './ContextPackNode';
import { ModuleNode } from './ModuleNode';
import { OutputNode } from './OutputNode';
import { AUDIT_MODULE_DEFINITIONS } from '@/data/modules';
import { ArrowRight } from 'lucide-react';

export function SystemDiagram() {
  return (
    <div className="space-y-8">
      {/* Step 1: Input */}
      <div>
        <h3 className="font-bold mb-4">Step 1: Input Assembly</h3>
        <InputAssemblerNode />
      </div>

      {/* Arrow */}
      <div className="flex justify-center">
        <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
      </div>

      {/* Step 2: Context Pack */}
      <div>
        <h3 className="font-bold mb-4">Step 2: Context Unification</h3>
        <ContextPackNode />
      </div>

      {/* Arrow */}
      <div className="flex justify-center">
        <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
      </div>

      {/* Step 3: Module Processing */}
      <div>
        <h3 className="font-bold mb-4">Step 3: Module Processing (Parallel)</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {AUDIT_MODULE_DEFINITIONS.map((module) => (
            <ModuleNode
              key={module.id}
              icon={module.icon}
              name={module.shortDescription}
              description={module.description}
            />
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center">
        <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
      </div>

      {/* Step 4: Output */}
      <div>
        <h3 className="font-bold mb-4">Step 4: Intelligence Output</h3>
        <OutputNode />
      </div>
    </div>
  );
}
