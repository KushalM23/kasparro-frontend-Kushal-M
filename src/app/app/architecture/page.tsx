/**
 * Architecture Page - System Diagram
 * URL: /app/architecture
 * 
 * Shows how the Kasparro system processes audits
 */

'use client';

import { useState } from 'react';
import { AUDIT_MODULE_DEFINITIONS } from '@/data/modules';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

export default function ArchitecturePage() {
  const [selectedModule, setSelectedModule] = useState(AUDIT_MODULE_DEFINITIONS[0]);

  return (
    <div className="p-8 w-full max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">System Architecture</h1>
        <p className="text-muted-foreground text-lg">
          How Kasparro processes your brand data through our intelligent audit pipeline
        </p>
      </motion.div>

      {/* Architecture Pipeline Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-16 p-8 border border-border"
      >
        <h2 className="text-2xl font-bold mb-8">The Kasparro Pipeline</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0">
          {/* Input Assembler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative md:pb-12"
          >
            <div className="p-6 rounded-lg border border-primary/50 dark:border-accent/50 bg-primary/5 dark:bg-accent/5 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/20 dark:bg-accent/20 flex items-center justify-center mx-auto mb-4 text-primary dark:text-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-bold text-foreground">Input Assembler</h3>
              <p className="text-xs text-muted-foreground mt-2">Collect and normalize brand data from multiple sources</p>
            </div>
            {/* Arrow */}
            <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 h-8 w-px bg-gradient-to-b from-primary to-transparent dark:from-accent"></div>
          </motion.div>

          {/* Context Pack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative md:pb-12 md:top-12"
          >
            <div className="p-6 rounded-lg border border-secondary/50 dark:border-secondary/30 bg-secondary/5 dark:bg-secondary/5 text-center">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 dark:bg-secondary/10 flex items-center justify-center mx-auto mb-4 text-secondary dark:text-secondary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-foreground">Context Pack</h3>
              <p className="text-xs text-muted-foreground mt-2">Enrich and prepare data for analysis</p>
            </div>
            <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 h-8 w-px bg-gradient-to-b from-secondary to-transparent dark:from-secondary/30"></div>
          </motion.div>

          {/* Audit Modules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative md:pb-12"
          >
            <div className="p-6 rounded-lg border border-primary/50 dark:border-accent/50 bg-primary/5 dark:bg-accent/5 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/20 dark:bg-accent/20 flex items-center justify-center mx-auto mb-4 text-primary dark:text-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-foreground">7 Audit Modules</h3>
              <p className="text-xs text-muted-foreground mt-2">Analyze 7 dimensions of AI-SEO</p>
            </div>
            <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 h-8 w-px bg-gradient-to-b from-primary to-transparent dark:from-accent"></div>
          </motion.div>

          {/* Output Surfaces */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative md:top-12"
          >
            <div className="p-6 rounded-lg border border-secondary/50 dark:border-secondary/30 bg-secondary/5 dark:bg-secondary/5 text-center">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 dark:bg-secondary/10 flex items-center justify-center mx-auto mb-4 text-secondary dark:text-secondary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-foreground">Output Surfaces</h3>
              <p className="text-xs text-muted-foreground mt-2">Dashboard, audit, and reports</p>
            </div>
          </motion.div>
        </div>

        {/* Pipeline Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 border border-border"
        >
          <p className="text-muted-foreground text-center">
            Kasparro assembles all signals about your brand into a unified context pack that flows through 7 specialized AI modules running in parallel. Each module analyzes a specific dimension of your AI-readiness, producing scores, insights, issues, and recommendations.
          </p>
        </motion.div>
      </motion.div>

      {/* Audit Modules Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-6">The 7 Audit Modules</h2>
        <p className="text-muted-foreground mb-8">Click on any module to learn more</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {AUDIT_MODULE_DEFINITIONS.map((module) => {
            const IconComponent = (Icons as any)[module.icon];
            const isSelected = selectedModule.id === module.id;

            return (
              <motion.button
                key={module.id}
                onClick={() => setSelectedModule(module)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 border transition-all text-left group ${
                  isSelected
                    ? 'border-primary dark:border-accent bg-primary/10 dark:bg-accent/10'
                    : 'border-border hover:border-primary/50 dark:hover:border-accent/50 hover:bg-primary/5 dark:hover:bg-accent/5'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  {IconComponent && (
                    <div className={`p-2 ${
                      isSelected
                        ? 'bg-primary/20 dark:bg-accent/20 text-primary dark:text-accent'
                        : 'bg-muted dark:bg-muted/50 text-muted-foreground group-hover:text-primary dark:group-hover:text-accent transition-colors'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  )}
                </div>
                <h3 className={`font-bold text-sm ${isSelected ? 'text-primary dark:text-accent' : 'text-foreground'}`}>
                  {module.shortDescription}
                </h3>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Module Details */}
        <motion.div
          key={selectedModule.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 border border-primary/50 dark:border-accent/50 bg-gradient-to-r from-[#9bb2e5]/10 to-[#698cbf]/10 dark:from-[#9bb2e5]/10 dark:to-[#698cbf]/5"
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-accent mb-2">
                {selectedModule.name}
              </h3>
              <p className="text-muted-foreground">
                {selectedModule.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold mb-3">What It Analyzes</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary dark:text-accent">→</span>
                    <span>AI model comprehension of your content</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary dark:text-accent">→</span>
                    <span>Relevance and accuracy signals</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary dark:text-accent">→</span>
                    <span>Technical readiness indicators</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">You'll Learn</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary dark:text-accent">✓</span>
                    <span>How visible you are to AI models</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary dark:text-accent">✓</span>
                    <span>Specific areas for improvement</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary dark:text-accent">✓</span>
                    <span>Actionable optimization recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* How It Works */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="p-8 border border-border"
      >
        <h2 className="text-2xl font-bold mb-6">How It All Comes Together</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="mb-4 text-4xl font-bold text-primary dark:text-accent">1</div>
            <h3 className="font-bold mb-2">Data Collection</h3>
            <p className="text-sm text-muted-foreground">
              We gather comprehensive data about your brand from your domain, content, technical metadata, and web presence.
            </p>
          </div>
          <div>
            <div className="mb-4 text-4xl font-bold text-primary dark:text-accent">2</div>
            <h3 className="font-bold mb-2">Intelligent Processing</h3>
            <p className="text-sm text-muted-foreground">
              Your data flows through our 7 audit modules, each analyzing a specific dimension with AI-native techniques.
            </p>
          </div>
          <div>
            <div className="mb-4 text-4xl font-bold text-primary dark:text-accent">3</div>
            <h3 className="font-bold mb-2">Actionable Results</h3>
            <p className="text-sm text-muted-foreground">
              Results are synthesized into clear scores, insights, issues, and recommendations for your team.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
