export const blogPath = '/blog';
export const instagramSiteArticle = '/blog/instagram-nao-substitui-site-proprio';
export const trustSiteArticle = '/blog/site-bonito-nao-basta';
export const portfolioPlanningArticle = '/blog/como-montar-portfolio-de-arquitetura-e-engenharia';
export const websitePricingArticle = '/quanto-custa-criar-um-site';
export const institutionalPagesArticle = '/site-institucional-paginas-essenciais';
export const hostingArticle = '/blog/dominio-e-hospedagem';
export const technologyArticle = '/blog/como-escolher-tecnologia-do-site';

export const topics = ['Sites', 'Hospedagem e domínios', 'Tecnologia'] as const;

export const articles = [
  {path: portfolioPlanningArticle, title: 'Como montar um portfólio de arquitetura ou engenharia', topic: 'Sites',
    summary: 'Dois roteiros para documentar projetos, obras e serviços com materiais autorizados.'},
  {path: hostingArticle, title: 'Domínio e hospedagem para o site do escritório', topic: 'Hospedagem e domínios',
    summary: 'Saiba quais acessos e custos conferir ao publicar o site de arquitetura ou engenharia, do domínio ao e-mail profissional.'},
  {path: technologyArticle, title: 'Como escolher a tecnologia do site do escritório', topic: 'Tecnologia',
    summary: 'Compare site estático e WordPress pela frequência de atualização, pelas integrações e pela manutenção.'},
  {path: websitePricingArticle, title: 'Quanto custa um site para arquitetos ou engenheiros?', topic: 'Sites',
    summary: 'Veja como o número de páginas, o portfólio, a produção de materiais, as integrações e a hospedagem entram no orçamento de um site para o setor.'},
  {path: institutionalPagesArticle, title: 'Quais páginas o site de arquitetura ou engenharia precisa?', topic: 'Sites',
    summary: 'Organize serviços, portfólio, equipe e contato para que clientes de arquitetura e engenharia saibam quando pedir uma proposta.'},
  {path: trustSiteArticle, title: '7 sinais de que o site do seu escritório precisa de revisão', topic: 'Sites',
    summary: 'Revise sete pontos que podem travar um pedido de proposta em sites de arquitetura e engenharia, da primeira tela ao contato.'},
  {path: instagramSiteArticle, title: 'Instagram e site para arquitetos e engenheiros', topic: 'Sites',
    summary: 'Use as redes sociais para mostrar projetos e obras e o site para apresentar serviços, dar contexto ao portfólio e receber pedidos de proposta.'},
] as const satisfies readonly {path: string; title: string; topic: typeof topics[number]; summary: string}[];

export const articlePaths = new Set<string>(articles.map(article => article.path));

export const topicId = (index: number) => ['sites', 'hospedagem-e-dominios', 'tecnologia'][index];
