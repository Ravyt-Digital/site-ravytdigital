import ResponsiveWebp from '@/components/ResponsiveWebp';
import Link from 'next/link';
import {getPost} from '@/app/blog/posts';
import type {BlogPost} from '@/app/blog/posts';
import type {SiteLanguage} from '@/lib/brand-copy';
export default function BlogPostCard({post,lang='pt'}:{post:BlogPost;lang?:SiteLanguage}){
 const prefix=lang==='pt'?'':'/'+lang;
 const original=getPost(post.slug),image=post.images?.[0]??original?.images?.[0];
 const author=post.author??original?.author??'Ytala Cabral';
 const labels={pt:['Por','Publicado em','Tempo de leitura'],en:['By','Published on','Reading time'],fr:['Par','Publié le','Temps de lecture'],es:['Por','Publicado el','Tiempo de lectura']}[lang];
 return <Link className="post-card" href={prefix+'/blog/'+post.slug}>
 {image&&<ResponsiveWebp className="post-card-image" src={image.src} width={image.width} height={image.height} alt={lang==='pt'?image.alt:post.title} loading="lazy"/>}
 <div className="post-card-copy"><p>{post.category}</p><h3>{post.title}</h3><span>{post.excerpt}</span><div className="post-card-meta"><span>{labels[0]} <strong>{author}</strong></span><span>{labels[1]} <time dateTime={post.date}>{post.dateLabel}</time></span><span aria-label={labels[2]}>{post.readingTime}</span></div></div></Link>;
}
