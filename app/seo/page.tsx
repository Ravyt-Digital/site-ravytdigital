import ServicePage from '@/components/ServicePage';
import { pageMetadata } from '@/lib/metadata';
export const metadata=pageMetadata({title:'SEO estratégico para empresas',description:'Aproxime sua empresa de quem procura sua solução. SEO técnico, conteúdo e arquitetura de páginas com foco na intenção de busca.',alternates:{canonical:'/seo'}});
export default function Page(){return <ServicePage slug="seo"/>;}
