import DiagnosticExperience from '@/components/DiagnosticExperience';
import Testimonials from '@/components/Testimonials';
import SiteFooter from '@/components/SiteFooter';
import type {Metadata} from 'next';
export const metadata:Metadata={title:'Diagnóstico de Presença Digital | Ravyt Digital',description:'Responda cinco perguntas e receba um resultado preliminar sobre a presença digital do seu negócio.',alternates:{canonical:'/diagnostico'},openGraph:{url:'/diagnostico',title:'Diagnóstico de Presença Digital | Ravyt Digital',description:'Responda cinco perguntas e receba um resultado preliminar sobre a presença digital do seu negócio.'}};
export default function Home(){return <>
<header className="dg-header"><div className="shell"><a href="/" aria-label="Ravyt Digital — início"><img src="/brand/ravyt-logo-high-contrast.webp" alt="Ravyt Digital" width={900} height={300}/></a><a className="dg-home-link" href="/">← Voltar para o site</a></div></header>
<main id="conteudo"><div className="shell dg-main" id="inicio"><DiagnosticExperience/></div></main>
<Testimonials/>
<SiteFooter/></>}
