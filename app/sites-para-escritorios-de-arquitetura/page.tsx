import SiteSegmentPage from '@/components/SiteSegmentPage';
import {pageMetadata} from '@/lib/seo';
import {siteSegments} from '@/lib/site-segments';

const {path, title, description} = siteSegments.arquitetura;
export const metadata = pageMetadata(path, title, description);

export default function ArchitecturePage() {
  return <SiteSegmentPage id="arquitetura" />;
}
