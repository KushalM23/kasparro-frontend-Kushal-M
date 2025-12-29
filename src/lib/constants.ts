/**
 * Application constants
 * Centralized configuration for the Kasparro frontend
 */

// Audit Module IDs and Names
export const AUDIT_MODULES = {
  AI_VISIBILITY: 'ai-visibility',
  EEAT_ANALYSIS: 'eeat-analysis',
  CONTENT_QUALITY: 'content-quality',
  TECHNICAL_AI_READINESS: 'technical-ai-readiness',
  BRAND_MENTION_TRACKING: 'brand-mention-tracking',
  COMPETITOR_BENCHMARKING: 'competitor-benchmarking',
  KEYWORD_COVERAGE: 'keyword-coverage',
} as const;

// Routes
export const ROUTES = {
  HOME: '/',
  PLATFORM: '/platform',
  ABOUT: '/about',
  DASHBOARD: '/app/dashboard',
  AUDIT: '/app/audit',
  ARCHITECTURE: '/app/architecture',
} as const;

// Responsive breakpoints (in pixels)
export const BREAKPOINTS = {
  MOBILE: 375,
  TABLET: 768,
  DESKTOP: 1920,
} as const;

// Animation durations (in milliseconds)
export const ANIMATION_DURATIONS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;

// Data paths
export const DATA_PATHS = {
  BRANDS: '/audit-data/brands.json',
  DASHBOARD: (brandId: string) => `/audit-data/${brandId}/dashboard.json`,
  AUDIT_MODULES: (brandId: string) => `/audit-data/${brandId}/audit-modules.json`,
} as const;

// Metric ranges for scoring
export const METRIC_RANGES = {
  MIN: 0,
  MAX: 100,
} as const;

