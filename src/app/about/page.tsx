'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="w-full bg-background transition-colors pt-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Page Header */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-3xl"
          >
            <h1 className="text-5xl md:text-8xl font-heading tracking-tighter uppercase leading-[0.85]">
              Neural <span className="text-primary tracking-normal">Clarity</span>
            </h1>
            <p className="text-muted-foreground font-bold text-xs uppercase tracking-[0.3em]">Corporate Philosophy & Founders</p>
          </motion.div>
        </section>

        {/* Founder Credibility */}
        <section className="mb-32 grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-heading uppercase tracking-tighter">Engineered with <span className="text-secondary tracking-normal">Precision</span></h2>
            <div className="space-y-4 text-sm font-medium leading-relaxed text-muted-foreground">
              <p>
                Kasparro was founded by a collective of systems engineers and search architects who identified the inevitable transition from crawl-based indexing to neural reasoning.
              </p>
              <p>
                Our expertise in large-scale data infrastructure and machine learning allows us to dismantle the "black box" of AI discovery. We don't guess how LLMs perceive brands; we build deterministic testing frameworks to audit them.
              </p>
              <p>
                The platform represents thousands of hours of model benchmarking and technical validation, ensuring that every recommendation is rooted in empirical evidence and model-specific logic.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-muted/30 border border-border p-8 flex flex-col justify-end">
              <span className="text-[40px] font-heading text-primary leading-none">15+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest mt-4">Years in Systems Engineering</span>
            </div>
            <div className="aspect-square bg-muted/30 border border-border p-8 flex flex-col justify-end">
              <span className="text-[40px] font-heading text-secondary leading-none">8.5k</span>
              <span className="text-[10px] font-bold uppercase tracking-widest mt-4">Validated Model Signatures</span>
            </div>
          </div>
        </section>

        {/* Three Pillars: Mission, Philosophy, Vision */}
        <section className="grid md:grid-cols-3 gap-px bg-border mb-32 border border-border">
          {/* Mission */}
          <div className="bg-background p-10 space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">01. Mission</span>
            <h3 className="text-xl font-heading uppercase tracking-tight">The Neural Edge</h3>
            <p className="text-xs font-medium leading-relaxed text-muted-foreground">
              Our mission is to provide global brands with absolute transparency into the neural networks that govern modern commerce. We bridge the gap between human intent and machine comprehension.
            </p>
          </div>

          {/* Philosophy */}
          <div className="bg-background p-10 space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">02. Philosophy</span>
            <h3 className="text-xl font-heading uppercase tracking-tight">Technical Determinism</h3>
            <p className="text-xs font-medium leading-relaxed text-muted-foreground">
              We operate on the principle of technical determinism. Every insight delivered by Kasparro must be reproducible, verifiable, and aligned with model-specific diagnostic outputs.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-background p-10 space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">03. Vision</span>
            <h3 className="text-xl font-heading uppercase tracking-tight">Deterministic SEO</h3>
            <p className="text-xs font-medium leading-relaxed text-muted-foreground">
              We envision a future where brand visibility is no longer a heuristic gamble. In the agentic era, visibility is an engineered outcome of high-quality, contexts-rich structured knowledge.
            </p>
          </div>
        </section>

        {/* Commitment */}
        <section className="mb-32 text-center max-w-2xl mx-auto py-20 pb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground mb-8">Architectural Commitment</h2>
            <p className="text-lg font-bold leading-relaxed">
              "We don't build tools for search engines. We build interfaces for intelligence. Kasparro is the operating system for the AI-first age."
            </p>
            <div className="mt-12 h-[1px] w-20 bg-primary mx-auto" />
          </motion.div>
        </section>
      </div>
    </main>
  );
}
