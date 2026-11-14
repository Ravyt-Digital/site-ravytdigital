import type { MetadataRoute } from "next";
import {agencyDescription} from "@/lib/services";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ravyt Digital",
    short_name: "Ravyt",
    description: agencyDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#050C13",
    theme_color: "#050C13",
    lang: "pt-BR",
    icons: [
      { src: "/favicon.webp", sizes: "512x512", type: "image/webp" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
