import { HeroSection } from '@/components/features/home/HeroSection';
import { PipelineView } from '@/components/features/home/PipelineView';
import { ComparisonSection } from '@/components/features/home/ComparisonSection';

export default function Home() {
  return (
    <main className="w-full bg-background transition-colors">
      {/* Section 1: Hero & Modules (home-1.png) */}
      <HeroSection />

      {/* Section 2: Pipeline & Comparison (home-2.png) */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <PipelineView />
          <ComparisonSection />
        </div>
      </section>
    </main>
  );
}
