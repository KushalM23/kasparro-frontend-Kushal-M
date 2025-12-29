# Kasparro | AI-SEO Command Center

Kasparro is a high-fidelity audit platform designed for the neural-web epoch. It assembles fragmented brand signals into a unified context, processing them through 7 parallel intelligence modules to quantify and optimize AI-readiness.

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
│  └─ Card, Button, Badge, Select                     │
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

## New Updates

### 1. Component Naming & Consistency
Standardized component naming conventions to better reflect their functional roles within the architecture:
- `ScoreDisplay` &rarr; `ModuleScoreCard`: More accurately describes the visual representation of module scores.
- `AuditStatus` &rarr; `AuditActionState`: Reflects that this component manages the different states of the audit lifecycle
- `MetricsGrid` &rarr; `DashboardMetricsGrid`: Clarifies its specific use case within the dashboard context.

### 2. Mobile Responsiveness & UX Optimization
Refined the mobile experience to ensure the platform remains functional and visually appealing on smaller screens:
- **Grid Layouts**: Updated the `DashboardMetricsGrid` to use a 2-column layout on mobile instead of a single column, maximizing screen utility.
- **Comparison Table**: Fixed the `Comparison` component's grid logic to prevent text overlap and layout breaking on mobile devices.
- **Space Management**: Reduced excessive vertical and horizontal paddings across all major sections (Hero, Pipeline, Empty States) to eliminate wasted space on mobile.
- **Typography**: Adjusted responsive font sizes for headings and buttons to maintain hierarchy without overwhelming small viewports.

### 3. Robust Error Handling & Data Resilience
Implemented a more defensive data loading strategy to handle network failures and missing assets gracefully:
- **Fetch Validation**: Added explicit checks for `response.ok` before processing JSON data.
- **Error States**: Introduced local error states in `DashboardPage` and `AuditPage` to capture and display loading failures.
- **User Feedback**: Added dismissible error banners to provide clear feedback when data cannot be retrieved.
- **Fallback Mechanisms**: Ensured the UI remains stable even when specific data modules fail to load.

### 4. Visual Polish & Information Hierarchy
Enhanced the visual communication of audit findings:
- **Severity-Based Styling**: The `IssuesList` now uses color-coded indicators (Red for Critical/High, Orange for Medium, Blue for Low) to help users prioritize fixes.
- **Priority Badges**: Added visual badges to `RecommendationsList` to highlight the urgency of specific actions.
- **Layout Refinement**: Improved border and divider logic in grid components to ensure a clean, professional look across all breakpoints.

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
│   │   │   ├── MetricsGrid.tsx       # Metric display with Re-Audit button
│   │   │   ├── AuditStatus.tsx       # Empty states & loading
│   │   │   └── DashboardHeader.tsx   # Header with brand selector
│   │   │
│   │   ├── audit/                    # Audit page features (Modular)
│   │   │   ├── ModuleSidebar.tsx     # 7 module navigation
│   │   │   ├── AuditModuleContent.tsx # Main module container
│   │   │   ├── ScoreDisplay.tsx      # Premium score visualization
│   │   │   ├── InsightsList.tsx      # Grid-based insights
│   │   │   ├── IssuesList.tsx        # Bordered issue cards
│   │   │   ├── RecommendationsList.tsx # Prioritized actions
│   │   │   └── AuditEmptyState.tsx   # No data states
│   │   │
│   │   ├── architecture/             # Architecture page features (Modular)
│   │   │   ├── SystemDiagram.tsx     # Full pipeline visualization
│   │   │   ├── InputAssemblerNode.tsx # Step 1: Data collection
│   │   │   ├── ContextPackNode.tsx   # Step 2: Normalization
│   │   │   ├── OutputNode.tsx        # Step 4: Reporting
│   │   │   └── ModuleNode.tsx        # Generic module card
│   │   │
│   │   ├── platform/                 # Platform page features
│   │   │   ├── PipelineFlow.tsx
│   │   │   ├── DataInputs.tsx
│   │   │   ├── Outputs.tsx
│   │   │   └── Comparison.tsx
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
│       └── skeleton.tsx              # Loading state
│
├── types/                            # TypeScript interfaces
│   ├── brand.ts                      # Brand interface
│   ├── audit.ts                      # Audit module & results
│   └── metrics.ts                    # Dashboard metrics
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

1. **Purposeful Animations**
   - Home page uses Framer Motion for entrance animations
   - All animations are purposeful, not excessive
   - Enhances UX without sacrificing performance

2. **No Real Audit Processing**
   - Audit scores/insights are mocked from JSON
   - Real platform would run AI modules
   - Demonstrates data presentation layer only
   - Re-Audit simulates 2-second processing time

3. **Multi-Brand Support**
   - Dashboard supports switching between brands
   - Each brand has its own audit data
   - Re-Audit functionality updates metrics per brand

### Tradeoffs Made

| Decision | Benefit | Tradeoff |
|----------|---------|----------|
| **Zustand** for state | Simple, performant | Not as verbose as Redux |
| **Mocked data** | Fast development, demo-ready | No real AI processing |
| **Modular components** | Reusable, maintainable | More files to manage |
| **Custom design system** | Unique brand identity | More initial setup than pure shadcn |
| **Framer Motion** | Premium feel, smooth UX | Slight bundle size increase |
| **Re-Audit functionality** | Better UX for testing | Simulated delay (2s) |
| **Static home content** | Simple, fast | Less dynamic than possible |
| **High-fidelity design** | Professional appearance | Longer initial development |
