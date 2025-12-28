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
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#9bb2e5] to-[#698cbf] bg-clip-text text-transparent">
            AI-Native SEO & Brand Intelligence
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For the AI-first search era. Kasparro audits your brand for ChatGPT, Gemini, Perplexity, and beyond.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#9bb2e5] to-[#698cbf] hover:opacity-90 text-foreground border-0">
            <Link href={ROUTES.DASHBOARD}>Run Audit</Link>
          </Button>
        </motion.div>

        {/* Right: Core Modules Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-4"
        >
          {AUDIT_MODULE_DEFINITIONS.map((module) => {
            const IconComponent = (Icons as any)[module.icon];
            return (
              <motion.div
                key={module.id}
                variants={item}
                className="group p-4 border border-border hover:border-primary/50 dark:hover:border-accent/50 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-3 mb-2">
                  {IconComponent && (
                    <div className="p-2 bg-gradient-to-br from-[#9bb2e5]/20 to-[#698cbf]/20 group-hover:from-[#9bb2e5]/30 group-hover:to-[#698cbf]/30 transition-colors">
                      <IconComponent className="w-4 h-4 text-primary dark:text-accent" />
                    </div>
                  )}
                  <h3 className="font-semibold text-sm group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {module.shortDescription}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
