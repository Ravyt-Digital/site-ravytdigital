# Ravyt Digital — diagnóstico de presença digital

Página única, em português, para campanhas de profissionais liberais e prestadores de serviços de Tianguá e região. Marca, fontes e infraestrutura de publicação preservadas.

## Experiência e dados

`components/Diagnostic.tsx` apresenta cinco perguntas, navegação reversível e resultado preliminar. `lib/diagnostic.mjs` reúne a máquina de estados, critérios de classificação, telefone, payload e envio. Não há consultas automáticas ao Google ou às redes sociais.

Classificação: objetivo explícito de Google → B; começando ou sem orientação → C; site e redes existentes → D; apresentação/organização → A. O resultado também apresenta objetivo, dificuldade, percepção sobre Google e região. Compatibilidade é interesse declarado em serviços atendidos; não é aprovação contratual ou elegibilidade do Google.

`components/ContactForm.tsx` preserva a chave pública e o endpoint Web3Forms. Envia nome (`name`), WhatsApp (`phone`), perfil opcional (`professional_profile`), cinco campos `diagnostic_*`, `interest_category`, `preliminary_compatibility`, `compatibility_reason`, `contact_consent`, `consent_text`, `privacy_policy_version`, `lead_source`, `submitted_at` e UTMs limitadas. Assunto: `Novo Diagnóstico Ravyt | Tianguá`; nome do remetente: `Diagnóstico Ravyt Digital`. Não envia URL completa ou referrer; eventos de medição não contêm dados de contato ou respostas. O destinatário continua associado à chave existente, sem substituição pelo e-mail institucional. Sucesso somente após resposta positiva do serviço; erro mantém informações para nova tentativa.

As respostas ficam em memória até o envio; não são gravadas em banco pelo quiz. Ao encerrar o relacionamento, a Ravyt deve excluir dados de suas caixas de e-mail e sistemas, ressalvadas obrigações legais de conservação. O site não executa exclusão nesses prestadores: confirmar procedimento operacional, responsável e alcance dos registros/backups. Canal institucional: contatoravyt@gmail.com.

## Publicação e SEO

`app/page.tsx` contém experiência e documentos legais inline. Um único canonical e item de sitemap. Rotas de contato e documentos legais redirecionam para seções equivalentes; páginas comerciais/editoriais retiradas retornam 410. Nunca encaminhar conteúdos sem equivalência para a home.

```sh
npm run build
node --test tests/*.test.mjs
bash scripts/sites-env.sh -- node node_modules/typescript/bin/tsc --noEmit
```

O build inclui validação do artefato. CSS publicado em `public/styles/site.css` sincronizado por script. `.openai/hosting.json`, bindings e fluxo de Workers/Sites preservados. Métricas opcionais dependem de consentimento.

## Limites de validação

Testes de submissão usam respostas simuladas de sucesso/falha, sem disparar mensagens reais. Confirmação na caixa de entrada exige teste identificado e autorizado do titular. A política não é garantia de conformidade jurídica. A rotina operacional de exclusão deve ser executada pela Ravyt, também nos prestadores.
