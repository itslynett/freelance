"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Quote, Award, Sparkles, Building } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
    return (
        <Section id="testimonials" className="bg-slate-950/40">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                    <Award className="w-4 h-4" />
                    <span>Industry Endorsement</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Professional <span className="text-blue-500">Recommendation</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A testament to system optimization, cybersecurity diligence, and engineering impact during my time at Royal Media Services.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Card className="relative overflow-hidden bg-slate-900/80 border-slate-800 p-8 md:p-12">
                        {/* Decorative background glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

                        {/* Top Quote Icon */}
                        <div className="absolute top-6 right-8 opacity-10">
                            <Quote className="w-24 h-24 text-blue-500" />
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 relative z-10">
                            {/* Key Highlights Sidebar */}
                            <div className="md:col-span-1 border-r border-slate-800 pr-0 md:pr-8 flex flex-col gap-6 justify-center">
                                <div>
                                    <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                                        <Sparkles className="w-4 h-4" />
                                        <span className="text-xs uppercase tracking-wider">Core Contributions</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">CMS Optimization</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        Refactored inefficient O(n²) interaction processing patterns, introducing pre-aggregation and batching to dramatically reduce database load.
                                    </p>
                                </div>

                                <div className="border-t border-slate-800/60 pt-6">
                                    <h4 className="text-lg font-bold text-white mb-2">NewsVault Storage</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        Designed and developed storage optimizations to scale media repository retrieval and historical content search within the Content Management System.
                                    </p>
                                </div>
                            </div>

                            {/* Full Recommendation Letter */}
                            <div className="md:col-span-2 flex flex-col justify-between">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-500/10 rounded-lg">
                                            <Building className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-md font-bold text-white">Royal Media Services Ltd</h4>
                                            <p className="text-xs text-slate-500">Nairobi, Kenya • ICT Department</p>
                                        </div>
                                    </div>

                                    <blockquote className="text-slate-300 text-sm md:text-base leading-relaxed italic border-l-2 border-blue-500 pl-4 py-1">
                                        "She contributed to two key projects: an analytics aggregation system that processes user interaction data into metrics (e.g., unique reads and average time) before clearing logs, and NewsVault, which optimized CMS data storage and expanded news repository retrieval capabilities."
                                    </blockquote>

                                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                                        "Throughout her attachment, she proved to be a dedicated and reliable individual who carried out her duties effectively and to the satisfaction of her supervisors. She demonstrated a strong work ethic, was an excellent team player, and showed eagerness to learn and grow in her role... we are confident that she will be a valuable asset to any organization she joins."
                                    </p>
                                </div>

                                {/* Sign-off */}
                                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                                    <div>
                                        <h5 className="font-bold text-white text-sm">Herman Wafula Barasa</h5>
                                        <p className="text-xs text-slate-500">Broadcast Support Officer</p>
                                        <p className="text-[10px] text-blue-500/80 font-mono tracking-wider mt-1 uppercase">Official Recommendation Letter • April 30, 2026</p>
                                    </div>
                                    <div className="h-10 w-24 relative opacity-80 select-none pointer-events-none hidden sm:block">
                                        {/* Styled Signature Graphic Placeholder */}
                                        <div className="font-serif italic text-slate-400 text-xl tracking-widest text-center rotate-[-5deg] border-b border-dashed border-slate-700 pb-1">
                                            H. W. Barasa
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
}
