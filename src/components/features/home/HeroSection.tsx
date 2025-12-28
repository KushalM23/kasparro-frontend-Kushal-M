'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';
import { motion } from 'framer-motion';
import { AUDIT_MODULE_DEFINITIONS } from '@/data/modules';
import * as Icons from 'lucide-react';

export function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-5xl font-heading tracking-tighter leading-[0.9] mb-8 uppercase">
            AI-native SEO & Brand Intelligence platform
          </h1>
          <p className="text-lg md:text-xl font-medium text-muted-foreground mb-10 leading-relaxed tracking-tight">
            Comprehensive audits for the era of generative intelligence.
          </p>
          <Button asChild size="lg" className="h-14 px-10 text-sm font-bold uppercase tracking-widest bg-foreground text-background hover:bg-primary dark:hover:bg-accent transition-all rounded-none border-0">
            <Link href={ROUTES.DASHBOARD}>Run AI-SEO Audit</Link>
          </Button>
        </motion.div>

        {/* Right: Core Modules Section */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/5 to-secondary/5 blur-3xl -z-10" />
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {AUDIT_MODULE_DEFINITIONS.map((module, index) => {
              const IconComponent = (Icons as any)[module.icon];
              return (
                <motion.div
                  key={module.id}
                  variants={item}
                  className={index === 6 ? "sm:col-span-3 lg:col-span-1" : ""}
                >
                  <div className="h-full p-4 border border-border bg-background/50 backdrop-blur-sm group hover:border-primary transition-colors flex flex-col gap-3">
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    )}
                    <h3 className="font-bold text-[10px] sm:text-xs uppercase tracking-widest leading-tight">
                      {module.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
