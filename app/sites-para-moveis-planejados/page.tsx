import SegmentedLanding from '@/components/SegmentedLanding';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Site para Empresas de Móveis Planejados',
  description: "Sites para empresas de móveis planejados com projetos, contato fácil e SEO. Perfil da Empresa no Google + site + SEO no plano One Page de R$ 597 por ano, conforme a proposta.",
  alternates: { canonical: '/sites-para-moveis-planejados' },
});

export default function Page() { return <SegmentedLanding segment="moveis"/>; }
