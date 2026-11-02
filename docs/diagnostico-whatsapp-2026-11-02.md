# Atualização do diagnóstico Ravyt Digital

Revisão: 2 de novembro de 2026. Estado: implementado e testado em pré-visualização; publicação em produção depende de aprovação. Nenhuma mensagem comercial foi enviada durante os testes.

## Comportamento

- Cinco etapas, indicador de progresso e retorno preservados.
- Perguntas 1 a 4 e categorias A/B/C/D preservadas. Não existia pontuação numérica: a categoria é definida por prioridade de objetivo, estágio e estrutura atual.
- Pergunta 5: **Em qual cidade seu negócio atua?** Campo único obrigatório, apoio e placeholder solicitados. Aceita espaços, acentos e hífens; remove espaços no início/fim ao concluir. Não pede UF, CEP ou endereço. A cidade não participa da classificação ou compatibilidade.
- Resultado disponível antes de informar contato. É preliminar, baseado nas respostas, sem auditoria automática ou garantias de posicionamento.
- Nome e celular brasileiro obrigatórios; site/perfil opcional; consentimento expresso desmarcado.
- CTA **Conversar sobre meu diagnóstico** prepara perguntas/respostas reais, dados e categoria recalculada no navegador, com `encodeURIComponent`, e abre `https://wa.me/5588996956479`.
- O visitante revisa e envia no WhatsApp. A página informa tentativa de abertura, sem declarar envio ou recebimento. Bloqueio de cliques repetidos por dois segundos, cópia da mensagem e abertura de conversa sem texto como fallback. Falhas não apagam os campos. Enter funciona nos campos de contato e cidade, respeitando composição de texto.

## Privacidade e integrações

A mensagem fica na memória do navegador; não há banco ou endpoint de leads. Nome, telefone, cidade, perfil e respostas não são colocados em armazenamento local, eventos ou logs do código do site. A URL com texto não é inserida em um link no DOM; é criada na ação autorizada e aberta com `noopener,noreferrer`. Isso reduz exposição a rastreadores de links e referrers, mas não torna a URL secreta: WhatsApp e histórico do navegador podem tratar o texto. O aviso no contato e a política explicam esse funcionamento. A cópia da mensagem usa a área de transferência somente quando solicitada.

Web3Forms, payload/chave de envio, hCaptcha e confirmação antiga foram retirados apenas da experiência que os utilizava. A busca por dependências não encontrou outros consumidores. Nenhuma conta ou configuração desses prestadores foi desativada.

Razão social, CNPJ, canal contatoravyt@gmail.com e WhatsApps da equipe foram preservados. Política e termos atualizados para 02/11/2026; mantidos direitos, exclusão operacional e limites do diagnóstico. Mensagens voluntariamente recebidas passam a integrar o atendimento pelo WhatsApp. O site não executa exclusão em sistemas externos.

## Mensuração

Pixel Meta `2030474547612558`, GTM `GTM-T9C5DS9C`, Google Analytics `G-ZVNJCHW09P` observado no contêiner publicado e Metricool preservados. O código não implementa um endpoint próprio de API de Conversões. Não foi criada outra integração CAPI. Event IDs do Pixel e dataLayer seguem iguais por ação; a deduplicação externa depende da conexão já existente, sem alteração no painel.

| Ação | Evento interno | Meta | Google |
|---|---|---|---|
| Visita | `page_view` | `PageView` | Google Tag existente |
| Botão de especialista | `primary_cta_click` | `Falar com Especialistas` | GTM existente |
| Link para diagnóstico | `diagnostic_open` | `Diagnostico` | GTM existente |
| Visualização do diagnóstico | `diagnostic_view` | `ViewContent` | Google Tag existente |
| Início das perguntas | `diagnostic_start` | `DiagnosticStart` | `ravyt_diagnostic_start` |
| Primeiro resultado da sessão do componente | `diagnostic_complete` | `DiagnosticComplete` | `ravyt_diagnostic_complete` |
| Abrir captura opcional | `diagnostic_contact_request` | `DiagnosticContactRequest` | dataLayer existente |
| Clique final/fallback para WhatsApp | `diagnostic_whatsapp_click` | **`Diagnostico_WhatsApp_Click`** | `ravyt_diagnostic_whatsapp_click` |
| WhatsApps gerais da equipe | `whatsapp_click` | `Contact` | GTM existente |
| Plano | `plan_click` | `PlanClick` | dataLayer existente |
| Antigo aceite de envio | `form_submit` | `Lead` | Definição legada preservada, não disparada pelo diagnóstico |

