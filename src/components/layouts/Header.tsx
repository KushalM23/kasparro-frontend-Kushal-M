'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href={ROUTES.HOME} className="flex items-center gap-2 font-bold text-xl">
          <span className="text-primary">K</span>asparro
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex gap-6">
          <Link
            href={ROUTES.PLATFORM}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Platform
          </Link>
          <Link
            href={ROUTES.ABOUT}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href={ROUTES.ARCHITECTURE}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Architecture
          </Link>
        </nav>

        {/* CTA Button */}
        <Button asChild variant="default" size="sm">
          <Link href={ROUTES.AUDIT}>Run Audit</Link>
        </Button>
      </div>
    </header>
  );
}
