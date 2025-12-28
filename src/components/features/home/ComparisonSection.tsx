'use client';

import { motion } from 'framer-motion';

export function ComparisonSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold">Traditional SEO vs AI-Native SEO</h3>
      <div className="space-y-4">
        {/* Traditional SEO */}
        <div className="space-y-2">
          <h4 className="font-semibold text-muted-foreground">Traditional SEO</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-destructive shrink-0">×</span>
              <span>Optimizes for search engine crawlers</span>
            </li>
            <li className="flex gap-2">
              <span className="text-destructive shrink-0">×</span>
              <span>Focuses on keyword density and backlinks</span>
            </li>
            <li className="flex gap-2">
              <span className="text-destructive shrink-0">×</span>
              <span>Limited visibility into AI comprehension</span>
            </li>
            <li className="flex gap-2">
              <span className="text-destructive shrink-0">×</span>
              <span>Reactive to ranking algorithm updates</span>
            </li>
          </ul>
        </div>

        {/* AI-Native SEO */}
        <div className="space-y-2">
          <h4 className="font-semibold text-primary dark:text-accent">Kasparro: AI-Native SEO</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-primary dark:text-accent shrink-0">✓</span>
              <span>Optimizes for AI understanding and reasoning</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary dark:text-accent shrink-0">✓</span>
              <span>Focuses on E-E-A-T, context, and knowledge</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary dark:text-accent shrink-0">✓</span>
              <span>Direct signals for AI model comprehension</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary dark:text-accent shrink-0">✓</span>
              <span>Proactive optimization for AI-first era</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

