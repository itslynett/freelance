"use client";

import Link from "next/link";
import { Shield, Github, Linkedin, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#0D1117] border-t border-[#30363D] py-12 text-xs font-mono text-[#94A3B8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Brand & Rights */}
                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded bg-[#161B22] border border-[#30363D] flex items-center justify-center text-blue-500">
                        <Shield className="w-3.5 h-3.5" />
                    </div>
                    <div>
                        <span className="text-[#F8FAFC] font-bold">Lynett Maina</span> © {new Date().getFullYear()} — Handcrafted Engineering Portfolio.
                    </div>
                </div>

                {/* Status & Tech Note */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#161B22] border border-[#30363D] text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span>System Status: All Systems Operational</span>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-2 rounded bg-[#161B22] border border-[#30363D] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#484f58] transition-colors"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
