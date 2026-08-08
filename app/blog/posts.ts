export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  readingTime: string;
  accent: string;
  intro: string;
  sections: {
    title: string;
    paragraphs: string[];
    list?: string[];
  }[];
};

export const posts: BlogPost[] = [
  {
    slug: "instagram-nao-substitui-site-proprio",
    category: "Presença digital",
    title: "Por que o Instagram não substitui um site próprio?",
    excerpt:
      "Entenda o papel de cada canal e por que depender apenas das redes sociais pode limitar a confiança, a descoberta e o crescimento do seu negócio.",
    date: "2026-08-04",
    dateLabel: "4 de agosto de 2026",
    readingTime: "6 min de leitura",
    accent: "#d8ff5f",
    intro:
      "O Instagram é excelente para gerar proximidade e manter uma conversa frequente. Mas ele não foi criado para organizar toda a história, as soluções e as provas de uma empresa. Quando alguém quer avaliar seu negócio com calma, comparar opções ou confirmar se pode confiar, o site assume outro papel.",
    sections: [
      {
        title: "Rede social é terreno alugado",
        paragraphs: [
          "Nas redes sociais, alcance, formato e distribuição dependem das regras da plataforma. Uma mudança no algoritmo pode reduzir a visibilidade; uma instabilidade pode interromper o contato. O site é um ativo próprio: sua empresa controla a experiência, a mensagem e o caminho até a conversão.",
        ],
      },
      {
        title: "O cliente pesquisa antes de conversar",
        paragraphs: [
          "Mesmo quando a descoberta acontece pelo Instagram, é comum que a pessoa procure o nome da empresa no Google. Nesse momento, um site bem estruturado confirma informações, responde objeções e transmite estabilidade.",
          "Sem essa presença, o potencial cliente precisa montar sozinho o quebra-cabeça da sua marca a partir de posts, destaques e comentários.",
        ],
      },
      {
        title: "Cada canal deve cumprir sua função",
        paragraphs: [
          "A melhor estratégia não é escolher entre Instagram e site. É fazer os dois trabalharem juntos.",
        ],
        list: [
          "Instagram para descoberta, relacionamento e frequência.",
          "Site para organização, autoridade, busca e conversão.",
          "Contato direto para atendimento, diagnóstico e fechamento.",
        ],
      },
      {
        title: "Quando o site passa a ser prioridade",
        paragraphs: [
          "Se sua empresa já entrega bem, recebe indicações ou investe em conteúdo, mas ainda parece improvisada quando alguém pesquisa por ela, o site deixa de ser um detalhe. Ele se torna a estrutura que sustenta a percepção de valor construída nos outros canais.",
        ],
      },
    ],
  },
  {
    slug: "site-bonito-nao-basta",
    category: "Estratégia e conversão",
    title: "Um site bonito não basta: 7 sinais de que ele não gera confiança",
    excerpt:
      "Design chama atenção, mas clareza, velocidade e coerência determinam se o visitante avança ou abandona a página.",
    date: "2026-08-01",
    dateLabel: "1 de agosto de 2026",
    readingTime: "7 min de leitura",
    accent: "#b88cff",
    intro:
      "Um site pode parecer moderno e ainda assim não ajudar o negócio. A estética abre a porta, mas é a experiência completa que reduz dúvidas e faz o visitante sentir que encontrou uma empresa preparada.",
    sections: [
      {
        title: "Os sinais que merecem atenção",
        paragraphs: [
          "Quando diferentes problemas se acumulam, o visitante percebe esforço, mesmo sem saber explicar o motivo.",
        ],
        list: [
          "A primeira tela não deixa claro o que a empresa faz.",
          "Os textos falam da empresa, mas não da necessidade do cliente.",
          "Não existem provas, projetos, clientes ou contexto real.",
          "O contato está escondido ou exige passos demais.",
          "A navegação muda de lógica entre páginas.",
          "O site demora a abrir no celular.",
          "A identidade visual não combina com o posicionamento e o preço.",
        ],
      },
      {
        title: "Confiança nasce da coerência",
        paragraphs: [
          "O cliente compara o que você promete com o que apresenta. Se uma empresa vende excelência, mas seu site tem informações desatualizadas, imagens ruins ou estrutura confusa, surge uma contradição. Essa distância reduz o valor percebido antes mesmo da conversa comercial.",
        ],
      },
      {
        title: "Clareza vem antes do efeito",
        paragraphs: [
          "Animações e recursos visuais podem enriquecer a experiência, desde que orientem a atenção. O efeito certo destaca uma mensagem; o efeito em excesso compete com ela. A prioridade continua sendo explicar, provar e conduzir.",
        ],
      },
      {
        title: "O que avaliar na prática",
        paragraphs: [
          "Abra seu site no celular e tente responder em poucos segundos: para quem é, qual problema resolve, por que confiar e como começar? Se alguma resposta exigir esforço, existe uma oportunidade concreta de melhoria.",
        ],
      },
    ],
  },
  {
    slug: "pagina-de-vendas-ou-site-institucional",
    category: "Sites",
    title:
      "Página de vendas ou site institucional: qual faz sentido para o seu negócio?",
    excerpt:
      "Os dois formatos podem vender, mas resolvem problemas diferentes. Veja como escolher sem investir na estrutura errada.",
    date: "2026-07-28",
    dateLabel: "28 de julho de 2026",
    readingTime: "5 min de leitura",
    accent: "#ffb6dc",
    intro:
      "A escolha não depende apenas do tamanho do projeto. Depende da quantidade de decisões que o visitante precisa tomar, da variedade de soluções oferecidas e do estágio atual do negócio.",
    sections: [
      {
        title: "Quando escolher uma página de vendas",
        paragraphs: [
          "A página de vendas concentra a atenção em uma única oferta. Ela funciona bem para lançamentos, livros, eventos, cursos, campanhas e serviços específicos.",
        ],
        list: [
          "Existe uma oferta principal.",
          "O público e a promessa estão bem definidos.",
          "A campanha precisa levar a uma ação única.",
          "Os argumentos podem seguir uma sequência linear.",
        ],
      },
      {
        title: "Quando escolher um site institucional",
        paragraphs: [
          "O site institucional organiza uma empresa inteira. Ele permite apresentar diferentes serviços, história, equipe, projetos, unidades, conteúdos e formas de contato sem forçar tudo em uma única narrativa.",
        ],
        list: [
          "A empresa possui mais de uma solução.",
          "A reputação institucional influencia a compra.",
          "O cliente pesquisa antes de pedir orçamento.",
          "Há necessidade de crescer no Google com páginas e conteúdos.",
        ],
      },
      {
        title: "E quando os dois são necessários?",
        paragraphs: [
          "Uma estrutura não exclui a outra. O site pode funcionar como base de autoridade, enquanto páginas específicas apoiam campanhas e ofertas. Essa combinação é comum em empresas que precisam fortalecer a marca e, ao mesmo tempo, converter tráfego de anúncios.",
        ],
      },
      {
        title: "A decisão deve começar pelo objetivo",
        paragraphs: [
          "Antes de escolher o formato, defina o que a pessoa precisa entender e fazer. A arquitetura correta nasce dessa resposta — não de uma preferência estética ou de uma lista genérica de páginas.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
