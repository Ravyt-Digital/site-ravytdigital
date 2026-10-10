import InternationalHome from '@/components/InternationalHome';
import {brandCopy} from '@/lib/brand-copy';
import {pageMetadata} from '@/locales/es/lib/metadata';
export const metadata=pageMetadata({title:brandCopy.es.tagline,description:brandCopy.es.intro,alternates:{canonical:'/es'}});
export default function Home(){return <InternationalHome lang="es"/>;}
