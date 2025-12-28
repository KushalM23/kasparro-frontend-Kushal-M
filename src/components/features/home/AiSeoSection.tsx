'use client';

import { motion } from 'framer-motion';

export function AiSeoSection() {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-left mb-8"
      >
        <h2 className="text-3xl md:text-3.5xl font-heading mb-4 leading-[0.9] uppercase">
          Traditional SEO vs AI-Native SEO
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Traditional SEO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 border border-border flex flex-col"
        >
          <h3 className="text-sm font-bold mb-6 uppercase tracking-widest border-b border-border pb-4">Traditional SEO</h3>
          <ul className="space-y-4 text-sm text-muted-foreground tracking-tight">
            <li className="flex gap-3">
              <span className="text-destructive shrink-0">×</span>
              <span>Optimizes for heuristic-based search crawlers</span>
            </li>
            <li className="flex gap-3">
              <span className="text-destructive shrink-0">×</span>
              <span>Prioritizes keyword frequency and backlink volume</span>
            </li>
            <li className="flex gap-3">
              <span className="text-destructive shrink-0">×</span>
              <span>Zero visibility into LLM comprehension or reasoning</span>
            </li>
            <li className="flex gap-3">
              <span className="text-destructive shrink-0">×</span>
              <span>Reactive strategy based on ranking volatility</span>
            </li>
          </ul>
        </motion.div>

        {/* AI-Native SEO */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 border border-primary/50 dark:border-accent/50 bg-primary/5 flex flex-col"
        >
          <h3 className="text-sm font-bold mb-6 text-primary dark:text-accent uppercase tracking-widest border-b border-primary/20 pb-4">Kasparro: AI-Native</h3>
          <ul className="space-y-4 text-sm text-muted-foreground tracking-tight">
            <li className="flex gap-3">
              <span className="text-primary dark:text-accent shrink-0">✓</span>
              <span>Optimizes for LLM entity recognition and neural reasoning</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary dark:text-accent shrink-0">✓</span>
              <span>Prioritizes E-E-A-T signals and Knowledge Graph integrity</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary dark:text-accent shrink-0">✓</span>
              <span>Direct analysis of model citation and reference triggers</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary dark:text-accent shrink-0">✓</span>
              <span>Proactive indexing for agentic search workflows</span>
            </li>
          </ul>
        </motion.div>
      </div>

    </div>
  );
}
