/**
 * App Layout - Shared dashboard layout for /app routes
 * 
 * Provides two-column layout with sidebar navigation and header for all dashboard pages
 */

import { DashboardSidebar } from '@/components/layouts/DashboardSidebar';
import { DashboardHeader } from '@/components/layouts/DashboardHeader';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-auto bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}
