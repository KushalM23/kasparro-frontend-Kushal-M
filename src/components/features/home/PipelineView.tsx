'use client';

import { motion } from 'framer-motion';

export function PipelineView() {
  const steps = [
    {
      title: 'Data Collection',
      description: 'We gather your brand data and mentions from across the web.',
    },
    {
      title: 'Audit Analysis',
      description: 'Your brand is analyzed through our specialized modules to find visibility gaps.',
    },
    {
      title: 'Smart Insights',
      description: 'We provide clear, actionable steps to improve your AI search visibility.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-3.5xl font-heading tracking-tighter uppercase">How It <span className="text-primary tracking-normal">Works</span></h2>
        <p className="text-muted-foreground font-bold text-xs uppercase tracking-widest">Our Three-Step Process</p>
      </div>

      <div className="relative space-y-8">
        {/* Connection Line */}
        <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-border/50" />

        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex items-center gap-8 pl-14"
          >
            {/* Step Number with Square Indicator */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-background border border-border flex items-center justify-center font-bold text-xs z-10 transition-colors group">
              <div className="absolute inset-0 bg-primary/5 transition-opacity opacity-0 group-hover:opacity-100" />
              0{index + 1}
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-sm uppercase tracking-widest">{step.title}</h4>
              <p className="text-sm text-muted-foreground font-medium">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
