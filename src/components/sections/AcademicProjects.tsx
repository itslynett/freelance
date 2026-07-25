"use client";

import { motion } from "framer-motion";
import { GraduationCap, ShieldAlert, Cpu, Terminal, CheckCircle2 } from "lucide-react";
import { academicProjects } from "@/data/portfolio";

export function AcademicProjects() {
    return (
        <section id="academic-projects" className="py-20 border-b border-[#30363D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="flex flex-col gap-1 mb-12">
                    <div className="font-mono text-xs text-blue-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                        <span>04 // ACADEMIC & RESEARCH IMPLEMENTATIONS</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">Academic Projects</h2>
                    <p className="mt-1 text-sm text-[#94A3B8]">
                        System engineering and digital forensics projects developed as part of the B.Sc Information Systems & Technology curriculum at USIU-Africa.
                    </p>
                </div>

                {/* Academic Projects Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {academicProjects.map((project, idx) => (
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
                                    <div>
                                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                                            <GraduationCap className="w-4 h-4" />
                                            <span>{project.institution}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#F8FAFC]">{project.name}</h3>
                                    </div>
                                </div>

                                <p className="text-sm text-[#E6EDF3] leading-relaxed">
                                    {project.overview}
                                </p>

                                {/* System Architecture Strip */}
                                <div className="space-y-1">
                                    <span className="font-mono text-[11px] text-[#94A3B8] uppercase block">System Architecture & Pipeline</span>
                                    <div className="code-block font-mono text-xs text-emerald-300 bg-[#0D1117] p-3 border border-[#30363D] rounded overflow-x-auto">
                                        {project.architecture}
                                    </div>
                                </div>

                                {/* System Design & Problem Solving Cards */}
                                <div className="grid sm:grid-cols-2 gap-4 text-xs">
                                    <div className="p-3.5 rounded bg-[#0D1117] border border-[#30363D] space-y-1">
                                        <span className="font-mono text-blue-400 font-semibold uppercase text-[10px] block">Software & System Design</span>
                                        <p className="text-[#94A3B8] leading-relaxed">{project.systemDesign}</p>
                                    </div>

                                    <div className="p-3.5 rounded bg-[#0D1117] border border-[#30363D] space-y-1">
                                        <span className="font-mono text-emerald-400 font-semibold uppercase text-[10px] block">Technical Problem Solving</span>
                                        <p className="text-[#94A3B8] leading-relaxed">{project.problemSolving}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack Footer */}
                            <div className="pt-4 border-t border-[#30363D] flex items-center justify-between">
                                <span className="font-mono text-xs text-[#94A3B8]">Stack & Tooling:</span>
                                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-2.5 py-0.5 rounded bg-[#21262D] border border-[#30363D] text-[#C9D1D9]">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
