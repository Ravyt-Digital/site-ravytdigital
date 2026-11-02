# Ravyt Digital — home e diagnóstico de presença digital

Home comercial e diagnóstico em página própria, em português. Marca, fontes e infraestrutura de publicação preservadas.

## Home comercial

A home apresenta exclusivamente Google Meu Negócio (Perfil da Empresa no Google): informações e contatos, categorias e serviços, orientação sobre fotos e avaliações. A oferta é um único plano de R$ 597,00 por ano, com um cartão NFC para avaliações de bônus. O plano mantém esse escopo; a apresentação institucional também informa criação de sites e SEO, conforme orientação de 02/11/2026, sem incluir esses serviços no preço do plano.

A home concentra as intenções comerciais de consultoria, especialista, otimização e gerenciamento. Foram adicionados três guias: `/minha-empresa-nao-aparece-no-google`, `/como-colocar-empresa-no-google-maps` e `/quanto-custa-google-meu-negocio`. O mapa e o relatório estão em `docs/seo-2026-10-23.md`.

A galeria de sites foi retirada da home. Os depoimentos preservam o contexto de atendimento e parceria, sem atribuir resultados de posicionamento ou vendas. O diagnóstico continua em `/diagnostico`, com cinco perguntas e recomendações voltadas ao Google.

O botão “Fale com nossos especialistas” abre a escolha entre Ytala Cabral e Marcio Cabral, com os WhatsApps fornecidos e fotos WebP otimizadas. A identidade visual foi preservada: #050C13, #EF5309, #FEF7F1 e #1A1E22, com Inter e Fraunces.

## Publicar no Cloudflare Workers

O repositório entrega um Worker com renderização no servidor e assets estáticos. Use Node.js 22.13 ou superior, com as dependências de desenvolvimento disponíveis durante o build.

```sh
npm ci
npm run build
node --test tests/*.test.mjs
npx wrangler deploy --config dist/server/wrangler.json
```

No Cloudflare Workers Builds, configure:

| Campo | Valor |
| --- | --- |
| Branch de produção | `main` |
| Diretório raiz | `/` |
| Comando de build | `npm run build` |
| Comando de implantação | `npx wrangler deploy --config dist/server/wrangler.json` |
| Versão do Node | `22` ou superior compatível com o `package.json` |

O build produz `dist/server/index.js`, `dist/server/wrangler.json` e os assets em `dist/client/`. O arquivo gerado configura `ASSETS`, `IMAGES`, `nodejs_compat` e observabilidade; não publique `worker/index.ts` diretamente nem trate este projeto como uma exportação HTML estática. A configuração mantém o nome existente `site-ravyt-digital`. O domínio e os acessos da conta são configurados no Cloudflare, não alterados por este commit.

Para validar o empacotamento sem implantação:

```sh
npx wrangler deploy --config dist/server/wrangler.json --dry-run
```

As credenciais do Cloudflare devem ficar na integração de build ou em variáveis de ambiente protegidas, nunca no código. Para publicação local autenticada, o Wrangler usa a autenticação da conta. `npm run deploy` é a alternativa que executa build e implantação em sequência. `npm run install:ci` continua disponível para os ambientes Linux que utilizam o instalador verificado do projeto.

## Diagnóstico e contato — 02/11/2026

Cinco etapas, navegação reversível, progresso, resultado preliminar e contato opcional. A quinta pergunta pede somente a cidade em texto livre, obrigatória, com trim ao concluir, espaços, hífens e acentos. `lib/diagnostic.mjs` mantém a regra das primeiras quatro respostas: objetivo Google → B; começando/sem orientação → C; site e redes → D; demais → A. A cidade nunca participa da categoria ou da compatibilidade.

`components/ContactForm.tsx` prepara a mensagem no navegador após nome, celular, perfil opcional e autorização expressa desmarcada. `whatsappMessage` inclui dados, perguntas reais, respostas e resultado real recalculado. `whatsappUrl` usa `encodeURIComponent` e o destino oficial `https://wa.me/5588996956479`. O botão abre com `noopener,noreferrer`, bloqueia repetição por dois segundos e oferece mensagem acessível para copiar e conversa sem texto na URL. Abrir não comprova envio/recebimento. Dados ficam em memória; não há banco, persistência local ou API de leads. O visitante envia voluntariamente dentro do WhatsApp. A URL compartilha dados com o provedor ao abrir e pode ficar no histórico; a política explica essa diferença.

