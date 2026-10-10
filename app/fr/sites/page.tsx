import ServicePage from '@/locales/fr/components/ServicePage';
import {services} from '@/locales/fr/lib/commercial';
import {pageMetadata} from '@/locales/fr/lib/metadata';
const service=services.find(item=>item.slug==='sites')!;
export const metadata=pageMetadata({title:service.title,description:service.description,alternates:{canonical:'/fr/sites'}});
export default function Page(){return <ServicePage slug="sites"/>;}
