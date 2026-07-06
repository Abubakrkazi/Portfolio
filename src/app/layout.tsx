import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

import JsonLd from "@/components/seo/JsonLd";
export const viewport = {
  themeColor: "#050414",
};
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
verification: {
  google: "YOUR_GOOGLE_VERIFICATION_CODE",
},
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.author,
  publisher: siteConfig.author,

  applicationName: siteConfig.name,

  category: "technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,

    locale: "en_US",

    type: "website",

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteConfig.title,

    description: siteConfig.description,

    creator: "@Abubakrkazi",

    images: [siteConfig.ogImage],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#050414] text-white antialiased">
         <JsonLd />

        {children}
      </body>
    </html>
  );
}