Web3Forms, chave pública, payload de e-mail, hCaptcha e tela antiga de confirmação foram removidos após conferir que só eram usados nesse diagnóstico. Nenhum serviço externo foi desativado na conta. Razão social, CNPJ, contatos e canal de privacidade foram preservados. Política e termos revisados em 02/11/2026.

O GTM publicado em 02/11/2026 contém um listener global de `submit` que gera `generate_lead` sem verificar envio. Por isso a captura de contato usa um grupo de campos e botão de ação com suporte a Enter, sem submeter um formulário HTML nem disparar esse falso lead. Links dinâmicos com texto pessoal não são expostos no DOM. A descoberta automática de formulários/botões do Meta foi desativada neste Pixel; os eventos explícitos foram preservados. O novo evento não dispara `Lead`.

## Publicação e SEO

A home, `/diagnostico` e os três guias continuam com canonical próprio, metadados, Open Graph, sitemap, robots e JSON-LD. `/diagnostico` responde 200, sem redirecionar para a home. Nenhum novo redirecionamento. Conteúdo institucional, manifest e descrição de Organization passam a informar atendimento a diferentes regiões do Brasil. Identificadores e caminhos de imagens históricas de clientes permanecem para preservar assets; não limitam atendimento. Os documentos legais estão nos diálogos compartilhados do rodapé.

```sh
npm run types:worker
node node_modules/typescript/bin/tsc --noEmit
npm run build
node --test tests/*.test.mjs
```

O build valida o artefato e sincroniza `public/styles/site.css`. A identidade Sites, bindings, imagens, fontes, depoimentos, plano anual e demais integrações são preservados. Publicação desta alteração depende da aprovação solicitada pelo usuário.

## Depoimentos

Seis relatos conferidos no HTML público de https://ytalacabralgmn.rvt.bio/ em 14/10/2026, seção “O que dizem sobre trabalhar comigo”. `lib/testimonials.json` preserva nomes, identificações e todos os parágrafos, inclusive a redação original. Duas avaliações no Google têm cinco estrelas; quatro mensagens de WhatsApp não recebem estrelas. Relatos de serviços diversos com Ytala, sem atribuição automática a SEO ou resultados no Google. Sem imagens ou bibliotecas adicionais.

Carrossel independente do quiz, abaixo do diagnóstico e acima do rodapé. Primeiro parágrafo de cada relato e acesso ao texto completo de Rafaela; expansão pausa a rotação. Todos os cards compartilham a mesma célula de grid para reservar a maior altura de resumo e evitar deslocamentos automáticos. Textos completos expandem por interação, sem corte ou altura fixa. Rotação de 6 a 20 segundos por tamanho; pausa por foco, hover, escolha explícita, preferência de movimento reduzido, aba oculta ou seção fora de tela. Setas e indicadores com teclado, sem eventos de scroll.

## SEO e mensuração — 23/10/2026

Metadados específicos por página (incluindo canonical, Open Graph e Twitter), sitemap com cinco URLs, JSON-LD de Organization, WebSite, WebPage, Service/Offer e Article/BreadcrumbList nos guias. `/google-meu-negocio` redireciona para a home; URLs com barra final redirecionam para a forma canônica.

Os eventos explícitos são documentados em `docs/diagnostico-whatsapp-2026-11-02.md`. GTM, GA4, Metricool, Meta Pixel e os IDs de eventos existentes são preservados. O endpoint registra somente evento, caminho e horário, sem dados pessoais ou URL de contato. A configuração externa de API de Conversões não foi alterada nem duplicada; seu funcionamento de ponta a ponta depende dos painéis do provedor. Um clique no WhatsApp não representa uma mensagem enviada, lead recebido ou venda.

Validação: `npm run build`, `node --test tests/*.test.mjs`, `npm run types:worker` e `npx tsc --noEmit`; o arquivo de tipos é gerado localmente e ignorado pelo Git. Para empacotamento sem publicar: `npx wrangler deploy --config dist/server/wrangler.json --dry-run`.
