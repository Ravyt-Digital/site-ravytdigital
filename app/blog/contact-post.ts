import type { BlogPost } from "./posts";

export const contactPost: BlogPost = {
  "slug": "site-recebe-visitas-mas-nao-contatos",
  "title": "Seu site recebe visitas, mas ninguém entra em contato? Comece por aqui",
  "excerpt": "Descubra onde um site perde oportunidades: mensagem, confiança, celular, formulário e atendimento. Veja um roteiro prático para priorizar correções.",
  "category": "Criação de sites",
  "date": "2026-10-07",
  "dateLabel": "7 de outubro de 2026",
  "readingTime": "6 min de leitura",
  "author": "Equipe Ravyt Digital",
  "intro": "Se o site recebe visitas e quase ninguém pede orçamento, a primeira pergunta não é “qual botão precisa ficar maior?”. Descubra quem chegou, o que essa pessoa procurava e em que ponto perdeu confiança ou encontrou dificuldade para agir. Um site pode trazer o público errado, explicar mal o serviço, esconder informações decisivas ou falhar no formulário. Cada causa pede uma correção diferente. Antes de redesenhar tudo, faça uma verificação simples: abra as páginas mais visitadas no celular, tente entender a oferta como alguém que não conhece a empresa e envie um contato de teste. Em seguida, confirme se a mensagem chegou e quanto tempo leva para alguém responder. Se uma dessas etapas falha, você já tem um problema concreto para resolver.",
  "quickAnswer": "Se há visitas e poucos pedidos, verifique primeiro a intenção de quem chega, a clareza da oferta e o caminho completo até a resposta. Abra as páginas mais visitadas no celular, envie um contato de teste e confirme o recebimento. Depois priorize a falha concreta, em vez de redesenhar tudo sem diagnóstico.",
  "images": [
    {
      "src": "/blog/jornada-contato-site.webp",
      "width": 1200,
      "height": 675,
      "alt": "Jornada ilustrativa de uma busca até o contato, com etapas de página de serviço, confiança e mensagem.",
      "caption": "Cada etapa pode facilitar ou interromper um pedido de contato."
    },
    {
      "src": "/blog/diagnostico-contatos-site.webp",
      "width": 1200,
      "height": 675,
      "alt": "Painel ilustrativo que separa visitas relevantes, cliques no contato e mensagens recebidas.",
      "caption": "Compare visitas qualificadas com ações de contato e conversas recebidas."
    }
  ],
  "sections": [
    {
      "title": "Confira se as visitas têm intenção de contratar",
      "paragraphs": [
        "“Mais tráfego” parece bom no relatório, mas não explica a qualidade das visitas. Uma escola pode receber acessos por um artigo sobre atividades infantis e poucos pedidos de matrícula; isso não significa que o botão de matrícula esteja quebrado. O conteúdo pode estar atraindo quem busca uma ideia gratuita, não uma escola. Exemplo ilustrativo, não resultado de cliente da Ravyt.",
        "Separe páginas de serviço, páginas institucionais e artigos. No Search Console, observe quais buscas levam às páginas; na ferramenta de análise do site, veja quais delas são de entrada e quantos contatos surgem dali. Não compare apenas o total de sessões com o total de mensagens. Compare a jornada de quem procurou um serviço específico.",
        "O guia inicial de SEO do Google recomenda títulos claros e conteúdo que ajude o usuário a entender a página. Se a busca promete uma solução e a página entrega uma apresentação genérica da empresa, a pessoa terá de adivinhar se chegou ao lugar certo."
      ],
      "links": [
        {
          "label": "guia inicial de SEO do Google",
          "href": "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
        }
      ]
    },
    {
      "title": "Responda às dúvidas antes de pedir o contato",
      "paragraphs": [
        "Na primeira tela de uma página de serviço, a pessoa deveria conseguir identificar o que você oferece, para quem, onde ou como atende e qual é o próximo passo. Mais abaixo, explique escopo, processo, condições que influenciam o preço e o que acontece depois do pedido. Depoimentos e projetos só ajudam se forem verdadeiros e relevantes.",
        "Isso tem base em pesquisa de usabilidade B2B da Nielsen Norman Group: participantes precisavam compreender a oferta e avaliar a credibilidade de fornecedores antes de aceitar um contato comercial. A pesquisa é antiga, de 2006, portanto serve como orientação para testar a clareza da página, não como estimativa atual de taxa de conversão.",
        "Uma empresa de engenharia, por exemplo, pode trocar “soluções completas” por uma lista de serviços, tipos de projeto atendidos, região de atuação e um caminho para solicitar proposta. Quem chega por uma busca específica precisa reconhecer rapidamente se aquela empresa resolve seu problema."
      ],
      "links": [
        {
          "label": "Nielsen Norman Group",
          "href": "https://www.nngroup.com/articles/b2b-usability/"
        }
      ]
    },
    {
      "title": "Teste o caminho até a mensagem no celular",
      "paragraphs": [
        "Abra o site em um telefone comum e faça a tarefa completa. O botão de contato leva ao número correto? O link do WhatsApp abre uma conversa? O formulário acusa erros de maneira compreensível? Há confirmação depois do envio? A mensagem chega à pessoa responsável?",
        "O W3C orienta identificar cada campo com um rótulo claro, e o web.dev recomenda testar formulários em dispositivos e modos de uso diferentes. Um campo visualmente elegante não compensa um formulário que não funciona com teclado, leitor de tela ou no celular. Para informações como e-mail e telefone, o MDN documenta o atributo de preenchimento automático, que pode reduzir a digitação.",
        "Peça apenas os dados necessários para iniciar o atendimento. Nome, forma de retorno e uma descrição curta da demanda podem bastar para muitos serviços; outros precisam de mais contexto. A escolha deve acompanhar o processo comercial real. Não retire campos de forma mecânica: informações insuficientes também podem gerar retrabalho."
      ],
      "links": [
        {
          "label": "W3C orienta identificar cada campo com um rótulo claro",
          "href": "https://www.w3.org/WAI/tutorials/forms/labels/"
        },
        {
          "label": "web.dev recomenda testar formulários em dispositivos e modos de uso diferentes",
          "href": "https://web.dev/learn/forms/cross-platform-testing"
        },
        {
          "label": "MDN documenta o atributo de preenchimento automático",
          "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete"
        }
      ]
    },
    {
      "title": "Dê um próximo passo específico",
      "paragraphs": [
        "“Saiba mais” pode ser adequado para continuar a leitura. Para alguém pronto para conversar, “Solicitar uma proposta para meu site” ou “Falar sobre meu projeto” descreve melhor a ação. Coloque a chamada perto da explicação do serviço e repita-a onde fizer sentido após responder objeções. Evite vários botões com promessas diferentes apontando para o mesmo lugar.",
        "Se o contato for por WhatsApp, a mensagem inicial pode trazer o nome do serviço ou da página. Isso dá contexto a quem atende. Se a empresa não responde, porém, trocar o texto do botão não corrige o problema. A operação de atendimento faz parte da experiência."
      ]
    },
    {
      "title": "Meça o que muda, sem prometer uma fórmula",
      "paragraphs": [
        "Defina uma linha de base: páginas de entrada relevantes, cliques no contato, envios válidos e contatos que realmente viraram conversa. Registre a data de cada ajuste e compare períodos equivalentes. Se houver poucos acessos, uma variação de uma ou duas mensagens não prova melhora.",
        "Ferramentas como mapas de clique e rolagem ajudam a formular hipóteses sobre a navegação; a documentação da Microsoft Clarity descreve esses recursos. Eles não substituem conversar com clientes nem testar o formulário. Trate dados de comportamento com cuidado e observe as regras de privacidade aplicáveis."
      ],
      "links": [
        {
          "label": "documentação da Microsoft Clarity",
          "href": "https://learn.microsoft.com/en-us/clarity/heatmaps/heatmaps-features"
        },
        {
          "label": "o que avaliar antes de contratar um site profissional",
          "href": "/blog/criacao-de-site-profissional-para-empresas"
        },
        {
          "label": "como planejar as páginas de um site institucional",
          "href": "/blog/site-institucional-paginas-essenciais"
        },
        {
          "label": "guia de velocidade no celular",
          "href": "/blog/testar-velocidade-site-celular"
        }
      ]
    },
    {
      "title": "Quando vale pedir uma análise externa?",
      "paragraphs": [
        "Se o site recebe visitas relacionadas ao seu serviço e ainda assim o caminho para o contato permanece incerto, uma revisão conjunta de conteúdo, experiência no celular e SEO pode revelar onde agir primeiro. A Ravyt trabalha com site profissional, presença no Google quando o negócio é elegível e melhorias de SEO. Peça um diagnóstico da sua presença digital para discutir o caso concreto. Nenhuma análise séria promete um número de contatos ou posição no Google sem entender a demanda, o mercado e o atendimento."
      ],
      "links": [
        {
          "label": "Peça um diagnóstico da sua presença digital",
          "href": "/diagnostico"
        }
      ]
    }
  ],
  "checklist": {
    "title": "Uma ordem prática para corrigir",
    "items": [
      "Conserte falhas de contato: links errados, formulário sem entrega, mensagens sem resposta.",
      "Esclareça a oferta: serviço, público, área de atendimento, processo e critérios de preço.",
      "Ajuste a página à busca: cada página importante deve responder ao problema que trouxe o visitante.",
      "Revise o celular: leitura, botões, velocidade percebida e preenchimento.",
      "Meça de novo: observe contatos úteis, não só tráfego."
    ]
  },
  "sources": [
    {
      "label": "Google Search Central — guia de SEO",
      "url": "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
    },
    {
      "label": "Nielsen Norman Group — usabilidade B2B",
      "url": "https://www.nngroup.com/articles/b2b-usability/"
    },
    {
      "label": "W3C — rótulos de formulários",
      "url": "https://www.w3.org/WAI/tutorials/forms/labels/"
    },
    {
      "label": "web.dev — testes de formulários",
      "url": "https://web.dev/learn/forms/cross-platform-testing"
    },
    {
      "label": "MDN — atributo autocomplete",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete"
    },
    {
      "label": "Microsoft Learn — mapas de clique e rolagem",
      "url": "https://learn.microsoft.com/en-us/clarity/heatmaps/heatmaps-features"
    }
  ],
  "serviceHref": "/diagnostico",
  "serviceLabel": "Peça um diagnóstico da sua presença digital",
  "ctaTitle": "Seu site recebe visitas, mas não gera conversas?",
  "editorialNote": "Guia preparado pela equipe Ravyt Digital em 7 de outubro de 2026. Os exemplos são ilustrativos. Nenhuma análise garante um número de contatos ou posição no Google.",
  "relatedSlugs": [
    "criacao-de-site-profissional-para-empresas",
    "site-institucional-paginas-essenciais",
    "testar-velocidade-site-celular"
  ]
};
