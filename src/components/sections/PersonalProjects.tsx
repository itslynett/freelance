"use client";

import { motion } from "framer-motion";
import { Code2, GitFork, Cpu, ShieldCheck, Terminal, ExternalLink } from "lucide-react";
import { personalProjects } from "@/data/portfolio";

export function PersonalProjects() {
    return (
        <section id="personal-projects" className="py-20 border-b border-[#30363D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="flex flex-col gap-1 mb-12">
                    <div className="font-mono text-xs text-blue-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                        <span>03 // INDEPENDENT ENGINEERING</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">Personal Projects</h2>
                    <p className="mt-1 text-sm text-[#94A3B8]">
                        Independent engineering systems built to explore novel algorithms, security patterns, and performance optimizations outside commercial work.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {personalProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="p-6 rounded bg-[#161B22] border border-[#30363D] flex flex-col justify-between space-y-6"
                        >
                            <div className="space-y-4">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded bg-[#21262D] border border-[#30363D] text-cyan-400">
                                            <Code2 className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#F8FAFC]">{project.name}</h3>
                                    </div>
                                    <span className="font-mono text-xs text-[#64748B] shrink-0">Personal Build</span>
                                </div>

                                <p className="text-sm text-[#E6EDF3] leading-relaxed">
                                    {project.overview}
                                </p>

                                {/* Architecture Diagram Strip */}
                                <div className="space-y-1">
                                    <span className="font-mono text-[11px] text-[#94A3B8] uppercase block">Architecture Flow</span>
                                    <div className="code-block font-mono text-xs text-cyan-300 bg-[#0D1117] p-3 border border-[#30363D] rounded overflow-x-auto">
                                        {project.architecture}
                                    </div>
                                </div>

                                {/* Problem vs Solution */}
                                <div className="grid sm:grid-cols-2 gap-4 text-xs pt-2">
                                    <div className="p-3 rounded bg-[#0D1117] border border-[#30363D] space-y-1">
                                        <span className="font-mono text-amber-400 font-semibold block uppercase text-[10px]">Problem</span>
                                        <p className="text-[#94A3B8] leading-relaxed">{project.problem}</p>
                                    </div>

                                    <div className="p-3 rounded bg-[#0D1117] border border-[#30363D] space-y-1">
                                        <span className="font-mono text-emerald-400 font-semibold block uppercase text-[10px]">Engineering Solution</span>
                                        <p className="text-[#94A3B8] leading-relaxed">{project.solution}</p>
                                    </div>
                                </div>

                                {/* Engineering Decisions */}
                                <div className="space-y-2">
                                    <span className="font-mono text-xs text-[#F8FAFC] uppercase font-semibold block">Key Engineering Decisions</span>
                                    <ul className="space-y-1 text-xs text-[#94A3B8]">
                                        {project.engineeringDecisions.map((dec, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-blue-500 font-mono">▸</span>
                                                <span>{dec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Footer: Tech Stack & Lessons Learned */}
                            <div className="pt-4 border-t border-[#30363D] space-y-3">
                                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-2.5 py-0.5 rounded bg-[#21262D] border border-[#30363D] text-[#C9D1D9]">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="text-xs font-mono text-[#94A3B8] flex items-center gap-1.5 pt-1">
                                    <span className="text-cyan-400">Lesson Learned:</span>
                                    <span className="text-[#E6EDF3]">{project.lessonsLearned}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
