import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import * as Icons from 'lucide-react';

interface ModuleNodeProps {
  icon: string;
  name: string;
  description: string;
}

export function ModuleNode({ icon, name, description }: ModuleNodeProps) {
  const IconComponent = (Icons as any)[icon];

  return (
    <Card className="border border-primary/50 bg-primary/5">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          {IconComponent && <IconComponent className="w-4 h-4 text-primary" />}
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-xs text-muted-foreground">{description}</CardContent>
    </Card>
  );
}
