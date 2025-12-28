# Kasparro Frontend

A modern, AI-native SEO platform frontend built with Next.js, TypeScript, and Tailwind CSS. Features a polished dark/light mode design system with smooth Framer Motion animations and responsive layouts optimized for all devices.

**Live Demo**: [Deployed on Vercel](https://kasparro-frontend.vercel.app) 

---

## Table of Contents

- [Overview](#overview)
- [Theme & Design System](#theme--design-system)
- [Architecture & System Design](#architecture--system-design)
- [Project Structure](#project-structure)
- [Data Modeling](#data-modeling)
- [Component Architecture](#component-architecture)
- [State Management](#state-management)
- [Routes & Features](#routes--features)
- [Engineering Decisions](#engineering-decisions)
- [Future Enhancements](#future-enhancements)

---

## Overview

Kasparro is an AI-native SEO platform designed for the modern era of AI-driven search engines (ChatGPT, Gemini, Perplexity). This frontend materializes that vision through two distinct product surfaces:

### 1. **Public Website** (Marketing Layer)
- Explains the Kasparro platform and its AI-native approach
- Communicates product differentiation from traditional SEO tools
- Guides prospects through the platform architecture and capabilities
- Routes: `/`, `/platform`, `/about`

### 2. **Product Dashboard** (Application Layer)
- High-level brand snapshot with key AI-readiness metrics
- Comprehensive audit results with module-level detail
- System architecture visualization
- Mocked data with multi-brand support
- Routes: `/app/dashboard`, `/app/audit`, `/app/architecture`

---

## Theme & Design System

### Color Palette

**Light Mode**
```css
--background: #ebf4f5 (near white)
--foreground: Dark text
--primary: #9bb2e5 (primary blue)
--secondary: #698cbf (secondary blue)
```

**Dark Mode**
```css
--background: #08203e (deep navy)
--foreground: #ebf4f5 (off-white)
--primary: #9bb2e5 (lighter on dark)
--secondary: #698cbf (lighter on dark)
```

All colors use CSS custom properties for zero-cost theme switching.

---

### Core Design Philosophy

This project prioritizes **system thinking over page development**. Rather than building isolated pages, the architecture emphasizes:

1. Clear Component Boundaries – Separation of layout, feature, and UI primitive components
2. Structured Data Modeling – All data flows through typed interfaces
3. Predictable State – Single source of truth for brand selection across routes
4. Data-Driven UI – No hardcoded JSX; all content comes from structured JSON
5. Reusability – Components are generic enough to support multi-brand scenarios

### System Layers

```
┌─────────────────────────────────────────────────────┐
│         Next.js App Router (Pages)                  │
├─────────────────────────────────────────────────────┤
│  Layout Components    Feature Components            │
│  ├─ Header          ├─ AiVisibilityCard             │
│  ├─ Sidebar         ├─ ModuleSidebar                │
│  └─ Footer          └─ SystemDiagram                │
├─────────────────────────────────────────────────────┤
│  UI Primitives (shadcn/ui)                          │
│  ├─ Card, Button, Badge, Select                     │
│  └─ Skeleton, Metric components                     │
├─────────────────────────────────────────────────────┤
│  State Layer                                        │
│  ├─ Brand Selection (global)                        │
│  └─ Audit Module Selection (per-page)               │
├─────────────────────────────────────────────────────┤
│  Data Layer (JSON + Types)                          │
│  ├─ /public/audit-data/{brand}/                     │
│  │  ├─ dashboard.json (metrics)                     │
│  │  ├─ audit-modules.json (audit details)           │
│  │  └─ brands.json (brand list)                     │
│  └─ TypeScript Interfaces (src/types/)              │
└─────────────────────────────────────────────────────┘
```

### Data Flow Architecture

```
Brands JSON
    ↓
[BrandStore] ← User selects brand
    ↓
    ├─→ /app/dashboard → DashboardPage loads dashboard.json
    ├─→ /app/audit → AuditPage loads audit-modules.json
    └─→ /app/architecture → ArchitecturePage (static content)
    
Each page:
  1. Reads selectedBrand from BrandStore
  2. Loads relevant JSON from /public/audit-data/{brandId}/
  3. Renders features with structured, typed data
  4. Displays metrics, insights, issues, recommendations
```

---

## Project Structure

```
src/
├── app/                              # Next.js App Router pages
│   ├── layout.tsx                    # Root layout with Header & Footer
│   ├── page.tsx                      # / — Home page
│   ├── not-found.tsx                 # 404 error page
│   ├── about/
│   │   └── page.tsx                  # /about — Team & mission
│   ├── platform/
│   │   └── page.tsx                  # /platform — Product explainer
│   └── app/                          # Dashboard namespace
│       ├── layout.tsx                # App layout with Sidebar & Header
│       ├── dashboard/
│       │   └── page.tsx              # /app/dashboard — Brand snapshot
│       ├── audit/
│       │   └── page.tsx              # /app/audit — Module details
│       └── architecture/
│           └── page.tsx              # /app/architecture — System diagram
│
├── components/                       # React components (organized by layer)
│   ├── layouts/                      # Layout components
│   │   ├── Header.tsx                # Navigation bar
│   │   ├── DashboardHeader.tsx       # App header with brand selector
│   │   ├── DashboardSidebar.tsx      # App navigation sidebar
│   │   └── Footer.tsx                # Footer with links
│   │
│   ├── features/                     # Feature-specific components
│   │   ├── home/                     # Home page features
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AiSeoSection.tsx
│   │   │   ├── ModulesOverview.tsx
│   │   │   ├── PipelineView.tsx
│   │   │   └── CtaSection.tsx
│   │   │
│   │   ├── dashboard/                # Dashboard features
│   │   │   ├── BrandSelector.tsx     # Multi-brand selector
│   │   │   ├── AiVisibilityCard.tsx  # Metric display
│   │   │   ├── EeatScoreCard.tsx
│   │   │   ├── KeywordCoverageCard.tsx
│   │   │   ├── LastAuditTimestamp.tsx
│   │   │   └── MetricCard.tsx        # Generic metric container
│   │   │
│   │   ├── audit/                    # Audit page features
│   │   │   ├── ModuleSidebar.tsx     # 7 module buttons
│   │   │   ├── ModuleDetail.tsx      # Selected module details
│   │   │   ├── ScoreDisplay.tsx      # Module score
│   │   │   ├── InsightsList.tsx      # Positive findings
│   │   │   ├── IssuesList.tsx        # Flagged issues
│   │   │   └── RecommendationsList.tsx
│   │   │
│   │   ├── architecture/             # Architecture page features
│   │   │   ├── SystemDiagram.tsx     # Full pipeline visualization
│   │   │   ├── InputAssemblerNode.tsx
│   │   │   ├── ContextPackNode.tsx
│   │   │   ├── ModuleNode.tsx        # Generic module representation
│   │   │   └── OutputNode.tsx
│   │   │
│   │   └── about/                    # About page features
│   │       ├── Mission.tsx
│   │       ├── Philosophy.tsx
│   │       └── Vision.tsx
│   │
│   └── ui/                           # UI primitives (shadcn/ui + custom)
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── select.tsx
│       ├── skeleton.tsx              # Loading state
│       ├── metric-skeleton.tsx       # Metric-specific skeleton
│       └── module-skeleton.tsx       # Module-specific skeleton
│
├── types/                            # TypeScript interfaces
│   ├── brand.ts                      # Brand interface
│   ├── audit.ts                      # Audit module & results
│   ├── metrics.ts                    # Dashboard metrics
│   └── architecture.ts               # System components
│
├── stores/                           # Zustand state management
│   ├── brandStore.ts                 # Global brand selection state
│   └── auditStore.ts                 # Audit module selection state
│
├── data/                             # Constants & metadata
│   └── modules.ts                    # 7 module definitions
│
├── lib/                              # Utilities & helpers
│   ├── utils.ts                      # Class merging, formatting
│   └── constants.ts                  # App-wide constants
│
└── styles/                           # Global styles
    └── globals.css                   # Tailwind base + custom

public/
├── audit-data/                       # Mocked data files
│   ├── brands.json                   # List of available brands
│   ├── brand-1/
│   │   ├── dashboard.json            # Metrics & scores
│   │   └── audit-modules.json        # Detailed audit results
│   └── brand-2/
│       ├── dashboard.json
│       └── audit-modules.json
│
├── images/                           # Icons, illustrations, logos
│   ├── modules/                      # Module icons (7 total)
│   ├── architecture/                 # Architecture diagram elements
│   └── brand/                        # Brand logos
│
└── (config files)
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    ├── next.config.js
    ├── vercel.json                   # Deployment config
    └── README.md                     # This file
```

---



### Dashboard Metrics

```typescript
// src/types/metrics.ts

export interface DashboardMetrics {
  brandId: string;           // Reference to brand
  aiVisibility: number;      // 0-100
  eeatScore: number;         // 0-100 (E-E-A-T)
  keywordCoverage: number;   // 0-100
  technicalReadinessScore: number;
  contentQualityScore: number;
  competitorBenchmarkScore: number;
  brandMentionScore: number;
  averageScore: number;      // Computed average
  lastAudit: string;         // ISO date
  recommendedActions: number; // Count
  criticalIssues: number;    // Count
}
```

### Audit Module Result

```typescript
// src/types/audit.ts

export interface Insight {
  id: string;
  title: string;
  description: string;
  category: 'positive' | 'warning' | 'critical';
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  affectedPages?: number;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  effort: 'low' | 'medium' | 'high';
}

export interface AuditModuleResult {
  moduleId: string;          // "ai-visibility", "eeat", etc.
  moduleName: string;
  score: number;             // 0-100
  insights: Insight[];       // Positive findings
  issues: Issue[];           // Flagged problems
  recommendations: Recommendation[];
  testedPages: number;
  passedChecks: number;
}
```

### Data Files

All data lives in `/public/audit-data/{brandId}/` as JSON, loaded at runtime:

```json
// public/audit-data/brand-1/dashboard.json
{
  "brandId": "brand-1",
  "aiVisibility": 78,
  "eeatScore": 82,
  "keywordCoverage": 71,
  "technicalReadinessScore": 85,
  "contentQualityScore": 79,
  "competitorBenchmarkScore": 73,
  "brandMentionScore": 68,
  "averageScore": 76.6,
  "lastAudit": "2024-12-15",
  "recommendedActions": 12,
  "criticalIssues": 2
}
```

---

## Component Architecture

### Layering Strategy

Components are organized into **three distinct layers**:

#### 1. **Layout Components** (`/components/layouts/`)
Handle structural page organization, navigation, and shell UI.

- **Header.tsx** – Top navigation bar for marketing pages
- **DashboardHeader.tsx** – App header with brand selector
- **DashboardSidebar.tsx** – App navigation (Dashboard, Audit, Architecture)
- **Footer.tsx** – Footer with links

**Responsibility**: Layout only; no business logic or data loading.

#### 2. **Feature Components** (`/components/features/`)
Encapsulate domain-specific logic and data presentation for specific features.

**Example: Dashboard Feature Group**
```
features/dashboard/
├── BrandSelector.tsx       # Reads & updates BrandStore
├── AiVisibilityCard.tsx    # Renders AI Visibility metric
├── MetricCard.tsx          # Generic metric container
└── LastAuditTimestamp.tsx  # Renders last audit date
```

Each feature component:
- Handles its own data loading and formatting
- Uses typed interfaces for props
- Delegates rendering to UI primitives
- Does NOT duplicate code across similar components


Reusable pattern reduces code duplication while maintaining clarity.

#### 3. **UI Primitives** (`/components/ui/`)
Low-level, unstyled components from shadcn/ui (Button, Card, Badge, Select, etc.).

- **card.tsx** – Generic card container
- **button.tsx** – Styled button with variants
- **badge.tsx** – Status/category badge
- **skeleton.tsx** – Loading state placeholder
- **metric-skeleton.tsx** – Loading state for metric cards

These are intentionally generic and **reused across multiple features**.

### Organization

**Avoiding monoliths**:
- Each page file (`page.tsx`) is under 150 lines
- Feature components focus on **one responsibility**
- Large features (e.g., Audit) are decomposed into sub-components
- AuditPage renders ModuleSidebar + ModuleDetail
 - ModuleDetail renders ScoreDisplay + InsightsList + IssuesList

---

## State Management

### Zustand Stores

State is managed with **Zustand** for simplicity and performance. Two stores handle different concerns:

#### 1. **BrandStore** (Global)
Manages selected brand across the entire app.

**Why global?** Brand selection affects dashboard metrics, audit results, and architecture context across multiple routes. A single source of truth ensures consistency.

#### 2. **AuditStore** (Per-Route)
Manages selected audit module on `/app/audit` page.

**Why local?** Module selection is only relevant on the audit page. Keeping it isolated prevents unnecessary global state bloat.

### State Flow

```
User selects brand from BrandSelector
       ↓
useAuditStore.setSelectedBrand(brand)
       ↓
All components reading useBrandStore re-render
       ↓
Dashboard page: loads /audit-data/{brandId}/dashboard.json
Audit page: loads /audit-data/{brandId}/audit-modules.json
Architecture page: updates context reference
```

**Predictability**: Every component accessing `useBrandStore()` gets the same brand, eliminating state inconsistency bugs.

---

## Routes & Features

### Public Website

#### 1. `/` — Home
**Purpose**: Explain Kasparro's value in <10 seconds.

**Sections**:
- **HeroSection** – Headline, subheadline, CTA
- **AiSeoSection** – Traditional SEO vs. AI-Native SEO comparison
- **ModulesOverview** – 7 audit modules with icons & descriptions
- **PipelineView** – Input → Processing → Output flow
- **CtaSection** – Call-to-action to run audit
- **Footer** – Navigation & company info

**Data**: Static content + hardcoded text (no JSON)

#### 2. `/platform` — Product Explainer
**Purpose**: Bridge marketing → product; explain capabilities in depth.

**Sections**:
- **Pipeline Diagram** – 3-step process (Input → Modules → Output)
- **Data Inputs** – What Kasparro consumes (domain, content, signals)
- **Outputs** – What brands receive (scores, insights, recommendations)
- **Comparison Table** – Traditional SEO vs. AI-Native SEO

**Data**: Static content + comparison table

#### 3. `/about` — Team & Mission
**Purpose**: Establish credibility and mission.

**Sections**:
- **Mission** – Core mission statement
- **Philosophy** – Design principles (4 pillars)
- **Vision** – Vision for AI-first search (3 strategic points)

**Data**: Static content

### Product Dashboard

#### 1. `/app/dashboard` — Brand Snapshot
**Purpose**: High-level overview of brand's AI-readiness.

**Components**:
- **DashboardHeader** – Brand selector dropdown
- **BrandName & LastAudit** – Brand info
- **MetricCards** – AI Visibility, E-E-A-T, Keyword Coverage, Last Audit
- **Overall Score** – Average across all modules

**Data**: `/public/audit-data/{brandId}/dashboard.json`

**Interactions**:
- Select brand → All metrics update
- Brand persists across page navigation (stored in BrandStore)

#### 2. `/app/audit` — Module Details
**Purpose**: Deep dive into specific audit module.

**Layout**: Left sidebar (7 modules) + main panel (module details)

**Components**:
- **ModuleSidebar** – Button for each module
- **ModuleDetail** – Selected module's:
  - Score (0-100)
  - Key Insights (positive findings)
  - Issues (problems with severity badges)
  - Recommendations (prioritized actions)

**Data**: `/public/audit-data/{brandId}/audit-modules.json`

**Interactions**:
- Click module → Details update
- Module selection persists while brand changes
- Brand selector updates all audit data

#### 3. `/app/architecture` — System Understanding
**Purpose**: Visualize Kasparro's internal architecture.

**Components**:
- **SystemDiagram** – Full 4-step pipeline
  - **Step 1: InputAssemblerNode** – Domain, content, signals, authority
  - **Step 2: ContextPackNode** – Unified representation
  - **Step 3: ModuleNodes** – 7 parallel modules
  - **Step 4: OutputNode** – Scores, insights, issues, recommendations

**Data**: Static content (no JSON)

**Purpose**: Demonstrates system thinking and architecture clarity.

---

## Engineering Decisions

### 1. **No Page-Level Monoliths**
Each page (`page.tsx`) delegates to feature components. 

**Example**
```typescript

export default function DashboardPage() {
  const { selectedBrand } = useBrandStore();
  return (
    <div className="p-8">
      <DashboardHeader />
      {selectedBrand ? <MetricCards /> : <NoSelection />}
    </div>
  );
}
```

### 2. **Zustand Over Context**
Zustand was chosen for:
- Simpler API (no Provider boilerplate)
- Automatic re-render optimization
- Better DevTools support
- Explicit state mutations

### 3. **Loading Skeletons for Polish**
Metric skeletons provide:
- Better perceived performance
- Professional appearance
- Prevention of layout shift (CLS)

---

## Testing

### Test Coverage

All functionality tested via Playwright E2E automation:

- Public Website
- Dashboard
- Audit
- Architecture
- Error Handling
- No Console Errors


## Assumptions & Tradeoffs

### Assumptions Made

1. **Static Home Page**
   - Home page content is static (no JSON)
   - Reduces complexity for MVP
   - Future: Make homepage dynamic

2. **No Real Audit Processing**
   - Audit scores/insights are mocked
   - Real platform would run AI modules
   - Demonstrates data presentation layer only

### Tradeoffs Made

| Decision | Benefit | Tradeoff |
|----------|---------|----------|
| **Zustand** for state | Simple, performant | Not as verbose as Redux |
| **Mocked data** | Fast development | No real AI processing |
| **shadcn/ui** | Consistent, accessible | Less unique visual identity |
| **No animations** (mostly) | Lightweight, fast | Less engaging feel |
| **Static home page** | Simple to build | Less dynamic than possible |
| **Single Zustand store** | Clarity | Could split for modularity |
