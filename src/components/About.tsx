"use client";

import React from "react";
import { Award, Briefcase, GraduationCap, MapPin, Sparkles } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Experience", value: "3+ Years", icon: Briefcase, color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
    { label: "Projects Built", value: "6+ Major", icon: Award, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    { label: "Scale Support", value: "1M+ Users", icon: Sparkles, color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            About <span className="text-gradient-cyan-emerald">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block: Bio & Stats */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Passionate developer designing and building scalable systems.
            </h3>
            
            <div className="space-y-4 text-slate-400 leading-relaxed text-base sm:text-lg">
              <p>
                As a Full Stack Developer at <span className="text-cyan-400 font-semibold">Bright Media Solution Pvt. Ltd.</span>, 
                I specialize in crafting robust backend microservices, real-time data sync processes, and pixel-perfect interactive frontends.
              </p>
              <p>
                I thrive on optimizing databases, architecting cloud solutions with AWS, and refining development workflows using CI/CD pipelines. 
                Currently, I am actively exploring AI-assisted development tools and cloud security architectures to push the limits of modern software delivery.
              </p>
            </div>

            {/* Quick Facts List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Ghaziabad, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span>B.Tech CSE Graduate</span>
              </div>
            </div>
          </div>

          {/* Right Block: Stats Grid & Education Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Stats list */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="glass-panel p-4 rounded-xl border border-white/5 text-center flex flex-col items-center justify-center hover:border-cyan-500/25 transition-all duration-300 group"
                  >
                    <div className={`p-2.5 rounded-lg border mb-3 group-hover:scale-110 transition-transform ${stat.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</span>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Education Glass Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-5 hover:border-cyan-500/20 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Education</h4>
                  <p className="text-xs text-slate-500 font-mono">Academic Background</p>
                </div>
              </div>
              
              <div className="space-y-4 border-t border-slate-800/80 pt-4">
                {/* College */}
                <div>
                  <h5 className="font-medium text-slate-200 text-sm sm:text-base">
                    B.Tech in Computer Science & Engineering
                  </h5>
                  <p className="text-xs text-slate-400 mt-0.5">ABES Engineering College</p>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mt-1.5">
                    <span>Jul 2018 – Jun 2022</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-400">Ghaziabad</span>
                  </div>
                </div>

                {/* SBN */}
                <div className="border-t border-slate-900 pt-3">
                  <h5 className="font-medium text-slate-200 text-sm">
                    Intermediate (Class XII)
                  </h5>
                  <p className="text-xs text-slate-400 mt-0.5">S.B.N Public School</p>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mt-1.5">
                    <span>Mar 2016 – Mar 2018</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-400">Ghaziabad</span>
                  </div>
                </div>

                {/* Holy Angels */}
                <div className="border-t border-slate-900 pt-3">
                  <h5 className="font-medium text-slate-200 text-sm">
                    High School (Class X)
                  </h5>
                  <p className="text-xs text-slate-400 mt-0.5">Holy Angels Public School</p>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mt-1.5">
                    <span>Mar 2014 – Mar 2016</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-400">Ghaziabad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
