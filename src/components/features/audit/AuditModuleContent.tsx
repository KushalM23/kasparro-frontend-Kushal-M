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
}

export function AuditModuleContent({ module, moduleDefinition }: AuditModuleContentProps) {
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
            className="max-w-4xl space-y-16"
        >
            {/* Module Header */}
            <div className="flex items-start justify-between gap-8 border-b border-border pb-12">
                <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                        {IconComponent && <IconComponent className="w-5 h-5 text-primary" />}
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Intelligence Layer</span>
                    </div>
                    <h1 className="text-5xl font-heading tracking-tighter uppercase leading-none">
                        {module.moduleName}
                    </h1>
                    <p className="text-sm font-medium leading-relaxed text-muted-foreground max-w-2xl">
                        {module.description}
                    </p>
                </div>
                <div className="p-8 border border-primary bg-primary/5 text-center min-w-[160px]">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Score</span>
                    <div className="text-6xl font-heading tracking-tighter text-primary mt-2">{module.score}</div>
                </div>
            </div>

            {/* Insights */}
            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-heading uppercase tracking-tighter">Strategic Insights</h2>
                    <div className="h-[1px] flex-1 bg-border" />
                </div>
                <div className="grid gap-4">
                    {module.insights.map((insight, idx) => (
                        <div key={idx} className="p-6 border border-border hover:bg-muted/5 transition-colors">
                            <div className="flex items-start gap-4">
                                <span className="text-[10px] font-bold text-secondary mt-1">[{String(idx + 1).padStart(2, '0')}]</span>
                                <div className="space-y-1">
                                    <h4 className="text-[11px] font-bold uppercase tracking-wider">{insight.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{insight.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Grid: Issues & Recommendations */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Issues */}
                <section className="space-y-6">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-heading uppercase tracking-tighter text-secondary">Identified Issues</h2>
                        <div className="h-[1px] flex-1 bg-border" />
                    </div>
                    <div className="space-y-4">
                        {module.issues.length > 0 ? module.issues.map((issue, idx) => (
                            <div key={idx} className="bg-muted/10 border-l-2 border-secondary p-4 space-y-1">
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary">{issue.title}</h4>
                                <p className="text-xs font-bold leading-normal text-muted-foreground">{issue.description}</p>
                            </div>
                        )) : (
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50 px-4">No critical issues detected.</p>
                        )}
                    </div>
                </section>

                {/* Recommendations */}
                <section className="space-y-6">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-heading uppercase tracking-tighter text-primary">Recommendations</h2>
                        <div className="h-[1px] flex-1 bg-border" />
                    </div>
                    <div className="space-y-4">
                        {module.recommendations.map((rec, idx) => (
                            <div key={idx} className="bg-primary/5 border-l-2 border-primary p-4 space-y-2">
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary">{rec.title}</h4>
                                <p className="text-xs font-bold text-foreground leading-normal">{rec.description}</p>
                                <div className="flex gap-4 pt-1">
                                    <span className="text-[9px] font-bold uppercase tracking-tighter text-muted-foreground">Impact: <span className="text-primary">{rec.estimatedImpact}</span></span>
                                    <span className="text-[9px] font-bold uppercase tracking-tighter text-muted-foreground">Effort: <span className="text-secondary">{rec.implementationEffort}</span></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </motion.div>
    );
}
