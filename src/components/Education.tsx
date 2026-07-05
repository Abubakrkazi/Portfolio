"use client";

import { motion } from "framer-motion";
import { AnimatedSection, Container } from "./ui";

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Bangladesh University of Business & Technology  ,Mirpur-2,Dhaka-1216",
    duration: "2023 - Present",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science & Engineering with a focus on Software Development, Data Structures, Algorithms, Database Systems and Artificial Intelligence.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Gopalganj Government College, Gopalganj",
    duration: "2020 - 2022",
    description:
      "Completed Higher Secondary education with a Science background, building a strong foundation in Mathematics and Physics.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Dighirjan Seconday School & Collage ,Nazirpur,Pironpur",
   
    duration: "2018 - 2020",
    description:
      "Completed Secondary education with excellent academic performance and developed a strong interest in technology.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#081b29] py-28"
    >
      <Container>

        <AnimatedSection>

          {/* Heading */}

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[6px] text-[#8245EC]">
              Education
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              Academic Journey
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
              My educational background that has shaped my journey
              as a Software Developer.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-20 space-y-8">

            {education.map((item, index) => (

              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                hover:border-[#8245EC]
                transition-all
                duration-300
                "
              >

                <div className="flex flex-col justify-between gap-5 md:flex-row">

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {item.degree}
                    </h3>

                    <p className="mt-3 text-[#8245EC] font-semibold">
                      {item.institution}
                    </p>

                  </div>

                  <span
                    className="
                    rounded-full
                    bg-[#8245EC]/20
                    px-5
                    py-2
                    text-sm
                    text-[#c8a8ff]
                    h-fit
                    "
                  >
                    {item.duration}
                  </span>

                </div>

                <p className="mt-6 leading-8 text-gray-400">
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