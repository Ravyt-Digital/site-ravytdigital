# Ravyt Digital

Site institucional One Page da Ravyt Digital, publicado em https://ravytdigital.com.

## Conteúdo atual

Uma única página em português apresenta o plano anual de R$ 597, a implantação manual de um site One Page, SEO técnico inicial, configuração inicial do Perfil da Empresa no Google quando elegível e manutenção técnica por 12 meses conforme o contrato.

Oferta, exemplos de design, processo, responsáveis, dúvidas, privacidade e termos estão em seções da página principal. O formulário é o único canal de contato do site e mantém a integração existente com Web3Forms.

## Desenvolvimento

- Node.js 22.13 ou superior.
- `npm run install:ci`: instalação das dependências travadas.
- `npm run build`: build Vinext e validação do artefato One Page.
- `npm test`: build e testes do site e da medição consentida.
- `npm run types:worker`: geração dos tipos do Cloudflare.

A identidade do projeto Sites está em `.openai/hosting.json`. O deploy existente do domínio principal usa o Cloudflare Worker `site-ravyt-digital` a partir da branch `main`. Não altere bindings ou configurações de publicação sem necessidade.

## Arquitetura

- `app/page.tsx`: conteúdo da página.
- `components/ContactForm.tsx`: formulário, validação e retorno do envio.
- `components/CookieConsent.tsx`: preferências de medição.
- `app/sitemap.ts`: somente a URL canônica principal.
- `worker/index.ts`: execução do site e tratamento dos endereços anteriores. Redirecionamentos para seções correspondentes e respostas 410 são regras de compatibilidade, não páginas ou ofertas adicionais.
- `public/`: apenas os arquivos utilizados pela versão atual e os arquivos técnicos de publicação.

## Validação

A confirmação visual ou lógica do formulário não comprova recebimento na caixa de entrada. O feedback de sucesso depende da resposta positiva do serviço de envio. Dados pessoais preenchidos não são enviados nos eventos de medição.
