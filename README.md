# Ravyt Digital — home e diagnóstico de presença digital

Home comercial e diagnóstico em página própria, em português. Marca, fontes e infraestrutura de publicação preservadas.

## Home comercial

A home apresenta exclusivamente Google Meu Negócio (Perfil da Empresa no Google): informações e contatos, categorias e serviços, orientação sobre fotos e avaliações. A oferta é um único plano de R$ 597,00 por ano, com um cartão NFC para avaliações de bônus. Não oferece criação de sites nem SEO.

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

## Experiência e dados

`components/Diagnostic.tsx` apresenta cinco perguntas, navegação reversível e resultado preliminar. `lib/diagnostic.mjs` reúne a máquina de estados, critérios de classificação, telefone, payload e envio. Não há consultas automáticas ao Google ou às redes sociais.

Classificação: objetivo explícito de Google → B; começando ou sem orientação → C; site e redes existentes → D; apresentação/organização → A. O resultado também apresenta objetivo, dificuldade, percepção sobre Google e região. Compatibilidade é interesse declarado em serviços atendidos; não é aprovação contratual ou elegibilidade do Google.

`components/ContactForm.tsx` preserva a chave pública e o endpoint Web3Forms. Envia nome (`name`), WhatsApp (`phone`), perfil opcional (`professional_profile`), cinco campos `diagnostic_*`, `interest_category`, `preliminary_compatibility`, `compatibility_reason`, `contact_consent`, `consent_text`, `privacy_policy_version`, `lead_source`, `submitted_at` e UTMs limitadas. Assunto: `Novo diagnóstico | [nome tratado, até 72 caracteres] | [localidade]`; nome do remetente: `Diagnóstico Ravyt Digital`. Não envia URL completa ou referrer; eventos de medição não contêm dados de contato ou respostas. O destinatário continua associado à chave existente, sem substituição pelo e-mail institucional. Sucesso somente após resposta positiva do serviço; erro mantém informações para nova tentativa.

As respostas ficam em memória até o envio; não são gravadas em banco pelo quiz. Ao encerrar o relacionamento, a Ravyt deve excluir dados de suas caixas de e-mail e sistemas, ressalvadas obrigações legais de conservação. O site não executa exclusão nesses prestadores: confirmar procedimento operacional, responsável e alcance dos registros/backups. Canal institucional: contatoravyt@gmail.com.

## Publicação e SEO

`app/page.tsx` contém a home; `app/diagnostico/page.tsx` preserva a experiência anterior. Os documentos legais são compartilhados pelo rodapé. Cada página tem seu canonical e item de sitemap. `/contato` e `/diagnosticos` redirecionam para `/diagnostico`; documentos legais redirecionam para seções equivalentes; páginas comerciais/editoriais retiradas retornam 410. Nunca encaminhar conteúdos sem equivalência para a home.

```sh
npm run build
node --test tests/*.test.mjs
bash scripts/sites-env.sh -- node node_modules/typescript/bin/tsc --noEmit
```

O build inclui validação do artefato. CSS publicado em `public/styles/site.css` sincronizado por script. `.openai/hosting.json`, bindings e fluxo de Workers/Sites preservados. Métricas opcionais dependem de consentimento.

## Limites de validação

Testes automatizados de submissão usam respostas simuladas de sucesso/falha. Teste controlado autorizado `RAVYT-QA-20261014-0112`, com dados sintéticos e instrução de não contatar, recebeu HTTP 200 e `success: true` da API. O retorno confirmou todos os campos, mas o recebimento no e-mail destinatário não foi confirmado: o Gmail conectado é de outra conta e não apresentou o teste na busca. O envio AJAX mantém endpoint, chave e destinatário; o payload foi padronizado para JSON, formato confirmado no teste, evitando a resposta não JSON encontrada na tentativa multipart. A política não é garantia de conformidade jurídica. A rotina operacional de exclusão deve ser executada pela Ravyt, também nos prestadores.

## hCaptcha Free

