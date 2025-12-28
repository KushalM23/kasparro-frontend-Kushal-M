# Research: Kasparro Frontend

**Feature Branch**: `001-kasparro-frontend-site`  
**Created**: December 28, 2025  
**Phase**: Phase 0 Output

---

## Technology Decisions

### Next.js 14 (App Router)

**Why chosen**: Required by assignment specification.

**Key patterns to follow**:
- Use App Router (`src/app/`) for all routing
- Server Components by default, Client Components only when needed (state, interactivity)
- Use `'use client'` directive only for components with Zustand stores, event handlers, or browser APIs
- Leverage `layout.tsx` for shared layouts (marketing header/footer, dashboard sidebar)
- Use `loading.tsx` for automatic loading states
- Use `not-found.tsx` for custom 404 page

**References**:
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Server and Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)

---

### TypeScript 5.x

**Why chosen**: Required by assignment specification.

**Key patterns to follow**:
- Strict mode enabled (`"strict": true` in tsconfig.json)
- All data structures must have typed interfaces (no `any` types)
- Use discriminated unions for variant types (e.g., `Insight.type: 'positive' | 'neutral' | 'negative'`)
- Export types from dedicated `src/types/` directory
- Use `interface` for object shapes, `type` for unions/primitives

---

### Tailwind CSS

**Why chosen**: Required by assignment specification.

**Key patterns to follow**:
- Use utility classes directly in JSX
- Define custom colors/spacing in `tailwind.config.ts`
- Use `cn()` helper (from shadcn/ui) for conditional classes
- Responsive design: mobile-first with `sm:`, `md:`, `lg:`, `xl:` breakpoints
- Target breakpoints: 375px (mobile), 768px (tablet), 1920px (desktop)

---

### shadcn/ui

**Why chosen**: Allowed/encouraged by assignment; customizable, accessible, Tailwind-native.

**Components to install**:
- `button` - CTAs, navigation actions
- `card` - Metric cards, module cards
- `select` - Brand selector dropdown
- `badge` - Severity indicators, status labels
- `skeleton` - Loading states

**Key patterns to follow**:
- Install components to `src/components/ui/`
- Customize theme colors in `tailwind.config.ts`
- Never use default styles without customization
- Maintain accessibility attributes (aria-labels, roles)

**Installation**:
```bash
npx shadcn@latest init
npx shadcn@latest add button card select badge skeleton
```

---

### Zustand (State Management)

**Why chosen**: Allowed/encouraged; lightweight, simple API, minimal boilerplate.

**Stores to implement**:
1. `brandStore.ts` - Selected brand state for dashboard
2. `auditStore.ts` - Selected audit module state for audit page

**Key patterns to follow**:
```typescript
// Example store pattern
import { create } from 'zustand';

interface BrandStore {
  selectedBrandId: string | null;
  setSelectedBrand: (brandId: string) => void;
}

export const useBrandStore = create<BrandStore>((set) => ({
  selectedBrandId: null,
  setSelectedBrand: (brandId) => set({ selectedBrandId: brandId }),
}));
```

**Best practices**:
- Keep stores minimal - only shared state
- Derive computed values in components, not stores
- Use selectors to prevent unnecessary re-renders
- Stores are client-side only - wrap in `'use client'` components

---

### Framer Motion (Animations)

**Why chosen**: Allowed/encouraged for subtle, purposeful animations only.

**Use cases**:
- Module switching transitions on audit page
- Page transitions (optional enhancement)
- Micro-interactions on hover states

**Key constraints**:
- Animation-heavy work without UX purpose is NOT ALLOWED
- Keep animations subtle (< 300ms duration)
- Use `AnimatePresence` for exit animations

**Example pattern**:
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.2 }}
>
  {content}
</motion.div>
```

---

### Lucide React (Icons)

**Why chosen**: Clean, consistent, tree-shakeable icon library.

**Key patterns**:
```typescript
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';

<ArrowRight className="w-4 h-4" />
```

---

## Data Loading Strategy

### Mocked JSON Data

All dashboard and audit data is loaded from static JSON files in `/public/audit-data/`.

**File structure**:
```
public/audit-data/
├── brands.json           # List of all brands
├── brand-1/
│   ├── dashboard.json    # Dashboard metrics for brand 1
│   └── audit-modules.json # All 7 module audit data for brand 1
└── brand-2/
    ├── dashboard.json
    └── audit-modules.json
```

**Loading pattern**:
```typescript
// For static data, import directly
import brandsData from '@/public/audit-data/brands.json';

// For dynamic brand data, fetch based on selection
const fetchBrandDashboard = async (brandId: string) => {
  const response = await fetch(`/audit-data/${brandId}/dashboard.json`);
  return response.json();
};
```

---

## Component Architecture

### Three-tier organization

```
src/components/
├── layouts/      # Shared structural components (Header, Footer, DashboardLayout)
├── features/     # Page-specific feature components (grouped by route)
└── ui/           # Reusable UI primitives (shadcn/ui components)
```

### Component guidelines

1. **Layout components**: Handle page structure, navigation, spacing
2. **Feature components**: Implement specific functionality for a page
3. **UI components**: Generic, reusable, stateless where possible

### Naming conventions

- Components: PascalCase (`HeroSection.tsx`)
- Hooks: camelCase with `use` prefix (`useBrandStore.ts`)
- Utilities: camelCase (`utils.ts`)
- Types: PascalCase interfaces (`Brand.ts`)

---

## Responsive Design Strategy

### Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Mobile | 375px | Base styles, stacked layouts |
| Tablet | 768px | `md:` prefix, side-by-side on some areas |
| Desktop | 1920px | `lg:` / `xl:` prefix, full layouts |

### Testing checklist

- [ ] All pages render correctly at 375px
- [ ] All pages render correctly at 768px
- [ ] All pages render correctly at 1920px
- [ ] No horizontal scrolling on any breakpoint
- [ ] Touch targets are at least 44px on mobile

---

## Performance Considerations

### Target metrics

- Page load time: < 3 seconds
- First Contentful Paint: < 1.5 seconds
- Time to Interactive: < 3 seconds

### Optimization strategies

1. Use Next.js Image component for optimized images
2. Minimize client-side JavaScript (prefer Server Components)
3. Lazy load below-the-fold content
4. Use static generation where possible
5. Avoid large bundle sizes from animation libraries

---

## References

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
