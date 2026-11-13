import SiteGuide from '@/components/SiteGuide';
import {pageMetadata} from '@/lib/seo';
import {instagramSiteArticle as path, trustSiteArticle} from '@/lib/site-articles';

const title = 'Por que o Instagram não substitui um site próprio?';
const description = 'Use o Instagram para mostrar seu trabalho e um site próprio para organizar serviços, responder dúvidas e facilitar o pedido de orçamento.';
export const metadata = pageMetadata(path, 'Instagram substitui um site próprio? | Ravyt Digital', description, 'article');

export default function InstagramWebsiteArticle() {
  return <SiteGuide path={path} title={title} description={description} published="2026-08-04" revised="2026-11-13">
    <section>
      <h2>O que muda quando alguém quer contratar</h2>
      <p>Imagine que uma pessoa veja um Reel seu, goste do trabalho e envie o perfil a um sócio. Para decidir se vale pedir orçamento, os dois precisam descobrir o que você oferece, quais tipos de projeto atende e como funciona a contratação. No Instagram, essas respostas podem estar espalhadas entre posts, destaques e conversas.</p>
      <p>Um site reúne as informações que pesam nessa decisão. Sua empresa define o endereço, a navegação, a ordem das informações e o caminho até o contato. Isso também dá ao visitante uma página específica para abrir quando ele procura sua marca ou seus serviços no Google.</p>
    </section>
    <section>
      <h2>Como fazer Instagram e site trabalharem juntos</h2>
      <ol>
        <li><strong>Mostre o trabalho no Instagram.</strong> Use Reels e posts para responder uma pergunta comum, apresentar um projeto ou mostrar uma etapa do processo.</li>
        <li><strong>Leve a pessoa à página certa.</strong> Se o post fala de um serviço, aponte para a página daquele serviço. Se responde sobre valores, indique onde o cliente pode comparar escopo e preço.</li>
        <li><strong>Dê um próximo passo claro no site.</strong> Ofereça WhatsApp ou um formulário curto. Diga o que ajuda na primeira mensagem, como o serviço desejado e o prazo estimado.</li>
      </ol>
    </section>
    <section>
      <h2>Quando vale montar um site próprio?</h2>
      <p>Comece pelas perguntas que você repete no Direct. Se várias pessoas pedem portfólio, valores ou detalhes de atendimento, essas respostas merecem um lugar fácil de consultar. Uma página pode ser suficiente para uma oferta simples. Serviços com processos ou públicos diferentes podem precisar de páginas próprias.</p>
      <p>Veja <a href="/site-institucional-paginas-essenciais">quais páginas um site institucional precisa</a> e <a href="/quanto-custa-criar-um-site">quanto custa criar e manter um site</a>. Se você já tem um endereço próprio, confira <a href={trustSiteArticle}>os sete sinais de que o site precisa transmitir mais confiança</a>.</p>
    </section>
  </SiteGuide>;
}
