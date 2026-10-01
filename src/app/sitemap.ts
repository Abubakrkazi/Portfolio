import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "",
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      path: "/about",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/skills",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/projects",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      path: "/experience",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/education",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/blogs",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      path: "/contact",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}