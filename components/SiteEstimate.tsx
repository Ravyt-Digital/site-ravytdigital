"use client";

import {useRef, useState} from 'react';
import {estimateId, quoteHref} from '@/lib/services';
import {
  calculateEstimate, commercialPages, contactOptions, contentPageLimit, estimateWhatsApp, initialEstimate,
  fixedNotice, legalItems, materialOptions, money, pageOptions, pagesLabel, partialNotice, pendingNotice,
  publicationFee, publicationFor, revisionPolicy, specialProjects, thirdPartyNotice,
  type Estimate, type Option,
} from '@/lib/site-estimate';

const steps = [
  {key:'structure',label:'Estrutura'},
  {key:'contact',label:'Contato'},
  {key:'materials',label:'Conteúdo'},
  {key:'hosting',label:'Publicação'},
] as const;

function Choices({field, value, options, onChange}: {
  field: string; value: string; options: Option[]; onChange: (value: string) => void;
}) {
  return options.map(({id,label,detail,price}) => <label key={id} className="rd-estimate-choice">
    <input type="radio" name={'site-estimate-'+field} value={id} checked={value===id} onChange={()=>onChange(id)} />
    <span><strong>{label}</strong>{detail && <small>{detail}</small>}</span>
    {price !== undefined && <span className="rd-estimate-price">{money.format(price)}</span>}
  </label>);
}

