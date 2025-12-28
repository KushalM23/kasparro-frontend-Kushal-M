# Implementation Plan: Kasparro Frontend - Marketing Website & Product Dashboard

**Branch**: `001-kasparro-frontend-site` | **Date**: December 28, 2025 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-kasparro-frontend-site/spec.md`

---

## Summary

Build a complete frontend application for Kasparro, an AI-native SEO & Brand Intelligence platform. The implementation consists of two product surfaces:

1. **Public Marketing Website** (/, /platform, /about) - Marketing pages that communicate value proposition, platform capabilities, and company credibility
2. **Product Dashboard Mock** (/app/dashboard, /app/audit, /app/architecture) - Authenticated shell with mocked data demonstrating the core product experience

Technical approach: Next.js 14 App Router with TypeScript, Tailwind CSS, shadcn/ui components, and Zustand for state management. All dashboard data driven from structured JSON files.

---

## Technical Context

**Language/Version**: TypeScript 5.x, React 18.x  
**Framework**: Next.js 14 (App Router)  
**Primary Dependencies**: 
- shadcn/ui (UI components)
- Tailwind CSS (styling)
- Zustand (state management)
- Framer Motion (subtle animations)
- Lucide React (icons)

**Storage**: Mocked JSON files (`/public/audit-data/*.json`)  
**Testing**: Jest + React Testing Library, Playwright (E2E)  
**Target Platform**: Web (Vercel deployment)  
**Project Type**: Single frontend application  
**Performance Goals**: Page load < 3 seconds, smooth 60fps interactions  
**Constraints**: No backend, no authentication, responsive (375px - 1920px)  
**Scale/Scope**: 6 routes, 7 audit modules, 2+ mocked brands

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Gate | Status | Notes |
|------|--------|-------|
| Single project structure | ✅ Pass | Frontend-only, no backend required |
| Modular component architecture | ✅ Pass | Clear separation: layouts, features, UI primitives |
| Typed data structures | ✅ Pass | TypeScript interfaces for all entities |
| No page-level monoliths | ✅ Pass | Component-based architecture enforced |
| JSON-driven data | ✅ Pass | Audit data from structured JSON files |

---

## Project Structure

### Documentation (this feature)

```text
specs/001-kasparro-frontend-site/
├── plan.md              # This file
├── spec.md              # Feature specification
├── research.md          # Phase 0 output (technology decisions)
├── data-model.md        # Phase 1 output (TypeScript interfaces)
├── quickstart.md        # Phase 1 output (development setup)
├── contracts/           # Phase 1 output (API/data contracts)
│   └── audit-data.schema.json
├── checklists/
│   └── requirements.md  # Specification quality checklist
└── tasks.md             # Phase 2 output (implementation tasks)
```

### Source Code (repository root)

```text
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Home page (/)
│   ├── platform/
│   │   └── page.tsx              # Platform page (/platform)
│   ├── about/
│   │   └── page.tsx              # About page (/about)
│   ├── app/                      # Dashboard namespace
│   │   ├── layout.tsx            # Dashboard layout (shared sidebar/nav)
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Dashboard overview (/app/dashboard)
│   │   ├── audit/
│   │   │   └── page.tsx          # Audit details (/app/audit)
│   │   └── architecture/
│   │       └── page.tsx          # System architecture (/app/architecture)
│   └── not-found.tsx             # 404 page
│
├── components/
│   ├── layouts/                  # Layout components
│   │   ├── Header.tsx            # Marketing site header
│   │   ├── Footer.tsx            # Marketing site footer
│   │   ├── DashboardSidebar.tsx  # Dashboard sidebar navigation
│   │   └── DashboardHeader.tsx   # Dashboard header with brand selector
│   │
│   ├── features/                 # Feature-specific components
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AiSeoSection.tsx
│   │   │   ├── ModulesOverview.tsx
│   │   │   ├── PipelineView.tsx
│   │   │   └── CtaSection.tsx
│   │   ├── platform/
│   │   │   ├── PipelineFlow.tsx
│   │   │   ├── DataInputs.tsx
│   │   │   ├── Outputs.tsx
│   │   │   └── Comparison.tsx
│   │   ├── about/
│   │   │   ├── Mission.tsx
│   │   │   ├── Philosophy.tsx
│   │   │   └── Vision.tsx
│   │   ├── dashboard/
│   │   │   ├── BrandSelector.tsx
│   │   │   ├── MetricCard.tsx
│   │   │   ├── AiVisibilityCard.tsx
│   │   │   ├── EeatScoreCard.tsx
│   │   │   ├── KeywordCoverageCard.tsx
│   │   │   └── LastAuditTimestamp.tsx
│   │   ├── audit/
│   │   │   ├── ModuleSidebar.tsx
│   │   │   ├── ModuleDetail.tsx
│   │   │   ├── ScoreDisplay.tsx
│   │   │   ├── InsightsList.tsx
│   │   │   ├── IssuesList.tsx
│   │   │   └── RecommendationsList.tsx
│   │   └── architecture/
│   │       ├── SystemDiagram.tsx
│   │       ├── InputAssemblerNode.tsx
│   │       ├── ContextPackNode.tsx
│   │       ├── ModuleNode.tsx
│   │       └── OutputNode.tsx
│   │
│   └── ui/                       # UI primitives (shadcn/ui)
│       ├── button.tsx
│       ├── card.tsx
│       ├── select.tsx
│       ├── badge.tsx
│       ├── skeleton.tsx
│       └── ...
│
├── lib/
│   ├── utils.ts                  # Utility functions (cn, etc.)
│   └── constants.ts              # App constants
│
├── stores/
│   ├── brandStore.ts             # Zustand store for selected brand
│   └── auditStore.ts             # Zustand store for selected module
│
├── types/
│   ├── brand.ts                  # Brand entity types
│   ├── audit.ts                  # Audit module types
│   ├── metrics.ts                # Dashboard metric types
│   └── architecture.ts           # Architecture component types
│
├── data/
│   └── modules.ts                # Static module definitions (7 modules)
│
└── styles/
    └── globals.css               # Global styles + Tailwind

public/
├── audit-data/                   # Mocked JSON data
│   ├── brands.json               # List of brands
│   ├── brand-1/
│   │   ├── dashboard.json        # Dashboard metrics
│   │   └── audit-modules.json    # All module audit data
│   └── brand-2/
│       ├── dashboard.json
│       └── audit-modules.json
└── images/                       # Static assets

tests/
├── unit/
│   ├── components/
│   └── stores/
├── integration/
│   └── pages/
└── e2e/
    └── flows/
```

**Structure Decision**: Single frontend project with clear separation between:
- **app/**: Next.js App Router pages (routing only, minimal logic)
- **components/layouts/**: Shared layout components
- **components/features/**: Page-specific feature components
- **components/ui/**: Reusable UI primitives (shadcn/ui)
- **stores/**: Zustand state management
- **types/**: TypeScript interfaces
- **public/audit-data/**: Mocked JSON data files

---

## The 7 Audit Modules

Based on AI-SEO domain knowledge, the 7 audit modules are:

| # | Module Name | Description |
|---|-------------|-------------|
| 1 | **AI Visibility Audit** | How visible is the brand in AI-powered search results |
| 2 | **E-E-A-T Analysis** | Experience, Expertise, Authoritativeness, Trustworthiness evaluation |
| 3 | **Content Quality Audit** | Quality and relevance of content for AI understanding |
| 4 | **Technical AI Readiness** | Technical factors affecting AI crawlability |
| 5 | **Brand Mention Tracking** | How the brand is mentioned across AI platforms |
| 6 | **Competitor Benchmarking** | Comparative analysis against competitors |
| 7 | **Keyword Coverage Audit** | Non-branded keyword visibility and opportunities |

---

## Data Model Summary

### Core Entities

```typescript
// Brand entity
interface Brand {
  id: string;
  name: string;
  logoUrl?: string;
  lastAuditDate: string;
  overallScore: number;
}

// Dashboard metrics
interface DashboardMetrics {
  brandId: string;
  aiVisibilityScore: number;
  eeatScore: number;
  keywordCoverage: number;
  lastAuditTimestamp: string;
}

// Audit module
interface AuditModule {
  id: string;
  name: string;
  description: string;
  score: number;
  insights: Insight[];
  issues: Issue[];
  recommendations: Recommendation[];
}

// Supporting types
interface Insight {
  id: string;
  title: string;
  description: string;
  type: 'positive' | 'neutral' | 'negative';
}

interface Issue {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

interface Recommendation {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  impact: string;
}
```

---

## Implementation Phases

### Phase 0: Project Setup & Research
- Initialize Next.js 14 project with TypeScript
- Configure Tailwind CSS and shadcn/ui
- Set up folder structure
- Create TypeScript interfaces
- Research: shadcn/ui component patterns, Zustand best practices

### Phase 1: Foundation & Data Layer
- Create mocked JSON data files for 2 brands
- Implement Zustand stores (brand, audit module selection)
- Build UI primitives (cards, buttons, badges, skeletons)
- Create shared layouts (Header, Footer, DashboardLayout)

### Phase 2: Marketing Website (Part A)
- Home page with all sections (Hero, AI-SEO, Modules, Pipeline, CTA, Footer)
- Platform page (Pipeline flow, Data inputs, Outputs, Comparison)
- About page (Mission, Philosophy, Vision)
- Responsive design for all marketing pages

### Phase 3: Product Dashboard (Part B)
- Dashboard layout with sidebar navigation
- Dashboard page with brand selector and metric cards
- Audit page with two-panel layout and module selection
- Architecture page with system diagram
- State management for brand/module switching

### Phase 4: Polish & Quality
- Loading states and skeletons
- 404 page
- Responsive testing (375px, 768px, 1920px)
- Optional: Dark/light mode, micro-interactions
- README documentation

### Phase 5: Deployment
- Vercel deployment configuration
- Final testing on production
- Performance validation (< 3s load time)

---

## Key Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| State Management | Zustand | Lightweight, simple API, good for selected brand/module state |
| UI Components | shadcn/ui | Customizable, accessible, Tailwind-native |
| Data Loading | Static JSON import | Simple for mocked data, no API complexity |
| Animations | Framer Motion | Subtle module transitions, purposeful only |
| Icons | Lucide React | Clean, consistent, tree-shakeable |
| Deployment | Vercel | First-class Next.js support, easy setup |

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Scope creep on visual design | Focus on clarity over polish; justify in README |
| Complex state management | Keep stores minimal; brand + module selection only |
| Responsive breakpoints | Test early at 375px, 768px, 1920px |
| Performance with animations | Use Framer Motion sparingly; purposeful transitions only |
| Hard-coded content | Enforce JSON data sources; no inline audit content |

---

## Complexity Tracking

> No constitution violations detected. Single frontend project with modular architecture.

| Aspect | Complexity | Notes |
|--------|------------|-------|
| Routes | 6 pages | Manageable scope |
| Components | ~40 components | Well-organized into layouts/features/ui |
| State | 2 stores | Brand selection + module selection |
| Data files | ~5 JSON files | 2 brands × (dashboard + audit) + brands list |

---

## Next Steps

1. **Create research.md** - Document technology decisions and best practices
2. **Create data-model.md** - Full TypeScript interfaces for all entities
3. **Create quickstart.md** - Development environment setup guide
4. **Create contracts/** - JSON schema for audit data structure
5. **Run `/speckit.tasks`** - Generate detailed implementation tasks

---

## Deliverables Checklist

- [ ] GitHub repository with clear folder structure
- [ ] README.md with architecture decisions and tradeoffs
- [ ] Live Vercel deployment
- [ ] Mocked JSON data in `/public/audit-data/`
- [ ] 6 functional routes (/, /platform, /about, /app/dashboard, /app/audit, /app/architecture)
- [ ] Responsive design (375px, 768px, 1920px)
- [ ] TypeScript interfaces for all data
- [ ] Component separation (layouts/features/ui)
