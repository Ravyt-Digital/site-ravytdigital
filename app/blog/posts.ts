export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  modifiedDate?: string;
  modifiedDateLabel?: string;
  readingTime: string;
  accent: string;
  intro: string;
  keyTakeaways?: string[];
  methodology?: string;
  sections: {
    title: string;
    paragraphs: string[];
    list?: string[];
    table?: {
      caption: string;
      headers: string[];
      rows: string[][];
    };
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

const allPosts: BlogPost[] = [
  {
    slug: "mercado-sites-seo-local-ceara",
    category: "Pesquisa e SEO local",
    title: "Mercado de sites e SEO local no Ceará: onde a presença digital ainda perde valor",
    excerpt:
      "Uma leitura crítica dos principais polos cearenses mostra por que site próprio, clareza de oferta e presença local verificável importam mais do que criar páginas genéricas para cada cidade.",
    date: "2026-08-17",
    dateLabel: "17 de agosto de 2026",
    readingTime: "11 min de leitura",
    accent: "#b86e4a",
    intro:
      "O Ceará reúne mercados urbanos relevantes, profissionais especializados e negócios que já vendem qualidade, mas ainda comunicam essa qualidade de forma fragmentada. A análise de dois levantamentos internos sobre presença digital e oferta de criação de sites no estado aponta uma oportunidade consistente: empresas locais podem reduzir a dependência de redes sociais e intermediários quando constroem um ativo próprio, tecnicamente sólido e conectado à realidade de cada mercado. O ponto decisivo, porém, não é publicar dezenas de páginas trocando apenas o nome da cidade. É demonstrar conhecimento regional, utilidade e prova.",
    keyTakeaways: [
      "Os oito municípios cearenses acima de 100 mil habitantes no Censo 2022 somam 3.875.188 pessoas — cerca de 44,1% da população do estado.",
      "As lacunas de busca observadas nos relatórios são sinais exploratórios, não uma garantia de posição, prazo ou retorno.",
      "Uma página regional forte precisa reunir oferta clara, experiência real, prova, dados locais verificáveis e um caminho simples de contato.",
      "Escalar páginas quase idênticas por cidade ou profissão cria pouco valor e pode se aproximar de práticas de conteúdo em escala que o Google desaconselha.",
    ],
    methodology:
      "A Ravyt comparou os dois relatórios enviados para este estudo, recalculou os totais demográficos com os resultados oficiais do Censo 2022 e confrontou as recomendações com a documentação atual do Google Search. As observações de resultados de busca presentes nos relatórios foram tratadas como uma fotografia exploratória: SERPs mudam por localização, dispositivo, histórico e momento da consulta. Por isso, este artigo não publica percentuais de domínio orgânico sem uma amostra reproduzível nem promete prazo para chegar ao topo.",
    sections: [
      {
        title: "O tamanho da oportunidade precisa começar por dados corretos",
        paragraphs: [
          "Os dois levantamentos convergem ao destacar oito polos com mais de 100 mil habitantes: Fortaleza, Caucaia, Juazeiro do Norte, Maracanaú, Sobral, Itapipoca, Crato e Maranguape. Ao recalcular os dados do Censo 2022, o conjunto soma 3.875.188 pessoas, aproximadamente 44,1% dos 8.794.957 habitantes do Ceará naquele censo.",
          "Essa concentração não prova, sozinha, demanda por um serviço digital. Ela mostra onde existe densidade de negócios, pessoas e decisões. O passo seguinte é cruzar população com características econômicas, especialidades predominantes, comportamento de busca e maturidade da oferta local — sem transformar correlação em promessa comercial.",
          "A revisão também encontrou uma diferença de 30 habitantes no número de Fortaleza usado em um dos relatórios. O valor oficial do Censo 2022 é 2.428.708. Corrigir pequenas divergências é parte do trabalho de produzir conteúdo confiável: uma narrativa forte não compensa uma base numérica frágil.",
        ],
        table: {
          caption: "População dos oito municípios cearenses acima de 100 mil habitantes no Censo 2022",
          headers: ["Município", "População", "Leitura de mercado"],
          rows: [
            ["Fortaleza", "2.428.708", "Capital e maior concentração de serviços"],
            ["Caucaia", "355.679", "RMF, comércio, logística e turismo"],
            ["Juazeiro do Norte", "286.120", "Polo comercial, educacional e de saúde do Cariri"],
            ["Maracanaú", "234.392", "Polo industrial e demanda B2B"],
            ["Sobral", "203.023", "Polo universitário, industrial e hospitalar"],
            ["Itapipoca", "131.123", "Centro comercial do Litoral Norte"],
            ["Crato", "131.050", "Polo cultural, educacional e de serviços"],
            ["Maranguape", "105.093", "Mercado residencial e industrial da RMF"],
          ],
        },
      },
      {
        title: "O problema não é ter Instagram; é depender de um canal alugado",
        paragraphs: [
          "Redes sociais são valiosas para descoberta, relacionamento, bastidores e frequência. O site cumpre outra função: organiza a oferta, preserva conteúdos importantes, apresenta prova, responde dúvidas e cria uma rota própria entre a pesquisa e o contato.",
          "Nos mercados analisados, essa diferença é especialmente relevante para serviços de maior consideração, como saúde, advocacia, arquitetura, engenharia e consultoria. Antes de iniciar uma conversa, o potencial cliente costuma precisar entender especialidade, método, limites, localização atendida e sinais de confiança. Um perfil social pode apoiar essa percepção, mas raramente organiza todos esses elementos com a mesma estabilidade.",
          "A oportunidade, portanto, não deve ser vendida como uma disputa entre Instagram e Google. A estrutura mais madura define o papel de cada canal: a rede social mantém presença e proximidade; o site concentra autoridade, descoberta e decisão; o atendimento conclui a conversa.",
        ],
      },
      {
        title: "O que os relatórios revelam — e o que eles não conseguem provar",
        paragraphs: [
          "Os relatórios registram presença frequente de diretórios, agregadores e páginas de empresas de outras regiões em consultas locais. Esse padrão é um bom ponto de partida para uma auditoria comercial, porque sugere que parte da demanda pode não encontrar uma resposta regional forte e claramente identificada.",
          "Mas uma captura de resultados não mede participação de mercado, volume de busca ou retorno. Resultados variam por contexto, e ferramentas de palavra-chave também trabalham com estimativas. Antes de escolher uma prioridade, a Ravyt recomenda repetir consultas em ambiente controlado, registrar data e localização, mapear a intenção, analisar o conjunto de concorrentes e confrontar a hipótese com conversas reais de clientes.",
          "Também não existe base responsável para prometer TOP 3 em poucas semanas. Rastreamento, indexação e posição dependem de concorrência, qualidade, histórico, links, entidade, experiência e muitos outros sinais. SEO é construção de ativo e aprendizado contínuo, não garantia de colocação.",
        ],
        list: [
          "Trate a SERP como evidência observável, não como verdade permanente.",
          "Separe volume estimado de demanda comercial comprovada.",
          "Registre a metodologia para que outra pessoa consiga repetir a análise.",
          "Evite prometer posição, prazo ou faturamento que não estão sob controle da agência.",
        ],
      },
      {
        title: "Por que páginas que apenas trocam cidade e profissão são uma estratégia frágil",
        paragraphs: [
          "Um dos relatórios sugere criar páginas parametrizadas por nicho e cidade. A ideia só produz valor quando cada página responde a uma necessidade realmente distinta. Trocar Fortaleza por Sobral e médico por advogado mantendo o mesmo texto, as mesmas provas e a mesma proposta não demonstra presença regional; apenas multiplica URLs.",
          "A documentação atual do Google é explícita ao desaconselhar a criação de muitas páginas para variações de consultas quando o objetivo principal é manipular rankings ou respostas generativas. Quantidade não substitui qualidade, e correspondência exata de palavras não compensa uma experiência rasa.",
          "Para a Ravyt, o caminho mais sólido é uma página regional abrangente ou um conjunto pequeno de páginas realmente diferentes. Uma nova URL só deve existir quando houver oferta, exemplos, dúvidas, linguagem, prova ou contexto local suficientes para justificar sua independência.",
        ],
      },
      {
        title: "A arquitetura recomendada para uma presença regional de verdade",
        paragraphs: [
          "Uma estrutura regional eficaz começa por uma página de serviço central que explica o problema, a solução, o processo e os critérios de contratação. Conteúdos de apoio aprofundam decisões específicas: site institucional versus landing page, dependência das redes sociais, SEO local, confiança e mensuração.",
          "Os links internos conectam essas respostas sem obrigar cada página a repetir tudo. Títulos e subtítulos descrevem o conteúdo com clareza; URLs permanecem curtas; o sitemap informa páginas novas ou alteradas; dados estruturados representam apenas o que o usuário realmente vê.",
          "Para empresas com endereço ou área de atendimento elegível, o Perfil da Empresa no Google deve refletir dados reais e consistentes. O site reforça essa entidade com nome, contatos, serviços, autores e sinais públicos de legitimidade. Não se deve inventar endereço, unidade ou presença física para parecer local.",
        ],
        list: [
          "Página principal do serviço, com proposta e processo claros.",
          "Conteúdo regional original, com dados, método e data de atualização.",
          "Cases ou aprendizados reais que mostrem experiência, sem criar resultados fictícios.",
          "Páginas de autor e política editorial para explicar quem produz e como revisa.",
          "Contato simples e consistente, sem intersticiais que escondam o conteúdo.",
        ],
      },
      {
        title: "Como priorizar cidades e nichos sem cair em achismo",
        paragraphs: [
          "População é apenas uma variável. Maracanaú pode ser relevante para serviços B2B por sua atividade industrial; Sobral e Juazeiro do Norte concentram serviços de saúde e educação; Caucaia combina comércio, turismo e logística. A prioridade precisa considerar aderência da oferta, experiência da equipe, valor do contrato, capacidade de atendimento e evidência de demanda.",
          "Uma matriz simples pode cruzar quatro dimensões: potencial do mercado, intensidade da necessidade, prova disponível e capacidade operacional. Uma cidade grande com pouca aderência pode ser pior prioridade do que um polo menor onde a empresa possui repertório, relacionamento e casos verificáveis.",
          "Esse filtro também evita que o SEO dite o posicionamento. A busca deve amplificar uma proposta coerente; não escolher sozinha quais serviços a empresa passará a vender.",
        ],
      },
      {
        title: "O que a Ravyt aplicou a partir deste estudo",
        paragraphs: [
          "Este conteúdo inaugura uma trilha específica sobre mercado regional, criação de sites e SEO local no Ceará. A página de serviços passou a conectar a solução de sites a esta análise, e a arquitetura editorial relaciona o estudo aos conteúdos sobre presença própria, confiança e busca.",
          "No nível técnico, a publicação usa título e descrição próprios, URL canônica, autoria identificada, data de publicação e modificação, imagem compartilhável, dados estruturados de artigo e breadcrumb, fontes rastreáveis e inclusão automática no sitemap. O objetivo não é marcar o máximo possível de propriedades, mas fornecer poucas informações completas e coerentes com o que aparece na página.",
          "A consequência estratégica é mais importante do que a lista técnica: a Ravyt passa a responder uma pergunta regional relevante com uma análise que corrige dados, explicita limites e ajuda empresários a decidir. É assim que SEO deixa de ser repetição de palavras e se torna demonstração de competência.",
        ],
      },
    ],
    sources: [
      { label: "IBGE — Ceará: população no último censo", url: "https://www.ibge.gov.br/cidades-e-estados/ce.html" },
      { label: "IBGE — Censo Demográfico 2022", url: "https://www.ibge.gov.br/estatisticas/sociais/populacao/22827-censo-demografico-2022.html" },
      { label: "Google Search Central — Search Essentials", url: "https://developers.google.com/search/docs/essentials" },
      { label: "Google Search Central — Conteúdo útil, confiável e feito para pessoas", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "Google Search Central — Otimização para recursos de IA na Busca", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
    ],
  },
  {
    slug: "edits-instagram-stories-fluxo-producao",
    category: "Social Media",
    title: "Edits passa a exportar para os Instagram Stories: o que realmente muda no fluxo de produção",
    excerpt:
      "A integração reduz etapas entre edição e publicação. Entenda o impacto para criadores, equipes de Social Media e a disputa entre Edits e editores externos.",
    date: "2026-08-14",
    dateLabel: "14 de agosto de 2026",
    readingTime: "9 min de leitura",
    accent: "#0f3d4a",
    intro:
      "Uma atualização aparentemente pequena pode revelar uma estratégia maior. Ao adicionar o compartilhamento direto de projetos do Edits para os Instagram Stories, a Meta reduz uma das fricções mais comuns do trabalho mobile: terminar a edição, salvar o arquivo no aparelho, abrir o Instagram, localizar o vídeo e só então iniciar a publicação. Para quem produz conteúdo todos os dias, remover etapas repetidas importa. Mas o principal impacto não está em um suposto ganho automático de alcance ou qualidade. Está na construção de um fluxo de criação cada vez mais integrado ao próprio ecossistema do Instagram.",
    sections: [
      {
        title: "O que mudou no Edits",
        paragraphs: [
          "Segundo o anúncio divulgado por Adam Mosseri no ecossistema do Instagram, o Edits passou a oferecer a opção de enviar um projeto finalizado diretamente para os Instagram Stories, ampliando um fluxo de compartilhamento que já privilegiava a publicação dentro das superfícies do Instagram.",
          "Na prática, a novidade encurta o caminho entre o fim da edição e o começo da publicação. Antes, um fluxo comum exigia exportar o vídeo para a galeria do celular e reabrir o arquivo dentro do Instagram. Com o novo atalho, o Story passa a aparecer como destino de compartilhamento a partir do próprio Edits.",
          "Há uma diferença importante entre dizer que o processo ficou mais curto e afirmar que o vídeo terá mais alcance ou melhor qualidade por causa disso. Até aqui, não existe documentação pública suficiente para sustentar que a opção altere os critérios de distribuição dos Stories ou elimine a compressão aplicada pelo Instagram. O benefício comprovável é operacional: menos etapas e menos troca de contexto entre aplicativos.",
        ],
        image: {
          src: "/blog/edits-stories-fluxo.svg",
          alt: "Fluxo mostrando criação, edição no Edits e distribuição direta para Instagram Stories",
          caption: "O ganho mais claro da atualização é a redução de etapas entre a edição e a publicação.",
        },
      },
      {
        title: "O Edits está deixando de ser apenas um editor de vídeo",
        paragraphs: [
          "Quando a Meta lançou o Edits em 2025, a proposta já ia além de cortar clipes. A empresa descreveu o produto como um ambiente para apoiar todo o processo de criação no celular. Um ano depois, a própria Meta reforçou essa direção: ideias, referências, gravação, edição, templates e análise de desempenho estão sendo aproximados dentro do mesmo workspace.",
          "As lojas oficiais confirmam algumas das capacidades que ajudam a explicar esse posicionamento. O Edits permite exportar em 4K sem marca d'água, editar com precisão de quadro, gerar legendas automáticas, melhorar voz e ruído de fundo, trabalhar com sobreposições e tela verde e acompanhar métricas de Reels em um painel de insights.",
          "Isso muda a lógica competitiva. O Edits não precisa superar todos os editores em quantidade de efeitos para ser relevante. Seu diferencial pode estar na proximidade com o Instagram: referências salvas, áudio, publicação e dados de desempenho pertencem ao mesmo ecossistema.",
        ],
        image: {
          src: "/blog/edits-ecossistema-criacao.svg",
          alt: "Mapa do Edits conectando ideias, gravação, edição, insights e distribuição",
          caption: "A estratégia do Edits é aproximar etapas que antes estavam espalhadas entre diferentes ferramentas.",
        },
      },
      {
        title: "Para uma equipe de Social Media, menos cliques podem significar mais consistência",
        paragraphs: [
          "Em uma publicação isolada, salvar um vídeo e abrir outro aplicativo parece irrelevante. Em uma operação que produz dezenas de peças por semana, pequenas fricções se acumulam. Cada exportação exige atenção: versão correta, pasta correta, proporção correta, arquivo correto e destino correto.",
          "Reduzir essas passagens diminui oportunidades de erro e acelera conteúdos de resposta rápida, bastidores, cobertura de eventos, lançamentos e sequências de Stories que precisam sair enquanto o assunto ainda está quente.",
          "Isso não elimina a necessidade de organização. Uma operação profissional continua precisando de nomenclatura de arquivos, aprovação, backup e controle de versões. A integração melhora o trecho final do processo; ela não substitui a governança da produção.",
        ],
        image: {
          src: "/blog/edits-stories-antes-depois.svg",
          alt: "Comparação entre o fluxo antigo com exportação para galeria e o novo fluxo direto para Stories",
          caption: "Menos etapas reduzem troca de contexto, mas não substituem revisão, aprovação e controle de versão.",
        },
      },
      {
        title: "Stories e Reels não cumprem exatamente a mesma função",
        paragraphs: [
          "Tratar todo vídeo vertical como se tivesse o mesmo objetivo é um erro de planejamento. Reels costumam participar mais fortemente da descoberta e da distribuição para pessoas que ainda não seguem o perfil. Stories funcionam dentro de uma dinâmica mais próxima da audiência já conectada à conta, com frequência, bastidores, prova, interação e chamadas para ação.",
          "Por isso, facilitar a edição de Stories é estrategicamente relevante. O formato deixa de depender apenas de recursos rápidos feitos dentro do compositor do Instagram e pode receber o mesmo cuidado de corte, legenda, ritmo, sobreposição e tratamento de áudio usado em outras peças.",
          "Isso não significa transformar todo Story em uma superprodução. O valor está em poder escolher. Conteúdo espontâneo continua tendo espaço; peças que exigem acabamento ganham um caminho mais curto até a publicação.",
        ],
        list: [
          "Reels: alcance, descoberta, repertório e distribuição de conteúdo curto.",
          "Stories: frequência, relacionamento, bastidores, prova e conversas com a audiência.",
          "Edits: uma camada de produção que pode atender os dois contextos sem obrigar o criador a trocar de editor.",
        ],
      },
      {
        title: "Edits versus CapCut: a comparação mais útil não é 'qual é melhor?'",
        paragraphs: [
          "O CapCut continua sendo uma referência importante porque oferece um ecossistema amplo, incluindo versões mobile, desktop e web. O Edits, por outro lado, nasceu profundamente conectado ao Instagram e aposta em integração com o fluxo criativo e os insights da plataforma.",
          "Também é preciso corrigir uma comparação comum: o CapCut não coloca obrigatoriamente uma marca d'água em toda exportação gratuita. A própria documentação do CapCut explica que projetos editados manualmente podem ser exportados sem marca; marcas podem aparecer em determinados templates, elementos ou configurações premium.",
          "A escolha, portanto, depende do processo. Quem trabalha em desktop, utiliza recursos avançados específicos ou distribui o mesmo projeto em vários ecossistemas pode preferir uma ferramenta mais ampla. Quem produz principalmente para Instagram e valoriza um caminho curto entre ideia, edição, publicação e análise pode encontrar no Edits uma vantagem operacional.",
        ],
        list: [
          "Edits: integração com Instagram, exportação 4K sem marca d'água, ferramentas de criação mobile e insights de Reels.",
          "CapCut: presença em mobile, desktop e web, 4K condicionado a plataforma/dispositivo e grande ecossistema de edição.",
          "Nenhuma dessas características torna uma ferramenta universalmente superior; o melhor editor é o que reduz atrito sem comprometer o resultado que a equipe precisa entregar.",
        ],
      },
      {
        title: "O que a Meta ganha ao fechar o ciclo de criação",
        paragraphs: [
          "A atualização também precisa ser lida como movimento de plataforma. Quanto mais etapas o Edits absorve, menor a necessidade de o criador sair do ecossistema Meta para concluir uma tarefa. Ideia, gravação, edição, análise e distribuição começam a formar um ciclo cada vez mais fechado.",
          "Isso gera conveniência para o usuário e, ao mesmo tempo, aumenta a relevância estratégica do Edits para a Meta. A disputa deixa de ser apenas por quem oferece o melhor efeito de vídeo e passa a ser por quem controla o fluxo completo de criação.",
          "Em junho de 2026, a Meta já havia apresentado novas iniciativas para o Edits, incluindo expansão dos insights e testes de recursos assistidos por IA. O movimento para Stories é coerente com essa direção: transformar o editor em infraestrutura de produção, não apenas em um aplicativo auxiliar.",
        ],
      },
      {
        title: "Como incorporar a novidade ao processo sem criar dependência da ferramenta",
        paragraphs: [
          "A melhor maneira de usar a atualização é tratá-la como uma melhoria de processo, não como estratégia de conteúdo. O botão novo não resolve pauta ruim, narrativa fraca, excesso de edição ou ausência de objetivo.",
          "Para uma equipe de Social Media, o ganho aparece quando a ferramenta entra em um sistema claro: definir o papel da peça, gravar com intenção, editar apenas o necessário, revisar e distribuir no canal adequado. Se o envio direto economiza uma etapa nesse sistema, ele já cumpre uma função valiosa.",
          "Ferramentas mudam rapidamente. Processos sólidos sobrevivem a elas. O trabalho estratégico é saber quais etapas precisam de tecnologia e quais continuam dependendo de repertório, decisão e leitura de comportamento.",
        ],
        list: [
          "Defina antes da edição se a peça é para descoberta, relacionamento, prova ou conversão.",
          "Crie modelos de projeto para Stories recorrentes, sem engessar o conteúdo.",
          "Mantenha uma cópia final quando o ativo também precisar ser reutilizado fora do Instagram.",
          "Use os insights para revisar decisões criativas, não apenas para colecionar números.",
          "Avalie a ferramenta pelo tempo poupado e pela qualidade do processo, não pela quantidade de recursos novos.",
        ],
      },
    ],
    sources: [
      {
        label: "Meta — One Year of Edits: Built For and With Creators",
        url: "https://about.fb.com/news/2026/04/one-year-of-edits-built-for-and-with-creators/",
      },
      {
        label: "Google Play — Edits: Editor de Vídeo",
        url: "https://play.google.com/store/apps/details?id=com.instagram.basel&hl=pt-BR",
      },
      {
        label: "App Store — Edits: Editor de Vídeo",
        url: "https://apps.apple.com/br/app/edits-editor-de-v%C3%ADdeo/id6738967378",
      },
      {
        label: "CapCut — Como exportar vídeo sem marca d'água",
        url: "https://www.capcut.com/pt-br/help/how-to-export-video-without-watermark",
      },
      {
        label: "CapCut — Como exportar vídeos em 2K e 4K",
        url: "https://www.capcut.com/pt-br/help/export-videos-in-capcut",
      },
    ],
  },
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

export const posts = allPosts.filter(
  (post) => post.slug !== "mercado-sites-seo-local-ceara",
);

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
