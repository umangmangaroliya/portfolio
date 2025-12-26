"use client";
import About from "@/components/About";
import BackgroundParticles from "@/components/BackgroundParticles";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-red-600 selection:text-white">
      <CustomCursor />
      <BackgroundParticles />
      <Navbar activeSection={activeSection} />

      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-32 relative overflow-hidden">
          <About />
        </section>

        <section
          id="skills"
          className="py-32 bg-white/[0.01] border-y border-white/5 relative"
        >
          <Skills />
        </section>

        {/* <section id="projects" className="py-32">
          <Projects />
        </section> */}

        <section
          id="experience"
          className="py-32 bg-white/[0.01] border-y border-white/5"
        >
          <Experience />
        </section>

        <section id="contact" className="py-32">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
