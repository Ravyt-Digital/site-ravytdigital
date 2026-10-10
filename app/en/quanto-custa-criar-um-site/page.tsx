import OfferDetailPage from '@/components/OfferDetailPage';
import {offerCopy} from '@/lib/offer-copy';
import {brandCopy} from '@/lib/brand-copy';
import {pageMetadata} from '@/locales/en/lib/metadata';
export const metadata=pageMetadata({title:offerCopy.en.priceTitle,description:brandCopy.en.scope,alternates:{canonical:'/en/quanto-custa-criar-um-site'}});
export default function Page(){return <OfferDetailPage lang="en" kind="price"/>;}
