import SegmentedLanding from '@/components/SegmentedLanding';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Site para Escritórios de Arquitetura',
  description: "Sites para escritórios de arquitetura com portfólio claro, Perfil da Empresa no Google e SEO. Google + Site + SEO no plano One Page de R$ 597 por ano, conforme a proposta.",
  alternates: { canonical: '/sites-para-escritorios-de-arquitetura' },
});

export default function Page() { return <SegmentedLanding segment="arquitetura"/>; }
