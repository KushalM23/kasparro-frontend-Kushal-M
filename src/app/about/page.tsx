/**
 * About Page - Company Information
 * URL: /about
 * 
 * Displays mission, philosophy, and vision of Kasparro
 */

import { Mission } from '@/components/features/about/Mission';
import { Philosophy } from '@/components/features/about/Philosophy';
import { Vision } from '@/components/features/about/Vision';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 md:py-32 px-4 md:px-6 border-b bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Kasparro
          </h1>
          <p className="text-xl text-muted-foreground">
            Building the future of AI-native search intelligence.
          </p>
        </div>
      </section>

      <Mission />
      <Philosophy />
      <Vision />
    </main>
  );
}
