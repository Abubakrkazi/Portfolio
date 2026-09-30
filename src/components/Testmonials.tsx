"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
    image:
      "https://bubt.edu.bd/storage/faculty_images/ali-azgar_18020332029_aaa4a112-a74e-473c-b5ff-33a3daa01b55.jpg",
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
  return (
    <section
      id="testimonials"
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
          {/* ================= HEADING ================= */}
          <div className="text-center">
            <p
              className="
                font-semibold
                uppercase
                tracking-[6px]
                text-[#8245EC]
              "
            >
              References
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
              Professional References
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
              Academic and professional references connected to my
              education, technical development, and professional journey.
            </p>
          </div>

          {/* ================= CARDS ================= */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {references.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className={`
                    group
                    relative
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-3xl
                    border
                    bg-slate-50/80
                    p-8
                    shadow-sm
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-[#8245EC]
                    hover:shadow-[0_20px_50px_rgba(130,69,236,0.15)]
                    dark:bg-white/5
                    dark:shadow-none
                    dark:hover:shadow-[0_0_40px_rgba(130,69,236,0.25)]
                    ${
                      item.relationship
                        ? "border-[#8245EC]/40 dark:border-[#8245EC]/40"
                        : "border-slate-200 dark:border-white/10"
                    }
                  `}
                >
                  {/* Background Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-44
                      w-44
                      rounded-full
                      bg-[#8245EC]/10
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:bg-[#8245EC]/20
                    "
                  />

                  {/* ================= TOP ================= */}
                  <div className="relative flex items-start justify-between gap-4">
                    {/* Profile */}
                    {item.image ? (
                      <div
                        className="
                          relative
                          h-16
                          w-16
                          shrink-0
                          overflow-hidden
                          rounded-2xl
                          border-2
                          border-[#8245EC]/40
                          bg-slate-100
                          shadow-[0_10px_30px_rgba(130,69,236,0.20)]
                          dark:bg-white/5
                        "
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          priority={index === 0}
                          unoptimized
                          className="object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div
                        className="
                          flex
                          h-16
                          w-16
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          from-[#8245EC]
                          to-purple-500
                          text-2xl
                          font-black
                          text-white
                          shadow-[0_10px_30px_rgba(130,69,236,0.30)]
                        "
                      >
                        {item.name.charAt(0)}
                      </div>
                    )}

                    {/* Reference Type */}
                    <span
                      className="
                        rounded-full
                        border
                        border-[#8245EC]/20
                        bg-[#8245EC]/10
                        px-3
                        py-1.5
                        text-right
                        text-[11px]
                        font-semibold
                        text-[#8245EC]
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
                        mt-6
                        inline-flex
                        w-fit
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-[#8245EC]/20
                        bg-[#8245EC]/10
                        px-3
                        py-1.5
                        text-xs
                        font-bold
                        text-[#8245EC]
                      "
                    >
                      <ShieldCheck size={14} />

                      {item.relationship}
                    </div>
                  )}

                  {/* ================= NAME & ROLE ================= */}
                  <div className="relative mt-6">
                    <h3
                      className="
                        text-2xl
                        font-bold
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover:text-[#8245EC]
                        dark:text-white
                      "
                    >
                      {item.name}
                    </h3>

                    <p className="mt-2 font-semibold text-[#8245EC]">
                      {item.role}
                    </p>

                    {item.additionalRole && (
                      <p
                        className="
                          mt-2
                          text-sm
                          font-medium
                          leading-6
                          text-slate-600
                          dark:text-gray-300
                        "
                      >
                        {item.additionalRole}
                      </p>
                    )}
                  </div>

                  {/* ================= DETAILS ================= */}
                  <div className="relative mt-6 flex flex-1 flex-col gap-4">
                    {/* Department */}
                    <div className="flex items-start gap-3">
                      <UserRound
                        size={18}
                        className="mt-1 shrink-0 text-[#8245EC]"
                      />

                      <p
                        className="
                          text-sm
                          leading-6
                          text-slate-600
                          dark:text-gray-400
                        "
                      >
                        {item.department}
                      </p>
                    </div>

                    {/* Organization */}
                    <div className="flex items-start gap-3">
                      <Icon
                        size={18}
                        className="mt-1 shrink-0 text-[#8245EC]"
                      />

                      <p
                        className="
                          text-sm
                          leading-6
                          text-slate-600
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
                      mt-8
                      border-t
                      border-slate-200
                      pt-6
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
                          items-center
                          gap-3
                          break-all
                          text-sm
                          font-medium
                          text-slate-600
                          transition-colors
                          duration-300
                          hover:text-[#8245EC]
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
                          <Mail size={17} />
                        </span>

                        <span>{item.email}</span>
                      </a>
                    ) : (
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          text-sm
                          text-slate-500
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
                          <BriefcaseBusiness size={17} />
                        </span>

                        <span>Professional Reference</span>
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* ================= FOOT NOTE ================= */}
          <p
            className="
              mx-auto
              mt-12
              max-w-2xl
              text-center
              text-sm
              leading-6
              text-slate-500
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