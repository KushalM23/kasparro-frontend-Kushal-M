/**
 * About Page - Company Information
 * URL: /about
 * 
 * Displays mission, philosophy, and vision of Kasparro
 */

'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border bg-gradient-to-b from-primary/5 to-transparent dark:from-accent/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              About Kasparro
            </h1>
            <p className="text-lg text-muted-foreground">
              Building the future of AI-native search intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To empower brands to thrive in the AI-first search era by providing transparent, actionable intelligence about how AI models understand their content.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that as search evolves from traditional keyword matching to AI reasoning and comprehension, brands need new tools to understand and optimize for this fundamental shift. Kasparro bridges this gap by offering the first comprehensive platform designed specifically for AI-native SEO.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: 'Transparency',
                  description: 'Clear visibility into how AI models perceive and rank your content',
                },
                {
                  title: 'Actionability',
                  description: 'Concrete recommendations based on data-driven AI analysis',
                },
                {
                  title: 'Proactivity',
                  description: 'Stay ahead of industry changes with forward-thinking optimization',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="p-6 border border-border"
                >
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Philosophy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We approach product design with a focus on system thinking and data-driven decision making.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Modular Architecture',
                  description:
                    'The 7 core audit modules are designed independently, allowing for specialized deep-dive analysis while maintaining system coherence.',
                },
                {
                  title: 'Data-Driven Design',
                  description:
                    'Every feature, recommendation, and insight is backed by structured data and rigorous analysis, not assumptions or trends.',
                },
                {
                  title: 'Clarity Over Complexity',
                  description:
                    'We simplify complex AI concepts into actionable, understandable metrics that non-technical users can grasp immediately.',
                },
                {
                  title: 'Continuous Evolution',
                  description:
                    'As AI search rapidly evolves, our platform updates to reflect new signals, new models, and emerging best practices.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 border border-border"
                >
                  <h3 className="font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vision for AI-First Search</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The search landscape is fundamentally shifting. We envision a world where:
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Brands prioritize E-E-A-T signals and authentic expertise over keyword stuffing',
                'Content is optimized for AI comprehension and reasoning, not just crawler indexing',
                'Search visibility extends beyond traditional SERPs to include AI-generated results and citations',
                'Brand intelligence is a core strategic function, not a sidebar SEO task',
                'Organizations understand their AI-SEO performance as clearly as they understand traditional search metrics',
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 border border-border/50 bg-gradient-to-r from-[#9bb2e5]/10 to-[#698cbf]/10 dark:from-[#9bb2e5]/10 dark:to-[#698cbf]/5"
                >
                  <div className="text-primary dark:text-accent shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-foreground">{point}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 border border-primary/50 dark:border-accent/50 bg-gradient-to-r from-[#9bb2e5]/10 to-[#698cbf]/10 dark:from-[#9bb2e5]/10 dark:to-[#698cbf]/5">
              <p className="text-center text-lg italic text-foreground">
                Kasparro is built by engineers who understand both traditional SEO and modern AI. We're committed to helping brands navigate this era of search transformation with clarity, confidence, and data-driven strategy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
