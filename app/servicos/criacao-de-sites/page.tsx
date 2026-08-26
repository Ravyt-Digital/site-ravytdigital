import type { Metadata } from "next";
import ServiceLandingPage, { type ServiceLandingData } from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Criação de Sites Profissionais para Empresas",
  description: "Criação de sites institucionais, landing pages e blogs com estratégia, UX, SEO técnico e estrutura para gerar confiança e oportunidades comerciais.",
  alternates: { canonical: "/servicos/criacao-de-sites" },
  openGraph: { title: "Criação de sites profissionais | Ravyt Digital", description: "Sites alinhados ao negócio, à busca e à decisão do cliente.", url: "/servicos/criacao-de-sites", type: "website", images: [{ url: "/brand/ravyt-social-card.jpg", width: 1200, height: 630, alt: "Ravyt Digital — criação de sites e gestão de redes sociais no Ceará" }] },
};

const data: ServiceLandingData = {
  slug: "criacao-de-sites",
  eyebrow: "Criação de sites profissionais",
  title: "Um site para transformar pesquisa em",
  titleAccent: "confiança e ação.",
  lead: "A Ravyt cria sites institucionais, landing pages e blogs para empresas que precisam apresentar melhor o que fazem, apoiar campanhas e construir um ativo digital próprio.",
  serviceName: "Criação de sites profissionais",
  serviceDescription: "Planejamento, design e desenvolvimento de sites institucionais, landing pages e blogs com SEO técnico, acessibilidade e foco na decisão do cliente.",
  areaServed: [{ type: "Country", name: "Brasil" }, { type: "AdministrativeArea", name: "Ceará" }],
  proof: [
    { value: "Estratégia", label: "antes do layout" },
    { value: "HTML", label: "semântico e acessível" },
    { value: "SEO", label: "integrado à arquitetura" },
    { value: "Métricas", label: "para aprender depois da publicação" },
  ],
  problems: [
    { title: "A empresa parece menor do que é", text: "O serviço é indicado quando a qualidade real do negócio não está refletida na apresentação, na clareza ou na experiência digital." },
    { title: "O cliente não encontra respostas", text: "Organizamos serviços, provas, processo e dúvidas para reduzir esforço e ajudar a pessoa a avaliar a empresa antes do contato." },
    { title: "As campanhas dependem de páginas genéricas", text: "Criamos caminhos específicos para ofertas e estágios de decisão, sem misturar intenções incompatíveis na mesma página." },
    { title: "A presença depende das redes sociais", text: "O site funciona como ativo próprio para busca, autoridade, portfólio, conteúdo e conversão, complementando os canais sociais." },
  ],
  deliverables: [
    { title: "Descoberta e arquitetura", text: "Objetivo comercial, público, intenção de busca, jornada, mapa de páginas e hierarquia das informações." },
    { title: "Conteúdo e experiência", text: "Mensagem, UX, direção visual e componentes construídos para leitura, navegação, teclado e celular." },
    { title: "Desenvolvimento e SEO técnico", text: "HTML semântico, metadados, canonical, sitemap, dados estruturados coerentes e desempenho compatível com a solução." },
    { title: "Publicação e medição", text: "Validação das rotas, indexabilidade, estados de erro, eventos essenciais e base para evolução com dados reais." },
  ],
  process: [
    { title: "Diagnóstico", text: "Entendemos o negócio, a oferta, a percepção atual e o que o visitante precisa decidir." },
    { title: "Estrutura", text: "Definimos páginas, mensagens, provas e relações entre serviço, portfólio, conteúdo e contato." },
    { title: "Criação", text: "Desenhamos e desenvolvemos a experiência responsiva com acessibilidade e desempenho desde a base." },
    { title: "Validação", text: "Revisamos conteúdo, links, metadados, dados estruturados, CTAs e comportamento em diferentes telas." },
  ],
  evidenceTitle: "O portfólio mostra diferentes objetivos, não um modelo repetido.",
  evidenceText: "A Ravyt já desenvolveu sites institucionais, páginas de vendas, catálogos e experiências para saúde, educação, cultura, varejo e negócios digitais. Cada projeto parte da oferta e do público — não de uma página pronta com textos trocados.",
  evidenceLinks: [
    { href: "/#projetos", label: "Conhecer projetos selecionados" },
    { href: "/servicos/criacao-de-sites-para-clinicas", label: "Ver a solução específica para clínicas" },
    { href: "/servicos/criacao-de-sites-no-ceara", label: "Ver a abordagem regional para o Ceará" },
  ],
  relatedTitle: "Conteúdo para escolher a estrutura certa.",
  relatedLinks: [
    { href: "/blog/pagina-de-vendas-ou-site-institucional", label: "Página de vendas ou site institucional?", description: "Compare os objetivos e entenda quando cada formato faz sentido." },
    { href: "/blog/site-bonito-nao-basta", label: "Um site bonito não basta", description: "Veja os sinais de que a experiência ainda não transmite confiança." },
    { href: "/blog/instagram-nao-substitui-site-proprio", label: "Instagram não substitui um site próprio", description: "Entenda como os dois canais cumprem funções complementares." },
  ],
  faqs: [
    { question: "Quanto custa criar um site profissional?", answer: "O investimento depende do tipo de site, volume de páginas, conteúdo, integrações e prazo. A Ravyt dimensiona o escopo depois de entender o objetivo, evitando um preço isolado que esconda diferenças importantes de entrega." },
    { question: "Site institucional e landing page são a mesma coisa?", answer: "Não. O site institucional organiza a empresa e diferentes soluções; a landing page concentra a atenção em uma oferta ou campanha específica. As duas estruturas podem trabalhar juntas." },
    { question: "A criação já inclui SEO?", answer: "A base inclui arquitetura rastreável, HTML semântico, metadados, canonical, sitemap e boas práticas técnicas. A produção contínua de conteúdo, pesquisa de mercado e acompanhamento orgânico podem exigir um escopo adicional." },
    { question: "A Ravyt atende empresas de todo o Brasil?", answer: "Sim. O processo pode ser realizado remotamente. Para negócios do Ceará, a Ravyt também possui uma abordagem regional conectada ao contexto e às oportunidades locais." },
  ],
  ctaTitle: "Vamos construir uma presença digital à altura do seu negócio.",
};

export default function Page() { return <ServiceLandingPage data={data} />; }
