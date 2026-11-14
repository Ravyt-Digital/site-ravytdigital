import {articles} from '@/lib/site-articles';

export default function ArticleCard({article}: {article: typeof articles[number]}) {
  return <article className="rd-article-card">
    <p className="rd-article-topic">{article.topic}</p>
    <h3><a href={article.path}>{article.title}</a></h3>
    <p>{article.summary}</p>
  </article>;
}
