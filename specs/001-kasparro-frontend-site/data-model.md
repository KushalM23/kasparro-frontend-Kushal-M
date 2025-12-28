# Data Model: Kasparro Frontend

**Feature Branch**: `001-kasparro-frontend-site`  
**Created**: December 28, 2025  
**Phase**: Phase 1 Output

---

## Overview

This document defines all TypeScript interfaces for the Kasparro frontend application. These interfaces ensure type safety across the application and define the contract between JSON data files and React components.

---

## Core Entities

### Brand

Represents a brand entity being audited by the platform.

```typescript
// src/types/brand.ts

export interface Brand {
  /** Unique identifier for the brand */
  id: string;
  
  /** Display name of the brand */
  name: string;
  
  /** Optional URL to brand logo */
  logoUrl?: string;
  
  /** ISO date string of last audit */
  lastAuditDate: string;
  
  /** Overall health score (0-100) */
  overallScore: number;
}

export interface BrandsData {
  brands: Brand[];
}
```

---

### Dashboard Metrics

Metrics displayed on the dashboard overview page.

```typescript
// src/types/metrics.ts

export interface DashboardMetrics {
  /** Reference to the brand these metrics belong to */
  brandId: string;
  
  /** AI Visibility Score (0-100) */
  aiVisibilityScore: number;
  
  /** E-E-A-T Score (0-100) - Experience, Expertise, Authoritativeness, Trustworthiness */
  eeatScore: number;
  
  /** Non-branded keyword coverage percentage (0-100) */
  keywordCoverage: number;
  
  /** ISO timestamp of last audit completion */
  lastAuditTimestamp: string;
}
```

---

### Audit Module

One of the 7 audit modules with scores, insights, issues, and recommendations.

```typescript
// src/types/audit.ts

export interface AuditModule {
  /** Unique identifier for the module */
  id: string;
  
  /** Display name of the module */
  name: string;
  
  /** Brief description of what this module analyzes */
  description: string;
  
  /** Module score (0-100) */
  score: number;
  
  /** Key insights discovered during analysis */
  insights: Insight[];
  
  /** Issues or flags identified */
  issues: Issue[];
  
  /** Actionable recommendations */
  recommendations: Recommendation[];
}

export interface Insight {
  /** Unique identifier */
  id: string;
  
  /** Short title of the insight */
  title: string;
  
  /** Detailed description */
  description: string;
  
  /** Categorization of insight sentiment */
  type: 'positive' | 'neutral' | 'negative';
}

export interface Issue {
  /** Unique identifier */
  id: string;
  
  /** Short title of the issue */
  title: string;
  
  /** Detailed description of the problem */
  description: string;
  
  /** Severity level for prioritization */
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface Recommendation {
  /** Unique identifier */
  id: string;
  
  /** Short title of the recommendation */
  title: string;
  
  /** Detailed description of the action to take */
  description: string;
  
  /** Priority level for implementation */
  priority: 'low' | 'medium' | 'high';
  
  /** Expected impact of implementing this recommendation */
  impact: string;
}

export interface AuditModulesData {
  brandId: string;
  modules: AuditModule[];
}
```

---

### Module Definition

Static definition of the 7 audit modules (used for navigation/display).

```typescript
// src/data/modules.ts

export interface ModuleDefinition {
  /** Unique identifier matching AuditModule.id */
  id: string;
  
  /** Display name */
  name: string;
  
  /** Brief description */
  description: string;
  
  /** Lucide icon name for display */
  icon: string;
}

export const AUDIT_MODULES: ModuleDefinition[] = [
  {
    id: 'ai-visibility',
    name: 'AI Visibility Audit',
    description: 'How visible is the brand in AI-powered search results',
    icon: 'Eye',
  },
  {
    id: 'eeat-analysis',
    name: 'E-E-A-T Analysis',
    description: 'Experience, Expertise, Authoritativeness, Trustworthiness evaluation',
    icon: 'Shield',
  },
  {
    id: 'content-quality',
    name: 'Content Quality Audit',
    description: 'Quality and relevance of content for AI understanding',
    icon: 'FileText',
  },
  {
    id: 'technical-readiness',
    name: 'Technical AI Readiness',
    description: 'Technical factors affecting AI crawlability',
    icon: 'Settings',
  },
  {
    id: 'brand-mentions',
    name: 'Brand Mention Tracking',
    description: 'How the brand is mentioned across AI platforms',
    icon: 'AtSign',
  },
  {
    id: 'competitor-benchmark',
    name: 'Competitor Benchmarking',
    description: 'Comparative analysis against competitors',
    icon: 'TrendingUp',
  },
  {
    id: 'keyword-coverage',
    name: 'Keyword Coverage Audit',
    description: 'Non-branded keyword visibility and opportunities',
    icon: 'Search',
  },
];
```

---

### Architecture Components

Types for the system architecture visualization.

