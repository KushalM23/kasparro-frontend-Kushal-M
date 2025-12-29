'use client';

import { motion } from 'framer-motion';

export function PlatformHero() {
    return (
        <section className="mb-16 md:mb-32">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl tracking-tighter uppercase leading-[0.9]">
                        How the <span className="text-primary tracking-normal">Platform</span> Works
                    </h1>
                    <p className="text-muted-foreground font-bold text-xs uppercase tracking-[0.2em] mb-4">Our Process & Technical Approach</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                >
                    <p className="text-lg font-medium leading-relaxed text-foreground/90">
                        Kasparro is an AI-native SEO platform designed to help your brand thrive as search moves toward AI-first discovery. We've built an infrastructure that helps you understand how models like ChatGPT, Gemini, and Claude perceive your content.
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        Our platform works through a clear, three-step process: gathering your brand data, analyzing it through seven specialized audit modules, and providing actionable insights. We help you take control of your visibility by ensuring AI models have the right context to represent your brand accurately.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
