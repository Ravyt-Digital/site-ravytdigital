import type {Metadata} from 'next';
import LegalNavigation from '@/components/LegalNavigation';
import Metricool from '@/components/Metricool';
import CookieConsent from '@/components/CookieConsent';
import Analytics from '@/components/Analytics';
import UtmCapture from '@/components/UtmCapture';
import StructuredData from '@/components/StructuredData';
import {organization,website} from '@/lib/structured-data';
import {SITE_URL} from '@/lib/site';
import inlineStyles from './globals.css?inline';
const title='Diagnóstico de Presença Digital | Ravyt Digital';
const description='Descubra oportunidades para melhorar a apresentação profissional do seu negócio na internet. Faça o diagnóstico inicial da Ravyt Digital.';
export const metadata:Metadata={metadataBase:new URL(SITE_URL),title,description,alternates:{canonical:SITE_URL},applicationName:'Ravyt Digital',openGraph:{type:'website',locale:'pt_BR',url:SITE_URL,siteName:'Ravyt Digital',title,description,images:[{url:'/brand/ravyt-social-card.webp',width:1200,height:630,alt:'Ravyt Digital'}]},twitter:{card:'summary_large_image',title,description,images:['/brand/ravyt-social-card.webp']},robots:{index:true,follow:true},icons:{icon:'/favicon.webp',shortcut:'/favicon.webp',apple:'/apple-touch-icon.png'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><head><style dangerouslySetInnerHTML={{__html:inlineStyles}}/></head><body><StructuredData data={{'@context':'https://schema.org','@graph':[organization,website,{'@type':'WebPage','@id':SITE_URL+'/#webpage',url:SITE_URL,inLanguage:'pt-BR',name:title,description,isPartOf:{'@id':SITE_URL+'/#website'},about:{'@id':SITE_URL+'/#organization'}}]}}/><a className="skip-link" href="#conteudo">Pular para o conteúdo</a>{children}<LegalNavigation/><UtmCapture/><Analytics/><Metricool/><CookieConsent/></body></html>;}
