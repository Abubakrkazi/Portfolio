"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { AnimatedSection, Button, Container } from "./ui";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Abubakrkazi",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/abubakr-kazi",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/kazi.abir.4878",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kaziabir4878?igsh=dzZyOXNwdXB6dnJ6",
    icon: Instagram,
  },
  {
    name: "X",
    href: "https://x.com/KAZIABIR4VAI",
    icon: Twitter,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/8801615665136",
    icon: MessageCircle,
  },
];

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    if (!form.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully.",
      });

      form.current.reset();

      setTimeout(() => {
        setStatus({
          type: "",
          message: "",
        });
      }, 5000);
    } catch (error) {
      console.error("EMAILJS ERROR:", error);

      setStatus({
        type: "error",
        message:
          "Failed to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactItemClass = `
    group
    flex
    min-w-0
    items-center
    gap-3
    rounded-xl
    border
    border-slate-200
    bg-white
    p-4
    transition-all
    duration-300

    hover:border-[#8245EC]/60
    hover:bg-[#8245EC]/[0.03]
    hover:shadow-[0_10px_30px_rgba(130,69,236,0.08)]

    sm:gap-4
    sm:rounded-2xl
    sm:p-5

    dark:border-white/10
    dark:bg-white/[0.035]
    dark:hover:border-[#8245EC]/70
    dark:hover:bg-[#8245EC]/10
    dark:hover:shadow-[0_10px_30px_rgba(130,69,236,0.12)]
  `;

  const socialClass = `
    group
    flex
    min-w-0
    flex-col
    items-center
    justify-center
    rounded-xl
    border
    border-slate-200
    bg-white
    px-2
    py-4
    text-center
    transition-all
    duration-300

    hover:-translate-y-1
    hover:border-[#8245EC]/60
    hover:bg-[#8245EC]/[0.03]
    hover:shadow-[0_10px_25px_rgba(130,69,236,0.08)]

    sm:rounded-2xl
    sm:px-3
    sm:py-5

    dark:border-white/10
    dark:bg-white/[0.035]
    dark:hover:border-[#8245EC]/70
    dark:hover:bg-[#8245EC]/10
    dark:hover:shadow-[0_10px_25px_rgba(130,69,236,0.12)]
  `;

  const inputClass = `
    w-full
    rounded-xl
    border
    border-slate-200
    bg-white
    px-4
    py-3.5
    text-sm
    text-slate-900
    outline-none
    transition-all
    duration-300

    placeholder:text-slate-400

    focus:border-[#8245EC]
    focus:ring-4
    focus:ring-[#8245EC]/10

    sm:px-5
    sm:py-4
    sm:text-base

    dark:border-white/10
    dark:bg-white/[0.035]
    dark:text-white
    dark:placeholder:text-gray-500
    dark:focus:border-[#8245EC]
    dark:focus:bg-white/[0.05]
  `;

  return (
    <section
      id="contact"
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
        className="
          pointer-events-none
          absolute
          -left-40
          top-24
          h-80
          w-80
          rounded-full
          bg-[#8245EC]/5
          blur-[110px]

          dark:bg-[#8245EC]/10
        "
      />

      <div
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
              Contact
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
              Get In Touch
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
              Have a project in mind, an opportunity to discuss,
              or simply want to connect? I&apos;d love to hear
              from you.
            </p>
          </div>

          {/* ================= CONTENT GRID ================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              mt-10
              grid
              w-full
              max-w-6xl
              grid-cols-1
              items-start
              gap-5

              sm:mt-14
              sm:gap-6

              md:mt-16

              lg:mt-20
              lg:grid-cols-2
              lg:gap-8
            "
          >
            {/* =========================================
                LEFT SIDE
            ========================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="
                min-w-0
                rounded-2xl
                border
                border-slate-200
                bg-slate-50/80
                p-5
                shadow-sm

                sm:rounded-3xl
                sm:p-7

                lg:p-8

                dark:border-white/10
                dark:bg-white/[0.04]
                dark:shadow-none
              "
            >
              <div
                className="
                  mb-5
                  h-1
                  w-12
                  rounded-full
                  bg-[#8245EC]
                "
              />

              <h3
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-slate-900

                  sm:text-3xl

                  dark:text-white
                "
              >
                Let&apos;s Connect
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-slate-600

                  sm:mt-4
                  sm:text-base

                  dark:text-gray-400
                "
              >
                I&apos;m always open to discussing new projects,
                professional opportunities, and interesting ideas.
                Feel free to reach out directly or connect with me
                through social media.
              </p>

              {/* ================= CONTACT DETAILS ================= */}

              <div
                className="
                  mt-7
                  space-y-3

                  sm:mt-8
                  sm:space-y-4
                "
              >
                {/* Email */}

                <a
                  href="mailto:kaziabubakr87@gmail.com"
                  className={contactItemClass}
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#8245EC]/10
                      text-[#8245EC]
                      transition-all
                      duration-300

                      group-hover:bg-[#8245EC]
                      group-hover:text-white

                      sm:h-11
                      sm:w-11
                    "
                  >
                    <Mail size={20} />
                  </div>

                  <div className="min-w-0">
                    <h4
                      className="
                        text-sm
                        font-semibold
                        text-slate-900
                        sm:text-base
                        dark:text-white
                      "
                    >
                      Email
                    </h4>

                    <p
                      className="
                        mt-0.5
                        break-all
                        text-xs
                        text-slate-600

                        min-[375px]:text-sm

                        dark:text-gray-400
                      "
                    >
                      kaziabubakr87@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}

                <a
                  href="tel:+8801615665136"
                  className={contactItemClass}
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#8245EC]/10
                      text-[#8245EC]
                      transition-all
                      duration-300

                      group-hover:bg-[#8245EC]
                      group-hover:text-white

                      sm:h-11
                      sm:w-11
                    "
                  >
                    <Phone size={20} />
                  </div>

                  <div className="min-w-0">
                    <h4
                      className="
                        text-sm
                        font-semibold
                        text-slate-900
                        sm:text-base
                        dark:text-white
                      "
                    >
                      Phone
                    </h4>

                    <p
                      className="
                        mt-0.5
                        text-xs
                        text-slate-600
                        min-[375px]:text-sm
                        dark:text-gray-400
                      "
                    >
                      +880 1615-665136
                    </p>
                  </div>
                </a>

                {/* Location */}

                <div className={contactItemClass}>
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#8245EC]/10
                      text-[#8245EC]

                      sm:h-11
                      sm:w-11
                    "
                  >
                    <MapPin size={20} />
                  </div>

                  <div className="min-w-0">
                    <h4
                      className="
                        text-sm
                        font-semibold
                        text-slate-900
                        sm:text-base
                        dark:text-white
                      "
                    >
                      Location
                    </h4>

                    <p
                      className="
                        mt-0.5
                        text-xs
                        text-slate-600
                        min-[375px]:text-sm
                        dark:text-gray-400
                      "
                    >
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= SOCIAL ================= */}

              <div
                className="
                  mt-8
                  border-t
                  border-slate-200
                  pt-7

                  sm:mt-10
                  sm:pt-8

                  dark:border-white/10
                "
              >
                <h3
                  className="
                    text-lg
                    font-bold
                    text-slate-900

                    sm:text-xl

                    dark:text-white
                  "
                >
                  Connect With Me
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    text-slate-500
                    sm:text-sm
                    dark:text-gray-500
                  "
                >
                  Find me across my professional and social
                  platforms.
                </p>

                <div
                  className="
                    mt-5
                    grid
                    grid-cols-2
                    gap-3

                    min-[430px]:grid-cols-3

                    sm:gap-4
                  "
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={socialClass}
                      >
                        <Icon
                          size={23}
                          className="
                            text-[#8245EC]
                            transition-transform
                            duration-300
                            group-hover:scale-110

                            sm:h-[26px]
                            sm:w-[26px]
                          "
                        />

                        <span
                          className="
                            mt-2
                            max-w-full
                            truncate
                            text-xs
                            font-medium
                            text-slate-700

                            sm:text-sm

                            dark:text-gray-300
                          "
                        >
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* =========================================
                RIGHT SIDE / FORM
            ========================================= */}

            <motion.form
              ref={form}
              onSubmit={sendEmail}
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="
                min-w-0
                rounded-2xl
                border
                border-slate-200
                bg-slate-50/80
                p-5
                shadow-sm

                sm:rounded-3xl
                sm:p-7

                lg:p-8

                dark:border-white/10
                dark:bg-white/[0.04]
                dark:shadow-none
              "
            >
              {/* Form Heading */}

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-4
                "
              >
                <div className="min-w-0">
                  <div
                    className="
                      mb-5
                      h-1
                      w-12
                      rounded-full
                      bg-[#8245EC]
                    "
                  />

                  <h3
                    className="
                      text-2xl
                      font-bold
                      tracking-tight
                      text-slate-900

                      sm:text-3xl

                      dark:text-white
                    "
                  >
                    Send Message
                  </h3>
                </div>

                <div
                  className="
                    hidden
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#8245EC]/10
                    text-[#8245EC]

                    sm:flex
                  "
                >
                  <Send size={21} />
                </div>
              </div>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-slate-600

                  sm:mt-4
                  sm:text-base

                  dark:text-gray-400
                "
              >
                Fill in the form below and I&apos;ll get back to
                you as soon as possible.
              </p>

              {/* ================= FORM FIELDS ================= */}

              <div
                className="
                  mt-7
                  space-y-4
                  sm:mt-8
                  sm:space-y-5
                "
              >
                {/* Name */}

                <div>
                  <label
                    htmlFor="from_name"
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      text-slate-700

                      sm:text-sm

                      dark:text-gray-300
                    "
                  >
                    Your Name
                  </label>

                  <input
                    id="from_name"
                    type="text"
                    name="from_name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Email */}

                <div>
                  <label
                    htmlFor="from_email"
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      text-slate-700

                      sm:text-sm

                      dark:text-gray-300
                    "
                  >
                    Email Address
                  </label>

                  <input
                    id="from_email"
                    type="email"
                    name="from_email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Subject */}

                <div>
                  <label
                    htmlFor="subject"
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      text-slate-700

                      sm:text-sm

                      dark:text-gray-300
                    "
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="What would you like to discuss?"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      text-slate-700

                      sm:text-sm

                      dark:text-gray-300
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Write your message..."
                    required
                    className={`
                      ${inputClass}
                      min-h-[140px]
                      resize-y
                      sm:min-h-[160px]
                    `}
                  />
                </div>

                {/* Submit */}

                <Button
                  type="submit"
                  disabled={loading}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  {loading ? (
                    <>
                      <motion.span
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="
                          h-4
                          w-4
                          rounded-full
                          border-2
                          border-white/30
                          border-t-white
                        "
                      />

                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={17} />
                    </>
                  )}
                </Button>

                {/* ================= STATUS ================= */}

                {status.message && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    role="status"
                    aria-live="polite"
                    className={`
                      flex
                      items-start
                      gap-2.5
                      rounded-xl
                      border
                      px-4
                      py-3
                      text-xs
                      font-medium
                      leading-5

                      sm:text-sm

                      ${
                        status.type === "success"
                          ? `
                            border-emerald-500/20
                            bg-emerald-500/10
                            text-emerald-600
                            dark:text-emerald-400
                          `
                          : `
                            border-red-500/20
                            bg-red-500/10
                            text-red-600
                            dark:text-red-400
                          `
                      }
                    `}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0"
                      />
                    ) : (
                      <AlertCircle
                        size={18}
                        className="mt-0.5 shrink-0"
                      />
                    )}

                    <span>{status.message}</span>
                  </motion.div>
                )}
              </div>
            </motion.form>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}