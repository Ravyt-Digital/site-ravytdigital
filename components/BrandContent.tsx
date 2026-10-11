import Link from 'next/link';
import {brandCopy,type SiteLanguage} from '@/lib/brand-copy';
import {localizedWhatsAppUrl} from '@/lib/contact';
import {PlanOffer} from '@/components/i18n/PlanOffer';
export function BrandCTA({lang='pt'}:{lang?:SiteLanguage}){return <Link className="rv-button" href={localizedWhatsAppUrl(lang)} data-track="whatsapp_click">{brandCopy[lang].cta}<span aria-hidden="true">↗</span></Link>;}
export function BrandOffer({lang='pt'}:{lang?:SiteLanguage}){const c=brandCopy[lang];return <section className="rv-section rv-offer"><div className="shell rv-split"><div><p className="rv-label">{c.offer}</p><h2>{c.offerTitle}</h2><p className="rv-intro">{c.scope}</p><p className="rv-focus-online">{c.online}</p></div><PlanOffer/></div></section>;}
export function BrandFinal({lang='pt'}:{lang?:SiteLanguage}){const c=brandCopy[lang];return <section className="rv-final"><div className="shell"><p className="rv-label">Ravyt Digital</p><h2>{c.finalTitle}</h2><p>{c.finalText}</p><BrandCTA lang={lang}/></div></section>;}
