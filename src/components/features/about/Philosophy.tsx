'use client';

import { motion } from 'framer-motion';

export function Philosophy() {
  return (
    <section className="mb-32">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 lg:order-2"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">02. Product Philosophy</span>
          <h2 className="text-3xl md:text-5xl tracking-tighter uppercase leading-[0.9]">
            Deterministic Systems, <span className="text-primary italic">Not</span> Stochastic Guesses
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-12">
            <div className="p-8 border border-border bg-muted/20">
              <span className="text-3xl font-bold tracking-tighter block text-primary">15Y+</span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 mt-2">Combined Engineering Depth</p>
            </div>
            <div className="p-8 border border-border bg-muted/20">
              <span className="text-3xl font-bold tracking-tighter block text-primary">8.5K</span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 mt-2">Validated Model Markers</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 pt-4 lg:order-1"
        >
          <p className="text-lg font-medium leading-relaxed tracking-tight text-foreground/90">
            Traditional SEO relies on crawling and indexing. AI-SEO requires understanding neural weights and probability. Our philosophy is rooted in evidence-based systems engineering.
          </p>
          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed font-medium">
            <p>
              Founded by a team of distributed systems engineers and search experts, we believe that brand visibility is a data engineering challenge, not a creative exercise.
            </p>
            <p>
              Every insight in the Kasparro platform is backed by empirical testing across production-scale LLMs. We don&apos;t optimize for hope; we engineer for probability, verifying the citation triggers and authoritative markers that matter to modern neural networks.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
