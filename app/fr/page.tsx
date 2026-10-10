import InternationalHome from '@/components/InternationalHome';
import {brandCopy} from '@/lib/brand-copy';
import {pageMetadata} from '@/locales/fr/lib/metadata';
export const metadata=pageMetadata({title:brandCopy.fr.tagline,description:brandCopy.fr.intro,alternates:{canonical:'/fr'}});
export default function Home(){return <InternationalHome lang="fr"/>;}
