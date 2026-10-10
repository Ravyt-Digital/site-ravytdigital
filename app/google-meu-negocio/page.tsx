import ServicePage from '@/components/ServicePage';
import { pageMetadata } from '@/lib/metadata';
export const metadata=pageMetadata({title:'Presença no Google para profissionais locais',description:'Perfil da Empresa no Google para profissionais elegíveis: informações, serviços e acompanhamento local. Conheça o trabalho de Ytala pela Ravyt.',alternates:{canonical:'/google-meu-negocio'}});
export default function Page(){return <ServicePage slug="google-meu-negocio"/>;}
