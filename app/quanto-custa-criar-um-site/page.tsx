import SiteGuide from '@/components/SiteGuide';
import {pageMetadata} from '@/lib/seo';
import {hostingArticle, institutionalPagesArticle, websitePricingArticle as path} from '@/lib/site-articles';

const title = 'Quanto custa criar um site profissional?';
const description = 'Entenda como páginas, conteúdo, funcionalidades, hospedagem e manutenção influenciam o orçamento de um site profissional.';
export const metadata = pageMetadata(path, 'Quanto custa criar um site? | Ravyt Digital', description, 'article');

export default function WebsitePricingPage() {
  return <SiteGuide path={path} title={title} description={description} revised="2026-11-14">
    <section><h2>O que muda o custo da criação?</h2>
      <p>Um site para divulgar um serviço pode precisar de uma página com exemplos e contato. Um site com vários serviços, portfólio organizado e publicação de artigos envolve mais decisões de conteúdo, navegação e manutenção. A Ravyt monta o orçamento conforme o escopo do projeto.</p>
      <ul>
        <li><strong>Páginas e materiais.</strong> Liste o que já existe e quem vai produzir textos, fotos ou vídeos.</li>
        <li><strong>Funcionalidades.</strong> Blog, área restrita, formulários especiais e integrações precisam entrar na proposta com critérios de teste.</li>
        <li><strong>Revisão e entrega.</strong> Confirme quem aprova as etapas, quantas revisões estão previstas e o que a equipe receberá no final.</li>
      </ul>
    </section>
    <section><h2>Quais custos continuam depois de publicar?</h2>
      <p>Confira a renovação de domínio, hospedagem, licenças, ferramentas de terceiros e manutenção. Peça que a proposta indique o responsável por cada pagamento e o que está incluído na publicação. Saiba mais no <a href={hostingArticle}>guia de domínio e hospedagem</a>.</p>
    </section>
    <section><h2>Como comparar duas propostas de site?</h2>
      <p>Peça a mesma lista de páginas e funcionalidades. Compare quem escreve os textos, se o site terá configuração inicial para buscadores, quais dispositivos serão testados e quem fica com o controle do domínio, da hospedagem e dos acessos.</p>
      <p>Para preparar a lista, veja <a href={institutionalPagesArticle}>quais páginas um site institucional precisa</a>.</p>
    </section>
  </SiteGuide>;
}
