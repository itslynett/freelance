"use client";

import { motion } from "framer-motion";
import { Code, Terminal, Server, Database, Cpu, ShieldCheck } from "lucide-react";
import { technicalSkills } from "@/data/portfolio";

export function TechStack() {
    const categories = [
        {
            title: "Languages",
            icon: Code,
            iconColor: "text-blue-400",
            skills: technicalSkills.languages
        },
        {
            title: "Frontend Engineering",
            icon: Terminal,
            iconColor: "text-cyan-400",
            skills: technicalSkills.frontend
        },
        {
            title: "Backend Frameworks & APIs",
            icon: Server,
            iconColor: "text-blue-500",
            skills: technicalSkills.backend
        },
        {
            title: "Databases & In-Memory Stores",
            icon: Database,
            iconColor: "text-emerald-400",
            skills: technicalSkills.databases
        },
        {
            title: "DevSecOps & Cloud Infrastructure",
            icon: Cpu,
            iconColor: "text-amber-400",
            skills: technicalSkills.devSecOps
        },
        {
            title: "Cybersecurity & Security Architecture",
            icon: ShieldCheck,
            iconColor: "text-emerald-500",
            skills: technicalSkills.cybersecurity
        }
    ];

    return (
        <section id="skills" className="py-20 border-b border-[#30363D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="flex flex-col gap-1 mb-12">
                    <div className="font-mono text-xs text-blue-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                        <span>05 // TECHNICAL COMPETENCIES</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">Technical Skills</h2>
                    <p className="mt-1 text-sm text-[#94A3B8]">
                        Production tools, programming languages, database architectures, and DevSecOps tooling.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={cat.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="p-6 rounded bg-[#161B22] border border-[#30363D] flex flex-col justify-between space-y-4 hover:border-[#484f58] transition-colors"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-2 rounded bg-[#21262D] border border-[#30363D] ${cat.iconColor}`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-mono font-bold text-[#F8FAFC] text-base">{cat.title}</h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {cat.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2.5 py-1 rounded bg-[#21262D] border border-[#30363D] font-mono text-xs text-[#C9D1D9] hover:text-[#F8FAFC] hover:border-[#484f58] transition-colors cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
