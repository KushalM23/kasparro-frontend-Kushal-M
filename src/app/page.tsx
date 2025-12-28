/**
 * Home Page - Marketing Site Landing Page
 * URL: /
 * 
 * Displays the marketing homepage with hero section, features, and call-to-action
 */

import { HeroSection } from '@/components/features/home/HeroSection';
import { AiSeoSection } from '@/components/features/home/AiSeoSection';
import { ModulesOverview } from '@/components/features/home/ModulesOverview';
import { PipelineView } from '@/components/features/home/PipelineView';
import { CtaSection } from '@/components/features/home/CtaSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AiSeoSection />
      <ModulesOverview />
      <PipelineView />
      <CtaSection />
    </main>
  );
}
