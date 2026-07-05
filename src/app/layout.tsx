import "./globals.css";
import type { Metadata } from "next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abubakr's Portfolio",
  description: "Official Portfolio of  Abubakr Kazi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}