# Auditoria Ravyt Digital — 13 de setembro de 2026

Escopo: código atual, 11 rotas indexáveis, redirecionamentos, erros, ativos, navegação e integração de publicação. O posicionamento encontrado é Social Media para psicólogos parentais, com atendimento remoto nacional. A identidade visual e o depoimento de Rafaela foram preservados. Não foi retomada a antiga oferta de criação de sites.

Status abaixo descrevem o alcance efetivamente verificado, não certificação universal de conformidade.

| Nº | Categoria | Item verificado | Status | Evidência | Problema encontrado | Impacto | Prioridade | Correção realizada | Validação |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Posicionamento | Serviço, público e atendimento | Conforme | Home e serviço renderizados | Localização pouco explícita | Clareza comercial | Alta | Gestão de redes sociais, Tianguá/CE e atendimento remoto nacional na hero | Leitura do HTML e navegador |
| 2 | Primeira tela | Oferta e CTA | Conforme | Home nos seis tamanhos; CTA mobile abaixo de 517 px | Hero extensa | Conversão | Alta | Título, espaçamento e CTA mais compactos | Medição visual local |
| 3 | Arquitetura | Hub, artigos e navegação | Conforme | 11 rotas; serviço ligado aos três artigos | Artigos pouco conectados ao serviço | Descoberta | Alta | Links bidirecionais descritivos; redirects permanentes | Testes de rotas |
| 4 | Intenção | Home, serviço, blog e contato | Conforme | Titles exclusivos nas 11 rotas | Home/serviço com title igual | Diferenciação | Alta | Title específico do planejamento e gestão | Teste de unicidade |
| 5 | Ganho de informação | Utilidade editorial e SERP | Parcialmente conforme | Consultas de busca e três artigos revisados | Artigos curtos; análise competitiva limitada | Qualidade | Média | Critérios práticos e exemplos explicitamente ilustrativos | Leitura editorial; sem levantamento exaustivo de concorrentes |
| 6 | E-E-A-T | Autoria e transparência | Parcialmente conforme | Página da autora, BlogPosting, CFP | Datas de alteração ausentes; especialidades imprecisas | Confiança | Alta | Datas reais da revisão, método, limites e apoio de IA | JSON-LD e conteúdo; credenciais externas não auditadas |
| 7 | Linguagem | Clareza e promessas | Parcialmente conforme | Revisão das páginas ativas | Textos genéricos e estimativa de leitura excessiva | Compreensão | Média | Exemplos úteis, leitura calculada e copy objetiva | Revisão editorial; confirmação dos processos cabe à empresa |
| 8 | SEO on-page | Metadados e HTML | Conforme | 11 páginas 200, canonical e H1; seis testes | Metadados sociais herdados | Compartilhamento e indexação | Alta | Helper de metadados por rota e Twitter | Testes no artefato de produção |
| 9 | Schema | JSON-LD e entidades | Parcialmente conforme | JSON válido em todas as páginas testadas | Organização sem dados já fornecidos; knowsAbout amplo | Compreensão | Média | Dados empresariais e área de comunicação corrigidos | Parse JSON e inspeção; Rich Results Test não executado |
| 10 | 404 | HTTP e navegação | Conforme | Rotas inexistentes e removidas retornam 404 | Metadata da 404 herdada pelo framework | Indexação | Alta | X-Robots-Tag noindex e links úteis | Teste de status e header |
| 11 | Robots/sitemap | URLs e acesso | Parcialmente conforme | 11 URLs canônicas; arquivos retornam 200 | Datas não refletiam revisão | Rastreamento | Alta | lastmod atualizado nas páginas alteradas | Teste local; Search Console sem acesso |
| 12 | Local/nacional | Atendimento e NAP | Parcialmente conforme | Dados fornecidos anteriormente pela cliente | Endereço/CNPJ ausentes no rodapé atual | Confiança | Média | Rodapé e Organization consistentes | Código e HTML; GBP não auditado |
| 13 | Imagens | Inventário e formatos | Parcialmente conforme | imagens.json: 24 rasters; retrato WebP 65.922 bytes; OG 1200×630 | Ativos antigos ainda armazenados | Peso potencial | Média | Sem exclusão de originais; removida carga CSS duplicada | Inventário de dimensões/peso; sem auditoria visual de todos os arquivos históricos |
| 14 | Alternativos | Alt e dimensões | Conforme | Todas as imagens nas 11 rotas têm alt, width e height | Nenhuma ausência no HTML ativo | Acessibilidade/CLS | Alta | Contextos existentes preservados | Teste das tags img e leitura do DOM |
| 15 | Vídeos | Conteúdo audiovisual | Não se aplica | Nenhum vídeo nas rotas ativas | — | — | Baixa | Nenhum recurso desnecessário criado | Busca no código e HTML |
| 16 | Performance | CWV, rede e recursos | Parcialmente conforme | Build concluído; CSS carregado uma vez | Stylesheet duplicada | Transferência e renderização | Média | Removido link manual redundante | Inspeção de recursos; LCP/CLS/INP reais e rede lenta não medidos |
| 17 | Responsividade | Seis larguras e zoom | Parcialmente conforme | Home em 320/375/430/768/1024/1440; internas em 320/1440 | Títulos e decoração excediam telas estreitas | Mobile | Alta | Quebra de títulos, min-width e contenção decorativa | Navegador; zoom 200% não confirmado |
| 18 | Acessibilidade | Semântica, foco e teclado | Parcialmente conforme | lang pt-BR, skip link, menu e foco | Sem salto ao conteúdo; menu fechado acessível | Navegação | Alta | Skip link, foco visível, Escape/Tab e menu oculto | DOM e interações; leitor de tela e contraste integral pendentes |
| 19 | CTA mobile | Contato e cookies | Conforme | CTA e banner com separação após ResizeObserver | Possível sobreposição com banner alto | Conversão | Alta | Offset dinâmico, safe-area e ocultação no menu | Teste local de aceitar/recusar/reabrir |
| 20 | Formulários | Formulário ativo | Não se aplica | Zero forms nas 11 rotas; nenhum embed ativo | Site atual usa WhatsApp/e-mail/telefone | — | Baixa | Não criado formulário artificial | Código e teste HTML |
| 21 | Agradecimento | Conversão por formulário | Não se aplica | /obrigado retorna 404; canais externos | Não há recebimento por formulário | — | Baixa | Não criada conversão falsa | Teste de rota |
| 22 | Carregamento | Estado de transição | Parcialmente conforme | loading.tsx e navegação | Identificação main potencialmente duplicada | Acessibilidade | Média | Label de carregamento sem id repetido | HTML; conexão lenta não simulada |
| 23 | Contato | Identificação e canais | Parcialmente conforme | wa.me, mailto, tel e rodapé | Identificação empresarial incompleta | Confiança | Alta | Restaurados dados autorizados | URLs/DOM; entrega de e-mail e resposta telefônica não testadas |
| 24 | Privacidade | Consentimento e revogação | Parcialmente conforme | Aceitar, recusar e reabrir funcionam | Não era possível alterar escolha; categorias sem uso | Controle do usuário | Alta | Preferências globais; analytics bloqueado sem aceite; política alinhada | UI e código; revisão jurídica e retenção no provedor pendentes |
| 25 | Analytics | Eventos e produção | Parcialmente conforme | API: eventos válidos 204, inválidos 400, outra origem 403 | Cliques em contato incompletos; parâmetros excessivos | Mensuração | Alta | Pageview/WhatsApp/e-mail/telefone e fallback Beacon | Teste local com logs; painel, persistência e envio automático completo em produção não certificados |
| 26 | Busca/IA | Conteúdo rastreável | Conforme | HTML dos artigos, links e entidades | Conexões editoriais incompletas | Compreensão | Média | Respostas práticas e links contextuais | Inspeção HTML; sem promessa de citação por IA |
| 27 | Técnica | HTTPS, redirects e status | Parcialmente conforme | Artefato responde 200/308/404 corretamente | www servia duplicata 200 | Canonicalização | Alta | www → domínio principal preservando caminho/query | Testes Worker; cache/compressão e links externos integralmente pendentes |
| 28 | Alegações | Garantias indevidas de SEO | Conforme | Revisão do material anexado e páginas ativas | Material contém inferências que não são garantias | Credibilidade | Média | Nenhuma promessa de ranking ou Schema para IA acrescentada | Conferência editorial com documentação Google |
| 29 | Validação | Instalação, lint, testes e build | Conforme | npm ci, lint sem erros, seis testes, build vinext | Falhas de metadados/mobile encontradas durante revisão | Qualidade de entrega | Alta | Correções e testes de regressão | Logs e testes versionados |
| 30 | Publicação | Branch e produção | Não foi possível validar | Resultado final será informado na entrega | Publicação ainda não concluída na emissão deste arquivo | Disponibilidade da atualização | Alta | Preservar main e usar atualização sem force | Conferir commit/checks/HTML após envio |

