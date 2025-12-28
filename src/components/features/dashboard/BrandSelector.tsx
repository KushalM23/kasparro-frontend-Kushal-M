'use client';

import { useBrandStore } from '@/stores/brandStore';
import { Brand } from '@/types/brand';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState, useEffect } from 'react';

export function BrandSelector() {
  const { selectedBrand, setSelectedBrand } = useBrandStore();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const response = await fetch('/audit-data/brands.json');
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error('Failed to load brands:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBrands();
  }, []);

  if (loading) {
    return <div className="w-48 h-10 bg-muted animate-pulse" />;
  }

  return (
    <Select value={selectedBrand?.id || ''} onValueChange={(id) => {
      const brand = brands.find(b => b.id === id);
      if (brand) {
        setSelectedBrand(brand);
      }
    }}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select a brand" />
      </SelectTrigger>
      <SelectContent>
        {brands.map((brand) => (
          <SelectItem key={brand.id} value={brand.id}>
            {brand.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
