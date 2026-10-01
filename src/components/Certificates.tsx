"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Code2,
  Layers3,
  Sparkles,
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
    icon: Code2,
  },
  {
    title: "Next Level Web Development Course",
    organization: "Programming Hero",
    batch: "Batch 6 • Level 2",
    focus: "Full Stack Development",
    description:
      "Advanced full-stack development program focused on strengthening backend development, API design, databases, modern application architecture, and production-oriented development practices.",
    icon: Sparkles,
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
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
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
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
              max-w-3xl
              text-center
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
              Certifications
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
              Courses & Certifications
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
              Professional development programs that have strengthened my
              foundation in modern web development and supported my growth
              toward full-stack development.
            </p>
          </div>

          {/* ================= CARDS ================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              mt-10
              grid
              w-full
              max-w-5xl
              grid-cols-1
              items-stretch
              gap-5
              sm:mt-14
              sm:gap-6
              md:mt-16
              md:grid-cols-2
              lg:mt-20
              lg:gap-8
            "
          >
            {certificates.map((certificate, index) => {
              const Icon = certificate.icon;

              return (
                <motion.article
                  key={certificate.title}
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
                    duration: 0.45,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group
                    relative
                    flex
                    min-w-0
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50/80
                    p-5
                    shadow-sm
                    transition-all
                    duration-300

                    hover:border-[#8245EC]/70
                    hover:shadow-[0_20px_50px_rgba(130,69,236,0.12)]

                    sm:rounded-3xl
                    sm:p-7

                    lg:p-8

                    dark:border-white/10
                    dark:bg-white/[0.04]
                    dark:shadow-none
                    dark:hover:border-[#8245EC]/70
                    dark:hover:bg-white/[0.055]
                    dark:hover:shadow-[0_20px_50px_rgba(130,69,236,0.18)]
                  "
                >
                  {/* Card Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-48
                      w-48
                      rounded-full
                      bg-[#8245EC]/5
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:bg-[#8245EC]/15
                      dark:bg-[#8245EC]/10
                      dark:group-hover:bg-[#8245EC]/20
                    "
                  />

                  {/* Card Number */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      right-5
                      top-5
                      text-4xl
                      font-black
                      tracking-tighter
                      text-slate-200/70
                      sm:right-7
                      sm:top-7
                      sm:text-5xl
                      dark:text-white/[0.04]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div
                    className="
                      relative
                      flex
                      h-full
                      min-w-0
                      flex-col
                    "
                  >
                    {/* ================= ICON ================= */}

                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-br
                          from-[#8245EC]
                          to-purple-500
                          text-white
                          shadow-[0_8px_25px_rgba(130,69,236,0.25)]
                          transition-transform
                          duration-300
                          group-hover:scale-105

                          sm:h-14
                          sm:w-14
                          sm:rounded-2xl
                        "
                      >
                        <Award
                          size={25}
                          className="sm:hidden"
                        />

                        <Award
                          size={29}
                          className="hidden sm:block"
                        />
                      </div>

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-slate-200
                          bg-white
                          text-slate-500
                          sm:h-11
                          sm:w-11
                          dark:border-white/10
                          dark:bg-white/5
                          dark:text-gray-400
                        "
                      >
                        <Icon size={20} />
                      </div>
                    </div>

                    {/* ================= ORGANIZATION ================= */}

                    <div
                      className="
                        mt-6
                        flex
                        min-w-0
                        items-center
                        gap-2
                        text-xs
                        font-semibold
                        text-[#8245EC]
                        sm:mt-7
                        sm:text-sm
                      "
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0"
                      />

                      <span className="truncate">
                        {certificate.organization}
                      </span>
                    </div>

                    {/* ================= TITLE ================= */}

                    <h3
                      className="
                        mt-3
                        max-w-[90%]
                        break-words
                        text-xl
                        font-bold
                        leading-snug
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover:text-[#8245EC]

                        min-[375px]:text-[22px]

                        sm:mt-4
                        sm:text-2xl

                        dark:text-white
                      "
                    >
                      {certificate.title}
                    </h3>

                    {/* ================= DESCRIPTION ================= */}

                    <p
                      className="
                        mt-4
                        flex-1
                        text-sm
                        leading-7
                        text-slate-600
                        sm:mt-5
                        sm:text-[15px]
                        sm:leading-7
                        dark:text-gray-400
                      "
                    >
                      {certificate.description}
                    </p>

                    {/* ================= INFORMATION ================= */}

                    <div
                      className="
                        mt-6
                        flex
                        flex-wrap
                        items-center
                        gap-2
                        border-t
                        border-slate-200
                        pt-5
                        sm:mt-7
                        sm:gap-3
                        sm:pt-6
                        dark:border-white/10
                      "
                    >
                      {/* Batch */}
                      <span
                        className="
                          inline-flex
                          max-w-full
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          border-[#8245EC]/20
                          bg-[#8245EC]/10
                          px-2.5
                          py-1.5
                          text-xs
                          font-semibold
                          text-[#8245EC]

                          sm:gap-2
                          sm:px-3
                          sm:text-sm
                        "
                      >
                        <Layers3
                          size={14}
                          className="shrink-0"
                        />

                        <span>{certificate.batch}</span>
                      </span>

                      {/* Focus */}
                      <span
                        className="
                          inline-flex
                          max-w-full
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          border-slate-200
                          bg-white
                          px-2.5
                          py-1.5
                          text-xs
                          font-medium
                          text-slate-600

                          sm:gap-2
                          sm:px-3
                          sm:text-sm

                          dark:border-white/10
                          dark:bg-white/[0.06]
                          dark:text-gray-300
                        "
                      >
                        <BookOpen
                          size={14}
                          className="shrink-0"
                        />

                        <span>{certificate.focus}</span>
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}