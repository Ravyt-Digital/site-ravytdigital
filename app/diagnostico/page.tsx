import DiagnosticExperience from '@/components/DiagnosticExperience';
import Testimonials from '@/components/Testimonials';
import SiteFooter from '@/components/SiteFooter';
import {pageMetadata,webpage} from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
export const metadata=pageMetadata('/diagnostico','Diagnóstico de Presença no Google | Ravyt Digital','Responda cinco perguntas e receba um resultado preliminar sobre a presença do seu negócio no Google. Solicitar contato é opcional.');
export default function Home(){return <>
<header className="dg-header"><div className="shell"><a href="/" aria-label="Ravyt Digital — início"><img src="/brand/ravyt-logo-high-contrast.webp" alt="Ravyt Digital" width={900} height={300}/></a><a className="dg-home-link" href="/">← Voltar para o site</a></div></header>
<StructuredData data={{'@context':'https://schema.org',...webpage('/diagnostico','Diagnóstico de Presença no Google | Ravyt Digital','Resultado preliminar baseado em cinco respostas, com solicitação de contato opcional.')}}/><main id="conteudo"><div className="shell dg-main" id="inicio"><DiagnosticExperience/></div></main>
<Testimonials/>
<SiteFooter/></>}
