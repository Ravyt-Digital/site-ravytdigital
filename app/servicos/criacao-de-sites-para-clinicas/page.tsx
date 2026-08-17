import type { Metadata } from "next";
import ServiceLandingPage, { type ServiceLandingData } from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Criação de Sites para Clínicas e Consultórios",
  description: "Sites profissionais para clínicas e consultórios com serviços claros, equipe, prova, acessibilidade, SEO técnico e caminhos simples para agendamento.",
  alternates: { canonical: "/servicos/criacao-de-sites-para-clinicas" },
  openGraph: { title: "Criação de sites para clínicas | Ravyt Digital", description: "Experiências claras e confiáveis para apresentar especialidades e facilitar o próximo passo do paciente.", url: "/servicos/criacao-de-sites-para-clinicas", type: "website" },
};

const data: ServiceLandingData = {
  slug: "criacao-de-sites-para-clinicas",
  eyebrow: "Sites para clínicas e consultórios",
  title: "Confiança começa antes do paciente",
  titleAccent: "entrar em contato.",
  lead: "Criamos sites para clínicas e consultórios que precisam apresentar especialidades, profissionais, estrutura e formas de atendimento com clareza, cuidado e uma experiência simples no celular.",
  serviceName: "Criação de sites para clínicas e consultórios",
  serviceDescription: "Planejamento, design e desenvolvimento de sites para clínicas e consultórios com foco em clareza, confiança, acessibilidade, SEO técnico e contato.",
  areaServed: [{ type: "Country", name: "Brasil" }, { type: "AdministrativeArea", name: "Ceará" }],
  proof: [
    { value: "Clareza", label: "para especialidades e serviços" },
    { value: "Cuidado", label: "na linguagem e na experiência" },
    { value: "Mobile", label: "para quem pesquisa pelo celular" },
    { value: "Contato", label: "sem caminhos confusos" },
  ],
  problems: [
    { title: "Os serviços parecem todos iguais", text: "Estruturamos cada especialidade pela necessidade do paciente, pelo contexto do atendimento e pelas informações necessárias para avançar." },
    { title: "A confiança depende apenas do Instagram", text: "O site reúne equipe, estrutura, localização, dúvidas e conteúdos em um ambiente próprio que pode ser pesquisado e revisitado." },
    { title: "O contato está escondido", text: "Organizamos caminhos claros para WhatsApp, agendamento ou avaliação, respeitando a jornada e evitando interrupções desnecessárias." },
    { title: "O conteúdo não transmite cuidado", text: "A direção visual e a linguagem equilibram profissionalismo, acolhimento, legibilidade e responsabilidade na comunicação." },
  ],
  deliverables: [
    { title: "Arquitetura para serviços de saúde", text: "Organização de especialidades, profissionais, estrutura, localização, perguntas e formas de contato." },
    { title: "Experiência responsiva e acessível", text: "Leitura confortável, contraste, navegação por teclado, textos compreensíveis e prioridade para o uso no celular." },
    { title: "Conteúdo e validação", text: "Estrutura editorial preparada para revisão da clínica e adequação às regras profissionais aplicáveis à sua área." },
    { title: "Busca e medição", text: "Metadados, sitemap, dados estruturados coerentes, desempenho e base para acompanhar consultas e contatos." },
  ],
  process: [
    { title: "Imersão clínica", text: "Entendemos especialidades, público, diferenciais, fluxo de atendimento e limites de comunicação." },
    { title: "Jornada do paciente", text: "Organizamos as dúvidas que surgem antes do contato e o caminho mais simples para a próxima ação." },
    { title: "Criação e revisão", text: "Desenvolvemos a experiência e submetemos conteúdo sensível à validação do responsável pela clínica." },
    { title: "Publicação", text: "Validamos rotas, acessibilidade, formulários ou links de contato, indexabilidade e comportamento mobile." },
  ],
  evidenceTitle: "O conceito Odonto Premium mostra a aplicação do método.",
  evidenceText: "No projeto para a Odonto Premium, a Ravyt organizou visão da clínica, tratamentos, provas e avaliação em uma experiência responsiva. O projeto demonstra repertório visual e estrutural no segmento sem transformar um único caso em promessa de resultado universal.",
  evidenceLinks: [
    { href: "/#projetos", label: "Ver o projeto Odonto Premium no portfólio" },
    { href: "/servicos/criacao-de-sites", label: "Conhecer o serviço completo de criação de sites" },
  ],
  relatedTitle: "Decisões que aumentam clareza e confiança.",
  relatedLinks: [
    { href: "/blog/site-bonito-nao-basta", label: "Um site bonito não basta", description: "Sete sinais de que aparência e confiança ainda não estão alinhadas." },
    { href: "/blog/instagram-nao-substitui-site-proprio", label: "Por que o Instagram não substitui o site", description: "A diferença entre relacionamento frequente e uma base própria de autoridade." },
    { href: "/blog/pagina-de-vendas-ou-site-institucional", label: "Página de vendas ou site institucional?", description: "Como escolher a estrutura conforme o objetivo da clínica." },
  ],
  faqs: [
    { question: "O site pode ter agendamento ou WhatsApp?", answer: "Sim. O melhor caminho depende do processo da clínica. É possível direcionar para WhatsApp, formulário, agenda externa ou integração específica, desde que o fluxo e o tratamento dos dados sejam avaliados no escopo." },
    { question: "A Ravyt escreve os textos médicos?", answer: "A Ravyt estrutura e redige a comunicação, mas informações clínicas e alegações profissionais devem ser revisadas e aprovadas pelo responsável indicado pela clínica." },
    { question: "É possível criar páginas para cada tratamento?", answer: "Sim, quando cada página responde a uma intenção real e possui conteúdo próprio. A arquitetura evita páginas repetitivas que apenas trocam o nome do procedimento." },
    { question: "O site já fica preparado para aparecer no Google?", answer: "Ele é entregue com uma base técnica rastreável e conteúdo organizado. Indexação e posições dependem de concorrência, relevância, reputação, continuidade editorial e outros sinais; não existe garantia de colocação." },
  ],
  ctaTitle: "Vamos criar uma experiência digital compatível com o cuidado da sua clínica.",
};

export default function Page() { return <ServiceLandingPage data={data} />; }
