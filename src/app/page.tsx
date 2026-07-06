"use client";
import CursorGlow from "@/components/CursorGlow";
import { useEffect, useState } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import Stats from "@/components/Stats";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import GitHubSection from "@/components/github/GitHubSection";
import Certificates from "@/components/Certificates";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingBackground from "@/components/FloatingBackground";
import Testmonials from "@/components/Testmonials";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />
      <ScrollProgress />
       <FloatingBackground />
       <CursorGlow />
      {!loading && (
        <>
        <div className="fixed inset-0 -z-10 overflow-hidden">

  <div
    className="
      absolute
      left-0
      top-0
      h-[500px]
      w-[500px]
      rounded-full
      bg-[#8245EC]/15
      blur-[180px]
    "
  />

  <div
    className="
      absolute
      bottom-0
      right-0
      h-[450px]
      w-[450px]
      rounded-full
      bg-cyan-500/10
      blur-[180px]
    "
  />

</div>
          <Navbar />

          <Hero />
          <Stats />
          <About />

          <Skills />

          <Projects />

          <Experience />

          <Education />
          <GitHubSection/>
          <Certificates />

          <Blogs />
        <Testmonials />
          <Contact />

          <Footer />
        </>
      )}
    </>
  );
}