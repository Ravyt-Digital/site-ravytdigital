import SiteGuide from '@/components/SiteGuide';
import {pageMetadata} from '@/lib/seo';
import {appPath, websitePath} from '@/lib/services';
import {siteOrAppArticle as path, technologyArticle} from '@/lib/site-articles';

const title = 'Site ou aplicativo para seu escritório?';
const description = 'Compare portfólio, portal de clientes e aplicativo de campo pela tarefa que arquitetos e engenheiros precisam realizar.';
export const metadata = pageMetadata(path, title + ' | Ravyt Digital', description, 'article');

export default function SiteOrAppGuide() {
  return <SiteGuide path={path} title={title} description={description} published="2026-11-14">
    <section>
      <h2>Comece pela tarefa que a pessoa precisa fazer</h2>
      <p>Quem chegou por indicação pode precisar ver obras, comparar serviços ou pedir uma proposta. Um site atende esse percurso. Para aprovar entregas ou registrar vistorias toda semana, vale avaliar um portal ou aplicativo.</p>
      <ul>
        <li><strong>Site.</strong> Bom ponto de partida quando o público precisa encontrar informações e agir sem criar conta. Exemplo: um escritório de arquitetura que apresenta projetos de interiores e recebe pedidos de proposta.</li>
        <li><strong>Aplicação web.</strong> Vale considerar quando há tarefas recorrentes com acesso pelo navegador. Exemplo: um portal em que clientes consultam versões do projeto e aprovam entregas.</li>
        <li><strong>Aplicativo para celular.</strong> Avalie quando a rotina exige recursos do aparelho ou uma experiência de uso frequente. Exemplo: uma equipe externa que registra vistorias no local, inclusive onde a conexão é instável. O uso offline precisa ser previsto e testado.</li>
      </ul>
    </section>
    <section>
      <h2>Separe o essencial da primeira versão</h2>
      <p>Escolha uma tarefa do começo ao fim. Para um portal de acompanhamento, por exemplo, a primeira versão pode permitir ao cliente entrar, consultar a etapa atual e ver a próxima ação. Notificações e outros recursos podem ser avaliados depois de observar o uso.</p>
      <p>Antes de decidir, anote quem usa, com que frequência, em qual dispositivo e quais dados precisa consultar ou enviar. Use o <a href={technologyArticle}>guia de escolha de tecnologia</a> para transformar as respostas em perguntas de orçamento.</p>
    </section>
    <section>
      <h2>Quando as duas soluções fazem sentido</h2>
      <p>Um escritório de engenharia pode usar um <a href={websitePath}>site público</a> para explicar o serviço e um <a href={appPath}>aplicativo</a> para a rotina de quem já contratou. Um botão de acesso no site conecta as duas etapas sem repetir o conteúdo.</p>
      <p>Se estiver considerando uma aplicação web instalável, veja os <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable">requisitos e diferenças de instalação por navegador no MDN</a>.</p>
    </section>
  </SiteGuide>;
}
