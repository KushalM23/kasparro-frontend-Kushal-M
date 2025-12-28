'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          AI-Native SEO & Brand Intelligence
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          For the AI-first search era
        </p>
        <Button asChild size="lg">
          <Link href={ROUTES.AUDIT}>Run AI-SEO Audit</Link>
        </Button>
      </div>
    </section>
  );
}
