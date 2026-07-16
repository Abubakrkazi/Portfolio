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
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
  { name: "Prisma", icon: SiPrisma, color: "text-cyan-200" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "Docker", icon: FaDocker, color: "text-blue-400" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#081b29] py-28"
    >
      <Container>
        <AnimatedSection>

          {/* Heading */}

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[6px] text-[#8245EC]">
              My Skills
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              Tech Stack
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            The technologies and tools I use to build modern, scalable, and high-performance web applications.
            </p>

          </div>

          {/* Skills Grid */}

          <div className="mt-20 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {skills.map((skill, index) => {
  const Icon = skill.icon;

  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      whileHover={{
        scale: 1.06,
        y: -8,
      }}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        text-center
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#8245EC]
        hover:shadow-[0_0_30px_rgba(130,69,236,.35)]
      "
    >
      <Icon
        className={`mx-auto text-6xl transition duration-300 group-hover:scale-110 ${skill.color}`}
      />

      <h3 className="mt-6 text-lg font-semibold text-white">
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