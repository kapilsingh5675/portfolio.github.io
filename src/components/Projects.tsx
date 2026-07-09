"use client";

import React, { useState } from "react";
import { FolderGit2, ExternalLink, Sparkles, Database, ShieldCheck, Film, MonitorPlay, Users } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projectList = [
    {
      title: "BossStudio",
      category: "fullstack",
      description: "Enterprise content & media management platform enabling seamless ingestion, encoding, and search capability for massive video catalogs.",
      icon: Film,
      highlights: ["Elasticsearch Integration", "Optimized Media Processing", "Role-based Dashboards"],
      tech: ["React.js", "Node.js", "Express.js", "Elasticsearch", "AWS S3"],
      featured: true
    },
    {
      title: "Akash DTH CRM",
      category: "fullstack",
      description: "CRM system designed to support real-time content updates, agent dashboards, and database sync processes at scale.",
      icon: Users,
      highlights: ["Supports 1M+ Active Users", "Real-time Sync & Cache", "Performant Backend REST APIs"],
      tech: ["React.js", "Node.js", "Express.js", "Redis", "MongoDB"],
      featured: true
    },
    {
      title: "Digital Signage System",
      category: "fullstack",
      description: "Video and image streaming management interface designed to schedules live stream playbacks on multiple devices.",
      icon: MonitorPlay,
      highlights: ["AWS S3 + Cloudinary Pipelines", "Live Media Scheduling", "High Availability Asset Delivery"],
      tech: ["React.js", "Node.js", "Express.js", "AWS S3", "Cloudinary"],
      featured: false
    },
    {
      title: "BossCRM & Campaign Manager",
      category: "fullstack",
      description: "Full-cycle Sales CRM providing lead capturing mechanisms, automated notification workflows, and marketing campaigns.",
      icon: FolderGit2,
      highlights: ["Meta Graph API Integration", "OAuth Authentication", "Lead Funnel Analytics"],
      tech: ["React.js", "Node.js", "Express.js", "Meta API", "PostgreSQL"],
      featured: false
    },
    {
      title: "Heart Disease Prediction EDA",
      category: "datascience",
      description: "Exploratory Data Analysis and machine learning modeling to classify heart disease cases using predictive analytics.",
      icon: Database,
      highlights: ["86% Accuracy via KNN Model", "Feature Engineering & Cleaning", "Interactive Visualizations"],
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
      featured: true
    },
    {
      title: "Good Electronic Services",
      category: "fullstack",
      description: "A customer repair request booking system built for service centers, enabling clients to track repairs in real-time.",
      icon: ShieldCheck,
      highlights: ["User Authentication (JWT)", "Service Booking Flow", "MongoDB Database Schema"],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      featured: false
    }
  ];

  const filteredProjects = filter === "all" 
    ? projectList 
    : projectList.filter(proj => proj.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 radial-glow-cyan pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 radial-glow-purple pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Featured <span className="text-gradient-cyan-emerald">Projects</span>
          </h2>
          <p className="max-w-md mx-auto text-slate-400 text-sm sm:text-base">
            A handpicked selection of platforms and data pipelines I&apos;ve built.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg font-mono text-xs sm:text-sm font-medium transition-all ${
                filter === "all" 
                  ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md font-bold" 
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              All Work
            </button>
            <button
              onClick={() => setFilter("fullstack")}
              className={`px-4 py-2 rounded-lg font-mono text-xs sm:text-sm font-medium transition-all ${
                filter === "fullstack" 
                  ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md font-bold" 
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Full Stack
            </button>
            <button
              onClick={() => setFilter("datascience")}
              className={`px-4 py-2 rounded-lg font-mono text-xs sm:text-sm font-medium transition-all ${
                filter === "datascience" 
                  ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md font-bold" 
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Data Science
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/5 flex flex-col justify-between overflow-hidden hover:border-cyan-500/35 hover:shadow-lg hover:shadow-cyan-500/5 group transition-all duration-300"
              >
                <div className="p-6">
                  {/* Title & Category & Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    {project.featured && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-[10px] uppercase font-bold tracking-wider">
                        <Sparkles className="w-3 h-3" />
                        Key Project
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights section */}
                  <div className="space-y-1.5 mb-6">
                    {project.highlights.map((hightlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{hightlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech badges + actions */}
                <div className="px-6 pb-6 border-t border-slate-900 pt-4 bg-slate-950/40">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400 text-[10px] font-mono"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                      {project.category === "fullstack" ? "Full Stack" : "ML / Data"}
                    </span>
                    <a
                      href="https://github.com/kapilsingh5675"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 hover:underline transition-colors font-semibold"
                    >
                      <span>Repository</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
