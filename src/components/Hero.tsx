"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  ChevronDown,
  Download,
  Facebook,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import { AnimatedSection, Button, Container } from "./ui";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma ORM",
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Abubakrkazi",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abubakr-kazi",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    href: "https://ln.run/wKLNC",
    icon: Facebook,
  },
  {
    name: "Email",
    href: "mailto:kaziabubakr87@gmail.com?subject=Job%20Opportunity",
    icon: Mail,
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const socialClass = `
    group
    flex
    h-10
    w-10
    shrink-0
    items-center
    justify-center
    rounded-full
    border
    border-slate-200
    bg-white
    text-slate-600
    shadow-sm
    transition-all
    duration-300

    hover:-translate-y-1
    hover:border-[#8245EC]
    hover:bg-[#8245EC]
    hover:text-white
    hover:shadow-[0_8px_25px_rgba(130,69,236,0.25)]

    sm:h-11
    sm:w-11

    md:h-12
    md:w-12

    dark:border-white/10
    dark:bg-white/[0.05]
    dark:text-gray-300
    dark:hover:border-[#8245EC]
    dark:hover:bg-[#8245EC]
    dark:hover:text-white
  `;

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        items-center
        overflow-hidden
        bg-white
        pb-16
        pt-24
        text-slate-900
        transition-colors
        duration-300

        sm:pb-20
        sm:pt-28

        lg:pb-24
        lg:pt-28

        dark:bg-[#081b29]
        dark:text-white
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-64
          w-64
          rounded-full
          bg-[#8245EC]/[0.07]
          blur-[90px]

          sm:h-80
          sm:w-80

          lg:h-[420px]
          lg:w-[420px]
          lg:bg-[#8245EC]/10
          lg:blur-[140px]

          dark:bg-[#8245EC]/10
          dark:lg:bg-[#8245EC]/15
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-24
          -right-28
          h-64
          w-64
          rounded-full
          bg-cyan-500/[0.04]
          blur-[90px]

          sm:h-80
          sm:w-80

          lg:h-[380px]
          lg:w-[380px]
          lg:bg-cyan-500/[0.07]
          lg:blur-[140px]

          dark:bg-cyan-500/[0.06]
        "
      />

      <Container>
        <div
          className="
            relative
            z-10
            grid
            w-full
            min-w-0
            grid-cols-1
            items-center
            gap-12

            sm:gap-14

            lg:grid-cols-2
            lg:gap-12

            xl:gap-20
          "
        >
          {/* =========================================
              LEFT
          ========================================= */}

          <AnimatedSection>
            <div
              className="
                mx-auto
                min-w-0
                max-w-2xl
                text-center

                lg:mx-0
                lg:text-left
              "
            >
              {/* Availability */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  mb-5
                  inline-flex
                  max-w-full
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-500/20
                  bg-emerald-500/[0.07]
                  px-3
                  py-2

                  sm:mb-6
                  sm:gap-2.5
                  sm:px-4

                  md:mb-7
                "
              >
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  {!shouldReduceMotion && (
                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-emerald-500
                        opacity-50
                      "
                    />
                  )}

                  <span
                    className="
                      relative
                      inline-flex
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-emerald-500
                    "
                  />
                </span>

                <span
                  className="
                    truncate
                    text-[11px]
                    font-semibold
                    text-emerald-600

                    min-[375px]:text-xs
                    sm:text-sm

                    dark:text-emerald-400
                  "
                >
                  Available for Full-Time Opportunities
                </span>
              </motion.div>

              {/* ================= HEADING ================= */}

              <h1
                className="
                  text-[2.6rem]
                  font-black
                  leading-[1.05]
                  tracking-tight
                  text-slate-900

                  min-[375px]:text-5xl

                  sm:text-6xl
                  sm:leading-[1.05]

                  md:text-7xl

                  lg:text-6xl

                  xl:text-7xl

                  dark:text-white
                "
              >
                Hi,
                <br />
                I&apos;m{" "}
                <span
                  className="
                    mt-1
                    block
                    break-words
                    bg-gradient-to-r
                    from-[#8245EC]
                    via-purple-500
                    to-cyan-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Abubakr Kazi
                </span>
              </h1>

              {/* ================= TYPEWRITER ================= */}

              <div
                className="
                  mt-5
                  flex
                  min-h-[56px]
                  items-start
                  justify-center

                  sm:mt-6
                  sm:min-h-[64px]

                  lg:justify-start
                "
              >
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
                    break-words
                    text-xl
                    font-bold
                    leading-tight
                    text-slate-800

                    min-[375px]:text-[22px]

                    sm:text-2xl
                    md:text-3xl

                    dark:text-white
                  "
                />
              </div>

              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-slate-600

                  sm:mt-5
                  sm:text-[15px]

                  md:text-base
                  md:leading-8

                  lg:mx-0

                  dark:text-gray-400
                "
              >
                I&apos;m a React.js Developer focused on building modern,
                responsive, and user-friendly web applications with React,
                Next.js, TypeScript, and Tailwind CSS. I&apos;m currently
                expanding my backend skills with Node.js, Express, databases,
                and API development as I grow toward full-stack development. I
                enjoy solving real-world problems, building practical digital
                products, and continuously improving my skills with modern web
                technologies.
              </p>

              {/* ================= TECH STACK ================= */}

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  justify-center
                  gap-2

                  sm:mt-7
                  sm:gap-2.5

                  lg:justify-start
                "
              >
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-[#8245EC]/20
                      bg-[#8245EC]/[0.07]
                      px-3
                      py-1.5
                      text-[11px]
                      font-medium
                      text-[#8245EC]
                      transition-all
                      duration-300

                      hover:border-[#8245EC]
                      hover:bg-[#8245EC]
                      hover:text-white

                      sm:px-4
                      sm:py-2
                      sm:text-xs

                      md:text-sm

                      dark:bg-[#8245EC]/10
                      dark:text-[#d8c3ff]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ================= BUTTONS ================= */}

              <div
                className="
                  mt-7
                  grid
                  w-full
                  grid-cols-1
                  gap-3

                  min-[430px]:mx-auto
                  min-[430px]:max-w-md
                  min-[430px]:grid-cols-2

                  sm:mt-8

                  lg:mx-0
                "
              >
                {/* Resume */}

                <Link
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      px-4

                      sm:px-5
                    "
                  >
                    <Download
                      size={18}
                      className="
                        shrink-0
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                      "
                    />

                    <span>Download Resume</span>
                  </Button>
                </Link>

                {/* Hire Me */}

                <Link
                  href="/contact"
                  className="w-full"
                >
                  <Button
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      border
                      border-[#8245EC]
                      bg-transparent
                      px-4
                      text-[#8245EC]
                      shadow-none
                      transition-all
                      duration-300

                      hover:bg-[#8245EC]
                      hover:text-white
                      hover:shadow-[0_8px_25px_rgba(130,69,236,0.25)]

                      sm:px-5

                      dark:text-white
                    "
                  >
                    <Mail
                      size={18}
                      className="
                        shrink-0
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                    <span>Hire Me</span>
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* =========================================
              RIGHT
          ========================================= */}

          <AnimatedSection delay={0.2}>
            <div
              className="
                flex
                min-w-0
                flex-col
                items-center
                justify-center
              "
            >
              {/* ================= PROFILE ================= */}

              <div
                className="
                  relative
                  flex
                  h-[250px]
                  w-[250px]
                  items-center
                  justify-center

                  min-[375px]:h-[280px]
                  min-[375px]:w-[280px]

                  sm:h-[340px]
                  sm:w-[340px]

                  md:h-[380px]
                  md:w-[380px]

                  lg:h-[400px]
                  lg:w-[400px]

                  xl:h-[430px]
                  xl:w-[430px]
                "
              >
                {/* Glow */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    h-[220px]
                    w-[220px]
                    rounded-full
                    bg-[#8245EC]/15
                    blur-[70px]

                    sm:h-[300px]
                    sm:w-[300px]
                    sm:blur-[90px]

                    lg:h-[360px]
                    lg:w-[360px]
                    lg:bg-[#8245EC]/20
                    lg:blur-[110px]

                    dark:bg-[#8245EC]/20
                  "
                />

                {/* Outer Ring */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-[#8245EC]/15

                    dark:border-[#8245EC]/20
                  "
                />

                {/* Inner Ring */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-[10px]
                    rounded-full
                    border
                    border-[#8245EC]/10

                    sm:inset-[12px]

                    dark:border-[#8245EC]/15
                  "
                />

                {/* Profile Image */}

                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [-5, 5, -5],
                        }
                  }
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : {
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                  className="
                    relative
                    z-10
                    rounded-full
                    bg-gradient-to-br
                    from-[#8245EC]
                    via-purple-500
                    to-cyan-400
                    p-[3px]
                    shadow-[0_0_35px_rgba(130,69,236,0.30)]

                    sm:p-[4px]
                    sm:shadow-[0_0_45px_rgba(130,69,236,0.35)]
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
                      sizes="
                        (max-width: 374px) 220px,
                        (max-width: 639px) 250px,
                        (max-width: 767px) 300px,
                        (max-width: 1023px) 340px,
                        380px
                      "
                      className="
                        h-[215px]
                        w-[215px]
                        rounded-full
                        object-cover
                        object-top

                        min-[375px]:h-[245px]
                        min-[375px]:w-[245px]

                        sm:h-[300px]
                        sm:w-[300px]

                        md:h-[340px]
                        md:w-[340px]

                        lg:h-[360px]
                        lg:w-[360px]

                        xl:h-[390px]
                        xl:w-[390px]
                      "
                    />
                  </div>
                </motion.div>
              </div>

              {/* ================= SOCIAL LINKS ================= */}

              <div
                className="
                  mt-7
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-2.5

                  sm:mt-9
                  sm:gap-3

                  lg:mt-10
                "
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  const isEmail = social.name === "Email";

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={
                        isEmail
                          ? undefined
                          : "noopener noreferrer"
                      }
                      aria-label={social.name}
                      title={social.name}
                      className={socialClass}
                    >
                      <Icon
                        size={19}
                        className="
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ================= SCROLL DOWN ================= */}

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, 8, 0],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          className="
            absolute
            bottom-5
            left-1/2
            hidden
            -translate-x-1/2

            xl:block
          "
        >
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="
              group
              flex
              flex-col
              items-center
              text-slate-500
              transition-colors
              duration-300

              hover:text-[#8245EC]

              dark:text-gray-400
              dark:hover:text-[#8245EC]
            "
          >
            <span
              className="
                mb-1
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
              "
            >
              Scroll
            </span>

            <ChevronDown
              size={25}
              className="
                transition-transform
                duration-300
                group-hover:translate-y-1
              "
            />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}