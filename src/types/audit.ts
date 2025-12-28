/**
 * Audit Module types
 * Represents individual audit modules and their findings
 */

export interface Insight {
  id: string;
  title: string;
  description: string;
  type: 'positive' | 'neutral' | 'improvement';
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  affectedPages?: number;
  recommendation?: string;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  estimatedImpact: 'high' | 'medium' | 'low';
  implementationEffort: 'easy' | 'medium' | 'hard';
}

export interface AuditModule {
  id: string;
  moduleId: string;
  moduleName: string;
  description: string;
  score: number;
  maxScore: number;
  scorePercentage: number;
  insights: Insight[];
  issues: Issue[];
  recommendations: Recommendation[];
  lastUpdated: string;
}
