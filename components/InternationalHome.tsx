import {PriceText} from '@/components/i18n/Regional';
import * as ENChrome from "@/locales/en/components/BlogChrome";
import * as ENCommercial from "@/locales/en/components/Commercial";
import {projects as enProjects} from "@/locales/en/lib/commercial";
import * as FRChrome from "@/locales/fr/components/BlogChrome";
import * as FRCommercial from "@/locales/fr/components/Commercial";
import {projects as frProjects} from "@/locales/fr/lib/commercial";
import * as ESChrome from "@/locales/es/components/BlogChrome";
import * as ESCommercial from "@/locales/es/components/Commercial";
import {projects as esProjects} from "@/locales/es/lib/commercial";
import Link from 'next/link';
import {brandCopy} from '@/lib/brand-copy';
import {homeParity} from '@/lib/home-parity';
import {homeCopy} from '@/lib/home-copy';
import {BrandCTA,BrandFinal} from '@/components/BrandContent';
import {PlanOffer,CompactPrice} from '@/components/i18n/PlanOffer';
import PortfolioPreview from '@/components/PortfolioPreview';
export default function InternationalHome({lang}:{lang:'en'|'fr'|'es'}){
 const c=brandCopy[lang],h=homeCopy[lang],p=homeParity[lang],prefix='/'+lang;
 const {BlogHeader,BlogFooter}={en:ENChrome,fr:FRChrome,es:ESChrome}[lang];
 const {Team,FAQ}={en:ENCommercial,fr:FRCommercial,es:ESCommercial}[lang];
 const projects={en:enProjects,fr:frProjects,es:esProjects}[lang];
 return <><BlogHeader/><main id="conteudo" tabIndex={-1} className="rv rv-home-focused">
 <section className="rv-focus-hero"><div className="shell rv-focus-hero-grid"><div><p className="rv-label">{p.heroLabel}</p><h1>{h.hero[0]}<br/><em>{h.hero[1]}</em></h1><p className="rv-lead"><PriceText>{c.intro}</PriceText></p><p className="rv-focus-price"><CompactPrice/></p><div className="rv-actions"><BrandCTA lang={lang}/><a href="#investimento">{c.offer} ↓</a></div><p className="rv-focus-note">{p.heroNote}</p></div><figure className="rv-focus-preview"><picture><source media="(max-width:700px)" srcSet="/mockups/site-devices-clean-400.webp"/><img src="/mockups/site-devices-clean-800.webp" srcSet="/mockups/site-devices-clean-800.webp 800w, /mockups/site-devices-clean.webp 1100w" sizes="(max-width:900px) 40vw, 520px" width="1100" height="733" alt={h.preview} fetchPriority="high"/></picture><figcaption>{h.preview}<span>{h.fiction}</span></figcaption></figure></div></section>
 <section className="rv-section" id="portfolio"><div className="shell"><div className="rv-heading"><div><p className="rv-label">{h.portfolio}</p><h2>{h.portfolioTitle}</h2><p className="rv-intro">{h.portfolioIntro}</p></div></div><div className="rv-cases">{projects.map(p=><article key={p.slug}><PortfolioPreview slug={p.slug} name={p.name} lang={lang}/><p className="rv-label">{p.type}</p><h3>{p.name}</h3><p>{p.text}</p></article>)}</div></div></section>
 <section className="rv-section rv-dark rv-focus-team" id="sobre"><div className="shell"><p className="rv-label">{p.teamLabel}</p><h2>{h.teamTitle}</h2><Team/><p className="rv-intro">{c.team}</p><blockquote className="rv-testimonial"><p>“{p.testimonial}”</p><footer>{p.attribution}</footer></blockquote><Link className="rv-text-link" href={prefix+'/sobre'}>{p.aboutLink}</Link></div></section>
 <section className="rv-section rv-offer" id="investimento"><div className="shell rv-split"><div><p className="rv-label">{c.offer}</p><h2>{p.offerTitle}</h2><p className="rv-intro">{p.offerIntro}</p><div className="rv-scope-summary">{p.scope.map(([title,text])=><div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div><p className="rv-focus-online">{c.online}</p><figure className="rv-plan-nfc"><img src="/mockups/cartao-nfc-clean.webp" width="950" height="633" loading="lazy" alt={h.nfc}/><figcaption><strong>{h.nfc}</strong><p>{h.nfcText}</p><small>{h.fiction}</small></figcaption></figure></div><PlanOffer/></div></section>
 <section className="rv-section" id="como-funciona"><div className="shell"><h2>{h.processTitle}</h2><ol className="rv-process-grid">{h.steps.map(([title,text],i)=><li key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol><div className="rv-service-links"><Link href={prefix+'/sites'}>{p.siteLink}</Link><Link href={prefix+'/google-meu-negocio'}>{p.googleLink}</Link><Link href={prefix+'/seo'}>SEO →</Link><Link href={prefix+'/blog'}>Blog →</Link></div></div></section>
 <section className="rv-section" id="duvidas"><div className="shell rv-split"><div><h2>{h.faq}</h2><p className="rv-intro">{p.checklistIntro} <Link className="rv-inline-link" href={prefix+'/recursos/checklist-presenca-google'}>{p.checklistLink}</Link></p></div><FAQ/></div></section><BrandFinal lang={lang}/></main><BlogFooter/></>;
}
