'use client';

import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Settings } from 'lucide-react';

export function DashboardSidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Dashboard', href: ROUTES.DASHBOARD, icon: LayoutDashboard },
    { label: 'Audit', href: ROUTES.AUDIT, icon: FileText },
    { label: 'Architecture', href: ROUTES.ARCHITECTURE, icon: Settings },
  ];

  return (
    <aside className="w-64 border-r border-border bg-background flex-col p-6 transition-colors hidden md:flex">
      <Link 
        href={ROUTES.HOME}
        className="mb-8 text-xl font-bold bg-gradient-to-r from-[#9bb2e5] to-[#698cbf] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
      >
        KASPARRO
      </Link>

      <nav className="space-y-2 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'block px-4 py-3 text-sm transition-all flex items-center gap-3',
                isActive
                  ? 'bg-gradient-to-r from-[#9bb2e5] to-[#698cbf] text-foreground font-medium'
                  : 'text-muted-foreground hover:bg-primary/10 dark:hover:bg-accent/10 hover:text-foreground'
              )}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer links */}
      <div className="pt-6 border-t border-border space-y-2 text-xs text-muted-foreground">
        <Link 
          href="/" 
          className="block hover:text-foreground transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </aside>
  );
}
