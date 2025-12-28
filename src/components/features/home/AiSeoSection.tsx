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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why AI-Native SEO Differs
          </h2>
          <p className="text-muted-foreground">
            Traditional SEO is optimized for search crawlers. AI-native SEO is optimized for AI understanding.
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
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-destructive shrink-0">×</span>
                <span>Optimizes for search engine crawlers</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive shrink-0">×</span>
                <span>Focuses on keyword density and backlinks</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive shrink-0">×</span>
                <span>Limited visibility into AI comprehension</span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive shrink-0">×</span>
                <span>Reactive to ranking algorithm updates</span>
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
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary dark:text-accent shrink-0">✓</span>
                <span>Optimizes for AI understanding and reasoning</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary dark:text-accent shrink-0">✓</span>
                <span>Focuses on E-E-A-T, context, and knowledge</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary dark:text-accent shrink-0">✓</span>
                <span>Direct signals for AI model comprehension</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary dark:text-accent shrink-0">✓</span>
                <span>Proactive optimization for AI-first era</span>
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
          <p className="text-center text-foreground italic">
            As search evolves toward AI-driven results, brands that understand how AI reads, understands, and ranks content will win in discovery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
