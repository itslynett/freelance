"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { services } from "@/data/portfolio";

export function Services() {
    return (
        <Section id="services">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical <span className="text-blue-500">Expertise</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Delivering end-to-end solutions that prioritize security, performance, and user experience.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full hover:bg-slate-900/80 transition-colors group">
                            <div className="mb-4 p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                                <service.icon className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
