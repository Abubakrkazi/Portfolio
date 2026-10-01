"use client";

import { useEffect, useState } from "react";

import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import FloatingBackground from "@/components/FloatingBackground";

import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import GitHubSection from "@/components/github/GitHubSection";
import Certificates from "@/components/Certificates";
import Blogs from "@/components/Blogs";
import Testmonials from "@/components/Testmonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomeClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />

      <main
        className="
          relative
          min-h-screen
          overflow-x-hidden
          bg-[var(--background)]
          text-[var(--foreground)]
        "
      >
        <ScrollProgress />
        <FloatingBackground />
        <CursorGlow />

        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <GitHubSection />
        <Certificates />
        <Blogs />
        <Testmonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}