"use client";

import { useRef, useState } from "react";
import Link from "next/link";
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
} from "lucide-react";

import { AnimatedSection, Button, Container } from "./ui";

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

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
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
        message: "🎉 Thank you! Your message has been sent successfully.",
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
        message: "❌ Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactItemClass = `
    flex
    items-center
    gap-4
    rounded-2xl
    border
    border-slate-200
    bg-white
    p-5
    transition-all
    duration-300
    hover:border-[#8245EC]
    hover:bg-[#8245EC]/5
    dark:border-white/10
    dark:bg-[#081b29]
    dark:hover:bg-[#8245EC]/10
  `;

  const socialClass = `
    group
    flex
    flex-col
    items-center
    justify-center
    rounded-2xl
    border
    border-slate-200
    bg-white
    p-5
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-[#8245EC]
    hover:bg-[#8245EC]/5
    dark:border-white/10
    dark:bg-[#081b29]
    dark:hover:bg-[#8245EC]/10
  `;

  const inputClass = `
    w-full
    rounded-xl
    border
    border-slate-200
    bg-white
    p-4
    text-slate-900
    outline-none
    transition-all
    duration-300
    placeholder:text-slate-400
    focus:border-[#8245EC]
    focus:ring-2
    focus:ring-[#8245EC]/10
    dark:border-white/10
    dark:bg-[#081b29]
    dark:text-white
    dark:placeholder:text-gray-500
  `;

  return (
    <section
      id="contact"
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
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl dark:text-white">
              Get In Touch
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600 dark:text-gray-400">
              Have a project in mind, an opportunity to discuss, or simply want
              to connect? I'd love to hear from you.
            </p>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                border
                border-slate-200
                bg-slate-50
                p-8
                shadow-sm
                backdrop-blur-xl
                dark:border-white/10
                dark:bg-white/5
                dark:shadow-none
              "
            >
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                Let's Connect
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-gray-400">
                I'm always open to discussing new projects, professional
                opportunities, and interesting ideas. Feel free to reach out
                through email or connect with me on social media.
              </p>

              <div className="mt-10 space-y-5">
                {/* Email */}
                <Link
                  href="mailto:kaziabubakr87@gmail.com"
                  className={contactItemClass}
                >
                  <Mail size={24} className="shrink-0 text-[#8245EC]" />

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Email
                    </h4>

                    <p className="break-all text-sm text-slate-600 dark:text-gray-400">
                      kaziabubakr87@gmail.com
                    </p>
                  </div>
                </Link>

                {/* Phone */}
                <Link
                  href="tel:+8801615665136"
                  className={contactItemClass}
                >
                  <Phone size={24} className="shrink-0 text-[#8245EC]" />

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Phone
                    </h4>

                    <p className="text-sm text-slate-600 dark:text-gray-400">
                      +8801615665136
                    </p>
                  </div>
                </Link>

                {/* Location */}
                <div className={contactItemClass}>
                  <MapPin size={24} className="shrink-0 text-[#8245EC]" />

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Location
                    </h4>

                    <p className="text-sm text-slate-600 dark:text-gray-400">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div className="pt-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Connect With Me
                  </h3>

                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <Link
                      href="https://github.com/Abubakrkazi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={socialClass}
                    >
                      <Github size={30} className="text-[#8245EC]" />

                      <span className="mt-2 text-sm text-slate-900 dark:text-white">
                        GitHub
                      </span>
                    </Link>

                    <Link
                      href="https://linkedin.com/in/abubakr-kazi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={socialClass}
                    >
                      <Linkedin size={30} className="text-[#8245EC]" />

                      <span className="mt-2 text-sm text-slate-900 dark:text-white">
                        LinkedIn
                      </span>
                    </Link>

                    <Link
                      href="https://facebook.com/kazi.abir.4878"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={socialClass}
                    >
                      <Facebook size={30} className="text-[#8245EC]" />

                      <span className="mt-2 text-sm text-slate-900 dark:text-white">
                        Facebook
                      </span>
                    </Link>

                    <Link
                      href="https://www.instagram.com/kaziabir4878?igsh=dzZyOXNwdXB6dnJ6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={socialClass}
                    >
                      <Instagram size={30} className="text-[#8245EC]" />

                      <span className="mt-2 text-sm text-slate-900 dark:text-white">
                        Instagram
                      </span>
                    </Link>

                    <Link
                      href="https://x.com/KAZIABIR4VAI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={socialClass}
                    >
                      <Twitter size={30} className="text-[#8245EC]" />

                      <span className="mt-2 text-sm text-slate-900 dark:text-white">
                        X
                      </span>
                    </Link>

                    <Link
                      href="https://wa.me/8801615665136"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={socialClass}
                    >
                      <MessageCircle
                        size={30}
                        className="text-[#8245EC]"
                      />

                      <span className="mt-2 text-sm text-slate-900 dark:text-white">
                        WhatsApp
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                border
                border-slate-200
                bg-slate-50
                p-8
                shadow-sm
                backdrop-blur-xl
                dark:border-white/10
                dark:bg-white/5
                dark:shadow-none
              "
            >
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                Send Message
              </h3>

              <p className="mt-4 text-slate-600 dark:text-gray-400">
                Fill in the form below and I'll reply as soon as possible.
              </p>

              <div className="mt-8 space-y-6">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className={inputClass}
                />

                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className={inputClass}
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className={inputClass}
                />

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  required
                  className={inputClass}
                />

                <Button
                  type="submit"
                  className="w-full justify-center"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>

                {status.message && (
                  <p
                    className={`mt-4 text-center text-sm font-medium ${
                      status.type === "success"
                        ? "text-green-500 dark:text-green-400"
                        : "text-red-500 dark:text-red-400"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </motion.form>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}