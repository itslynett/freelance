"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        alert("Message sent! (Simulation)");
    };

    return (
        <Section id="contact">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something <span className="text-blue-500">Secure</span>.</h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Whether you need a secure web application, an API audit, or a full-stack partner for your startup, I'm ready to help you scale safely.
                    </p>

                    <div className="flex items-center gap-4 text-slate-300 mb-8">
                        <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800">
                            <Mail className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Email Me</p>
                            <a href="mailto:contact@lynett.dev" className="text-xl font-semibold hover:text-white transition-colors">contact@lynett.dev</a>
                        </div>
                    </div>
                </div>

                <Card className="p-8 bg-slate-900/50 border-slate-800">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                            <select
                                id="subject"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                            >
                                <option>General Inquiry</option>
                                <option>Project Proposal</option>
                                <option>Consulting</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                required
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
                            Send Message <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </form>
                </Card>
            </div>
        </Section>
    );
}
