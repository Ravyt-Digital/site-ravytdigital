import ServicePage from '@/components/ServicePage';
import { pageMetadata } from '@/lib/metadata';
export const metadata=pageMetadata({title:'SEO para profissionais liberais',description:'Pesquisa, estrutura e otimização do site para apresentar seus serviços nas buscas. SEO com acompanhamento dentro do escopo contratado.',alternates:{canonical:'/seo'}});
export default function Page(){return <ServicePage slug="seo"/>;}
