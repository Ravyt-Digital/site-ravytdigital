import SiteGuide from '@/components/SiteGuide';
import {pageMetadata} from '@/lib/seo';
import {instagramSiteArticle, portfolioPlanningArticle, trustSiteArticle as path} from '@/lib/site-articles';

const title = 'Um site bonito não basta: 7 sinais de que ele não gera confiança';
const description = 'Revise sete pontos que podem travar a decisão do cliente no seu site, da primeira tela ao pedido de orçamento.';
export const metadata = pageMetadata(path, 'Site bonito não basta: 7 sinais | Ravyt Digital', description, 'article');

export default function WebsiteTrustArticle() {
  return <SiteGuide path={path} title={title} description={description} published="2026-08-01" revised="2026-11-13">
    <section>
      <h2>Sete sinais para conferir no seu site</h2>
      <ol>
        <li><strong>A primeira tela deixa o serviço em aberto.</strong> Troque a frase genérica por uma descrição do que você faz, para quem e qual ação a pessoa pode tomar.</li>
        <li><strong>As páginas deixam as dúvidas para o WhatsApp.</strong> Explique o que está incluído, como funciona e o que o cliente precisa ter em mãos antes de pedir orçamento.</li>
        <li><strong>O portfólio mostra imagens sem contexto.</strong> Diga o que cada projeto precisava resolver e o que foi entregue. Identifique demonstrações e use trabalhos autorizados.</li>
        <li><strong>O contato exige passos demais.</strong> Teste o botão de WhatsApp, confira o destinatário e reduza o formulário às informações necessárias para responder.</li>
        <li><strong>O menu muda de lógica entre páginas.</strong> Mantenha nomes claros e links consistentes. No celular, teste se você consegue voltar aos serviços com facilidade.</li>
        <li><strong>O site demora a ficar utilizável no celular.</strong> Abra a página usando dados móveis. Confira quando o texto e o botão principal aparecem. Imagens pesadas e efeitos que atrasam a leitura são bons pontos de partida para investigar.</li>
        <li><strong>Os detalhes contradizem a oferta.</strong> Revise preços, horários, telefone e área de atendimento em todas as páginas. Uma condição antiga no rodapé pode confundir quem estava pronto para conversar.</li>
      </ol>
    </section>
    <section>
      <h2>O teste de uma indicação</h2>
      <p>Peça a alguém que não conhece seu negócio para abrir o site no celular. Pergunte o que a empresa faz, onde a pessoa encontra um exemplo e como pediria orçamento. Observe em qual página ela hesita. Comece pelo ajuste que resolve essa dúvida.</p>
      <p>Se faltar informação para decidir, consulte o guia de <a href="/site-institucional-paginas-essenciais">páginas essenciais de um site institucional</a>. Se as visitas vêm de redes sociais, veja <a href={instagramSiteArticle}>como integrar o Instagram ao site próprio</a>. Se você trabalha com projetos ou obras, use os roteiros para <a href={portfolioPlanningArticle}>montar um portfólio de arquitetura ou engenharia</a>.</p>
    </section>
  </SiteGuide>;
}
