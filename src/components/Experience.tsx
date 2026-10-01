"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Server,
} from "lucide-react";

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
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-24
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
              Experience
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
              Professional Experience
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
              My professional journey from frontend development toward
              broader full-stack engineering, building modern, reliable,
              and user-focused web applications.
            </p>
          </div>

          {/* ================= TIMELINE ================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              mt-10
              w-full
              max-w-5xl

              sm:mt-14
              md:mt-16
              lg:mt-20
            "
          >
            {/* Timeline Line */}

            <div
              className="
                absolute
                bottom-8
                left-[19px]
                top-8
                w-px
                bg-gradient-to-b
                from-[#8245EC]
                via-[#8245EC]/50
                to-[#8245EC]/10

                sm:left-[23px]

                lg:left-[27px]
              "
            />

            {/* ================= EXPERIENCE ITEMS ================= */}

            <div
              className="
                space-y-5
                sm:space-y-6
                lg:space-y-8
              "
            >
              {experiences.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={`${item.company}-${item.title}`}
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
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className="
                      group
                      relative
                      grid
                      min-w-0
                      grid-cols-[40px_minmax(0,1fr)]
                      gap-3

                      sm:grid-cols-[48px_minmax(0,1fr)]
                      sm:gap-4

                      lg:grid-cols-[56px_minmax(0,1fr)]
                      lg:gap-6
                    "
                  >
                    {/* ================= TIMELINE ICON ================= */}

                    <div
                      className="
                        relative
                        z-20
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#8245EC]/40
                        bg-white
                        text-[#8245EC]
                        shadow-[0_5px_20px_rgba(130,69,236,0.15)]
                        transition-all
                        duration-300

                        group-hover:border-[#8245EC]
                        group-hover:bg-[#8245EC]
                        group-hover:text-white

                        sm:h-12
                        sm:w-12
                        sm:rounded-2xl

                        lg:h-14
                        lg:w-14

                        dark:border-[#8245EC]/50
                        dark:bg-[#0a2030]
                        dark:shadow-[0_5px_25px_rgba(130,69,236,0.18)]
                        dark:group-hover:bg-[#8245EC]
                      "
                    >
                      <Icon
                        size={19}
                        className="
                          sm:h-[22px]
                          sm:w-[22px]

                          lg:h-6
                          lg:w-6
                        "
                      />
                    </div>

                    {/* ================= EXPERIENCE CARD ================= */}

                    <motion.article
                      whileHover={{
                        y: -5,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        relative
                        min-w-0
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-50/80
                        p-4
                        shadow-sm
                        transition-all
                        duration-300

                        hover:border-[#8245EC]/60
                        hover:shadow-[0_15px_40px_rgba(130,69,236,0.10)]

                        sm:rounded-3xl
                        sm:p-6

                        md:p-7
                        lg:p-8

                        dark:border-white/10
                        dark:bg-white/[0.04]
                        dark:shadow-none
                        dark:hover:border-[#8245EC]/70
                        dark:hover:bg-white/[0.055]
                        dark:hover:shadow-[0_15px_40px_rgba(130,69,236,0.15)]
                      "
                    >
                      {/* Background Glow */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-20
                          -top-20
                          h-44
                          w-44
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

                      {/* Number */}

                      <span
                        className="
                          pointer-events-none
                          absolute
                          right-4
                          top-4
                          text-3xl
                          font-black
                          tracking-tighter
                          text-slate-200/70

                          sm:right-6
                          sm:top-5
                          sm:text-4xl

                          lg:text-5xl

                          dark:text-white/[0.04]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="relative min-w-0">
                        {/* ================= META ================= */}

                        <div
                          className="
                            flex
                            max-w-[85%]
                            flex-wrap
                            items-center
                            gap-2

                            sm:max-w-full
                            sm:gap-3
                          "
                        >
                          {/* Period */}

                          <span
                            className="
                              inline-flex
                              items-center
                              gap-1.5
                              rounded-full
                              border
                              border-[#8245EC]/20
                              bg-[#8245EC]/10
                              px-2.5
                              py-1.5
                              text-[11px]
                              font-semibold
                              text-[#8245EC]

                              sm:gap-2
                              sm:px-3
                              sm:text-sm

                              dark:bg-[#8245EC]/15
                              dark:text-[#c8a8ff]
                            "
                          >
                            <CalendarDays
                              size={13}
                              className="shrink-0"
                            />

                            {item.period}
                          </span>

                          {/* Type */}

                          <span
                            className="
                              inline-flex
                              items-center
                              gap-1.5
                              rounded-full
                              border
                              border-slate-200
                              bg-white
                              px-2.5
                              py-1.5
                              text-[11px]
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
                            <BriefcaseBusiness
                              size={13}
                              className="shrink-0"
                            />

                            {item.type}
                          </span>
                        </div>

                        {/* ================= JOB TITLE ================= */}

                        <h3
                          className="
                            mt-4
                            break-words
                            text-xl
                            font-bold
                            leading-snug
                            text-slate-900
                            transition-colors
                            duration-300

                            group-hover:text-[#8245EC]

                            sm:mt-5
                            sm:text-2xl

                            dark:text-white
                          "
                        >
                          {item.title}
                        </h3>

                        {/* ================= COMPANY ================= */}

                        <div
                          className="
                            mt-2
                            flex
                            items-center
                            gap-2
                          "
                        >
                          <span
                            className="
                              h-2
                              w-2
                              shrink-0
                              rounded-full
                              bg-[#8245EC]
                              shadow-[0_0_10px_rgba(130,69,236,0.5)]
                            "
                          />

                          <p
                            className="
                              text-sm
                              font-semibold
                              text-[#8245EC]

                              sm:text-base
                              md:text-lg
                            "
                          >
                            {item.company}
                          </p>
                        </div>

                        {/* ================= DIVIDER ================= */}

                        <div
                          className="
                            my-5
                            h-px
                            w-full
                            bg-slate-200

                            sm:my-6

                            dark:bg-white/10
                          "
                        />

                        {/* ================= DESCRIPTION ================= */}

                        <p
                          className="
                            text-sm
                            leading-7
                            text-slate-600

                            sm:text-[15px]
                            sm:leading-7

                            md:text-base
                            md:leading-8

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
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}