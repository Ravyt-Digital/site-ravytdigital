import HomeNavigation from '@/components/HomeNavigation';
import SiteFooter from '@/components/SiteFooter';
import StructuredData from '@/components/StructuredData';
import ArticleCard from '@/components/ArticleCard';
import {articles, blogPath, topics, topicId} from '@/lib/site-articles';
import {breadcrumb, pageMetadata, webpage} from '@/lib/seo';
import {SITE_URL} from '@/lib/site';

const title = 'Sites e Tecnologia para Arquitetura e Engenharia | Blog Ravyt';
const description = 'Guias para arquitetos e engenheiros sobre portfólios online, sites institucionais, domínios e hospedagem.';
export const metadata = pageMetadata(blogPath, title, description);

export default function Blog() {
  return <>
    <HomeNavigation />
    <main id="conteudo" className="rv-home">
      <div className="shell"><nav aria-label="Caminho da página"><ol className="rv-breadcrumb">
        <li><a href="/">Início</a></li><li aria-current="page">Blog</li>
      </ol></nav></div>
      <header className="rv-section shell rd-blog-header">
        <h1>Guias para <em>arquitetura e engenharia</em></h1>
        <p>Planeje o site do seu escritório, organize o portfólio e entenda o que você precisa para publicar.</p>
        <nav className="rd-blog-topics" aria-label="Assuntos do blog">
          {topics.map((topic, index) => <a key={topic} href={'#' + topicId(index)}>{topic}</a>)}
        </nav>
      </header>
      {topics.map((topic, index) => <section key={topic} className="rv-section shell rv-seo-section rd-blog-section" aria-labelledby={topicId(index)}>
        <h2 id={topicId(index)}>{topic}</h2>
        <div className="rv-seo-grid">
          {articles.filter(article => article.topic === topic).map(article => <ArticleCard key={article.path} article={article} />)}
        </div>
      </section>)}
    </main>
    <SiteFooter />
    <StructuredData data={{'@context':'https://schema.org','@graph':[
      {...webpage(blogPath, title, description),'@type':'CollectionPage',hasPart:articles.map(article=>({'@id':SITE_URL+article.path+'#article'}))},
      breadcrumb(blogPath, 'Blog'),
    ]}} />
  </>;
}
