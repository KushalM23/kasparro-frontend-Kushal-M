'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-4 mt-auto overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 mb-8">
          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            <Link 
              href="/" 
              className="text-xs font-semibold uppercase tracking-wide text-foreground hover:text-primary dark:hover:text-accent transition-colors cursor-pointer inline-block"
            >
              HOME →
            </Link>
            <Link 
              href="/platform" 
              className="text-xs font-semibold uppercase tracking-wide text-foreground hover:text-primary dark:hover:text-accent transition-colors cursor-pointer inline-block"
            >
              PLATFORM →
            </Link>
            <Link 
              href="/about" 
              className="text-xs font-semibold uppercase tracking-wide text-foreground hover:text-primary dark:hover:text-accent transition-colors cursor-pointer inline-block"
            >
              ABOUT →
            </Link>
            <Link 
              href="/app/dashboard" 
              className="text-xs font-semibold uppercase tracking-wide text-foreground hover:text-primary dark:hover:text-accent transition-colors cursor-pointer inline-block"
            >
              OUR PRODUCT →
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-2">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-wide text-foreground hover:text-primary dark:hover:text-accent transition-colors cursor-pointer inline-block"
            >
              LINKEDIN →
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-wide text-foreground hover:text-primary dark:hover:text-accent transition-colors cursor-pointer inline-block"
            >
              GITHUB →
            </a>
            <a 
              href="mailto:contact@kasparro.com" 
              className="text-xs font-semibold uppercase tracking-wide text-foreground hover:text-primary dark:hover:text-accent transition-colors cursor-pointer inline-block"
            >
              CONTACT US →
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2">
            <Link 
              href="/terms" 
              className="text-xs font-semibold uppercase tracking-wide text-foreground hover:text-primary dark:hover:text-accent transition-colors cursor-pointer inline-block"
            >
              TERMS & CONDITIONS →
            </Link>
            <Link 
              href="/privacy" 
              className="text-xs font-semibold uppercase tracking-wide text-foreground hover:text-primary dark:hover:text-accent transition-colors cursor-pointer inline-block"
            >
              PRIVACY POLICY →
            </Link>
          </div>
        </div>

        {/* Brand Section */}
        <div className="flex justify-between items-end pt-8 border-t border-border">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#9bb2e5] to-[#698cbf] bg-clip-text text-transparent">
            KASPARRO
          </div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0">
            © 2025 KASPARRO INC.
          </p>
        </div>
      </div>
    </footer>
  );
}
