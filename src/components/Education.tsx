"use client";

import { motion } from "framer-motion";

import { AnimatedSection, Container } from "./ui";

const education = [
 {
  degree: "B.Sc. in Computer Science & Engineering",
  institution:
    "Bangladesh University of Business and Technology (BUBT)\nMirpur-2, Dhaka-1216, Bangladesh",
  duration: "2022 - 2026",
  description:
    "Completed a Bachelor's degree in Computer Science and Engineering, building a strong foundation in Software Development, Data Structures and Algorithms, Database Systems, Artificial Intelligence, and modern web technologies.",
},
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution:
      "Gopalganj Government College.\nGopalganj, Bangladesh",
    duration: "2018 - 2020",
    description:
      "Completed Higher Secondary education in the Science stream, developing a strong foundation in Mathematics, Physics, and analytical problem-solving.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution:
      "Dighirjan Secondary School & College.\nNazirpur, Pirojpur, Bangladesh",
    duration: "2013 - 2018",
    description:
      "Completed Secondary education with a strong foundation in Science and developed an early interest in technology and computer science.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
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
              Education
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl dark:text-white">
              Academic Journey
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600 dark:text-gray-400">
              My educational background and academic foundation in computer
              science and software development.
            </p>
          </div>

          {/* Education Cards */}
          <div className="mt-20 space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
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
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-8
                  shadow-sm
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#8245EC]
                  hover:shadow-[0_0_30px_rgba(130,69,236,.15)]
                  dark:border-white/10
                  dark:bg-white/5
                  dark:shadow-none
                  dark:hover:shadow-[0_0_30px_rgba(130,69,236,.25)]
                "
              >
                <div className="flex flex-col justify-between gap-5 md:flex-row">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {item.degree}
                    </h3>

                    <p className="mt-3 whitespace-pre-line font-semibold leading-7 text-[#8245EC]">
                      {item.institution}
                    </p>
                  </div>

                  <span
                    className="
                      h-fit
                      shrink-0
                      rounded-full
                      border
                      border-[#8245EC]/20
                      bg-[#8245EC]/10
                      px-5
                      py-2
                      text-sm
                      font-medium
                      text-[#8245EC]
                      dark:bg-[#8245EC]/20
                      dark:text-[#c8a8ff]
                    "
                  >
                    {item.duration}
                  </span>
                </div>

                <p className="mt-6 leading-8 text-slate-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}