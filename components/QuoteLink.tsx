import {appEstimateHref, estimateHref} from '@/lib/services';

export default function QuoteLink({className = 'rv-button', onClick, appProject = false}: {
  className?: string;
  onClick?: () => void;
  appProject?: boolean;
}) {
  return <a className={className} href={appProject ? appEstimateHref : estimateHref} onClick={onClick} data-quote-cta>
    Solicitar orçamento <span className="rd-arrow rd-arrow-down" aria-hidden="true" />
  </a>;
}
