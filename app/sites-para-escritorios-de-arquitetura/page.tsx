import NichePage, { niches } from '@/components/NichePage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Site para Escritórios de Arquitetura',
  description: 'Sites para escritórios de arquitetura com portfólio claro, Perfil da Empresa no Google e SEO. Google + Site + SEO no plano único anual de R$ 597,00, pago por Pix, cartão ou boleto.',
  alternates: { canonical: '/sites-para-escritorios-de-arquitetura' },
});

export default function Page() { return <NichePage niche={niches.arquitetura}/>; }
