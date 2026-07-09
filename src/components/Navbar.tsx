"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-slate-950/70 border-b border-white/5 backdrop-blur-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-500 text-slate-950 group-hover:scale-105 transition-transform duration-300">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="font-mono text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300">
              KAPIL<span className="text-cyan-400">.</span>DEV
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-md font-mono text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 hover:from-cyan-500/20 hover:to-emerald-500/20 border border-cyan-500/30 hover:border-cyan-500/50 text-cyan-300 hover:text-white font-mono text-sm font-medium transition-all duration-300"
            >
              Hire Me
            </a>
            <a
              href="/resume/KapilGautam.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-750 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 font-mono text-sm font-medium transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-panel border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-md font-mono text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center w-full px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/40 text-cyan-300 font-mono text-base font-medium transition-all"
          >
            Hire Me
          </a>
          <a
            href="/resume/KapilGautam.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block text-center w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono text-base font-medium transition-all"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
