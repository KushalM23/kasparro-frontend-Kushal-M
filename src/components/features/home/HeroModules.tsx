'use client';

import { motion } from 'framer-motion';
import { AUDIT_MODULE_DEFINITIONS } from '@/data/modules';
import * as Icons from 'lucide-react';

export function HeroModules() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, scale: 0.95 },
        show: { opacity: 1, scale: 1 },
    };

    return (
        <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/5 to-secondary/5 blur-3xl -z-10" />
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
                {AUDIT_MODULE_DEFINITIONS.map((module, index) => {
                    const IconComponent = (Icons as any)[module.icon];
                    return (
                        <motion.div
                            key={module.id}
                            variants={item}
                            className={index === 6 ? "sm:col-span-3 lg:col-span-1" : ""}
                        >
                            <div className="h-full p-4 border border-border bg-background/50 backdrop-blur-sm group hover:border-primary transition-colors flex flex-col gap-3">
                                {IconComponent && (
                                    <IconComponent className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                )}
                                <h3 className=" text-[10px] sm:text-xs uppercase tracking-widest leading-tight">
                                    {module.name}
                                </h3>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
