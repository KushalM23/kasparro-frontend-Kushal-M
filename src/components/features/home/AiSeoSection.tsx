'use client';

import { motion } from 'framer-motion';

export function AiSeoSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-accent/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            The Shift to AI-Native SEO
          </h2>
          <p className="text-muted-foreground">
            Traditional SEO was built for search crawlers. Kasparro builds for the next era: model-driven discovery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional SEO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 border border-border"
          >
            <h3 className="text-lg font-bold mb-6">Traditional SEO</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
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
            className="p-8 border border-primary/50 dark:border-accent/50 bg-gradient-to-r from-[#9bb2e5]/10 to-[#698cbf]/10 dark:from-[#9bb2e5]/10 dark:to-[#698cbf]/5"
          >
            <h3 className="text-lg font-bold mb-6 text-primary dark:text-accent">Kasparro: AI-Native SEO</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 p-8 border border-border"
        >
          <p className="text-center text-foreground font-medium">
            As search evolves toward AI-driven results, brands that understand how AI reads, understands, and ranks content will win in discovery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
