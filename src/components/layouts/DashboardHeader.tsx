'use client';

import { BrandSelector } from '@/components/features/dashboard/BrandSelector';

export function DashboardHeader() {
  return (
    <header className="border-b bg-white p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <BrandSelector />
      </div>
    </header>
  );
}
