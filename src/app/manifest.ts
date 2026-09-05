import type { MetadataRoute } from "next";
import { site } from "@/data/content.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Portfolio & Engineering Ledger`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fdf6e3",
    theme_color: "#fdf6e3",
    icons: [
      {
        src: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
