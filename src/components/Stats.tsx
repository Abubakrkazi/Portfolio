"use client";

import CountUp from "react-countup";
import { motion, useReducedMotion } from "framer-motion";
import {
  Award,
  Code2,
  FolderKanban,
  Layers3,
} from "lucide-react";

import { projects } from "./Projects";
import { skills } from "./Skills";
import { AnimatedSection, Container } from "./ui";

const stats = [
  {
    number: projects.length,
    suffix: "+",
    title: "Projects",
    description: "Practical projects built",
    icon: FolderKanban,
  },
  {
    number: skills.length,
    suffix: "+",
    title: "Technologies",
    description: "Tools & technologies",
    icon: Layers3,
  },
  {
    number: 1000,
    suffix: "+",
    title: "Hours Coding",
    description: "Hands-on development",
    icon: Code2,
  },
  {
    number: 2,
    suffix: "",
    title: "Courses",
    description: "Professional programs",
    icon: Award,
  },
];

export default function Stats() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-slate-50
        py-14
        text-slate-900
        transition-colors
        duration-300

        sm:py-16
        md:py-20

        dark:bg-[#071824]
        dark:text-white
      "
    >
      {/* Background decoration */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/2
          h-64
          w-64
          -translate-y-1/2
          rounded-full
          bg-[#8245EC]/5
          blur-[90px]

          dark:bg-[#8245EC]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/2
          h-64
          w-64
          -translate-y-1/2
          rounded-full
          bg-cyan-400/5
          blur-[90px]
        "
      />

      <Container>
        <AnimatedSection>
          <div
            className="
              relative
              z-10
              grid
              w-full
              grid-cols-2
              gap-3

              sm:gap-5

              lg:grid-cols-4
              lg:gap-6
            "
          >
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(index * 0.08, 0.24),
                    ease: "easeOut",
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -5,
                        }
                  }
                  className="
                    group
                    relative
                    flex
                    min-h-[170px]
                    min-w-0
                    flex-col
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-2
                    py-5
                    text-center
                    shadow-sm
                    transition-all
                    duration-300

                    hover:border-[#8245EC]/60
                    hover:shadow-[0_12px_30px_rgba(130,69,236,0.12)]

                    min-[375px]:px-3

                    sm:min-h-[200px]
                    sm:rounded-3xl
                    sm:px-5
                    sm:py-7

                    md:px-6

                    dark:border-white/10
                    dark:bg-white/[0.04]
                    dark:shadow-none
                    dark:hover:border-[#8245EC]/70
                    dark:hover:bg-white/[0.055]
                    dark:hover:shadow-[0_12px_30px_rgba(130,69,236,0.16)]
                  "
                >
                  {/* Hover glow */}

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

                      dark:group-hover:bg-[#8245EC]/15
                    "
                  />

                  {/* Icon */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#8245EC]/15
                      bg-[#8245EC]/10
                      text-[#8245EC]
                      transition-all
                      duration-300

                      group-hover:border-[#8245EC]/30
                      group-hover:bg-[#8245EC]
                      group-hover:text-white

                      sm:h-11
                      sm:w-11
                    "
                  >
                    <Icon
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover:scale-110

                        sm:h-5
                        sm:w-5
                      "
                    />
                  </div>

                  {/* Number */}

                  <div
                    className="
                      relative
                      z-10
                      mt-3
                      flex
                      items-baseline
                      justify-center
                      text-3xl
                      font-black
                      tracking-tight
                      text-[#8245EC]

                      min-[375px]:text-4xl

                      sm:mt-4
                      sm:text-5xl
                    "
                  >
                    <CountUp
                      end={item.number}
                      duration={shouldReduceMotion ? 0 : 2}
                      enableScrollSpy={!shouldReduceMotion}
                      scrollSpyOnce
                    />

                    <span>{item.suffix}</span>
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      relative
                      z-10
                      mt-2
                      break-words
                      text-xs
                      font-bold
                      leading-5
                      text-slate-800

                      min-[375px]:text-sm

                      sm:mt-3
                      sm:text-base

                      dark:text-white
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      relative
                      z-10
                      mt-1
                      hidden
                      text-xs
                      leading-5
                      text-slate-500

                      min-[375px]:block

                      sm:text-sm

                      dark:text-gray-400
                    "
                  >
                    {item.description}
                  </p>

                  {/* Bottom accent */}

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