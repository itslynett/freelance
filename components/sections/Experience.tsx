"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Full-Stack Developer",
        company: "SynthaHub",
        period: "2024 - Present",
        description: "Designing and building secure, scalable software using Next.js, React, and Node.js. Integrating backend systems with FastAPI and Django, managing databases (MongoDB, PostgreSQL), and enforcing security protocols.",
        tags: ["Next.js", "FastAPI", "Security", "PostgreSQL"]
    },
    {
        role: "IT Support & Cybersecurity Intern",
        company: "Royal Media Services",
        period: "2023 - 2024",
        description: "Rotated through IT support and cybersecurity departments. Contributed to system reliability, managed Sophos endpoint protection, and supported an interactive CMS used at national scale.",
        tags: ["Cybersecurity", "Sophos", "System Admin", "CMS"]
    }
];

export function Experience() {
    return (
        <Section id="experience" className="bg-slate-950/30">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional <span className="text-blue-500">Experience</span></h2>
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-slate-950"></div>

                            <Card className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <div className="flex items-center text-blue-400 gap-2 mt-1">
                                            <Briefcase className="w-4 h-4" />
                                            <span className="font-medium">{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-slate-500 text-sm gap-2 bg-slate-900/50 px-3 py-1 rounded-full w-fit">
                                        <Calendar className="w-3 h-3" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