```typescript
// src/types/architecture.ts

export interface ArchitectureNode {
  /** Unique identifier for the node */
  id: string;
  
  /** Display label */
  label: string;
  
  /** Node type for styling */
  type: 'input' | 'processor' | 'module' | 'output';
  
  /** Brief description of the component's purpose */
  description: string;
}

export interface ArchitectureConnection {
  /** Source node id */
  from: string;
  
  /** Target node id */
  to: string;
  
  /** Optional label for the connection */
  label?: string;
}

export interface ArchitectureDiagram {
  nodes: ArchitectureNode[];
  connections: ArchitectureConnection[];
}

// Predefined architecture components
export const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: 'input-assembler',
    label: 'InputAssembler',
    type: 'input',
    description: 'Gathers input data for audit processing',
  },
  {
    id: 'context-pack',
    label: 'ContextPack',
    type: 'processor',
    description: 'Packages context for module processing',
  },
  // ... 7 audit modules
  {
    id: 'output-dashboard',
    label: 'Dashboard Output',
    type: 'output',
    description: 'Visual dashboard with scores and metrics',
  },
  {
    id: 'output-reports',
    label: 'Reports Output',
    type: 'output',
    description: 'Detailed audit reports and recommendations',
  },
];
```

---

## Store Types

### Brand Store

```typescript
// src/stores/brandStore.ts

import { create } from 'zustand';
import { Brand } from '@/types/brand';

interface BrandStore {
  /** List of all available brands */
  brands: Brand[];
  
  /** Currently selected brand ID */
  selectedBrandId: string | null;
  
  /** Set the list of brands */
  setBrands: (brands: Brand[]) => void;
  
  /** Select a brand by ID */
  setSelectedBrand: (brandId: string) => void;
  
  /** Get the currently selected brand object */
  getSelectedBrand: () => Brand | undefined;
}
```

### Audit Store

```typescript
// src/stores/auditStore.ts

import { create } from 'zustand';

interface AuditStore {
  /** Currently selected module ID */
  selectedModuleId: string | null;
  
  /** Select a module by ID */
  setSelectedModule: (moduleId: string) => void;
}
```

---

## JSON Data Schema

### brands.json

```json
{
  "brands": [
    {
      "id": "brand-1",
      "name": "Acme Corporation",
      "logoUrl": "/images/brands/acme.svg",
      "lastAuditDate": "2025-12-27T10:30:00Z",
      "overallScore": 72
    },
    {
      "id": "brand-2",
      "name": "TechStart Inc",
      "logoUrl": "/images/brands/techstart.svg",
      "lastAuditDate": "2025-12-26T14:45:00Z",
      "overallScore": 65
    }
  ]
}
```

### dashboard.json

```json
{
  "brandId": "brand-1",
  "aiVisibilityScore": 74,
  "eeatScore": 68,
  "keywordCoverage": 45,
  "lastAuditTimestamp": "2025-12-27T10:30:00Z"
}
```

### audit-modules.json

```json
{
  "brandId": "brand-1",
  "modules": [
    {
      "id": "ai-visibility",
      "name": "AI Visibility Audit",
      "description": "How visible is the brand in AI-powered search results",
      "score": 74,
      "insights": [
        {
          "id": "insight-1",
          "title": "Strong presence in ChatGPT responses",
          "description": "Brand appears in 68% of relevant ChatGPT queries",
          "type": "positive"
        }
      ],
      "issues": [
        {
          "id": "issue-1",
          "title": "Low visibility in Perplexity",
          "description": "Brand appears in only 12% of Perplexity searches",
          "severity": "high"
        }
      ],
      "recommendations": [
        {
          "id": "rec-1",
          "title": "Optimize content for Perplexity indexing",
          "description": "Structure content with clear headings and facts",
          "priority": "high",
          "impact": "Could increase Perplexity visibility by 40%"
        }
      ]
    }
  ]
}
```

---

## Type Guards & Utilities

```typescript
// src/lib/type-guards.ts

import { Insight, Issue, Recommendation } from '@/types/audit';

export function isPositiveInsight(insight: Insight): boolean {
  return insight.type === 'positive';
}

export function isCriticalIssue(issue: Issue): boolean {
  return issue.severity === 'critical';
}

export function isHighPriorityRecommendation(rec: Recommendation): boolean {
  return rec.priority === 'high';
}

export function getSeverityColor(severity: Issue['severity']): string {
  const colors = {
    low: 'text-green-600',
    medium: 'text-yellow-600',
    high: 'text-orange-600',
    critical: 'text-red-600',
  };
  return colors[severity];
}

export function getPriorityColor(priority: Recommendation['priority']): string {
  const colors = {
    low: 'text-gray-600',
    medium: 'text-blue-600',
    high: 'text-purple-600',
  };
  return colors[priority];
}
```

---

## Validation

All JSON data files should be validated against these TypeScript interfaces during development. Use:

```typescript
// Example validation in development
import { z } from 'zod';

const BrandSchema = z.object({
  id: z.string(),
  name: z.string(),
  logoUrl: z.string().optional(),
  lastAuditDate: z.string().datetime(),
  overallScore: z.number().min(0).max(100),
});
```

Note: Zod validation is optional and only recommended if stricter runtime validation is needed.
