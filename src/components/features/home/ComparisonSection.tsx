'use client';

import { motion } from 'framer-motion';

export function ComparisonSection() {
  const comparisons = [
    {
      label: 'Objective',
      traditional: 'Keyword Dominance',
      kasparro: 'Semantic Authority',
    },
    {
      label: 'Focus',
      traditional: 'Crawler Indexing',
      kasparro: 'LLM Interpretability',
    },
    {
      label: 'Substrate',
      traditional: 'Search Indices',
      kasparro: 'Neural Networks',
    },
    {
      label: 'Success',
      traditional: 'SERP Rankings',
      kasparro: 'Model Citations',
    },
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-4 lg:text-right">
        <h2 className="text-3xl md:text-5xl font-heading tracking-tighter uppercase">Technical <span className="text-secondary tracking-normal">Evolution</span></h2>
        <p className="text-muted-foreground font-bold text-xs uppercase tracking-widest text-right">Industry Shift Metrics</p>
      </div>

      <div className="border border-border divide-y divide-border">
        <div className="grid grid-cols-3 bg-muted/30">
          <div className="p-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Term</div>
          <div className="p-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Traditional</div>
          <div className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary">Kasparro</div>
        </div>

        {comparisons.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 hover:bg-muted/10 transition-colors"
          >
            <div className="p-4 text-[11px] font-bold uppercase tracking-wider border-r border-border">{item.label}</div>
            <div className="p-4 text-xs font-medium text-muted-foreground border-r border-border">{item.traditional}</div>
            <div className="p-4 text-xs font-bold text-foreground">{item.kasparro}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

