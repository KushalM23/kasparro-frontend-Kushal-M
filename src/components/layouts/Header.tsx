'use client';

import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Platform', href: ROUTES.PLATFORM },
    { label: 'About', href: ROUTES.ABOUT },
    { label: 'Our Product', href: ROUTES.DASHBOARD },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background transition-colors">
      <div className="container mx-auto px-4 md:px-6 py-4">
        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between">
          <Link 
            href={ROUTES.HOME} 
            className="text-2xl font-bold bg-gradient-to-r from-[#9bb2e5] to-[#698cbf] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            KASPARRO
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {mobileMenuOpen && (
            <nav className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 space-y-3 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-primary dark:text-accent"
                      : "text-muted-foreground hover:text-primary dark:hover:text-accent"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left spacer */}
          <div className="flex-1" />
          
          {/* Logo - Centered */}
          <div className="flex-1 flex justify-center">
            <Link 
              href={ROUTES.HOME} 
              className="text-3xl font-bold bg-gradient-to-r from-[#9bb2e5] to-[#698cbf] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              KASPARRO
            </Link>
          </div>

          {/* Navigation - Right side, aligned with logo */}
          <nav className="flex-1 flex justify-end gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-primary dark:text-accent"
                    : "text-muted-foreground hover:text-primary dark:hover:text-accent"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
