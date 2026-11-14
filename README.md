# Ravyt Digital

Site da Ravyt Digital para criação de sites para arquitetos e engenheiros. A página inicial reúne o posicionamento, os exemplos conceituais e o simulador de orçamento. As páginas de serviços e o blog aprofundam as decisões de quem planeja um projeto.

As antigas URLs dedicadas a cada segmento redirecionam permanentemente para as seções correspondentes na home. O simulador calcula valores no navegador e monta o resumo para o cliente abrir no WhatsApp. Pedidos de orçamento e parcerias também podem ser enviados pelo formulário.

## Desenvolvimento e publicação

Use Node.js 22.13 ou superior.

```sh
npm ci
npm run dev
npm test
```

O build sincroniza o CSS público e gera o Worker em `dist/server/index.js`, a configuração em `dist/server/wrangler.json` e os assets em `dist/client/`.

| Campo no Cloudflare Workers Builds | Valor |
| --- | --- |
| Branch de produção | `main` |
| Diretório raiz | `/` |
| Comando de build | `npm run build` |
| Comando de implantação | `npx wrangler deploy --config dist/server/wrangler.json` |

A configuração do ChatGPT Sites fica em `.openai/hosting.json`. O formulário usa a vinculação D1 `DB`. As credenciais de publicação ficam na integração de build ou em variáveis de ambiente protegidas. A documentação das medições em uso está em [docs/meta-events.md](docs/meta-events.md).
