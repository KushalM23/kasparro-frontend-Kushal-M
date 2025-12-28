'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Brand } from '@/types/brand';

interface DashboardHeaderProps {
    selectedBrand: Brand | null;
    brands: Brand[];
    lastScanTime: string | null;
    onBrandChange: (brandId: string) => void;
}

export function DashboardHeader({ selectedBrand, brands, lastScanTime, onBrandChange }: DashboardHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Command Center</span>
                <h1 className="text-4xl md:text-6xl font-heading tracking-tighter uppercase">
                    {selectedBrand ? selectedBrand.name : 'Select BRAND'}
                </h1>
                {lastScanTime && (
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        Last Scanned: {lastScanTime}
                    </p>
                )}
            </div>

            <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Active Context:</span>
                <Select value={selectedBrand?.id || ""} onValueChange={onBrandChange}>
                    <SelectTrigger className="w-[200px] rounded-none border-border bg-background h-10 font-bold text-xs uppercase tracking-wider">
                        <SelectValue placeholder="CHOOSE BRAND" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-border">
                        {brands.map((brand) => (
                            <SelectItem key={brand.id} value={brand.id} className="text-xs font-bold uppercase tracking-wider rounded-none">
                                {brand.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
