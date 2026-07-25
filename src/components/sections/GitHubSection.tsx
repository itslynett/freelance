"use client";

import { motion } from "framer-motion";
import { Github, GitCommit, GitPullRequest, Star, GitFork, ExternalLink, ShieldCheck, Activity } from "lucide-react";
import { githubData } from "@/data/portfolio";

export function GitHubSection() {
    // Generate deterministic 52-week activity contribution cells (52 weeks x 7 days)
    const generateContributionGrid = () => {
        const weeks = 52;
        const daysPerWeek = 7;
        const grid = [];

        // Levels: 0 (empty), 1 (light), 2 (mid), 3 (bright), 4 (intense)
        const intensityLevels = [0, 1, 2, 3, 4];
        const colors = {
            0: "bg-[#161B22] border-[#21262D]",
            1: "bg-[#0e4429] border-[#0e4429]",
            2: "bg-[#006d32] border-[#006d32]",
            3: "bg-[#26a641] border-[#26a641]",
            4: "bg-[#39d353] border-[#39d353]"
        };

        for (let w = 0; w < weeks; w++) {
            const weekDays = [];
            for (let d = 0; d < daysPerWeek; d++) {
                // Create realistic commit density pattern
                const isWeekend = d === 0 || d === 6;
                const seed = (w * 7 + d * 13) % 100;
                let level = 0;
                if (seed > 80) level = 4;
                else if (seed > 55) level = 3;
                else if (seed > 30) level = 2;
                else if (seed > 15) level = 1;
                else level = 0;

                if (isWeekend && level > 2) level = 1;

                weekDays.push({ id: `${w}-${d}`, level, color: colors[level as keyof typeof colors] });
            }
            grid.push(weekDays);
        }
        return grid;
    };

    const contributionGrid = generateContributionGrid();

    return (
        <section id="github" className="py-20 border-b border-[#30363D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="flex flex-col gap-1 mb-12">
                    <div className="font-mono text-xs text-blue-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                        <span>08 // CODE ACTIVITY & TELEMETRY</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">GitHub Profile & Activity</h2>
                            <p className="mt-1 text-sm text-[#94A3B8]">
                                Open-source repositories, engineering commit cadence, and code security activity.
                            </p>
                        </div>

                        <a
                            href={githubData.url}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded bg-[#161B22] hover:bg-[#21262D] text-[#F8FAFC] border border-[#30363D] hover:border-[#484f58] font-mono text-xs font-semibold flex items-center gap-2 w-fit transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            <span>Follow @{githubData.username}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#64748B]" />
                        </a>
                    </div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="p-4 rounded bg-[#161B22] border border-[#30363D]">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] mb-1">
                            <Github className="w-4 h-4 text-blue-400" />
                            <span>PUBLIC REPOSITORIES</span>
                        </div>
                        <div className="text-2xl font-mono font-bold text-[#F8FAFC]">{githubData.stats.publicRepos}</div>
                    </div>

                    <div className="p-4 rounded bg-[#161B22] border border-[#30363D]">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] mb-1">
                            <GitCommit className="w-4 h-4 text-emerald-400" />
                            <span>COMMITS THIS YEAR</span>
                        </div>
                        <div className="text-2xl font-mono font-bold text-[#F8FAFC]">{githubData.stats.totalCommits}</div>
                    </div>

                    <div className="p-4 rounded bg-[#161B22] border border-[#30363D]">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] mb-1">
                            <ShieldCheck className="w-4 h-4 text-cyan-400" />
                            <span>SECURITY AUDITS</span>
                        </div>
                        <div className="text-2xl font-mono font-bold text-[#F8FAFC]">{githubData.stats.securityAudits}</div>
                    </div>

                    <div className="p-4 rounded bg-[#161B22] border border-[#30363D]">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] mb-1">
                            <Activity className="w-4 h-4 text-emerald-500" />
                            <span>PRODUCTION UPTIME</span>
                        </div>
                        <div className="text-2xl font-mono font-bold text-[#F8FAFC]">{githubData.stats.uptimeTarget}</div>
                    </div>
                </div>

                {/* GitHub Contribution Graph Box */}
                <div className="p-6 rounded bg-[#161B22] border border-[#30363D] mb-12 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#30363D] pb-3">
                        <div className="flex items-center gap-2 font-mono text-xs text-[#F8FAFC] font-semibold">
                            <Activity className="w-4 h-4 text-emerald-400" />
                            <span>850+ contributions in the last year</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[11px] text-[#94A3B8]">
                            <span>Less</span>
                            <span className="w-3 h-3 rounded-sm bg-[#161B22] border border-[#30363D]"></span>
                            <span className="w-3 h-3 rounded-sm bg-[#0e4429]"></span>
                            <span className="w-3 h-3 rounded-sm bg-[#006d32]"></span>
                            <span className="w-3 h-3 rounded-sm bg-[#26a641]"></span>
                            <span className="w-3 h-3 rounded-sm bg-[#39d353]"></span>
                            <span>More</span>
                        </div>
                    </div>

                    {/* Contribution Grid Container */}
                    <div className="overflow-x-auto pb-2">
                        <div className="flex gap-1.5 min-w-[700px]">
                            {contributionGrid.map((week, wIdx) => (
                                <div key={wIdx} className="flex flex-col gap-1.5">
                                    {week.map((day) => (
                                        <div
                                            key={day.id}
                                            className={`w-3 h-3 rounded-sm border ${day.color} transition-colors`}
                                            title={`Level ${day.level} activity`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pinned Repositories */}
                <div className="space-y-4">
                    <h3 className="font-mono text-xs text-[#F8FAFC] uppercase font-semibold flex items-center gap-2">
                        <Github className="w-4 h-4 text-blue-400" />
                        <span>Pinned Engineering Repositories</span>
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {githubData.pinnedRepos.map((repo) => (
                            <a
                                key={repo.name}
                                href={repo.url}
                                target="_blank"
                                rel="noreferrer"
                                className="p-5 rounded bg-[#161B22] border border-[#30363D] hover:border-[#484f58] transition-all flex flex-col justify-between space-y-4 group"
                            >
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono font-bold text-blue-400 text-sm group-hover:underline flex items-center gap-1.5">
                                            <span>{repo.name}</span>
                                        </span>
                                        <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#F8FAFC]" />
                                    </div>
                                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                                        {repo.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 text-xs font-mono text-[#94A3B8] pt-3 border-t border-[#30363D]">
                                    <span className="flex items-center gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span>{repo.language}</span>
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Star className="w-3.5 h-3.5 text-amber-400" />
                                        <span>{repo.stars}</span>
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <GitFork className="w-3.5 h-3.5 text-[#64748B]" />
                                        <span>{repo.forks}</span>
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
