import Link from 'next/link';
import Breadcrumbs from '@/locales/es/components/Breadcrumbs';
import { BlogHeader, BlogFooter } from '@/locales/es/components/BlogChrome';
import { PlanOffer } from '@/components/i18n/PlanOffer';
import { FAQ } from '@/locales/es/components/Commercial';
import { whatsappUrl } from '@/locales/es/lib/contact';
import { projects } from '@/locales/es/lib/commercial';
import { niches } from '@/locales/es/lib/segment-niches';
import segmentStyles from '@/components/segment-landing.css?inline';

const segments = {
 arquitetura: {
  title: "Un sitio de arquitectura que presenta tus proyectos con claridad.",
  accent: "Arquitectura", hero: 'nina',
  alt: "Captura del sitio demostrativo de Nina Valença, con una vivienda contemporánea y portafolio de arquitectura",
  query: "arquitecto residencial en Teresina",
  services: ["Arquitectura residencial", "Interiores", "Proyectos comerciales"],
  portfolio: ['nina'], cta: "Quiero un sitio para mi estudio",
  sections: ["Proyectos con contexto", "Servicios y etapas", "Zona de actuación", "Contacto para una propuesta"],
  comparison: "Las fotos de proyectos llaman la atención. Reunir el tipo de proyecto, el proceso y la zona de atención ayuda al visitante a entender si el estudio responde a sus necesidades.",
  result: "Arquitectura residencial e interiores",
  description: "Conoce las especialidades, explora proyectos organizados y descubre cómo solicitar una propuesta.",
 },
 engenharia: {
  title: "Un sitio de ingeniería que muestra tu capacidad técnica.",
  accent: "Ingeniería", hero: 'moreira',
  alt: "Captura del sitio demostrativo Vértice Norte Engenharia, con una obra residencial y presentación de servicios técnicos",
  query: "ingeniero civil en Teresina",
  services: ["Proyectos técnicos", "Supervisión de obras", "Consultoría"],
  portfolio: ['moreira'], cta: "Quiero presentar mis proyectos",
  sections: ["Especialidades técnicas", "Proyectos y experiencia", "Equipo y proceso", "Solicitud de propuesta"],
  comparison: "El cliente necesita entender qué proyectos atiendes, tu experiencia técnica y cómo solicitar una propuesta. Esa información puede quedar dispersa entre publicaciones y mensajes.",
  result: "Ingeniería civil y proyectos técnicos",
  description: "Descubre las especialidades, conoce la experiencia técnica y encuentra cómo solicitar una propuesta.",
 },
 moveis: {
  title: "Un sitio de muebles a medida que pone en valor cada espacio.",
  accent: "Muebles a medida", hero: 'lumea',
  alt: "Captura del sitio demostrativo Lumea Planejados, con una sala personalizada y muebles a medida",
  query: "muebles a medida en Teresina",
  services: ["Cocinas a medida", "Salas y dormitorios", "Mobiliario personalizado"],
  portfolio: ['lumea', 'mirauna'], cta: "Quiero un sitio para mis muebles a medida",
  sections: ["Ambientes organizados", "Materiales y acabados", "Etapas de atención", "Solicitud de presupuesto"],
  comparison: "Quien busca muebles a medida compara ambientes, materiales y acabados. Una presentación organizada facilita reconocer el estilo del trabajo y preparar una solicitud de presupuesto.",
  result: "Muebles a medida y espacios personalizados",
  description: "Explora los ambientes, descubre las soluciones y conoce cómo conversar sobre tu proyecto.",
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
 const contact=whatsappUrl(`¡Hola! Quiero conversar sobre un sitio para ${s.accent.toLowerCase()} y el plan anual de Ravyt Digital.`);
 const CTA=({children}:{children?:React.ReactNode})=><a className="rv-button" href={contact} data-track="whatsapp_click">{children??s.cta}<span aria-hidden="true">↗</span></a>;
 return <><style dangerouslySetInnerHTML={{__html:segmentStyles}}/><BlogHeader/><main className="rv rv-segment" id="conteudo" tabIndex={-1}>
  <section className="rv-page-hero"><div className="shell segment-hero">
   <div><p className="rv-label">Sitios para {s.accent.toLowerCase()}</p><h1>{s.title}</h1><p className="rv-lead">{niche.intro}</p><div className="rv-actions"><CTA/><a className="segment-plan-link" href="#investimento">Conocer el plan ↓</a></div><p className="segment-hero-note">Sitio + SEO + presencia en Google cuando corresponda. Plan anual: R$ 597 (reales brasileños).</p></div>
   <figure className="segment-showcase"><div className="segment-browser"><span aria-hidden="true">● ● ●</span><span>Vista previa del sitio · {s.accent}</span></div><ProjectImage slug={s.hero} alt={s.alt} priority/><figcaption>{hero.name}<span>Proyecto demostrativo · marca y proyectos ficticios</span></figcaption></figure>
  </div></section>
  <div className="shell"><Breadcrumbs items={[{name:"Inicio",href:'/es'},{name:"Creación de sitios",href:'/es/sites'},{name:`Sitios para ${s.accent.toLowerCase()}`,href:segment==='arquitetura'?'/es/sites-para-escritorios-de-arquitetura':segment==='engenharia'?'/es/sites-para-empresas-de-engenharia':'/es/sites-para-moveis-planejados'}]}/></div>
  <section className="rv-section"><div className="shell"><p className="rv-label">La presentación forma parte de la decisión</p><h2>{niche.challenge}</h2><p className="rv-intro">{s.comparison}</p>
   <div className="segment-comparison">
    <article className="segment-scattered"><p className="rv-label">Información dispersa</p><h3>El visitante tiene que unir las piezas.</h3><div className="segment-posts" aria-hidden="true">{s.services.map((item,i)=><div key={item}><span>Publicación {String(i+1).padStart(2,'0')}</span><strong>{item}</strong><span>Más detalles por mensaje</span></div>)}</div><ul><li>Servicios en distintas publicaciones.</li><li>Proyectos sin una visión general de tu trabajo.</li><li>Información sobre contratación difícil de encontrar.</li></ul></article>
    <article className="segment-organized"><p className="rv-label">Información organizada</p><h3>Tu trabajo en un solo lugar.</h3><div className="segment-site-mini"><div className="segment-mini-nav"><strong>{s.accent}</strong><span>Servicios · Proyectos · Contacto</span></div><ProjectImage slug={s.hero} alt={`Ejemplo de organización visual: ${hero.name}`}/><div className="segment-mini-sections">{s.sections.map(item=><span key={item}>{item}</span>)}</div><span className="segment-contact-example">Contacto por WhatsApp ↗</span></div><p>Secciones claras, portafolio accesible y contacto bien ubicado, con navegación adaptada al móvil.</p></article>
   </div><p className="segment-note">Comparación ilustrativa de la organización. No representa pérdida de clientes ni resultados comerciales garantizados.</p>
  </div></section>
  <section className="rv-section segment-discovery"><div className="shell"><p className="rv-label">De la búsqueda a la conversación</p><h2>Ayuda a quienes buscan tus servicios a conocer tu trabajo.</h2><p className="rv-intro">Un sitio y el SEO organizan información que los buscadores pueden comprender. Para negocios elegibles, el Perfil de Empresa en Google complementa esta presencia local.</p>
   <div className="segment-google-grid"><div className="segment-search"><p className="rv-label">Ejemplo ilustrativo de búsqueda en Google</p><div className="segment-query"><span aria-hidden="true">⌕</span><span>{s.query}</span></div><article className="segment-result"><small>example.invalid · dirección ficticia</small><h3>{s.result}</h3><p>{s.description}</p><div className="segment-result-tags">{s.services.map(item=><span key={item}>{item}</span>)}</div></article><div className="segment-local"><strong>Perfil de Empresa en Google, cuando sea elegible</strong><p>Ubicación o zona de atención, servicios, horarios y contacto coherentes con la actividad real.</p></div></div>
    <ol className="segment-journey">{[["Búsqueda","Una persona busca un servicio en su zona."],["Descubrimiento","Encuentra información relevante sobre el trabajo del profesional."],["Visita al sitio","Accede a una presentación organizada."],["Conocimiento de los servicios",s.sections.join(', ')+'.'],["Contacto por WhatsApp","Inicia una conversación para valorar el proyecto."]].map(([title,body],i)=><li key={title}><span aria-hidden="true">{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
   </div><p className="segment-note">La búsqueda, dirección y resultado son ficticios y no indican una posición garantizada. El SEO no garantiza aparecer en la primera página, recibir contactos ni ser incluido en respuestas de IA de Google. Teresina es solo la ubicación del ejemplo; Ravyt ofrece atención remota en todo Brasil.</p>
  </div></section>
  <section className="rv-section rv-dark" id="portfolio"><div className="shell"><p className="rv-label">Portafolio de {s.accent.toLowerCase()}</p><h2>Descubre cómo presentamos a profesionales de tu sector</h2><p className="rv-intro">Capturas reales de los sitios demostrativos de Ravyt. Estos ejemplos muestran posibilidades de presentación; no representan clientes contratantes ni resultados obtenidos.</p><div className="segment-projects">{selected.map(p=><article key={p.slug}><a href={urls[p.slug]} target="_blank" rel="noopener noreferrer" aria-label={`Ver proyecto demostrativo ${p.name}`}><ProjectImage slug={p.slug} alt={`Captura real del sitio demostrativo ${p.name}`}/></a><p className="rv-label">Proyecto demostrativo · {s.accent}</p><h3>{p.name}</h3><p>{p.text}</p><a className="rv-text-link" href={urls[p.slug]} target="_blank" rel="noopener noreferrer">Ver proyecto <span aria-hidden="true">↗</span></a></article>)}</div><Link className="rv-text-link" href="/es/cases">Conocer el portafolio completo →</Link></div></section>
  <section className="rv-section rv-services"><div className="shell"><p className="rv-label">Google + Sitio + SEO</p><h2>Una estructura que conecta presentación y descubrimiento.</h2><div className="rv-method"><article><span className="rv-step">01 / SITIO</span><h3>Tu trabajo bien presentado</h3><p>{niche.site}</p></article><article><span className="rv-step">02 / GOOGLE</span><h3>Presencia local cuando corresponda</h3><p>{niche.google}</p></article><article><span className="rv-step">03 / SEO</span><h3>Estructura para búsquedas</h3><p>{niche.seo}</p></article></div><div className="segment-service-links"><Link href="/es/sites">Creación de sitios →</Link><Link href="/es/google-meu-negocio">Presencia en Google →</Link><Link href="/es/seo">SEO →</Link></div></div></section>
  <section className="rv-section rv-offer" id="investimento"><div className="shell segment-offer"><div><p className="rv-label">Atención remota en todo Brasil</p><h2>Un sitio organizado. Un plan anual claro.</h2><p className="rv-intro">El plan anual de R$ 597 (reales brasileños) incluye un sitio One Page: una sola página con secciones organizadas para presentar tu actividad, servicios, proyectos y contacto.</p><ul className="rv-deliverables">{s.sections.map(item=><li key={item}>{item}</li>)}</ul><p>Las secciones no son páginas individuales. Dominio, alojamiento, mantenimiento y soporte durante 12 meses, SEO dentro del alcance contratado y Perfil de Empresa en Google cuando sea elegible. Las condiciones se detallan en la propuesta antes de contratar.</p></div><PlanOffer contactHref={contact}/></div></section>
  <section className="rv-section" id="duvidas"><div className="shell rv-split"><div><p className="rv-label">Antes de contratar</p><h2>Preguntas sobre el sitio y el plan.</h2></div><div className="rv-faq"><details><summary>¿Qué significa un sitio One Page?</summary><p>Es un sitio con una sola página. Presentación, servicios, proyectos y contacto se distribuyen en secciones organizadas, con navegación adaptada al móvil. El plan anual de R$ 597 no incluye automáticamente páginas individuales para cada servicio o proyecto.</p></details><details><summary>¿Puedo mostrar proyectos y especialidades?</summary><p>Sí, en secciones del sitio One Page, con contenido e imágenes acordados en la propuesta. Las estructuras con varias páginas y las necesidades adicionales deben evaluarse antes de contratar.</p></details><FAQ/></div></div></section>
  <section className="rv-final"><div className="shell"><p className="rv-label">Tu próximo paso</p><h2>¿Organizamos la presentación de tu trabajo?</h2><p>Cuéntanos qué servicios ofreces, en qué zona trabajas y qué necesitas mostrar. Ravyt explica las entregas y las condiciones de tu proyecto.</p><CTA>Conversar sobre mi sitio</CTA></div></section>
 </main><BlogFooter/></>;
}
