import { AUDIT_MODULES } from '@/lib/constants';

export interface ModuleDefinition {
  id: (typeof AUDIT_MODULES)[keyof typeof AUDIT_MODULES];
  name: string;
  description: string;
  icon: string;
  shortDescription: string;
}

export const AUDIT_MODULE_DEFINITIONS: ModuleDefinition[] = [
  {
    id: AUDIT_MODULES.AI_VISIBILITY,
    name: 'AI Visibility Audit',
    description:
      'Assess how visible your content is to AI search engines and models. Includes analysis of crawlability, indexability, and AI-specific metadata.',
    icon: 'Eye',
    shortDescription: 'How visible are you to AI?',
  },
  {
    id: AUDIT_MODULES.EEAT_ANALYSIS,
    name: 'E-E-A-T Analysis',
    description:
      'Evaluate Experience, Expertise, Authoritativeness, and Trustworthiness. Critical signals for AI-driven search rankings.',
    icon: 'Shield',
    shortDescription: 'Trust and authority signals',
  },
  {
    id: AUDIT_MODULES.CONTENT_QUALITY,
    name: 'Content Quality Audit',
    description: 'Analyze content depth, readability, freshness, and alignment with user intent and AI comprehension.',
    icon: 'FileText',
    shortDescription: 'Content quality analysis',
  },
  {
    id: AUDIT_MODULES.TECHNICAL_AI_READINESS,
    name: 'Technical AI Readiness',
    description: 'Check crawlability, performance, mobile optimization, and technical signals that AI algorithms rely on.',
    icon: 'Zap',
    shortDescription: 'Technical performance',
  },
  {
    id: AUDIT_MODULES.BRAND_MENTION_TRACKING,
    name: 'Brand Mention Tracking',
    description: 'Monitor where your brand is mentioned across the web and establish brand authority in search results.',
    icon: 'MessageSquare',
    shortDescription: 'Brand mentions and authority',
  },
  {
    id: AUDIT_MODULES.COMPETITOR_BENCHMARKING,
    name: 'Competitor Benchmarking',
    description: 'Compare your AI-SEO performance against competitors to identify gaps and opportunities.',
    icon: 'Crosshair',
    shortDescription: 'Competitive analysis',
  },
  {
    id: AUDIT_MODULES.KEYWORD_COVERAGE,
    name: 'Keyword Coverage Audit',
    description: 'Analyze keyword diversity, topical coverage, and opportunities to expand your keyword footprint.',
    icon: 'Search',
    shortDescription: 'Keyword strategy audit',
  },
];

/**
 * Get a module definition by ID
 */
export function getModuleDefinition(
  id: (typeof AUDIT_MODULES)[keyof typeof AUDIT_MODULES]
): ModuleDefinition | undefined {
  return AUDIT_MODULE_DEFINITIONS.find((m) => m.id === id);
}

/**
 * Get all module definitions
 */
export function getAllModuleDefinitions(): ModuleDefinition[] {
  return AUDIT_MODULE_DEFINITIONS;
}
