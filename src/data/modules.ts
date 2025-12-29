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
      'Evaluate how visible your brand is in AI-powered search results. We analyze model-specific citations and mention probability across ChatGPT, Gemini, and Perplexity.',
    icon: 'Eye',
    shortDescription: 'AI Search Visibility',
  },
  {
    id: AUDIT_MODULES.EEAT_ANALYSIS,
    name: 'E-E-A-T Analysis',
    description:
      'Assessment of Experience, Expertise, Authoritativeness, and Trustworthiness. We measure how effectively AI models verify your brand credibility.',
    icon: 'Shield',
    shortDescription: 'Trust & Credibility',
  },
  {
    id: AUDIT_MODULES.CONTENT_QUALITY,
    name: 'Content Quality Audit',
    description: 'Detailed analysis of content quality and relevance. We evaluate how well your knowledge is structured for AI comprehension and reasoning.',
    icon: 'FileText',
    shortDescription: 'Content Optimization',
  },
  {
    id: AUDIT_MODULES.TECHNICAL_AI_READINESS,
    name: 'Technical AI Readiness',
    description: 'Analysis of technical factors that affect AI crawlability, including structured data, markdown integrity, and site architecture.',
    icon: 'Zap',
    shortDescription: 'Technical Readiness',
  },
  {
    id: AUDIT_MODULES.BRAND_MENTION_TRACKING,
    name: 'Brand Mention Tracking',
    description: 'Tracking how and where your brand is mentioned across AI platforms and search responses to identify visibility gaps.',
    icon: 'MessageSquare',
    shortDescription: 'Brand Mentions',
  },
  {
    id: AUDIT_MODULES.COMPETITOR_BENCHMARKING,
    name: 'Competitor Benchmarking',
    description: 'Comparison of your brand performance against key competitors across major AI models and search architectures.',
    icon: 'Crosshair',
    shortDescription: 'Competitive Analysis',
  },
  {
    id: AUDIT_MODULES.KEYWORD_COVERAGE,
    name: 'Keyword Coverage Audit',
    description: 'Analysis of non-branded keyword visibility and topical authority to identify growth opportunities in AI search.',
    icon: 'Search',
    shortDescription: 'Keyword Coverage',
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

