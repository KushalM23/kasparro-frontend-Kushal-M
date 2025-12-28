# Feature Specification: Kasparro Frontend - Marketing Website & Product Dashboard

**Feature Branch**: `001-kasparro-frontend-site`  
**Created**: December 28, 2025  
**Status**: Ready  
**Input**: Frontend engineering assignment for Kasparro - an AI-native SEO & Brand Intelligence platform for AI-first search era (ChatGPT, Gemini, Perplexity). Build two product surfaces: Public Marketing Website (/, /platform, /about) and Product Dashboard Mock (/app/dashboard, /app/audit, /app/architecture).

---

## Overview

Kasparro is an AI-native SEO & Brand Intelligence platform for the AI-first search era. This assignment evaluates the ability to translate a complex, data-heavy product architecture into a clear, scalable frontend system.

### Evaluation Criteria
- **System thinking** over page-by-page development
- **Clear component boundaries** and modular architecture
- **Structured data modeling** and presentation
- **Communicating a complex AI product** through intuitive UI

### Technology Stack (Strict Requirements)
| Required | Allowed/Encouraged | Not Allowed |
|----------|-------------------|-------------|
| Next.js (App Router) | shadcn/ui | Page-level monoliths |
| TypeScript | Framer Motion (subtle/purposeful) | UI kits without customization |
| Tailwind CSS | Zustand or React Context | Static HTML-only pages |
| Modular component architecture | Mocked JSON data | Animation-heavy without UX purpose |

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - First-Time Visitor Discovers Kasparro Value Proposition (Priority: P1)

A first-time visitor lands on the Kasparro home page and needs to understand what Kasparro does within 10 seconds. They should immediately grasp that Kasparro is an AI-native SEO platform designed for the new era of AI-first search engines like ChatGPT, Gemini, and Perplexity.

**Why this priority**: The home page is the primary entry point and must instantly communicate value to convert visitors into interested prospects.

**Independent Test**: Load the home page and verify a new user understands the core value proposition within 10 seconds through headline, subheadline, and visual elements.

**Acceptance Scenarios**:

1. **Given** a visitor lands on the home page, **When** they view the hero section, **Then** they see a clear value proposition explaining AI-native SEO & Brand Intelligence
2. **Given** a visitor is on the home page, **When** they scroll past the hero, **Then** they see an explanation of why AI-SEO differs from traditional SEO
3. **Given** a visitor is on the home page, **When** they explore further, **Then** they see a core modules overview section showing the 7 audit modules
4. **Given** a visitor is on the home page, **When** they view the pipeline section, **Then** they see how Kasparro works (pipeline view: Input → Processing → Output)
5. **Given** a visitor is on the home page, **When** they are ready to take action, **Then** they see a CTA to "Run AI-SEO Audit" that routes to /app/audit
6. **Given** a visitor is on the home page, **When** they scroll to the bottom, **Then** they see a footer with navigation and company information

---

### User Story 2 - Prospect Explores Platform Capabilities (Priority: P1)

A prospect who understood the value proposition from the home page navigates to the /platform page to learn how Kasparro works technically. This page bridges marketing and product, acting as a product explainer rather than a sales page.

**Why this priority**: The platform page is critical for conversion as it educates prospects on specific capabilities, differentiating Kasparro from traditional SEO tools.

**Independent Test**: Navigate to /platform and verify the audit pipeline flow, data consumption, and output descriptions are clearly presented.

**Acceptance Scenarios**:

1. **Given** a visitor is on the /platform page, **When** they view the content, **Then** they see an audit pipeline flow diagram (Input → Modules → Output)
2. **Given** a visitor is on the /platform page, **When** they explore data inputs, **Then** they understand what data Kasparro consumes (brand data, web presence, AI search results)
3. **Given** a visitor is on the /platform page, **When** they review outputs, **Then** they understand what brands receive (scores, insights, recommendations)
4. **Given** a visitor is on the /platform page, **When** they compare approaches, **Then** they understand how Kasparro differs from traditional SEO tools

---

### User Story 3 - Prospect Learns About the Team (Priority: P2)

A prospect who is considering Kasparro wants to establish founder-engineer credibility. They navigate to /about to learn about the mission, product philosophy, and vision for AI-first search.

**Why this priority**: Trust and credibility are essential for B2B decisions but secondary to understanding the product itself.

**Independent Test**: Navigate to /about and verify mission statement, product philosophy, and vision are clearly presented.

**Acceptance Scenarios**:

