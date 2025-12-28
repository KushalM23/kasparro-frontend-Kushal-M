# Tasks: Kasparro Frontend - Marketing Website & Product Dashboard

**Input**: Design documents from `/specs/001-kasparro-frontend-site/`  
**Prerequisites**: plan.md ✅, spec.md ✅

**Tests**: Tests are NOT explicitly requested in this specification. Implementation tasks only.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

---

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

---

## Phase 0: Setup & Research (Shared Infrastructure)

**Purpose**: Project initialization, research, and basic structure

- [x] T001 Initialize Next.js 14 project with TypeScript and App Router in repository root
- [x] T002 Configure Tailwind CSS with custom theme in tailwind.config.ts
- [x] T003 Initialize shadcn/ui and install base components (button, card, select, badge, skeleton) in src/components/ui/
- [x] T004 [P] Create project folder structure per plan.md (src/app, src/components, src/stores, src/types, src/lib, src/data, public/audit-data)
- [x] T005 [P] Configure ESLint and Prettier with TypeScript rules
- [x] T006 [P] Create utility functions (cn helper) in src/lib/utils.ts
- [x] T007 [P] Create app constants in src/lib/constants.ts

✅ Phase 0 Complete - Ready for Phase 1

---

## Phase 1: Foundation & Data Layer (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

### TypeScript Interfaces

- [x] T008 [P] Create Brand interface in src/types/brand.ts
- [x] T009 [P] Create DashboardMetrics interface in src/types/metrics.ts
- [x] T010 [P] Create AuditModule, Insight, Issue, Recommendation interfaces in src/types/audit.ts
- [x] T011 [P] Create architecture component types in src/types/architecture.ts

### Mocked JSON Data

- [x] T012 [P] Create brands.json with 2 mocked brands in public/audit-data/brands.json
- [x] T013 [P] Create Brand 1 dashboard metrics in public/audit-data/brand-1/dashboard.json
- [x] T014 [P] Create Brand 1 audit modules data (7 modules with scores, insights, issues, recommendations) in public/audit-data/brand-1/audit-modules.json
- [x] T015 [P] Create Brand 2 dashboard metrics in public/audit-data/brand-2/dashboard.json
- [x] T016 [P] Create Brand 2 audit modules data in public/audit-data/brand-2/audit-modules.json

### State Management

- [x] T017 [P] Create Zustand brand store (selectedBrand, setBrand, brands list) in src/stores/brandStore.ts
- [x] T018 [P] Create Zustand audit store (selectedModule, setModule) in src/stores/auditStore.ts

### Static Data

- [x] T019 Create 7 audit module definitions (id, name, description, icon) in src/data/modules.ts

### Shared Layout Components

- [x] T020 [P] Create marketing site Header component with navigation in src/components/layouts/Header.tsx
- [x] T021 [P] Create marketing site Footer component in src/components/layouts/Footer.tsx
- [x] T022 Create root layout with Header, providers in src/app/layout.tsx
- [x] T023 Create global styles with Tailwind imports in src/styles/globals.css

✅ Phase 1 Complete - Foundation ready, user story implementation can now begin in parallel

---

## Phase 2a: Marketing Website - User Story 1 (Priority: P1) 🎯 MVP

**Goal**: Visitor lands on home page and understands what Kasparro does within 10 seconds

**Independent Test**: Load "/" and verify Hero, AI-SEO section, 7 Modules overview, Pipeline, CTA, and Footer are visible

### Implementation for User Story 1

- [x] T024 [P] [US1] Create HeroSection component with headline, subheadline, primary CTA in src/components/features/home/HeroSection.tsx
- [x] T025 [P] [US1] Create AiSeoSection component explaining AI-SEO vs traditional SEO in src/components/features/home/AiSeoSection.tsx
- [x] T026 [P] [US1] Create ModulesOverview component displaying 7 audit modules in src/components/features/home/ModulesOverview.tsx
- [x] T027 [P] [US1] Create PipelineView component showing Input → Processing → Output flow in src/components/features/home/PipelineView.tsx
- [x] T028 [P] [US1] Create CtaSection component with "Run AI-SEO Audit" button in src/components/features/home/CtaSection.tsx
- [x] T029 [US1] Compose home page with all sections in src/app/page.tsx
- [x] T030 [US1] Add responsive styles for home page (375px, 768px, 1920px)

