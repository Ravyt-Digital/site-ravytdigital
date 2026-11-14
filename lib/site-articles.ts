export const blogPath = '/blog';
export const instagramSiteArticle = '/blog/instagram-nao-substitui-site-proprio';
export const trustSiteArticle = '/blog/site-bonito-nao-basta';
export const portfolioPlanningArticle = '/blog/como-montar-portfolio-de-arquitetura-e-engenharia';
export const websitePricingArticle = '/quanto-custa-criar-um-site';
export const institutionalPagesArticle = '/site-institucional-paginas-essenciais';
export const siteOrAppArticle = '/blog/site-ou-aplicativo';
export const hostingArticle = '/blog/dominio-e-hospedagem';
export const technologyArticle = '/blog/como-escolher-tecnologia-site-ou-app';

export const topics = ['Sites', 'Aplicativos', 'Hospedagem e domínios', 'Tecnologia'] as const;

export const articles = [
  {path: siteOrAppArticle, title: 'Site ou aplicativo? Como decidir pelo que começar', topic: 'Aplicativos',
    summary: 'Compare um site, um sistema acessado no navegador e um app para celular pelo que as pessoas precisam fazer.'},
  {path: hostingArticle, title: 'Domínio e hospedagem: o que você precisa contratar?', topic: 'Hospedagem e domínios',
    summary: 'Entenda quem deve controlar o domínio, o que a hospedagem cobre e quais custos acompanhar depois da publicação.'},
  {path: technologyArticle, title: 'Como escolher a tecnologia de um site ou aplicativo', topic: 'Tecnologia',
    summary: 'Use a rotina de atualização, as integrações e a manutenção para comparar as opções antes de fechar o escopo.'},
  {path: websitePricingArticle, title: 'Quanto custa criar um site profissional?', topic: 'Sites',
    summary: 'Veja como páginas, conteúdo, integrações e custos recorrentes entram no orçamento.'},
  {path: institutionalPagesArticle, title: 'Quais páginas um site institucional precisa?', topic: 'Sites',
    summary: 'Organize o site pelo que o cliente precisa entender antes de entrar em contato.'},
  {path: portfolioPlanningArticle, title: 'Como montar um portfólio de arquitetura ou engenharia', topic: 'Sites',
    summary: 'Dois roteiros para documentar projetos, obras e serviços com materiais autorizados.'},
  {path: trustSiteArticle, title: 'Sete sinais de que seu site precisa transmitir mais confiança', topic: 'Sites',
    summary: 'Revise da primeira tela ao pedido de orçamento com um teste simples no celular.'},
  {path: instagramSiteArticle, title: 'Instagram e site próprio: como usar os dois', topic: 'Sites',
    summary: 'Use o Instagram para despertar interesse e o site para responder às perguntas de contratação.'},
] as const satisfies readonly {path: string; title: string; topic: typeof topics[number]; summary: string}[];

export const articlePaths = new Set<string>(articles.map(article => article.path));

export const topicId = (index: number) => ['sites', 'aplicativos', 'hospedagem-e-dominios', 'tecnologia'][index];
