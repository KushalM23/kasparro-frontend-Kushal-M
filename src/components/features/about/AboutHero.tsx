'use client';

import { motion } from 'framer-motion';

export function AboutHero() {
    return (
        <section className="mb-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 max-w-3xl"
            >
                <h1 className="text-5xl md:text-8xl font-heading tracking-tighter uppercase leading-[0.85]">
                    Neural <span className="text-primary tracking-normal">Clarity</span>
                </h1>
                <p className="text-muted-foreground font-bold text-xs uppercase tracking-[0.3em]">Corporate Philosophy & Founders</p>
            </motion.div>
        </section>
    );
}
