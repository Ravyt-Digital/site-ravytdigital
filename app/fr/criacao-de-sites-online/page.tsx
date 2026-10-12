import OfferDetailPage from '@/components/OfferDetailPage';
import {offerCopy} from '@/lib/offer-copy';
import {brandCopy} from '@/lib/brand-copy';
import {pageMetadata} from '@/locales/fr/lib/metadata';
export const metadata=pageMetadata({title:offerCopy.fr.siteTitle,description:offerCopy.fr.siteLead,alternates:{canonical:'/fr/criacao-de-sites-online'}});
export default function Page(){return <OfferDetailPage lang="fr" kind="site"/>;}
