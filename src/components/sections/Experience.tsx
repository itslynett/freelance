"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";
import { professionalExperience } from "@/data/portfolio";

export function Experience() {
    return (
        <section id="experience" className="py-20 border-b border-[#30363D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="flex flex-col gap-1 mb-12">
                    <div className="font-mono text-xs text-blue-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                        <span>06 // WORK HISTORY</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">Professional Experience</h2>
                    <p className="mt-1 text-sm text-[#94A3B8]">
                        Production software engineering, backend architecture, and cybersecurity infrastructure experience.
                    </p>
                </div>

                {/* Experience Timeline Stream */}
                <div className="space-y-8 max-w-5xl">
                    {professionalExperience.map((exp, idx) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="p-6 sm:p-8 rounded bg-[#161B22] border border-[#30363D] relative space-y-6"
                        >
                            {/* Header Row */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#30363D]">
                                <div>
                                    <span className="font-mono text-xs text-blue-400 font-semibold uppercase tracking-wider block">
                                        {exp.role}
                                    </span>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] flex items-center gap-2 mt-1">
                                        <Building2 className="w-5 h-5 text-cyan-400" />
                                        <span>{exp.company}</span>
                                    </h3>
                                </div>

                                <div className="flex items-center gap-4 text-xs font-mono text-[#94A3B8]">
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#21262D] border border-[#30363D]">
                                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="hidden sm:flex items-center gap-1.5">
                                        <MapPin className="w-3.5 h-3.5 text-[#64748B]" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Summary Description */}
                            <p className="text-sm text-[#E6EDF3] leading-relaxed">
                                {exp.description}
                            </p>

                            {/* Key Accomplishments Checklist */}
                            <div className="space-y-2.5">
                                <span className="font-mono text-xs text-[#F8FAFC] uppercase font-semibold block">Key Deliverables & Engineering Accomplishments</span>
                                <ul className="grid gap-2 text-xs sm:text-sm text-[#94A3B8]">
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span className="text-[#E6EDF3] leading-relaxed">{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack Badges */}
                            <div className="pt-4 border-t border-[#30363D] flex items-center justify-between gap-4 flex-wrap">
                                <span className="font-mono text-xs text-[#94A3B8]">Core Stack & Tools:</span>
                                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                                    {exp.techStack.map((tech) => (
                                        <span key={tech} className="px-2.5 py-1 rounded bg-[#21262D] border border-[#30363D] text-[#C9D1D9]">
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
