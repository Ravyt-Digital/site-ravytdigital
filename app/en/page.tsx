import InternationalHome from '@/components/InternationalHome';
import {brandCopy} from '@/lib/brand-copy';
import {pageMetadata} from '@/locales/en/lib/metadata';
export const metadata=pageMetadata({title:brandCopy.en.tagline,description:brandCopy.en.intro,alternates:{canonical:'/en'}});
export default function Home(){return <InternationalHome lang="en"/>;}
