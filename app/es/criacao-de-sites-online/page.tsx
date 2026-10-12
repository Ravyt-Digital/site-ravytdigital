import OfferDetailPage from '@/components/OfferDetailPage';
import {offerCopy} from '@/lib/offer-copy';
import {brandCopy} from '@/lib/brand-copy';
import {pageMetadata} from '@/locales/es/lib/metadata';
export const metadata=pageMetadata({title:offerCopy.es.siteTitle,description:offerCopy.es.siteLead,alternates:{canonical:'/es/criacao-de-sites-online'}});
export default function Page(){return <OfferDetailPage lang="es" kind="site"/>;}
