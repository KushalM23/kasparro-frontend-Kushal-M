'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md text-center space-y-8"
      >
        <div className="space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Null Reference</span>
          <h1 className="text-8xl font-heading tracking-tighter uppercase leading-none text-foreground">
            404
          </h1>
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            The requested neural path does not exist.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Button asChild className="h-14 px-10 text-xs uppercase tracking-widest rounded-none border-0 bg-primary text-primary-foreground hover:bg-primary/80">
            <Link href={ROUTES.HOME}>Neural Home</Link>
          </Button>
          <Button variant="outline" asChild className="h-14 px-10 text-xs uppercase tracking-widest rounded-none border border-border bg-transparent hover:bg-muted">
            <Link href={ROUTES.DASHBOARD}>Return to Command Center</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
