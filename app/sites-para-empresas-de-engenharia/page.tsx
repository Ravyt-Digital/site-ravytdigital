import NichePage, { niches } from '@/components/NichePage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Site para Empresas de Engenharia',
  description: 'Criação de sites para empresas de engenharia com Perfil da Empresa no Google e SEO. Google + Site + SEO por R$ 597/mês, com atendimento remoto.',
  alternates: { canonical: '/sites-para-empresas-de-engenharia' },
});

export default function Page() { return <NichePage niche={niches.engenharia}/>; }