`components/HCaptcha.tsx` carrega o SDK somente quando o formulário final é montado. Usa a chave pública compartilhada oficial do Web3Forms Free, em português e modo compacto; sem compatibilidade reCAPTCHA. Token obrigatório no campo `h-captcha-response`, expirado ou consumido é descartado. Falhas permitem recarregar o desafio sem apagar dados. O painel deve manter hCaptcha habilitado; nenhuma configuração ou destinatário foi alterado. Um teste completo exige que uma pessoa resolva o desafio no navegador e confira o e-mail; o teste anterior sem captcha não valida esta nova proteção.

Documentos legais abrem em diálogos nativos pelo único par de links do rodapé. A tela inicial usa a altura disponível sem ocultar conteúdo; em telas pequenas ou ampliação de texto, a rolagem é preservada por acessibilidade.

## Apresentação dos e-mails

`emailPayload` traduz os identificadores internos para títulos em português no JSON enviado ao Web3Forms, preservando os valores. Ordem: identificação e localidade → diagnóstico → avaliação → origem, UTMs e privacidade. Os identificadores do quiz continuam estáveis; apenas a serialização para e-mail muda. Parâmetros técnicos (`access_key`, `subject`, `from_name`, `botcheck`, `h-captcha-response`) são preservados como nomes reservados. Não há template HTML personalizado, webhooks ou recursos pagos.

Assunto construído localmente com nome limitado a 72 caracteres, sem controles ou delimitador vertical, e localidade mapeada a Tianguá / Tianguá e região / Outra localidade. Sem nome: `Novo diagnóstico | Ravyt Digital`. As cinco UTMs são preservadas e traduzidas quando presentes; `test_reference` torna-se `Referência do teste`. A aparência final do template do provedor depende de conferência no destinatário. Teste real desta mudança exige um token hCaptcha obtido por uma pessoa; o Gmail conectado não dá acesso à caixa contatoravyt@gmail.com.

## Depoimentos

Seis relatos conferidos no HTML público de https://ytalacabralgmn.rvt.bio/ em 14/10/2026, seção “O que dizem sobre trabalhar comigo”. `lib/testimonials.json` preserva nomes, identificações e todos os parágrafos, inclusive a redação original. Duas avaliações no Google têm cinco estrelas; quatro mensagens de WhatsApp não recebem estrelas. Relatos de serviços diversos com Ytala, sem atribuição automática a SEO ou resultados no Google. Sem imagens ou bibliotecas adicionais.

Carrossel independente do quiz, abaixo do diagnóstico e acima do rodapé. Primeiro parágrafo de cada relato e acesso ao texto completo de Rafaela; expansão pausa a rotação. Todos os cards compartilham a mesma célula de grid para reservar a maior altura de resumo e evitar deslocamentos automáticos. Textos completos expandem por interação, sem corte ou altura fixa. Rotação de 6 a 20 segundos por tamanho; pausa por foco, hover, escolha explícita, preferência de movimento reduzido, aba oculta ou seção fora de tela. Setas e indicadores com teclado, sem eventos de scroll.

## SEO e mensuração — 23/10/2026

Metadados específicos por página (incluindo canonical, Open Graph e Twitter), sitemap com cinco URLs, JSON-LD de Organization, WebSite, WebPage, Service/Offer e Article/BreadcrumbList nos guias. `/google-meu-negocio` redireciona para a home; URLs com barra final redirecionam para a forma canônica.

Após o consentimento opcional, os eventos `primary_cta_click`, `whatsapp_click`, `diagnostic_open`, `diagnostic_start`, `plan_click` e `form_submit` seguem para `/api/analytics` e para `dataLayer` com prefixo `ravyt_`. O endpoint registra somente evento, caminho e horário; não inclui nome, WhatsApp, respostas, mensagem ou parâmetros de URL. `form_submit` representa o aceite do Web3Forms, não uma venda. `whatsapp_click` representa um clique, não uma conversa efetivada. As tags externas existentes foram preservadas; eventos na dataLayer não comprovam uma configuração de conversão no painel do GTM/GA4.

Validação: `npm run build`, `node --test tests/*.test.mjs`, `npm run types:worker` e `npx tsc --noEmit`; o arquivo de tipos é gerado localmente e ignorado pelo Git. Para empacotamento sem publicar: `npx wrangler deploy --config dist/server/wrangler.json --dry-run`.
