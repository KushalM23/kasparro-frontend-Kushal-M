'use client';

import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border mt-auto pt-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <Link href={ROUTES.HOME} className="text-sm font-bold tracking-widest hover:text-primary transition-colors uppercase">HOME &rarr;</Link>
            <Link href={ROUTES.DASHBOARD} className="text-sm font-bold tracking-widest hover:text-primary transition-colors uppercase">DASHBOARD &rarr;</Link>
            <Link href={ROUTES.PLATFORM} className="text-sm font-bold tracking-widest hover:text-primary transition-colors uppercase">PLATFORM &rarr;</Link>
            <Link href={ROUTES.ABOUT} className="text-sm font-bold tracking-widest hover:text-primary transition-colors uppercase">ABOUT &rarr;</Link>
          </div>

          <div className="flex flex-col gap-4 text-left md:text-center">
            <a href="https://linkedin.com/in/kushalm2301" target="_blank" rel="noopener noreferrer" className="text-sm font-bold tracking-widest hover:text-primary transition-colors uppercase">LINKEDIN &rarr;</a>
            <a href="https://github.com/KushalM23" target="_blank" rel="noopener noreferrer" className="text-sm font-bold tracking-widest hover:text-primary transition-colors uppercase">GITHUB &rarr;</a>
            <a href="mailto:kusham2301@gmail.com" className="text-sm font-bold tracking-widest hover:text-primary transition-colors uppercase">CONTACT US &rarr;</a>
          </div>

          <div className="flex flex-col gap-4 text-left md:text-right">
            <a href="#" className="text-sm font-bold tracking-widest hover:text-primary transition-colors uppercase">TERMS & CONDITIONS &rarr;</a>
            <a href="#" className="text-sm font-bold tracking-widest hover:text-primary transition-colors uppercase">PRIVACY POLICY &rarr;</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-end justify-between w-full pb-8 gap-8">
          <div className="text-[12vw] leading-[0.8] font-heading tracking-tighter opacity-10 select-none pointer-events-none uppercase">
            KASPARRO
          </div>
          <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase whitespace-nowrap md:mb-2">
            &copy; 2025 KASPARRO AI-SEO SOLUTIONS INC.
          </p>
        </div>
      </div>
    </footer>
  );
}
