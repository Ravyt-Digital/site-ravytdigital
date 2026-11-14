import {estimateHref} from '@/lib/services';

export default function QuoteLink({className = 'rv-button', onClick}: {
  className?: string;
  onClick?: () => void;
}) {
  return <a className={className} href={estimateHref} onClick={onClick} data-quote-cta>
    Solicitar orçamento <span className="rd-arrow rd-arrow-down" aria-hidden="true" />
  </a>;
}
