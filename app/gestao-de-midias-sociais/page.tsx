import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";
import { whatsappUrl } from "@/lib/contact";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title:"Agência de Gestão de Mídias Sociais",
  description:"Agência de gestão de mídias sociais para empresas e profissionais. Estratégia, criação, publicação e análise de conteúdo. Atendimento em todo o Brasil.",
  alternates:{canonical:"/gestao-de-midias-sociais"},
});
const steps=[
  ["01","Diagnóstico","Entendemos o negócio, o público, os canais atuais e as metas da comunicação."],
  ["02","Planejamento","Definimos posicionamento, linhas editoriais, calendário, formatos e pautas."],
  ["03","Criação e publicação","Produzimos carrosséis, textos, roteiros e edição de vídeos, organizando a publicação."],
  ["04","Análise e ajustes","Acompanhamos o desempenho e revisamos decisões para o ciclo seguinte."],
];
const faqs=[
  ["A Ravyt atende em outras cidades?","Sim. A gestão é realizada de forma remota para clientes de todo o Brasil."],
  ["A gestão inclui só a criação das artes?","Não. O serviço completo inclui diagnóstico, posicionamento, planejamento, produção, publicação, análise e ajustes contínuos."],
  ["Posso contratar apenas a produção de conteúdo?","Sim. A Ravyt também oferece produção sem gestão de publicação e acompanhamento. Converse com a equipe para definir o escopo."],
  ["A Ravyt também cria sites?","Sim. Conheça a página de criação de sites online para entender esse serviço."],
];
export default function Page(){
  const schema={"@context":"https://schema.org","@graph":[{"@type":"Service","@id":`${SITE_URL}/gestao-de-midias-sociais#service`,name:"Gestão de Mídias Sociais",serviceType:"Agência de gestão de mídias sociais",url:`${SITE_URL}/gestao-de-midias-sociais`,description:"Estratégia, criação, publicação e acompanhamento de conteúdo para redes sociais.",provider:{"@id":`${SITE_URL}/#organization`},areaServed:{"@type":"Country",name:"Brasil"}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Início",item:SITE_URL},{"@type":"ListItem",position:2,name:"Gestão de Mídias Sociais",item:`${SITE_URL}/gestao-de-midias-sociais`}]}]};
  return <><BlogHeader current="social"/><main id="conteudo" tabIndex={-1} className="specialist-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <header className="specialist-hero"><div className="shell"><Breadcrumbs structured={false} items={[{name:"Início",href:"/"},{name:"Gestão de Mídias Sociais",href:"/gestao-de-midias-sociais"}]} /><p className="section-kicker">Gestão de mídias sociais · Brasil</p><h1>Gestão de mídias sociais para empresas e profissionais.</h1><p>A Ravyt organiza o gerenciamento das redes sociais: estratégia, conteúdo, publicação e análise para sua marca comunicar o que faz com clareza. Atendimento remoto em todo o Brasil.</p><a className="button button-light" href={whatsappUrl("Olá! Quero conversar sobre gestão de mídias sociais com a Ravyt.")} target="_blank" rel="noopener noreferrer">CONVERSAR SOBRE GESTÃO</a></div></header>
    <section className="specialist-section"><div className="shell two-columns"><div><p className="section-kicker">O serviço</p><h2>O que está incluído na gestão de redes sociais?</h2><p>Começamos pelo posicionamento: o que seu público precisa entender, que dúvidas traz e como sua marca pode responder com clareza. A partir daí, organizamos a produção e a gestão dos canais.</p><p>O trabalho pode incluir Instagram e outros canais sociais definidos no diagnóstico. O escopo de cada contrato é combinado antes de começar. <Link href="/quanto-custa-gestao-de-midias-sociais">Entenda como funciona o orçamento de gestão de mídias sociais →</Link></p></div><div className="check-list"><p>Diagnóstico de perfil, público e posicionamento</p><p>Linhas editoriais, calendário e pesquisa de pautas</p><p>Carrosséis, posts, roteiros de Reels, legendas e chamadas para ação</p><p>Design das peças e edição dos vídeos</p><p>Organização e publicação do conteúdo</p><p>Análise de desempenho e ajustes contínuos</p></div></div></section>
    <section className="process-section"><div className="shell"><p className="section-kicker">Como funciona</p><h2>Um processo claro para cada etapa.</h2><div className="process-grid">{steps.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
    <section className="ethics-section"><div className="shell two-columns"><div><p className="section-kicker">Especialidade</p><h2>Experiência com comunicação para psicólogos parentais.</h2></div><div><p>Ytala Cabral também desenvolve estratégias de conteúdo para profissionais da Psicologia Parental, com atenção à linguagem e à responsabilidade técnica desse campo.</p><p><Link href="/social-media-para-psicologos-parentais">Conheça a abordagem para Psicologia Parental →</Link></p><p>Precisa de um endereço próprio para apresentar seus serviços? <Link href="/criacao-de-sites-online">Veja como funciona a criação de sites →</Link></p><p>Comparando propostas? <Link href="/blog/gestao-de-redes-sociais-ou-producao-de-conteudo">Entenda a diferença entre gestão de redes sociais e produção de conteúdo →</Link></p></div></div></section>
    <section className="faq-section"><div className="shell"><p className="section-kicker">Dúvidas frequentes</p><h2>Antes de começar</h2><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
    <section className="final-specialist-cta"><div className="shell"><h2>Vamos organizar a comunicação da sua marca?</h2><p>Conte como suas redes funcionam hoje. A Ravyt atende em todo o Brasil.</p><a className="button button-light" href={whatsappUrl("Olá! Quero conversar sobre gestão de mídias sociais com a Ravyt.")} target="_blank" rel="noopener noreferrer">FALAR PELO WHATSAPP</a></div></section>
  </main><BlogFooter/></>;
}
