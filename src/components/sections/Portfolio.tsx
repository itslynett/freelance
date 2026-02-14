"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { TiltCard } from "@/components/ui/TiltCard";

export function Portfolio() {
    return (
        <Section id="portfolio">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-blue-500">Case Studies</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A selection of projects that demonstrate secure, scalable engineering.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="h-full"
                    >
                        <TiltCard className="h-full">
                            <Card className="h-full overflow-hidden group border-0 p-0 bg-slate-900">
                                {/* Image Placeholder Area */}
                                <div className="aspect-video bg-slate-800 relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                                            View Details
                                        </Button>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-semibold px-2 py-1 rounded bg-slate-800 text-slate-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Button size="sm" variant="outline" className="gap-2" onClick={() => window.open(project.links.github, '_blank')}>
                                            <Github className="w-4 h-4" /> Code
                                        </Button>
                                        <Button size="sm" className="gap-2" onClick={() => window.open(project.links.demo, '_blank')}>
                                            <ExternalLink className="w-4 h-4" /> Live Demo
                                        </Button>
                                    </div>
                                </div>

                            </Card>
                        </TiltCard>
                    </motion.div>
                ))}
            </div>
        </Section >
    );
}
