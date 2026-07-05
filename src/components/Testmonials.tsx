"use client";

import { motion } from "framer-motion";
import { AnimatedSection, Container } from "./ui";

const testimonials = [
  {
    name: "John Smith",
    role: "Senior Software Engineer",
    company: "Google",
    review:
      "Kazi is a highly motivated developer with excellent problem-solving skills. His work quality is impressive.",
  },
  {
    name: "Sarah Johnson",
    role: "Tech Lead",
    company: "Microsoft",
    review:
      "Very professional and dedicated. His projects demonstrate strong frontend and backend expertise.",
  },
  {
    name: "David Wilson",
    role: "Product Manager",
    company: "Amazon",
    review:
      "Excellent communication and technical skills. I highly recommend working with him.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#081b29] py-28"
    >
      <Container>

        <AnimatedSection>

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[6px] text-[#8245EC]">
              Testimonials
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              What People Say
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
              Feedback from colleagues, mentors and clients I've
              worked with.
            </p>

          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {testimonials.map((item, index) => (

              <motion.div
                key={item.name}
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
                  duration: .5,
                  delay: index * .15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#8245EC]
                hover:shadow-[0_0_40px_rgba(130,69,236,.35)]
                "
              >

                <div
                  className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#8245EC]
                  text-2xl
                  font-bold
                  text-white
                  "
                >

                  {item.name.charAt(0)}

                </div>

                <p className="mt-6 leading-8 text-gray-400">

                  "{item.review}"

                </p>

                <h3 className="mt-8 text-xl font-bold text-white">

                  {item.name}

                </h3>

                <p className="mt-2 text-[#8245EC]">

                  {item.role}

                </p>

                <p className="text-gray-500">

                  {item.company}

                </p>

              </motion.div>

            ))}

          </div>

        </AnimatedSection>

      </Container>
    </section>
  );
}