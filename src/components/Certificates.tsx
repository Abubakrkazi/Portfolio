"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Layers3,
} from "lucide-react";

import { AnimatedSection, Container } from "./ui";

const certificates = [
  {
    title: "Complete Web Development Course",
    organization: "Programming Hero",
    batch: "Batch 10",
    focus: "Web Development",
    description:
      "Completed a comprehensive web development program focused on modern frontend development, responsive design, JavaScript, React, and practical project-based learning.",
  },
  {
    title: "Next Level Web Development Course",
    organization: "Programming Hero",
    batch: "Batch 6 • Level 2",
    focus: "Full Stack Development",
    description:
      "Advanced full-stack development program focused on strengthening backend development, API design, databases, modern application architecture, and production-oriented development practices.",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="
        bg-white
        py-28
        transition-colors
        duration-300
        dark:bg-[#081b29]
      "
    >
      <Container>
        <AnimatedSection>
          {/* ================= HEADING ================= */}
          <div className="text-center">
            <p
              className="
                font-semibold
                uppercase
                tracking-[6px]
                text-[#8245EC]
              "
            >
              Certifications
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-black
                text-slate-900
                md:text-5xl
                dark:text-white
              "
            >
              Courses & Certifications
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                leading-8
                text-slate-600
                dark:text-gray-400
              "
            >
              Professional development programs that have strengthened my
              foundation in modern web development and supported my growth
              toward full-stack development.
            </p>
          </div>

          {/* ================= CARDS ================= */}
          <div
            className="
              mx-auto
              mt-20
              grid
              max-w-5xl
              gap-8
              md:grid-cols-2
            "
          >
            {certificates.map((certificate, index) => (
              <motion.article
                key={certificate.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-50/80
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#8245EC]
                  hover:shadow-[0_20px_50px_rgba(130,69,236,0.15)]
                  dark:border-white/10
                  dark:bg-white/5
                  dark:shadow-none
                  dark:hover:border-[#8245EC]
                  dark:hover:shadow-[0_0_40px_rgba(130,69,236,0.25)]
                "
              >
                {/* Background Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#8245EC]/10
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-[#8245EC]/20
                  "
                />

                <div className="relative flex h-full flex-col">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#8245EC]
                      to-purple-500
                      text-white
                      shadow-[0_10px_30px_rgba(130,69,236,0.30)]
                    "
                  >
                    <Award size={30} />
                  </div>

                  {/* Organization */}
                  <div
                    className="
                      mt-7
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-[#8245EC]
                    "
                  >
                    <CheckCircle2 size={16} />

                    {certificate.organization}
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-4
                      text-2xl
                      font-bold
                      leading-snug
                      text-slate-900
                      transition-colors
                      duration-300
                      group-hover:text-[#8245EC]
                      dark:text-white
                    "
                  >
                    {certificate.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-5
                      flex-1
                      leading-7
                      text-slate-600
                      dark:text-gray-400
                    "
                  >
                    {certificate.description}
                  </p>

                  {/* Information */}
                  <div
                    className="
                      mt-7
                      flex
                      flex-wrap
                      gap-3
                      border-t
                      border-slate-200
                      pt-6
                      dark:border-white/10
                    "
                  >
                    {/* Batch */}
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-[#8245EC]/20
                        bg-[#8245EC]/10
                        px-3
                        py-1.5
                        text-sm
                        font-semibold
                        text-[#8245EC]
                      "
                    >
                      <Layers3 size={14} />

                      {certificate.batch}
                    </span>

                    {/* Focus */}
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        px-3
                        py-1.5
                        text-sm
                        font-medium
                        text-slate-600
                        dark:border-white/10
                        dark:bg-white/10
                        dark:text-gray-300
                      "
                    >
                      <BookOpen size={14} />

                      {certificate.focus}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}