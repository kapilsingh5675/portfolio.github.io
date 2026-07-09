"use client";

import React from "react";
import { Briefcase, Calendar, CheckCircle2, ShieldAlert } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Bright Media Solution Pvt. Ltd.",
      type: "Full-Time",
      duration: "Dec 2022 – Present",
      icon: Briefcase,
      color: "from-cyan-500 to-emerald-500",
      accent: "cyan",
      points: [
        "Architect and implement full stack features using React.js and Node.js microservices.",
        "Design scalable RESTful APIs and integrate complex third-party platforms (e.g., Meta Graph API, OAuth authentication).",
        "Build highly responsive layouts with Tailwind CSS, ensuring 100% cross-device compatibility.",
        "Incorporate cloud infrastructure integrations including AWS S3, Cloudinary, and CloudFront for robust media asset streaming.",
        "Implement Elasticsearch indexes to optimize search functionality across large media datasets.",
        "Develop automated CI/CD workflows using GitHub Actions to streamline staging and production releases."
      ]
    },
    {
      role: "Cyber Security Intern",
      company: "PurpleSynapz",
      type: "Internship",
      duration: "June 2021 – August 2021",
      icon: ShieldAlert,
      color: "from-purple-500 to-indigo-500",
      accent: "purple",
      points: [
        "Analysed network logs and packets using Wireshark to identify vulnerability footprints.",
        "Gained hands-on experience in configuring Checkpoint Firewalls and setting up secure VPN tunnels.",
        "Studied cloud infrastructure security fundamentals specifically on AWS and Microsoft Azure platforms."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Decorative Radial Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow-cyan opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Professional <span className="text-gradient-cyan-emerald">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-6 md:ml-32 space-y-16">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div key={idx} className="relative pl-8 sm:pl-10">
                {/* Timeline Icon Node */}
                <span className={`absolute -left-6 top-1.5 flex items-center justify-center w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 text-white shadow-md shadow-black/50 ring-4 ring-[#030712]`}>
                  <Icon className={`w-5 h-5 ${exp.accent === "cyan" ? "text-cyan-400" : "text-purple-400"}`} />
                </span>

                {/* Left Date Panel (Only visible on MD screens and larger) */}
                <div className="hidden md:block absolute -left-36 top-3 text-right w-24">
                  <span className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    {exp.duration.split(" – ")[0]}
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-1">
                    {exp.duration.split(" – ")[1] || "Present"}
                  </span>
                </div>

                {/* Main Card */}
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-gradient-cyan-emerald">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {/* Mobile Date Tag */}
                      <span className="inline-flex md:hidden items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-slate-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.duration}
                      </span>
                      {/* Job Type Tag */}
                      <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${
                        exp.accent === "cyan" 
                          ? "bg-cyan-500/10 border-cyan-500/25 text-cyan-300" 
                          : "bg-purple-500/10 border-purple-500/25 text-purple-300"
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mt-6">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                        <CheckCircle2 className={`w-4 h-4 mt-1 flex-shrink-0 ${exp.accent === "cyan" ? "text-cyan-400/80" : "text-purple-400/80"}`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