**Checkpoint**: User Story 1 complete - Home page is functional and communicates value proposition

---

## Phase 2b: Marketing Website - User Story 2 (Priority: P1)

**Goal**: Prospect navigates to /platform and learns how Kasparro works technically

**Independent Test**: Navigate to "/platform" and verify pipeline flow, data inputs, outputs, and comparison sections are displayed

### Implementation for User Story 2

- [x] T031 [P] [US2] Create PipelineFlow component showing Input → Modules → Output diagram in src/components/features/platform/PipelineFlow.tsx
- [x] T032 [P] [US2] Create DataInputs component explaining what data Kasparro consumes in src/components/features/platform/DataInputs.tsx
- [x] T033 [P] [US2] Create Outputs component explaining what brands receive in src/components/features/platform/Outputs.tsx
- [x] T034 [P] [US2] Create Comparison component showing Kasparro vs traditional SEO in src/components/features/platform/Comparison.tsx
- [x] T035 [US2] Compose platform page with all sections in src/app/platform/page.tsx
- [x] T036 [US2] Add responsive styles for platform page

**Checkpoint**: User Story 2 complete - Platform page explains product capabilities

---

## Phase 2c: Marketing Website - User Story 3 (Priority: P2)

**Goal**: Prospect navigates to /about and establishes founder-engineer credibility

**Independent Test**: Navigate to "/about" and verify mission, philosophy, and vision sections are displayed

### Implementation for User Story 3

- [x] T037 [P] [US3] Create Mission component with company mission statement in src/components/features/about/Mission.tsx
- [x] T038 [P] [US3] Create Philosophy component with product philosophy in src/components/features/about/Philosophy.tsx
- [x] T039 [P] [US3] Create Vision component with AI-first search vision in src/components/features/about/Vision.tsx
- [x] T040 [US3] Compose about page with all sections in src/app/about/page.tsx
- [x] T041 [US3] Add responsive styles for about page

**Checkpoint**: User Story 3 complete - About page establishes credibility

---

## Phase 3a: Product Dashboard - User Story 4 (Priority: P1)

**Goal**: User accesses /app/dashboard and sees high-level brand snapshot with key metrics

**Independent Test**: Navigate to "/app/dashboard", verify brand selector, 4 metric cards, and last audit timestamp

### Dashboard Layout (shared for all /app routes)

- [x] T042 [P] [US4] Create DashboardSidebar component with navigation links in src/components/layouts/DashboardSidebar.tsx
- [x] T043 [P] [US4] Create DashboardHeader component with brand selector in src/components/layouts/DashboardHeader.tsx
- [x] T044 [US4] Create dashboard layout wrapping /app routes in src/app/app/layout.tsx

### Dashboard Components

- [x] T045 [P] [US4] Create BrandSelector component using brandStore in src/components/features/dashboard/BrandSelector.tsx
- [x] T046 [P] [US4] Create base MetricCard component in src/components/features/dashboard/MetricCard.tsx
- [x] T047 [P] [US4] Create AiVisibilityCard component in src/components/features/dashboard/AiVisibilityCard.tsx
- [x] T048 [P] [US4] Create EeatScoreCard component in src/components/features/dashboard/EeatScoreCard.tsx
- [x] T049 [P] [US4] Create KeywordCoverageCard component in src/components/features/dashboard/KeywordCoverageCard.tsx
- [x] T050 [P] [US4] Create LastAuditTimestamp component in src/components/features/dashboard/LastAuditTimestamp.tsx
- [x] T051 [US4] Compose dashboard page loading data from JSON and using brandStore in src/app/app/dashboard/page.tsx
- [x] T052 [US4] Implement brand switching - metrics update when brand selection changes
- [x] T053 [US4] Add responsive styles for dashboard page

**Checkpoint**: User Story 4 complete - Dashboard shows brand snapshot with working brand selector

---

## Phase 3b: Product Dashboard - User Story 5 (Priority: P1)

**Goal**: User accesses /app/audit and reviews detailed results across 7 modules in two-panel layout

**Independent Test**: Navigate to "/app/audit", verify left sidebar with 7 modules, select modules, main panel updates with score/insights/issues/recommendations

### Audit Components

