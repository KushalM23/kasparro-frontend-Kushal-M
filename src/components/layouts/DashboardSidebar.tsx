'use client';

import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function DashboardSidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Dashboard', href: ROUTES.DASHBOARD },
    { label: 'Audit Results', href: ROUTES.AUDIT },
    { label: 'Architecture', href: ROUTES.ARCHITECTURE },
  ];

  return (
    <aside className="w-64 border-r bg-muted/50 p-6">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'block px-4 py-2 rounded-md text-sm transition-colors',
              pathname === item.href
                ? 'bg-primary text-primary-foreground font-medium'
                : 'text-muted-foreground hover:bg-background hover:text-foreground'
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
