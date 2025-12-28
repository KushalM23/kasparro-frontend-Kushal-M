/**
 * Platform Page - Product Overview
 * URL: /platform
 * 
 * Comprehensive product overview with pipeline, inputs, outputs, and comparison
 */

'use client';

import { motion } from 'framer-motion';
import { AUDIT_MODULE_DEFINITIONS } from '@/data/modules';

export default function PlatformPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border bg-gradient-to-b from-primary/5 to-transparent dark:from-accent/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              The Kasparro Platform
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive AI-native SEO & Brand Intelligence platform built for the AI-first search era. From input to actionable intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-16 md:py-20 px-4 md:px-6 border-b border-border">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Product Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Kasparro is a comprehensive platform designed to help brands understand and optimize for AI-first search. As search engines evolve to include AI models like ChatGPT, Gemini, and Perplexity, traditional SEO approaches fall short. Our platform audits your entire brand presence and provides scores, insights, issues, and actionable recommendations across seven critical dimensions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Audit Pipeline */}
      <section className="py-16 md:py-20 px-4 md:px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Audit Pipeline
            </h2>
            <p className="text-muted-foreground">
              Our streamlined audit process processes your brand data through 7 specialized modules to deliver comprehensive insights.
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* Step 1: Input Assembler */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 border border-border"
            >
              <h3 className="text-lg font-bold mb-3 text-primary dark:text-accent">1. Input Assembler</h3>
              <p className="text-sm text-muted-foreground mb-3">
                We collect and normalize your brand data from multiple sources including your domain, content structure, technical metadata, and AI-model accessible attributes.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Domain crawling and indexability assessment</li>
                <li>• Content structure and organization analysis</li>
                <li>• Technical metadata collection (schema, tags, etc.)</li>
                <li>• Authority and brand signal aggregation</li>
              </ul>
            </motion.div>

            {/* Step 2: Context Pack */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 border border-border"
            >
              <h3 className="text-lg font-bold mb-3 text-primary dark:text-accent">2. Context Preparation</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Raw data is processed and enriched with contextual information to prepare it for AI model analysis.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Data normalization and enrichment</li>
                <li>• Contextual feature extraction</li>
                <li>• Competitive landscape analysis</li>
                <li>• Historical trend assessment</li>
              </ul>
            </motion.div>

            {/* Step 3: Audit Modules */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 border border-border"
            >
              <h3 className="text-lg font-bold mb-3 text-primary dark:text-accent">3. Audit Modules (7 Core Analyses)</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Your prepared context data flows through seven specialized audit modules, each scoring a critical dimension:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {AUDIT_MODULE_DEFINITIONS.map((module) => (
                  <div key={module.id} className="text-sm p-3 border border-border/50">
                    <strong className="block text-foreground mb-1">{module.shortDescription}</strong>
                    <p className="text-xs text-muted-foreground">{module.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Step 4: Output Generation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 border border-border"
            >
              <h3 className="text-lg font-bold mb-3 text-primary dark:text-accent">4. Output Surfaces</h3>
              <p className="text-sm text-muted-foreground">
                Audit results are compiled into multiple output surfaces for different stakeholder needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Inputs */}
      <section className="py-16 md:py-20 px-4 md:px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What We Consume
            </h2>
            <div className="space-y-6">
              <div className="p-6 border border-border">
                <h3 className="font-semibold mb-3">Brand Data</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Primary domain and content structure</li>
                  <li>• Author and organizational information</li>
                  <li>• Content freshness and update frequency</li>
                  <li>• Entity relationships and industry context</li>
                </ul>
              </div>
              <div className="p-6 border border-border">
                <h3 className="font-semibold mb-3">Web Presence</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Owned properties (website, blog, resources)</li>
                  <li>• Brand mentions across the web</li>
                  <li>• Social presence and engagement</li>
                  <li>• Citation and reference patterns</li>
                </ul>
              </div>
              <div className="p-6 border border-border">
                <h3 className="font-semibold mb-3">AI Search Context</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• How major AI models understand your content</li>
                  <li>• Keyword coverage in AI model training data</li>
                  <li>• Competitor presence in AI search results</li>
                  <li>• Topic authority and expertise signals</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Outputs */}
      <section className="py-16 md:py-20 px-4 md:px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What You Receive
            </h2>
            <div className="space-y-6">
              <div className="p-6 border border-border">
                <h3 className="font-semibold mb-3">Dashboard Snapshot</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A high-level overview of your brand's AI-SEO health with key metrics at a glance.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Overall AI Visibility Score</li>
                  <li>• E-E-A-T (Trust & Authority) Score</li>
                  <li>• Non-Branded Keyword Coverage</li>
                  <li>• Last audit timestamp</li>
                </ul>
              </div>
              <div className="p-6 border border-border">
                <h3 className="font-semibold mb-3">Detailed Audit Report</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  In-depth analysis for each of the 7 modules with scoring and insights.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Module-specific scores (0-100)</li>
                  <li>• Key insights from analysis</li>
                  <li>• Issues and red flags identified</li>
                  <li>• Actionable recommendations for improvement</li>
                </ul>
              </div>
              <div className="p-6 border border-border">
                <h3 className="font-semibold mb-3">Architecture Documentation</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Technical breakdown of how your brand is understood in the AI-SEO pipeline.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Input assembler data mapping</li>
                  <li>• Context pack enrichment details</li>
                  <li>• Module execution flow</li>
                  <li>• Output surface documentation</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Kasparro vs. Traditional SEO Tools
            </h2>
            <p className="text-muted-foreground">
              Here's how Kasparro differs from conventional SEO platforms.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold">Aspect</th>
                  <th className="text-left p-4 font-semibold">Traditional SEO</th>
                  <th className="text-left p-4 font-semibold text-primary dark:text-accent">Kasparro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50 hover:bg-primary/5 dark:hover:bg-accent/5 transition-colors">
                  <td className="p-4 font-medium">Primary Focus</td>
                  <td className="p-4 text-muted-foreground">Google search algorithms</td>
                  <td className="p-4 text-muted-foreground">AI model understanding</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-primary/5 dark:hover:bg-accent/5 transition-colors">
                  <td className="p-4 font-medium">Key Metrics</td>
                  <td className="p-4 text-muted-foreground">Keywords, backlinks, rankings</td>
                  <td className="p-4 text-muted-foreground">E-E-A-T, content quality, AI visibility</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-primary/5 dark:hover:bg-accent/5 transition-colors">
                  <td className="p-4 font-medium">Optimization Goal</td>
                  <td className="p-4 text-muted-foreground">Rank in search results</td>
                  <td className="p-4 text-muted-foreground">Appear in AI-generated results</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-primary/5 dark:hover:bg-accent/5 transition-colors">
                  <td className="p-4 font-medium">Content Analysis</td>
                  <td className="p-4 text-muted-foreground">Keyword density, readability</td>
                  <td className="p-4 text-muted-foreground">AI comprehension, reasoning, accuracy</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-primary/5 dark:hover:bg-accent/5 transition-colors">
                  <td className="p-4 font-medium">Authority Signals</td>
                  <td className="p-4 text-muted-foreground">Domain authority, link profile</td>
                  <td className="p-4 text-muted-foreground">E-E-A-T, brand mentions, expertise</td>
                </tr>
                <tr className="hover:bg-primary/5 dark:hover:bg-accent/5 transition-colors">
                  <td className="p-4 font-medium">Approach</td>
                  <td className="p-4 text-muted-foreground">Reactive to algorithm changes</td>
                  <td className="p-4 text-muted-foreground">Proactive for AI-era optimization</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
