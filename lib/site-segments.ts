export const siteSegments = {
  arquitetura: {
    path: '/sites-para-escritorios-de-arquitetura',
    sectionId: 'arquitetura',
    label: 'Arquitetura e interiores',
    briefing: 'Conte que tipos de projeto o escritório oferece e quais trabalhos gostaria de mostrar no site.',
    summary: 'Organize seu portfólio por tipologia, mostre as decisões por trás de cada projeto e explique como funciona a contratação, do estudo inicial ao projeto executivo.',
  },
  engenharia: {
    path: '/sites-para-empresas-de-engenharia',
    sectionId: 'engenharia',
    label: 'Engenharia e construção',
    briefing: 'Conte quais serviços técnicos sua empresa oferece e quais obras ou projetos gostaria de apresentar.',
    summary: 'Apresente especialidades, escopo e obras entregues. Ajude quem compara fornecedores a entender a experiência da equipe e enviar um pedido com a cidade, o serviço e a fase da obra.',
  },
} as const;

export type SiteSegmentId = keyof typeof siteSegments;

export function findSiteSegment(value: unknown) {
  return value === 'arquitetura' || value === 'engenharia' ? siteSegments[value] : undefined;
}
