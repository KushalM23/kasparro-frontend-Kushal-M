Kasparro – Frontend Engineering
Assignment (V1)
Context
Kasparro is building an AI-native SEO & Brand Intelligence platform for the AI-first search era
(ChatGPT, Gemini, Perplexity, etc.).
This assignment evaluates your ability to translate a complex, data-heavy product
architecture into a clear, scalable frontend system.
This is not a landing-page clone.
It is a product-thinking + frontend-engineering assignment, aligned in rigor with our
Backend and Applied AI / Agentic assignments.
We are explicitly evaluating your ability to:
● Think in systems, not pages
● Design clear component boundaries
● Model and present structured data
● Communicate a complex AI product through UI
Objective
Build a frontend that represents two product surfaces:
1. Kasparro Public Website — Marketing + Product Narrative
2. Kasparro Product Dashboard — Authenticated shell using mocked data
You will be evaluated on:
● Frontend system design
● Component architecture
● Data modeling & state handling
● UX clarity for a data-dense AI product
● Engineering discipline
Tech Constraints (Strict)
Required
● Next.js (App Router)
● TypeScript
● Tailwind CSS
● Modular, component-based architecture
Allowed / Encouraged
● shadcn/ui
● Framer Motion (subtle and purposeful only)
● Zustand or React Context
● Mocked JSON data (no backend required)
Not Allowed
● Page-level monoliths
● UI kits without customization
● Static HTML-only pages
● Animation-heavy work without UX purpose
Part A — Public Website (V1)
Routes to Build
1. / — Home
Goal: Explain what Kasparro does in under 10 seconds.
Must include:
● Clear value proposition
● High-level overview of Kasparro’s AI-SEO platform
● CTA: Run AI-SEO Audit (can route to a mocked flow)
Suggested sections:
● Hero
● Why AI-SEO is different from traditional SEO
● Core modules overview (7 modules)
● How Kasparro works (pipeline view)
● Footer
2. /platform — Product Overview
Goal: Bridge marketing → product.
Include:
● Audit pipeline flow (Input → Modules → Output)
● What data Kasparro consumes
● What outputs brands receive
● How Kasparro differs from traditional SEO tools
This page should feel like a product explainer, not a sales page.
3. /about
Goal: Establish founder-engineer credibility.
Include:
● Mission
● Product philosophy
● Vision for AI-first search
Part B — Product Dashboard (V1 – Mocked)
Route namespace: /app
No authentication is required. Assume the user is logged in.
1. /app/dashboard
Goal: High-level brand snapshot.
Include:
● Brand selector (mocked)
● Snapshot cards:
○ AI Visibility Score
○ Trust / EEAT Score
○ Non-Branded Keyword Coverage
○ Last audit timestamp
2. /app/audit
Core product screen.
Layout:
● Left sidebar: list of 7 audit modules
● Main panel: details of selected module
Each module view must show:
● Score
● Key insights
● Issues / flags
● Recommendations (textual)
All data must be driven from structured mocked data, for example:
/audit-data/*.json
Hard-coded JSX content will be penalized.
3. /app/architecture
Goal: Demonstrate system understanding.
Show a frontend representation of:
● InputAssembler
● ContextPack
● Audit modules
● Output surfaces
This can be visual or structured text-based.
Precision is less important than clarity of system thinking.
Engineering Expectations (Evaluated Strictly)
1. Component Architecture
● Clear separation between:
○ Layout components
○ Feature components
○ UI primitives
● No massive JSX files
2. Data Modeling
● Typed interfaces for all data
● Consistent schemas
● No ad-hoc object shapes
3. State Management
Clean handling of:
● Selected brand
● Selected audit module
State flow should be predictable and easy to reason about.
4. UX Quality
● Clear information hierarchy
● Readable presentation of dense data
● Sensible spacing, typography, and contrast
5. Code Quality
● Clear folder structure
● Good naming discipline
● Reusable components
● No obvious anti-patterns
Deliverables
Submit:
● GitHub repository
● README.md explaining:
○ Folder structure
○ Architectural decisions
○ Tradeoffs made
● Live deployment (Vercel preferred)
Time Expectation
12–18 hours of focused work.
We prefer thoughtful scope and clarity over rushed completeness.
Open-Ended by Design
The following are intentionally left to your judgment:
● Visual style
● Copywriting
● Layout choices
● Level of animation
You are expected to make reasonable product decisions and justify them in the README.
Optional Bonus (Differentiators)
● Dark / light mode
● Micro-interactions for module switching
● Clean empty states
● Responsive dashboard behavior
● Thoughtful loading skeletons
Submission Instructions
Submit:
● GitHub repository link
● Live deployment URL
● Any assumptions or shortcuts taken (in README)
Final Note
We care less about pixel perfection and more about:
● How you think
● How you structure frontend systems
● How clearly you communicate complex products through UI