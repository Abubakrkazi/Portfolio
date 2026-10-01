"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import type { ElementType } from "react";

import { AnimatedSection, Container } from "./ui";

type Reference = {
  name: string;
  role: string;
  department: string;
  organization: string;
  additionalRole?: string;
  relationship?: string;
  email: string | null;
  image?: string;
  type: "Academic Reference" | "Industry Reference";
  icon: ElementType;
};

const references: Reference[] = [
  {
    name: "Ali Azgar",
    role: "Assistant Professor",
    department: "Department of Computer Science & Engineering",
    organization:
      "Bangladesh University of Business and Technology (BUBT)",
    additionalRole: "Assistant Proctor — Office of The Proctor",
    relationship: "Capstone Project Supervisor",
    email: "azgar@bubt.edu.bd",
   
    type: "Academic Reference",
    icon: GraduationCap,
  },
  {
    name: "Ashifur Rahman",
    role: "Lecturer",
    department: "Department of Computer Science & Engineering",
    organization:
      "Bangladesh University of Business and Technology (BUBT)",
    email: "ashifurrahman@bubt.edu.bd",
    type: "Academic Reference",
    icon: GraduationCap,
  },
  {
    name: "Md Rasel Mamun",
    role: "DevOps Engineer",
    department: "Industry Professional",
    organization: "Professional Reference",
    email: null,
    type: "Industry Reference",
    icon: BriefcaseBusiness,
  },
];

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
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
        aria-hidden="true"
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
        aria-hidden="true"
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
              References
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
              Professional References
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
              Academic and professional references connected to my education,
              technical development, and professional journey.
            </p>
          </div>

          {/* ================= CARDS ================= */}

          <div
            className="
              relative
              z-10
              mt-10
              grid
              grid-cols-1
              gap-5

              sm:mt-14
              sm:gap-6

              md:mt-16
              md:grid-cols-2

              xl:mt-20
              xl:grid-cols-3
              xl:gap-7
            "
          >
            {references.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.name}
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
                    duration: 0.45,
                    delay: Math.min(index * 0.08, 0.2),
                    ease: "easeOut",
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -5,
                        }
                  }
                  className={`
                    group
                    relative
                    flex
                    min-w-0
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    bg-slate-50/80
                    p-4
                    shadow-sm
                    transition-all
                    duration-300

                    hover:border-[#8245EC]/60
                    hover:bg-white
                    hover:shadow-[0_18px_45px_rgba(130,69,236,0.12)]

                    sm:rounded-3xl
                    sm:p-6

                    lg:p-7

                    dark:bg-white/[0.04]
                    dark:shadow-none
                    dark:hover:border-[#8245EC]/70
                    dark:hover:bg-white/[0.055]
                    dark:hover:shadow-[0_18px_45px_rgba(130,69,236,0.16)]

                    ${
                      item.relationship
                        ? `
                          border-[#8245EC]/35
                          dark:border-[#8245EC]/40
                        `
                        : `
                          border-slate-200
                          dark:border-white/10
                        `
                    }
                  `}
                >
                  {/* Background Glow */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-40
                      w-40
                      rounded-full
                      bg-[#8245EC]/5
                      blur-3xl
                      transition-all
                      duration-500

                      group-hover:bg-[#8245EC]/10

                      dark:bg-[#8245EC]/10
                      dark:group-hover:bg-[#8245EC]/15
                    "
                  />

                  {/* ================= TOP ================= */}

                  <div
                    className="
                      relative
                      flex
                      min-w-0
                      items-start
                      justify-between
                      gap-3

                      sm:gap-4
                    "
                  >
                    {/* Profile */}

                    {item.image ? (
                      <div
                        className="
                          relative
                          h-14
                          w-14
                          shrink-0
                          overflow-hidden
                          rounded-2xl
                          border
                          border-[#8245EC]/40
                          bg-slate-100
                          shadow-[0_8px_22px_rgba(130,69,236,0.16)]

                          sm:h-16
                          sm:w-16

                          dark:bg-white/[0.05]
                        "
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          priority={index === 0}
                          unoptimized
                          sizes="64px"
                          className="
                            object-cover
                            object-top
                          "
                        />
                      </div>
                    ) : (
                      <div
                        aria-hidden="true"
                        className="
                          flex
                          h-14
                          w-14
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          from-[#8245EC]
                          to-purple-500
                          text-xl
                          font-black
                          text-white
                          shadow-[0_8px_22px_rgba(130,69,236,0.22)]

                          sm:h-16
                          sm:w-16
                          sm:text-2xl
                        "
                      >
                        {item.name.charAt(0)}
                      </div>
                    )}

                    {/* Type */}

                    <span
                      className="
                        max-w-[135px]
                        rounded-full
                        border
                        border-[#8245EC]/20
                        bg-[#8245EC]/[0.07]
                        px-2.5
                        py-1.5
                        text-center
                        text-[9px]
                        font-bold
                        leading-4
                        text-[#8245EC]

                        min-[375px]:max-w-none
                        min-[375px]:text-[10px]

                        sm:px-3
                        sm:text-[11px]

                        dark:bg-[#8245EC]/15
                        dark:text-[#d8c3ff]
                      "
                    >
                      {item.type}
                    </span>
                  </div>

                  {/* ================= RELATIONSHIP ================= */}

                  {item.relationship && (
                    <div
                      className="
                        relative
                        mt-5
                        inline-flex
                        w-fit
                        max-w-full
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-[#8245EC]/20
                        bg-[#8245EC]/[0.07]
                        px-2.5
                        py-1.5
                        text-[10px]
                        font-bold
                        leading-4
                        text-[#8245EC]

                        sm:mt-6
                        sm:gap-2
                        sm:px-3
                        sm:text-xs

                        dark:bg-[#8245EC]/15
                        dark:text-[#d8c3ff]
                      "
                    >
                      <ShieldCheck
                        size={14}
                        className="shrink-0"
                      />

                      <span className="break-words">
                        {item.relationship}
                      </span>
                    </div>
                  )}

                  {/* ================= NAME & ROLE ================= */}

                  <div
                    className="
                      relative
                      mt-5
                      min-w-0

                      sm:mt-6
                    "
                  >
                    <h3
                      className="
                        break-words
                        text-xl
                        font-bold
                        text-slate-900
                        transition-colors
                        duration-300

                        group-hover:text-[#8245EC]

                        sm:text-2xl

                        dark:text-white
                      "
                    >
                      {item.name}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        text-sm
                        font-semibold
                        text-[#8245EC]

                        sm:mt-2
                        sm:text-base
                      "
                    >
                      {item.role}
                    </p>

                    {item.additionalRole && (
                      <p
                        className="
                          mt-2
                          text-xs
                          font-medium
                          leading-6
                          text-slate-600

                          sm:text-sm

                          dark:text-gray-300
                        "
                      >
                        {item.additionalRole}
                      </p>
                    )}
                  </div>

                  {/* ================= DETAILS ================= */}

                  <div
                    className="
                      relative
                      mt-5
                      flex
                      flex-1
                      flex-col
                      gap-3

                      sm:mt-6
                      sm:gap-4
                    "
                  >
                    {/* Department */}

                    <div
                      className="
                        flex
                        min-w-0
                        items-start
                        gap-2.5

                        sm:gap-3
                      "
                    >
                      <UserRound
                        size={17}
                        className="
                          mt-1
                          shrink-0
                          text-[#8245EC]
                        "
                      />

                      <p
                        className="
                          min-w-0
                          break-words
                          text-xs
                          leading-6
                          text-slate-600

                          sm:text-sm

                          dark:text-gray-400
                        "
                      >
                        {item.department}
                      </p>
                    </div>

                    {/* Organization */}

                    <div
                      className="
                        flex
                        min-w-0
                        items-start
                        gap-2.5

                        sm:gap-3
                      "
                    >
                      <Icon
                        size={17}
                        className="
                          mt-1
                          shrink-0
                          text-[#8245EC]
                        "
                      />

                      <p
                        className="
                          min-w-0
                          break-words
                          text-xs
                          leading-6
                          text-slate-600

                          sm:text-sm

                          dark:text-gray-400
                        "
                      >
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  {/* ================= CONTACT ================= */}

                  <div
                    className="
                      relative
                      mt-6
                      border-t
                      border-slate-200
                      pt-5

                      sm:mt-8
                      sm:pt-6

                      dark:border-white/10
                    "
                  >
                    {item.email ? (
                      <a
                        href={`mailto:${item.email}`}
                        aria-label={`Email ${item.name}`}
                        className="
                          group/email
                          flex
                          min-w-0
                          items-center
                          gap-2.5
                          text-xs
                          font-medium
                          text-slate-600
                          transition-colors
                          duration-300

                          hover:text-[#8245EC]

                          sm:gap-3
                          sm:text-sm

                          dark:text-gray-300
                          dark:hover:text-[#8245EC]
                        "
                      >
                        <span
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-[#8245EC]/10
                            text-[#8245EC]
                            transition-all
                            duration-300

                            group-hover/email:bg-[#8245EC]
                            group-hover/email:text-white
                          "
                        >
                          <Mail size={16} />
                        </span>

                        <span
                          className="
                            min-w-0
                            break-all
                          "
                        >
                          {item.email}
                        </span>
                      </a>
                    ) : (
                      <div
                        className="
                          flex
                          items-center
                          gap-2.5
                          text-xs
                          text-slate-500

                          sm:gap-3
                          sm:text-sm

                          dark:text-gray-400
                        "
                      >
                        <span
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-[#8245EC]/10
                            text-[#8245EC]
                          "
                        >
                          <BriefcaseBusiness size={16} />
                        </span>

                        <span>
                          Professional Reference
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Accent */}

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      bg-gradient-to-r
                      from-[#8245EC]
                      to-cyan-400
                      transition-all
                      duration-300

                      group-hover:w-1/2
                    "
                  />
                </motion.article>
              );
            })}
          </div>

          {/* ================= FOOT NOTE ================= */}

          <p
            className="
              relative
              z-10
              mx-auto
              mt-8
              max-w-2xl
              px-2
              text-center
              text-xs
              leading-6
              text-slate-500

              sm:mt-10
              sm:text-sm

              md:mt-12

              dark:text-gray-500
            "
          >
            Reference contact details are provided for academic and
            professional verification purposes.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}