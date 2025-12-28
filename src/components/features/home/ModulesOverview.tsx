'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AUDIT_MODULE_DEFINITIONS } from '@/data/modules';
import * as Icons from 'lucide-react';

export function ModulesOverview() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          7 Audit Modules
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {AUDIT_MODULE_DEFINITIONS.map((module) => {
            const IconComponent = (Icons as any)[module.icon];
            return (
              <Card key={module.id} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base">{module.shortDescription}</CardTitle>
                    {IconComponent && <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{module.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
