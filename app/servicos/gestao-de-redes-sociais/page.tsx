import type { Metadata } from "next";
import ServiceLandingPage, { type ServiceLandingData } from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Gestão de Redes Sociais para Empresas",
  description: "Estratégia e gestão de redes sociais com posicionamento, planejamento, roteiros, design editorial e análise para empresas que querem comunicar valor.",
  alternates: { canonical: "/servicos/gestao-de-redes-sociais" },
  openGraph: { title: "Gestão de redes sociais para empresas | Ravyt Digital", description: "Conteúdo com direção, consistência e conexão real com o negócio.", url: "/servicos/gestao-de-redes-sociais", type: "website" },
};

const data: ServiceLandingData = {
  slug: "gestao-de-redes-sociais",
  eyebrow: "Estratégia e gestão de Social Media",
  title: "Conteúdo que constrói presença sem",
  titleAccent: "perder a voz da marca.",
  lead: "Planejamos posicionamento, pautas, roteiros e direção editorial para empresas que precisam transformar publicações isoladas em uma presença coerente e útil para o público.",
  serviceName: "Gestão de redes sociais para empresas",
  serviceDescription: "Estratégia, planejamento e produção de conteúdo para redes sociais com posicionamento, roteiros, design editorial e análise contínua.",
  areaServed: [{ type: "Country", name: "Brasil" }, { type: "AdministrativeArea", name: "Ceará" }],
  proof: [
    { value: "Posição", label: "antes da pauta" },
    { value: "Público", label: "antes do formato" },
    { value: "Processo", label: "antes da frequência" },
    { value: "Aprendizado", label: "antes do achismo" },
  ],
  problems: [
    { title: "O perfil publica, mas não posiciona", text: "A mensagem varia a cada postagem e o público não entende com clareza a especialidade, o valor ou a diferença da empresa." },
    { title: "A produção depende de inspiração", text: "Estruturamos pilares, formatos e um fluxo de produção para reduzir improviso sem transformar o conteúdo em algo genérico." },
    { title: "O conteúdo não conversa com o comercial", text: "Conectamos temas, objeções, provas e chamadas às etapas reais de descoberta, consideração e contato." },
    { title: "A marca perdeu a própria voz", text: "A direção editorial preserva linguagem, repertório e personalidade para que o perfil não pareça produzido por uma fórmula." },
  ],
  deliverables: [
    { title: "Diagnóstico e posicionamento", text: "Análise da presença atual, público, proposta, concorrentes, voz, temas e objetivos de negócio." },
    { title: "Planejamento editorial", text: "Pilares, calendário, distribuição de formatos e conexão entre conteúdo, oferta e jornada." },
    { title: "Roteiros, textos e direção visual", text: "Carrosséis, vídeos curtos, legendas e orientações de criação coerentes com a identidade e o canal." },
    { title: "Análise e refinamento", text: "Leitura de sinais relevantes para aprender com retenção, interação, demanda e qualidade das oportunidades, conforme o acesso disponível." },
  ],
  process: [
    { title: "Imersão", text: "Reunimos repertório, diferenciais, linguagem, oferta, público e restrições do negócio." },
    { title: "Direção editorial", text: "Definimos o papel de cada tema e formato na construção de percepção e relacionamento." },
    { title: "Produção", text: "Criamos o conteúdo com fluxo de aprovação claro e responsabilidades combinadas." },
    { title: "Evolução", text: "Acompanhamos o que o público demonstra e ajustamos hipóteses sem perseguir métricas de vaidade isoladas." },
  ],
  evidenceTitle: "A estratégia nasce do raciocínio do especialista, não de um calendário genérico.",
  evidenceText: "A Ravyt trabalha conteúdo a partir da forma como cada especialista pensa, decide e entrega valor. Isso permite transformar experiência real em histórias, argumentos, exemplos e formatos que mantêm identidade e apoiam objetivos comerciais.",
  evidenceLinks: [
    { href: "/autores/ytala-cabral", label: "Conhecer a direção de Social Media" },
    { href: "/blog/edits-instagram-stories-fluxo-producao", label: "Ver análise sobre fluxo de produção" },
  ],
  relatedTitle: "Conteúdo e canais com papéis bem definidos.",
  relatedLinks: [
    { href: "/blog/instagram-nao-substitui-site-proprio", label: "Instagram não substitui um site próprio", description: "Entenda por que relacionamento e ativo próprio precisam trabalhar juntos." },
    { href: "/blog/edits-instagram-stories-fluxo-producao", label: "Edits e o fluxo de produção para Stories", description: "Veja o que a integração muda — e o que ela não resolve sozinha." },
    { href: "/blog/seo-information-gain-busca-generativa", label: "Information Gain na prática", description: "Um critério útil para fugir de conteúdo repetitivo e acrescentar experiência real." },
  ],
  faqs: [
    { question: "O serviço inclui somente Instagram?", answer: "O escopo é definido de acordo com público, objetivo e capacidade de produção. Instagram pode ser o canal principal, mas LinkedIn, Facebook, TikTok ou YouTube entram apenas quando possuem um papel claro na estratégia." },
    { question: "Gestão de redes sociais inclui tráfego pago?", answer: "Não necessariamente. Conteúdo orgânico e mídia paga exigem responsabilidades e métricas diferentes. Quando a campanha fizer parte da solução, o escopo é descrito separadamente para manter clareza." },
    { question: "Quantas publicações serão feitas por mês?", answer: "A frequência é definida depois do diagnóstico. A Ravyt prioriza a capacidade de sustentar qualidade, linguagem e objetivo, em vez de usar um número fixo como substituto de estratégia." },
    { question: "Como o resultado é avaliado?", answer: "A análise considera o objetivo combinado: percepção, retenção, interação qualificada, geração de demanda ou oportunidades comerciais. Alcance e seguidores são sinais úteis, mas não funcionam como resultado isolado." },
  ],
  ctaTitle: "Vamos organizar uma presença social coerente com o valor da sua empresa.",
};

export default function Page() { return <ServiceLandingPage data={data} />; }
