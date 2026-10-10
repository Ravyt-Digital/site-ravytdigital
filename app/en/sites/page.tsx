import ServicePage from '@/locales/en/components/ServicePage';
import {services} from '@/locales/en/lib/commercial';
import {pageMetadata} from '@/locales/en/lib/metadata';
const service=services.find(item=>item.slug==='sites')!;
export const metadata=pageMetadata({title:service.title,description:service.description,alternates:{canonical:'/en/sites'}});
export default function Page(){return <ServicePage slug="sites"/>;}
