'use client';

import { motion } from 'framer-motion';

export function Mission() {
  return (
    <section className="mb-32">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">01. Our Mission</span>
          <h2 className="text-3xl md:text-5xl tracking-tighter uppercase leading-[0.9]">
            To provide <span className="text-primary italic">Absolute</span> neural transparency
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 pt-4"
        >
          <p className="text-lg font-medium leading-relaxed tracking-tight text-foreground/90">
            We engineer the bridge between brand data and neural discovery. Our mission is to decode the probabilistic nature of AI engines like ChatGPT, Gemini, and Claude to reveal how they perceive and suggest your brand.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed font-medium">
            In an era where search results are generated rather than indexed, observability is the only viable strategy. We build the tools that allow organizations to see through the algorithmic black box and take control of their digital story.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-12">
            <div className="p-8 border border-border bg-muted/20">
              <span className="text-3xl font-bold tracking-tighter block text-primary">TRUST</span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 mt-2">Core Foundation</p>
            </div>
            <div className="p-8 border border-border bg-muted/20">
              <span className="text-3xl font-bold tracking-tighter block text-primary">CLARITY</span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 mt-2">Product Goal</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
