// Project names and demonstration status checked against the owner-supplied sites.
// One annual plan and contact information supplied by the owner.
// Do not infer prices, client work or contact details from other projects.
export const homeContent = {
  contacts: [
    {id:'ytala-cabral',name:'Ytala Cabral',number:'5588996956479',display:'(88) 99695-6479'},
    {id:'marcio-cabral',name:'Marcio Cabral',number:'5588996777332',display:'(88) 99677-7332'},
  ],
  projects: [
  {
    "id": "ananda-oliveira",
    "name": "Ananda Oliveira",
    "category": "Consultoria de imagem",
    "description": "Site para apresentação dos serviços de imagem e coloração pessoal.",
    "image": "/projects/ananda-oliveira.webp",
    "demo": false
  },
  {
    "id": "mirauna",
    "name": "Miraúna Mobiliário",
    "category": "Mobiliário sob medida",
    "description": "Apresentação de ambientes e soluções para móveis sob medida.",
    "image": "/projects/mirauna.webp",
    "demo": true
  },
  {
    "id": "vertice-norte",
    "name": "Vértice Norte Engenharia",
    "category": "Engenharia civil",
    "description": "Apresentação de serviços de engenharia e projetos.",
    "image": "/projects/vertice-norte.webp",
    "demo": true
  },
  {
    "id": "nina-valenca",
    "name": "Nina Valença Arquitetura",
    "category": "Arquitetura e interiores",
    "description": "Portfólio de arquitetura com projetos e apresentação profissional.",
    "image": "/projects/nina-valenca.webp",
    "demo": true
  },
  {
    "id": "lumea",
    "name": "Lumea Planejados",
    "category": "Móveis planejados",
    "description": "Apresentação de ambientes e marcenaria planejada.",
    "image": "/projects/lumea.webp",
    "demo": true
  },
  {
    "id": "arvona",
    "name": "Arvona Home Center",
    "category": "Construção e acabamento",
    "description": "Site de apresentação de produtos e soluções para a casa.",
    "image": "/projects/arvona.webp",
    "demo": true
  },
  {
    "id": "capoeira-haute-savoie",
    "name": "Capoeira Haute-Savoie",
    "category": "Esporte e cultura",
    "description": "Site em francês com aulas, eventos e informações da associação.",
    "image": "/projects/capoeira-haute-savoie.webp",
    "demo": false
  },
  {
    "id": "cerest-tiangua",
    "name": "CEREST Tianguá",
    "category": "Saúde do trabalhador",
    "description": "Site com informações institucionais e orientações de atendimento.",
    "image": "/projects/cerest-tiangua.webp",
    "demo": false
  },
  {
    "id": "serra-norte",
    "name": "Serra Norte Distribuição",
    "category": "Distribuição de alimentos",
    "description": "Site de apresentação de produtos e atendimento comercial.",
    "image": "/projects/serra-norte.webp",
    "demo": true
  }
],
  plan: {name:'Plano anual Ravyt Digital',priceLabel:'R$ 597,00',period:'por ano',bonus:'Cartão NFC para avaliações no Google'},
};
export const whatsappHref = (number:string) => `https://wa.me/${number}?text=${encodeURIComponent('Olá! Quero conversar sobre a presença digital do meu negócio.')}`;
export const contactLabel = 'Fale com nossos especialistas';
