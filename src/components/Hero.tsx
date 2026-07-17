"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  Download,
  Mail,
  Github,
  Linkedin,
  Facebook,
  ChevronDown,
} from "lucide-react";

import {
  AnimatedSection,
  Button,
  Container,
} from "./ui";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      flex
      min-h-screen
      items-center
      overflow-hidden
      bg-[#081b29]
      pt-28
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        left-0
        top-0
        h-[420px]
        w-[420px]
        rounded-full
        bg-[#8245EC]/20
        blur-[160px]
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        h-[380px]
        w-[380px]
        rounded-full
        bg-cyan-500/10
        blur-[160px]
        "
      />

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <AnimatedSection>

            {/* Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: .6,
              }}
              className="
              mb-8
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-green-500/30
              bg-green-500/10
              px-5
              py-2
              "
            >

              <span
                className="
                h-3
                w-3
                animate-pulse
                rounded-full
                bg-green-500
                "
              />

              <span
                className="
                text-sm
                font-medium
                text-green-400
                "
              >

              Available for Full-Time Opportunities

              </span>

            </motion.div>

            {/* Heading */}

            <h1
              className="
              text-5xl
              font-black
              leading-tight
              text-white
              md:text-7xl
              "
            >

              Hi,

              <br />

              I'm

              <span
                className="
                block
                bg-gradient-to-r
                from-[#8245EC]
                via-purple-400
                to-cyan-400
                bg-clip-text
                text-transparent
                "
              >

              Abubakr Kazi

              </span>

            </h1>

            {/* Typewriter */}

            <div className="mt-8 h-16">

              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,

                  "MERN Stack Developer",
                  2000,

                  // "React Developer",
                  // 2000,

                  // "Next.js Developer",
                  // 2000,

                  // "AI Enthusiast",
                  // 2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="
                text-3xl
                font-bold
                text-white
                "
              />

            </div>

            {/* Description */}

            <p
              className="
              mt-8
              max-w-xl
              leading-8
              text-gray-400
              "
            >

             I'm a Full Stack Developer focused on MERN stack development, with a current emphasis on frontend technologies. I enjoy creating intuitive, responsive user interfaces and have built several projects that reflect my ability to work across the entire stack. I'm always eager to expand my knowledge, stay updated with modern web trends, and explore new tools and technologies to sharpen my skills.

            </p>
                        {/* Location */}

            <div className="mt-8 flex items-center gap-3 text-gray-400">

              <span className="text-xl"></span>

            

            </div>

            {/* Tech Stack */}

            <div className="mt-8 flex flex-wrap gap-3">

              {[
                
              ].map((tech) => (

                <span
                  key={tech}
                  className="
                  rounded-full
                  border
                  border-[#8245EC]/20
                  bg-[#8245EC]/10
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-[#d8c3ff]
                  transition-all
                  duration-300
                  hover:border-[#8245EC]
                  hover:bg-[#8245EC]
                  hover:text-white
                  "
                >

                  {tech}

                </span>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-0 flex flex-wrap gap-5">
<Link
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button>
    <Download size={20} />
    <span className="ml-2">Download Resume</span>
  </Button>
</Link>

              <Link href="#contact">

                <Button
                  className="
                  border
                  border-[#8245EC]
                  bg-transparent
                  hover:bg-[#8245EC]
                  "
                >

                  <Mail size={20} />

                  <span className="ml-2">

                    Hire Me

                  </span>

                </Button>

              </Link>

            </div>

          </AnimatedSection>

          {/* RIGHT */}

          <AnimatedSection delay={0.3}>

            <div className="relative flex items-center justify-center">

              {/* Glow */}

              <div
                className="
                absolute
                h-[430px]
                w-[430px]
                rounded-full
                bg-[#8245EC]/20
                blur-[120px]
                "
              />

              {/* Animated Image */}

              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                relative
                rounded-full
                border
                border-[#8245EC]/20
                bg-white/5
                p-5
                backdrop-blur-xl
                "
              >

                <Image
                  src="/profile.jpg"
                  alt="Kazi Abu Bakr"
                  width={380}
                  height={380}
                  priority
                  className="
                  rounded-full
                  border-4
                  border-[#8245EC]
                  object-cover
                  shadow-[0_0_60px_rgba(130,69,236,.45)]
                  "
                />

              </motion.div>

              {/* Outer Ring */}

              <div
                className="
                absolute
                h-[450px]
                w-[450px]
                rounded-full
                border
                border-[#8245EC]/10
                "
              />

            </div>

            {/* Status */}

            <div className="mt-8 flex justify-center">

              <div
                className="
                rounded-full
                border
                border-[#8245EC]/20
                bg-[#8245EC]/10
                px-6
                py-2
                text-sm
                text-[#d8c3ff]
                "
              >
              </div>

            </div>

{/* Social Icons */}

<div className="mt-10 flex justify-center gap-5">

  {/* GitHub */}

  <Link
    href="https://github.com/Abubakrkazi"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="
      cursor-pointer
      rounded-full
      border
      border-slate-300
      bg-slate-100
      p-4
      text-slate-700
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-[#8245EC]
      hover:bg-[#8245EC]
      hover:text-white

      dark:border-white/10
      dark:bg-white/5
      dark:text-white
    "
  >
    <Github size={22} />
  </Link>


  {/* LinkedIn */}

  <Link
    href="https://www.linkedin.com/in/abubakr-kazi"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="
      cursor-pointer
      rounded-full
      border
      border-slate-300
      bg-slate-100
      p-4
      text-slate-700
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-[#8245EC]
      hover:bg-[#8245EC]
      hover:text-white

      dark:border-white/10
      dark:bg-white/5
      dark:text-white
    "
  >
    <Linkedin size={22} />
  </Link>


 {/* Facebook */}

<a
  href="https://www.facebook.com/kazi.abir.4878"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook"
  className="
    relative
    z-10
    cursor-pointer
    rounded-full
    border
    border-white/10
    bg-white/5
    p-4
    text-white
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-[#8245EC]
    hover:bg-[#8245EC]
  "
>
  <Facebook size={22} />
</a>


{/* Email */}

<a
  href="mailto:kaziabubakr87@gmail.com?subject=Job%20Opportunity"
  aria-label="Send Email"
  className="
    relative
    z-10
    cursor-pointer
    rounded-full
    border
    border-white/10
    bg-white/5
    p-4
    text-white
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-[#8245EC]
    hover:bg-[#8245EC]
  "
>
  <Mail size={22} />
</a>
</div>

          </AnimatedSection>
                  </div>

        {/* Scroll Down */}

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          "
        >

          <a
            href="#about"
            className="
            flex
            flex-col
            items-center
            text-gray-400
            transition
            hover:text-[#8245EC]
            "
          >

            <span
              className="
              mb-2
              text-sm
              uppercase
              tracking-widest
              "
            >

              Scroll

            </span>

            <ChevronDown size={30} />

          </a>

        </motion.div>

      </Container>

    </section>
  );
}