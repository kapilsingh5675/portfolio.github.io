"use client";

import React from "react";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";

// Custom SVG Icons for Brands to avoid dependency version conflicts
const GithubIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden cyber-grid"
    >
      {/* Decorative Radial Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] radial-glow-cyan animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] radial-glow-purple animate-pulse-slow pointer-events-none" />
      
      {/* Floating Animated Mesh Shapes */}
      <div className="absolute top-1/3 right-10 md:right-20 w-48 h-48 rounded-full bg-cyan-500/5 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 md:left-20 w-56 h-56 rounded-full bg-emerald-500/5 blur-3xl animate-float-delayed pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center sm:px-6 lg:px-8">
        {/* Neon Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 font-mono text-xs md:text-sm animate-pulse mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Open to Work as a Freelancer</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
          Hi 👋, I&apos;m <span className="text-gradient-cyan-emerald">Kapil Gautam</span>
        </h1>

        {/* Animated Subtitle */}
        <h2 className="text-lg sm:text-2xl md:text-3xl font-mono font-medium text-slate-300 mb-6">
          Full Stack Developer
        </h2>

        {/* Bio/Motto paragraph */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10">
          I build scalable web applications, content management systems, CRM platforms, and media streaming solutions. 
          Focused on solving real-world problems using modern web technologies.
        </p>

        {/* Actions Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-cyan-500/20"
          >
            <span>View Featured Projects</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/resume/KapilGautam.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-500 text-white font-semibold transition-all duration-300"
          >
            <span>Download Resume</span>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400 font-semibold transition-all duration-300"
          >
            <span>Let&apos;s Connect</span>
          </a>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/kapilsingh5675"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-slate-800 hover:border-cyan-500/40 bg-slate-900/40 text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
            aria-label="GitHub Profile"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com/in/kapilsingh5675"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-slate-800 hover:border-cyan-500/40 bg-slate-900/40 text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:kapilgautam5675@gmail.com"
            className="p-3 rounded-lg border border-slate-800 hover:border-cyan-500/40 bg-slate-900/40 text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
            aria-label="Email Me"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Down Chevron Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none">
        <ChevronDown className="w-6 h-6 text-slate-500" />
      </div>
    </section>
  );
}
