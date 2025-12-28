# Kasparro Frontend Constitution

**Project**: Kasparro - AI-Native SEO & Brand Intelligence Platform  
**Scope**: Marketing website + Product dashboard frontend  
**Tech Stack**: Next.js 14 (App Router), TypeScript 5.x, React 18.x, Tailwind CSS, shadcn/ui

---

## Core Principles

### I. User-Centric Responsive Design
All components must support three critical breakpoints: 375px (mobile), 768px (tablet), 1920px (desktop). Every feature must be tested at all three before marking complete. Responsive behavior must degrade gracefully, never break. Touch targets minimum 44x44px. Mobile-first approach: implement mobile layout first, then enhance for larger screens.

### II. Type Safety and Zero Runtime Surprises
TypeScript is mandatory—no `any` types without justification. All external data validated against interfaces from [data-model.md](../../specs/001-kasparro-frontend-site/data-model.md). Mocked data in `/public/audit-data/` must conform to defined JSON schemas. Type errors caught at compile-time, not runtime. Union types preferred over optional fields.

### III. Component-First, Modular Architecture
Every UI element is a reusable component. Components live in `/src/components/features/[feature-name]/` or `/src/components/ui/` (shadcn/ui only). No monolithic pages. Layout components separate from feature components. Single responsibility principle: each component does one thing well. Props are immutable; state managed via Zustand stores at page/feature level.

