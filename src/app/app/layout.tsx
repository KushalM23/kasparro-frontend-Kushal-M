'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { label: 'Dashboard', href: ROUTES.DASHBOARD },
    { label: 'Audit', href: ROUTES.AUDIT },
    { label: 'Architecture', href: ROUTES.ARCHITECTURE },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] bg-background transition-colors">
      <div className="w-full border-b border-border bg-background py-2">
        <div className="container mx-auto px-4 flex justify-center">
          <nav className="flex items-center gap-1 bg-muted/50 p-1 rounded-full px-6">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "px-6 py-2 text-sm font-medium transition-all hover:text-primary",
                  pathname === tab.href
                    ? "text-primary dark:text-accent"
                    : "text-muted-foreground"
                )}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex items-center justify-center bg-background"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
              <p className="text-sm font-bold tracking-tighter text-muted-foreground uppercase">Entering Workspace</p>
            </div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1 flex flex-col"
          >
            {children}
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
