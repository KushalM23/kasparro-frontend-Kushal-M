/**
 * Dashboard Metrics interface
 * High-level KPIs for a brand's dashboard
 */

export interface DashboardMetrics {
  brandId: string;
  aiVisibilityScore: number;
  eeatScore: number;
  keywordCoverageScore: number;
  technicalReadinessScore: number;
  contentQualityScore: number;
  competitorBenchmarkScore: number;
  brandMentionScore: number;
  averageScore: number;
  lastAuditDate: string;
  recommendedActions: number;
  criticalIssues: number;
}
