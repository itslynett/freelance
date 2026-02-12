"use client";

import { Section } from "@/components/ui/Section";
import { Dumbbell, Brain, Shield } from "lucide-react";

export function Philosophy() {
    return (
        <Section id="philosophy" className="bg-gradient-to-b from-slate-950 to-blue-950/20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Beyond the <span className="text-blue-500">Code</span></h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                            <Dumbbell className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Discipline & Fitness</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Physical resilience fuels mental clarity. The discipline I build in the gym translates to the persistence I bring to debugging and solving complex problems.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                            <Brain className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Continuous Learning</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Technology never stops evolving, and neither do I. Staying ahead of the curve is not just a passion—it's a professional necessity.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                            <Shield className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Security Mindset</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Security isn't an afterthought; it's a culture. I approach every system with a proactive, defensive mindset.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
