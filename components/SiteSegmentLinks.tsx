import {siteSegments} from '@/lib/site-segments';

export default function SiteSegmentLinks() {
  return <section className="rv-section shell rv-seo-section" aria-labelledby="site-segments">
    <h2 id="site-segments">Sites para arquitetura e engenharia</h2>
    <div className="rv-seo-grid rd-segment-links">
      {Object.values(siteSegments).map(segment => <article key={segment.path}>
        <h3><a href={segment.path}>{segment.name}</a></h3>
        <p>{segment.summary}</p>
      </article>)}
    </div>
  </section>;
}