A mensuração exige consentimento opcional, separado da autorização de contato. Recusar não bloqueia o diagnóstico. O novo evento envia apenas caminho da página, canal e etapa; os IDs de evento são aleatórios. `/api/analytics` registra somente evento, caminho e horário. Nenhum evento implementado inclui nome, telefone, cidade, resposta, mensagem ou URL preenchida.

Foi inspecionado o contêiner GTM público: ele contém um listener global de `submit` que dispara `generate_lead` indiscriminadamente. O novo contato utiliza grupo acessível de campos e botão de ação, sem evento `submit`; assim não gera esse falso lead. Os três eventos de início, conclusão e clique são encaminhados explicitamente ao `gtag`, pois o contêiner observado não tinha gatilhos para encaminhar os eventos personalizados da dataLayer. A descoberta automática de formulários/botões do Meta foi desabilitada para este Pixel; eventos explícitos continuam.

Indicadores possíveis no Meta/Google e nos registros já existentes: diagnósticos iniciados, concluídos e cliques finais. Taxa de clique = eventos de clique / diagnósticos concluídos × 100. É uma taxa de eventos: reaberturas deliberadas após o intervalo podem contar novamente. Não mede mensagens enviadas, recebidas, atendimentos efetivados ou vendas. A configuração de conversões/key events e a entrega nos painéis externos não foram alteradas nem verificadas ponta a ponta.

## Geografia e SEO

Referências comerciais regionais removidas do texto da equipe, quinta pergunta, observação regional do resultado, manifest e descrição de Organization. A apresentação passa a mencionar diferentes regiões do Brasil. Não foi feita substituição automática por “Brasil”. Títulos, descriptions, Open Graph e alt texts foram revisados; não havia restrição regional adicional a retirar. O preço e escopo do plano de Perfil da Empresa no Google permanecem; a descrição institucional também reconhece criação de sites e SEO, informados pela proprietária.

O nome de exibição de um registro histórico de portfólio não utilizado na home foi neutralizado. IDs e caminho `cerest-tiangua.webp` preservados para não quebrar assets. Há referências geográficas em documentos históricos de implementação; elas não compõem o conteúdo público. Não foi encontrado endereço legal que exigisse alteração ou invenção.

`/diagnostico` é uma página própria, responde 200 e mantém canonical próprio. Não há redirecionamento para a home. Sitemap com cinco URLs, robots, metadados e dados estruturados preservados. Não foram criadas páginas indexáveis duplicadas nem novos redirecionamentos.

## Arquivos

| Área | Arquivos |
|---|---|
| Quiz e mensagem | `lib/diagnostic.mjs`, `lib/diagnostic.d.mts` |
| Interface | `components/Diagnostic.tsx`, `components/DiagnosticExperience.tsx`, `components/ContactForm.tsx` |
| Estilos | `app/globals.css`, `public/styles/site.css` sincronizado pelo build |
| Legal | `components/SiteFooter.tsx` |
| Conteúdo e SEO | `app/page.tsx`, `app/manifest.ts`, `lib/structured-data.ts`, `lib/home-content.ts` |
| Eventos | `components/Analytics.tsx`, `lib/analytics.ts` |
| Documentação | `README.md`, este relatório |
| Removidos por falta de consumidores | `components/HCaptcha.tsx`, `lib/hcaptcha.ts`, `components/DiagnosticConfirmation.tsx` |
| Testes | diagnóstico, jornada, eventos, contato WhatsApp, privacidade/geografia e regressão; testes antigos exclusivos de e-mail/captcha/confirmação substituídos |