- [x] T054 [P] [US5] Create ModuleSidebar component listing 7 modules with selection state in src/components/features/audit/ModuleSidebar.tsx
- [x] T055 [P] [US5] Create ScoreDisplay component showing module score prominently in src/components/features/audit/ScoreDisplay.tsx
- [x] T056 [P] [US5] Create InsightsList component rendering insights from data in src/components/features/audit/InsightsList.tsx
- [x] T057 [P] [US5] Create IssuesList component rendering issues with severity badges in src/components/features/audit/IssuesList.tsx
- [x] T058 [P] [US5] Create RecommendationsList component rendering recommendations in src/components/features/audit/RecommendationsList.tsx
- [x] T059 [US5] Create ModuleDetail component composing Score, Insights, Issues, Recommendations in src/components/features/audit/ModuleDetail.tsx
- [x] T060 [US5] Compose audit page with two-panel layout (sidebar + main) in src/app/app/audit/page.tsx
- [x] T061 [US5] Implement module switching using auditStore - main panel updates on selection
- [x] T062 [US5] Verify all audit data driven from JSON (no hard-coded JSX content)
- [x] T063 [US5] Add responsive styles for audit page (mobile: stacked layout)

**Checkpoint**: User Story 5 complete - Audit page shows detailed module results with working module selection

---

## Phase 3c: Product Dashboard - User Story 6 (Priority: P2)

**Goal**: User accesses /app/architecture and views system diagram showing platform components

**Independent Test**: Navigate to "/app/architecture", verify InputAssembler, ContextPack, 7 Modules, and Output surfaces are represented

### Architecture Components

- [x] T064 [P] [US6] Create InputAssemblerNode component in src/components/features/architecture/InputAssemblerNode.tsx
- [x] T065 [P] [US6] Create ContextPackNode component in src/components/features/architecture/ContextPackNode.tsx
- [x] T066 [P] [US6] Create ModuleNode component (reusable for 7 modules) in src/components/features/architecture/ModuleNode.tsx
- [x] T067 [P] [US6] Create OutputNode component for output surfaces in src/components/features/architecture/OutputNode.tsx
- [x] T068 [US6] Create SystemDiagram component composing all nodes with data flow visualization in src/components/features/architecture/SystemDiagram.tsx
- [x] T069 [US6] Compose architecture page in src/app/app/architecture/page.tsx
- [x] T070 [US6] Add responsive styles for architecture page

**Checkpoint**: User Story 6 complete - Architecture page demonstrates system understanding

---

## Phase 4: Polish & Quality

**Purpose**: Improvements that affect multiple user stories

### Error Handling & Edge Cases

- [x] T071 [P] Create styled 404 page with navigation back to home in src/app/not-found.tsx
- [x] T072 [P] Create loading skeleton components for dashboard cards in src/components/ui/metric-skeleton.tsx
- [x] T073 [P] Create loading skeleton for audit module detail in src/components/ui/module-skeleton.tsx
- [x] T074 Add loading states to dashboard page
- [x] T075 Add loading states to audit page

### Responsive Validation

- [x] T076 Test and fix all pages at 375px (mobile)
- [x] T077 Test and fix all pages at 768px (tablet)
- [x] T078 Test and fix all pages at 1920px (desktop)

### Documentation

- [x] T079 Create README.md with folder structure explanation
- [x] T080 Document architectural decisions in README.md
- [x] T081 Document tradeoffs made in README.md

## Phase 5: Deployment

**Purpose**: Deploy and validate production deployment

### Deployment Tasks

- [x] T082 Configure Vercel deployment
- [x] T083 Deploy to Vercel and verify all routes
- [x] T084 Validate page load time < 3 seconds on production

---

## Optional Enhancements (Differentiators)

**Purpose**: Bonus features if time permits

- [ ] T085 [P] Implement dark/light mode toggle with theme persistence
- [ ] T086 [P] Add Framer Motion micro-interactions for module switching on audit page
- [ ] T087 [P] Create clean empty state components for metrics with no data
- [ ] T088 [P] Add subtle page transition animations

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 0: Setup & Research
    ↓
