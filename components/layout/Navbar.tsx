"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X, Shield, Github, Linkedin, Mail } from "lucide-react";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
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

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-blue-600/20 p-2 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                        <Shield className="h-6 w-6 text-blue-500" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">
                        Lynett<span className="text-blue-500">.</span>dev
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
                        <Link href="https://github.com/lynettmaina" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link href="https://linkedin.com/in/lynettmaina" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Button size="sm" onClick={() => window.location.href = "mailto:contact@lynett.dev"}>
                            <Mail className="h-4 w-4 mr-2" />
                            Let's Talk
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-white/10 p-4 transition-all">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="text-base font-medium text-slate-300 hover:text-blue-400 py-2 border-b border-white/5"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-4 mt-4 pt-4">
                            <Link href="https://github.com/lynettmaina" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="https://linkedin.com/in/lynettmaina" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Button className="w-full" onClick={() => window.location.href = "mailto:contact@lynett.dev"}>
                                <Mail className="h-4 w-4 mr-2" />
                                Let's Talk
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
