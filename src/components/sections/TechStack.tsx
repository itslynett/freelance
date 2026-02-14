"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio";

export function TechStack() {
    return (
        <Section id="tech-stack">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tech <span className="text-blue-500">Arsenal</span></h2>
                <p className="text-slate-400">The tools I use to build and secure the modern web.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {techStack.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="bg-slate-900/50 rounded-xl p-6 border border-white/5 h-full">
                            <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-white/10">{category.name}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1.5 text-sm rounded bg-slate-800 text-slate-300 border border-slate-700 hover:border-blue-500/50 hover:text-blue-300 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
