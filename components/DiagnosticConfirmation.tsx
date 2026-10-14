'use client';
import {useEffect,useRef} from 'react';
export default function DiagnosticConfirmation(){
 const card=useRef<HTMLElement>(null),heading=useRef<HTMLHeadingElement>(null);
 useEffect(()=>{heading.current?.focus({preventScroll:true});const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;card.current?.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});},[]);
 return <div className="dg-completion" id="diagnostico"><section ref={card} className="dg-confirmation" role="status" aria-live="polite" aria-atomic="true" aria-labelledby="confirmation-title"><span className="dg-confirmation-icon" aria-hidden="true">✓</span><h2 ref={heading} id="confirmation-title" tabIndex={-1}>Sua solicitação foi enviada!</h2><p>Recebemos suas informações. A equipe da Ravyt poderá entrar em contato pelo WhatsApp informado para conversar sobre seu projeto.</p><p className="dg-confirmation-note">Obrigado por compartilhar um pouco sobre seu trabalho.</p></section></div>;
}
