"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  GraduationCap,
  MapPin,
  School,
  University,
} from "lucide-react";

import { AnimatedSection, Container } from "./ui";

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Bangladesh University of Business and Technology (BUBT)",
    location: "Mirpur-2, Dhaka-1216, Bangladesh",
    duration: "2022 - 2026",
    description:
      "Completed a Bachelor's degree in Computer Science and Engineering, building a strong foundation in Software Development, Data Structures and Algorithms, Database Systems, Artificial Intelligence, and modern web technologies.",
    icon: University,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Gopalganj Government College",
    location: "Gopalganj, Bangladesh",
    duration: "2018 - 2020",
    description:
      "Completed Higher Secondary education in the Science stream, developing a strong foundation in Mathematics, Physics, and analytical problem-solving.",
    icon: GraduationCap,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Dighirjan Secondary School & College",
    location: "Nazirpur, Pirojpur, Bangladesh",
    duration: "2013 - 2018",
    description:
      "Completed Secondary education with a strong foundation in Science and developed an early interest in technology and computer science.",
    icon: School,
  },
];

export default function Education() {
  return (
    <section
      id="education"
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
              Education
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
              Academic Journey
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
              My educational background and academic foundation in computer
              science, software development, and problem-solving.
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
            {/* Timeline Line - Mobile */}
            <div
              className="
                absolute
                bottom-8
                left-[19px]
                top-8
                w-px
                bg-gradient-to-b
                from-[#8245EC]
                via-[#8245EC]/40
                to-transparent

                sm:left-[23px]

                lg:hidden
              "
            />

            {/* Timeline Line - Desktop */}
            <div
              className="
                absolute
                bottom-10
                left-[27px]
                top-10
                hidden
                w-px
                bg-gradient-to-b
                from-[#8245EC]
                via-[#8245EC]/40
                to-transparent

                lg:block
              "
            />

            <div
              className="
                space-y-5
                sm:space-y-6
                lg:space-y-8
              "
            >
              {education.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.degree}
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
                        border-[#8245EC]/30
                        bg-white
                        text-[#8245EC]
                        shadow-[0_5px_20px_rgba(130,69,236,0.12)]
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

                        dark:border-[#8245EC]/40
                        dark:bg-[#0a2030]
                        dark:shadow-[0_5px_25px_rgba(130,69,236,0.15)]
                        dark:group-hover:bg-[#8245EC]
                      "
                    >
                      <Icon
                        size={20}
                        className="
                          sm:h-[22px]
                          sm:w-[22px]
                          lg:h-6
                          lg:w-6
                        "
                      />
                    </div>

                    {/* ================= EDUCATION CARD ================= */}

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
                        {/* ================= TOP ================= */}

                        <div
                          className="
                            flex
                            min-w-0
                            flex-col
                            gap-4

                            md:flex-row
                            md:items-start
                            md:justify-between
                            md:gap-6
                          "
                        >
                          <div className="min-w-0 md:pr-4">
                            {/* Degree */}

                            <h3
                              className="
                                max-w-[90%]
                                break-words
                                text-lg
                                font-bold
                                leading-snug
                                text-slate-900
                                transition-colors
                                duration-300

                                group-hover:text-[#8245EC]

                                min-[375px]:text-xl

                                sm:max-w-full
                                sm:text-2xl

                                dark:text-white
                              "
                            >
                              {item.degree}
                            </h3>

                            {/* Institution */}

                            <div
                              className="
                                mt-3
                                flex
                                min-w-0
                                items-start
                                gap-2
                                text-sm
                                font-semibold
                                leading-6
                                text-[#8245EC]

                                sm:mt-4
                                sm:text-[15px]
                              "
                            >
                              <GraduationCap
                                size={17}
                                className="
                                  mt-1
                                  shrink-0
                                "
                              />

                              <span className="min-w-0">
                                {item.institution}
                              </span>
                            </div>

                            {/* Location */}

                            <div
                              className="
                                mt-2
                                flex
                                min-w-0
                                items-start
                                gap-2
                                text-xs
                                leading-5
                                text-slate-500

                                sm:text-sm

                                dark:text-gray-400
                              "
                            >
                              <MapPin
                                size={15}
                                className="
                                  mt-0.5
                                  shrink-0
                                  text-[#8245EC]
                                "
                              />

                              <span>{item.location}</span>
                            </div>
                          </div>

                          {/* ================= DURATION ================= */}

                          <div
                            className="
                              flex
                              w-fit
                              shrink-0
                              items-center
                              gap-1.5
                              rounded-full
                              border
                              border-[#8245EC]/20
                              bg-[#8245EC]/10
                              px-3
                              py-1.5
                              text-xs
                              font-semibold
                              text-[#8245EC]

                              sm:gap-2
                              sm:px-4
                              sm:py-2
                              sm:text-sm

                              dark:bg-[#8245EC]/15
                              dark:text-[#c8a8ff]
                            "
                          >
                            <CalendarDays
                              size={14}
                              className="shrink-0"
                            />

                            <span>{item.duration}</span>
                          </div>
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