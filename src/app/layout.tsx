import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