### IV. Accessible by Default
All interactive elements must pass WCAG 2.1 AA standards. Semantic HTML required—no `<div>` buttons. Color contrast minimum 4.5:1. Form labels explicitly associated with inputs. Navigation landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`. Test with keyboard navigation only—no mouse. Screen reader compatibility non-negotiable.

### V. Performance-First Development
Next.js Image component mandatory for all image assets (automatic optimization). Code splitting automatic via App Router. Lazy load components below the fold. No inline scripts or large vendor bundles. Lighthouse score target: 90+ across all pages. CSS-in-JS (Tailwind) prevents style bloat. Bundle analysis on PR reviews.

### VI. Explicit Data Flow and State Management
Zustand stores are single source of truth for page/feature state. Never pass deeply nested props—use stores. Brand selection and audit module selection persist in stores. API/mocked data flows one direction: server → store → component. No circular dependencies. State mutations are explicit and traced.

### VII. Subtle Motion, Purposeful Animation
Framer Motion used only for meaningful transitions: page navigation, modals, conditional reveals. Animations max 300ms, easing functions from research.md. Reduce motion respected—check `prefers-reduced-motion` media query. Never animate layouts or cause layout shift. Animation enhances, never distracts.

---

## Technology Stack Standards

### Frontend Framework
- **Next.js 14** with App Router (not Pages Router)
- **React 18.x** functional components only
- **TypeScript 5.x** with `strict: true` in tsconfig.json
- **Tailwind CSS 3.x** with `@apply` for complex patterns
- **shadcn/ui** for UI components (button, card, select, badge, skeleton only—no additional components without approval)

### State Management & Utilities
- **Zustand** for global state (brand selection, audit modules, dashboard filters)
- **Framer Motion** for animations (subtle transitions only)
- **Lucide React** for icons (no custom SVGs)
- No Redux, Recoil, Jotai, or Context API for shared state

### Data & Testing
- **Mocked JSON files** in `/public/audit-data/[brand-name]/` for dashboard data
- **TypeScript interfaces** define all data shapes (see data-model.md)
- No API integration until Phase 5 (deployment phase)
- Testing: Jest + React Testing Library (when testing is required)

### Deployment & Hosting
- **Vercel** (preferred) or self-hosted Node.js
- **Environment variables** via `.env.local` (none required for development)
- **Build output**: Static pages + API routes (if added in Phase 5)

---

## Code Quality & Review Gates

### Mandatory Checks (Pre-Merge)
1. **Type Safety**: `npx tsc --noEmit` passes—zero type errors
2. **Linting**: `npm run lint` passes—no ESLint violations
3. **Responsive Testing**: Component tested at 375px, 768px, 1920px
4. **Accessibility**: Keyboard navigation works; semantic HTML verified
5. **Browser Testing**: Chrome, Safari, Firefox (desktop); mobile browsers (iOS Safari, Chrome Mobile)
6. **Performance**: No Lighthouse score < 85

### Code Review Checklist
- [ ] Component follows single responsibility principle
- [ ] Props are documented (JSDoc comments)
- [ ] No prop drilling deeper than 2 levels
- [ ] Zustand store usage correct (if applicable)
- [ ] Tailwind classes used (no inline styles)
- [ ] `shadcn/ui` components reused where possible
- [ ] Mobile breakpoints tested and verified
- [ ] Accessibility compliance checked

### Commit Messages
Format: `[PHASE][TASK_ID] Brief description`  
Example: `[Phase 1][T005] Add brand selector dropdown component`

---

## Development Workflow

### Feature Implementation Order
1. **Read requirements** in [spec.md](../../specs/001-kasparro-frontend-site/spec.md) and assigned task in [tasks.md](../../specs/001-kasparro-frontend-site/tasks.md)
2. **Reference interfaces** in [data-model.md](../../specs/001-kasparro-frontend-site/data-model.md)
3. **Check patterns** in [research.md](../../specs/001-kasparro-frontend-site/research.md)
4. **Create component** in appropriate `/src/components/features/*/` directory
5. **Test locally** at all breakpoints: `npm run dev`
6. **Commit and push** with formatted message
7. **Request review** with task ID and breakpoint screenshots

### Branch Strategy
- `main` - stable, deployable code
- `feature/[task-id]-brief-name` - feature development
- Merge to `main` only after review and all checks pass

### Testing Strategy
- **Manual testing**: Every component at 375px, 768px, 1920px
- **Keyboard navigation**: Tab through all interactive elements
- **Lighthouse**: Run audit before final commit
- **Browser DevTools**: Responsive mode, mobile device emulation, Accessibility Inspector

---

## Architecture Decisions

### Route Structure
```
/ (home, marketing)
/platform (platform overview)
/about (about page)
/app/dashboard (brand dashboard)
/app/audit (audit module selection)
/app/architecture (system architecture visualization)
```

### Component Hierarchy
```
Layout (Header + Footer)
├── Feature Component (e.g., HeroSection, BrandSelector)
│   ├── UI Components (shadcn/ui buttons, cards, etc.)
│   └── Zustand Store Integration
└── Page Component (orchestrates features)
```

### Data Flow
```
JSON Files (/public/audit-data/)
    ↓
Type Validation (interfaces from data-model.md)
    ↓
Zustand Store (brand selection, audit modules)
    ↓
Components (read from store, dispatch actions)
    ↓
UI Rendered
```

### CSS Organization
- Tailwind utility classes for 95% of styling
- `@apply` in component `<style>` blocks for complex patterns
- No CSS modules unless absolutely necessary
- Color palette defined in `tailwind.config.ts`

---

## Success Criteria & Non-Negotiables

### Must-Haves (Compliance Required)
✅ TypeScript: Zero type errors in production build  
✅ Responsive: Tested at 375px, 768px, 1920px  
✅ Accessible: WCAG 2.1 AA compliance, keyboard navigable  
✅ Performance: Lighthouse 85+ on all pages  
✅ Mobile: Touch-friendly (44x44px minimum)  

### Nice-to-Haves (If Time Permits)
⭐ Unit tests for complex logic  
⭐ E2E tests with Playwright  
⭐ Animation refinements  
⭐ SEO meta tags optimization  

---

## Governance & Amendment Process

**Constitution Authority**: This document is the source of truth for all development decisions on Kasparro Frontend. It supersedes informal practices and team preferences.

**Compliance Verification**: 
- Code reviews must verify constitutional compliance before merge
- Deviations require documented justification in commit message
- Repeated violations escalate to code architecture review

**Amendment Process**:
1. Propose change with justification (rationale required)
2. Document impact on existing features
3. Update this file and version number
4. Notify team of new standard
5. Legacy code has 1 sprint to migrate

**Exemptions**: Only granted with documented technical reason + task ID + approval from project lead

---

**Version**: 1.0.0 | **Ratified**: December 28, 2025 | **Last Amended**: December 28, 2025  
**Specification Reference**: [spec.md](../../specs/001-kasparro-frontend-site/spec.md) v1.0  
**Implementation Guide**: [quickstart.md](../../specs/001-kasparro-frontend-site/quickstart.md)
