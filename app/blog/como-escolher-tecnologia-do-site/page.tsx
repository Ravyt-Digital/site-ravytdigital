import SiteGuide from '@/components/SiteGuide';
import {pageMetadata} from '@/lib/seo';
import {hostingArticle, institutionalPagesArticle, technologyArticle as path} from '@/lib/site-articles';

const title = 'Como escolher a tecnologia do site do escritório';
const description = 'Compare site estático e WordPress pela frequência de atualização, pelas integrações e pela manutenção.';
export const metadata = pageMetadata(path, title + ' | Ravyt Digital', description, 'article');

export default function TechnologyGuide() {
  return <SiteGuide path={path} title={title} description={description} published="2026-11-14">
    <section>
      <h2>Comece pelo que vai mudar no site</h2>
      <p>Liste as páginas e estime com que frequência alguém vai atualizá-las. Um escritório com uma seleção estável de projetos pode começar com um site estático. Se a equipe publica projetos, artigos ou notícias toda semana e quer editar o conteúdo por conta própria, considere um painel editorial em WordPress.</p>
      <ul>
        <li><strong>Portfólio.</strong> Defina se os projetos aparecem em uma galeria ou em páginas próprias. Se várias pessoas participam da publicação, combine quem escreve, revisa e publica.</li>
        <li><strong>Integrações.</strong> Liste as ferramentas de contato, como CRM ou agendamento. Confira a compatibilidade e os custos de cada fornecedor antes de fechar o escopo.</li>
        <li><strong>Manutenção.</strong> Combine quem fará atualizações, cuidará dos acessos e recuperará o site em caso de problemas. Em WordPress, inclua o painel e as extensões nessa conversa.</li>
      </ul>
    </section>
    <section>
      <h2>Compare as propostas usando um projeto real</h2>
      <p>Peça para ver como um visitante encontra uma obra pelo celular, chega aos serviços relacionados e solicita uma proposta. Se sua equipe for atualizar o portfólio, peça também para ver como ela poderá publicar e revisar uma página de projeto.</p>
      <p>Para organizar o escopo, confira <a href={institutionalPagesArticle}>quais páginas o site do escritório precisa</a> e <a href={hostingArticle}>como funcionam domínio, hospedagem e e-mail</a>.</p>
    </section>
  </SiteGuide>;
}
