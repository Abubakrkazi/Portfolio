"use client";

import { motion } from "framer-motion";

import { AnimatedSection, Container } from "./ui";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiFirebase,
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
      <Container>
        <AnimatedSection>
          {/* ================= HEADING ================= */}
          <div className="mx-auto w-full max-w-3xl px-1 text-center sm:px-0">
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
                leading-6
                text-slate-600
                sm:mt-6
                sm:text-base
                sm:leading-8
                dark:text-gray-400
              "
            >
              The technologies and tools I use to build modern, scalable, and
              high-performance web applications.
            </p>
          </div>

          {/* ================= SKILLS GRID ================= */}
          <div
            className="
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
                    y: 30,
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
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group
                    flex
                    min-w-0
                    w-full
                    flex-col
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-2
                    py-5
                    text-center
                    shadow-sm
                    transition-all
                    duration-300

                    hover:border-[#8245EC]
                    hover:shadow-[0_0_25px_rgba(130,69,236,.20)]

                    sm:rounded-3xl
                    sm:px-4
                    sm:py-7

                    md:p-8

                    dark:border-white/10
                    dark:bg-white/5
                    dark:shadow-none
                    dark:hover:border-[#8245EC]
                    dark:hover:shadow-[0_0_30px_rgba(130,69,236,.30)]
                  "
                >
                  {/* Icon */}
                  <Icon
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

                  {/* Skill Name */}
                  <h3
                    className="
                      mt-3
                      max-w-full
                      break-words
                      text-sm
                      font-semibold
                      leading-5
                      text-slate-900
                      sm:mt-5
                      sm:text-base
                      md:mt-6
                      md:text-lg
                      dark:text-white
                    "
                  >
                    {skill.name}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}