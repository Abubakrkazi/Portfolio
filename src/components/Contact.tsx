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
       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
     );

     setStatus({
       type: "success",
       message: "🎉 Thank you! Your message has been sent successfully.",
     });

     setTimeout(() => {
       setStatus({
         type: "",
         message: "",
       });
     }, 5000);
     form.current.reset();
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

  return (
    <section id="contact" className="bg-[#081b29] py-28">
      <Container>
        <AnimatedSection>
          {/* Heading */}

          <div className="text-center">
            <p className="font-semibold uppercase tracking-[6px] text-[#8245EC]">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              Get In Touch
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
              Let's build something amazing together. I'm always open to new
              opportunities.
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
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              "
            >
              <h3 className="text-3xl font-bold text-white">
                Let's Work Together 🚀
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Feel free to contact me through email, phone or social media.
              </p>

              <div className="mt-10 space-y-5">
                {/* Email */}

                <Link
                  href="mailto:kaziabubakr87@gmail.com"
                  className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#081b29]
                  p-5
                  transition-all
                  duration-300
                  hover:border-[#8245EC]
                  hover:bg-[#8245EC]/10
                  "
                >
                  <Mail size={24} className="text-[#8245EC]" />

                  <div>
                    <h4 className="font-semibold text-white">Email</h4>

                    <p className="text-gray-400 text-sm">
                      kaziabubakr87@gmail.com
                    </p>
                  </div>
                </Link>

                {/* Phone */}

                <Link
                  href="tel:+8801615665136"
                  className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#081b29]
                  p-5
                  transition-all
                  duration-300
                  hover:border-[#8245EC]
                  hover:bg-[#8245EC]/10
                  "
                >
                  <Phone size={24} className="text-[#8245EC]" />

                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>

                    <p className="text-gray-400 text-sm">+8801615665136</p>
                  </div>
                </Link>

                {/* Location */}

                <div
                  className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#081b29]
                  p-5
                  "
                >
                  <MapPin size={24} className="text-[#8245EC]" />

                  <div>
                    <h4 className="font-semibold text-white">Location</h4>

                    <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-2xl font-bold text-white">
                    Connect With Me
                  </h3>

                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {/* GitHub */}

                    <Link
                      href="https://github.com/YOUR_USERNAME"
                      target="_blank"
                      className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#081b29] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#8245EC] hover:bg-[#8245EC]/10"
                    >
                      <Github size={30} className="text-[#8245EC]" />
                      <span className="mt-2 text-sm text-white">GitHub</span>
                    </Link>

                    {/* LinkedIn */}

                    <Link
                      href="https://linkedin.com/in/YOUR_USERNAME"
                      target="_blank"
                      className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#081b29] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#8245EC] hover:bg-[#8245EC]/10"
                    >
                      <Linkedin size={30} className="text-[#8245EC]" />
                      <span className="mt-2 text-sm text-white">LinkedIn</span>
                    </Link>

                    {/* Facebook */}

                    <Link
                      href="https://facebook.com/YOUR_USERNAME"
                      target="_blank"
                      className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#081b29] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#8245EC] hover:bg-[#8245EC]/10"
                    >
                      <Facebook size={30} className="text-[#8245EC]" />
                      <span className="mt-2 text-sm text-white">Facebook</span>
                    </Link>

                    {/* Instagram */}

                    <Link
                      href="https://instagram.com/YOUR_USERNAME"
                      target="_blank"
                      className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#081b29] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#8245EC] hover:bg-[#8245EC]/10"
                    >
                      <Instagram size={30} className="text-[#8245EC]" />
                      <span className="mt-2 text-sm text-white">Instagram</span>
                    </Link>

                    {/* X */}

                    <Link
                      href="https://x.com/YOUR_USERNAME"
                      target="_blank"
                      className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#081b29] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#8245EC] hover:bg-[#8245EC]/10"
                    >
                      <Twitter size={30} className="text-[#8245EC]" />
                      <span className="mt-2 text-sm text-white">X</span>
                    </Link>

                    {/* WhatsApp */}

                    <Link
                      href="https://wa.me/8801615665136"
                      target="_blank"
                      className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#081b29] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#8245EC] hover:bg-[#8245EC]/10"
                    >
                      <MessageCircle size={30} className="text-[#8245EC]" />
                      <span className="mt-2 text-sm text-white">WhatsApp</span>
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
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              "
            >
              <h3 className="text-3xl font-bold text-white">Send Message</h3>

              <p className="mt-4 text-gray-400">
                Fill in the form below and I'll reply as soon as possible.
              </p>

              <div className="mt-8 space-y-6">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="
    w-full
    rounded-xl
    border
    border-white/10
    bg-[#081b29]
    p-4
    text-white
    outline-none
    transition-all
    duration-300
    placeholder:text-gray-500
    focus:border-[#8245EC]
  "
                />

                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="
    w-full
    rounded-xl
    border
    border-white/10
    bg-[#081b29]
    p-4
    text-white
    outline-none
    transition-all
    duration-300
    placeholder:text-gray-500
    focus:border-[#8245EC]
  "
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="
    w-full
    rounded-xl
    border
    border-white/10
    bg-[#081b29]
    p-4
    text-white
    outline-none
    transition-all
    duration-300
    placeholder:text-gray-500
    focus:border-[#8245EC]
  "
                />
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  required
                  className="
    w-full
    rounded-xl
    border
    border-white/10
    bg-[#081b29]
    p-4
    text-white
    outline-none
    transition-all
    duration-300
    placeholder:text-gray-500
    focus:border-[#8245EC]
  "
                />

                <Button type="submit" className="w-full">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {status.message && (
                  <p
                    className={`mt-4 text-center text-sm font-medium ${
                      status.type === "success"
                        ? "text-green-400"
                        : "text-red-400"
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
