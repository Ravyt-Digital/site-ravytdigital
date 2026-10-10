import ServicePage from '@/locales/es/components/ServicePage';
import {services} from '@/locales/es/lib/commercial';
import {pageMetadata} from '@/locales/es/lib/metadata';
const service=services.find(item=>item.slug==='seo')!;
export const metadata=pageMetadata({title:service.title,description:service.description,alternates:{canonical:'/es/seo'}});
export default function Page(){return <ServicePage slug="seo"/>;}
