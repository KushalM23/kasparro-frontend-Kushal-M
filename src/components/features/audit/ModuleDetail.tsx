import { ScoreDisplay } from './ScoreDisplay';
import { InsightsList } from './InsightsList';
import { IssuesList } from './IssuesList';
import { RecommendationsList } from './RecommendationsList';

interface AuditModule {
  id: string;
  name: string;
  score: number;
  insights: Array<{ title: string; description: string }>;
  issues: Array<{ title: string; description: string; severity: string }>;
  recommendations: Array<{
    title: string;
    description: string;
    impact: string;
    effort: string;
  }>;
}

interface ModuleDetailProps {
  module: AuditModule;
}

export function ModuleDetail({ module }: ModuleDetailProps) {
  return (
    <div className="space-y-6">
      <ScoreDisplay score={module.score} moduleName={module.name} />
      <div className="grid md:grid-cols-2 gap-6">
        <InsightsList insights={module.insights} />
        <IssuesList issues={module.issues} />
      </div>
      <RecommendationsList recommendations={module.recommendations} />
    </div>
  );
}
