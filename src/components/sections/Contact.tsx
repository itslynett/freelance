"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, Send, CheckCircle2, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "Engineering Role Inquiry",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Open default mail client with formatted subject and body
        const mailtoUri = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Hi Lynett,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
        )}`;
        window.location.href = mailtoUri;
    };

    return (
        <section id="contact" className="py-20 border-b border-[#30363D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="flex flex-col gap-1 mb-12">
                    <div className="font-mono text-xs text-blue-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                        <span>09 // INITIATE DISCUSSIONS</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">Contact & Hiring</h2>
                    <p className="mt-1 text-sm text-[#94A3B8]">
                        Available for full-time engineering roles, backend consulting, and DevSecOps architecture initiatives.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Direct Links & Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        <div className="p-6 rounded bg-[#161B22] border border-[#30363D] space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">Let's Connect</h3>
                                <p className="text-xs text-[#94A3B8] leading-relaxed">
                                    Whether you are looking to hire a Full-Stack / Backend Engineer or discuss cloud-native security, I am available to connect.
                                </p>
                            </div>

                            <div className="space-y-4 text-xs font-mono">
                                {/* Email Direct */}
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="p-3.5 rounded bg-[#0D1117] border border-[#30363D] hover:border-blue-500/50 transition-colors flex items-center gap-3 group"
                                >
                                    <div className="p-2 rounded bg-[#21262D] text-blue-400 group-hover:text-blue-300">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="text-[#94A3B8] block text-[10px] uppercase">Email Directly</span>
                                        <span className="text-[#F8FAFC] font-semibold text-xs">{personalInfo.email}</span>
                                    </div>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href={personalInfo.socials.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3.5 rounded bg-[#0D1117] border border-[#30363D] hover:border-blue-500/50 transition-colors flex items-center gap-3 group"
                                >
                                    <div className="p-2 rounded bg-[#21262D] text-cyan-400 group-hover:text-cyan-300">
                                        <Linkedin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="text-[#94A3B8] block text-[10px] uppercase">LinkedIn Profile</span>
                                        <span className="text-[#F8FAFC] font-semibold text-xs">linkedin.com/in/lynett-maina-cybersec</span>
                                    </div>
                                </a>

                                {/* GitHub */}
                                <a
                                    href={personalInfo.socials.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3.5 rounded bg-[#0D1117] border border-[#30363D] hover:border-blue-500/50 transition-colors flex items-center gap-3 group"
                                >
                                    <div className="p-2 rounded bg-[#21262D] text-emerald-400 group-hover:text-emerald-300">
                                        <Github className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="text-[#94A3B8] block text-[10px] uppercase">GitHub Profile</span>
                                        <span className="text-[#F8FAFC] font-semibold text-xs">github.com/itslynett</span>
                                    </div>
                                </a>

                                {/* Resume */}
                                <a
                                    href={personalInfo.socials.resume}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3.5 rounded bg-[#0D1117] border border-[#30363D] hover:border-blue-500/50 transition-colors flex items-center gap-3 group"
                                >
                                    <div className="p-2 rounded bg-[#21262D] text-amber-400 group-hover:text-amber-300">
                                        <FileText className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="text-[#94A3B8] block text-[10px] uppercase">Engineering Resume</span>
                                        <span className="text-[#F8FAFC] font-semibold text-xs">Download PDF Document</span>
                                    </div>
                                </a>
                            </div>

                            <div className="pt-2 text-xs font-mono text-[#94A3B8] flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-red-400" />
                                <span>Based in Nairobi, Kenya (Available Remote / Worldwide)</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="lg:col-span-7"
                    >
                        <div className="p-6 sm:p-8 rounded bg-[#161B22] border border-[#30363D]">
                            <h3 className="text-xl font-bold text-[#F8FAFC] mb-6">Send an Engineering Inquiry</h3>

                            {submitted ? (
                                <div className="p-6 rounded bg-[#0D1117] border border-emerald-500/40 text-center space-y-3">
                                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                                    <h4 className="text-lg font-bold text-[#F8FAFC]">Message Formatted</h4>
                                    <p className="text-xs text-[#94A3B8]">
                                        Your default email client has been launched to send the message directly to <span className="text-[#F8FAFC] font-mono">{personalInfo.email}</span>.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label htmlFor="name" className="text-[#94A3B8] uppercase block">Your Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                placeholder="e.g. Alex Johnson"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded bg-[#0D1117] border border-[#30363D] text-[#F8FAFC] placeholder:text-[#64748B] focus:outline-none focus:border-blue-500 transition-colors"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label htmlFor="email" className="text-[#94A3B8] uppercase block">Your Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                placeholder="alex@company.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded bg-[#0D1117] border border-[#30363D] text-[#F8FAFC] placeholder:text-[#64748B] focus:outline-none focus:border-blue-500 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="subject" className="text-[#94A3B8] uppercase block">Subject / Topic</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full px-3.5 py-2.5 rounded bg-[#0D1117] border border-[#30363D] text-[#F8FAFC] placeholder:text-[#64748B] focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="message" className="text-[#94A3B8] uppercase block">Message</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            placeholder="Detail the engineering position, architecture scope, or project..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-3.5 py-2.5 rounded bg-[#0D1117] border border-[#30363D] text-[#F8FAFC] placeholder:text-[#64748B] focus:outline-none focus:border-blue-500 transition-colors leading-relaxed"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs font-mono transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-4 h-4" />
                                        <span>Send Message</span>
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
