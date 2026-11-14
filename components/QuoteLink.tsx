import {quoteHref, type ProjectType} from '@/lib/services';
import type {SiteSegmentId} from '@/lib/site-segments';

export default function QuoteLink({type, segment, navigation = false}: {
  type?: ProjectType;
  segment?: SiteSegmentId;
  navigation?: boolean;
}) {
  const href = quoteHref(type ?? (segment ? 'site' : undefined)) + (segment ? '&segmento=' + segment : '');
  return <a className={navigation ? 'rv-nav-cta' : 'rv-button'} href={href} data-quote-cta>
    Solicitar orçamento <span className="rd-arrow rd-arrow-up" aria-hidden="true" />
  </a>;
}
