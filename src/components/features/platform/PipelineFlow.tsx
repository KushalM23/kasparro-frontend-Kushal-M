'use client';

import { motion } from 'framer-motion';

export function PipelineFlow() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="mb-16 md:mb-32 border-t border-border pt-8 md:pt-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl tracking-tighter mb-8 md:mb-12"
      >
        How Our Platform Analyzes Your Brand
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {[
          { stage: 'Stage 01', title: 'Data Collection', desc: 'We gather information from your primary domains and social channels to build a complete picture of your digital presence.' },
          { stage: 'Stage 02', title: 'Context Mapping', desc: 'We organize your brand data into categories that AI models understand, ensuring that your core values and expertise are clearly identified.' },
          { stage: 'Stage 03', title: 'Core Audit', desc: 'Your brand is analyzed through our 7 specialized modules, testing how accurately you are represented in major AI platforms.' },
          { stage: 'Stage 04', title: 'Actionable Report', desc: 'We generate a detailed report with prioritized recommendations and a Visibility Index to track your progress over time.' }
        ].map((step, idx) => (
          <motion.div key={idx} variants={item} className="p-6 md:p-8 border border-border space-y-4 hover:border-primary transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{step.stage}</span>
            <h3 className="tracking-tight text-sm uppercase font-bold">{step.title}</h3>
            <p className="text-xs text-muted-foreground leading-normal font-medium">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
