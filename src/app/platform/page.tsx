'use client';

import { motion } from 'framer-motion';
import { AUDIT_MODULE_DEFINITIONS } from '@/data/modules';

export default function PlatformPage() {
  return (
    <main className="w-full bg-background transition-colors pt-20 pb-32">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Product Description */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-heading tracking-tighter uppercase leading-[0.9]">
                The Intelligent <span className="text-primary tracking-normal">Ecosystem</span>
              </h1>
              <p className="text-muted-foreground font-bold text-xs uppercase tracking-[0.2em]">Technical Specifications & Product Topology</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-sm font-medium leading-relaxed"
            >
              <p>
                Kasparro is a deterministic AI-native SEO & Brand Intelligence infrastructure engineered for the generative search paradigm. It transitions the optimization layer from keyword-matching to neural inference alignment.
              </p>
              <p>
                The platform executes high-concurrency diagnostic pipelines, processing brand signals through seven specialized intelligence layers. By normalizing brand data into machine-parsable context packs, Kasparro enables brands to establish absolute clarity within the black-box environments of LLMs like GPT-4, Claude, and Gemini.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Audit Pipeline - Text Format */}
        <section className="mb-32 border-t border-border pt-16">
          <h2 className="text-2xl font-heading uppercase tracking-tighter mb-12">Intelligence Pipeline Workflow</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-8 border border-border space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Stage 01</span>
              <h3 className="font-bold uppercase tracking-tight text-sm">Signal Ingestion</h3>
              <p className="text-xs text-muted-foreground leading-normal">
                Harvests primary domains and cross-references multi-channel brand footprints. Normalizes raw data into structured markdown and semantic entity maps for LLM consumption.
              </p>
            </div>
            <div className="p-8 border border-border space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Stage 02</span>
              <h3 className="font-bold uppercase tracking-tight text-sm">Context Normalization</h3>
              <p className="text-xs text-muted-foreground leading-normal">
                Enriches ingestion packs with industry-specific training benchmarks. Embeds normalized signals into high-dimensional vector spaces for deterministic module auditing.
              </p>
            </div>
            <div className="p-8 border border-border space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Stage 03</span>
              <h3 className="font-bold uppercase tracking-tight text-sm">Neural Processing</h3>
              <p className="text-xs text-muted-foreground leading-normal">
                Parallelized execution of 7 specialized diagnostic modules, simulating model-specific reasoning loops to identify citation triggers and trust gaps.
              </p>
            </div>
            <div className="p-8 border border-border space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Stage 04</span>
              <h3 className="font-bold uppercase tracking-tight text-sm">Synthesis Output</h3>
              <p className="text-xs text-muted-foreground leading-normal">
                Generates a holistic Visibility Index, actionable technical roadmaps, and architectural visualizations for stakeholder-level implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Input/Output */}
        <section className="grid lg:grid-cols-2 gap-px bg-border mb-32 border border-border">
          <div className="bg-background p-12 space-y-8">
            <h2 className="text-2xl font-heading uppercase tracking-tighter">System Context (Input)</h2>
            <div className="space-y-6">
              {[
                { title: 'Semantic Core', items: ['Domain metadata', 'Schema.org graphs', 'Topic clusters'] },
                { title: 'Brand Echo', items: ['News citations', 'Social sentiment', 'Review consistency'] },
                { title: 'Technical Stack', items: ['Crawl efficiency', 'API accessibility', 'Markdown structure'] }
              ].map((group) => (
                <div key={group.title} className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary">{group.title}</h4>
                  <ul className="grid grid-cols-1 gap-1">
                    {group.items.map(item => <li key={item} className="text-sm font-medium border-l border-primary/20 pl-3">{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-background p-12 space-y-8">
            <h2 className="text-2xl font-heading uppercase tracking-tighter">Deliverable Assets (Output)</h2>
            <div className="space-y-6">
              {[
                { title: 'Visibility Index', items: ['LLM Mention Share', 'Reference Confidence', 'Topic Ownership'] },
                { title: 'Strategic Roadmap', items: ['Priority fixes', 'Content gaps', 'E-E-A-T signals'] },
                { title: 'Architecture Export', items: ['SVG system diagrams', 'JSON raw audit data', 'Implementation specs'] }
              ].map((group) => (
                <div key={group.title} className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary">{group.title}</h4>
                  <ul className="grid grid-cols-1 gap-1">
                    {group.items.map(item => <li key={item} className="text-sm font-medium border-l border-secondary/20 pl-3">{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistical Comparison */}
        <section className="mb-32">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-heading tracking-tighter uppercase leading-[0.9]">
              Statistical <span className="text-secondary tracking-normal">Matrix</span>
            </h2>
            <p className="text-muted-foreground font-bold text-xs uppercase tracking-[0.2em] mt-2">Performance Benchmarking vs Traditional SEO</p>
          </div>
          <div className="border border-border">
            {[
              { metric: 'Optimization Depth', trad: '85% Keywords', kasp: '100% Entities', diff: '+15%' },
              { metric: 'Analysis Latency', trad: 'Weeks (Manual)', kasp: '2.4s (Automated)', diff: '-99%' },
              { metric: 'Reference Accuracy', trad: '42% estimated', kasp: '94% deterministic', diff: '2.2x' },
              { metric: 'Model Alignment', trad: 'Low (Crawler only)', kasp: 'High (LLM specific)', diff: 'Critical' }
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-4 border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                <div className="p-6 font-bold text-xs uppercase border-r border-border">{row.metric}</div>
                <div className="p-6 text-sm text-muted-foreground border-r border-border">{row.trad}</div>
                <div className="p-6 text-sm font-bold border-r border-border">{row.kasp}</div>
                <div className="p-6 text-sm font-bold text-secondary">{row.diff}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
