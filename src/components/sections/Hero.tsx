"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, ShieldCheck, Terminal, Cpu, Database, Server, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
    const scrollToProducts = (e: React.MouseEvent) => {
        e.preventDefault();
        const el = document.querySelector("#production-products");
        if (el) {
            const offsetTop = el.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: offsetTop - 75, behavior: "smooth" });
        }
    };

    return (
        <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 border-b border-[#30363D]">
            {/* Minimal Grid Line Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#161b22_1px,transparent_1px),linear-gradient(to_bottom,#161b22_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
                <div className="max-w-4xl">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161B22] border border-[#30363D] text-xs font-mono text-[#94A3B8] mb-6"
                    >
                        <Terminal className="w-3.5 h-3.5 text-blue-500" />
                        <span>System Engineer & DevSecOps Specialist</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#F8FAFC] leading-[1.1]"
                    >
                        Hi, I'm <span className="text-blue-500">Lynett Maina</span>.
                    </motion.h1>

                    {/* Roles Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="mt-3 text-lg sm:text-2xl font-mono text-cyan-400 flex flex-wrap items-center gap-x-3 gap-y-1"
                    >
                        <span>Full-Stack Software Engineer</span>
                        <span className="text-[#484f58] hidden sm:inline">•</span>
                        <span>Backend Engineer</span>
                        <span className="text-[#484f58] hidden sm:inline">•</span>
                        <span>DevSecOps Engineer</span>
                        <span className="text-[#484f58] hidden sm:inline">•</span>
                        <span>Cybersecurity</span>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="mt-4 text-xl sm:text-2xl font-medium text-[#F8FAFC]"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    {/* Mission Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.25 }}
                        className="mt-6 p-4 rounded bg-[#161B22] border-l-4 border-l-blue-600 border border-[#30363D] text-[#94A3B8] text-sm leading-relaxed"
                    >
                        <p className="font-mono text-xs uppercase tracking-wider text-blue-400 mb-1 font-semibold">Engineering Mission</p>
                        <p className="text-[#E6EDF3] text-sm sm:text-base leading-relaxed">
                            {personalInfo.mission}
                        </p>
                    </motion.div>

                    {/* Primary Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="mt-8 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href="#production-products"
                            onClick={scrollToProducts}
                            className="px-6 py-3 rounded bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm font-semibold transition-colors flex items-center gap-2 shadow-sm"
                        >
                            <span>View My Work</span>
                            <ArrowDown className="w-4 h-4" />
                        </a>

                        <a
                            href={personalInfo.socials.resume}
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3 rounded bg-[#161B22] hover:bg-[#21262D] text-[#F8FAFC] border border-[#30363D] hover:border-[#484f58] font-mono text-sm font-semibold transition-colors flex items-center gap-2"
                        >
                            <FileText className="w-4 h-4 text-cyan-400" />
                            <span>Download Resume</span>
                        </a>

                        <a
                            href={personalInfo.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-3 rounded bg-[#161B22] hover:bg-[#21262D] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#30363D] font-mono text-xs transition-colors flex items-center gap-1.5"
                        >
                            <span>GitHub @itslynett</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </motion.div>
                </div>

                {/* Infrastructure & Stack Telemetry Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    <div className="p-4 rounded bg-[#161B22] border border-[#30363D] flex items-center gap-3">
                        <div className="p-2 rounded bg-[#21262D] text-blue-400">
                            <Server className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-mono text-xs text-[#94A3B8] uppercase">Backend Core</div>
                            <div className="text-sm font-bold text-[#F8FAFC] font-mono">FastAPI / Node / Django</div>
                        </div>
                    </div>

                    <div className="p-4 rounded bg-[#161B22] border border-[#30363D] flex items-center gap-3">
                        <div className="p-2 rounded bg-[#21262D] text-cyan-400">
                            <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-mono text-xs text-[#94A3B8] uppercase">Infrastructure</div>
                            <div className="text-sm font-bold text-[#F8FAFC] font-mono">Docker / Linux / K8s</div>
                        </div>
                    </div>

                    <div className="p-4 rounded bg-[#161B22] border border-[#30363D] flex items-center gap-3">
                        <div className="p-2 rounded bg-[#21262D] text-emerald-400">
                            <Database className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-mono text-xs text-[#94A3B8] uppercase">Data Persistence</div>
                            <div className="text-sm font-bold text-[#F8FAFC] font-mono">PostgreSQL / Redis</div>
                        </div>
                    </div>

                    <div className="p-4 rounded bg-[#161B22] border border-[#30363D] flex items-center gap-3">
                        <div className="p-2 rounded bg-[#21262D] text-emerald-400">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-mono text-xs text-[#94A3B8] uppercase">Security Standard</div>
                            <div className="text-sm font-bold text-[#F8FAFC] font-mono">DevSecOps / RBAC</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
