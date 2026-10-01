import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abubakr Kazi for frontend development opportunities, collaborations, projects, and professional inquiries.",
};

export default function ContactPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[var(--background)]
        pt-20
        text-[var(--foreground)]
      "
    >
      <Contact />
    </main>
  );
}