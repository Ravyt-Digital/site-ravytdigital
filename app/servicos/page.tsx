import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";
import CookieConsent from "@/components/CookieConsent";

const SERVICE_DESCRIPTION = "Criação de sites, SEO, estratégia, identidade visual e Social Media para empresas e especialistas no Ceará e em todo o Brasil.";

export const metadata: Metadata = {
  title: "Criação de Sites, SEO e Marketing Digital no Ceará",
  description: SERVICE_DESCRIPTION,
  alternates: { canonical: "/servicos" },
  openGraph: {
    title: "Soluções integradas para presença digital | Ravyt Digital",
    description: "Estratégia, design, conteúdo e tecnologia trabalhando juntos para sua empresa ser percebida à altura do que entrega.",
    url: "/servicos",
    type: "website",
  },
};

const services = [
  {
    id: "sites",
    label: "Criação de sites profissionais",
    title: "Sites que organizam valor, geram confiança e conduzem à ação.",
    summary: "Criamos sites institucionais, páginas de vendas, blogs e experiências digitais alinhadas ao posicionamento, à jornada do cliente e à descoberta no Google.",
    fit: "Faz sentido quando a empresa precisa apresentar melhor suas soluções, reduzir dependência das redes sociais, apoiar campanhas ou transformar pesquisa em oportunidade comercial.",
    deliveries: ["Arquitetura de informação e jornada", "UX, UI e desenvolvimento responsivo", "SEO técnico e estrutura semântica", "Métricas, privacidade e otimização contínua"],
    related: { href: "/servicos/criacao-de-sites", label: "Conheça a solução completa de criação de sites" },
  },
  {
    id: "identidade-visual",
    label: "Identidade visual e direção de marca",
    title: "Uma identidade que traduz o nível real do negócio.",
    summary: "Organizamos símbolos, cores, tipografia, direção de arte e aplicações para que cada ponto de contato transmita a mesma percepção de valor.",
    fit: "Faz sentido quando a qualidade da entrega já existe, mas a apresentação ainda parece genérica, inconsistente ou menor do que a empresa deseja se tornar.",
    deliveries: ["Diagnóstico de percepção", "Direção visual e sistema de marca", "Aplicações digitais prioritárias", "Orientações para consistência de uso"],
    related: { href: "/blog/site-bonito-nao-basta", label: "Veja os sinais de que a aparência do site ainda não gera confiança" },
  },
  {
    id: "social-media",
    label: "Estratégia e gestão de Social Media",
    title: "Conteúdo humano, coerente e conectado ao negócio.",
    summary: "Planejamos posicionamento, pautas, roteiros e direção editorial para transformar redes sociais em relacionamento, autoridade e continuidade de marca.",
    fit: "Faz sentido quando publicar virou uma tarefa sem direção, o perfil não deixa claro o valor da empresa ou o conteúdo não ajuda o público a avançar na decisão.",
    deliveries: ["Posicionamento e linha editorial", "Planejamento de conteúdo", "Roteiros, carrosséis e direção visual", "Análise e aprendizado contínuo"],
    related: { href: "/servicos/gestao-de-redes-sociais", label: "Conheça a solução de gestão de redes sociais" },
  },
  {
    id: "estrategia-digital",
    label: "Estratégia e estrutura digital",
    title: "Diagnóstico antes da ferramenta. Direção antes da execução.",
    summary: "Conectamos posicionamento, canais, conteúdo, automação e tecnologia para que as decisões digitais deixem de competir entre si.",
    fit: "Faz sentido quando existem várias iniciativas, fornecedores ou ferramentas, mas falta uma visão comum sobre prioridade, jornada e resultado esperado.",
    deliveries: ["Diagnóstico do ecossistema atual", "Mapa de prioridades e jornada", "Integração entre canais e ativos", "Plano de evolução por etapas"],
    related: { href: "/blog/seo-information-gain-busca-generativa", label: "Conheça o padrão de conteúdo útil adotado pela Ravyt Digital" },
  },
];

