import OfferDetailPage from '@/components/OfferDetailPage';
import {offerCopy} from '@/lib/offer-copy';
import {brandCopy} from '@/lib/brand-copy';
import {pageMetadata} from '@/lib/metadata';
export const metadata=pageMetadata({title:offerCopy.pt.siteTitle,description:brandCopy.pt.scope,alternates:{canonical:'/criacao-de-sites-online'}});
export default function Page(){return <OfferDetailPage lang="pt" kind="site"/>;}
