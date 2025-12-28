'use client';

import { motion } from 'framer-motion';

export function PlatformHero() {
    return (
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
    );
}
