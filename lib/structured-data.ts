import { SITE_URL } from "./site";

export const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Ravyt Digital",
  legalName: "YTALA RAVENA DE SOUSA SILVA CABRAL CONTEUDO DIGITAL LTDA - ME",
  taxID: "26.114.696/0001-70",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/brand/ravyt-logo-2026.webp`, width: 875, height: 235 },
  email: "ola@ravytdigital.com",
  telephone: "+5588996956479",
  description: "Perfil da Empresa no Google, criação e manutenção de sites e SEO. Plano único anual de 597, pago por Pix, cartão ou boleto, com implantação incluída, com atendimento remoto em todo o mundo.",
  areaServed: { "@type": "Place", name: "Worldwide" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Paulista, 1636, Conj. 4 PAVM, Bela Vista",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01310-200",
    addressCountry: "BR",
  },
};

export const ytala = {
  "@type": "Person",
  "@id": `${SITE_URL}/autores/ytala-cabral#person`,
  name: "Ytala Cabral",
  url: `${SITE_URL}/autores/ytala-cabral`,
  image: `${SITE_URL}/team/ytala-cabral.webp`,
  jobTitle: "SEO, Google Meu Negócio e Copy",
  worksFor: { "@id": organization["@id"] },
  knowsAbout: ["SEO", "Google Meu Negócio", "Copywriting", "Estratégia de conteúdo"],
};

export const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Ravyt Digital",
  inLanguage: "pt-BR",
  publisher: { "@id": organization["@id"] },
};
