'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';
import { motion } from 'framer-motion';

export function CtaSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-r from-primary/5 via-secondary/5 to-transparent dark:from-accent/5 dark:via-secondary/10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Optimize for AI Search?
          </h2>
          <p className="text-lg text-muted-foreground">
            Run a comprehensive AI-SEO audit to understand how AI models perceive your content and identify optimization opportunities.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90">
            <Link href={ROUTES.AUDIT}>Run Your Audit Now</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