## Resumo executivo e problemas críticos
Não foi encontrada falha crítica reproduzida no artefato validado. Foram corrigidas falhas de clareza, metadados, identificação empresarial, consentimento, mensuração, navegação e mobile. Isso não equivale a conformidade integral: CWV reais, tecnologias assistivas, Search Console, GBP, operação dos canais e retenção do Analytics precisam de verificação adicional.

## Correções e arquivos
Alterações em app/page.tsx, app/globals.css, app/layout.tsx, app/loading.tsx, app/not-found.tsx, páginas de serviço/contato/autora/blog/legais, app/sitemap.ts, app/api/analytics/route.ts, components/Analytics.tsx, CookieConsent.tsx, BlogChrome.tsx, LegalPage.tsx, MobileMenu.tsx, lib/metadata.ts, worker/index.ts, public/styles/site.css e tests/audit.test.mjs. O CSS público é gerado pelo build a partir da fonte. O depoimento real de Rafaela e o conteúdo legítimo anterior foram preservados.

## Intenção das páginas
Home: comercial/navegacional; serviço: comercial/transacional; contato: transacional; autora: institucional; blog e três artigos: informativa; três políticas: institucional. /servicos redireciona ao serviço atual; /sobre à seção institucional. Antigas páginas de serviços removidos retornam 404.