## Validação

| Verificação | Resultado |
|---|---|
| Compilação de produção e validação do artefato | Aprovadas |
| Tipos TypeScript após geração dos tipos Worker | Aprovados |
| Suíte automatizada completa | 34 testes aprovados |
| Classificação | 256 combinações das quatro perguntas × 8 cidades; categoria idêntica à regra original e independente da cidade |
| Cidades | Fortaleza, São Paulo, Rio de Janeiro, Belo Horizonte, Brasília, São Luís; também Xique-Xique e São João d’Aliança |
| Mensagem | Dados fictícios, perfil preenchido/vazio, perguntas e respostas reais, resultado, Unicode/emoji, espaços e quebras de linha; URL codificada recupera exatamente o texto |
| Validação e interação | Nome/telefone/consentimento, cidade vazia, retorno, Enter, manutenção das respostas e dados; nenhum envio automático |
| Repetição/falhas | Um clique repetido durante o bloqueio não abre nova aba; falha simulada mantém mensagem copiável; cópia e conversa base verificadas |
| Privacidade | Recusa bloqueia eventos; IDs correspondem entre dataLayer/Pixel/API; dados injetados não aparecem nos logs da API |
| Geografia | HTML das cinco páginas, manifest e código revisados; exceção somente para IDs/caminhos históricos de assets |
| Regressão | Textos dos cinco depoimentos com checksums preservados; carrossel, imagens, links, preço, navegação, cookie consent, sitemap, robots, JSON-LD e canonicals aprovados |
| Browser desktop | Fluxo completo na prévia Chrome; cidade “São Luís” com trim e Enter, resultado B, contato, abertura, texto completo e cópia; sem enviar mensagem |
| Larguras de celular/tablet | Iframes reais de 360 e 768 px na prévia Chrome: cinco etapas, resultado e contato funcionaram; nenhuma rolagem horizontal (largura útil varia com barra de rolagem) |
| Android/iOS nativos | **Pendente**: não há dispositivos/aplicativos nativos disponíveis neste ambiente. Largura de tela e teste de lógica não substituem esse teste |
| Meta/GA4/CAPI externos | Código e payloads testados com simulação; recebimento/deduplicação nos painéis não verificados ao vivo |

Não foi executado PageSpeed externo da nova versão porque ela ainda não foi publicada. A página temporária de QA responsivo foi retirada antes de empacotar.

## Publicação e continuidade

A produção `ravytdigital.com` e `www.ravytdigital.com` está ligada ao Worker Cloudflare **site-ravyt-digital**, conforme consulta somente leitura. As bases do repositório GitHub `Ravyt-Digital/site-ravytdigital` e do projeto Sites existente foram comparadas e não havia diferenças de arquivos antes das mudanças. O cadastro de domínio do Sites aparece pendente, portanto publicar somente no endereço gerado pelo Sites não comprovaria atualização do domínio principal. Nenhum DNS ou domínio foi modificado.

As mudanças foram preparadas no projeto existente e serão apresentadas em branch/PR de revisão e versão salva, sem implantação automática. Depois da aprovação, publicar pelo fluxo do Worker existente e verificar o domínio principal, evitando mudar DNS, público ou infraestrutura. Preservar a versão anterior para rollback. Último deployment de produção observado antes desta mudança: `5f94a75f-aca5-4716-93f6-7b8f122a009c`, versão `65f1f0c8-f768-4671-ba7b-ff8ce9859569`, 30/10/2026.

## Referências consultadas

- [WhatsApp — clique para conversa](https://faq.whatsapp.com/5913398998672934/?locale=pt_BR).
- [ANPD — direitos dos titulares](https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares).
- Contêiner GTM público do próprio site, consultado em 02/11/2026 para identificar os gatilhos reais.
