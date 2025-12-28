# Kasparro Frontend

A modern, AI-native SEO platform frontend built with Next.js, TypeScript, and Tailwind CSS. Features a polished dark/light mode design system with smooth Framer Motion animations and responsive layouts optimized for all devices.

**Live Demo**: [Deployed on Vercel](https://kasparro-frontend.vercel.app) 

---

## Table of Contents

- [Overview](#overview)
- [Recent Updates - UI Revamp](#recent-updates---ui-revamp)
- [Theme & Design System](#theme--design-system)
- [Architecture & System Design](#architecture--system-design)
- [Project Structure](#project-structure)
- [Data Modeling](#data-modeling)
- [Component Architecture](#component-architecture)
- [State Management](#state-management)
- [Routes & Features](#routes--features)
- [Setup & Development](#setup--development)
- [Building & Deployment](#building--deployment)
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

## Recent Updates - UI Revamp

The frontend has been completely redesigned with a modern, polished aesthetic featuring a comprehensive dark/light mode system, smooth Framer Motion animations throughout, and mobile/tablet optimized layouts.

### What Changed

#### Dark/Light Mode Theme System ✨
- **Toggle Button**: Fixed position in bottom-right corner with animated sun/moon icons
- **Persistent Storage**: User theme preference saved in browser localStorage
- **System Detection**: Respects OS dark mode preference on first visit
- **Seamless Transitions**: Smooth CSS variable transitions between light and dark modes
- **Full Coverage**: Every page and component supports both themes

**Color Palette**:
- Primary Gradient: `#9bb2e5` → `#698cbf` (blue-based)
- Light Background: `#ebf4f5` (near white)
- Dark Background: `#08203e` (deep navy)
- Accent Text: `#ebf4f5` on dark mode

#### Modern Design Philosophy
- **Removed Card Components**: Simplified design with subtle borders instead of elevated cards
- **Typography-Focused**: Clean hierarchy with proper spacing and breathing room
- **Subtle Interactions**: Hover effects with color transitions and elevation
- **Consistent Palette**: Unified use of primary colors across all pages

#### Animation System
- **Page Transitions**: Fade and slide animations as users navigate
- **Component Entrance**: Staggered animations when components mount
- **Interactive Feedback**: Hover and tap animations for user interactions
- **Accessibility First**: Respects `prefers-reduced-motion` media query
- **Framework**: Framer Motion v12.23.26 with container/item variants

#### Responsive Design Optimization
- **Mobile First**: Optimized layouts from 375px to 2560px
- **Tailwind Breakpoints**: Proper use of md (768px) and lg (1024px)
- **Collapsible Sidebar**: Audit page sidebar toggles on mobile with animated overlay
- **Adaptive Grids**: Auto-responsive grid columns that adapt to screen size
- **Touch Friendly**: Larger touch targets and proper spacing on mobile devices

### Updated Pages & Features

#### Home Page (`/`)
- **HeroSection**: Two-column layout (text + gradient visual)
  - Large H1 with gradient text effect
  - Subheadline and description
  - "Run Audit" CTA button
  - Animated entrance on page load
  
- **AiSeoSection**: Traditional vs AI-Native comparison
  - Left column: Traditional SEO with × symbols (muted)
  - Right column: AI-Native SEO with ✓ symbols (accent color)
  - Bottom quote section
  - Clean, non-card design
  
- **ModulesOverview**: 7-module grid showcase
  - 4-column layout on desktop (responsive to 1-2 cols on mobile)
  - Icon + title + description for each module
  - Hover elevation and color transitions
  - Staggered entrance animations
  
- **PipelineView**: 3-step pipeline visualization
  - Input → Processing → Output flow
  - Connecting arrows between steps
  - SVG icons for visual appeal
  - Responsive (stacked on mobile)
  
- **CtaSection**: Final call-to-action
  - Gradient background with centered text
  - "Run Your Audit Now" button
  - Section entrance animation

#### Platform Page (`/platform`)
- **Product Overview**: Detailed product explanation with sections
- **Audit Pipeline**: 4-stage breakdown
  1. **Input Assembler**: Collects brand data from multiple sources
  2. **Context Pack**: Enriches and prepares data
  3. **7 Audit Modules**: Parallel analysis dimensions
  4. **Output Surfaces**: Delivers scores, insights, recommendations
  
- **Data Inputs**: Brand data, web presence, AI search context
- **Data Outputs**: Dashboard snapshot, detailed reports, architecture documentation
- **Comparison Table**: Statistical comparison vs traditional SEO (6 rows)
  - Responsive with `overflow-x-auto` for mobile scrolling
  - Hover row highlighting
  - 3-column layout (Aspect | Traditional SEO | Kasparro)

#### About Page (`/about`)
- **Mission Section**: Core transparency and purpose
- **Philosophy Section**: 4-pillar design philosophy
  - Modular Architecture
  - Data-Driven Design
  - Clarity Over Complexity
  - Continuous Evolution
  
- **Vision Section**: Future of AI-first search
  - 5-point strategic vision
  - Founder-engineer credibility statement

#### Dashboard Page (`/app/dashboard`)
- **Brand Selector Screen**: Click-based brand selection
  - Centered title and description
  - Motion animations on buttons
  - Hover scale effects
  
- **Loading State**: Skeleton screens while data loads
- **Metrics Cards**: 4-column grid (1-2 cols on mobile)
  - **AI Visibility Score**: How visible to AI models
  - **E-E-A-T Score**: Trust and authority signals
  - **Keyword Coverage**: Non-branded keyword tracking
  - **Overall Score**: Average across all modules (highlighted)
  - Hover lift effect with shadow
  - Number animation on entrance
  
- **Detailed Report CTA**: Link to full audit report
  - Button with navigation to audit page
  - Description of what users will find

#### Audit Page (`/app/audit`)
- **ModuleSidebar**: 7 clickable modules
  - Icon + short description + score display
  - Active state highlighting
  - Hover effects with subtle color change
  - Staggered entrance animations
  
- **Module Details Panel**: Selected module information
  - Large title and description
  - Score display with progress bar
  - Status label (Excellent/Good/Fair/Needs Work)
  
- **Key Insights Section**: Positive findings
  - Cards with title and description
  - Animated entrance per insight
  - Hover border highlight
  
- **Issues & Flags Section**: Problems identified
  - Color-coded by severity (critical/warning/info)
  - Left border accent color
  - Icon + title + description layout
  
- **Recommendations Section**: Actionable items
  - Priority and effort indicators
  - Detailed descriptions
  - Staggered animations
  
- **Mobile Sidebar**: Floating action button
  - Fixed bottom-right on mobile
  - Animated menu toggle
  - Overlay backdrop when open
  - Slides in from left with animation

#### Architecture Page (`/app/architecture`)
- **Pipeline Visualization**: 4-stage system diagram
  - Each stage: icon, title, description
  - Vertical connecting lines between stages
  - Offset positioning for visual flow
  - All stages animated on entrance
  
- **Module Grid**: 7 interactive module cards
  - Clickable selection with visual feedback
  - Icon + title + abbreviated description
  - Active state highlighting
  - Grid layout with proper spacing
  
- **Selected Module Details**: Information panel
  - Module name and full description
  - "What It Analyzes" section
  - "You'll Learn" section
  - Smooth animation when selection changes
  
- **System Explanation**: Bottom section
  - "How It All Comes Together"
  - 3 numbered steps explaining the flow
  - Clear, concise descriptions

### Layout & Navigation Updates

#### Header (`src/components/layouts/Header.tsx`)
- **Centered Logo**: KASPARRO logo in center (links to home)
- **3-Tab Navigation**: Platform | About | Our Product
- **CTA Button**: "Run Audit" button on far right
- **Mobile Menu**: Hamburger menu on small screens
- **Dark Mode Support**: Full theme compatibility

#### Footer (`src/components/layouts/Footer.tsx`)
- **3-Column Layout**:
  - Navigation links
  - Connect (social media)
  - Legal (privacy, terms)
- **Brand Section**: Logo + copyright at bottom
- **Arrow Suffixes**: → for all link destinations
- **Gradient Support**: Theme-aware colors
- **Responsive**: Stacks to single column on mobile

#### Theme Provider (`src/components/providers/ThemeProvider.tsx`)
- Manages theme state across entire app
- Provides toggle button in fixed position
- Saves preference to localStorage
- Detects system preference on first visit
- Client-side only with proper hydration handling

---

## Theme & Design System

### Color Palette

**Light Mode (Default)**
```css
--background: #ebf4f5        /* Near white */
--foreground: Dark text      /* High contrast */
--primary: #9bb2e5           /* Primary blue */
--secondary: #698cbf         /* Secondary blue */
--card: White with border    /* Card backgrounds */
--muted-foreground: Light gray
```

**Dark Mode**
```css
--background: #08203e        /* Deep navy */
--foreground: #ebf4f5        /* Off-white text */
--primary: #9bb2e5           /* Primary blue (lighter on dark) */
--secondary: #698cbf         /* Secondary blue (lighter on dark) */
--card: Dark navy with border
--muted-foreground: Muted gray text
```

### Implementation

All colors are CSS custom properties in `src/styles/globals.css`:

```tsx
// Automatic theme support
className="bg-background text-foreground"  // Adapts automatically
className="text-primary dark:text-accent"  // Explicit dark variant
className="border border-primary/50"       /* With opacity support */
```

### Typography System

- **Headings**: Bold, with gradient text on primary headings
- **Body Text**: Clear, readable sizes with proper line height
- **Muted Text**: `text-muted-foreground` for secondary information
- **Emphasis**: Color shift (primary → accent) for important elements

---

## Architecture & System Design

### Core Design Philosophy

This project prioritizes **system thinking over page development**:

1. **Clear Component Boundaries** – Separation of layout, feature, and UI primitive components
2. **Structured Data Modeling** – All data flows through typed interfaces
3. **Predictable State** – Single source of truth for brand selection across routes
4. **Data-Driven UI** – No hardcoded JSX; all content from structured JSON
5. **Reusability** – Components generic enough for multi-brand scenarios

### System Layers

```
┌──────────────────────────────────────────────────┐
│    Next.js App Router (Pages)                    │
├──────────────────────────────────────────────────┤
│ Layout Components    │    Feature Components     │
│ ├─ Header           │    ├─ HeroSection         │
│ ├─ Sidebar          │    ├─ ModuleSidebar       │
│ ├─ Footer           │    └─ AuditDetail         │
│ └─ ThemeProvider    │                            │
├──────────────────────────────────────────────────┤
│ UI Primitives (shadcn/ui)                        │
│ ├─ Button, Card, Badge, Select                  │
│ └─ Skeleton, Metric components                  │
├──────────────────────────────────────────────────┤
│ Animation Layer (Framer Motion)                  │
│ ├─ Page transitions                             │
│ ├─ Component stagger animations                 │
│ └─ Interactive hover effects                    │
├──────────────────────────────────────────────────┤
│ State Layer (Zustand)                            │
│ ├─ Brand Selection (global)                     │
│ └─ Audit Module Selection (per-page)            │
├──────────────────────────────────────────────────┤
│ Data Layer (JSON + Types)                        │
│ ├─ /public/audit-data/{brand}/                  │
│ ├─ /src/data/modules.ts                         │
│ └─ TypeScript Interfaces (/src/types)           │
└──────────────────────────────────────────────────┘
```

### Data Flow Architecture

```
Brands JSON
    ↓
[BrandStore] ← User selects brand
    ↓
    ├─→ /app/dashboard → loads dashboard.json
    ├─→ /app/audit → loads audit-modules.json
    └─→ /app/architecture → static content
    
Page Data Loading:
  1. Read selectedBrand from BrandStore
  2. Load /public/audit-data/{brandId}/*.json
  3. Render features with typed data
  4. Display metrics, insights, issues, recommendations
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
│   │   └── page.tsx                  # /about — Mission, philosophy, vision
│   ├── platform/
│   │   └── page.tsx                  # /platform — Product explainer
│   └── app/                          # Dashboard namespace
│       ├── layout.tsx                # App layout with Sidebar
│       ├── dashboard/
│       │   └── page.tsx              # /app/dashboard — Brand metrics
│       ├── audit/
│       │   └── page.tsx              # /app/audit — Module details
│       └── architecture/
│           └── page.tsx              # /app/architecture — System diagram
│
├── components/                       # React components
│   ├── providers/
│   │   └── ThemeProvider.tsx         # Dark/light mode toggle
│   │
│   ├── layouts/                      # Layout components
│   │   ├── Header.tsx                # Navigation bar
│   │   ├── DashboardHeader.tsx       # App header
│   │   ├── DashboardSidebar.tsx      # App nav sidebar
│   │   └── Footer.tsx                # Footer
│   │
│   ├── features/                     # Feature components
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AiSeoSection.tsx
│   │   │   ├── ModulesOverview.tsx
│   │   │   ├── PipelineView.tsx
│   │   │   └── CtaSection.tsx
│   │   ├── dashboard/
│   │   │   ├── BrandSelector.tsx
│   │   │   └── MetricCard.tsx
│   │   ├── audit/
│   │   │   └── ModuleSidebar.tsx
│   │   └── about/
│   │       ├── Mission.tsx
│   │       ├── Philosophy.tsx
│   │       └── Vision.tsx
│   │
│   └── ui/                           # UI primitives
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── select.tsx
│       └── skeleton.tsx
│
├── types/                            # TypeScript interfaces
│   ├── brand.ts
│   ├── audit.ts
│   ├── metrics.ts
│   └── architecture.ts
│
├── stores/                           # Zustand state
│   ├── brandStore.ts
│   └── auditStore.ts
│
├── data/                             # Constants & metadata
│   └── modules.ts
│
├── lib/                              # Utilities
│   ├── utils.ts
│   └── constants.ts
│
└── styles/                           # Global styles
    └── globals.css                   # Tailwind + CSS variables

public/
├── audit-data/                       # Mocked data
│   ├── brands.json
│   ├── brand-1/
│   │   ├── dashboard.json
│   │   └── audit-modules.json
│   └── brand-2/
│       ├── dashboard.json
│       └── audit-modules.json
└── images/                           # Assets
```

---

## Data Modeling

### Brand Interface

```typescript
export interface Brand {
  id: string;                 // "brand-1"
  name: string;              // "TechCorp"
  domain: string;            // "techcorp.com"
  url: string;               // "https://techcorp.com"
}
```

### Dashboard Metrics

```typescript
export interface DashboardMetrics {
  aiVisibility: number;      // 0-100
  eeatScore: number;         // 0-100
  keywordCoverage: number;   // 0-100
  averageScore: number;      // Computed
  lastAudit: string;         // ISO date
}
```

### Audit Module Result

```typescript
export interface AuditModule {
  id: string;                // Module ID
  name: string;              // Display name
  score: number;             // 0-100
  insights: Array<{
    title: string;
    description: string;
  }>;
  issues: Array<{
    title: string;
    description: string;
    severity: 'critical' | 'high' | 'medium' | 'low';
  }>;
  recommendations: Array<{
    title: string;
    description: string;
    impact: 'high' | 'medium' | 'low';
    effort: 'easy' | 'medium' | 'hard';
  }>;
}
```

---

## Component Architecture

### Three-Layer Organization

#### Layer 1: Layout Components (`/components/layouts/`)
Handle page structure and navigation.
- No business logic
- No data loading
- Reusable across routes

#### Layer 2: Feature Components (`/components/features/`)
Domain-specific logic and data presentation.
- Self-contained data loading
- Typed props and interfaces
- Delegates to UI primitives

#### Layer 3: UI Primitives (`/components/ui/`)
Low-level, generic components from shadcn/ui.
- Button, Card, Badge, Select, Skeleton
- Reused across all feature components
- Styled and accessible

### Avoiding Monoliths

- Page files: ~100-200 lines max
- Feature components: Single responsibility
- Large features decomposed into sub-components
- Example: AuditPage → ModuleSidebar + ModuleDetail → Sections

---

## State Management

### Zustand Stores

**BrandStore** (Global)
- Manages selected brand across entire app
- Used on dashboard, audit, and architecture pages
- Persists brand selection during navigation

**AuditStore** (Per-Route)
- Manages selected audit module
- Only relevant on /app/audit page
- Local scope prevents state bloat

### Flow

```
User selects brand
    ↓
useBrandStore.setSelectedBrand(brand)
    ↓
All components re-render with new brand
    ↓
Pages load relevant JSON for that brand
```

---

## Routes & Features

### Public Website

#### `/` — Home Page
Product overview and value proposition.
- Hero section with CTA
- Traditional vs AI-SEO comparison
- 7-module overview grid
- System pipeline visualization
- Final call-to-action

#### `/platform` — Product Explainer
Detailed product documentation.
- Audit pipeline explanation
- Data inputs and outputs
- Statistical comparison vs traditional SEO
- Responsive table with 6 comparison points

#### `/about` — Mission & Vision
Company credibility and future direction.
- Mission statement
- 4-pillar philosophy
- AI-first search vision

### Product Dashboard

#### `/app/dashboard` — Brand Snapshot
High-level metrics and audit overview.
- Brand selector
- 4 key metric cards
- Overall score display
- Link to detailed audit

#### `/app/audit` — Module Analysis
Deep dive into specific audit modules.
- Sidebar with 7 modules
- Module score display
- Insights section
- Issues with severity badges
- Recommendations with effort estimates
- Mobile sidebar toggle

#### `/app/architecture` — System Diagram
Visual system architecture explanation.
- 4-stage pipeline diagram
- Interactive module grid
- Selected module details
- System explanation

---

## Setup & Development

### Requirements

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone <repo>
cd kasparro-frontend-kushal-m

# Install dependencies
npm install

# Start development server
npm run dev
```

Server runs at `http://localhost:3000`

### Environment Setup

No environment variables required for development. Mocked data is served from `/public/audit-data/`.

---

## Building & Deployment

### Production Build

```bash
npm run build
npm run start
```

### Vercel Deployment

Configured via `vercel.json`:

```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next"
}
```

Deploy with:
```bash
vercel deploy
```

### Build Output

```
✓ Compiled successfully
✓ Generating static pages
  Route (app)
  ├ ○ /
  ├ ○ /_not-found
  ├ ○ /about
  ├ ○ /app/architecture
  ├ ○ /app/audit
  ├ ○ /app/dashboard
  └ ○ /platform
```

All routes pre-rendered as static content for optimal performance.

---

## Engineering Decisions

### 1. Dark/Light Mode via CSS Variables
- **Decision**: CSS custom properties for all colors
- **Benefit**: Zero-cost runtime switching
- **Implementation**: Single `.dark` class on html element

### 2. Framer Motion for Animations
- **Decision**: Use Framer Motion for all animations
- **Benefit**: Declarative, composable animations with proper accessibility
- **Pattern**: Container/item variants for staggered entrance

### 3. Zustand for State
- **Decision**: Zustand instead of Context or Redux
- **Benefits**: Simple API, minimal boilerplate, automatic re-render optimization
- **Tradeoff**: Less visibility than Redux DevTools

### 4. shadcn/ui Components
- **Decision**: Headless UI with Tailwind styling
- **Benefit**: Consistent, accessible, customizable components
- **Pattern**: Copy components to project for full control

### 5. Mobile-First Responsive Design
- **Decision**: Start with mobile, enhance with breakpoints
- **Benefit**: Better performance on mobile, graceful scaling
- **Implementation**: `md:` and `lg:` Tailwind prefixes

---

## Future Enhancements

### Phase 2: Interactivity
- [ ] Real audit execution backend
- [ ] User authentication & multi-account support
- [ ] Persistent audit history
- [ ] Custom audit scheduling

### Phase 3: Advanced Features
- [ ] Real-time audit progress tracking
- [ ] Detailed trend graphs (audit history over time)
- [ ] Competitive benchmarking
- [ ] Custom insight generation

### Phase 4: Platform Expansion
- [ ] API documentation
- [ ] Webhook notifications
- [ ] CSV export functionality
- [ ] White-label dashboard

---

## Summary

This UI revamp delivers a **production-ready, modern frontend** that:
- ✨ Supports dark/light mode with persistent user preference
- 🎨 Features a unified design system with primary colors (#9bb2e5 → #698cbf)
- 🎭 Includes smooth Framer Motion animations throughout
- 📱 Optimizes for mobile, tablet, and desktop with responsive layouts
- ♿ Maintains accessibility standards and respects motion preferences
- 🚀 Pre-renders all routes for optimal performance

The codebase is organized into clear layers (layout → features → primitives), uses TypeScript for safety, manages state predictably with Zustand, and provides an excellent foundation for scaling.

