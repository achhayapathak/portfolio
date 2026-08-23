import type { MetadataRoute } from "next";
import { site } from "@/data/content.config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = site.siteUrl.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
