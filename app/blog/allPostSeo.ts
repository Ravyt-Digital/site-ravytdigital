import { postSeo as basePostSeo, type PostSeo } from "./postSeo";

const metaPostSeo: PostSeo = {
  slug: "meta-agosto-2026-ia-regulacao-infraestrutura",
  seoTitle: "Meta em agosto de 2026: IA, regulação e infraestrutura",
  metaDescription:
    "Entenda como IA agentic, data centers, regulação e publicidade estão redesenhando a estratégia da Meta em 2026 e o que isso significa para marcas.",
  author: {
    name: "Ytala Cabral",
    type: "Person",
    url: "/autores/ytala-cabral",
    jobTitle: "Direção estratégica e Social Media",
    description: "Responsável por estratégia, posicionamento e Social Media na Ravyt Digital.",
    image: "/team/ytala-cabral.webp",
    knowsAbout: ["Social Media", "Estratégia digital", "Marketing", "Posicionamento", "Plataformas digitais"],
  },
  featuredImage: {
    src: "/blog/capas/meta-agosto-2026-estrategia.svg",
    alt: "Diagrama editorial com inteligência artificial, infraestrutura e regulação como três vetores da estratégia da Meta em 2026",
    width: 1600,
    height: 900,
  },
  cluster: "conteudo-e-busca",
  keywords: [
    "Meta 2026",
    "Meta AI",
    "Muse Spark",
    "Manus",
    "data centers Meta",
    "regulação redes sociais",
    "estratégia Meta",
  ],
  relatedSlugs: [
    "edits-instagram-stories-fluxo-producao",
    "seo-information-gain-busca-generativa",
    "instagram-nao-substitui-site-proprio",
  ],
};

export const postSeo = [metaPostSeo, ...basePostSeo];

export function getPostSeo(slug: string) {
  return postSeo.find((item) => item.slug === slug);
}
