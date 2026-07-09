import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex flex-col min-h-screen">
        {/* Hero Banner Section */}
        <Hero />

        {/* About Info Section */}
        <About />

        {/* Technical Skills Section */}
        <TechStack />

        {/* Work Timeline Section */}
        <Experience />

        {/* Portfolio Projects Section */}
        <Projects />

        {/* Contact Form Section */}
        <Contact />
      </main>
    </>
  );
}
