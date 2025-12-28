/**
 * 404 Not Found Page
 */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/50 px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-3">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        
        <div className="space-y-3">
          <Link href={ROUTES.HOME} className="block">
            <Button className="w-full">Back to Home</Button>
          </Link>
          <Link href={ROUTES.DASHBOARD} className="block">
            <Button variant="outline" className="w-full">
              Go to Dashboard
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            Need help? Contact support or check our documentation.
          </p>
        </div>
      </div>
    </div>
  );
}
