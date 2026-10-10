import OfferDetailPage from '@/components/OfferDetailPage';
import {offerCopy} from '@/lib/offer-copy';
import {brandCopy} from '@/lib/brand-copy';
import {pageMetadata} from '@/locales/es/lib/metadata';
export const metadata=pageMetadata({title:offerCopy.es.priceTitle,description:brandCopy.es.scope,alternates:{canonical:'/es/quanto-custa-criar-um-site'}});
export default function Page(){return <OfferDetailPage lang="es" kind="price"/>;}
