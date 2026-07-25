"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Layers, Server, Shield, CheckCircle, Cpu, Database, ChevronRight, Terminal } from "lucide-react";
import { productionProducts, ProductionProduct } from "@/data/portfolio";

export function ProductionProducts() {
    const [selectedId, setSelectedId] = useState<string>(productionProducts[0].id);
    const activeProduct = productionProducts.find(p => p.id === selectedId) || productionProducts[0];

    return (
        <section id="production-products" className="py-20 border-b border-[#30363D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="flex flex-col gap-1 mb-10">
                    <div className="font-mono text-xs text-blue-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                        <span>02 // COMMERCIAL CASE STUDIES</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">Production Products</h2>
                            <p className="mt-1 text-sm text-[#94A3B8]">
                                Production systems engineered, deployed, and maintained for commercial reliability.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tab Selector Buttons */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#30363D]">
                    {productionProducts.map((product) => {
                        const isActive = product.id === activeProduct.id;
                        return (
                            <button
                                key={product.id}
                                onClick={() => setSelectedId(product.id)}
                                className={`px-4 py-2.5 rounded font-mono text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2.5 border ${
                                    isActive
                                        ? "bg-blue-600 text-white border-blue-500 shadow-sm"
                                        : "bg-[#161B22] text-[#94A3B8] hover:text-[#F8FAFC] border-[#30363D] hover:border-[#484f58]"
                                }`}
                            >
                                <span className={`w-2 h-2 rounded-full ${product.status === "Production" ? "bg-emerald-400" : "bg-amber-400"}`}></span>
                                <span>{product.name}</span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded ${isActive ? "bg-blue-700 text-blue-100" : "bg-[#21262D] text-[#64748B]"}`}>
                                    {product.status}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Case Study Detail Container */}
                <motion.div
                    key={activeProduct.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 sm:p-8 rounded bg-[#161B22] border border-[#30363D] space-y-8"
                >
                    {/* Header: Title, Roles & URL */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#30363D]">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-semibold ${
                                    activeProduct.status === "Production"
                                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                                        : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                                }`}>
                                    Status: {activeProduct.status}
                                </span>

                                {activeProduct.url && (
                                    <a
                                        href={activeProduct.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                                    >
                                        <span>{activeProduct.url.replace("https://", "")}</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                )}
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">{activeProduct.name}</h3>
                            <p className="mt-2 text-sm text-[#E6EDF3] leading-relaxed max-w-3xl">
                                {activeProduct.overview}
                            </p>
                        </div>

                        {/* Engineering Roles */}
                        <div className="flex flex-wrap lg:flex-col gap-2 shrink-0">
                            <span className="font-mono text-xs text-[#94A3B8] uppercase block">Engineering Role</span>
                            <div className="flex flex-wrap gap-2">
                                {activeProduct.roles.map(role => (
                                    <span key={role} className="px-2.5 py-1 rounded bg-[#21262D] border border-[#30363D] text-xs font-mono text-blue-400">
                                        {role}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Architecture Diagram Visualization */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between font-mono text-xs text-[#94A3B8]">
                            <span className="flex items-center gap-2">
                                <Cpu className="w-4 h-4 text-blue-500" />
                                <span className="uppercase text-[#F8FAFC] font-semibold">System Architecture Diagram</span>
                            </span>
                            <span className="text-[#64748B]">Cloud-Native Pipeline</span>
                        </div>
                        <div className="code-block font-mono text-xs text-blue-300 overflow-x-auto bg-[#0D1117] p-4 border border-[#30363D] rounded">
                            {activeProduct.architectureDiagram}
                        </div>
                    </div>

                    {/* Grid: Business Problem & Responsibilities */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Business Problem */}
                        <div className="p-5 rounded bg-[#0D1117] border border-[#30363D] space-y-2">
                            <h4 className="font-mono text-xs uppercase text-cyan-400 font-semibold flex items-center gap-2">
                                <Terminal className="w-4 h-4" />
                                <span>Business & System Problem</span>
                            </h4>
                            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                                {activeProduct.businessProblem}
                            </p>
                        </div>

                        {/* Core Responsibilities */}
                        <div className="p-5 rounded bg-[#0D1117] border border-[#30363D] space-y-3">
                            <h4 className="font-mono text-xs uppercase text-emerald-400 font-semibold flex items-center gap-2">
                                <Shield className="w-4 h-4" />
                                <span>My Engineering Responsibilities</span>
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                                {activeProduct.responsibilities.map((resp, i) => (
                                    <span key={i} className="px-2.5 py-1 rounded bg-[#161B22] border border-[#30363D] text-xs font-mono text-[#E6EDF3]">
                                        ✓ {resp}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Key Engineering Decisions */}
                    <div className="space-y-3">
                        <h4 className="font-mono text-xs uppercase text-[#F8FAFC] font-semibold flex items-center gap-2">
                            <Layers className="w-4 h-4 text-blue-500" />
                            <span>Engineering Decisions & Architecture Rationale</span>
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {activeProduct.engineeringDecisions.map((decision, i) => (
                                <div key={i} className="p-4 rounded bg-[#0D1117] border border-[#30363D] text-xs text-[#94A3B8] leading-relaxed flex items-start gap-2.5">
                                    <span className="font-mono text-blue-500 font-bold">0{i + 1}.</span>
                                    <span>{decision}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="space-y-2 pt-2 border-t border-[#30363D]">
                        <span className="font-mono text-xs text-[#94A3B8] uppercase block">Technologies & Infrastructure Stack</span>
                        <div className="flex flex-wrap gap-2">
                            {activeProduct.techStack.map(tech => (
                                <span key={tech} className="px-3 py-1 rounded bg-[#21262D] border border-[#30363D] text-xs font-mono text-[#F8FAFC]">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Grid: Challenges, Outcome, Lessons Learned */}
                    <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-[#30363D] text-xs">
                        <div className="p-4 rounded bg-[#0D1117] border border-[#30363D]">
                            <span className="font-mono text-[#94A3B8] uppercase block font-semibold mb-1 text-[11px]">Engineering Challenge</span>
                            <p className="text-[#E6EDF3] leading-relaxed">{activeProduct.challenges}</p>
                        </div>

                        <div className="p-4 rounded bg-[#0D1117] border border-[#30363D]">
                            <span className="font-mono text-emerald-400 uppercase block font-semibold mb-1 text-[11px]">Production Outcome</span>
                            <p className="text-[#E6EDF3] leading-relaxed">{activeProduct.outcome}</p>
                        </div>

                        <div className="p-4 rounded bg-[#0D1117] border border-[#30363D]">
                            <span className="font-mono text-cyan-400 uppercase block font-semibold mb-1 text-[11px]">Lessons Learned</span>
                            <p className="text-[#E6EDF3] leading-relaxed">{activeProduct.lessonsLearned}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
