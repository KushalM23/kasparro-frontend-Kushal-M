'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface AuditStatusProps {
    type: 'no-brand' | 'auditing' | 'first-time';
    onRunAudit?: () => void;
}

export function AuditStatus({ type, onRunAudit }: AuditStatusProps) {
    if (type === 'no-brand') {
        return (
            <motion.div
                key="no-brand"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="border border-border p-20 flex flex-col items-center justify-center text-center space-y-6"
            >
                <div className="w-16 h-[1px] bg-border" />
                <p className="text-muted-foreground font-bold uppercase tracking-widest text-[11px]">No Brand Context Selected</p>
                <h2 className="text-2xl tracking-tight uppercase">Initialize System Audit</h2>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                    Please select a brand from the dropdown above to begin scanning for AI-SEO visibility and model citations.
                </p>
            </motion.div>
        );
    }

    if (type === 'auditing') {
        return (
            <motion.div
                key="auditing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="border border-primary p-20 flex flex-col items-center justify-center text-center space-y-8 bg-primary/5"
            >
                <div className="relative">
                    <div className="w-16 h-16 border-2 border-primary/20 border-t-primary animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-1 h-1 bg-primary animate-ping" />
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl tracking-tight uppercase">Running Deep Audit</h2>
                    <p className="text-xs text-primary font-bold uppercase tracking-[0.2em] animate-pulse">Scanning Neural Networks</p>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            key="first-time"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border border-border p-20 flex flex-col items-center justify-center text-center space-y-8"
        >
            <div className="space-y-4">
                <h2 className="text-3xl tracking-tight uppercase">Run your first Kasparro Audit</h2>
                <p className="text-sm text-muted-foreground max-w-md mx-auto font-medium leading-relaxed">
                    Establish a technical baseline for your brand's AI-era visibility. Initial scan takes approximately 2 seconds.
                </p>
            </div>
            <Button
                onClick={onRunAudit}
                className="rounded-none bg-foreground text-primary-foreground font-bold uppercase tracking-widest px-12 h-14 hover:bg-primary transition-colors text-xs"
            >
                Initialize Audit &rarr;
            </Button>
        </motion.div>
    );
}
