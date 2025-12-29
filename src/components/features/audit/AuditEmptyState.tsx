'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';
import Link from 'next/link';

interface AuditEmptyStateProps {
    type: 'access-denied' | 'no-baseline';
}

export function AuditEmptyState({ type }: AuditEmptyStateProps) {
    if (type === 'access-denied') {
        return (
            <div className="flex-1 flex items-center justify-center p-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4 max-w-md border border-border p-8 md:p-12"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">Restriction</span>
                    <h2 className="text-2xl tracking-tight uppercase">Access Denied</h2>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">Please select a brand context from the Dashboard to proceed with the audit view.</p>
                    <Button asChild className="rounded-none bg-foreground text-primary-foreground font-bold uppercase tracking-widest px-8 mt-4 hover:bg-primary transition-colors text-xs">
                        <Link href={ROUTES.DASHBOARD}>&larr; Return to Dashboard</Link>
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="flex-1 flex items-center justify-center p-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6 max-w-md border border-border p-8 md:p-20"
            >
                <h2 className="text-2xl tracking-tight uppercase">No Audit Baseline</h2>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">This brand has not been audited yet. Technical findings are currently unavailable.</p>
                <Button asChild className="rounded-none bg-foreground text-primary-foreground font-bold uppercase tracking-widest px-8 h-12 hover:bg-primary transition-colors text-xs">
                    <Link href={ROUTES.DASHBOARD}>Initialize First Audit &rarr;</Link>
                </Button>
            </motion.div>
        </div>
    );
}
