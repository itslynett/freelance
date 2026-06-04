"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Code, Shield, Server } from "lucide-react";

const binaryLines = [
    "10110111101010001010011011101001111",
    "01101010001010001100111011001010101",
    "11001100110010001011110011010010110",
    "00001110010101001111010101010011101",
    "10010111011100110101000111010100101",
    "01101001010111001011011110101001110",
    "11110000111100001010101010101110011",
    "01010101010101011111000011110011010",
    "10101011001100110011001100111010101",
    "11001100110011001010101111001100101"
];

export function About() {
    return (
        <Section id="about" className="bg-slate-950/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative grid grid-cols-2 gap-4">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-slate-600 rounded-2xl opacity-20 blur-lg"></div>

                        {/* Tech Visual 1: Code/Dev */}
                        <Card className="relative overflow-hidden aspect-square flex items-center justify-center bg-slate-900 border-slate-800 p-0 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                            <div className="relative z-10 text-center">
                                <Code className="w-12 h-12 text-blue-500 mb-2 mx-auto group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-xs font-mono text-blue-300">DEV.CORE</span>
                            </div>
                            {/* Decorative binary/code lines */}
                            <div className="absolute inset-0 opacity-10 flex flex-col gap-1 p-2 text-[6px] font-mono text-blue-200 overflow-hidden select-none pointer-events-none">
                                {binaryLines.map((line, i) => (
                                    <div key={i}>{line}</div>
                                ))}
                            </div>
                        </Card>

                        {/* Tech Visual 2: Security */}
                        <Card className="relative overflow-hidden aspect-square flex items-center justify-center bg-slate-900 border-slate-800 p-0 group md:mt-12">
                            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/10 to-transparent"></div>
                            <div className="relative z-10 text-center">
                                <Shield className="w-12 h-12 text-cyan-500 mb-2 mx-auto group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-xs font-mono text-cyan-300">SEC.OPS</span>
                            </div>
                        </Card>

                        {/* Tech Visual 3: Server/Infra */}
                        <Card className="relative col-span-2 overflow-hidden aspect-[2/1] flex items-center justify-center bg-slate-900 border-slate-800 p-0 group">
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-900/50"></div>
                            <div className="flex items-center gap-8 relative z-10">
                                <div className="flex flex-col items-center">
                                    <Server className="w-10 h-10 text-violet-500 mb-1 group-hover:text-violet-400 transition-colors" />
                                    <div className="flex gap-1 mt-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse delay-75"></span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse delay-150"></span>
                                    </div>
                                </div>
                                <div className="hidden sm:block text-left">
                                    <div className="text-xs font-mono text-slate-500">SYSTEM.STATUS</div>
                                    <div className="text-sm font-bold text-slate-300">OPERATIONAL</div>
                                    <div className="text-[10px] font-mono text-slate-600 mt-1">UPTIME: 99.99%</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-white"><span className="text-blue-500">About Me.</span> Full-Stack Developer & Cybersecurity Enthusiast.</h2>
                    <div className="space-y-4 text-slate-400 leading-relaxed">
                        {personalInfo.bio.map((paragraph, index) => (
                            <p key={index} dangerouslySetInnerHTML={{
                                __html: paragraph
                                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-200">$1</strong>')
                                    .replace(/\*"(.*?)"\*/g, '<span class="text-slate-200 italic">"$1"</span>')
                            }} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
