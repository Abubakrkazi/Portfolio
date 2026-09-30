"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  Download,
  Mail,
  Github,
  Linkedin,
  Facebook,
  ChevronDown,
} from "lucide-react";

import { AnimatedSection, Button, Container } from "./ui";

export default function Hero() {
  const socialClass = `
    flex
    h-13
    w-13
    items-center
    justify-center
    rounded-full
    border
    border-slate-300
    bg-slate-100
    text-slate-700
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-[#8245EC]
    hover:bg-[#8245EC]
    hover:text-white
    hover:shadow-[0_0_25px_rgba(130,69,236,0.40)]
    dark:border-white/10
    dark:bg-white/5
    dark:text-white
  `;

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-white
        pt-28
        text-slate-900
        transition-colors
        duration-300
        dark:bg-[#081b29]
        dark:text-white
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#8245EC]/15
          blur-[160px]
          dark:bg-[#8245EC]/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-[380px]
          w-[380px]
          rounded-full
          bg-cyan-500/10
          blur-[160px]
        "
      />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* ================= LEFT ================= */}
          <AnimatedSection>
            {/* Availability */}
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                mb-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-green-500/30
                bg-green-500/10
                px-5
                py-2
              "
            >
              <span
                className="
                  h-3
                  w-3
                  animate-pulse
                  rounded-full
                  bg-green-500
                "
              />

              <span
                className="
                  text-sm
                  font-medium
                  text-green-600
                  dark:text-green-400
                "
              >
                Available for Full-Time Opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <h1
              className="
                text-5xl
                font-black
                leading-tight
                text-slate-900
                md:text-7xl
                dark:text-white
              "
            >
              Hi,
              <br />
              I&apos;m

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#8245EC]
                  via-purple-400
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                Abubakr Kazi
              </span>
            </h1>

            {/* Typewriter */}
            <div className="mt-8 h-16">
              <TypeAnimation
sequence={[
  "React.js Developer",
  2000,
  "Frontend Developer",
  2000,
  "Next.js Developer",
  2000,
  "Aspiring Full Stack Developer",
  2000,
]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="
                  text-2xl
                  font-bold
                  text-slate-800
                  sm:text-3xl
                  dark:text-white
                "
              />
            </div>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-xl
                leading-8
                text-slate-600
                dark:text-gray-400
              "
            >
I&apos;m a React.js Developer focused on building modern, responsive, and
user-friendly web applications with React, Next.js, TypeScript, and Tailwind
CSS. I&apos;m currently expanding my backend skills with Node.js, Express,
databases, and API development as I grow toward full-stack development. I
enjoy solving real-world problems, building practical digital products, and
continuously improving my skills with modern web technologies.
            </p>

            {/* Tech Stack */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "PostgreSQL",
                "Prisma ORM"
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-[#8245EC]/20
                    bg-[#8245EC]/10
                    px-5
                    py-2
                    text-sm
                    font-medium
                    text-[#8245EC]
                    transition-all
                    duration-300
                    hover:border-[#8245EC]
                    hover:bg-[#8245EC]
                    hover:text-white
                    dark:text-[#d8c3ff]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-5">
              {/* Resume */}
              <Link
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="group">
                  <Download
                    size={20}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                    "
                  />

                  <span className="ml-2">
                    Download Resume
                  </span>
                </Button>
              </Link>

              {/* Hire Me */}
              <Link href="/contact">
                <Button
                  className="
                    group
                    border
                    border-[#8245EC]
                    bg-transparent
                    text-[#8245EC]
                    transition-all
                    duration-300
                    hover:bg-[#8245EC]
                    hover:text-white
                    hover:shadow-[0_0_25px_rgba(130,69,236,0.45)]
                    dark:text-white
                  "
                >
                  <Mail
                    size={20}
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <span className="ml-2">
                    Hire Me
                  </span>
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          {/* ================= RIGHT ================= */}
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col items-center justify-center">
              {/* Profile */}
              <div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                "
              >
                {/* Large Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    h-[320px]
                    w-[320px]
                    rounded-full
                    bg-[#8245EC]/20
                    blur-[100px]
                    sm:h-[380px]
                    sm:w-[380px]
                    lg:h-[430px]
                    lg:w-[430px]
                  "
                />

                {/* Outer Ring */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    h-[320px]
                    w-[320px]
                    rounded-full
                    border
                    border-[#8245EC]/15
                    sm:h-[380px]
                    sm:w-[380px]
                    lg:h-[440px]
                    lg:w-[440px]
                  "
                />

                {/* Second Ring */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    h-[305px]
                    w-[305px]
                    rounded-full
                    border
                    border-[#8245EC]/10
                    sm:h-[365px]
                    sm:w-[365px]
                    lg:h-[425px]
                    lg:w-[425px]
                  "
                />

                {/* Animated Profile Image */}
                <motion.div
                  animate={{
                    y: [-7, 7, -7],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    z-10
                    rounded-full
                    bg-gradient-to-br
                    from-[#8245EC]
                    via-purple-500
                    to-cyan-400
                    p-[4px]
                    shadow-[0_0_45px_rgba(130,69,236,0.40)]
                  "
                >
                  <div
                    className="
                      overflow-hidden
                      rounded-full
                      bg-white
                      dark:bg-[#081b29]
                    "
                  >
                    <Image
  src="/images/profile.png"
  alt="Abubakr Kazi"
  width={400}
  height={400}
  priority
  unoptimized
  className="
    h-[280px]
    w-[280px]
    rounded-full
    object-cover
    object-top
    sm:h-[340px]
    sm:w-[340px]
    lg:h-[400px]
    lg:w-[400px]
  "
/>
                  </div>
                </motion.div>
              </div>

              {/* Social Icons */}
              <div className="mt-12 flex justify-center gap-4 sm:gap-5">
                {/* GitHub */}
                <a
                  href="https://github.com/Abubakrkazi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={socialClass}
                >
                  <Github size={22} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/abubakr-kazi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={socialClass}
                >
                  <Linkedin size={22} />
                </a>

                {/* Facebook */}
                <a
                  href="https://ln.run/wKLNC"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={socialClass}
                >
                  <Facebook size={22} />
                </a>

                {/* Email */}
                <a
                  href="mailto:kaziabubakr87@gmail.com?subject=Job%20Opportunity"
                  aria-label="Send Email"
                  className={socialClass}
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Down */}
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-5
            left-1/2
            hidden
            -translate-x-1/2
            lg:block
          "
        >
          <a
            href="#about"
            className="
              flex
              flex-col
              items-center
              text-slate-500
              transition
              duration-300
              hover:text-[#8245EC]
              dark:text-gray-400
            "
          >
            <span
              className="
                mb-2
                text-sm
                uppercase
                tracking-widest
              "
            >
              Scroll
            </span>

            <ChevronDown size={30} />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}