1. **Given** a visitor is on the /about page, **When** they view the mission section, **Then** they understand Kasparro's core mission
2. **Given** a visitor is on the /about page, **When** they read product philosophy, **Then** they understand the design principles and approach
3. **Given** a visitor is on the /about page, **When** they review the vision, **Then** they understand Kasparro's vision for AI-first search

---

### User Story 4 - User Views Brand Dashboard Snapshot (Priority: P1)

A user (assumed logged in, no auth required) accesses /app/dashboard to see a high-level brand snapshot. They want to quickly understand their brand's performance in AI-first search at a glance.

**Why this priority**: The dashboard is the primary interface for users and must demonstrate concrete, data-driven value with key metrics prominently displayed.

**Independent Test**: Navigate to /app/dashboard and verify brand selector, snapshot cards with specific metrics, and last audit timestamp are displayed.

**Acceptance Scenarios**:

1. **Given** a user is on /app/dashboard, **When** they view the page header, **Then** they see a brand selector (mocked with selectable options)
2. **Given** a user is on /app/dashboard, **When** they view snapshot cards, **Then** they see AI Visibility Score prominently displayed
3. **Given** a user is on /app/dashboard, **When** they view snapshot cards, **Then** they see Trust / E-E-A-T Score displayed
4. **Given** a user is on /app/dashboard, **When** they view snapshot cards, **Then** they see Non-Branded Keyword Coverage metric
5. **Given** a user is on /app/dashboard, **When** they view the timestamp, **Then** they see when the last audit was performed
6. **Given** a user selects a different brand, **When** the selection changes, **Then** all dashboard metrics update to reflect the selected brand's data

---

### User Story 5 - User Reviews Detailed Audit Results by Module (Priority: P1)

A user accesses /app/audit to review detailed audit results. This is the core product screen with a two-panel layout: left sidebar listing 7 audit modules and main panel showing selected module details.

**Why this priority**: Detailed audit results are the core value proposition and must be the most polished, data-driven experience in the product.

**Independent Test**: Navigate to /app/audit, verify two-panel layout, module selection, and that each module displays score, insights, issues, and recommendations from structured JSON data.

**Acceptance Scenarios**:

1. **Given** a user is on /app/audit, **When** they view the page, **Then** they see a left sidebar listing all 7 audit modules
2. **Given** a user is on /app/audit, **When** they select a module from the sidebar, **Then** the main panel updates to show that module's details
3. **Given** a user has selected a module, **When** they view the main panel, **Then** they see the module's score prominently displayed
4. **Given** a user has selected a module, **When** they review key insights, **Then** they see findings extracted from the audit
5. **Given** a user has selected a module, **When** they review issues/flags, **Then** they see problems or areas needing attention
6. **Given** a user has selected a module, **When** they view recommendations, **Then** they see actionable textual suggestions to improve
7. **Given** the audit data, **When** the page renders, **Then** all content is driven from structured mocked JSON data (no hard-coded JSX content)

---

### User Story 6 - User Understands System Architecture (Priority: P2)

A user or technical stakeholder accesses /app/architecture to view a frontend representation of the system architecture. This demonstrates system understanding and shows how components connect.

**Why this priority**: Architecture documentation provides transparency for technical users but is supplementary to the core product experience.

**Independent Test**: Navigate to /app/architecture and verify visual or structured representation of InputAssembler, ContextPack, Audit modules, and Output surfaces.

**Acceptance Scenarios**:

1. **Given** a user is on /app/architecture, **When** they view the page, **Then** they see a representation of the InputAssembler component
2. **Given** a user is on /app/architecture, **When** they view the page, **Then** they see a representation of the ContextPack component
3. **Given** a user is on /app/architecture, **When** they view the page, **Then** they see how the 7 audit modules fit into the system
4. **Given** a user is on /app/architecture, **When** they view the page, **Then** they see the output surfaces and how data flows to them
5. **Given** the architecture diagram, **When** a user reviews it, **Then** system thinking and clarity are prioritized over pixel-perfect precision

---

### Edge Cases

- **404 Handling**: User accessing non-existent route sees a styled 404 page with clear navigation back to home
- **Slow Network**: Pages display loading states/skeletons during data fetching or transitions
- **Direct /app Access**: Mock data is clearly presented; demo context is obvious
- **Responsive Design**: All pages provide optimal experience across desktop, tablet, and mobile
- **Brand Switching**: Dashboard state updates predictably when brand selection changes
- **Module Switching**: Audit page updates cleanly when different modules are selected
- **Empty States**: When no data exists for a metric, display thoughtful empty state UI

