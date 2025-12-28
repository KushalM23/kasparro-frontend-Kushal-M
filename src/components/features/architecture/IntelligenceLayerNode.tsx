'use client';

import * as Icons from 'lucide-react';

export function IntelligenceLayerNode() {
    return (
        <div className="p-8 border border-primary bg-primary text-primary-foreground space-y-6 relative">
            <div className="flex justify-between items-start">
                <Icons.Zap className="w-6 h-6 text-primary-foreground" />
                <span className="text-[10px] font-bold text-primary-foreground/50">03</span>
            </div>
            <div className="space-y-2">
                <h3 className="font-heading uppercase tracking-tight text-lg">Intelligence Layer</h3>
                <p className="text-xs font-medium leading-relaxed text-primary-foreground/80">Parallel execution of 7 modules.</p>
            </div>
        </div>
    );
}
