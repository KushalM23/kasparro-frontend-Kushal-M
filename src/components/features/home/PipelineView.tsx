'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function PipelineView() {
  const steps = [
    {
      title: 'Input',
      description: 'Brand domain & content structure',
    },
    {
      title: 'Processing',
      description: 'Run 7 specialized AI audit modules',
    },
    {
      title: 'Output',
      description: 'Scores, insights & recommendations',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold">The Kasparro Pipeline</h3>
      <div className="flex flex-col gap-6">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-2 border-primary dark:border-accent flex items-center justify-center bg-gradient-to-br from-[#9bb2e5]/10 to-[#698cbf]/10">
                <span className="text-sm font-bold text-primary dark:text-accent">{index + 1}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 h-12 bg-border mt-2" />
              )}
            </div>
            <div className="flex-1 pt-2">
              <h4 className="font-semibold mb-1">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