Phase 1: Foundation & Data Layer (BLOCKS all user stories)
    ↓
    ├── Phase 2a: US1 - Home (P1) 🎯 MVP
    ├── Phase 2b: US2 - Platform (P1)
    ├── Phase 2c: US3 - About (P2)
    ├── Phase 3a: US4 - Dashboard (P1)
    ├── Phase 3b: US5 - Audit (P1)
    └── Phase 3c: US6 - Architecture (P2)
    ↓
Phase 4: Polish & Quality
    ↓
Phase 5: Deployment
    ↓
Optional: Enhancements
```

### User Story Dependencies

| Story | Priority | Can Start After | Dependencies on Other Stories |
|-------|----------|-----------------|-------------------------------|
| US1 - Home | P1 | Phase 1 complete | None (independent) |
| US2 - Platform | P1 | Phase 1 complete | None (independent) |
| US3 - About | P2 | Phase 1 complete | None (independent) |
| US4 - Dashboard | P1 | Phase 1 complete | None (independent) |
| US5 - Audit | P1 | Phase 1 complete | Uses same stores as US4 |
| US6 - Architecture | P2 | Phase 1 complete | None (independent) |

### Within Each User Story

1. Create components marked [P] in parallel
2. Compose page after components complete
3. Add responsive styles
4. Verify story works independently

---

## Parallel Opportunities

### Phase 1: Foundation & Data Layer (All can run in parallel)

```bash
# TypeScript interfaces (T008-T011) - 4 parallel tasks
# Mocked JSON data (T012-T016) - 5 parallel tasks  
# State stores (T017-T018) - 2 parallel tasks
# Layout components (T020-T021) - 2 parallel tasks
```

### User Stories (After Phase 1)

```bash
# All 6 user stories can be worked on in parallel by different developers
# Each story is independently testable

# Within US1 (T024-T028) - 5 component tasks in parallel
# Within US2 (T031-T034) - 4 component tasks in parallel
# Within US4 (T045-T050) - 6 component tasks in parallel
# Within US5 (T054-T058) - 5 component tasks in parallel
# Within US6 (T064-T067) - 4 component tasks in parallel
```

---

## Implementation Strategy

### MVP First (Recommended)

1. Complete Phase 0: Setup & Research (T001-T007)
2. Complete Phase 1: Foundation & Data Layer (T008-T023)
3. Complete Phase 2a: User Story 1 - Home page (T024-T030)
4. **STOP and VALIDATE**: Home page works, value proposition clear
5. Deploy MVP to Vercel

### Incremental Delivery (After MVP)

1. Add US2: Platform page → Deploy
2. Add US3: About page → Deploy
3. Add US4: Dashboard → Deploy
4. Add US5: Audit (core product) → Deploy
5. Add US6: Architecture → Deploy
6. Add Polish phase → Final Deploy

### Priority Order (If Sequential)

```
P1 Stories: US1 (Home) → US2 (Platform) → US4 (Dashboard) → US5 (Audit)
P2 Stories: US3 (About) → US6 (Architecture)
```

---

## Task Summary

| Phase | Tasks | Parallel Opportunities |
|-------|-------|----------------------|
| Phase 0: Setup & Research | T001-T007 (7 tasks) | 4 parallel |
| Phase 1: Foundation & Data Layer | T008-T023 (16 tasks) | 13 parallel |
| Phase 2a: US1 - Home | T024-T030 (7 tasks) | 5 parallel |
| Phase 2b: US2 - Platform | T031-T036 (6 tasks) | 4 parallel |
| Phase 2c: US3 - About | T037-T041 (5 tasks) | 3 parallel |
| Phase 3a: US4 - Dashboard | T042-T053 (12 tasks) | 8 parallel |
| Phase 3b: US5 - Audit | T054-T063 (10 tasks) | 5 parallel |
| Phase 3c: US6 - Architecture | T064-T070 (7 tasks) | 4 parallel |
| Phase 4: Polish & Quality | T071-T081 (11 tasks) | 5 parallel |
| Phase 5: Deployment | T082-T084 (3 tasks) | 0 parallel |
| Optional Enhancements | T085-T088 (4 tasks) | 4 parallel |
| **Total** | **88 tasks** | ~55 parallelizable |

---

## Notes

- [P] tasks = different files, no dependencies on incomplete tasks
- [Story] label maps task to specific user story
- Each user story should be independently completable and testable
- All audit data must be driven from JSON files (FR-030, FR-031)
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies
