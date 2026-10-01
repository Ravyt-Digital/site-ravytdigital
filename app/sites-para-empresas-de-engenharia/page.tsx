import NichePage, { niches } from '@/components/NichePage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Site para Empresas de Engenharia',
  description: 'Criação de sites para empresas de engenharia com Perfil da Empresa no Google e SEO. Google + Site + SEO no plano mensal de R$ 457 ou anual em 12x de R$ 390 no cartão, com atendimento remoto.',
  alternates: { canonical: '/sites-para-empresas-de-engenharia' },
});

export default function Page() { return <NichePage niche={niches.engenharia}/>; }
