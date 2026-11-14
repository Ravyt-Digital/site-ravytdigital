import SiteGuide from '@/components/SiteGuide';
import {pageMetadata} from '@/lib/seo';
import {hostingArticle as path, websitePricingArticle} from '@/lib/site-articles';

const title = 'Domínio e hospedagem: o que você precisa contratar?';
const description = 'Entenda a diferença entre o endereço do site e o serviço que o mantém no ar. Saiba quais acessos e custos conferir.';
export const metadata = pageMetadata(path, title + ' | Ravyt Digital', description, 'article');

export default function HostingGuide() {
  return <SiteGuide path={path} title={title} description={description} published="2026-11-14">
    <section>
      <h2>Domínio, hospedagem e e-mail têm funções diferentes</h2>
      <ul>
        <li><strong>Domínio.</strong> É o endereço do seu negócio na internet. O DNS indica a que serviços esse endereço deve apontar.</li>
        <li><strong>Hospedagem.</strong> É a infraestrutura que entrega as páginas e, dependendo do projeto, executa funcionalidades ou se conecta a um banco de dados.</li>
        <li><strong>E-mail profissional.</strong> É o serviço que recebe e envia mensagens pelo seu domínio. Ele pode ser contratado separadamente.</li>
      </ul>
      <p>Você pode usar um fornecedor para cada item. Para registrar um endereço .br, consulte as <a href="https://registro.br/dominio/">orientações oficiais do Registro.br</a>.</p>
    </section>
    <section>
      <h2>O que conferir antes de publicar</h2>
      <ol>
        <li>Identifique o titular do domínio e quem controla a conta de registro. Mantenha as informações de recuperação atualizadas.</li>
        <li>Anote as renovações do domínio, da hospedagem, do e-mail e de ferramentas necessárias ao projeto.</li>
        <li>Confirme quem configura a publicação e a conexão HTTPS e quem será responsável por atualizações e restauração de backups quando o projeto exigir.</li>
        <li>Se já usa e-mail no domínio, identifique os registros de e-mail no DNS antes de alterar o apontamento do site. Teste envio e recebimento depois da publicação.</li>
      </ol>
    </section>
    <section>
      <h2>Qual hospedagem faz sentido para seu projeto?</h2>
      <p>Um portfólio com páginas públicas tem necessidades diferentes de uma área de clientes com login, banco de dados e envio de arquivos. Compare o que precisa funcionar, como o projeto será atualizado e quais limites de uso afetam o custo.</p>
      <p>Se estiver comparando propostas, use também o guia sobre <a href={websitePricingArticle}>custos de criação e manutenção de um site</a>.</p>
    </section>
  </SiteGuide>;
}
