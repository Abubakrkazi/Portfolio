"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  AnimatedSection,
  Button,
  Container,
} from "./ui";

const certificates = [
  {
    title: "Complete Web Development",
    organization: "Programming Hero",
    year: "2025",
    image: "/images/certificates/web-development.png",
  },

  {
    title: "React & Next.js",
    organization: "Programming Hero",
    year: "2025",
    image: "/images/certificates/react.png",
  },

  {
    title: "JavaScript Advanced",
    organization: "Programming Hero",
    year: "2025",
    image: "/images/certificates/javascript.png",
  },

  {
    title: "Database & Prisma",
    organization: "Programming Hero",
    year: "2025",
    image: "/images/certificates/database.png",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[#081b29] py-28"
    >
      <Container>

        <AnimatedSection>

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[6px] text-[#8245EC]">
              Certificates
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
              My Certifications
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
              Certifications that validate my technical knowledge
              and continuous learning journey.
            </p>

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-2">

            {certificates.map((certificate, index) => (

              <motion.div
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
                }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#8245EC]
                hover:shadow-[0_0_40px_rgba(130,69,236,.35)]
                "
              >

                <div className="relative h-56 overflow-hidden">

                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                    "
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-white">

                    {certificate.title}

                  </h3>

                  <p className="mt-4 text-[#8245EC]">

                    {certificate.organization}

                  </p>

                  <p className="mt-2 text-gray-400">

                    {certificate.year}

                  </p>

                  <div className="mt-8">

                    <Button>

                      View Certificate

                    </Button>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </AnimatedSection>

      </Container>
    </section>
  );
}