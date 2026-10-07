import NichePage, { niches } from '@/components/NichePage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Site para Empresas de Móveis Planejados',
  description: "Sites para empresas de móveis planejados com projetos, contato fácil e SEO. Perfil da Empresa no Google + site + SEO no plano único anual de 597, com condições de pagamento na proposta.",
  alternates: { canonical: '/sites-para-moveis-planejados' },
});

export default function Page() { return <NichePage niche={niches.moveis}/>; }
