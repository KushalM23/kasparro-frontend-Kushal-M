/**
 * App Layout - Shared dashboard layout for /app routes
 * 
 * Provides two-column layout with sidebar navigation for all dashboard pages
 */

'use client';

import { DashboardSidebar } from '@/components/layouts/DashboardSidebar';
import { motion } from 'framer-motion';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex h-screen bg-background text-foreground transition-colors"
    >
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-auto bg-background">
          {children}
        </main>
      </div>
    </motion.div>
  );
}
