'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';
import { motion } from 'framer-motion';
import { AUDIT_MODULE_DEFINITIONS } from '@/data/modules';
import * as Icons from 'lucide-react';

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl text-left"
    >
      <h1 className="text-5xl md:text-4xl font-heading tracking-tighter leading-[0.9] mb-8 uppercase">
        AI-native SEO & Brand Intelligence platform
      </h1>
      <p className="text-lg md:text-xl font-medium text-muted-foreground mb-10 leading-relaxed tracking-tight">
        A comprehensive brand intelligence platform that audits and optimizes how your brand appears in AI-powered search engines through 7 specialized analysis modules
      </p>
      <Button asChild size="lg" className="h-14 px-10 text-sm uppercase tracking-widest bg-primary text-background hover:bg-primary/80 dark:hover:bg-accent transition-all rounded-none border-0">
        <Link href={ROUTES.DASHBOARD}>Run Audit</Link>
      </Button>
    </motion.div>
  );
}
