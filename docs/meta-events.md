# Mensuração da Ravyt Digital

Pixel/conjunto de dados: `2030474547612558` (Ravyt Digital - Site).
Conexão existente: API de Conversões com a Meta, ligada ao portfólio da Ravyt.
O domínio é publicado pelo repositório `Ravyt-Digital/site-ravytdigital` no Cloudflare Worker `site-ravyt-digital`.

| Ação | Evento Meta | Significado |
| --- | --- | --- |
| Página carregada ou navegação interna | PageView | Visualização, após consentimento |
| Diagnóstico visualizado | ViewContent | Visitou /diagnostico |
| Abriu opções de especialistas | SpecialistClick | Interesse em conversar, com posição do botão |
| Escolheu WhatsApp | Contact | Clicou para abrir WhatsApp de Ytala ou Marcio; não confirma mensagem enviada |
| Clicou para acessar diagnóstico | DiagnosticOpen | Interesse em acessar o diagnóstico |
| Iniciou perguntas | DiagnosticStart | Clicou em começar |
| Resultado exibido | DiagnosticComplete | Terminou cinco perguntas; não é lead |
| Abriu formulário no resultado | DiagnosticContactRequest | Manifestou interesse em solicitar contato |
| Serviço aceitou envio do formulário | Lead | Solicitação aceita pelo Web3Forms; não comprova entrega de e-mail |
| Clicou no plano | PlanClick | Navegou para a seção do plano |

As ações têm eventID único e são enviadas exclusivamente ao Pixel configurado. A conexão hospedada existente da Meta é preservada; não instalar uma segunda integração de servidor sem revisar a deduplicação. Os mesmos IDs ficam disponíveis na dataLayer. Eventos internos de /api/analytics continuam limitados à lista autorizada e aos campos documentados pela rota.

Não se envia nome, telefone do visitante, perfil, mensagens ou respostas do diagnóstico nos parâmetros personalizados. O campo `specialist` identifica apenas o destino comercial público (ytala/marcio). Recusa, revogação e sinal de privacidade global continuam impedindo as medições opcionais. Cliques anteriores ao consentimento não são reprocessados.

Use Lead para campanhas voltadas ao formulário concluído; Contact para cliques no WhatsApp. Não some etapas diferentes como se fossem pessoas únicas. Os públicos e relatórios da Meta são agregados; o Pixel não fornece uma lista com a identidade de cada visitante. A integração hospedada depende do recebimento dos eventos de Pixel; ela não transforma um navegador bloqueado em uma fonte independente de eventos confirmados pelo servidor.

Validação: testes de consentimento, mapeamento, IDs, separação de clique/lead e conclusão sem duplicação; testes do site e compilação. A recepção real de cada novo evento, a deduplicação e a correspondência devem ser conferidas no Gerenciador de Eventos após publicação. O teste real de Lead exige um envio válido com hCaptcha; não simular sucesso em produção.