## Pendências e dependências da cliente
Acesso de leitura ao Search Console e ao Google Business Profile; confirmação operacional dos canais; acesso aos logs e política de retenção da hospedagem; análise de dados de campo; revisão profissional das políticas quando necessária. Nenhuma nova qualificação, resultado, cliente ou preço foi inventado.

## Testes e build
Instalação por npm ci. Lint executado. Seis testes: HTML/metadados/schema/imagens; 404; redirects; sitemap/robots; API analytics; teste SEO preexistente. Build de produção concluído em cinco etapas, com verificação UTF-8 e validação do artefato. Avisos do ambiente de proxy e limitação de classificação estática do vinext não impediram o build; HTTP foi verificado diretamente.

## Publicação
Repositório autorizado: https://github.com/Ravyt-Digital/site-ravytdigital, branch main. Domínio de destino: https://ravytdigital.com. A confirmação da implantação e o commit são informados na entrega após verificação; este arquivo foi preparado antes do envio.

## Acompanhamento
- 7 dias: confirmar indexação, sitemap, 404, redirects, eventos consentidos e funcionamento dos canais.
- 30 dias: analisar consultas, cliques, páginas de entrada, cliques em contato e qualidade dos leads; avaliar CWV com dados disponíveis.
- 90 dias: comparar períodos, revisar conteúdo com dúvidas reais e ajustar serviço/CTAs com evidências. Não usar posição isolada como prova de resultado nacional.

## Referências consultadas
- Google: https://developers.google.com/search/docs/appearance/ai-features
- CFP: https://site.cfp.org.br/legislacao/codigo-de-etica/
- ANPD: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf
- Material anexado: Arquitetura Algorítmica e Práticas Avançadas de SEO; tratado criticamente, sem converter hipóteses em garantias.
