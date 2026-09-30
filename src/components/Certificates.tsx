"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Award } from "lucide-react";

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

type Certificate = (typeof certificates)[number];

function CertificateCard({
  certificate,
  index,
}: {
  certificate: Certificate;
  index: number;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
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
        y: -8,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:border-[#8245EC]
        hover:shadow-[0_0_40px_rgba(130,69,236,0.20)]
        dark:border-white/10
        dark:bg-white/5
        dark:hover:shadow-[0_0_40px_rgba(130,69,236,0.35)]
      "
    >
      {/* Certificate Image / Fallback */}
      <div
        className="
          relative
          flex
          h-56
          items-center
          justify-center
          overflow-hidden
          bg-slate-100
          dark:bg-white/5
        "
      >
        {!imageError && certificate.image ? (
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            unoptimized
            onError={() => setImageError(true)}
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-[#8245EC]/10
                text-[#8245EC]
              "
            >
              <Award size={32} />
            </div>

            <p className="text-sm font-medium text-slate-500 dark:text-gray-400">
              Certificate image coming soon
            </p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        <h3
          className="
            text-2xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          {certificate.title}
        </h3>

        <p className="mt-4 font-medium text-[#8245EC]">
          {certificate.organization}
        </p>

        <p className="mt-2 text-slate-500 dark:text-gray-400">
          {certificate.year}
        </p>

        {/* Only show button when image exists */}
        {!imageError && certificate.image && (
          <div className="mt-8">
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                View Certificate
              </Button>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="
        bg-white
        py-28
        transition-colors
        duration-300
        dark:bg-[#081b29]
      "
    >
      <Container>
        <AnimatedSection>
          {/* Heading */}
          <div className="text-center">
            <p
              className="
                font-semibold
                uppercase
                tracking-[6px]
                text-[#8245EC]
              "
            >
              Certificates
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-black
                text-slate-900
                md:text-5xl
                dark:text-white
              "
            >
              My Certifications
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                leading-8
                text-slate-600
                dark:text-gray-400
              "
            >
              Certifications that validate my technical knowledge and
              continuous learning journey.
            </p>
          </div>

          {/* Certificates */}
          <div className="mt-20 grid gap-10 md:grid-cols-2">
            {certificates.map((certificate, index) => (
              <CertificateCard
                key={certificate.title}
                certificate={certificate}
                index={index}
              />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}