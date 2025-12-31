'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';
import { motion } from 'framer-motion';
export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl text-left"
    >
      <h1 className="text-4xl md:text-4xl font-heading tracking-tighter leading-[0.9] mb-6 md:mb-8 uppercase">
        AI-native SEO & Brand Intelligence platform
      </h1>
      <p className="text-base md:text-xl font-medium text-muted-foreground mb-8 md:mb-10 leading-relaxed tracking-tight">
        Engineer your brand&apos;s presence for the neural search era. Audit, decode, and optimize your visibility across ChatGPT, Gemini, and Perplexity with 7 specialized intelligence modules.
      </p>
      <Button asChild size="lg" className="h-12 md:h-14 px-8 md:px-10 text-xs md:text-sm uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/80 dark:hover:bg-accent transition-all rounded-none border-0">
        <Link href={ROUTES.DASHBOARD}>Run Audit</Link>
      </Button>
    </motion.div>
  );
}
