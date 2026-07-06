export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Abubakr Kazi",

    url: "https://your-domain.com",

    image: "https://your-domain.com/og-image.png",

    jobTitle: "Full Stack Developer",

    description:
      "Full Stack Developer specializing in Next.js, React, TypeScript, Prisma and PostgreSQL.",

    sameAs: [
      "https://github.com/Abubakrkazi",
      "https://linkedin.com/in/your-linkedin",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}