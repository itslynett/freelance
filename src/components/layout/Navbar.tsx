"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Shield, Github, Linkedin, FileText, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Production Products", href: "#production-products" },
    { name: "Personal Projects", href: "#personal-projects" },
    { name: "Academic", href: "#academic-projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: offsetTop - 75,
                behavior: "smooth",
            });
            setIsOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
                isScrolled
                    ? "bg-[#0D1117]/95 border-[#30363D] backdrop-blur-sm py-3"
                    : "bg-[#0D1117]/70 border-transparent py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Brand Logo & Operational Status */}
                <div className="flex items-center gap-4">
                    <Link href="#hero" onClick={(e) => scrollToSection(e, "#hero")} className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 rounded bg-[#161B22] border border-[#30363D] flex items-center justify-center text-blue-500 group-hover:border-blue-500 transition-colors">
                            <Shield className="w-4 h-4" />
                        </div>
                        <span className="font-mono font-bold text-base text-[#F8FAFC] tracking-tight">
                            Lynett Maina<span className="text-blue-500">.dev</span>
                        </span>
                    </Link>

                    <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#161B22] border border-[#30363D] text-[11px] font-mono text-[#94A3B8]">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>Available for Engineering Roles</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs font-mono">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Action Icons */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href={personalInfo.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded bg-[#161B22] border border-[#30363D] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#484f58] transition-colors"
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                    <a
                        href={personalInfo.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded bg-[#161B22] border border-[#30363D] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#484f58] transition-colors"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, "#contact")}
                        className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Contact</span>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 rounded bg-[#161B22] border border-[#30363D] text-[#94A3B8] hover:text-[#F8FAFC]"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Navigation Menu"
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            {isOpen && (
                <div className="lg:hidden fixed inset-x-0 top-[57px] bottom-0 bg-[#0D1117] border-t border-[#30363D] p-6 flex flex-col justify-between overflow-y-auto z-40">
                    <div className="flex flex-col gap-4 font-mono text-sm">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#161B22] border border-[#30363D] text-xs text-[#94A3B8] mb-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span>Available for Engineering Roles</span>
                        </div>

                        {navItems.map((item, idx) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="py-2.5 border-b border-[#21262D] text-[#F8FAFC] hover:text-blue-400 flex items-center justify-between"
                            >
                                <span>{item.name}</span>
                                <span className="text-xs text-[#64748B]">0{idx + 1}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3 pt-6 border-t border-[#30363D]">
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href={personalInfo.socials.github}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded bg-[#161B22] border border-[#30363D] text-[#94A3B8] hover:text-[#F8FAFC]"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href={personalInfo.socials.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded bg-[#161B22] border border-[#30363D] text-[#94A3B8] hover:text-[#F8FAFC]"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, "#contact")}
                            className="w-full py-2.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold text-center"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
