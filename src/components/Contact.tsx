"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Phone } from "lucide-react";

// Custom SVG Icons for Brands to avoid dependency version conflicts
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formState.name.trim()) newErrors.name = "Name is required.";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formState.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formState.message.trim()) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    // Mock API call to send message
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
      // Reset success status after 5s
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    // Clear field error on change
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const contacts = [
    {
      label: "Email Me",
      value: "kapilgautam5675@gmail.com",
      href: "mailto:kapilgautam5675@gmail.com",
      icon: Mail,
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      label: "LinkedIn Profile",
      value: "linkedin.com/in/kapilsingh5675",
      href: "https://linkedin.com/in/kapilsingh5675",
      icon: LinkedinIcon,
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      label: "GitHub Repositories",
      value: "github.com/kapilsingh5675",
      href: "https://github.com/kapilsingh5675",
      icon: GithubIcon,
      accent: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      label: "Call Me Directly",
      value: "+91 9625770193",
      href: "tel:+919625770193",
      icon: Phone,
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      label: "Current Location",
      value: "Ghaziabad, India",
      href: null,
      icon: MapPin,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Decorative Radial Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] radial-glow-cyan opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Get In <span className="text-gradient-cyan-emerald">Touch</span>
          </h2>
          <p className="max-w-md mx-auto text-slate-400 text-sm sm:text-base">
            Have a question or want to discuss a project? Drop a message!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Let&apos;s build something amazing together
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              I am open to contract roles, full-time positions, and collaborations on open-source projects. 
              Reach out using the form, or follow my social profiles.
            </p>

            <div className="space-y-4 pt-6">
              {contacts.map((contact, idx) => {
                const Icon = contact.icon;
                const cardContent = (
                  <div className="flex items-center gap-4 p-4 rounded-xl glass-panel border border-white/5 hover:border-cyan-500/25 transition-all duration-300">
                    <div className={`p-2.5 rounded-lg border ${contact.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 uppercase tracking-wider block font-mono">
                        {contact.label}
                      </span>
                      <span className="text-sm font-semibold text-white truncate max-w-[200px] sm:max-w-xs block">
                        {contact.value}
                      </span>
                    </div>
                  </div>
                );

                return contact.href ? (
                  <a
                    key={idx}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:-translate-y-0.5 transition-transform"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div key={idx}>{cardContent}</div>
                );
              })}
            </div>
          </div>

          {/* Right Block: Message Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-950/60 border ${
                      errors.name ? "border-rose-500/50" : "border-slate-800"
                    } hover:border-slate-700 focus:border-cyan-500 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-950/60 border ${
                      errors.email ? "border-rose-500/50" : "border-slate-800"
                    } hover:border-slate-700 focus:border-cyan-500 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-950/60 border ${
                    errors.subject ? "border-rose-500/50" : "border-slate-800"
                  } hover:border-slate-700 focus:border-cyan-500 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm`}
                  placeholder="Inquiry about project design"
                />
                {errors.subject && (
                  <span className="text-[11px] text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-950/60 border ${
                    errors.message ? "border-rose-500/50" : "border-slate-800"
                  } hover:border-slate-700 focus:border-cyan-500 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm resize-none`}
                  placeholder="Hey Kapil, let's discuss..."
                />
                {errors.message && (
                  <span className="text-[11px] text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit / Success / Sending Display */}
              <div className="pt-2">
                {status === "success" ? (
                  <div className="flex items-center gap-2.5 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Thank you! Your message was sent successfully.</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:scale-[1.01] active:scale-[0.99] text-slate-950 font-bold disabled:opacity-50 transition-all duration-200"
                  >
                    <span>{status === "sending" ? "Sending Message..." : "Send Message"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        
        {/* Footer info */}
        <div className="mt-20 border-t border-slate-900 pt-8 text-center text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Kapil Gautam. Built with Next.js, React, Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
}