export default function SiteEstimate() {
  const [index,setIndex] = useState(0);
  const [estimate,setEstimate] = useState<Estimate>(initialEstimate);
  const heading = useRef<HTMLHeadingElement>(null);
  const step = steps[index];
  const publication = publicationFor(estimate);
  const result = calculateEstimate(estimate);
  const hasPendingItems = result.pending.length > 0;
  const allItemsPending = hasPendingItems && !result.rows.length;
  const shownTotal = allItemsPending ? 'Sob orçamento' : money.format(result.total);
  const totalLabel = allItemsPending ? 'Valor do serviço' : hasPendingItems ? 'Subtotal · pode mudar' : step ? 'Itens selecionados' : 'Total do serviço';
  const maxContentPages = commercialPages(estimate.structure) || contentPageLimit;
  const singlePage = estimate.structure === '1';
  const titles = ['Qual é a estrutura do seu site?', singlePage ? 'Como o visitante entra em contato nessa página?' : 'Como o visitante entra em contato no site?',
    'Quem prepara os textos e as imagens?', 'Onde você quer publicar?'];

  function select(key: typeof steps[number]['key'], value: string) {
    setEstimate(current => {
      const updated = {...current, [key]: value};
      if (key === 'structure' && value !== current.structure) updated.contentPages = commercialPages(value) || 1;
      if (key === 'contact' && value !== current.contact) updated.contactDetail = '';
      if (!publicationFor(updated).options.some(option => option.id === updated.hosting)) updated.hosting = '';
      return updated;
    });
  }

  function goTo(next: number) {
    setIndex(next);
    requestAnimationFrame(() => heading.current?.focus());
  }

  const change = (value: string) => { if (step) select(step.key, value); };
  return <section id={estimateId} className="rd-estimate" aria-labelledby="site-estimate-heading" tabIndex={-1}>
    <div className="rd-estimate-top">
      <div>
        <p className="rd-estimate-name">Simulador de sites</p>
        <p className="rd-estimate-step">{step ? `Etapa ${index+1} de ${steps.length} · ${step.label}` : 'Resumo do orçamento'}</p>
      </div>
      <p className="rd-estimate-total" role="status"><small>{totalLabel}</small><strong>{shownTotal}</strong></p>
    </div>
    <progress aria-label="Progresso da simulação" max={steps.length} value={Math.min(index+1,steps.length)} />
    <h2 id="site-estimate-heading" tabIndex={-1} ref={heading}>{step ? titles[index] : 'Seu orçamento de site'}</h2>

    {step?.key === 'structure' && <>
      <div className="rd-estimate-options rd-estimate-pages" role="radiogroup" aria-labelledby="site-estimate-heading">
        <Choices field={step.key} options={pageOptions} value={estimate.structure} onChange={change} />
      </div>
      <details className="rd-estimate-details" open={specialProjects.some(({id})=>id===estimate.structure) || undefined}>
        <summary>WordPress ou loja virtual</summary>
        <div className="rd-estimate-options" role="radiogroup" aria-label="Estruturas em WordPress e lojas">
          <Choices field={step.key} options={specialProjects} value={estimate.structure} onChange={change} />
        </div>
      </details>
    </>}

    {step?.key === 'contact' && <>
      <div className="rd-estimate-options" role="radiogroup" aria-labelledby="site-estimate-heading">
        <Choices field={step.key} options={contactOptions} value={estimate.contact} onChange={change} />
      </div>
      {estimate.contact && estimate.contact !== 'whatsapp' && <>
        <label className="rd-estimate-field">Qual plataforma ou integração? (opcional)
          <input type="text" value={estimate.contactDetail} maxLength={180} placeholder="Ex.: HubSpot ou agendamento"
            onChange={event=>setEstimate(current=>({...current, contactDetail:event.target.value}))} />
        </label>
        <p className="rd-estimate-note">Mensalidades de ferramentas ficam por conta do cliente, quando houver.</p>
      </>}
    </>}

    {step?.key === 'materials' && <>
      <div className="rd-estimate-options" role="radiogroup" aria-labelledby="site-estimate-heading">
        <Choices field={step.key} options={materialOptions} value={estimate.materials} onChange={change} />
      </div>
      {estimate.materials === 'ravyt' && <>
        {maxContentPages === 1 ? <p className="rd-estimate-note">Produção para 1 página.</p> :
          <label className="rd-estimate-field">Quantas páginas precisam de textos e imagens?
            <select value={result.contentCount} onChange={event=>setEstimate(current=>({...current,contentPages:Number(event.target.value)}))}>
              {Array.from({length:maxContentPages},(_,i)=><option key={i+1} value={i+1}>{pagesLabel(i+1)}</option>)}
            </select>
          </label>}
        <p className="rd-estimate-note">A cobrança considera páginas comerciais com conteúdo próprio. Artigos e cadastros de produtos são orçados à parte.</p>
      </>}
    </>}

    {step?.key === 'hosting' && <>
      <p className="rd-estimate-note">{publicationFee} {publication.help}</p>
      <div className="rd-estimate-options" role="radiogroup" aria-labelledby="site-estimate-heading">
        <Choices field={step.key} options={publication.options} value={estimate.hosting} onChange={change} />
      </div>
    </>}

    {!step && <>
      <p className="rd-estimate-note">{result.structure} · {result.contact}{estimate.contactDetail ? ' ('+estimate.contactDetail.trim()+')' : ''}</p>
      {result.rows.length > 0 && <dl className="rd-estimate-breakdown">{result.rows.map(({label,amount})=>
        <div key={label}><dt>{label}</dt><dd>{money.format(amount)}</dd></div>)}</dl>}
      {hasPendingItems ? <>
        <p className="rd-estimate-note"><strong>Itens a orçar.</strong> {result.pending.join(', ')}.</p>
        <p className="rd-estimate-note"><strong>{allItemsPending ? pendingNotice : partialNotice}</strong></p>
      </> : <p className="rd-estimate-note"><strong>{fixedNotice}</strong></p>}
      <p className="rd-estimate-note"><strong>Textos e imagens.</strong> {result.materials}</p>
      <p className="rd-estimate-note"><strong>Incluído na criação.</strong> {legalItems}.</p>
      <p className="rd-estimate-note"><strong>Ajustes antes da aprovação.</strong> {revisionPolicy}</p>
      <p className="rd-estimate-note"><strong>Publicação.</strong> {result.hosting} {publicationFee}</p>
      <p className="rd-estimate-note">{thirdPartyNotice}</p>
      <div className="rd-estimate-controls">
        <button type="button" className="rd-estimate-back" onClick={()=>goTo(steps.length-1)}>Editar</button>
        <a className="rv-button" href={estimateWhatsApp(estimate)} target="_blank" rel="noopener noreferrer"
          data-contact-cta>Abrir resumo no WhatsApp <span className="rd-arrow rd-arrow-up" aria-hidden="true" /></a>
      </div>
      <p className="rd-estimate-note">O WhatsApp abre com o resumo preenchido para você enviar à Ravyt.</p>
    </>}

    {step && <div className="rd-estimate-controls">
      {index > 0 && <button type="button" className="rd-estimate-back" onClick={()=>goTo(index-1)}>Voltar</button>}
      <button type="button" className="rv-button" disabled={!estimate[step.key]} onClick={()=>goTo(index+1)}>
        {index === steps.length-1 ? 'Ver orçamento' : 'Continuar'} <span className="rd-arrow rd-arrow-up" aria-hidden="true" />
      </button>
    </div>}
    {step?.key === 'structure' && <p className="rd-estimate-note">Quer criar um aplicativo? <a href={quoteHref('aplicativo')}>Descreva seu projeto</a>.</p>}
    <noscript><p className="rd-estimate-note">Para sites, <a href={quoteHref('site')}>descreva seu projeto pelo formulário</a>.</p></noscript>
  </section>;
}
