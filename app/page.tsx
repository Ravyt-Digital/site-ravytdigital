import Image from "next/image";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";
import { whatsappUrl } from "@/lib/contact";
import { SITE_URL } from "@/lib/site";

const pillars = [
  ["Posicionamento", "Transformamos conhecimento técnico em uma comunicação clara, humana e reconhecível para mães, pais e cuidadores."],
  ["Conteúdo estratégico", "Planejamos pautas e formatos que educam, geram confiança e aproximam o público do trabalho do psicólogo parental."],
  ["Gestão de presença", "Organizamos a rotina editorial e a presença nas redes para que o perfil tenha coerência, constância e intenção."],
];

export default function Home() {
  const schema = {"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":`${SITE_URL}/#organization`,name:"Ravyt Digital",url:SITE_URL,email:"ola@ravytdigital.com",description:"Agência de Social Media especializada exclusivamente em Psicologia Parental.",founder:{"@id":`${SITE_URL}/autores/ytala-cabral#person`},areaServed:{"@type":"Country",name:"Brasil"}},{"@type":"WebSite","@id":`${SITE_URL}/#website`,url:SITE_URL,name:"Ravyt Digital",inLanguage:"pt-BR",publisher:{"@id":`${SITE_URL}/#organization`}},{"@type":"Service",name:"Social Media para Psicólogos Parentais",provider:{"@id":`${SITE_URL}/#organization`},areaServed:{"@type":"Country",name:"Brasil"}}]};
  return <>
    <BlogHeader />
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
      <section className="specialist-home-hero"><div className="shell hero-specialist-grid"><div className="hero-specialist-copy"><p className="eyebrow">Social Media para Psicólogos Parentais</p><h1>Sua presença digital precisa comunicar o cuidado e a profundidade do seu trabalho.</h1><p className="hero-lead">A Ravyt Digital planeja e desenvolve conteúdos para psicólogos parentais que desejam orientar famílias, fortalecer sua autoridade e construir uma presença profissional nas redes sociais.</p><div className="hero-actions"><a className="button button-light" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">CONVERSAR COM YTALA PELO WHATSAPP</a><a className="button button-ghost" href="#servico">Conhecer o trabalho</a></div></div></div></section>
      <section className="home-services" id="servico"><div className="shell"><p className="section-kicker">Um único serviço, uma especialização clara</p><h2>Social Media pensado exclusivamente para Psicólogos Parentais.</h2><div className="service-duo"><article><span>01</span><h3>Estratégia de conteúdo</h3><p>Definição de posicionamento, linhas editoriais, pautas e formatos alinhados ao trabalho do profissional e às dúvidas reais das famílias.</p></article><article><span>02</span><h3>Produção e gestão</h3><p>Planejamento, copy, direção criativa e organização da rotina de publicações para construir uma comunicação consistente.</p></article></div><p><a className="button button-dark" href="/social-media-para-psicologos-parentais">CONHECER O SERVIÇO</a></p></div></section>
      <section className="difference-section"><div className="shell two-columns"><div><p className="section-kicker">Por que especialização importa</p><h2>Psicologia Parental não pode ser comunicada como um nicho genérico.</h2><p>Esse trabalho envolve vínculos, desenvolvimento, culpa, limites e relações familiares. O conteúdo precisa acolher sem infantilizar, orientar sem diagnosticar e gerar confiança sem explorar vulnerabilidades.</p></div><div className="check-list">{pillars.map(([title,text])=><p key={title}><strong>{title}.</strong> {text}</p>)}</div></div></section>
      <section className="about-specialist" id="sobre"><div className="shell two-columns"><div className="team-photo-ytala"><Image src="/team/ytala-cabral.webp" alt="Ytala Cabral, especialista em Social Media para Psicólogos Parentais" width={720} height={900} unoptimized /></div><div><p className="section-kicker">A especialista</p><h2>Ytala Cabral</h2><p>Ytala é a única especialista à frente da Ravyt Digital. Atua como Social Media da psicóloga parental Nanda Perim, fundadora da PSIMAMA, experiência que aprofundou sua compreensão sobre a responsabilidade, a linguagem e a estratégia necessárias para comunicar Psicologia Parental.</p><p>Na Ravyt, ela une planejamento, escrita e direção de conteúdo para ajudar psicólogos parentais de todo o Brasil a transformar conhecimento em uma presença digital clara, ética e humana.</p><a href="/autores/ytala-cabral">Conhecer a trajetória de Ytala →</a></div></div></section>
      <section className="final-specialist-cta"><div className="shell"><h2>Seu conteúdo pode orientar famílias antes mesmo do primeiro atendimento.</h2><p>Converse com Ytala sobre o momento da sua presença digital e descubra como a Ravyt pode estruturar sua comunicação.</p><div><a className="button button-light" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">CONVERSAR PELO WHATSAPP</a><a className="button button-ghost" href="mailto:ola@ravytdigital.com">ENVIAR UM E-MAIL</a></div></div></section>
    </main>
    <BlogFooter />
  </>;
}
