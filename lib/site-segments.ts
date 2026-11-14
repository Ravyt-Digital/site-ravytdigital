export const siteSegments = {
  arquitetura: {
    path: '/sites-para-escritorios-de-arquitetura',
    title: 'Criação de Site para Arquitetos e Escritórios | Ravyt Digital',
    description: 'Site para arquitetos e escritórios de interiores com portfólio, páginas de serviços e contato. Conheça o escopo do projeto de R$ 2.900.',
    label: 'Arquitetura e interiores',
    name: 'Site para arquitetos',
    emphasis: 'e escritórios de interiores',
    intro: 'Reúna projetos, serviços e processo de trabalho em um endereço. Quem chega por indicação consegue ver o tipo de projeto que você faz e pedir uma proposta com mais contexto.',
    projectId: 'nina-valenca',
    projectCaption: 'A página inicial apresenta a área de atuação e leva o visitante aos projetos. O conceito usa fotos amplas e textos curtos para ajudar na escolha de um projeto para explorar.',
    summary: 'Apresente projetos, especialidades e etapas do seu escritório antes da primeira conversa.',
    briefing: 'Conte que tipos de projeto o escritório oferece e quais trabalhos gostaria de mostrar no site.',
    cardsTitle: 'O que seu cliente precisa ver antes de chamar',
    cards: [
      ['Projetos com contexto', 'Uma galeria organizada por tipologia, como residências, interiores ou espaços comerciais. Mostre o desafio, as escolhas de projeto e o que já foi executado, com imagens autorizadas.'],
      ['Serviços e etapas', 'Explique o que está no escopo, do estudo inicial ao projeto executivo, e indique como funciona o acompanhamento de obra quando ele faz parte do serviço.'],
      ['Contato com contexto', 'O pedido de orçamento pode indicar o tipo de projeto, a cidade e a etapa atual. Assim o escritório começa a conversa sabendo o que a pessoa precisa.'],
    ],
    checklistTitle: 'O que separar para montar o portfólio',
    checklist: [
      'Três a seis projetos que representem o trabalho que você quer vender, com identificação de fotos, renderizações e créditos.',
      'Um parágrafo por projeto com o pedido do cliente, a decisão do escritório e o estágio de execução.',
      'A lista de serviços, as regiões atendidas de fato e as informações que você precisa para responder a um pedido de proposta.',
    ],
    faq: [
      ['Posso publicar projetos que ainda estão em desenvolvimento?', 'Sim. Use o estágio correto e identifique as imagens como estudos ou renderizações quando for o caso. Fotos e materiais de terceiros precisam de autorização para publicação.'],
      ['Posso começar com poucos projetos?', 'Sim. Três projetos bem explicados já dão material para uma galeria inicial. Se houver pouco material visual, podemos começar pelos serviços e planejar a ampliação do portfólio.'],
      ['A Ravyt atende escritórios fora do Ceará?', 'Sim. O briefing, as revisões e a entrega acontecem online para escritórios de todo o Brasil. O site descreve as cidades e regiões que o seu escritório atende de fato.'],
    ],
  },
  engenharia: {
    path: '/sites-para-empresas-de-engenharia',
    title: 'Site para Empresas de Engenharia e Construtoras | Ravyt Digital',
    description: 'Criação de site para engenharia civil e construtoras, com serviços técnicos, obras e projetos documentados e formulário para pedidos de proposta.',
    label: 'Engenharia civil e construção',
    name: 'Site para empresas de engenharia',
    emphasis: 'e construtoras',
    intro: 'Apresente escopos técnicos, obras e projetos para quem está comparando fornecedores. Dê a gestores, síndicos e empresas um caminho para consultar sua experiência e pedir uma proposta.',
    projectId: 'vertice-norte',
    projectCaption: 'A demonstração organiza especialidades, apresentação da empresa e contato comercial. Ela mostra como um comprador pode localizar o serviço e iniciar uma conversa.',
    summary: 'Mostre escopos técnicos, obras e a experiência da sua equipe para quem compara fornecedores.',
    briefing: 'Conte quais serviços técnicos sua empresa oferece e quais obras ou projetos gostaria de apresentar.',
    cardsTitle: 'O que facilita a avaliação de um fornecedor',
    cards: [
      ['Serviços com escopo definido', 'Organize a navegação pelo que a empresa entrega, como projetos complementares, laudos, gerenciamento ou execução. Explique em que etapa o cliente pode contratar cada serviço.'],
      ['Obras e projetos documentados', 'Descreva o problema, o escopo assumido pela equipe, a etapa da obra e a entrega. Inclua fotos, desenhos ou dados técnicos que a empresa esteja autorizada a divulgar.'],
      ['Qualificação e pedido de proposta', 'Apresente a equipe e os registros pertinentes quando confirmados. Oriente o comprador a informar cidade, serviço e fase do projeto para a empresa avaliar a solicitação.'],
    ],
    checklistTitle: 'O que reunir antes do briefing',
    checklist: [
      'Serviços que a empresa executa, tipos de contratante e região que a equipe consegue atender.',
      'Projetos ou obras com escopo verificável, papel da equipe e materiais liberados para publicação.',
      'Credenciais e informações técnicas validadas pela empresa, além dos dados mínimos para responder a um pedido de proposta.',
    ],
    faq: [
      ['Uma construtora pode usar esta estrutura?', 'Sim. A página pode organizar tipos de obra, regiões atendidas e projetos entregues ou em andamento. Catálogos de empreendimentos, áreas de clientes e integrações entram em um escopo próprio.'],
      ['Como apresentar obras com informações confidenciais?', 'Publique apenas o que estiver autorizado. Quando permitido, apresente o tipo de obra, o escopo e a etapa da entrega sem identificar o cliente ou divulgar plantas e relatórios protegidos.'],
      ['O site pode atender compradores de outras regiões?', 'Sim. A Ravyt trabalha online em todo o Brasil e o conteúdo explica a área de atuação da sua empresa. Você pode detalhar onde atende presencialmente e quais serviços presta a distância.'],
    ],
  },
} as const;

export type SiteSegmentId = keyof typeof siteSegments;
export const siteSegmentPaths = Object.values(siteSegments).map(segment => segment.path);

export function findSiteSegment(value: unknown) {
  return value === 'arquitetura' || value === 'engenharia' ? siteSegments[value] : undefined;
}

export function segmentProposalHref(id: SiteSegmentId) {
  return '/proposta?plano=profissional&segmento=' + id;
}
