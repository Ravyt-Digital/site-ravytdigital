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
  description: "Criação de sites profissionais e presença digital no Google para profissionais liberais, prestadores de serviços e pequenos negócios. Site One Page, SEO inicial e Perfil da Empresa quando elegível, com hospedagem e manutenção técnica durante 12 meses.",
  areaServed: { "@type": "Country", name: "Brazil" },
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
  jobTitle: "Estratégia de presença digital, SEO inicial e relacionamento",
  worksFor: { "@id": organization["@id"] },
  knowsAbout: ["SEO técnico inicial", "Perfil da Empresa no Google", "Presença digital"],
};

export const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Ravyt Digital",
  inLanguage: ["pt-BR", "en", "fr", "es"],
  publisher: { "@id": organization["@id"] },
};

export const marcio = {"@type":"Person", "@id":`${SITE_URL}/sobre#marcio`, name:"Márcio Cabral", url:`${SITE_URL}/sobre`, image:`${SITE_URL}/team/marcio-cabral-card.webp`, jobTitle:"Criação de sites, web design, desenvolvimento e infraestrutura", worksFor:{"@id":organization["@id"]}, knowsAbout:["Web design","UX/UI","Desenvolvimento web"]};
