import NichePage, { niches } from '@/components/NichePage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Site para Escritórios de Arquitetura',
  description: "Sites para escritórios de arquitetura com portfólio claro, Perfil da Empresa no Google e SEO. Google + Site + SEO no plano único anual de 597, com condições de pagamento na proposta.",
  alternates: { canonical: '/sites-para-escritorios-de-arquitetura' },
});

export default function Page() { return <NichePage niche={niches.arquitetura}/>; }
