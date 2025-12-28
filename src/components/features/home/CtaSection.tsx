'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';

export function CtaSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          See How Your Site Performs
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Run a free AI-SEO audit to understand how AI models perceive your content and what you need to improve.
        </p>
        <Button asChild size="lg">
          <Link href={ROUTES.AUDIT}>Run Your Audit Now</Link>
        </Button>
      </div>
    </section>
  );
}