const faqs = [
  { question: "Como saber qual serviço contratar primeiro?", answer: "A decisão começa pelo diagnóstico do momento do negócio. Em alguns casos, o site é a base; em outros, posicionamento, identidade ou conteúdo precisam ser organizados antes. A Ravyt recomenda a menor estrutura capaz de resolver o problema prioritário." },
  { question: "A Ravyt atende empresas pequenas e especialistas?", answer: "Sim. A Ravyt trabalha com empresas, especialistas e negócios digitais que já entregam qualidade e precisam transformar essa excelência em uma presença digital mais clara, coerente e confiável." },
  { question: "Quanto custa um projeto?", answer: "O investimento depende do objetivo, do escopo, dos conteúdos disponíveis, das integrações e do nível de acompanhamento necessário. O diagnóstico inicial evita propostas genéricas e permite dimensionar a solução adequada." },
  { question: "É preciso escolher entre site e redes sociais?", answer: "Não. Redes sociais apoiam descoberta, relacionamento e frequência; o site organiza autoridade, busca, prova e conversão. A melhor estrutura define o papel de cada canal e faz os dois trabalharem juntos." },
];

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/servicos#page`,
        url: `${SITE_URL}/servicos`,
        name: "Serviços da Ravyt Digital",
        description: SERVICE_DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      ...services.map((service) => ({
        "@type": "Service",
        "@id": `${SITE_URL}/servicos#${service.id}`,
        name: service.label,
        description: service.summary,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Ceará" },
          { "@type": "Country", name: "Brasil" },
        ],
      })),
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Serviços", item: `${SITE_URL}/servicos` },
        ],
      },
    ],
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <BlogHeader current="services" />
      <main id="conteudo" className="services-page">
        <header className="services-hero">
          <div className="shell">
            <nav className="page-breadcrumb" aria-label="Navegação estrutural"><Link href="/">Início</Link><span>/</span><span aria-current="page">Serviços</span></nav>
            <p className="section-kicker">Soluções integradas</p>
            <h1>Marketing digital com <em>estrutura, clareza e direção.</em></h1>
            <p>Para uma presença digital gerar confiança, estratégia, design, conteúdo e tecnologia precisam trabalhar na mesma direção. A Ravyt organiza essas frentes de acordo com o momento e a prioridade do seu negócio.</p>
            <a className="button button-light" href="/contato">Solicitar diagnóstico digital <span aria-hidden="true">↗</span></a>
          </div>
        </header>

        <section className="services-detail" aria-label="Soluções da Ravyt Digital">
          <div className="shell">
            {services.map((service, index) => (
              <article id={service.id} className="service-detail" key={service.id}>
                <div className="service-detail-index"><span>{String(index + 1).padStart(2, "0")}</span><p>{service.label}</p></div>
                <div className="service-detail-copy">
                  <h2>{service.title}</h2>
                  <p className="service-detail-lead">{service.summary}</p>
                  <div className="service-detail-columns">
                    <div><h3>Quando faz sentido</h3><p>{service.fit}</p></div>
                    <div><h3>O que pode fazer parte</h3><ul>{service.deliveries.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  </div>
                  <Link href={service.related.href}>{service.related.label} <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-local" aria-labelledby="presenca-regional">
          <div className="shell services-local-grid">
            <div>
              <p className="section-kicker">Pesquisa regional</p>
              <h2 id="presenca-regional">Presença digital local não se constrói trocando apenas o nome da cidade.</h2>
            </div>
            <div>
              <p>A Ravyt analisou os principais polos urbanos do Ceará e transformou os achados em uma orientação prática: sites regionais precisam combinar dados corretos, proposta clara, experiência real, prova e conteúdo que ajude o cliente a decidir.</p>
              <dl>
                <div><dt>8</dt><dd>municípios cearenses acima de 100 mil habitantes no Censo 2022</dd></div>
                <div><dt>3,87 mi</dt><dd>pessoas nesses polos — aproximadamente 44,1% da população do estado</dd></div>
                <div><dt>1 critério</dt><dd>uma nova página só existe quando entrega valor próprio e verificável</dd></div>
              </dl>
              <div className="service-evidence-links">
                <Link href="/servicos/criacao-de-sites-no-ceara">Conhecer a criação de sites no Ceará <span aria-hidden="true">↗</span></Link>
                <Link href="/blog/mercado-sites-seo-local-ceara">Ler a análise completa do mercado regional <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services-faq" aria-labelledby="duvidas-servicos">
          <div className="shell">
            <p className="section-kicker">Dúvidas frequentes</p>
            <h2 id="duvidas-servicos">Antes de decidir, vale entender o contexto.</h2>
            <div>{faqs.map((faq) => <article key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div>
          </div>
        </section>

        <section className="services-cta"><div className="shell"><p>Seu próximo passo</p><h2>Descubra qual estrutura faz sentido para o seu momento.</h2><a className="button button-light" href="/contato">Ir para contato <span aria-hidden="true">↗</span></a></div></section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
      <BlogFooter />
      <CookieConsent />
    </>
  );
}
