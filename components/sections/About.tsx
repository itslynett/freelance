"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

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
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-slate-600 rounded-2xl opacity-20 blur-lg"></div>
                        <Card className="relative overflow-hidden aspect-square md:aspect-[4/3] flex items-center justify-center bg-slate-900">
                            {/* Replace with actual image later */}
                            <div className="text-center p-8">
                                <div className="w-32 h-32 bg-slate-800 rounded-full mx-auto mb-4 animate-pulse"></div>
                                <p className="text-slate-500 text-sm">Profile Image Placeholder</p>
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
                    <h2 className="text-3xl font-bold mb-6 text-white"><span className="text-blue-500">About Me.</span> The Digital Guardian.</h2>
                    <div className="space-y-4 text-slate-400 leading-relaxed">
                        <p>
                            I am a <strong className="text-slate-200">Full-Stack Developer</strong> and <strong className="text-slate-200">Cybersecurity Specialist</strong> based in Nairobi, Kenya. Currently pursuing a Bachelor’s in Information Systems and Technology at USIU–Africa, specializing in Forensics and Cybercrime.
                        </p>
                        <p>
                            My philosophy is simple: <span className="text-slate-200 italic">"Functionality without protection is unfinished work."</span>
                        </p>
                        <p>
                            I don't just write code; I architect resilient digital ecosystems. From building secure systems at <strong className="text-white">SynthaHub</strong> to ensuring system reliability at <strong className="text-white">Royal Media Services</strong>, my work bridges the gap between innovative software and ironclad security.
                        </p>
                        <p>
                            When I'm not auditing code or designing APIs, I'm cultivating mental resilience through fitness and continuous learning.
                        </p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
