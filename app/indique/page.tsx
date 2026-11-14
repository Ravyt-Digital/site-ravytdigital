import type {Metadata} from 'next';
import HomeNavigation from '@/components/HomeNavigation';
import SiteFooter from '@/components/SiteFooter';
import {ProposalForm} from '@/components/SalesForms';
import {SITE_URL} from '@/lib/site';

const title = 'Indique a Ravyt | Parcerias';
const description = 'Conheça o programa de indicações de sites e aplicativos da Ravyt Digital e manifeste seu interesse em ser parceiro.';
const url = SITE_URL + '/indique';
export const metadata: Metadata = {title, description, alternates:{canonical:url}, openGraph:{title, description, url, type:'website'}, twitter:{title,description,card:'summary_large_image'}};

export default function ReferralPage() {
  return <><HomeNavigation /><main className="rv-home" id="conteudo">
    <section className="rv-section shell rd-split rd-form-page">
      <div><h1>Indique a <em>Ravyt</em></h1><p>Conhece empresas que precisam de um site ou aplicativo? Manifeste seu interesse em receber um link de indicação da Ravyt.</p>
        <ol className="rd-referral-steps"><li>A equipe avalia seu cadastro e, se a parceria for aprovada, envia um link com seu código.</li><li>A empresa indicada conhece os serviços e pode pedir um orçamento pelo link.</li><li>A Ravyt registra a origem. A comissão de contratos elegíveis depende do pagamento e das condições acordadas com o parceiro.</li></ol>
        <p>Elegibilidade, comissão, atribuição e pagamento são definidos no acordo da parceria.</p>
      </div>
      <ProposalForm kind="parceria" />
    </section>
  </main><SiteFooter /></>;
}
