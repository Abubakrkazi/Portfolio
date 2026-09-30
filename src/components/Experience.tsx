"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Server } from "lucide-react";

import { AnimatedSection, Container } from "./ui";


const experiences = [
  {
    period: "February - April",
    title: "Frontend Developer Intern",
    company: "HigzenDev",
    type: "Internship",
    description:
      "Started my professional journey as a Frontend Developer Intern, where I gained hands-on experience building responsive and user-friendly web interfaces. Worked with modern frontend technologies, reusable components, API integration, and real-world development workflows while collaborating on practical software projects.",
    icon: Code2,
  },
  {
    period: "May - Present",
    title: "Software Developer",
    company: "HigzenDev",
    type: "Permanent Position",
    description:
      "Continued with the team in a permanent role after completing my internship. Currently contributing to production-oriented web applications while expanding from frontend development into backend engineering. My primary focus is now on strengthening full-stack development skills, including REST API development, server-side logic, database design and integration, authentication, and scalable backend architecture.",
    icon: Server,
  },
];


export default function Experience() {
  return (
    <section
      id="experience"
      className="
        bg-white
        py-28
        text-slate-900
        transition-colors
        duration-300
        dark:bg-[#081b29]
        dark:text-white
      "
    >
      <Container>
        <AnimatedSection>
          {/* Heading */}
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[6px] text-[#8245EC]">
              Experience
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl dark:text-white">
              Professional Experience
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600 dark:text-gray-400">
              My professional journey in frontend and backend development,
              building modern, reliable, and scalable web applications.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto mt-20 max-w-4xl">
            {/* Vertical Line */}
            <div
              className="
                absolute
                left-5
                top-0
                h-full
                w-[3px]
                rounded-full
                bg-gradient-to-b
                from-[#8245EC]
                via-[#8245EC]/60
                to-[#8245EC]/10
              "
            />

            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={`${item.company}-${item.title}`}
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="relative mb-12 pl-16 last:mb-0"
                >
                  {/* Timeline Icon */}
                  <div
                    className="
                      absolute
                      left-0
                      top-2
                      z-10
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      border-[#8245EC]
                      bg-white
                      text-[#8245EC]
                      shadow-[0_0_20px_rgba(130,69,236,0.25)]
                      dark:bg-[#081b29]
                      dark:shadow-[0_0_20px_rgba(130,69,236,0.40)]
                    "
                  >
                    <Icon size={18} />
                  </div>

                  {/* Experience Card */}
                  <motion.article
                    whileHover={{
                      y: -5,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      p-7
                      shadow-sm
                      transition-all
                      duration-300
                      hover:border-[#8245EC]
                      hover:shadow-[0_15px_40px_rgba(130,69,236,0.15)]
                      dark:border-white/10
                      dark:bg-white/5
                      dark:shadow-none
                      dark:hover:border-[#8245EC]
                      dark:hover:shadow-[0_0_30px_rgba(130,69,236,0.25)]
                    "
                  >
                    {/* Glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-40
                        w-40
                        rounded-full
                        bg-[#8245EC]/10
                        blur-3xl
                      "
                    />

                    <div className="relative">
                      {/* Period + Position Type */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className="
                            rounded-full
                            bg-[#8245EC]/10
                            px-3
                            py-1
                            text-sm
                            font-semibold
                            text-[#8245EC]
                          "
                        >
                          {item.period}
                        </span>

                        <span
                          className="
                            flex
                            items-center
                            gap-1.5
                            text-xs
                            font-medium
                            text-slate-500
                            dark:text-gray-400
                          "
                        >
                          <BriefcaseBusiness size={14} />

                          {item.type}
                        </span>
                      </div>

                      {/* Job Title */}
                      <h3
                        className="
                          mt-5
                          text-2xl
                          font-bold
                          text-slate-900
                          transition-colors
                          duration-300
                          group-hover:text-[#8245EC]
                          dark:text-white
                        "
                      >
                        {item.title}
                      </h3>

                      {/* Company */}
                      <p className="mt-2 text-lg font-semibold text-[#8245EC]">
                        {item.company}
                      </p>

                      {/* Description */}
                      <p
                        className="
                          mt-5
                          leading-8
                          text-slate-600
                          dark:text-gray-400
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}