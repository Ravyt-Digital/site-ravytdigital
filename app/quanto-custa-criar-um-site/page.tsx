import SiteGuide from '@/components/SiteGuide';
import {plans, professional} from '@/lib/plans';
import {pageMetadata} from '@/lib/seo';

const path = '/quanto-custa-criar-um-site';
const title = 'Quanto custa criar um site profissional?';
const description = 'Na Ravyt, a criação de sites custa R$ 990 no Essencial, R$ 2.900 no Profissional e a partir de R$ 4.500 no Sob Medida. Compare entregas e custos de manutenção.';
export const metadata = pageMetadata(path, 'Quanto custa criar um site? | Ravyt Digital', description, 'article');

export default function WebsitePricingPage() {
  return <SiteGuide path={path} title={title} description={description}>
    <section><h2>Preços e escopo dos sites da Ravyt</h2>
      <ul>{plans.map(plan => <li key={plan.id}><strong>{plan.name} · {plan.priceNote === 'a partir de' && 'a partir de '}{plan.price}</strong><br />
        {plan.description} {plan.details[0]}. {plan.timeline}</li>)}</ul>
      <p>O <a href="/site-profissional">Site Profissional</a> de {professional.price} inclui redação, SEO inicial, configuração de domínio próprio e duas rodadas de ajustes. O pagamento é dividido em 50% na contratação e 50% após a aprovação, antes da publicação ou transferência.</p>
    </section>
    <section><h2>O que pode mudar o orçamento?</h2>
      <ul>
        <li><strong>Páginas e conteúdo.</strong> Uma página com apresentação e WhatsApp exige um trabalho diferente de um site com páginas próprias para cada serviço, textos novos e portfólio.</li>
        <li><strong>Funcionalidades.</strong> Blog, painel editorial, área restrita e integrações podem exigir configuração, testes e infraestrutura específicos. Confirme quais estão contemplados.</li>
        <li><strong>Materiais e revisões.</strong> Informe se já tem logotipo, fotos, descrições e alguém responsável pela aprovação. A proposta deve indicar quem produz o material e quantas rodadas de ajuste estão incluídas.</li>
      </ul>
    </section>
    <section><h2>Quanto custa manter o site no ar?</h2>
      <p>Nos planos Profissional e Sob Medida, você registra e renova o domínio em seu nome e paga diretamente aos fornecedores os custos de infraestrutura aplicáveis. O Essencial usa um subdomínio da Ravyt e inclui 12 meses de publicação, com renovação de R$ 180 por ano.</p>
      <p>Manutenção é opcional. Confirme se seu orçamento inclui suporte, atualizações de conteúdo ou apenas a publicação inicial. Veja os <a href="/#planos">planos de criação de sites</a> para comparar os prazos e as entregas.</p>
    </section>
    <section><h2>O que comparar entre duas propostas?</h2>
      <p>Coloque lado a lado o número de páginas, a produção dos textos, o SEO inicial, as revisões, a responsabilidade sobre domínio e hospedagem e o que será entregue ao final. Peça por escrito os custos recorrentes e o preço de alterações extras.</p>
      <p>Se ainda estiver montando o escopo, veja <a href="/site-institucional-paginas-essenciais">quais páginas um site institucional precisa</a>.</p>
    </section>
  </SiteGuide>;
}
