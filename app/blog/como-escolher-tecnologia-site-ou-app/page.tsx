import SiteGuide from '@/components/SiteGuide';
import {pageMetadata} from '@/lib/seo';
import {hostingArticle, siteOrAppArticle, technologyArticle as path} from '@/lib/site-articles';

const title = 'Como escolher a tecnologia de um site ou aplicativo';
const description = 'Compare atualização de conteúdo, integrações, dispositivos e manutenção para escolher uma tecnologia que atenda seu projeto.';
export const metadata = pageMetadata(path, title + ' | Ravyt Digital', description, 'article');

export default function TechnologyGuide() {
  return <SiteGuide path={path} title={title} description={description} published="2026-11-14">
    <section>
      <h2>Transforme a rotina em critérios de escolha</h2>
      <p>Escreva a tarefa principal e quem a executa. Em um site institucional, um visitante pode precisar ler serviços e enviar uma mensagem. Em um aplicativo, uma equipe pode precisar registrar visitas, anexar fotos e localizar o histórico. Esses dois fluxos exigem ambientes e cuidados diferentes.</p>
      <ul>
        <li><strong>Atualização de conteúdo.</strong> Se a equipe publica artigos ou projetos com frequência, defina quem edita, revisa e publica. Um painel editorial precisa atender essa rotina.</li>
        <li><strong>Integrações.</strong> Liste os sistemas existentes, os dados que circulam entre eles e quem cuida dos acessos. Confirme se o fornecedor oferece a integração necessária.</li>
        <li><strong>Dispositivos.</strong> Verifique se o público usa navegador, celular ou ambos. Câmera, notificações e uso offline dependem do ambiente e devem ser testados.</li>
        <li><strong>Operação.</strong> Pergunte quem atualiza dependências, como os dados são exportados e como a equipe recupera o projeto se um fornecedor mudar.</li>
      </ul>
    </section>
    <section>
      <h2>Peça evidências antes de escolher</h2>
      <p>Compare propostas com o mesmo fluxo de uso. Peça uma demonstração simples, como publicar um artigo ou simular um pedido. Defina os critérios de aceite, os dispositivos de teste e os custos recorrentes. A demonstração ajuda a avaliar o trabalho que a equipe terá depois da entrega.</p>
      <p>Se a dúvida for de formato, compare <a href={siteOrAppArticle}>site e aplicativo pela tarefa do usuário</a>. Para organizar a operação, confira <a href={hostingArticle}>como funcionam domínio, hospedagem e e-mail</a>.</p>
    </section>
  </SiteGuide>;
}
