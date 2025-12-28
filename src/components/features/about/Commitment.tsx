'use client';

import { motion } from 'framer-motion';

export function Commitment() {
    return (
        <section className="mb-32 text-center max-w-2xl mx-auto py-20 pb-40">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground mb-8">Architectural Commitment</h2>
                <p className="text-lg font-bold leading-relaxed">
                    "We don't build tools for search engines. We build interfaces for intelligence. Kasparro is the operating system for the AI-first age."
                </p>
                <div className="mt-12 h-[1px] w-20 bg-primary mx-auto" />
            </motion.div>
        </section>
    );
}
