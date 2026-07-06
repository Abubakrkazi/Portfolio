import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Abubakr",

    description: siteConfig.description,

    start_url: "/",

    display: "standalone",

    background_color: "#050414",

    theme_color: "#8245EC",

    orientation: "portrait",

    lang: "en",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}