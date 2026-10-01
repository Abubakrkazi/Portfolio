"use client";

import { motion } from "framer-motion";

import { AnimatedSection, Container } from "./ui";

import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const skills = [
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500",
  },
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-500",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-slate-900 dark:text-white",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-sky-500",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "text-slate-700 dark:text-gray-300",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-500",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "text-slate-800 dark:text-cyan-200",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "text-yellow-500",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-600",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-slate-900 dark:text-white",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "text-blue-500",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-16
        text-slate-900
        transition-colors
        duration-300

        sm:py-20
        md:py-24
        lg:py-28

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
          -left-40
          top-20
          h-80
          w-80
          rounded-full
          bg-[#8245EC]/5
          blur-[110px]

          dark:bg-[#8245EC]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-80
          w-80
          rounded-full
          bg-cyan-400/5
          blur-[110px]
        "
      />

      <Container>
        <AnimatedSection>
          {/* ================= HEADING ================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              w-full
              max-w-3xl
              px-1
              text-center

              sm:px-0
            "
          >
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[4px]
                text-[#8245EC]

                sm:text-sm
                sm:tracking-[6px]
              "
            >
              My Skills
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
                tracking-tight
                text-slate-900

                sm:mt-4
                sm:text-4xl

                md:text-5xl

                dark:text-white
              "
            >
              Tech Stack
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-slate-600

                sm:mt-6
                sm:text-base
                sm:leading-8

                dark:text-gray-400
              "
            >
              The technologies and tools I use to build modern, responsive,
              and scalable web applications while continuously expanding my
              full-stack development skills.
            </p>
          </div>

          {/* ================= SKILLS GRID ================= */}

          <div
            className="
              relative
              z-10
              mt-10
              grid
              w-full
              grid-cols-2
              gap-3

              sm:mt-14
              sm:gap-5

              md:mt-16
              md:grid-cols-3
              md:gap-6

              lg:mt-20
              lg:grid-cols-4
            "
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(index * 0.035, 0.3),
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    relative
                    flex
                    min-h-[130px]
                    min-w-0
                    w-full
                    flex-col
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50/80
                    px-2
                    py-5
                    text-center
                    shadow-sm
                    transition-all
                    duration-300

                    hover:border-[#8245EC]/70
                    hover:bg-white
                    hover:shadow-[0_12px_30px_rgba(130,69,236,0.12)]

                    sm:min-h-[160px]
                    sm:rounded-3xl
                    sm:px-4
                    sm:py-7

                    md:min-h-[180px]
                    md:p-8

                    dark:border-white/10
                    dark:bg-white/[0.04]
                    dark:shadow-none
                    dark:hover:border-[#8245EC]/70
                    dark:hover:bg-white/[0.055]
                    dark:hover:shadow-[0_12px_30px_rgba(130,69,236,0.16)]
                  "
                >
                  {/* ================= CARD GLOW ================= */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      h-24
                      w-24
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-[#8245EC]/0
                      blur-3xl
                      transition-all
                      duration-500

                      group-hover:bg-[#8245EC]/10

                      sm:h-32
                      sm:w-32

                      dark:group-hover:bg-[#8245EC]/15
                    "
                  />

                  {/* ================= ICON ================= */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      justify-center
                      transition-transform
                      duration-300

                      group-hover:-translate-y-1
                    "
                  >
                    <Icon
                      aria-hidden="true"
                      className={`
                        text-4xl
                        transition-transform
                        duration-300

                        group-hover:scale-110

                        sm:text-5xl
                        md:text-6xl

                        ${skill.color}
                      `}
                    />
                  </div>

                  {/* ================= SKILL NAME ================= */}

                  <h3
                    className="
                      relative
                      z-10
                      mt-3
                      max-w-full
                      break-words
                      text-sm
                      font-semibold
                      leading-5
                      text-slate-900
                      transition-colors
                      duration-300

                      group-hover:text-[#8245EC]

                      sm:mt-5
                      sm:text-base

                      md:mt-6
                      md:text-lg

                      dark:text-white
                    "
                  >
                    {skill.name}
                  </h3>

                  {/* ================= BOTTOM ACCENT ================= */}

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      rounded-full
                      bg-gradient-to-r
                      from-[#8245EC]
                      to-cyan-400
                      transition-all
                      duration-300

                      group-hover:w-1/2
                    "
                  />
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}