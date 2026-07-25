"use client";

import { motion } from "framer-motion";
import { Shield, Code2, Server, GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function About() {
    return (
        <section id="about" className="py-20 border-b border-[#30363D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="flex flex-col gap-1 mb-12">
                    <div className="font-mono text-xs text-blue-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                        <span>01 // BACKGROUND & EXPERTISE</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">About Me</h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Narrative */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="lg:col-span-7 space-y-6 text-[#94A3B8] text-base leading-relaxed"
                    >
                        {personalInfo.aboutBio.map((paragraph, idx) => (
                            <p key={idx} className="text-[#E6EDF3] leading-relaxed">
                                {paragraph}
                            </p>
                        ))}

                        {/* Engineering Commitments Grid */}
                        <div className="pt-6 border-t border-[#30363D] grid sm:grid-cols-2 gap-4 text-xs font-mono">
                            <div className="flex items-start gap-2.5 p-3 rounded bg-[#161B22] border border-[#30363D]">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-[#F8FAFC] font-semibold block">Production Engineering</span>
                                    <span className="text-[#94A3B8]">High availability & clean RESTful API design</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-2.5 p-3 rounded bg-[#161B22] border border-[#30363D]">
                                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-[#F8FAFC] font-semibold block">DevSecOps Integration</span>
                                    <span className="text-[#94A3B8]">Automated container security & secret management</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-2.5 p-3 rounded bg-[#161B22] border border-[#30363D]">
                                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-[#F8FAFC] font-semibold block">Database Optimization</span>
                                    <span className="text-[#94A3B8]">Partitioning, indexing, and Redis caching</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-2.5 p-3 rounded bg-[#161B22] border border-[#30363D]">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-[#F8FAFC] font-semibold block">Digital Forensics</span>
                                    <span className="text-[#94A3B8]">Investigative mindset & audit log integrity</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Credentials & Education Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="lg:col-span-5 space-y-4"
                    >
                        {/* Education Card */}
                        <div className="p-6 rounded bg-[#161B22] border border-[#30363D]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 rounded bg-[#21262D] text-blue-400 border border-[#30363D]">
                                    <GraduationCap className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="font-mono text-xs text-blue-400 uppercase tracking-wider block">Higher Education</span>
                                    <h3 className="font-bold text-[#F8FAFC] text-base">B.Sc Information Systems & Technology</h3>
                                </div>
                            </div>
                            <p className="text-xs text-[#94A3B8] font-mono">United States International University — Africa (USIU-Africa)</p>
                            <div className="mt-3 inline-block px-2.5 py-1 rounded bg-[#21262D] border border-[#30363D] text-xs font-mono text-cyan-300">
                                Specialization: Digital Forensics & Cybercrime
                            </div>
                        </div>

                        {/* Certification Card */}
                        <div className="p-6 rounded bg-[#161B22] border border-[#30363D]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 rounded bg-[#21262D] text-emerald-400 border border-[#30363D]">
                                    <Award className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider block">Engineering Certification</span>
                                    <h3 className="font-bold text-[#F8FAFC] text-base">Certified Web Developer</h3>
                                </div>
                            </div>
                            <p className="text-xs text-[#94A3B8] font-mono">PLP Africa (2025)</p>
                            <p className="mt-2 text-xs text-[#94A3B8]">
                                Full-Stack Software Engineering, modern framework deployment, database architecture, and secure coding standards.
                            </p>
                        </div>

                        {/* Core Competencies Summary */}
                        <div className="p-5 rounded bg-[#161B22] border border-[#30363D]">
                            <h4 className="font-mono text-xs text-[#F8FAFC] uppercase tracking-wider mb-3">Core Engineering Focus</h4>
                            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                                <span className="px-2.5 py-1 rounded bg-[#21262D] text-[#C9D1D9] border border-[#30363D]">Full-Stack Systems</span>
                                <span className="px-2.5 py-1 rounded bg-[#21262D] text-[#C9D1D9] border border-[#30363D]">Backend Microservices</span>
                                <span className="px-2.5 py-1 rounded bg-[#21262D] text-[#C9D1D9] border border-[#30363D]">DevSecOps</span>
                                <span className="px-2.5 py-1 rounded bg-[#21262D] text-[#C9D1D9] border border-[#30363D]">Docker / K8s</span>
                                <span className="px-2.5 py-1 rounded bg-[#21262D] text-[#C9D1D9] border border-[#30363D]">PostgreSQL</span>
                                <span className="px-2.5 py-1 rounded bg-[#21262D] text-[#C9D1D9] border border-[#30363D]">Digital Forensics</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
