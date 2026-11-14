import type {Metadata} from 'next';
import HomeNavigation from '@/components/HomeNavigation';
import SiteFooter from '@/components/SiteFooter';
import {ProposalForm} from '@/components/SalesForms';
import {commercialWhatsApp, contactHref} from '@/lib/home-content';
import {findSiteSegment} from '@/lib/site-segments';
import {plans} from '@/lib/plans';
import {SITE_URL} from '@/lib/site';

const title = 'Solicitar proposta | Ravyt Digital';
export const metadata: Metadata = {title, description:'Envie as informações do seu projeto para a Ravyt Digital.', alternates:{canonical:SITE_URL+'/proposta'},robots:{index:false,follow:true}};

export default async function ProposalPage({searchParams}: {searchParams: Promise<{plano?: string; segmento?: string}>}) {
  const {plano, segmento} = await searchParams;
  const segment = findSiteSegment(segmento);
  const whatsapp = segment ? commercialWhatsApp('Olá! Quero uma proposta de site para ' + segment.label.toLowerCase() + '.') : contactHref;
  const plan = plans.find(item => item.id === plano);
  const selectedService = plano === 'google' ? 'Perfil da Empresa no Google' : plan?.name;
  return <><HomeNavigation /><main className="rv-home" id="conteudo">
    <section className="rv-section shell rd-split rd-form-page">
      <div><h1>Solicite uma <em>proposta</em></h1>
        <p>{selectedService ? 'Você selecionou o ' + selectedService + '.' : 'Conte o que seu negócio precisa.'} A Ravyt analisa seu pedido e retorna pelo contato informado.</p>
        {segment && <p>{segment.briefing}</p>}
        <a className="rv-text-link" href={whatsapp} data-contact-cta>Prefiro conversar no WhatsApp ↗</a>
      </div>
      <ProposalForm initialPlan={plano === 'google' ? 'google' : plan?.id} segment={segment ? segmento : undefined} />
    </section>
  </main><SiteFooter /></>;
}
