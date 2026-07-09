"use client";

import React from "react";
import { Code, Server, Database, Cloud, Settings, Layers } from "lucide-react";

export default function TechStack() {
  const categories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-cyan-400 border-cyan-500/20 shadow-cyan-500/5",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Vite"],
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "text-emerald-400 border-emerald-500/20 shadow-emerald-500/5",
      skills: ["Node.js", "Express.js", "REST APIs", "OAuth Auth"],
    },
    {
      title: "Databases & Cache",
      icon: Database,
      color: "text-amber-400 border-amber-500/20 shadow-amber-500/5",
      skills: ["MongoDB", "Redis", "SQL", "Elasticsearch"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-blue-400 border-blue-500/20 shadow-blue-500/5",
      skills: ["AWS EC2", "AWS S3", "CloudFront", "Cloudinary", "GitHub Actions", "CI/CD"],
    },
    {
      title: "Developer Tools",
      icon: Settings,
      color: "text-purple-400 border-purple-500/20 shadow-purple-500/5",
      skills: ["Git", "GitHub", "Jira", "Postman"],
    },
    {
      title: "Core & Architecture",
      icon: Layers,
      color: "text-pink-400 border-pink-500/20 shadow-pink-500/5",
      skills: ["Data Structures & Algos", "Design Patterns", "Meta Graph API", "Machine Learning Basics", "System Design"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 right-0 w-96 h-96 radial-glow-cyan pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 radial-glow-purple pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Technical <span className="text-gradient-cyan-emerald">Stack</span>
          </h2>
          <p className="max-w-md mx-auto text-slate-400 text-sm sm:text-base">
            A comprehensive overview of libraries, frameworks, tools, and paradigms I utilize.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className={`glass-panel p-6 rounded-2xl border ${category.color} hover:border-white/20 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 ${category.color.split(" ")[0]}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-white text-base sm:text-lg">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/80 text-slate-300 hover:text-white font-mono text-xs sm:text-sm transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
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