---

## Requirements *(mandatory)*

### Functional Requirements

#### Part A: Public Marketing Website

**Home Page (/)**
- **FR-001**: Home page MUST explain what Kasparro does in under 10 seconds with clear value proposition
- **FR-002**: Home page MUST include a Hero section with headline and subheadline
- **FR-003**: Home page MUST include a section explaining why AI-SEO differs from traditional SEO
- **FR-004**: Home page MUST include a Core Modules Overview section displaying all 7 audit modules
- **FR-005**: Home page MUST include a "How Kasparro Works" section showing the pipeline view
- **FR-006**: Home page MUST include a CTA button "Run AI-SEO Audit" that routes to a mocked flow
- **FR-007**: Home page MUST include a footer with navigation and company info

**Platform Page (/platform)**
- **FR-008**: Platform page MUST act as a product explainer (not a sales page)
- **FR-009**: Platform page MUST show the audit pipeline flow (Input → Modules → Output)
- **FR-010**: Platform page MUST explain what data Kasparro consumes
- **FR-011**: Platform page MUST explain what outputs brands receive
- **FR-012**: Platform page MUST explain how Kasparro differs from traditional SEO tools

**About Page (/about)**
- **FR-013**: About page MUST establish founder-engineer credibility
- **FR-014**: About page MUST include company mission statement
- **FR-015**: About page MUST include product philosophy section
- **FR-016**: About page MUST include vision for AI-first search

#### Part B: Product Dashboard (Route namespace: /app)

**Dashboard Page (/app/dashboard)**
- **FR-017**: Dashboard MUST display a brand selector (mocked with multiple brands)
- **FR-018**: Dashboard MUST display AI Visibility Score as a snapshot card
- **FR-019**: Dashboard MUST display Trust / E-E-A-T Score as a snapshot card
- **FR-020**: Dashboard MUST display Non-Branded Keyword Coverage as a snapshot card
- **FR-021**: Dashboard MUST display last audit timestamp
- **FR-022**: Dashboard metrics MUST update when a different brand is selected

**Audit Page (/app/audit) - Core Product Screen**
- **FR-023**: Audit page MUST have a two-panel layout: left sidebar + main panel
- **FR-024**: Left sidebar MUST list all 7 audit modules as selectable items
- **FR-025**: Main panel MUST display details of the currently selected module
- **FR-026**: Each module view MUST display the module's Score
- **FR-027**: Each module view MUST display Key Insights
- **FR-028**: Each module view MUST display Issues / Flags identified
- **FR-029**: Each module view MUST display Recommendations (textual)
- **FR-030**: All audit data MUST be driven from structured mocked JSON data (`/audit-data/*.json`)
- **FR-031**: Hard-coded JSX content for audit data is NOT ALLOWED

**Architecture Page (/app/architecture)**
- **FR-032**: Architecture page MUST show a frontend representation of the system
- **FR-033**: Architecture page MUST represent InputAssembler component
- **FR-034**: Architecture page MUST represent ContextPack component
- **FR-035**: Architecture page MUST represent all 7 Audit Modules
- **FR-036**: Architecture page MUST represent Output Surfaces
- **FR-037**: Architecture representation can be visual or structured text-based
- **FR-038**: System thinking and clarity is prioritized over pixel-perfect precision

#### Cross-Cutting Requirements

- **FR-039**: All pages MUST include consistent navigation header
- **FR-040**: System MUST be responsive across desktop, tablet, and mobile viewports
- **FR-041**: System MUST display styled 404 page for non-existent routes
- **FR-042**: System MUST display loading states during data fetching or page transitions

### Engineering Requirements (Evaluated Strictly)

#### Component Architecture
- **ER-001**: Clear separation between Layout components, Feature components, and UI primitives
- **ER-002**: No massive monolithic JSX files
- **ER-003**: Modular, reusable component structure

#### Data Modeling
- **ER-004**: Typed TypeScript interfaces for ALL data structures
- **ER-005**: Consistent data schemas across the application
- **ER-006**: No ad-hoc object shapes; all data must be typed

#### State Management
- **ER-007**: Clean handling of selected brand state
- **ER-008**: Clean handling of selected audit module state
- **ER-009**: State flow must be predictable and easy to reason about
- **ER-010**: Use Zustand or React Context for state management

