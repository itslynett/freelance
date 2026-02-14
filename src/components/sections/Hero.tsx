"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Database, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "@/components/ui/Typewriter";

export function Hero() {
    return (
        <Section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-slate-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-slate-950/0 to-slate-950/0"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
                >
                    <ShieldCheck className="w-4 h-4" />
                    <Typewriter
                        text={["Cybersecurity Specialist", "Full-Stack Developer", "Digital Forensics Expert"]}
                        speed={0.1}
                        className="font-mono"
                        cursorClassName="bg-blue-500"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
                >
                    Secure Systems. <br />
                    <span className="text-gradient-primary">Scalable Architecture.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Engineered for the long run. I build resilient digital solutions that live at the intersection of robust code, digital investigations, and evolving cyber threats.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="w-full sm:w-auto text-white" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                        View Case Studies <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Work With Me
                    </Button>
                </motion.div>

                {/* Floating Icons/Badges */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 opacity-60">
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-3 bg-slate-900/50 rounded-xl border border-white/5">
                            <Database className="w-6 h-6 text-slate-300" />
                        </div>
                        <span className="text-xs text-slate-500 font-mono">SCALABLE DB</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-3 bg-slate-900/50 rounded-xl border border-white/5">
                            <Lock className="w-6 h-6 text-slate-300" />
                        </div>
                        <span className="text-xs text-slate-500 font-mono">SECURE API</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-3 bg-slate-900/50 rounded-xl border border-white/5">
                            <ShieldCheck className="w-6 h-6 text-slate-300" />
                        </div>
                        <span className="text-xs text-slate-500 font-mono">DATA PRIVACY</span>
                    </div>
                    {/* Add more tech icons or concepts */}
                </div>
            </div>
        </Section>
    );
}
