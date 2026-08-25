import type { Metadata } from "next";
import ServiceLandingPage, { type ServiceLandingData } from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Criação de Sites no Ceará para Empresas",
  description: "Criação de sites no Ceará com estratégia, design, SEO técnico e conteúdo regional útil — sem páginas genéricas que apenas trocam o nome da cidade.",
  alternates: { canonical: "/servicos/criacao-de-sites-no-ceara" },
  openGraph: { title: "Criação de sites no Ceará | Ravyt Digital", description: "Presença regional com conteúdo próprio, prova e estrutura para busca e conversão.", url: "/servicos/criacao-de-sites-no-ceara", type: "website", images: [{ url: "/brand/ravyt-social-card.jpg", width: 1200, height: 630, alt: "Ravyt Digital — criação de sites e gestão de redes sociais no Ceará" }] },
};

const data: ServiceLandingData = {
  slug: "criacao-de-sites-no-ceara",
  eyebrow: "Criação de sites no Ceará",
  title: "Presença regional construída com",
  titleAccent: "contexto e prova real.",
  lead: "Criamos sites para empresas cearenses que desejam competir localmente e atender além da própria cidade, conectando oferta, realidade regional, autoridade e experiência digital.",
  serviceName: "Criação de sites no Ceará",
  serviceDescription: "Criação de sites profissionais para empresas no Ceará com arquitetura, conteúdo regional relevante, SEO técnico, acessibilidade e foco comercial.",
  areaServed: [{ type: "AdministrativeArea", name: "Ceará" }],
  proof: [
    { value: "Ceará", label: "como contexto, não palavra repetida" },
    { value: "8 polos", label: "analisados no estudo regional" },
    { value: "Prova", label: "antes da promessa" },
    { value: "Brasil", label: "como possibilidade de alcance" },
  ],
  problems: [
    { title: "A empresa é forte localmente, mas difícil de encontrar", text: "Estruturamos uma presença própria para organizar serviços, diferenciais, áreas atendidas, provas e caminhos de contato." },
    { title: "O site fala da cidade, mas não do cliente", text: "A localização só entra quando ajuda a responder necessidades, contexto, atendimento ou prova — nunca como substituto de conteúdo útil." },
    { title: "A empresa deseja atender outras regiões", text: "Criamos uma arquitetura capaz de sustentar posicionamento regional e alcance remoto sem diluir a mensagem principal." },
    { title: "Concorrentes parecem mais preparados no digital", text: "Trabalhamos clareza, experiência, portfólio, autoria e confiabilidade para reduzir a distância entre a entrega real e a percepção online." },
  ],
  deliverables: [
    { title: "Mapa de intenção regional", text: "Análise do serviço, das áreas atendidas e das diferenças reais que justificam conteúdo regional." },
    { title: "Arquitetura híbrida", text: "Página principal para alcance amplo, presença regional coerente e páginas específicas apenas quando houver proposta própria." },
    { title: "Conteúdo e provas locais", text: "Projetos, processos, informações de atendimento e repertório conectados ao contexto do Ceará." },
    { title: "Base técnica rastreável", text: "URLs claras, sitemap, canonical, HTML semântico, dados estruturados verdadeiros e estados HTTP corretos." },
  ],
  process: [
    { title: "Diagnóstico da demanda", text: "Definimos onde a localização influencia a decisão e onde o serviço pode ser prestado remotamente." },
    { title: "Pesquisa e diferenciação", text: "Mapeamos concorrentes, dúvidas e lacunas, separando observação de inferência." },
    { title: "Construção", text: "Criamos páginas com valor próprio, links contextuais e uma experiência consistente no celular." },
    { title: "Acompanhamento", text: "A evolução é guiada por Search Console, comportamento e qualidade dos contatos — não por uma consulta isolada." },
  ],
  evidenceTitle: "Uma pesquisa regional própria sustenta a estratégia.",
  evidenceText: "A Ravyt analisou os principais polos urbanos do Ceará, documentou limites do levantamento e corrigiu simplificações comuns sobre proximidade, idade de domínio, Schema e Core Web Vitals. O resultado orienta decisões sem transformar hipóteses em promessas de ranking.",
  evidenceLinks: [
    { href: "/blog/mercado-sites-seo-local-ceara", label: "Ler o estudo regional completo" },
    { href: "/servicos/criacao-de-sites", label: "Conhecer a solução nacional de sites" },
  ],
  relatedTitle: "Pesquisa e fundamentos para crescer com consistência.",
  relatedLinks: [
    { href: "/blog/mercado-sites-seo-local-ceara", label: "Mercado de sites e SEO local no Ceará", description: "Dados, metodologia, limites e oportunidades para empresas cearenses." },
    { href: "/blog/seo-information-gain-busca-generativa", label: "Information Gain e busca generativa", description: "Como criar conteúdo original, rastreável e preparado para novas interfaces de busca." },
    { href: "/blog/site-bonito-nao-basta", label: "7 sinais de que um site não gera confiança", description: "Uma revisão prática da experiência que antecede o contato comercial." },
  ],
  faqs: [
    { question: "A Ravyt atende apenas Fortaleza?", answer: "Não. A Ravyt atende empresas em todo o Ceará e também projetos de outras regiões do Brasil. O serviço digital pode ser conduzido remotamente, com encontros e entregas organizados online." },
    { question: "É necessário criar uma página para cada cidade?", answer: "Não. Uma página regional só deve existir quando possui conteúdo, proposta, prova ou informações de atendimento próprias. Páginas quase idênticas que apenas trocam a cidade não fazem parte da estratégia da Ravyt." },
    { question: "A página garante aparecer em primeiro lugar?", answer: "Não. Nenhuma implementação ética pode garantir posição. O trabalho melhora relevância, rastreabilidade, experiência e clareza comercial; o desempenho deve ser acompanhado ao longo do tempo com dados reais." },
    { question: "SEO local e Google Maps são a mesma coisa?", answer: "Não. O Perfil da Empresa e o pacote local usam sinais próprios, enquanto os resultados orgânicos consideram diferentes sistemas. A estratégia pode integrar os dois, mas sem tratá-los como uma única classificação." },
  ],
  ctaTitle: "Vamos construir uma presença regional capaz de crescer além da sua cidade.",
};

export default function Page() { return <ServiceLandingPage data={data} />; }
