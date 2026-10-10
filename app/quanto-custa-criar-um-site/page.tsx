import OfferDetailPage from '@/components/OfferDetailPage';
import {offerCopy} from '@/lib/offer-copy';
import {brandCopy} from '@/lib/brand-copy';
import {pageMetadata} from '@/lib/metadata';
export const metadata=pageMetadata({title:offerCopy.pt.priceTitle,description:brandCopy.pt.scope,alternates:{canonical:'/quanto-custa-criar-um-site'}});
export default function Page(){return <OfferDetailPage lang="pt" kind="price"/>;}
