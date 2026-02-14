"use client";

import { Section } from "@/components/ui/Section";
import { Dumbbell, Brain, Shield } from "lucide-react";
import { philosophy } from "@/data/portfolio";

// Map icons to titles manually since we can't easily store React components in the separate data file if it's strict JSON-like, 
// but here we are exporting objects so it's fine. 
// However, to keep the data file clean, I'll map them here based on index or title.
const icons = [Dumbbell, Brain, Shield];

export function Philosophy() {
    return (
        <Section id="philosophy" className="bg-gradient-to-b from-slate-950 to-blue-950/20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Beyond the <span className="text-blue-500">Code</span></h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {philosophy.map((item, index) => {
                        const Icon = icons[index] || Shield;
                        return (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                                    <Icon className="w-8 h-8 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Section>
    );
}
