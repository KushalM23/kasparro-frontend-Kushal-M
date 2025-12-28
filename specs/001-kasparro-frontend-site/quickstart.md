# Quickstart: Kasparro Frontend

**Feature Branch**: `001-kasparro-frontend-site`  
**Created**: December 28, 2025  
**Phase**: Phase 1 Output

---

## Prerequisites

Before starting development, ensure you have the following installed:

| Tool | Version | Check Command |
|------|---------|---------------|
| Node.js | 18.x or 20.x | `node --version` |
| npm | 9.x+ | `npm --version` |
| Git | 2.x+ | `git --version` |

---

## Quick Setup

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/[your-username]/kasparro-frontend.git
cd kasparro-frontend

# Install dependencies
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Initialization (If Starting Fresh)

If you're setting up the project from scratch, follow these steps:

### Step 1: Create Next.js Project

```bash
npx create-next-app@latest kasparro-frontend --typescript --tailwind --eslint --app --src-dir
cd kasparro-frontend
```

Select the following options:
- ✅ TypeScript
- ✅ ESLint
- ✅ Tailwind CSS
- ✅ `src/` directory
- ✅ App Router
- ❌ Turbopack (optional)
- ✅ Customize default import alias: `@/*`

### Step 2: Initialize shadcn/ui

```bash
npx shadcn@latest init
```

Select:
- Style: Default
- Base color: Slate (or your preference)
- CSS variables: Yes

### Step 3: Install Required shadcn/ui Components

```bash
npx shadcn@latest add button card select badge skeleton
```

### Step 4: Install Additional Dependencies

```bash
# State management
npm install zustand

# Animations (optional but encouraged)
npm install framer-motion

# Icons
npm install lucide-react
```

### Step 5: Create Folder Structure

```bash
# Create component directories
mkdir -p src/components/layouts
mkdir -p src/components/features/home
mkdir -p src/components/features/platform
mkdir -p src/components/features/about
mkdir -p src/components/features/dashboard
mkdir -p src/components/features/audit
mkdir -p src/components/features/architecture

# Create other directories
mkdir -p src/stores
mkdir -p src/types
mkdir -p src/lib
mkdir -p src/data

# Create public data directories
mkdir -p public/audit-data/brand-1
mkdir -p public/audit-data/brand-2
mkdir -p public/images
```

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev | `npm run dev` | Start development server on port 3000 |
| Build | `npm run build` | Create production build |
| Start | `npm start` | Start production server |
| Lint | `npm run lint` | Run ESLint |
| Type Check | `npx tsc --noEmit` | Check TypeScript types |

---

## Development Workflow

### Starting a New Feature

1. **Check the tasks.md** - Find your assigned task (e.g., T024)
2. **Read the component requirements** - Check spec.md for acceptance criteria
3. **Create the component file** - Follow the path in tasks.md
4. **Implement the component** - Use TypeScript interfaces from data-model.md
5. **Test locally** - Verify at 375px, 768px, and 1920px
6. **Commit** - Use descriptive commit messages

### Component Development Pattern

```typescript
// Example: src/components/features/home/HeroSection.tsx
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="py-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        AI-Native SEO & Brand Intelligence
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        For the AI-first search era
      </p>
      <Button asChild size="lg">
        <Link href="/app/audit">Run AI-SEO Audit</Link>
      </Button>
    </section>
  );
}
```

---

## Environment Configuration

### Development Environment

Create `.env.local` (optional - no secrets needed for mocked data):

```env
# No environment variables required for this project
# All data is mocked in /public/audit-data/
```

### Production Environment (Vercel)

No environment variables required. The application uses static JSON data.

---

## Testing Breakpoints

Use browser DevTools to test responsive design:

| Breakpoint | Width | Test Focus |
|------------|-------|------------|
| Mobile | 375px | Stacked layouts, touch targets |
| Tablet | 768px | Side-by-side layouts begin |
| Desktop | 1920px | Full layouts, max-width containers |

### Quick Responsive Test

1. Open Chrome DevTools (F12)
2. Click device toolbar icon (or Ctrl+Shift+M)
3. Select "Responsive" mode
4. Enter exact widths: 375, 768, 1920

---

## Folder Structure Reference

```
kasparro-frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page (/)
│   │   ├── platform/           # /platform route
│   │   ├── about/              # /about route
│   │   ├── app/                # /app/* routes (dashboard)
│   │   │   ├── layout.tsx      # Dashboard layout
│   │   │   ├── dashboard/
│   │   │   ├── audit/
│   │   │   └── architecture/
│   │   └── not-found.tsx       # 404 page
│   ├── components/
│   │   ├── layouts/            # Header, Footer, DashboardSidebar
│   │   ├── features/           # Page-specific components
│   │   └── ui/                 # shadcn/ui components
│   ├── stores/                 # Zustand stores
│   ├── types/                  # TypeScript interfaces
│   ├── lib/                    # Utilities
│   └── data/                   # Static data (module definitions)
├── public/
│   ├── audit-data/             # Mocked JSON data
│   └── images/                 # Static assets
├── specs/                      # Feature specifications
└── package.json
```

---

## Troubleshooting

### Common Issues

**Port 3000 already in use**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
```

**TypeScript errors on import**
```bash
# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

**shadcn/ui component not found**
```bash
# Reinstall the component
npx shadcn@latest add [component-name]
```

**Tailwind classes not applying**
- Check that the file extension is `.tsx` or `.jsx`
- Verify `tailwind.config.ts` includes the correct content paths

---

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

```bash
# Or deploy via CLI
npm install -g vercel
vercel
```

### Verify Deployment

After deployment, test:
- [ ] All 6 routes load correctly
- [ ] No console errors
- [ ] Page load time < 3 seconds
- [ ] Responsive design works

---

## Next Steps

1. ✅ Complete environment setup
2. 📋 Review [tasks.md](./tasks.md) for implementation order
3. 📖 Reference [data-model.md](./data-model.md) for TypeScript interfaces
4. 🔬 Reference [research.md](./research.md) for technology patterns
