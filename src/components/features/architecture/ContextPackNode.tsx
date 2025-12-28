import * as Icons from 'lucide-react';

export function ContextPackNode() {
  return (
    <div className="p-8 border border-border space-y-6 relative hover:bg-muted/50 transition-colors">
      <div className="flex justify-between items-start">
        <Icons.Cpu className="w-6 h-6 text-primary" />
        <span className="text-[10px] font-bold text-muted-foreground">02</span>
      </div>
      <div className="space-y-2">
        <h3 className="font-heading uppercase tracking-tight text-lg">Context Pack</h3>
        <p className="text-xs font-medium leading-relaxed text-muted-foreground">Normalization and entity linking.</p>
      </div>
    </div>
  );
}
