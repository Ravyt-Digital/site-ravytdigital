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
    image?: {
      src: string;
      alt: string;
      caption?: string;
    };
  }[];
  sources?: {
    label: string;
    url: string;
  }[];
};

export const posts: BlogPost[] = [
  {
    slug: "seo-information-gain-busca-generativa",
    category: "SEO e busca",
    title: "O novo paradigma da busca: do SEO clássico ao Information Gain e à IA generativa",
    excerpt:
      "Entenda o que realmente mudou no SEO, como criar conteúdo que acrescenta informação útil e por que a busca generativa aumenta a importância de clareza, autoria e profundidade.",
    date: "2026-08-14",
    dateLabel: "14 de agosto de 2026",
    readingTime: "12 min de leitura",
    accent: "#b86e4a",
    intro:
      "Durante anos, muita estratégia de SEO seguiu uma fórmula previsível: encontrar uma palavra-chave, observar quem já estava no topo e produzir uma versão maior do mesmo assunto. Esse modelo ficou insuficiente. Hoje, o desafio não é apenas responder à busca. É acrescentar algo que ajude de verdade, provar de onde a informação veio e organizar o conteúdo para que pessoas, mecanismos de busca e sistemas de IA consigam compreendê-lo.",
    sections: [
      {
        title: "SEO não morreu. O padrão de qualidade ficou mais alto",
        paragraphs: [
          "A Pesquisa Google continua dependendo de fundamentos conhecidos: rastreabilidade, relevância, boa experiência de página, links compreensíveis e conteúdo útil. A mudança está na capacidade dos sistemas atuais de interpretar contexto e qualidade com muito mais profundidade do que a simples repetição de termos.",
          "Por isso, escrever para uma palavra-chave já não é uma estratégia completa. Um artigo precisa responder à intenção principal, cobrir as dúvidas que surgem ao redor dela e apresentar uma estrutura que permita ao leitor encontrar rapidamente o que procura.",
          "A busca generativa reforça esse movimento. Recursos como AI Overviews e AI Mode continuam apoiados no índice e nos sistemas centrais da Pesquisa. Ou seja: não existe um segundo SEO secreto para IA. Existe uma exigência maior por conteúdo rastreável, claro, útil e confiável.",
        ],
        image: {
          src: "/blog/seo-information-gain-busca-generativa.svg",
          alt: "Diagrama mostrando a evolução do SEO clássico para ganho de informação e busca generativa",
          caption: "A evolução não elimina o SEO tradicional; ela amplia o que um bom conteúdo precisa entregar.",
        },
      },
      {
        title: "Information Gain: a pergunta certa é 'o que este conteúdo acrescenta?'",
        paragraphs: [
          "Information Gain, ou ganho de informação, é uma lente útil para avaliar conteúdo: depois de ler as páginas que já existem sobre o assunto, o que uma nova página oferece que ainda ajuda o usuário a avançar? Pode ser um dado próprio, uma experiência real, uma comparação melhor, um método mais claro, uma opinião especializada ou uma conexão que os outros conteúdos não fizeram.",
          "É importante separar a ideia estratégica de uma afirmação que o Google não faz publicamente: não há documentação oficial dizendo que todo resultado recebe uma nota simples e visível de Information Gain usada isoladamente para ranquear páginas. O que o Google documenta é a preferência por conteúdo original, substancial e criado para pessoas, além do uso de diversos sistemas e sinais de qualidade.",
          "Na prática, a consequência é excelente para quem produz conteúdo sério: copiar o consenso da primeira página e apenas aumentar o número de palavras tende a criar mais do mesmo. O diferencial passa a ser a informação que só a sua empresa, sua experiência ou sua análise consegue acrescentar.",
        ],
        list: [
          "Dados ou aprendizados obtidos em projetos reais.",
          "Exemplos próprios, com contexto suficiente para serem úteis.",
          "Comparações que mostrem critérios, e não apenas vencedores.",
          "Perspectivas de especialistas identificados e verificáveis.",
          "Sínteses que conectem informações dispersas e expliquem a consequência prática.",
        ],
      },
      {
        title: "Na busca generativa, ser fonte importa mais do que parecer completo",
        paragraphs: [
          "O Google explica que suas experiências generativas usam técnicas como Retrieval-Augmented Generation, ou RAG, para recuperar páginas relevantes e atualizadas do índice e fundamentar respostas. Isso mantém o SEO tradicional no centro: uma página precisa ser descoberta, compreendida e considerada útil antes de poder contribuir para uma resposta gerada por IA.",
          "Outro mecanismo importante é o query fan-out. Em vez de tratar uma pergunta como uma única consulta, sistemas generativos podem explorar variações e subtópicos relacionados. Para o conteúdo, isso aumenta o valor de uma boa cobertura semântica: responder à pergunta central e também às questões que naturalmente vêm depois.",
          "Isso não significa fragmentar artificialmente cada parágrafo ou escrever para robôs. Significa organizar conceitos, usar títulos descritivos, explicar relações entre entidades e apresentar fatos de forma suficientemente clara para que o leitor — e os sistemas — entendam exatamente o que cada trecho está dizendo.",
        ],
      },
      {
        title: "E-E-A-T começa com confiança, não com uma sigla",
        paragraphs: [
          "E-E-A-T reúne experiência, especialização, autoridade e confiabilidade. O próprio Google ressalta que confiança é o elemento central e que E-E-A-T não funciona como um único fator de ranqueamento. A utilidade está em usar esses princípios para avaliar se o conteúdo merece credibilidade.",
          "Uma forma prática de aplicar isso é responder a três perguntas editoriais: quem criou, como foi criado e por que foi criado. A autoria precisa ser clara; o processo deve ser explicado quando isso ajuda o leitor; e a razão principal para publicar precisa ser resolver uma necessidade real, não apenas capturar tráfego.",
          "O uso de IA também entra nessa discussão. Automação pode apoiar pesquisa, organização e produção, mas não substitui revisão, responsabilidade editorial ou informação original. Quando o modo de produção for relevante para a confiança do leitor, a transparência sobre o processo é recomendável.",
        ],
        image: {
          src: "/blog/eeat-quem-como-porque.svg",
          alt: "Infográfico E-E-A-T mostrando as perguntas quem, como e por quê",
          caption: "Quem, como e por quê transformam E-E-A-T em um processo editorial verificável.",
        },
      },
      {
        title: "Autoridade tópica nasce de arquitetura, não de volume",
        paragraphs: [
          "Publicar dezenas de textos desconectados não cria automaticamente autoridade sobre um tema. Uma arquitetura Hub-and-Spoke organiza o conhecimento: uma página pilar apresenta o assunto amplo e conteúdos especializados aprofundam dúvidas, casos, comparações e aplicações específicas.",
          "Os links internos fazem parte dessa arquitetura. Uma âncora descritiva ajuda o leitor e o mecanismo de busca a entenderem o que existe na página de destino. Em vez de 'clique aqui', prefira dizer exatamente qual conteúdo será encontrado.",
          "O mesmo princípio vale para entidades e atributos. Um bom artigo não repete apenas a palavra-chave principal; ele explica pessoas, conceitos, ferramentas, métricas, relações, causas e consequências que compõem o assunto. Isso cria profundidade sem depender de texto inflado.",
        ],
        image: {
          src: "/blog/arquitetura-conteudo-seo.svg",
          alt: "Diagrama Hub-and-Spoke com página pilar, artigos especializados e base técnica",
          caption: "A autoridade temática é construída por relações explícitas entre conteúdos, não por uma coleção de posts isolados.",
        },
      },
      {
        title: "Sem base técnica, o melhor conteúdo pode ficar invisível",
        paragraphs: [
          "Conteúdo e infraestrutura precisam trabalhar juntos. Uma página indexável deve estar acessível, responder corretamente, permitir rastreamento e oferecer HTML que o Google consiga processar. Em aplicações muito dependentes de JavaScript, a renderização também precisa ser considerada.",
          "Para SPAs, o Google recomenda URLs reais e a History API em vez de navegação baseada em fragmentos para trocar o conteúdo principal. Links importantes devem usar elementos <a> com href. Erros precisam retornar estados HTTP coerentes, e sitemaps devem refletir alterações reais em vez de atualizar datas artificialmente.",
          "Desempenho também faz parte da experiência. LCP, CLS e INP ajudam a medir carregamento, estabilidade visual e responsividade. Não são uma licença para sacrificar clareza em busca de uma pontuação perfeita, mas são sinais importantes de que a interface respeita o tempo e a interação do usuário.",
        ],
        list: [
          "Páginas públicas e rastreáveis, sem bloqueios acidentais.",
          "URLs estáveis e status HTTP corretos.",
          "Imagens com src válido, dimensões adequadas e texto alternativo útil.",
          "HTML semântico para títulos, links, botões, listas e formulários.",
          "Sitemap atualizado quando o conteúdo realmente muda.",
          "Boa experiência mobile e Core Web Vitals acompanhados continuamente.",
        ],
      },
      {
        title: "O que não fazer para 'otimizar para IA'",
        paragraphs: [
          "A transformação da busca criou um novo mercado de atalhos. Mas as orientações oficiais do Google para recursos generativos são surpreendentemente consistentes: continue aplicando os fundamentos de SEO e produza conteúdo útil. Não há marcação Schema exclusiva que garanta presença em AI Overviews ou AI Mode.",
          "Também é arriscado transformar especulação em regra. Tecnologias emergentes, novos protocolos e arquivos propostos pela comunidade podem ser interessantes para experimentação, mas não devem ser apresentados como requisito de indexação ou de visibilidade em IA sem documentação oficial que sustente essa afirmação.",
          "O melhor investimento continua sendo difícil de falsificar: experiência real, informação própria, fontes confiáveis, arquitetura clara e uma página tecnicamente sólida.",
        ],
      },
      {
        title: "Um protocolo editorial para os próximos conteúdos",
        paragraphs: [
          "Na Ravyt Digital, este passa a ser o padrão de produção: antes de escrever, entender a intenção e o que já existe; durante a pesquisa, mapear lacunas e fontes; na redação, acrescentar valor real; na publicação, estruturar autoria, links, dados e mídia; depois, acompanhar desempenho e atualizar quando houver mudança substancial.",
          "O objetivo não é produzir o artigo mais longo. É produzir o artigo que resolve melhor a pergunta, oferece informação que vale citar e deixa claro por que aquela página merece ser encontrada.",
        ],
        list: [
          "1. Mapear intenção, SERP, entidades e dúvidas relacionadas.",
          "2. Identificar o consenso e decidir qual informação nova será adicionada.",
          "3. Validar fatos em fontes primárias sempre que possível.",
          "4. Estruturar títulos, imagens, links internos e dados estruturados.",
          "5. Revisar clareza, autoria, acessibilidade e experiência mobile.",
          "6. Publicar, medir e atualizar apenas quando houver ganho real para o leitor.",
        ],
      },
    ],
    sources: [
      {
        label: "Google Search Central — Criar conteúdo útil, confiável e que prioriza as pessoas",
        url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pt-BR",
      },
      {
        label: "Google Search Central — Otimização para recursos de IA generativa na Pesquisa",
        url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
      },
      {
        label: "Google Search Central — Dados estruturados de Article e BlogPosting",
        url: "https://developers.google.com/search/docs/appearance/structured-data/article?hl=pt-BR",
      },
      {
        label: "Google Search Central — Princípios básicos de SEO em JavaScript",
        url: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=pt-BR",
      },
    ],
  },
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
