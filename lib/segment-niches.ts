type Niche = {
  label: string;
  heading: string;
  intro: string;
  challenge: string;
  challengeText: string;
  site: string;
  google: string;
  seo: string;
  example: string;
  exampleText: string;
};

export const niches: Record<'engenharia' | 'arquitetura' | 'moveis', Niche> = {
  engenharia: {
    label: 'Para empresas de engenharia',
    heading: 'Site para empresas de engenharia, Google e SEO.',
    intro: 'Apresente especialidades, projetos e áreas de atendimento com clareza para quem procura uma empresa de engenharia. A Ravyt cria e mantém o site e organiza sua presença nas pesquisas.',
    challenge: 'Antes de pedir uma proposta, o cliente precisa entender sua atuação.',
    challengeText: 'Quem pesquisa por uma empresa de engenharia quer identificar os tipos de projeto atendidos, a experiência da equipe e como iniciar uma conversa. Um site com seções claras para cada especialidade ajuda a responder essas perguntas.',
    site: 'Estruturamos seções para especialidades, projetos, equipe e contato, com navegação funcional no celular. Domínio, hospedagem, atualizações e suporte fazem parte da assinatura.',
    google: 'Organizamos os dados do Perfil da Empresa no Google, quando a empresa é elegível, para representar corretamente a localização, os serviços e o modo de atendimento.',
    seo: 'Trabalhamos títulos, conteúdo, links internos e aspectos técnicos para que as informações de serviços e projetos possam ser compreendidas pelos mecanismos de busca.',
    example: 'Uma referência visual para engenharia',
    exampleText: 'O projeto Vértice Norte Engenharia, apresentado no portfólio como demonstração conceitual, mostra uma forma de organizar especialidades e projetos sem confundir o visitante.',
  },
  arquitetura: {
    label: 'Para escritórios de arquitetura',
    heading: 'Site para escritórios de arquitetura, Google e SEO.',
    intro: 'Seus projetos precisam mostrar o trabalho e explicar o processo de contratação. A Ravyt cria um site profissional para seu escritório, cuida da manutenção e trabalha a estrutura para pesquisas no Google.',
    challenge: 'Um portfólio precisa ajudar o visitante a tomar uma decisão.',
    challengeText: 'Fotos atraem atenção, mas o potencial cliente também procura saber o tipo de projeto desenvolvido, a região atendida, as etapas do trabalho e como entrar em contato. Contexto e organização tornam o portfólio mais útil.',
    site: 'Criamos seções de projetos e serviços com imagens bem apresentadas, textos objetivos e caminhos claros para contato. A assinatura inclui domínio, hospedagem, atualizações e suporte.',
    google: 'Quando o escritório é elegível ao Perfil da Empresa no Google, cuidamos da consistência das informações de localização, serviços e atendimento.',
    seo: 'Organizamos estrutura, títulos, descrições e links internos para conectar os serviços e projetos às pesquisas relevantes, sem prometer posições específicas.',
    example: 'Uma referência visual para arquitetura',
    exampleText: 'Nina Valença Arquitetura é uma demonstração conceitual do portfólio que apresenta projetos com imagens amplas e uma navegação voltada à leitura do trabalho.',
  },
  moveis: {
    label: 'Para empresas de móveis planejados',
    heading: 'Site para empresas de móveis planejados, Google e SEO.',
    intro: 'Mostre ambientes, materiais e soluções sob medida em um site que facilita o pedido de orçamento. A Ravyt reúne criação e manutenção técnica do site, configuração inicial no Google e SEO inicial.',
    challenge: 'Cada ambiente precisa dar ao cliente um próximo passo claro.',
    challengeText: 'Quem pesquisa móveis planejados compara estilos e possibilidades antes de conversar com uma empresa. Uma apresentação organizada por ambientes pode ajudar o visitante a reconhecer o que procura e solicitar atendimento.',
    site: 'Criamos uma vitrine de ambientes e serviços com informações essenciais e contato acessível no celular. Domínio, hospedagem, atualizações e suporte estão incluídos na assinatura.',
    google: 'Para empresas elegíveis, organizamos o Perfil da Empresa no Google com informações coerentes sobre a atuação e a área local atendida.',
    seo: 'Estruturamos seções para ambientes e serviços, com conteúdo e títulos específicos, com otimização técnica inicial.',
    example: 'Uma referência visual para móveis planejados',
    exampleText: 'Lumea Planejados, uma demonstração conceitual do portfólio, apresenta ambientes em destaque para ajudar a imaginar aplicações do produto.',
  },
};

