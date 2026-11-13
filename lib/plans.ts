export const plans = [
  {
    id: 'essencial', name: 'Site Essencial', price: 'R$ 990', priceNote: 'por projeto',
    description: 'Uma página para apresentar seus serviços e facilitar o contato.',
    details: ['Página única com até 4 seções', 'Layout responsivo adaptado à sua marca', 'Revisão dos textos que você enviar', 'SEO básico, WhatsApp e 1 rodada de ajustes', 'Subdomínio rvt.bio e publicação por 12 meses'],
    timeline: 'Prazo de referência de 5 a 7 dias úteis.'
  },
  {
    id: 'profissional', name: 'Site Profissional', price: 'R$ 2.900', priceNote: 'por projeto',
    description: 'Para empresas que precisam explicar seus serviços, mostrar projetos e receber pedidos de orçamento.',
    details: ['Até 5 páginas com design personalizado', 'Planejamento e redação a partir do seu briefing', 'Portfólio ou galeria conforme o escopo', 'SEO técnico e on-page inicial, com integração ao WhatsApp', 'Configuração do seu domínio e 2 rodadas de ajustes'],
    timeline: 'Prazo de referência de 15 a 25 dias úteis.'
  },
  {
    id: 'sob-medida', name: 'Site Sob Medida', price: 'R$ 4.500', priceNote: 'a partir de',
    description: 'Para projetos que exigem mais páginas, gestão de conteúdo ou recursos específicos.',
    details: ['Design e arquitetura sob medida', 'Blog, painel editorial ou integrações conforme a proposta', 'Domínio próprio e hospedagem adequada ao projeto', 'Cronograma e revisões definidos em proposta'],
    timeline: 'Prazo definido no cronograma aprovado.'
  },
] as const;

export type PlanId = typeof plans[number]['id'];
export const professional = plans[1];

export const questions = [
  { label: 'Que tipo de negócio você tem?', options: ['Empresa de comércio ou serviços', 'Profissional autônomo', 'Instituição ou organização'] },
  { label: 'Como você quer apresentar seu negócio?', options: ['Uma página com serviços e contato', 'De 2 a 5 páginas, com espaço para serviços ou portfólio', 'Mais de 5 páginas ou uma estrutura específica'] },
  { label: 'Em que ponto estão os textos do site?', options: ['Já tenho os textos e as imagens', 'Preciso de ajuda para escrever e organizar o conteúdo'] },
  { label: 'O site precisa de recursos especiais?', options: ['Apresentação, portfólio ou contato', 'Blog, painel, agendamento complexo ou integrações'] },
  { label: 'Qual endereço você pretende usar?', options: ['Um subdomínio rvt.bio atende', 'Quero usar um domínio próprio', 'Ainda estou decidindo'] },
] as const;

export function recommendPlan(answers: number[]) {
  if (answers[1] === 2 || answers[3] === 1) return plans[2];
  if (answers[1] === 1 || answers[2] === 1 || answers[4] === 1) return professional;
  return plans[0];
}

export const offerTitle = 'Criação de Sites Profissionais | Ravyt Digital';
export const offerDescription = 'Sites profissionais para empresas de todo o Brasil. Conheça nossos projetos e o Site Profissional de R$ 2.900 com design personalizado, conteúdo e SEO inicial.';
export const siteManagedOrigin = 'https://clique-aqui.ravytdigital.chatgpt.site';
