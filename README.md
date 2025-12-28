# Kasparro Frontend - AI-Native SEO Platform

A modern, AI-first SEO analytics platform built with Next.js 14, TypeScript, React 18, and Tailwind CSS. Kasparro helps brands understand how AI models perceive their digital presence.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Visit `http://localhost:3000` to see the application.

## 📁 Project Structure

```
kasparro-frontend/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout with Header/Footer
│   │   ├── page.tsx                  # Home page
│   │   ├── not-found.tsx             # 404 page
│   │   ├── platform/page.tsx         # Platform explanation page
│   │   ├── about/page.tsx            # About page
│   │   └── app/                      # Dashboard routes (protected layout)
│   │       ├── layout.tsx            # Dashboard layout with sidebar
│   │       ├── dashboard/page.tsx    # Main dashboard
│   │       ├── audit/page.tsx        # Audit results with modules
│   │       └── architecture/page.tsx # System architecture diagram
│   │
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── select.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── metric-skeleton.tsx   # Dashboard metric skeleton
│   │   │   └── module-skeleton.tsx   # Audit module skeleton
│   │   │
│   │   ├── layouts/                  # Layout components
│   │   │   ├── Header.tsx            # Marketing site header
│   │   │   ├── Footer.tsx            # Marketing site footer
│   │   │   ├── DashboardSidebar.tsx  # Dashboard navigation
│   │   │   └── DashboardHeader.tsx   # Dashboard header with brand selector
│   │   │
│   │   └── features/                 # Feature-specific components
│   │       ├── home/                 # Home page sections
│   │       │   ├── HeroSection.tsx
│   │       │   ├── AiSeoSection.tsx
│   │       │   ├── ModulesOverview.tsx
│   │       │   ├── PipelineView.tsx
│   │       │   └── CtaSection.tsx
│   │       ├── platform/             # Platform page sections
│   │       ├── about/                # About page sections
│   │       ├── dashboard/            # Dashboard components
│   │       ├── audit/                # Audit components
│   │       └── architecture/         # Architecture diagram components
│   │
│   ├── stores/                       # Zustand stores
│   │   ├── brandStore.ts             # Brand selection state
│   │   └── auditStore.ts             # Audit module selection state
│   │
│   ├── types/                        # TypeScript interfaces
│   │   ├── brand.ts                  # Brand type definitions
│   │   ├── metrics.ts                # Dashboard metrics types
│   │   ├── audit.ts                  # Audit module types
│   │   └── architecture.ts           # Architecture types
│   │
│   ├── lib/
│   │   ├── utils.ts                  # Utility functions (cn helper)
│   │   └── constants.ts              # App constants and routes
│   │
│   ├── data/
│   │   └── modules.ts                # Audit module definitions
│   │
│   └── styles/
│       └── globals.css               # Global styles with Tailwind
│
├── public/
│   ├── audit-data/                   # Mocked audit data (JSON)
│   │   ├── brands.json               # List of brands
│   │   ├── brand-1/
│   │   │   ├── dashboard.json
│   │   │   └── audit-modules.json
│   │   └── brand-2/
│   │       ├── dashboard.json
│   │       └── audit-modules.json
│   └── images/                       # Static images
│
├── specs/
│   └── 001-kasparro-frontend-site/   # Project specification
│       ├── spec.md
│       ├── plan.md
│       ├── data-model.md
│       ├── tasks.md
│       └── checklists/
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🏗️ Architecture

### Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript 5.x
- **UI Framework**: React 18.x
- **Styling**: Tailwind CSS v3 + CSS Variables
- **Components**: shadcn/ui (Radix UI)
- **State Management**: Zustand
- **Data**: Mocked JSON files in `/public/audit-data/`
- **Code Quality**: ESLint + Prettier

### Design Philosophy

1. **Component-Based**: Modular, reusable components following React best practices
2. **Type-Safe**: Full TypeScript for compile-time type checking
3. **Performance**: Static site generation (SSG) for marketing pages, Client-side rendering for dashboards
4. **Accessibility**: Semantic HTML, ARIA labels, Radix UI primitives
5. **Responsive**: Mobile-first design with Tailwind breakpoints (375px, 768px, 1920px)

### Data Flow

```
┌─────────────────────────────────────────────────────────┐
│                   Application Layers                     │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  Pages (App Router)                                      │
│  ├── / (Marketing Home)                                 │
│  ├── /platform (Platform Explanation)                   │
│  ├── /about (About Company)                             │
│  └── /app/* (Dashboard Routes)                          │
│                                                           │
│         ↓                                                │
│                                                           │
│  Feature Components (Smart Components)                   │
│  ├── Dashboard Components (manage state via stores)     │
│  ├── Audit Components (read from stores)               │
│  └── Marketing Components (stateless)                  │
│                                                           │
│         ↓                                                │
│                                                           │
│  UI Components (Dumb Components)                         │
│  ├── Card, Button, Select, Badge, Skeleton             │
│  └── Metric/Module Skeletons                           │
│                                                           │
│         ↓                                                │
│                                                           │
│  State Management (Zustand Stores)                       │
│  ├── brandStore (selected brand + brands list)         │
│  └── auditStore (selected audit module + modules)      │
│                                                           │
│         ↓                                                │
│                                                           │
│  Data Sources                                            │
│  └── /public/audit-data/ (JSON files mocking API)      │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

## 🎯 Key Features

### Marketing Website
- **Home Page**: Hero section, AI-SEO comparison, 7 modules overview, pipeline visualization
- **Platform Page**: How Kasparro works, data inputs, outputs, comparison with traditional SEO
- **About Page**: Mission, philosophy, vision statements

### Product Dashboard
- **Dashboard**: 4 key metrics (AI Visibility, E-E-A-T, Keyword Coverage, Last Audit)
- **Audit Results**: Detailed view of 7 audit modules with scores, insights, issues, recommendations
- **Architecture**: Visual diagram of the system pipeline

### Dashboard Features
- **Brand Selector**: Switch between brands with automatic metric refresh
- **Module Selection**: Click modules to view detailed audit results
- **Data-Driven**: All content loaded from JSON files
- **Responsive**: Sidebar collapses on mobile, stacked layout on small screens

## 📊 Audit Modules (7 Total)

1. **AI Visibility** - How visible is your content to AI models?
2. **E-E-A-T Analysis** - Experience, Expertise, Authoritativeness, Trustworthiness
3. **Content Quality** - Is your content comprehensive and well-structured?
4. **Technical AI Readiness** - Can AI models crawl and parse your site?
5. **Brand Mentions** - How often is your brand mentioned across the web?
6. **Competitor Benchmarking** - How do you compare to competitors?
7. **Keyword Coverage** - Do you cover target keywords comprehensively?

## 🎨 Design System

### Color Palette
- **Primary**: Blue (for interactive elements)
- **Muted**: Gray (for secondary text, backgrounds)
- **Success**: Green (for positive insights)
- **Warning**: Yellow (for medium-severity issues)
- **Danger**: Red (for high-severity issues)

### Responsive Breakpoints
- **Mobile**: 375px (sm)
- **Tablet**: 768px (md)
- **Desktop**: 1024px (lg)
- **Large Desktop**: 1920px (2xl)

### Typography
- **Headings**: Bold, larger sizes for hierarchy
- **Body**: Regular weight, readable line-height
- **Labels**: Small, uppercase for form labels
- **Code**: Monospace for technical content

## 🔄 Routing

### Marketing Routes
```
GET  /              → Home page
GET  /platform      → Platform explanation
GET  /about         → About page
```

### Dashboard Routes (App Layout)
```
GET  /app/dashboard    → Main dashboard with metrics
GET  /app/audit        → Audit results with module selection
GET  /app/architecture → System architecture diagram
```

### Error Handling
```
GET  /404 or any unknown route → Not found page
```

## 📈 Performance

- **Static Site Generation**: Marketing pages pre-rendered at build time
- **Server-Side Rendering**: Dashboard pages use dynamic rendering
- **Code Splitting**: Each route chunk is optimized separately
- **Image Optimization**: Next.js Image component for responsive images
- **CSS Optimization**: Tailwind purges unused styles in production

## 🧪 Testing & Validation

### Responsive Design Testing
- Tested at 375px (mobile)
- Tested at 768px (tablet)
- Tested at 1920px (desktop)

### Browser Compatibility
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

The project is optimized for Vercel deployment:

```bash
# Connect your GitHub repo to Vercel
# Vercel will automatically:
# 1. Detect Next.js project
# 2. Run `npm run build`
# 3. Deploy static assets to CDN
# 4. Start serverless functions for dynamic routes

# Manual deployment:
npm run build
vercel deploy --prod
```

### Environment Variables
None required for this demo (data is mocked locally).

## 🔧 Development Workflow

### Code Quality
```bash
# Format code with Prettier
npm run format

# Lint code with ESLint
npm run lint

# Check for TypeScript errors
npm run type-check
```

### Build & Deploy
```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run start
```

## 📚 Documentation

### Key Architectural Decisions

1. **Zustand over Context API**: Zustand is lighter and simpler for global state management
2. **JSON Files over API**: Demo uses local JSON to avoid backend dependency
3. **shadcn/ui over Custom Components**: Reusable, accessible Radix UI components
4. **Tailwind CSS over CSS Modules**: Utility-first CSS for rapid development
5. **Static Pages for Marketing**: SEO optimization and performance for marketing content

### Tradeoffs Made

1. **No Authentication**: This is a demo. Real app would need auth middleware
2. **No Database**: Uses mocked JSON data. Production would query API/database
3. **No Real Calculations**: Module scores are mocked. Real app would run AI analysis
4. **No Analytics**: No tracking implemented (would add in production)
5. **No Internationalization**: Currently English-only

## 🤝 Contributing

1. Follow TypeScript best practices
2. Use Prettier for consistent formatting
3. Write semantic HTML
4. Test responsive design at breakpoints
5. Keep components focused and reusable

## 📝 License

Proprietary - Kasparro Platform

## 👥 Team

Built by engineering team for AI-native SEO platform.
