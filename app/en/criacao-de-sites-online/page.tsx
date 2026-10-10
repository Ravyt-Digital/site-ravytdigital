import OfferDetailPage from '@/components/OfferDetailPage';
import {offerCopy} from '@/lib/offer-copy';
import {brandCopy} from '@/lib/brand-copy';
import {pageMetadata} from '@/locales/en/lib/metadata';
export const metadata=pageMetadata({title:offerCopy.en.siteTitle,description:brandCopy.en.scope,alternates:{canonical:'/en/criacao-de-sites-online'}});
export default function Page(){return <OfferDetailPage lang="en" kind="site"/>;}
