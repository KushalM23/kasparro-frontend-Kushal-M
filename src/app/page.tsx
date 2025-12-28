import { HeroSection } from '@/components/features/home/HeroSection';
import { HeroModules } from '@/components/features/home/HeroModules';
import { AiSeoSection } from '@/components/features/home/AiSeoSection';
import { PipelineView } from '@/components/features/home/PipelineView';
import { CtaSection } from '@/components/features/home/CtaSection';

export default function Home() {
  return (
    <main className="w-full bg-background transition-colors">
      {/* Section 1: Hero & Modules */}
      <section className="py-12 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <HeroSection />
          <HeroModules />
        </div>
      </section>

      {/* Section 2: Pipeline & AI-SEO */}
      <section className="py-12 md:py-24 px-4 md:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <PipelineView />
          <AiSeoSection />
        </div>
      </section>

      {/* Section 5: CTA */}
      <CtaSection />
    </main>
  );
}
