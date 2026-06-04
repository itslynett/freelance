"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X, Shield, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "https://sazara.co.ke/team", isExternal: true },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
        if (isExternal) {
            setIsOpen(false);
            return;
        }
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: offsetTop - 80, // Adjust for fixed header
                behavior: "smooth",
            });
            setIsOpen(false);
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
                    <div className="bg-blue-600/20 p-2 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                        <Shield className="h-6 w-6 text-blue-500" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">
                        Lynett<span className="text-blue-500">.</span>dev
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            target={item.isExternal ? "_blank" : undefined}
                            rel={item.isExternal ? "noopener noreferrer" : undefined}
                            onClick={(e) => scrollToSection(e, item.href, item.isExternal)}
                            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
                        <Link href={personalInfo.socials.github} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link href={personalInfo.socials.linkedin} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Button size="sm" onClick={() => window.location.href = `mailto:${personalInfo.email}`}>
                            <Mail className="h-4 w-4 mr-2" />
                            Let's Talk
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-slate-300 hover:text-white"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="fixed inset-0 z-40 lg:hidden bg-slate-950/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-32 h-screen overflow-y-auto">
                    {/* Background decorative glows */}
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

                    <nav className="flex flex-col gap-6 text-center my-auto relative z-10">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                target={item.isExternal ? "_blank" : undefined}
                                rel={item.isExternal ? "noopener noreferrer" : undefined}
                                onClick={(e) => {
                                    scrollToSection(e, item.href, item.isExternal);
                                    if (item.isExternal) setIsOpen(false);
                                }}
                                className="text-3xl font-bold text-slate-100 hover:text-blue-400 transition-colors py-2 tracking-wider flex items-center justify-center gap-3 group"
                            >
                                <span className="text-xs font-mono text-blue-500 opacity-60">0{index + 1}.</span>
                                <span className="group-hover:translate-x-2 transition-transform duration-300">{item.name}</span>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex flex-col items-center gap-6 border-t border-white/5 pt-8 relative z-10">
                        <div className="flex items-center gap-6">
                            <Link href={personalInfo.socials.github} target="_blank" className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors">
                                <Github className="h-6 w-6" />
                            </Link>
                            <Link href={personalInfo.socials.linkedin} target="_blank" className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors">
                                <Linkedin className="h-6 w-6" />
                            </Link>
                        </div>
                        <Button size="lg" className="w-full max-w-sm gap-2" onClick={() => { setIsOpen(false); window.location.href = `mailto:${personalInfo.email}`; }}>
                            <Mail className="h-5 w-5" />
                            Let's Talk
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
