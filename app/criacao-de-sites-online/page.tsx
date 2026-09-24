import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";
import { whatsappUrl } from "@/lib/contact";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title:"Criação de Sites com Domínio Próprio",
  description:"Criação de site com domínio próprio para empresas e profissionais. Planejamento, textos, design responsivo e estrutura técnica de SEO. Atendimento em todo o Brasil.",
  alternates:{canonical:"/criacao-de-sites-online"},
});
const steps=[
  ["01","Entendimento","Conhecemos seus serviços, público, objetivo e materiais disponíveis."],
  ["02","Estrutura e textos","Organizamos as páginas, a navegação e a copy para apresentar sua oferta com clareza."],
  ["03","Design e construção","Criamos uma experiência responsiva, com contato acessível em celular e computador."],
  ["04","Revisão e publicação","Conferimos conteúdo, links e funcionamento antes de colocar o site no ar."],
];
const faqs=[
  ["O site pode ter meu próprio domínio?","Sim. O projeto pode ser publicado em um domínio próprio. Registro e renovação do domínio, hospedagem e eventuais serviços de terceiros são definidos na proposta."],
  ["A Ravyt atende fora de São Paulo?","Sim. A criação de sites é realizada remotamente para clientes de todo o Brasil."],
  ["O site vai aparecer na primeira página do Google?","Não existe garantia de posição. Estruturamos títulos, descrições, conteúdo, navegação e requisitos técnicos para que as páginas possam ser rastreadas e compreendidas pelos buscadores."],
  ["Vocês fazem manutenção depois da entrega?","A criação e a manutenção de sites podem ser contratadas conforme a necessidade. A proposta define o que está incluído, prazos e custos recorrentes."],
];
export default function Page(){
  const schema={"@context":"https://schema.org","@graph":[{"@type":"Service","@id":`${SITE_URL}/criacao-de-sites-online#service`,name:"Criação de Sites Online",serviceType:"Criação e manutenção de sites",url:`${SITE_URL}/criacao-de-sites-online`,description:"Planejamento, copy, design e construção de websites com domínio próprio para profissionais e empresas.",provider:{"@id":`${SITE_URL}/#organization`},areaServed:{"@type":"Country",name:"Brasil"}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Início",item:SITE_URL},{"@type":"ListItem",position:2,name:"Criação de Sites Online",item:`${SITE_URL}/criacao-de-sites-online`}]}]};
  return <><BlogHeader current="sites"/><main id="conteudo" tabIndex={-1} className="specialist-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <header className="specialist-hero"><div className="shell"><Breadcrumbs structured={false} items={[{name:"Início",href:"/"},{name:"Criação de Sites Online",href:"/criacao-de-sites-online"}]} /><p className="section-kicker">Criação de sites online · Brasil</p><h1>Criação de site com domínio próprio para seu negócio.</h1><p>Planejamos e construímos sites institucionais responsivos para apresentar seus serviços, transmitir confiança e facilitar o contato. Cada página considera seu público e a forma como ele procura sua empresa.</p><a className="button button-light" href={whatsappUrl("Olá! Quero conversar sobre a criação de um site com domínio próprio.")} target="_blank" rel="noopener noreferrer">CONVERSAR SOBRE MEU SITE</a></div></header>
    <section className="specialist-section"><div className="shell two-columns"><div><p className="section-kicker">Da ideia ao endereço online</p><h2>Um site institucional claro, rápido de entender e fácil de usar.</h2><p>Como empresa especializada em criação de sites, a Ravyt organiza a informação antes de construir: o que você oferece, para quem, por que escolher seu trabalho e como entrar em contato.</p><p>A construção de websites inclui páginas adaptadas ao celular, links funcionais e uma base técnica de SEO. O formato e o número de páginas são definidos de acordo com cada projeto. <a href="/quanto-custa-criar-um-site">Veja o que entra no orçamento de criação de um site →</a></p></div><div className="check-list"><p>Planejamento da estrutura e da navegação</p><p>Copy para apresentar serviços e orientar o contato</p><p>Design responsivo para celular e computador</p><p>Configuração para publicação com domínio próprio</p><p>Títulos, descrições e estrutura técnica de SEO</p><p>Revisão de links, conteúdo e funcionamento</p></div></div></section>
    <section className="process-section"><div className="shell"><p className="section-kicker">Como criamos</p><h2>Um processo do briefing à publicação.</h2><div className="process-grid">{steps.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
    <section className="difference-section"><div className="shell two-columns"><div><p className="section-kicker">Depois da entrega</p><h2>Seu site precisa continuar útil.</h2></div><div><p>Informações mudam, serviços evoluem e links precisam seguir funcionando. A criação e manutenção de sites podem fazer parte de um acompanhamento contratado à parte, com escopo definido em proposta.</p><p>Se você também precisa manter sua comunicação ativa nas redes, conheça a <a href="/gestao-de-midias-sociais">gestão de mídias sociais da Ravyt →</a></p><p>Antes de definir as páginas, leia <Link href="/blog/site-institucional-paginas-essenciais">o que seu site institucional precisa explicar →</Link> Se você atua em Psicologia, veja também <Link href="/blog/criacao-de-site-para-psicologos">as informações úteis em um site para psicólogos →</Link></p></div></div></section>
    <section className="faq-section"><div className="shell"><p className="section-kicker">Dúvidas frequentes</p><h2>Antes de criar seu site</h2><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
    <section className="final-specialist-cta"><div className="shell"><h2>Vamos planejar seu site?</h2><p>Conte o que sua empresa faz e que páginas precisa criar. Atendemos em todo o Brasil.</p><a className="button button-light" href={whatsappUrl("Olá! Quero conversar sobre a criação de um site com domínio próprio.")} target="_blank" rel="noopener noreferrer">FALAR PELO WHATSAPP</a></div></section>
  </main><BlogFooter/></>;
}
