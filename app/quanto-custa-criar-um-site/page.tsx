import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";
import { whatsappUrl } from "@/lib/contact";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title:"Quanto Custa Criar um Site? Entenda o Orçamento",
  description:"Google + Site + SEO: plano mensal de R$ 457 ou anual de R$ 4.000 com implantação incluída, com site profissional, domínio, hospedagem, atualizações e suporte.",
  alternates:{canonical:"/quanto-custa-criar-um-site"},
});

const factors=[
  ["Estrutura","Uma página única e um site institucional com várias páginas exigem quantidades diferentes de planejamento, textos, design e revisão."],
  ["Conteúdo","Textos, imagens e materiais já disponíveis mudam o trabalho necessário. A proposta deve dizer quem fornece e revisa cada item."],
  ["Funções","Formulários, integrações, catálogo e outras funções precisam ser detalhados antes do orçamento. Uma loja virtual tem escopo próprio."],
  ["Custos recorrentes","Registro e renovação do domínio, hospedagem, ferramentas de terceiros e manutenção devem ser discriminados. O que é mensal ou anual precisa estar claro."],
];

export default function Page(){
  const schema={"@context":"https://schema.org","@type":"WebPage",name:"Quanto custa criar um site?",url:`${SITE_URL}/quanto-custa-criar-um-site`,about:{"@id":`${SITE_URL}/criacao-de-sites-online#service`},publisher:{"@id":`${SITE_URL}/#organization`}};
  return <><BlogHeader current="sites"/><main id="conteudo" tabIndex={-1} className="specialist-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <header className="specialist-hero"><div className="shell"><Breadcrumbs items={[{name:"Início",href:"/"},{name:"Criação de Sites Online",href:"/criacao-de-sites-online"},{name:"Orçamento de criação de sites",href:"/quanto-custa-criar-um-site"}]} /><p className="section-kicker">Orçamento de criação de site</p><h1>Quanto custa criar um site profissional?</h1><p>A oferta Google + Site + SEO tem plano mensal de R$ 457 ou anual de R$ 4.000, com os mesmos serviços e implantação incluída. O site profissional inclui domínio, hospedagem, atualizações e suporte, com escopo detalhado na proposta.</p><a className="button button-light" href={whatsappUrl("Olá! Quero pedir um orçamento para criar um site. Meu negócio é:")} target="_blank" rel="noopener noreferrer">PEDIR ORÇAMENTO DO SITE</a></div></header>
    <section className="specialist-section"><div className="shell two-columns"><div><p className="section-kicker">O que altera o valor</p><h2>O mesmo nome “site” pode descrever projetos bem diferentes.</h2><p>Um site de uma página para apresentar um serviço tem escopo diferente de um site institucional com várias áreas, conteúdos próprios e funções adicionais. Por isso, um preço isolado não diz se duas propostas entregam a mesma coisa.</p><p>O plano mensal custa R$ 457 por mês e pode ser cancelado a qualquer momento. O anual custa R$ 4.000 antecipados, com opção de parcelamento no cartão. Os dois incluem a mesma implantação e manutenção. O planejamento das páginas e as responsabilidades são detalhados na proposta. <Link href="/criacao-de-sites-online">Veja o serviço de criação de sites com domínio próprio →</Link></p></div><div className="check-list">{factors.map(([title,text])=><p key={title}><strong>{title}.</strong> {text}</p>)}</div></div></section>
    <section className="process-section"><div className="shell"><p className="section-kicker">Antes de contratar</p><h2>O que pedir em um orçamento de site.</h2><div className="process-grid"><article><span>01</span><h3>Entregas</h3><p>Número de páginas, textos, design para celular e computador, revisão e publicação.</p></article><article><span>02</span><h3>Domínio e hospedagem</h3><p>Quem registra, quem paga a renovação e quem administra os acessos após a entrega.</p></article><article><span>03</span><h3>Manutenção</h3><p>O que será atualizado, por quanto tempo e quais serviços são cobrados à parte.</p></article><article><span>04</span><h3>Prazo e aprovação</h3><p>Etapas do projeto, materiais necessários do cliente e número de rodadas de revisão.</p></article></div></div></section>
    <section className="faq-section"><div className="shell"><p className="section-kicker">Dúvidas frequentes</p><h2>Entenda a proposta</h2><div className="faq-list"><details><summary>O domínio próprio está incluído no preço?</summary><p>Domínio e hospedagem estão incluídos na mensalidade. A proposta especifica titularidade, acessos e condições do domínio.</p></details><details><summary>O orçamento inclui manutenção?</summary><p>Sim. Criação, atualizações e suporte estão incluídos na oferta mensal Google + Site + SEO. A proposta especifica o escopo das alterações.</p></details><details><summary>Um site mais caro garante a primeira posição no Google?</summary><p>Não. Estrutura técnica e conteúdo podem ajudar os buscadores a entender as páginas, mas ninguém pode garantir uma posição específica.</p></details></div></div></section>
    <section className="final-specialist-cta"><div className="shell"><h2>Google + Site + SEO: escolha seu plano.</h2><p>Diga que serviços oferece, se já tem domínio e quais páginas imagina precisar. A Ravyt atende em todo o Brasil.</p><a className="button button-light" href={whatsappUrl("Olá! Quero pedir um orçamento para criar um site. Meu negócio é:")} target="_blank" rel="noopener noreferrer">SOLICITAR ORÇAMENTO</a></div></section>
  </main><BlogFooter/></>;
}
