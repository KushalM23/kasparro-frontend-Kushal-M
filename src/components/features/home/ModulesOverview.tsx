'use client';

import { AUDIT_MODULE_DEFINITIONS } from '@/data/modules';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

export function ModulesOverview() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core Audit Modules
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seven comprehensive modules that analyze every aspect of your brand's readiness for AI-first search
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {AUDIT_MODULE_DEFINITIONS.map((module) => {
            const IconComponent = (Icons as any)[module.icon];
            return (
              <motion.div
                key={module.id}
                variants={item}
                className="group p-6 border border-border hover:border-primary/50 dark:hover:border-accent/50 transition-all duration-300 hover:bg-primary/5 dark:hover:bg-accent/5"
              >
                <div className="flex items-start justify-between mb-4">
                  {IconComponent && (
                    <div className="p-3 bg-primary/10 dark:bg-accent/10 group-hover:bg-primary/20 dark:group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-primary dark:text-accent" />
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-base mb-2 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                  {module.shortDescription}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {module.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
