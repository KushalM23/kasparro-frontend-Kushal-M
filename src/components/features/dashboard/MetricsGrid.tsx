'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

interface MetricsGridProps {
    metrics: {
        aiVisibility: number;
        eeatScore: number;
        keywordCoverage: number;
        averageScore: number;
    };
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
    const stats = [
        { label: 'AI Visibility', value: metrics.aiVisibility, desc: 'AI visibility trace' },
        { label: 'E-E-A-T Score', value: metrics.eeatScore, desc: 'Trust & Authority' },
        { label: 'Keyword Coverage', value: `${metrics.keywordCoverage}%`, desc: 'Keyword reach' },
        { label: 'Overall Index', value: Math.round(metrics.averageScore), desc: 'Visibility Index', highlight: true }
    ];

    return (
        <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
        >
            <div className="grid md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className={`p-8 border ${stat.highlight ? 'border-primary bg-primary/5' : 'border-border'} flex flex-col gap-2`}
                    >
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</span>
                        <span className={`text-5xl font-heading tracking-tighter ${stat.highlight ? 'text-primary' : ''}`}>{stat.value}</span>
                        <span className="text-[10px] font-bold uppercase tracking-tight text-muted-foreground/60">{stat.desc}</span>
                    </div>
                ))}
            </div>

            <div className="border border-border p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-2xl uppercase tracking-tight">Full Audit Insights Available</h3>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Explore detailed findings and specific recommendations to improve your brand visibility.</p>
                </div>
                <Button asChild className="rounded-none h-14 px-10 font-bold uppercase tracking-widest text-xs border border-foreground hover:bg-foreground hover:text-primary-foreground bg-transparent text-foreground transition-all">
                    <Link href={ROUTES.AUDIT}>View Full Report &rarr;</Link>
                </Button>
            </div>
        </motion.div>
    );
}
