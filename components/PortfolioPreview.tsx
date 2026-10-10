export default function PortfolioPreview({ slug, name, lang='pt' }: { slug: string; name: string; lang?: 'pt'|'en'|'fr'|'es' }) {
  return <div className="rv-project-image">
    <picture><source media="(max-width:700px)" srcSet={`/projects/portfolio/${slug}-400.webp`}/><img src={`/projects/portfolio/${slug}.webp`} srcSet={`/projects/portfolio/${slug}-400.webp 400w, /projects/portfolio/${slug}.webp 720w`} sizes="(max-width:700px) calc(100vw - 48px), (max-width:1230px) calc((100vw - 76px) / 2), 576px" width="720" height="494" loading="lazy" decoding="async" alt={`${{pt:'Prévia do site',en:'Website preview:',fr:'Aperçu du site',es:'Vista previa del sitio'}[lang]} ${name}`}/></picture>
  </div>;
}
