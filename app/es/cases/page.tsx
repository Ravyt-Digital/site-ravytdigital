import { ChecklistCard } from '@/components/ChecklistResource';
import { BlogHeader, BlogFooter } from "@/locales/es/components/BlogChrome";
import { Cases, FinalCTA } from "@/locales/es/components/Commercial";
import { pageMetadata } from "@/locales/es/lib/metadata";
export const metadata=pageMetadata({title:"Portafolio de sitios web de Ravyt Digital",description:"Explora vistas previas en movimiento de sitios creados por Ravyt Digital: demostraciones conceptuales y sitios publicados.",alternates:{canonical:"/es/cases"}});
export default function Page(){return <><BlogHeader/><main className="rv" id="conteudo" tabIndex={-1}><section className="rv-page-hero"><div className="shell"><p className="rv-label"> Portafolio de sitios web </p><h1> Cada negocio necesita <br/><em>  una experiencia propia. </em></h1><p className="rv-lead"> Explora las vistas previas en movimiento de los sitios. Los proyectos identificados como demostración conceptual presentan marcas y propuestas ilustrativas; los demás son sitios publicados. </p></div></section><section className="rv-section"><div className="shell"><Cases/></div></section><ChecklistCard lang="es"/><FinalCTA/></main><BlogFooter/></>;}
