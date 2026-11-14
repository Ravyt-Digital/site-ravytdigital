import HomeNavigation from '@/components/HomeNavigation';
import SiteFooter from '@/components/SiteFooter';
import {ProposalForm} from '@/components/SalesForms';
import {findSiteSegment} from '@/lib/site-segments';
import {isProjectType, quotePath} from '@/lib/services';
import {pageMetadata} from '@/lib/seo';

export const metadata = {
  ...pageMetadata(quotePath, 'Solicitar Orçamento | Ravyt Digital', 'Solicite orçamento para o site, portfólio ou aplicativo do seu escritório de arquitetura ou empresa de engenharia.'),
  robots: {index: false, follow: true},
};

export default async function ProposalPage({searchParams}: {searchParams: Promise<{projeto?: string; segmento?: string}>}) {
  const {projeto, segmento} = await searchParams;
  const segment = findSiteSegment(segmento);
  const type = isProjectType(projeto) ? projeto : segment ? 'site' : undefined;
  return <><HomeNavigation /><main className="rv-home" id="conteudo">
    <section className="rv-section shell rd-split rd-form-page">
      <div>
        <h1>Solicite um <em>orçamento</em></h1>
        <p>Conte o que seu escritório ou equipe de engenharia precisa mostrar ou organizar. A Ravyt avalia o escopo e responde pelo contato informado.</p>
        {segment && <p>{segment.briefing}</p>}
      </div>
      <ProposalForm initialType={type} segment={segment ? segmento : undefined} />
    </section>
  </main><SiteFooter /></>;
}
