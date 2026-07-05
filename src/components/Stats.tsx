"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { AnimatedSection, Container } from "./ui";

const stats = [
  {
    number: 20,
    suffix: "+",
    title: "Projects Completed",
  },
  {
    number: 15,
    suffix: "+",
    title: "Technologies",
  },
  {
    number: 1000,
    suffix: "+",
    title: "Hours Coding",
  },
  {
    number: 10,
    suffix: "+",
    title: "Certificates",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#081b29] py-20">
      <Container>

        <AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {stats.map((item, index) => (

              <motion.div
                key={item.title}
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
                }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
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
                hover:shadow-[0_0_35px_rgba(130,69,236,.35)]
                "
              >

                <h2 className="text-5xl font-black text-[#8245EC]">

                  <CountUp
                    end={item.number}
                    duration={3}
                  />

                  {item.suffix}

                </h2>

                <p className="mt-4 text-gray-400">

                  {item.title}

                </p>

              </motion.div>

            ))}

          </div>

        </AnimatedSection>

      </Container>
    </section>
  );
}