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
const title='Google Meu Negócio por R$ 597 ao ano | Ravyt Digital';
const description='Otimização do Google Meu Negócio por R$ 597,00 ao ano. Organize seu Perfil da Empresa no Google e receba um cartão NFC para avaliações como bônus.';
export const metadata:Metadata={metadataBase:new URL(SITE_URL),title,description,alternates:{canonical:SITE_URL},applicationName:'Ravyt Digital',openGraph:{type:'website',locale:'pt_BR',url:SITE_URL,siteName:'Ravyt Digital',title,description,images:[{url:'/brand/ravyt-social-card.webp',width:1200,height:630,alt:'Ravyt Digital'}]},twitter:{card:'summary_large_image',title,description,images:['/brand/ravyt-social-card.webp']},robots:{index:true,follow:true},icons:{icon:'/favicon.webp',shortcut:'/favicon.webp',apple:'/apple-touch-icon.png'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><head><style dangerouslySetInnerHTML={{__html:inlineStyles}}/></head><body><StructuredData data={{'@context':'https://schema.org','@graph':[organization,website]}}/><a className="skip-link" href="#conteudo">Pular para o conteúdo</a>{children}<LegalNavigation/><UtmCapture/><Analytics/><Metricool/><CookieConsent/></body></html>;}
