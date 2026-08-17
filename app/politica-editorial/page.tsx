import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Política Editorial do Blog Ravyt Digital",
  description: "Conheça os critérios de autoria, pesquisa, fontes, revisão, uso de inteligência artificial e correções adotados pelo blog da Ravyt Digital.",
  alternates: { canonical: "/politica-editorial" },
};

export default function EditorialPolicyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/politica-editorial#page`,
    name: "Política Editorial do Blog Ravyt Digital",
    url: `${SITE_URL}/politica-editorial`,
    dateModified: "2026-08-17",
    inLanguage: "pt-BR",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <BlogHeader current="insights" />
      <main id="conteudo" className="editorial-page">
        <header className="editorial-hero"><div className="shell"><p>Governança editorial</p><h1>Conteúdo útil começa com <em>responsabilidade.</em></h1><span>Esta política explica quem produz, como produzimos e por que publicamos os conteúdos da Ravyt Digital.</span><time dateTime="2026-08-17">Atualizada em 17 de agosto de 2026</time></div></header>
        <article className="editorial-content"><div className="shell">
          <section><span>01</span><h2>Quem produz os conteúdos</h2><p>Os artigos são assinados por Ytala Cabral, Marcio Cabral ou pela Ravyt Digital, conforme a experiência diretamente relacionada ao tema. As páginas de autor apresentam a função, os assuntos de atuação e os conteúdos publicados por cada profissional.</p></section>
          <section><span>02</span><h2>Como pesquisamos e revisamos</h2><p>Antes da redação, definimos a dúvida que o conteúdo precisa resolver, mapeamos entidades, atributos e perguntas relacionadas e verificamos o que já foi publicado. Priorizamos documentação oficial, fontes primárias e informações identificáveis. Dados, exemplos e recomendações são revisados para separar fato, análise e opinião editorial.</p></section>
          <section><span>03</span><h2>Por que publicamos</h2><p>O objetivo principal é ajudar empresários, especialistas e equipes a tomar decisões digitais mais claras. Não publicamos textos apenas para repetir palavras-chave, aumentar volume ou simular autoridade. Cada novo conteúdo deve acrescentar contexto, síntese ou aplicação prática que justifique sua existência.</p></section>
          <section><span>04</span><h2>Uso de inteligência artificial</h2><p>Ferramentas de inteligência artificial podem apoiar pesquisa, organização, revisão e produção. Elas não substituem a responsabilidade humana sobre a exatidão, a clareza e a utilidade do conteúdo. Quando o processo automatizado for relevante para a compreensão ou confiança do leitor, essa participação será informada.</p></section>
          <section><span>05</span><h2>Fontes, links e transparência</h2><p>Quando um artigo depende de fatos verificáveis, as fontes são apresentadas no próprio conteúdo. Preferimos links para documentos originais, páginas institucionais, estudos e registros oficiais. Links externos não representam aprovação integral de tudo o que o site de destino publica.</p></section>
          <section><span>06</span><h2>Pesquisas de mercado e auditorias de busca</h2><p>Levantamentos regionais identificam hipóteses, não garantias. Sempre que possível, conferimos dados em fontes oficiais, registramos o recorte analisado e explicitamos limitações. Resultados de busca variam por data, localização, dispositivo e histórico; por isso, não tratamos uma SERP isolada como participação de mercado nem prometemos posição, prazo ou faturamento.</p></section>
          <section><span>07</span><h2>Atualizações e correções</h2><p>Atualizamos artigos quando há mudança substancial de informação, recurso, norma ou contexto. Correções relevantes podem alterar a data de modificação e serão feitas sem esconder o histórico editorial. Solicitações de revisão podem ser encaminhadas pelo atendimento da Ravyt Digital.</p></section>
          <section><span>08</span><h2>Acessibilidade e experiência</h2><p>Buscamos usar HTML semântico, hierarquia clara, textos alternativos, navegação por teclado e interfaces estáveis. A experiência deve ser compreensível por pessoas, mecanismos de busca e tecnologias assistivas — sem pop-ups que impeçam o acesso ao conteúdo principal.</p></section>
          <div className="editorial-links"><Link href="/blog">Explorar os conteúdos do blog Ravyt Digital</Link><Link href="/autores/ytala-cabral">Conhecer Ytala Cabral</Link><Link href="/autores/marcio-cabral">Conhecer Marcio Cabral</Link></div>
        </div></article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
      <BlogFooter />
      <CookieConsent />
    </>
  );
}