#### UX Quality
- **ER-011**: Clear information hierarchy on all pages
- **ER-012**: Readable presentation of dense data
- **ER-013**: Sensible spacing, typography, and contrast

#### Code Quality
- **ER-014**: Clear, organized folder structure
- **ER-015**: Consistent naming conventions
- **ER-016**: No obvious anti-patterns

### Key Entities

| Entity | Description |
|--------|-------------|
| **Brand** | The entity being audited; has overall health score, individual module scores, and metadata |
| **Audit Module** | One of 7 distinct analysis categories; each generates a score, insights, issues, and recommendations |
| **AI Visibility Score** | Primary metric showing brand's visibility in AI-powered search engines |
| **Trust / E-E-A-T Score** | Metric measuring Experience, Expertise, Authoritativeness, and Trustworthiness |
| **Non-Branded Keyword Coverage** | Metric showing brand's presence for non-branded search terms |
| **InputAssembler** | System component that gathers input data for audit processing |
| **ContextPack** | System component that packages context for module processing |
| **Score** | Numeric representation of performance in a specific module or overall |
| **Insight** | Key finding discovered during module analysis |
| **Issue/Flag** | Problem or area needing attention identified in audit |
| **Recommendation** | Actionable suggestion to improve scores |

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Visitors understand Kasparro's core value proposition within 10 seconds of landing on the home page
- **SC-002**: Visitors can navigate between all 6 pages (home, platform, about, dashboard, audit, architecture) with no more than 2 clicks from any page
- **SC-003**: All 7 audit modules are displayed in the left sidebar of /app/audit with clear labels
- **SC-004**: Selecting any audit module updates the main panel with that module's score, insights, issues, and recommendations
- **SC-005**: Dashboard displays all 4 required metrics: AI Visibility Score, Trust/E-E-A-T Score, Non-Branded Keyword Coverage, and Last Audit Timestamp
- **SC-006**: Brand selector on dashboard allows switching between at least 2 mocked brands with data updating accordingly
- **SC-007**: Architecture page clearly illustrates system components: InputAssembler, ContextPack, 7 Modules, and Output Surfaces
- **SC-008**: All pages render correctly across desktop (1920px), tablet (768px), and mobile (375px) viewports
- **SC-009**: Page load time is under 3 seconds on standard connections
- **SC-010**: Users can complete a full site walkthrough (all 6 pages) without encountering errors or broken navigation
- **SC-011**: All audit data is driven from JSON files (no hard-coded JSX audit content)
- **SC-012**: Component architecture shows clear separation (Layout / Feature / UI primitives)

### Deliverables

| Deliverable | Description |
|-------------|-------------|
| GitHub Repository | Complete source code with clear folder structure |
| README.md | Folder structure explanation, architectural decisions, tradeoffs made |
| Live Deployment | Deployed application (Vercel preferred) |
| Mocked Data | JSON files in `/audit-data/` directory with typed interfaces |

### Time Expectation

12–18 hours of focused work. Thoughtful scope and clarity preferred over rushed completeness.

---

## Optional Enhancements (Differentiators)

These are bonus features that can distinguish the implementation:

- **Dark / Light Mode**: Theme toggle with consistent styling
- **Micro-interactions**: Subtle animations for module switching in audit page
- **Clean Empty States**: Thoughtful UI when no data exists for a metric
- **Responsive Dashboard**: Optimized layout behavior across screen sizes
- **Loading Skeletons**: Thoughtful loading states during data fetching

---

## Design Decisions (Open-Ended)

The following are intentionally left to implementer judgment:

- Visual style and color scheme
- Copywriting and content tone
- Layout choices and spacing
- Level of animation (must be purposeful, not excessive)

All decisions should be justified in the README.

---

## Assumptions

- The 7 audit modules are defined as: (1) AI Visibility Audit, (2) E-E-A-T Analysis, (3) Content Quality Audit, (4) Technical AI Readiness, (5) Brand Mention Tracking, (6) Competitor Benchmarking, (7) Keyword Coverage Audit
- Mock data for dashboard and audit pages will use representative but fictional brand data with at least 2 brands, stored in `/public/audit-data/`
- Authentication and user accounts are out of scope; user is assumed to be logged in
- The system diagram on architecture page can be static visual or structured text-based representation
- No backend integration required; all data is mocked JSON in `/public/audit-data/`
- Marketing website and product dashboard share consistent branding and design language
- shadcn/ui components may be used but must be customized to fit the design
- Framer Motion animations should be subtle and purposeful only
