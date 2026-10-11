import Link from 'next/link';
import Breadcrumbs from '@/locales/en/components/Breadcrumbs';
import { BlogHeader, BlogFooter } from '@/locales/en/components/BlogChrome';
import { PlanOffer } from '@/components/i18n/PlanOffer';
import { FAQ } from '@/locales/en/components/Commercial';
import { whatsappUrl } from '@/locales/en/lib/contact';
import { projects } from '@/locales/en/lib/commercial';
import { niches } from '@/locales/en/lib/segment-niches';
import segmentStyles from '@/components/segment-landing.css?inline';

const segments = {
 arquitetura: {
  title: "An architecture website that presents your projects clearly.",
  accent: "Architecture", hero: 'nina',
  alt: "Screenshot of the Nina Valença demo website, featuring a contemporary home and architecture portfolio",
  query: "residential architect in Teresina",
  services: ["Residential architecture", "Interior design", "Commercial projects"],
  portfolio: ['nina'], cta: "I want a website for my practice",
  sections: ["Projects with context", "Services and project stages", "Service area", "Contact for a proposal"],
  comparison: "Project photos attract attention. Bringing together project types, your process and service area helps visitors understand whether your practice meets their needs.",
  result: "Residential architecture and interiors",
  description: "Explore the specialties, browse organized projects and learn how to request a proposal.",
 },
 engenharia: {
  title: "An engineering website that showcases your technical expertise.",
  accent: "Engineering", hero: 'moreira',
  alt: "Screenshot of the Vértice Norte Engenharia demo website, featuring a residential building project and technical services",
  query: "civil engineer in Teresina",
  services: ["Technical projects", "Construction supervision", "Consulting"],
  portfolio: ['moreira'], cta: "I want to showcase my projects",
  sections: ["Technical specialties", "Projects and expertise", "Team and process", "Proposal request"],
  comparison: "Clients need to understand the projects you take on, your technical expertise and how to request a proposal. This information can be scattered across posts and messages.",
  result: "Civil engineering and technical projects",
  description: "Understand the specialties, explore the technical expertise and find out how to request a proposal.",
 },
 moveis: {
  title: "A custom furniture website that brings every space to life.",
  accent: "Custom furniture", hero: 'lumea',
  alt: "Screenshot of the Lumea Planejados demo website, featuring a personalized living room and custom furniture",
  query: "custom furniture in Teresina",
  services: ["Custom kitchens", "Living rooms and bedrooms", "Made-to-measure furniture"],
  portfolio: ['lumea', 'mirauna'], cta: "I want a website for my custom furniture",
  sections: ["Spaces organized by room", "Materials and finishes", "Service stages", "Quote request"],
  comparison: "People looking for custom furniture compare spaces, materials and finishes. An organized showcase makes it easier to recognize your style and prepare a quote request.",
  result: "Custom furniture and personalized spaces",
  description: "Explore the spaces, discover the solutions and learn how to discuss your project.",
 },
} as const;
const urls: Record<string,string> = {
 nina: 'https://nina-valenca-arquitetura-demo.ravytdigital.chatgpt.site',
 moreira: 'https://moreira-filho-engenharia-demo.ravytdigital.chatgpt.site',
 lumea: 'https://lumea-planejados.ravytdigital.chatgpt.site',
 mirauna: 'https://mirauna-mobiliario-demo.ravytdigital.chatgpt.site',
};
function ProjectImage({slug,alt,priority=false}:{slug:string;alt:string;priority?:boolean}) {
 return <img src={`/projects/portfolio/${slug}.webp`} srcSet={`/projects/portfolio/${slug}-400.webp 400w, /projects/portfolio/${slug}.webp 720w`} sizes="(max-width:800px) calc(100vw - 40px), (max-width:1200px) 45vw, 560px" alt={alt} width={720} height={494} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':undefined} decoding="async"/>;
}
export default function SegmentedLanding({segment}:{segment:keyof typeof segments}) {
 const s=segments[segment];const niche=niches[segment];
 const selected=projects.filter(p=>(s.portfolio as readonly string[]).includes(p.slug));
 const hero=selected.find(p=>p.slug===s.hero)!;
 const contact=whatsappUrl(`Hello! I would like to discuss a website for ${s.accent.toLowerCase()} and Ravyt Digital’s annual plan.`);
 const CTA=({children}:{children?:React.ReactNode})=><a className="rv-button" href={contact} data-track="whatsapp_click">{children??s.cta}<span aria-hidden="true">↗</span></a>;
 return <><style dangerouslySetInnerHTML={{__html:segmentStyles}}/><BlogHeader/><main className="rv rv-segment" id="conteudo" tabIndex={-1}>
  <section className="rv-page-hero"><div className="shell segment-hero">
   <div><p className="rv-label">Websites for {s.accent.toLowerCase()}</p><h1>{s.title}</h1><p className="rv-lead">{niche.intro}</p><div className="rv-actions"><CTA/><a className="segment-plan-link" href="#investimento">Explore the plan ↓</a></div><p className="segment-hero-note">Website + SEO + Google presence when eligible. Annual plan: R$ 597 (Brazilian reais).</p></div>
   <figure className="segment-showcase"><div className="segment-browser"><span aria-hidden="true">● ● ●</span><span>Website preview · {s.accent}</span></div><ProjectImage slug={s.hero} alt={s.alt} priority/><figcaption>{hero.name}<span>Demo project · fictional brand and projects</span></figcaption></figure>
  </div></section>
  <div className="shell"><Breadcrumbs items={[{name:"Home",href:'/en'},{name:"Website creation",href:'/en/sites'},{name:`Websites for ${s.accent.toLowerCase()}`,href:segment==='arquitetura'?'/en/sites-para-escritorios-de-arquitetura':segment==='engenharia'?'/en/sites-para-empresas-de-engenharia':'/en/sites-para-moveis-planejados'}]}/></div>
  <section className="rv-section"><div className="shell"><p className="rv-label">Presentation is part of the decision</p><h2>{niche.challenge}</h2><p className="rv-intro">{s.comparison}</p>
   <div className="segment-comparison">
    <article className="segment-scattered"><p className="rv-label">Scattered information</p><h3>Visitors have to piece things together.</h3><div className="segment-posts" aria-hidden="true">{s.services.map((item,i)=><div key={item}><span>Post {String(i+1).padStart(2,'0')}</span><strong>{item}</strong><span>More details by message</span></div>)}</div><ul><li>Services spread across different posts.</li><li>Projects without an overview of your expertise.</li><li>Information about working with you is hard to find.</li></ul></article>
    <article className="segment-organized"><p className="rv-label">Organized information</p><h3>Your work in one place.</h3><div className="segment-site-mini"><div className="segment-mini-nav"><strong>{s.accent}</strong><span>Services · Projects · Contact</span></div><ProjectImage slug={s.hero} alt={`Example of visual organization: ${hero.name}`}/><div className="segment-mini-sections">{s.sections.map(item=><span key={item}>{item}</span>)}</div><span className="segment-contact-example">Contact via WhatsApp ↗</span></div><p>Clear sections, an accessible portfolio and easy-to-find contact, with mobile-friendly navigation.</p></article>
   </div><p className="segment-note">Illustrative comparison of information organization. It does not represent lost clients or guaranteed business results.</p>
  </div></section>
  <section className="rv-section segment-discovery"><div className="shell"><p className="rv-label">From search to conversation</p><h2>Help people searching for your services discover your work.</h2><p className="rv-intro">A website and SEO organize information that search engines can understand. For eligible businesses, a Google Business Profile complements this local presence.</p>
   <div className="segment-google-grid"><div className="segment-search"><p className="rv-label">Illustrative Google search example</p><div className="segment-query"><span aria-hidden="true">⌕</span><span>{s.query}</span></div><article className="segment-result"><small>example.invalid · fictional address</small><h3>{s.result}</h3><p>{s.description}</p><div className="segment-result-tags">{s.services.map(item=><span key={item}>{item}</span>)}</div></article><div className="segment-local"><strong>Google Business Profile, when eligible</strong><p>Location or service area, services, opening hours and contact details consistent with the actual business.</p></div></div>
    <ol className="segment-journey">{[["Search","Someone searches for a service in their area."],["Discovery","They find relevant information about the professional’s work."],["Website visit","They explore an organized presentation."],["Understanding the services",s.sections.join(', ')+'.'],["Contact via WhatsApp","They start a conversation to discuss the project."]].map(([title,body],i)=><li key={title}><span aria-hidden="true">{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
   </div><p className="segment-note">The search, address and result are fictional and do not indicate a guaranteed ranking. SEO does not guarantee first-page placement, enquiries or inclusion in Google’s AI answers. Teresina is only the example location; Ravyt provides remote services throughout Brazil.</p>
  </div></section>
  <section className="rv-section rv-dark" id="portfolio"><div className="shell"><p className="rv-label">Portfolio: {s.accent.toLowerCase()}</p><h2>See how we showcase professionals in your field</h2><p className="rv-intro">Actual screenshots of Ravyt’s demo websites. These examples show presentation possibilities; they do not represent paying clients or achieved results.</p><div className="segment-projects">{selected.map(p=><article key={p.slug}><a href={urls[p.slug]} target="_blank" rel="noopener noreferrer" aria-label={`View demo project ${p.name}`}><ProjectImage slug={p.slug} alt={`Actual screenshot of the demo website ${p.name}`}/></a><p className="rv-label">Demo project · {s.accent}</p><h3>{p.name}</h3><p>{p.text}</p><a className="rv-text-link" href={urls[p.slug]} target="_blank" rel="noopener noreferrer">View project <span aria-hidden="true">↗</span></a></article>)}</div><Link className="rv-text-link" href="/en/cases">Explore the full portfolio →</Link></div></section>
  <section className="rv-section rv-services"><div className="shell"><p className="rv-label">Google + Website + SEO</p><h2>A structure that connects presentation and discovery.</h2><div className="rv-method"><article><span className="rv-step">01 / WEBSITE</span><h3>Your work, clearly presented</h3><p>{niche.site}</p></article><article><span className="rv-step">02 / GOOGLE</span><h3>Local presence when applicable</h3><p>{niche.google}</p></article><article><span className="rv-step">03 / SEO</span><h3>Structure for search</h3><p>{niche.seo}</p></article></div><div className="segment-service-links"><Link href="/en/sites">Website creation →</Link><Link href="/en/google-meu-negocio">Google presence →</Link><Link href="/en/seo">SEO →</Link></div></div></section>
  <section className="rv-section rv-offer" id="investimento"><div className="shell segment-offer"><div><p className="rv-label">Remote service throughout Brazil</p><h2>An organized website. A clear annual plan.</h2><p className="rv-intro">The R$ 597 annual plan (Brazilian reais) includes a One Page website: a single page with organized sections to present your work, services, projects and contact details.</p><ul className="rv-deliverables">{s.sections.map(item=><li key={item}>{item}</li>)}</ul><p>Sections are not individual pages. Domain, hosting, maintenance and support for 12 months, SEO within the agreed scope and Google Business Profile when eligible. The terms are detailed in the proposal before you sign up.</p></div><PlanOffer/></div></section>
  <section className="rv-section" id="duvidas"><div className="shell rv-split"><div><p className="rv-label">Before you sign up</p><h2>Questions about the website and plan.</h2></div><div className="rv-faq"><details><summary>What is a One Page website?</summary><p>It is a website with a single page. Your introduction, services, projects and contact details appear in organized sections, with mobile-friendly navigation. The R$ 597 annual plan does not automatically include individual pages for each service or project.</p></details><details><summary>Can I showcase projects and specialties?</summary><p>Yes, in sections of the One Page website, using content and images agreed in the proposal. Multi-page structures and additional requirements must be assessed before you sign up.</p></details><FAQ/></div></div></section>
  <section className="rv-final"><div className="shell"><p className="rv-label">Your next step</p><h2>Shall we organize the presentation of your work?</h2><p>Tell us which services you offer, where you work and what you need to showcase. Ravyt explains the deliverables and terms for your project.</p><CTA>Discuss my website</CTA></div></section>
 </main><BlogFooter/></>;
}
