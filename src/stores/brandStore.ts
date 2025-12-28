import { create } from 'zustand';
import { Brand } from '@/types/brand';

interface BrandStore {
  brands: Brand[];
  selectedBrand: Brand | null;
  setBrands: (brands: Brand[]) => void;
  setSelectedBrand: (brand: Brand | null) => void;
  selectBrandById: (id: string) => void;
}

export const useBrandStore = create<BrandStore>((set) => ({
  brands: [],
  selectedBrand: null,

  setBrands: (brands: Brand[]) => {
    set({ brands });
    // Auto-select first brand if none selected
    set((state) => ({
      selectedBrand: state.selectedBrand || brands[0] || null,
    }));
  },

  setSelectedBrand: (brand: Brand | null) => {
    set({ selectedBrand: brand });
  },

  selectBrandById: (id: string) => {
    set((state) => {
      const brand = state.brands.find((b) => b.id === id) || null;
      return { selectedBrand: brand };
    });
  },
}));
