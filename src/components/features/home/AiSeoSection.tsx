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
        className="text-left mb-6 md:mb-8"
      >
        <h2 className="text-2xl md:text-4xl font-heading mb-4 leading-[0.9] uppercase">
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
          className="p-4 md:p-6 border border-border flex flex-col"
        >
          <h3 className="text-sm font-bold mb-6 uppercase tracking-widest border-b border-border pb-4">Traditional SEO</h3>
          <ul className="space-y-4 text-sm text-muted-foreground tracking-tight">
            <li className="flex gap-3">
              <span className="text-destructive shrink-0">×</span>
              <span>Optimizes for crawler indexing and keyword density</span>
            </li>
            <li className="flex gap-3">
              <span className="text-destructive shrink-0">×</span>
              <span>Relies on backlink volume and metadata hacks</span>
            </li>
            <li className="flex gap-3">
              <span className="text-destructive shrink-0">×</span>
              <span>Blind to neural weights and vector embeddings</span>
            </li>
            <li className="flex gap-3">
              <span className="text-destructive shrink-0">×</span>
              <span>Reactive to opaque algorithm shifts</span>
            </li>
          </ul>
        </motion.div>

        {/* AI-Native SEO */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-4 md:p-6 border border-primary/50 dark:border-accent/50 bg-primary/5 flex flex-col"
        >
          <h3 className="text-sm font-bold mb-6 text-primary dark:text-accent uppercase tracking-widest border-b border-primary/20 pb-4">Kasparro: AI-Native</h3>
          <ul className="space-y-4 text-sm text-muted-foreground tracking-tight">
            <li className="flex gap-3">
              <span className="text-primary dark:text-accent shrink-0">✓</span>
              <span>Engineers for vector relevance and citation probability</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary dark:text-accent shrink-0">✓</span>
              <span>Prioritizes semantic authority and knowledge graph integrity</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary dark:text-accent shrink-0">✓</span>
              <span>Direct telemetry into LLM response patterns</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary dark:text-accent shrink-0">✓</span>
              <span>Proactive architecture for the generative web</span>
            </li>
          </ul>
        </motion.div>
      </div>

    </div>
  );
}
