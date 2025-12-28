'use client';

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-background p-4 md:p-6 transition-colors">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold text-foreground">Dashboard</h1>
      </div>
    </header>
  );
}
