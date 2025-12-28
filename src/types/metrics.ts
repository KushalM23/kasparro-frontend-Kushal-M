/**
 * Dashboard Metrics interface
 * High-level KPIs for a brand's dashboard
 */

export interface DashboardMetrics {
  brandId: string;
  aiVisibility: number;
  eeatScore: number;
  keywordCoverage: number;
  technicalReadinessScore: number;
  contentQualityScore: number;
  competitorBenchmarkScore: number;
  brandMentionScore: number;
  averageScore: number;
  lastAudit: string;
  recommendedActions: number;
  criticalIssues: number;
}
