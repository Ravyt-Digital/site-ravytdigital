import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ravyt Digital",
    short_name: "Ravyt",
    description: "Estratégia, design, conteúdo e tecnologia para sua excelência ser percebida.",
    start_url: "/",
    display: "standalone",
    background_color: "#E7E2DA",
    theme_color: "#1A1C1E",
    lang: "pt-BR",
    icons: [
      { src: "/favicon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
