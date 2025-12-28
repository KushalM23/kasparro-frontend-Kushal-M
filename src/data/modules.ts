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
      'Analyze model-specific citation triggers and mention probability across the LLM landscape. Includes assessment of semantic footprint and discovery reach.',
    icon: 'Eye',
    shortDescription: 'LLM Citation Probability',
  },
  {
    id: AUDIT_MODULES.EEAT_ANALYSIS,
    name: 'E-E-A-T Analysis',
    description:
      'Diagnostic assessment of entity credibility and authority signals. Evaluates how models verify expertise and trust in neural training sets.',
    icon: 'Shield',
    shortDescription: 'Neural Trust Integrity',
  },
  {
    id: AUDIT_MODULES.CONTENT_QUALITY,
    name: 'Content Quality Audit',
    description: 'Neural reasoning analysis evaluating semantic depth, readability, and context-rich knowledge graph integration for AI comprehension.',
    icon: 'FileText',
    shortDescription: 'Semantic Depth Analysis',
  },
  {
    id: AUDIT_MODULES.TECHNICAL_AI_READINESS,
    name: 'Technical AI Readiness',
    description: 'System-level benchmark for machine-parsable structured data, markdown integrity, and technical signals for neural indexing.',
    icon: 'Zap',
    shortDescription: 'Technical Indexing',
  },
  {
    id: AUDIT_MODULES.BRAND_MENTION_TRACKING,
    name: 'Brand Mention Tracking',
    description: 'Deterministic tracking of brand echo and citation frequency across AI-generated search responses and synthetic media.',
    icon: 'MessageSquare',
    shortDescription: 'Brand Echo Monitoring',
  },
  {
    id: AUDIT_MODULES.COMPETITOR_BENCHMARKING,
    name: 'Competitor Benchmarking',
    description: 'Parallel performance mapping against competitive brand signatures across major model architectures (GPT-4, Claude, Gemini).',
    icon: 'Crosshair',
    shortDescription: 'Model-Specific Benchmarking',
  },
  {
    id: AUDIT_MODULES.KEYWORD_COVERAGE,
    name: 'Keyword Coverage Audit',
    description: 'Entity-based gap analysis and topical authority expansion for autonomous search agents and generative engines.',
    icon: 'Search',
    shortDescription: 'Entity Coverage Mapping',
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
