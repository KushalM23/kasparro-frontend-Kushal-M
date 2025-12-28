'use client';

import { AboutHero } from '@/components/features/about/AboutHero';
import { FounderCredibility } from '@/components/features/about/FounderCredibility';
import { CorePillars } from '@/components/features/about/CorePillars';
import { Commitment } from '@/components/features/about/Commitment';

export default function AboutPage() {
  return (
    <main className="w-full bg-background transition-colors pt-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <AboutHero />
        <FounderCredibility />
        <CorePillars />
        <Commitment />
      </div>
    </main>
  );
}
