import type { BlogPost } from "./posts";

export const maintenancePost: BlogPost = {
  "slug": "manutencao-de-site-o-que-inclui",
  "title": "Manutenção de site: o que inclui e como avaliar uma proposta",
  "excerpt": "Saiba o que manter depois da publicação: domínio, segurança, formulários, conteúdo e SEO. Veja perguntas para comparar propostas sem pagar por um escopo vago.",
  "category": "Criação de sites",
  "date": "2026-10-05",
  "dateLabel": "5 de outubro de 2026",
  "readingTime": "9 min de leitura",
  "author": "Equipe Ravyt Digital",
  "intro": "Seu site pode abrir normalmente e ainda estar falhando onde interessa: um formulário que não entrega mensagens, um telefone antigo, uma página de serviço que já não descreve a oferta. Manutenção de site é o trabalho de encontrar e corrigir esses problemas, além de cuidar da infraestrutura e da segurança. A pergunta útil antes de contratar não é apenas 'vocês fazem manutenção?', mas 'o que verificam, com que frequência e quem resolve quando algo quebra?'.",
  "quickAnswer": "A manutenção de um site reúne verificações e correções contínuas para manter páginas disponíveis, seguras, corretas e utilizáveis. Pode envolver renovação do domínio, hospedagem, certificado, atualizações, cópias de segurança, teste de formulários, revisão de conteúdo e acompanhamento de busca. O escopo varia conforme a tecnologia e o contrato: pagar hospedagem não significa ter todas essas tarefas incluídas.",
  "images": [
    {
      "src": "/blog/manutencao-site-camadas.webp",
      "width": 1200,
      "height": 675,
      "alt": "Diagrama com quatro frentes da manutenção de site: disponibilidade, segurança, contato e evolução.",
      "caption": "As quatro frentes ajudam a identificar o que precisa de responsável depois que o site entra no ar."
    },
    {
      "src": "/blog/manutencao-site-perguntas.webp",
      "width": 1200,
      "height": 675,
      "alt": "Checklist de cinco perguntas sobre acessos, testes, backup, alterações incluídas e prazo de correção.",
      "caption": "Peça respostas específicas e registre limites e responsáveis na proposta."
    }
  ],
  "sections": [
    {
      "title": "Hospedagem, domínio e manutenção são trabalhos diferentes",
      "paragraphs": [
        "Domínio é o endereço que a empresa registra; hospedagem é a infraestrutura que disponibiliza o site. Manutenção é a rotina de verificar, atualizar e corrigir o que depende dessas peças. Uma mesma agência pode oferecer tudo em um pacote, mas a proposta precisa separar responsabilidades. Se o domínio vencer, site e e-mail associados podem parar de funcionar; a ICANN recomenda manter os dados de contato do titular e a renovação em dia.",
        "Um site feito em WordPress tem atualizações do núcleo, temas e plugins. Um site publicado a partir de código pode não ter plugins, mas ainda precisa de dependências, implantação, formulários e serviços externos acompanhados. Não aceite uma lista de 'atualização de plugins' aplicada mecanicamente a um projeto que nem usa WordPress."
      ],
      "links": [
        {
          "label": "ICANN: renovação de domínios",
          "href": "https://www.icann.org/resources/pages/renew-domain-name-2018-12-07-en"
        },
        {
          "label": "WordPress: tarefas de manutenção",
          "href": "https://wordpress.org/documentation/article/wordpress-site-maintenance/"
        }
      ]
    },
    {
      "title": "O que uma rotina de manutenção deve verificar",
      "paragraphs": [
        "Comece pelo percurso do cliente: a página abre no celular? O botão liga para o número certo? O WhatsApp abre a conversa correta? O formulário confirma o envio e a mensagem chega à caixa da empresa? Teste o caminho inteiro. Um formulário com aparência normal pode deixar de entregar contatos depois de uma alteração no serviço de e-mail.",
        "Depois olhe para disponibilidade, domínio e certificado, acessos administrativos, atualização da plataforma quando aplicável, backup e recuperação, links internos, informação comercial, desempenho e páginas importantes no Search Console. A lista não é uma promessa de executar tudo diariamente. Frequência e prioridade devem acompanhar o risco, a complexidade e o volume de mudanças do site."
      ],
      "links": [
        {
          "label": "MDN: conferir um site depois da publicação",
          "href": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/Checking_that_your_web_site_is_working_properly"
        },
        {
          "label": "FTC: critérios de segurança ao contratar hospedagem",
          "href": "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity"
        }
      ]
    },
    {
      "title": "Backup só protege quando é possível recuperar",
      "paragraphs": [
        "Pergunte o que é copiado, onde a cópia fica, por quanto tempo é mantida e quem pode restaurá-la. Em um sistema com banco de dados, guardar apenas imagens e arquivos não recupera necessariamente o conteúdo e as mensagens. Também não basta exibir um selo 'backup automático' sem saber se a restauração já foi testada.",
        "Uma mudança maior merece um ponto de retorno antes da publicação. Para sites estáticos, o histórico do código facilita reverter versões, mas isso não substitui cópias dos dados mantidos em serviços separados. A recomendação precisa se ajustar à arquitetura real do projeto."
      ],
      "links": [
        {
          "label": "Cloudflare: backups e recuperação na segurança de sites",
          "href": "https://www.cloudflare.com/pt-br/learning/security/how-to-secure-a-website/"
        },
        {
          "label": "WordPress: backup antes de atualizações",
          "href": "https://wordpress.org/documentation/article/updating-wordpress/"
        }
      ]
    },
    {
      "title": "Segurança e desempenho pedem acompanhamento, não promessa",
      "paragraphs": [
        "Revise permissões: quem ainda pode alterar o site, o domínio e a hospedagem? Ative autenticação em duas etapas quando disponível, remova acessos de pessoas que saíram do projeto e instale correções de segurança compatíveis. A FTC recomenda prever no contrato a avaliação e atualização dos controles de segurança; a OWASP chama atenção para o estado de manutenção das dependências de software.",
        "Desempenho também muda quando uma imagem pesada é adicionada ou uma integração nova carrega código demais. Teste páginas importantes em celular real e acompanhe as métricas de experiência sem tratar uma nota de ferramenta como objetivo comercial. Uma mudança pode melhorar a velocidade e ainda piorar a clareza do conteúdo; o resultado precisa ser visto no contexto."
      ],
      "links": [
        {
          "label": "OWASP: gestão de dependências",
          "href": "https://devguide.owasp.org/en/05-implementation/02-dependencies/"
        },
        {
          "label": "web.dev: Core Web Vitals",
          "href": "https://web.dev/articles/vitals"
        }
      ]
    },
    {
      "title": "Conteúdo e SEO também envelhecem",
      "paragraphs": [
        "Horários, endereço, modalidades de atendimento, equipe, preços e condições podem mudar. Uma revisão periódica identifica informações incorretas antes que o visitante encontre uma contradição. Para uma empresa local, confira também se site e Perfil da Empresa no Google descrevem o atendimento de modo consistente, quando o perfil for elegível.",
        "No Search Console, observe se páginas relevantes continuam acessíveis e se surgiram problemas de indexação. Atualizar a data de um artigo sem melhorar seu conteúdo não é manutenção. Se a URL mudar, planeje redirecionamentos e links internos; o Google orienta tratar mudanças de endereço e sitemap na migração. Um sitemap ajuda na descoberta, mas não garante indexação."
      ],
      "links": [
        {
          "label": "Google: como lidar com mudança de URLs",
          "href": "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"
        },
        {
          "label": "Google: criar e enviar um sitemap",
          "href": "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=pt-br"
        },
        {
          "label": "Como avaliar um site profissional antes de contratar",
          "href": "/blog/criacao-de-site-profissional-para-empresas"
        }
      ]
    },
    {
      "title": "Como comparar propostas sem misturar escopos",
      "paragraphs": [
        "Peça uma lista com tarefa, frequência, responsável e limite. 'Suporte incluso' pode significar responder dúvidas, corrigir falhas ou produzir páginas novas: são entregas diferentes. Combine também como um problema será comunicado e qual prazo de resposta vale para uma indisponibilidade ou um erro no formulário. Prazo de resposta não é automaticamente prazo de solução.",
        "Faça um exercício ilustrativo: a empresa troca de telefone e acrescenta um serviço. Quem atualiza o botão de contato, o rodapé e a página do serviço? Quantas alterações assim estão incluídas? Se a proposta não responde, o preço isolado não serve para comparação."
      ],
      "links": [
        {
          "label": "Entenda o orçamento de criação do site",
          "href": "/quanto-custa-criar-um-site"
        },
        {
          "label": "Veja quais páginas um site institucional precisa",
          "href": "/blog/site-institucional-paginas-essenciais"
        }
      ]
    },
    {
      "title": "O que a Ravyt pode assumir e o que deve ser definido",
      "paragraphs": [
        "A oferta atual da Ravyt combina site, presença no Google e SEO com hospedagem, atualizações e suporte. Isso não torna qualquer nova página, integração ou mudança de escopo automaticamente incluída. Antes da contratação, o diagnóstico deve identificar a tecnologia, o conteúdo que existe, os acessos disponíveis e as tarefas que precisam entrar na proposta.",
        "Se o site já está publicado, comece por três testes simples: abra a página principal no celular, envie uma mensagem real pelo formulário e confirme a titularidade e a próxima renovação do domínio. Se algum desses pontos depender de uma pessoa ou acesso que você não consegue identificar, aí está a prioridade da conversa."
      ],
      "links": [
        {
          "label": "Conheça os serviços da Ravyt",
          "href": "/sites"
        },
        {
          "label": "Solicite um diagnóstico da presença digital",
          "href": "/diagnostico"
        }
      ]
    }
  ],
  "comparison": {
    "title": "O que pedir por escrito no contrato de manutenção",
    "note": "A frequência exata e os prazos devem ser proporcionais ao projeto. Use esta tabela para evitar termos genéricos.",
    "headers": [
      "Frente",
      "Pergunta objetiva",
      "Evidência de execução"
    ],
    "rows": [
      [
        "Infraestrutura",
        "Quem renova domínio e acompanha hospedagem e certificado?",
        "Titularidade, datas e alertas definidos."
      ],
      [
        "Segurança",
        "Quem atualiza e controla acessos?",
        "Registro de mudanças e responsáveis."
      ],
      [
        "Recuperação",
        "O que é copiado e como restaurar?",
        "Local, retenção e teste de restauração."
      ],
      [
        "Contato",
        "Como são testados formulário e botões?",
        "Envio real e confirmação de recebimento."
      ],
      [
        "Conteúdo",
        "Quantas pequenas alterações estão incluídas?",
        "Limites e fluxo de solicitação."
      ],
      [
        "SEO",
        "Quais páginas e erros serão acompanhados?",
        "Revisão periódica com decisões e ajustes."
      ]
    ]
  },
  "checklist": {
    "title": "Cinco perguntas antes de assinar",
    "items": [
      "Quem controla domínio, hospedagem, código, contas e acesso de recuperação?",
      "Que ações serão testadas após uma atualização, inclusive formulário e WhatsApp?",
      "Como funcionam as cópias de segurança e o teste de restauração?",
      "Quais alterações de texto, imagens e páginas estão incluídas?",
      "Qual é o prazo de resposta para falhas e como o trabalho será registrado?"
    ]
  },
  "sources": [
    {
      "label": "ICANN — renovação de domínios",
      "url": "https://www.icann.org/resources/pages/renew-domain-name-2018-12-07-en"
    },
    {
      "label": "WordPress — manutenção do site",
      "url": "https://wordpress.org/documentation/article/wordpress-site-maintenance/"
    },
    {
      "label": "FTC — segurança para pequenas empresas",
      "url": "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity"
    },
    {
      "label": "Cloudflare — segurança e backups",
      "url": "https://www.cloudflare.com/pt-br/learning/security/how-to-secure-a-website/"
    },
    {
      "label": "OWASP — dependências de software",
      "url": "https://devguide.owasp.org/en/05-implementation/02-dependencies/"
    },
    {
      "label": "Google Search Central — mudanças de URL",
      "url": "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"
    },
    {
      "label": "Google Search Central — sitemaps",
      "url": "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=pt-br"
    },
    {
      "label": "W3C — rótulos de formulários",
      "url": "https://www.w3.org/WAI/tutorials/forms/labels/"
    },
    {
      "label": "web.dev — Core Web Vitals",
      "url": "https://web.dev/articles/vitals"
    }
  ],
  "serviceHref": "/diagnostico",
  "serviceLabel": "Peça um diagnóstico do seu site à Ravyt",
  "ctaTitle": "Seu site tem um responsável por cada etapa?",
  "editorialNote": "A equipe Ravyt Digital preparou este guia após consultar documentação técnica e páginas do setor em português e inglês em 5 de outubro de 2026. O cenário de troca de telefone é ilustrativo. Tarefas, frequências e prazos dependem da proposta e da tecnologia de cada site.",
  "relatedSlugs": [
    "criacao-de-site-profissional-para-empresas",
    "site-institucional-paginas-essenciais"
  ]
};
