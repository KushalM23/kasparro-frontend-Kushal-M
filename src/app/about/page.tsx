'use client';

import { Mission } from '@/components/features/about/Mission';
import { Philosophy } from '@/components/features/about/Philosophy';
import { Vision } from '@/components/features/about/Vision';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="w-full bg-background transition-colors pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-32"
        >
          <h1 className="text-4xl md:text-6xl tracking-tighter uppercase leading-[0.9] mb-4">
            The Neural <span className="text-primary italic">Context</span>
          </h1>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/80">Corporate Strategy & Core Foundations</p>
        </motion.div>

        <Mission />
        <Philosophy />
        <Vision />
      </div>
    </main>
  );
}
