import SiteGuide from '@/components/SiteGuide';
import {pageMetadata} from '@/lib/seo';
import {portfolioPlanningArticle as path} from '@/lib/site-articles';
import {siteSegments} from '@/lib/site-segments';

const title = 'Como montar um portfólio de arquitetura ou engenharia';
const description = 'Escolha quais projetos publicar, organize fotos e dados técnicos e use dois roteiros para escrever as páginas do seu portfólio.';
export const metadata = pageMetadata(path, title + ' | Ravyt Digital', description, 'article');

export default function PortfolioPlanningGuide() {
  return <SiteGuide path={path} title={title} description={description} published="2026-11-13">
    <section>
      <h2>Escolha os trabalhos pelo tipo de cliente que quer atrair</h2>
      <p>Comece com três a seis trabalhos que representem os serviços que você quer vender. Dê preferência aos projetos em que consegue explicar o pedido, a contribuição da equipe e o que foi entregue. Se a maioria dos seus pedidos vier por indicação, use as perguntas que os indicados fazem para decidir o que colocar em destaque.</p>
      <p>Na lista de projetos, nomeie cada trabalho pela tipologia e pelo serviço. “Interiores para apartamento compacto” ajuda quem procura esse tipo de projeto a escolher o que abrir.</p>
    </section>
    <section>
      <h2>Roteiro para arquitetura e interiores</h2>
      <ol>
        <li><strong>Identifique o projeto.</strong> Informe a tipologia, os serviços prestados e o estágio. Indique cidade ou região quando a divulgação estiver autorizada.</li>
        <li><strong>Resuma o pedido.</strong> Em uma frase, descreva a necessidade do cliente e uma restrição que influenciou o desenho.</li>
        <li><strong>Explique as escolhas.</strong> Mostre como layout, materiais ou iluminação responderam ao pedido. Use uma legenda para ligar cada imagem à decisão que ela ilustra.</li>
        <li><strong>Revise as imagens.</strong> Escolha uma abertura que funcione no celular, confira créditos e diferencie fotografias, renderizações e estudos.</li>
      </ol>
      <p><strong>Exemplo ilustrativo.</strong> Um casal precisava receber visitas e manter espaço de circulação em uma sala compacta. A proposta integrou a mesa de jantar à bancada e concentrou o armazenamento em uma parede. O projeto está em desenvolvimento e as imagens são renderizações.</p>
      <p>Veja como essa estrutura entra em um <a href={siteSegments.arquitetura.path}>site para arquitetos e escritórios de interiores</a>.</p>
    </section>
    <section>
      <h2>Roteiro para engenharia e construção</h2>
      <ol>
        <li><strong>Identifique a obra ou o serviço.</strong> Informe o tipo de edificação, a fase de trabalho e o que motivou a contratação.</li>
        <li><strong>Delimite o escopo.</strong> Descreva o serviço assumido e a responsabilidade da equipe. Identifique parceiros e responsáveis apenas quando isso estiver validado e autorizado.</li>
        <li><strong>Descreva a entrega.</strong> Liste os documentos, etapas ou serviços efetivamente entregues. Inclua medidas, prazos ou resultados somente se houver registro e permissão para divulgação.</li>
        <li><strong>Selecione a evidência.</strong> Use fotos, desenhos ou esquemas autorizados e explique o que mostram. Confira se as imagens expõem endereços, assinaturas ou informações técnicas sensíveis.</li>
      </ol>
      <p><strong>Exemplo ilustrativo.</strong> A equipe foi contratada para inspecionar infiltrações em uma edificação comercial. O escopo incluiu vistoria, registro fotográfico e relatório com recomendações de intervenção. A execução das intervenções ficou a cargo de outro fornecedor.</p>
      <p>Veja como organizar essas informações em um <a href={siteSegments.engenharia.path}>site para empresas de engenharia e construtoras</a>.</p>
    </section>
    <section>
      <h2>Revise cada página antes de publicar</h2>
      <ul>
        <li>Confira autorização, créditos, informações contratuais e documentos visíveis na tela.</li>
        <li>Abra as páginas no celular e confirme que o título, o escopo e o próximo passo ficam claros antes de percorrer toda a galeria.</li>
        <li>Inclua um link para o serviço correspondente e teste o caminho até o pedido de orçamento.</li>
      </ul>
    </section>
  </SiteGuide>;
}
