"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle, Calendar } from "lucide-react";
import { certifications } from "@/data/portfolio";

export function Certifications() {
    return (
        <section id="certifications" className="py-20 border-b border-[#30363D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="flex flex-col gap-1 mb-12">
                    <div className="font-mono text-xs text-blue-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                        <span>07 // CREDENTIALS & COMPLIANCE</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">Certifications</h2>
                    <p className="mt-1 text-sm text-[#94A3B8]">
                        Formal engineering, software development, and cybersecurity credentials.
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="p-6 rounded bg-[#161B22] border border-[#30363D] flex flex-col justify-between space-y-4 hover:border-[#484f58] transition-colors"
                        >
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="p-2.5 rounded bg-[#21262D] text-emerald-400 border border-[#30363D]">
                                        <Award className="w-5 h-5" />
                                    </div>
                                    <span className="font-mono text-xs text-[#94A3B8] px-2.5 py-1 rounded bg-[#0D1117] border border-[#30363D]">
                                        {cert.year}
                                    </span>
                                </div>

                                <h3 className="font-bold text-[#F8FAFC] text-lg leading-snug">{cert.title}</h3>
                                <div className="font-mono text-xs text-blue-400 font-semibold">{cert.issuer}</div>
                                <p className="text-xs text-[#94A3B8] leading-relaxed pt-1">
                                    {cert.description}
                                </p>
                            </div>

                            <div className="pt-3 border-t border-[#30363D] flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                                <CheckCircle className="w-3.5 h-3.5" />
                                <span>Verified Credential</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
