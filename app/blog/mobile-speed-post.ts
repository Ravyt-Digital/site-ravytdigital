import type { BlogPost } from "./posts";

export const mobileSpeedPost: BlogPost = {
  slug: "testar-velocidade-site-celular",
  title: "Como testar a velocidade do site no celular e entender o resultado",
  excerpt: "Aprenda a usar o PageSpeed Insights no celular, interpretar LCP, INP e CLS e decidir o que corrigir primeiro no site da sua empresa.",
  category: "Desempenho e UX",
  date: "2026-10-05",
  dateLabel: "5 de outubro de 2026",
  readingTime: "7 min de leitura",
  author: "Equipe Ravyt Digital",
  intro: "Seu site pode abrir rápido no Wi-Fi do escritório e demorar quando alguém o acessa pela rede móvel. Também pode receber uma nota boa e esconder o botão de contato sob um aviso que ocupa a tela. Um teste útil responde a duas perguntas: a página carrega e reage bem no celular? A pessoa consegue concluir o que veio fazer?",
  quickAnswer: "Abra o PageSpeed Insights, informe a URL exata e selecione Dispositivos móveis. Veja primeiro os dados de usuários reais, quando disponíveis, e depois o diagnóstico de laboratório. Observe LCP, INP e CLS; teste também, em um celular, o menu, o formulário e o botão de contato. Registre a página e a data para comparar depois da correção.",
  images: [
    { src: "/blog/velocidade-mobile-roteiro.webp", width: 1200, height: 675, alt: "Roteiro visual em três passos: testar a URL no PageSpeed Insights, ler dados reais e simulação, conferir a jornada no celular.", caption: "Uma boa análise combina medição da página com a ação que o visitante precisa concluir." },
    { src: "/blog/velocidade-mobile-metricas.webp", width: 1200, height: 675, alt: "Quadro com as métricas Core Web Vitals: LCP até 2,5 segundos, INP até 200 milissegundos e CLS até 0,1.", caption: "Referências para experiência boa no 75º percentil das visitas; os resultados móveis e de computador são avaliados separadamente." },
  ],
  sections: [
    {
      title: "O Test My Site acabou: qual ferramenta usar agora?",
      paragraphs: [
        "Se um tutorial antigo manda inserir o endereço no Test My Site, atenção: o Google informa que essa ferramenta não está mais disponível. O link antigo pode até redirecionar para uma página válida, mas não entrega o teste prometido. O próprio Google recomenda o PageSpeed Insights para examinar a velocidade de páginas móveis.",
        "O PageSpeed Insights avalia uma URL de cada vez. É uma forma de começar o diagnóstico, não um atestado de que todas as páginas do domínio têm o mesmo desempenho. A página inicial, um serviço e uma campanha podem carregar imagens e integrações diferentes."
      ],
      links: [
        { label: "Google: aviso sobre o Test My Site", href: "https://business.google.com/en-all/think/future-of-marketing/mobile-tools-to-optimize-site-and-app/" },
        { label: "Abra o PageSpeed Insights", href: "https://pagespeed.web.dev/" }
      ]
    },
    {
      title: "Faça o teste em uma página que recebe clientes",
      paragraphs: [
        "Copie a URL completa da página, cole no PageSpeed Insights e escolha Dispositivos móveis. Comece por uma página importante para o negócio: serviço principal, produto ou campanha que leva a um pedido de orçamento. Anote a URL e a data. Depois repita o procedimento em outras páginas relevantes.",
        "O relatório separa dados de campo, provenientes de visitas reais agregadas, e dados de laboratório, produzidos em condições controladas. O Google explica que os dados reais dependem de volume suficiente; em páginas novas ou com poucas visitas eles podem não aparecer para aquela URL. Nesse caso, use o laboratório para investigar, sem interpretar a ausência de dados de campo como um defeito por si só.",
        "Ao comparar um antes e depois, mantenha a mesma URL e o mesmo tipo de teste. A nota de laboratório pode oscilar entre execuções; procure também a causa do problema e o comportamento no aparelho."
      ],
      links: [{ label: "Google: entenda os dados do PageSpeed Insights", href: "https://developers.google.com/speed/docs/insights/v5/about?hl=pt-BR" }]
    },
    {
      title: "Entenda LCP, INP e CLS antes de olhar apenas a nota",
      paragraphs: [
        "LCP indica quando o maior elemento visível, muitas vezes o título ou a imagem principal, aparece. INP mede a resposta às interações durante a visita. CLS mede deslocamentos inesperados do layout, como quando um botão muda de lugar no momento do toque. As referências para uma boa experiência são LCP até 2,5 segundos, INP até 200 milissegundos e CLS até 0,1, consideradas no 75º percentil das visitas.",
        "Uma imagem principal sem tamanho adequado pode atrasar o carregamento; scripts de terceiros podem prejudicar a resposta; elementos sem espaço reservado podem deslocar o conteúdo. São hipóteses para investigar, não diagnósticos automáticos para todo site. Nenhuma dessas medidas garante posição no Google ou vendas: elas ajudam a localizar fricções concretas."
      ],
      links: [{ label: "web.dev: definições e limites das Core Web Vitals", href: "https://web.dev/articles/vitals" }]
    },
    {
      title: "Teste a jornada de contato no próprio celular",
      paragraphs: [
        "Abra a página em um telefone e, se possível, use também a conexão móvel. Leia o início sem ampliar a tela. O serviço fica claro? O menu abre? O botão do WhatsApp leva ao número certo? Envie uma mensagem de teste pelo formulário e confirme o recebimento. Um site que pontua bem e perde esse contato ainda tem um problema de negócio.",
        "Verifique também se avisos de cookies ou elementos fixos não cobrem a chamada para ação. O Lighthouse oferece verificações automáticas de desempenho, acessibilidade e SEO, mas a tarefa real de uma pessoa no telefone merece uma checagem manual. Tutoriais que apontam para o antigo Mobile-Friendly Test também estão desatualizados: o Google o desativou em dezembro de 2023."
      ],
      links: [
        { label: "Chrome Developers: visão geral do Lighthouse", href: "https://developer.chrome.com/docs/lighthouse/overview" },
        { label: "Google: desativação do Mobile-Friendly Test", href: "https://developers.google.com/search/blog/2016/05/a-new-mobile-friendly-testing-tool?hl=pt-br" }
      ]
    },
    {
      title: "O que corrigir primeiro depois do relatório?",
      paragraphs: [
        "Uma lista longa de alertas não define a prioridade. Se o formulário falha, corrija o envio antes de refinar animações. Se a imagem inicial pesa demais, avalie dimensões e formato. Se uma integração externa atrasa a interação, confirme se ela é necessária naquela página. Priorize a falha que atinge mais visitantes ou bloqueia uma ação importante.",
        "Peça a quem cuida do site para registrar a mudança e medir a mesma página novamente. A conversa fica mais produtiva com uma URL, um sintoma e um objetivo claro: 'a imagem do serviço demora a aparecer no celular' ou 'o formulário confirma, mas não entrega a mensagem'. Se precisa de ajuda para transformar o diagnóstico em melhorias, a Ravyt pode avaliar conteúdo, interface e desempenho em conjunto."
      ],
      links: [
        { label: "O que avaliar ao contratar um site profissional", href: "/blog/criacao-de-site-profissional-para-empresas" },
        { label: "Como funciona a manutenção de sites", href: "/blog/manutencao-de-site-o-que-inclui" }
      ]
    }
  ],
  checklist: { title: "Checklist para repetir o teste", items: [
    "Escolha a URL de uma página que recebe visitas ou contatos.",
    "Rode o PageSpeed Insights em Dispositivos móveis e registre a data.",
    "Leia os dados reais quando disponíveis e investigue os alertas de laboratório.",
    "Abra a página em um telefone e conclua uma ação de contato de verdade.",
    "Corrija o problema prioritário e teste novamente a mesma URL."
  ] },
  sources: [
    { label: "Google — fim do Test My Site", url: "https://business.google.com/en-all/think/future-of-marketing/mobile-tools-to-optimize-site-and-app/" },
    { label: "Google — como funciona o PageSpeed Insights", url: "https://developers.google.com/speed/docs/insights/v5/about?hl=pt-BR" },
    { label: "web.dev — Core Web Vitals", url: "https://web.dev/articles/vitals" },
    { label: "Chrome Developers — Lighthouse", url: "https://developer.chrome.com/docs/lighthouse/overview" },
    { label: "Google Search Central — desativação do Mobile-Friendly Test", url: "https://developers.google.com/search/blog/2016/05/a-new-mobile-friendly-testing-tool?hl=pt-br" }
  ],
  serviceHref: "/diagnostico",
  serviceLabel: "Solicite um diagnóstico do seu site à Ravyt",
  ctaTitle: "Seu cliente consegue chegar ao contato pelo celular?",
  editorialNote: "Este guia foi revisado com a documentação oficial do Google, web.dev e Chrome Developers em 5 de outubro de 2026. Os exemplos são ilustrativos. Métricas e testes ajudam a orientar a análise; o resultado depende de cada página e de seu público.",
  relatedSlugs: ["criacao-de-site-profissional-para-empresas", "manutencao-de-site-o-que-inclui"]
};
