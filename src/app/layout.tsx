import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

import { Bricolage_Grotesque, Bungee } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-bricolage-grotesque'
});

const bungee = Bungee({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bungee-display'
});

export const metadata: Metadata = {
  title: 'Kasparro - AI-Native SEO & Brand Intelligence',
  description: 'For the AI-first search era. AI-SEO audits, E-E-A-T analysis, and brand intelligence platform.',
  keywords: [
    'AI SEO',
    'E-E-A-T',
    'Brand Intelligence',
    'AI Search',
    'Content Quality',
    'Keyword Coverage',
  ],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Kasparro - AI-Native SEO & Brand Intelligence',
    description: 'For the AI-first search era',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolage.variable} ${bungee.variable} font-sans`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
