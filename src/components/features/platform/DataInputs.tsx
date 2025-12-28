'use client';

import { motion } from 'framer-motion';

export function DataInputs() {
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
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  };
  const inputs = [
    { title: 'Brand Content', items: ['Website metadata', 'Structured data', 'Topic relevance'] },
    { title: 'Market Presence', items: ['News mentions', 'Customer reviews', 'Social engagement'] },
    { title: 'Technical Setup', items: ['Site speed', 'Mobile readiness', 'Content structure'] }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-background p-12 space-y-8"
    >
      <h2 className="text-2xl uppercase tracking-tighter">System Context (Input)</h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {inputs.map((group) => (
          <motion.div key={group.title} variants={item} className="space-y-2">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary">{group.title}</h4>
            <ul className="grid grid-cols-1 gap-1">
              {group.items.map(item => <li key={item} className="text-sm font-medium border-l border-primary/40 pl-3 text-foreground/80">{item}</li>)}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
