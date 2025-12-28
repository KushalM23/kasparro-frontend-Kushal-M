'use client';

import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const isAppRoute = pathname?.startsWith('/app');

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = isAppRoute ? [
    { label: 'Dashboard', href: ROUTES.DASHBOARD },
    { label: 'Audit', href: ROUTES.AUDIT },
    { label: 'Architecture', href: ROUTES.ARCHITECTURE },
  ] : [
    { label: 'Platform', href: ROUTES.PLATFORM },
    { label: 'About', href: ROUTES.ABOUT },
    { label: 'Our Product', href: ROUTES.DASHBOARD },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-background border-b border-border z-50 transition-colors"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={ROUTES.HOME}
          className="text-2xl md:text-3xl font-heading tracking-tighter hover:text-primary transition-colors text-foreground"
        >
          KASPARRO
        </Link>

        {/* Navigation Container - Horizontal Layout */}
        <nav className="hidden md:flex items-center gap-1 bg-primary p-1 border border-border">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-background/10",
                pathname === item.href
                  ? "bg-primary-foreground text-primary"
                  : "text-primary-foreground/90"
              )}
            >
              {item.label}
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1.5 text-primary-foreground hover:bg-background/10 border-l border-primary-foreground/20 transition-all flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-3.5 h-3.5 fill-current" /> : <Moon className="w-3.5 h-3.5 fill-current" />}
          </button>
        </nav>

        {/* Mobile Toggle (Simple) */}
        <button
          className="md:hidden p-2 text-muted-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden w-full overflow-hidden flex flex-col gap-2 bg-muted p-4 border border-border"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "w-full px-4 py-3 text-xs font-bold uppercase tracking-widest border border-transparent",
                    pathname === item.href ? "bg-foreground text-background" : "hover:border-border"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-xs font-bold uppercase tracking-widest border border-border flex items-center justify-between"
              >
                <span>THEME</span>
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
