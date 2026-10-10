import OfferDetailPage from '@/components/OfferDetailPage';
import {offerCopy} from '@/lib/offer-copy';
import {brandCopy} from '@/lib/brand-copy';
import {pageMetadata} from '@/locales/fr/lib/metadata';
export const metadata=pageMetadata({title:offerCopy.fr.priceTitle,description:brandCopy.fr.scope,alternates:{canonical:'/fr/quanto-custa-criar-um-site'}});
export default function Page(){return <OfferDetailPage lang="fr" kind="price"/>;}
