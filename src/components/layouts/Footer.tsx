'use client';

import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-sm mb-4">Kasparro</h3>
            <p className="text-xs text-muted-foreground">
              AI-native SEO & Brand Intelligence for the AI-first search era.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-sm mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href={ROUTES.PLATFORM} className="text-xs text-muted-foreground hover:text-foreground">
                  Platform
                </Link>
              </li>
              <li>
                <Link href={ROUTES.AUDIT} className="text-xs text-muted-foreground hover:text-foreground">
                  Run Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href={ROUTES.ABOUT} className="text-xs text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href={ROUTES.ARCHITECTURE} className="text-xs text-muted-foreground hover:text-foreground">
                  Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-sm mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t pt-8">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} Kasparro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
