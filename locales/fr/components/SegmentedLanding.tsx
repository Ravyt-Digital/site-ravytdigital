import {PriceText} from '@/components/i18n/Regional';
import Link from 'next/link';
import Breadcrumbs from '@/locales/fr/components/Breadcrumbs';
import { BlogHeader, BlogFooter } from '@/locales/fr/components/BlogChrome';
import { PlanOffer } from '@/components/i18n/PlanOffer';
import { FAQ } from '@/locales/fr/components/Commercial';
import { whatsappUrl } from '@/locales/fr/lib/contact';
import { projects } from '@/locales/fr/lib/commercial';
import { niches } from '@/locales/fr/lib/segment-niches';
import segmentStyles from '@/components/segment-landing.css?inline';

const segments = {
 arquitetura: {
  title: "Un site d’architecture qui présente clairement vos projets.",
  accent: "Architecture", hero: 'nina',
  alt: "Capture du site de démonstration Nina Valença, avec une maison contemporaine et un portfolio d’architecture",
  query: "architecte résidentiel à Teresina",
  services: ["Architecture résidentielle", "Architecture intérieure", "Projets commerciaux"],
  portfolio: ['nina'], cta: "Je souhaite un site pour mon cabinet",
  sections: ["Projets contextualisés", "Services et étapes", "Zone d’intervention", "Contact pour une proposition"],
  comparison: "Les photos de projets attirent l’attention. Réunir les types de projets, votre méthode et la zone d’intervention aide les visiteurs à comprendre si votre cabinet répond à leurs besoins.",
  result: "Architecture résidentielle et intérieure",
  description: "Découvrez les spécialités, consultez les projets et apprenez comment demander une proposition.",
 },
 engenharia: {
  title: "Un site d’ingénierie qui met en valeur votre expertise technique.",
  accent: "Ingénierie", hero: 'moreira',
  alt: "Capture du site de démonstration Vértice Norte Engenharia, avec un chantier résidentiel et une présentation des services techniques",
  query: "ingénieur en génie civil à Teresina",
  services: ["Projets techniques", "Suivi de chantier", "Conseil"],
  portfolio: ['moreira'], cta: "Je souhaite présenter mes projets",
  sections: ["Spécialités techniques", "Projets et expertise", "Équipe et méthode", "Demande de proposition"],
  comparison: "Le client doit comprendre les projets pris en charge, votre expertise technique et comment demander une proposition. Ces informations peuvent être dispersées entre publications et messages.",
  result: "Génie civil et projets techniques",
  description: "Découvrez les spécialités et l’expertise technique, puis les démarches pour demander une proposition.",
 },
 moveis: {
  title: "Un site de mobilier sur mesure qui met chaque espace en valeur.",
  accent: "Mobilier sur mesure", hero: 'lumea',
  alt: "Capture du site de démonstration Lumea Planejados, avec un salon personnalisé et du mobilier sur mesure",
  query: "mobilier sur mesure à Teresina",
  services: ["Cuisines sur mesure", "Salons et chambres", "Meubles personnalisés"],
  portfolio: ['lumea', 'mirauna'], cta: "Je souhaite un site pour mon mobilier sur mesure",
  sections: ["Espaces organisés", "Matériaux et finitions", "Étapes de l’accompagnement", "Demande de devis"],
  comparison: "Les personnes qui recherchent du mobilier sur mesure comparent les espaces, les matériaux et les finitions. Une vitrine organisée aide à identifier votre style et à préparer une demande de devis.",
  result: "Mobilier sur mesure et espaces personnalisés",
  description: "Explorez les espaces, découvrez les solutions et apprenez comment discuter de votre projet.",
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
 const contact=whatsappUrl(`Bonjour ! Je souhaite discuter d’un site professionnel (${s.accent.toLowerCase()}) et du forfait annuel de Ravyt Digital.`);
 const CTA=({children}:{children?:React.ReactNode})=><a className="rv-button" href={contact} data-track="whatsapp_click">{children??s.cta}<span aria-hidden="true">↗</span></a>;
 return <><style dangerouslySetInnerHTML={{__html:segmentStyles}}/><BlogHeader/><main className="rv rv-segment" id="conteudo" tabIndex={-1}>
  <section className="rv-page-hero"><div className="shell segment-hero">
   <div><p className="rv-label">Création de sites · {s.accent}</p><h1>{s.title}</h1><p className="rv-lead">{niche.intro}</p><div className="rv-actions"><CTA/><a className="segment-plan-link" href="#investimento">Découvrir le forfait ↓</a></div><p className="segment-hero-note">Site + SEO + présence sur Google sous réserve d’éligibilité. Forfait annuel : R$ 597 (réals brésiliens).</p></div>
   <figure className="segment-showcase"><div className="segment-browser"><span aria-hidden="true">● ● ●</span><span>Aperçu du site · {s.accent}</span></div><ProjectImage slug={s.hero} alt={s.alt} priority/><figcaption>{hero.name}<span>Projet de démonstration · marque et projets fictifs</span></figcaption></figure>
  </div></section>
  <div className="shell"><Breadcrumbs items={[{name:"Accueil",href:'/fr'},{name:"Création de sites",href:'/fr/sites'},{name:`Sites · ${s.accent}`,href:segment==='arquitetura'?'/fr/sites-para-escritorios-de-arquitetura':segment==='engenharia'?'/fr/sites-para-empresas-de-engenharia':'/fr/sites-para-moveis-planejados'}]}/></div>
  <section className="rv-section"><div className="shell"><p className="rv-label">La présentation participe à la décision</p><h2>{niche.challenge}</h2><p className="rv-intro">{s.comparison}</p>
   <div className="segment-comparison">
    <article className="segment-scattered"><p className="rv-label">Informations dispersées</p><h3>Les visiteurs doivent rassembler les informations.</h3><div className="segment-posts" aria-hidden="true">{s.services.map((item,i)=><div key={item}><span>Publication {String(i+1).padStart(2,'0')}</span><strong>{item}</strong><span>Plus de détails par message</span></div>)}</div><ul><li>Services répartis entre plusieurs publications.</li><li>Projets sans vue d’ensemble de votre activité.</li><li>Informations sur la collaboration difficiles à trouver.</li></ul></article>
    <article className="segment-organized"><p className="rv-label">Informations organisées</p><h3>Votre travail à une seule adresse.</h3><div className="segment-site-mini"><div className="segment-mini-nav"><strong>{s.accent}</strong><span>Services · Projets · Contact</span></div><ProjectImage slug={s.hero} alt={`Exemple d’organisation visuelle : ${hero.name}`}/><div className="segment-mini-sections">{s.sections.map(item=><span key={item}>{item}</span>)}</div><span className="segment-contact-example">Contact par WhatsApp ↗</span></div><p>Des sections claires, un portfolio accessible et un contact bien placé, avec une navigation adaptée au mobile.</p></article>
   </div><p className="segment-note">Comparaison illustrative de l’organisation des informations. Elle ne représente ni perte de clients ni résultats commerciaux garantis.</p>
  </div></section>
  <section className="rv-section segment-discovery"><div className="shell"><p className="rv-label">De la recherche au premier échange</p><h2>Aidez les personnes qui recherchent vos services à découvrir votre travail.</h2><p className="rv-intro">Un site et le SEO organisent les informations que les moteurs de recherche peuvent comprendre. Pour les entreprises éligibles, le Profil d’entreprise Google complète cette présence locale.</p>
   <div className="segment-google-grid"><div className="segment-search"><p className="rv-label">Exemple illustratif de recherche sur Google</p><div className="segment-query"><span aria-hidden="true">⌕</span><span>{s.query}</span></div><article className="segment-result"><small>example.invalid · adresse fictive</small><h3>{s.result}</h3><p>{s.description}</p><div className="segment-result-tags">{s.services.map(item=><span key={item}>{item}</span>)}</div></article><div className="segment-local"><strong>Profil d’entreprise Google, sous réserve d’éligibilité</strong><p>Localisation ou zone desservie, services, horaires et coordonnées cohérents avec l’activité réelle.</p></div></div>
    <ol className="segment-journey">{[["Recherche","Une personne recherche un service dans sa région."],["Découverte","Elle trouve des informations pertinentes sur l’activité du professionnel."],["Visite du site","Elle consulte une présentation organisée."],["Découverte des services",s.sections.join(', ')+'.'],["Contact par WhatsApp","Elle engage un échange pour évaluer le projet."]].map(([title,body],i)=><li key={title}><span aria-hidden="true">{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
   </div><p className="segment-note"><PriceText>La recherche, l’adresse et le résultat sont fictifs, sans classement garanti. Le SEO ne garantit ni la première page, ni des demandes de contact, ni une inclusion dans les réponses d’IA de Google. Teresina n’est que le lieu de l’exemple ; Ravyt propose un service à distance dans tout le Brésil.</PriceText></p>
  </div></section>
  <section className="rv-section rv-dark" id="portfolio"><div className="shell"><p className="rv-label">Portfolio : {s.accent.toLowerCase()}</p><h2>Découvrez comment nous présentons les professionnels de votre secteur</h2><p className="rv-intro">Captures réelles des sites de démonstration de Ravyt. Ces exemples montrent des possibilités de présentation ; ils ne représentent ni clients signataires ni résultats obtenus.</p><div className="segment-projects">{selected.map(p=><article key={p.slug}><a href={urls[p.slug]} target="_blank" rel="noopener noreferrer" aria-label={`Voir le projet de démonstration ${p.name}`}><ProjectImage slug={p.slug} alt={`Capture réelle du site de démonstration ${p.name}`}/></a><p className="rv-label">Projet de démonstration · {s.accent}</p><h3>{p.name}</h3><p>{p.text}</p><a className="rv-text-link" href={urls[p.slug]} target="_blank" rel="noopener noreferrer">Voir le projet <span aria-hidden="true">↗</span></a></article>)}</div><Link className="rv-text-link" href="/fr/cases">Découvrir le portfolio complet →</Link></div></section>
  <section className="rv-section rv-services"><div className="shell"><p className="rv-label">Google + Site + SEO</p><h2>Une structure qui relie présentation et découverte.</h2><div className="rv-method"><article><span className="rv-step">01 / SITE</span><h3>Votre travail bien présenté</h3><p>{niche.site}</p></article><article><span className="rv-step">02 / GOOGLE</span><h3>Présence locale lorsque cela s’applique</h3><p>{niche.google}</p></article><article><span className="rv-step">03 / SEO</span><h3>Structure pour la recherche</h3><p>{niche.seo}</p></article></div><div className="segment-service-links"><Link href="/fr/sites">Création de sites →</Link><Link href="/fr/google-meu-negocio">Présence sur Google →</Link><Link href="/fr/seo">SEO →</Link></div></div></section>
  <section className="rv-section rv-offer" id="investimento"><div className="shell segment-offer"><div><p className="rv-label"><PriceText>Service à distance dans tout le Brésil</PriceText></p><h2>Un site organisé. Un forfait annuel clair.</h2><p className="rv-intro">Le forfait annuel de R$ 597 (réals brésiliens) comprend un site One Page : une seule page avec des sections organisées pour présenter votre activité, vos services, vos projets et vos coordonnées.</p><ul className="rv-deliverables">{s.sections.map(item=><li key={item}>{item}</li>)}</ul><p>Les sections ne sont pas des pages individuelles. Domaine, hébergement, maintenance et support pendant 12 mois, SEO dans le périmètre convenu et Profil d’entreprise Google sous réserve d’éligibilité. Les conditions sont détaillées dans la proposition avant la souscription.</p></div><PlanOffer contactHref={contact}/></div></section>
  <section className="rv-section" id="duvidas"><div className="shell rv-split"><div><p className="rv-label">Avant de souscrire</p><h2>Questions sur le site et le forfait.</h2></div><div className="rv-faq"><details><summary>Qu’est-ce qu’un site One Page ?</summary><p>Il s’agit d’un site avec une seule page. Présentation, services, projets et coordonnées sont répartis en sections organisées, avec une navigation adaptée au mobile. Le forfait annuel de R$ 597 ne comprend pas automatiquement des pages individuelles pour chaque service ou projet.</p></details><details><summary>Puis-je présenter mes projets et spécialités ?</summary><p>Oui, dans les sections du site One Page, avec les contenus et images convenus dans la proposition. Les structures à plusieurs pages et les besoins supplémentaires doivent être évalués avant la souscription.</p></details><FAQ/></div></div></section>
  <section className="rv-final"><div className="shell"><p className="rv-label">Votre prochaine étape</p><h2>Organisons la présentation de votre travail.</h2><p>Indiquez vos services, votre zone d’intervention et ce que vous souhaitez présenter. Ravyt vous explique les livrables et les conditions de votre projet.</p><CTA>Discuter de mon site</CTA></div></section>
 </main><BlogFooter/></>;
}
