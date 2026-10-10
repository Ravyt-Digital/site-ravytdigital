import ServicePage from '@/components/ServicePage';
import { pageMetadata } from '@/lib/metadata';
export const metadata=pageMetadata({title:'Criação de sites para profissionais liberais',description:'Apresente sua atuação e seus serviços em um site profissional. Conheça o plano anual da Ravyt Digital com site One Page, domínio e hospedagem.',alternates:{canonical:'/sites'}});
export default function Page(){return <ServicePage slug="sites"/>;}
