import SegmentedLanding from '@/components/SegmentedLanding';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Site para Empresas de Engenharia',
  description: "Criação de sites para empresas de engenharia com Perfil da Empresa no Google e SEO. Google + Site + SEO no plano One Page de R$ 597 por ano, conforme a proposta, com atendimento remoto.",
  alternates: { canonical: '/sites-para-empresas-de-engenharia' },
});

export default function Page() { return <SegmentedLanding segment="engenharia"/>; }
