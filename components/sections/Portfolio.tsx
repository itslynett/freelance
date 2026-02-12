"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Secure E-Commerce Platform",
        description: "A full-stack e-commerce application with robust authentication, secure payment gateway integration, and admin dashboard.",
        image: "/placeholder-project-1.jpg", // Needs valid path later
        tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "Cyber Threat Dashboard",
        description: "Real-time dashboard for monitoring network traffic and potential security threats. Visualizes data using D3.js.",
        image: "/placeholder-project-2.jpg",
        tags: ["React", "Python", "FastAPI", "D3.js"],
        links: { demo: "#", github: "#" }
    },
    // Add more projects
];

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
                    >
                        <Card className="h-full overflow-hidden group border-0 p-0 bg-slate-900">
                            {/* Image Placeholder Area */}
                            <div className="aspect-video bg-slate-800 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-slate-800 group-hover:bg-slate-700 transition-colors">
                                    <span className="font-mono text-sm">Project Preview</span>
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
                                    <Button size="sm" variant="outline" className="gap-2">
                                        <Github className="w-4 h-4" /> Code
                                    </Button>
                                    <Button size="sm" className="gap-2">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
