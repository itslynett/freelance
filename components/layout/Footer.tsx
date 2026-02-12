import Link from "next/link";
import { Shield, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/10 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Shield className="h-6 w-6 text-blue-500" />
                        <span className="font-bold text-xl text-white">Lynett.dev</span>
                    </div>

                    <div className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} Lynett Maina. All rights reserved.
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="https://github.com/lynettmaina" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link href="https://linkedin.com/in/lynettmaina" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link href="https://twitter.com/lynettmaina" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                            <Twitter className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
