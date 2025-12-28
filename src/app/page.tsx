/**
 * Home Page - Marketing Site Landing Page
 * URL: /
 * 
 * Displays the marketing homepage with hero section, features, and call-to-action
 */

import { HeroSection } from '@/components/features/home/HeroSection';
import { PipelineView } from '@/components/features/home/PipelineView';
import { ComparisonSection } from '@/components/features/home/ComparisonSection';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <PipelineView />
          <ComparisonSection />
        </div>
      </section>
    </main>
  );
}
