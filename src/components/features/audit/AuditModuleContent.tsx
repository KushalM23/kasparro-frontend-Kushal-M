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

import { ScoreDisplay } from './ScoreDisplay';
import { InsightsList } from './InsightsList';
import { IssuesList } from './IssuesList';
import { RecommendationsList } from './RecommendationsList';

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
                <ScoreDisplay score={module.score} />
            </div>

            {/* Insights */}
            <InsightsList insights={module.insights} />

            {/* Grid: Issues & Recommendations */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                <IssuesList issues={module.issues} />
                <RecommendationsList recommendations={module.recommendations} />
            </div>
        </motion.div>
    );
}
