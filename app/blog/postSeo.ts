export type PostSeo = {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  author: {
    name: string;
    type: "Person" | "Organization";
    url: string;
  };
  featuredImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  relatedSlugs: string[];
};

export const postSeo: PostSeo[] = [
  {
    slug: "edits-instagram-stories-fluxo-producao",
    seoTitle: "Edits para Instagram Stories: o que muda no fluxo de produção",
    metaDescription:
      "O Edits agora envia vídeos direto para os Instagram Stories. Entenda o que muda no fluxo de produção, os limites da novidade e o impacto para Social Media.",
    author: {
      name: "Marcio Cabral",
      type: "Person",
      url: "/autores/marcio-cabral",
    },
    featuredImage: {
      src: "/blog/capas/edits-instagram-stories.svg",
      alt: "Ilustração de uma timeline de edição sendo enviada diretamente para uma tela de Instagram Stories",
      width: 1600,
      height: 900,
    },
    relatedSlugs: [
      "instagram-nao-substitui-site-proprio",
      "seo-information-gain-busca-generativa",
    ],
  },
  {
    slug: "seo-information-gain-busca-generativa",
    seoTitle: "Information Gain e IA generativa: o novo SEO na prática",
    metaDescription:
      "Entenda Information Gain, E-E-A-T e busca generativa sem atalhos: como criar conteúdo original, rastreável e útil para pessoas, Google e sistemas de IA.",
    author: {
      name: "Ravyt Digital",
      type: "Organization",
      url: "/",
    },
    featuredImage: {
      src: "/blog/capas/seo-information-gain.svg",
      alt: "Ilustração de busca, documentos e uma rede de IA destacando informação original em SEO",
      width: 1600,
      height: 900,
    },
    relatedSlugs: [
      "instagram-nao-substitui-site-proprio",
      "site-bonito-nao-basta",
    ],
  },
  {
    slug: "instagram-nao-substitui-site-proprio",
    seoTitle: "Instagram substitui um site? Entenda por que não",
    metaDescription:
      "Instagram e site cumprem papéis diferentes. Veja por que depender só das redes sociais limita controle, busca, confiança e crescimento da presença digital.",
    author: {
      name: "Ravyt Digital",
      type: "Organization",
      url: "/",
    },
    featuredImage: {
      src: "/blog/capas/instagram-vs-site.svg",
      alt: "Ilustração comparando uma grade de rede social em um celular com um site próprio em um navegador",
      width: 1600,
      height: 900,
    },
    relatedSlugs: [
      "site-bonito-nao-basta",
      "pagina-de-vendas-ou-site-institucional",
    ],
  },
  {
    slug: "site-bonito-nao-basta",
    seoTitle: "Site bonito não basta: 7 sinais de baixa confiança",
    metaDescription:
      "Seu site pode ser bonito e ainda afastar clientes. Veja 7 sinais de baixa confiança envolvendo clareza, prova, navegação, velocidade e posicionamento.",
    author: {
      name: "Ravyt Digital",
      type: "Organization",
      url: "/",
    },
    featuredImage: {
      src: "/blog/capas/site-confianca.svg",
      alt: "Ilustração de um site moderno acompanhado por símbolos de confiança, clareza e segurança",
      width: 1600,
      height: 900,
    },
    relatedSlugs: [
      "instagram-nao-substitui-site-proprio",
      "pagina-de-vendas-ou-site-institucional",
    ],
  },
  {
    slug: "pagina-de-vendas-ou-site-institucional",
    seoTitle: "Página de vendas ou site institucional: qual escolher?",
    metaDescription:
      "Página de vendas e site institucional resolvem problemas diferentes. Compare objetivos, estrutura e contexto para escolher a opção certa para seu negócio.",
    author: {
      name: "Ravyt Digital",
      type: "Organization",
      url: "/",
    },
    featuredImage: {
      src: "/blog/capas/pagina-vendas-vs-site.svg",
      alt: "Ilustração comparando uma página de vendas linear com uma arquitetura de site institucional de várias páginas",
      width: 1600,
      height: 900,
    },
    relatedSlugs: [
      "site-bonito-nao-basta",
      "instagram-nao-substitui-site-proprio",
    ],
  },
];

export function getPostSeo(slug: string) {
  return postSeo.find((item) => item.slug === slug);
}
