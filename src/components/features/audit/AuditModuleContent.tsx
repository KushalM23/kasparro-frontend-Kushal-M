'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface AuditModuleContentProps {
    module: {
        moduleId: string;
        moduleName: string;
        description: string;
        score: number;
        insights: Array<{ title: string; description: string; type: string }>;
        issues: Array<{ title: string; description: string; severity: string }>;
        recommendations: Array<{ title: string; description: string; priority: string; estimatedImpact: string; implementationEffort: string }>;
    } | null;
    moduleDefinition: any;
    brandName: string;
}

export function AuditModuleContent({ module, moduleDefinition, brandName }: AuditModuleContentProps) {
    if (!module) {
        return (
            <motion.div
                key="select-module"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex items-center justify-center text-center"
            >
                <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">Navigation</span>
                    <p className="text-sm font-bold uppercase tracking-tighter text-muted-foreground">Select an audit layer from the sidebar for analysis.</p>
                </div>
            </motion.div>
        );
    }

    const IconComponent = moduleDefinition ? (Icons as any)[moduleDefinition.icon] : null;

    return (
        <motion.div
            key={module.moduleId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl space-y-10"
        >
            {/* Module Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
                <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-4">
                        <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 tracking-widest uppercase">{brandName}</span>
                        <div className="h-px w-4 bg-border" />
                        <div className="flex items-center gap-2">
                            {IconComponent && <IconComponent className="w-4 h-4 text-muted-foreground" />}
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Intelligence Layer</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl tracking-tighter uppercase leading-none">
                        {module.moduleName}
                    </h1>
                    <p className="text-xs font-medium leading-relaxed text-muted-foreground max-w-xl">
                        {module.description}
                    </p>
                </div>
                <div className="flex items-center gap-4 bg-muted/20 border border-border px-6 py-4">
                    <div className="text-right">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground block">Layer Score</span>
                        <div className="text-3xl font-heading tracking-tighter text-primary">{module.score}</div>
                    </div>
                </div>
            </div>

            {/* Insights - Now horizontal for vertical density */}
            <section className="space-y-4">
                <div className="flex items-center gap-3">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/70">Strategic Insights</h2>
                    <div className="h-[1px] flex-1 bg-border/40" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border divide-x divide-y md:divide-y-0 divide-border">
                    {module.insights.map((insight, idx) => (
                        <div key={idx} className="p-4 bg-muted/5 space-y-2">
                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-primary">Insight 0{idx + 1}</h4>
                            <div className="space-y-1">
                                <h5 className="text-[11px] font-bold uppercase tracking-tight text-foreground">{insight.title}</h5>
                                <p className="text-xs text-muted-foreground leading-tight font-medium">{insight.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Grid: Issues & Recommendations */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Issues */}
                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/60">Identified Issues</h2>
                        <div className="h-[1px] flex-1 bg-border/40" />
                    </div>
                    <div className="space-y-4">
                        {module.issues.length > 0 ? module.issues.map((issue, idx) => (
                            <div key={idx} className="bg-muted/10 border-l-4 border-foreground/20 p-4 space-y-1">
                                <h4 className="text-xs font-bold uppercase tracking-widest">{issue.title}</h4>
                                <p className="text-xs font-medium leading-normal text-muted-foreground/80">{issue.description}</p>
                            </div>
                        )) : (
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50 px-4">No critical issues detected.</p>
                        )}
                    </div>
                </section>

                {/* Recommendations */}
                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Recommendations</h2>
                        <div className="h-[1px] flex-1 bg-border/40" />
                    </div>
                    <div className="space-y-4">
                        {module.recommendations.map((rec, idx) => (
                            <div key={idx} className="bg-primary/5 border-l-4 border-primary p-4 space-y-3">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-primary">{rec.title}</h4>
                                <p className="text-xs font-bold text-foreground leading-normal">{rec.description}</p>
                                <div className="flex gap-4 pt-1">
                                    <span className="text-[10px] font-bold uppercase tracking-tighter text-muted-foreground/60">Impact: <span className="text-primary">{rec.estimatedImpact}</span></span>
                                    <span className="text-[10px] font-bold uppercase tracking-tighter text-muted-foreground/60">Effort: <span className="text-foreground/40">{rec.implementationEffort}</span></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </motion.div>
    );
}
