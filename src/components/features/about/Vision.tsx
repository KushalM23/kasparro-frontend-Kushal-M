'use client';

import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

export function Vision() {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">03. The Vision</span>
          <h2 className="text-3xl md:text-5xl tracking-tighter uppercase leading-[0.9]">
            Democratic access to <span className="text-primary italic">Intelligence</span>
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
            We envision a web where brands of all sizes can thrive in the AI era. A future where the relationship between creators and AI search engines is symbiotic, based on accuracy and value.
          </p>
          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed font-medium">
            <p>
              As the internet shifts from websites to knowledge bases, Kasparro’s vision is to become the universal bridge for brand clarity. We are building the infrastructure that will power how information is discovered, verified, and cited in the next decade of digital interaction.
            </p>
            <div className="p-12 border-2 border-primary/20 bg-primary/5 mt-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Info className="w-24 h-24 text-primary" />
              </div>
              <h4 className="text-2xl tracking-tight uppercase mb-4 text-foreground">The AI-First Standard</h4>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                We aren't just building a tool; we are setting the standard for how brands measure their influence in neural networks.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
