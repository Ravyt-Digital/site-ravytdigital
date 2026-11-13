import type {Metadata} from 'next';
import HomeNavigation from '@/components/HomeNavigation';
import SiteFooter from '@/components/SiteFooter';
import {ProposalForm} from '@/components/SalesForms';
import {contactHref} from '@/lib/home-content';
import {plans} from '@/lib/plans';
import {SITE_URL} from '@/lib/site';

const title = 'Solicitar proposta | Ravyt Digital';
export const metadata: Metadata = {title, description:'Envie as informações do seu projeto para a Ravyt Digital.', alternates:{canonical:SITE_URL+'/proposta'},robots:{index:false,follow:true}};

export default async function ProposalPage({searchParams}: {searchParams: Promise<{plano?: string}>}) {
  const {plano} = await searchParams;
  const plan = plans.find(item => item.id === plano);
  return <><HomeNavigation /><main className="rv-home" id="conteudo">
    <section className="rv-section shell rd-split rd-form-page">
      <div><h1>Solicite uma <em>proposta</em></h1>
        <p>{plan ? 'Você selecionou o ' + plan.name + '.' : 'Conte o que seu negócio precisa.'} A Ravyt analisa seu pedido e retorna pelo contato informado.</p>
        <a className="rv-text-link" href={contactHref} data-contact-cta>Prefiro conversar no WhatsApp ↗</a>
      </div>
      <ProposalForm initialPlan={plano === 'google' ? 'google' : plan?.id} />
    </section>
  </main><SiteFooter /></>;
}
