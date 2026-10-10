import ServicePage from '@/components/ServicePage';
import {services} from '@/lib/commercial';
import {pageMetadata} from '@/lib/metadata';
const service=services.find(item=>item.slug==='seo')!;
export const metadata=pageMetadata({title:service.title,description:service.description,alternates:{canonical:'/seo'}});
export default function Page(){return <ServicePage slug="seo"/>;}
