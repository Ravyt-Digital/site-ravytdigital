import SiteGuide from '@/components/SiteGuide';
import {pageMetadata} from '@/lib/seo';

const path = '/site-institucional-paginas-essenciais';
const title = 'Quais páginas um site institucional precisa?';
const description = 'Defina as páginas do seu site institucional a partir do que seu cliente precisa saber: serviços, experiência, área de atendimento e formas de pedir orçamento.';
export const metadata = pageMetadata(path, 'Páginas de um site institucional | Ravyt Digital', description, 'article');

export default function InstitutionalPagesGuide() {
  return <SiteGuide path={path} title={title} description={description}>
    <section><h2>Comece pelas perguntas do cliente</h2>
      <p>Imagine alguém que recebeu uma indicação e abriu seu site no celular. Essa pessoa precisa descobrir o que sua empresa faz, se atende o caso dela, por que pode confiar no trabalho e como pedir orçamento.</p>
      <p>Uma empresa com uma oferta simples pode responder a essas perguntas em uma página. Serviços com públicos, critérios ou etapas diferentes podem ganhar páginas próprias para explicar a contratação com clareza.</p>
    </section>
    <section><h2>O que colocar em cada página</h2>
      <ul>
        <li><strong>Início.</strong> Diga o que a empresa oferece e para quem. Inclua um caminho curto para serviços e contato.</li>
        <li><strong>Serviços.</strong> Explique o que está incluído, o que o cliente precisa preparar e como funciona a contratação. Se dois serviços têm dúvidas muito diferentes, considere páginas distintas.</li>
        <li><strong>Sobre.</strong> Apresente a equipe, a trajetória e as qualificações que o cliente pode verificar. Inclua a área de atendimento quando ela afeta a contratação.</li>
        <li><strong>Projetos ou portfólio.</strong> Use exemplos autorizados, explique o que foi entregue e identifique demonstrações conceituais. Quando houver dados de resultado, indique o contexto.</li>
        <li><strong>Contato.</strong> Mostre os canais atendidos e informe o que ajuda a fazer um orçamento. Em um formulário, peça apenas os dados necessários para responder.</li>
      </ul>
    </section>
    <section><h2>Um exemplo para uma empresa de serviços</h2>
      <p>Uma empresa de manutenção com dois serviços pode começar com início, uma página para cada serviço, sobre e contato. Se os dois serviços forem contratados da mesma forma e tiverem o mesmo público, uma página de serviços com seções claras pode atender melhor.</p>
      <p>Para preparar o briefing, liste os serviços, as dúvidas que recebe antes do orçamento, as localidades atendidas e os materiais disponíveis. Depois, veja <a href="/quanto-custa-criar-um-site">como o número de páginas afeta o custo de criação</a>.</p>
    </section>
  </SiteGuide>;
}
