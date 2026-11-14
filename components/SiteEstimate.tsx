"use client";

import {useEffect, useRef, useState} from 'react';
import {estimateId, quoteHref} from '@/lib/services';
import {ProposalForm} from './SalesForms';
import {readReferral} from '@/lib/referral';
import {
  calculateEstimate, commercialPages, contactOptions, contentPageLimit, estimateSummary, estimateWhatsApp,
  fixedNotice, initialEstimate, legalItems, materialOptions, money, pageOptions, pagesLabel, partialNotice, pendingNotice,
  publicationFee, publicationFor, requiresBrief, revisionPolicy, specialProjects, termsNote, timingOptions,
  type Estimate, type Option,
} from '@/lib/site-estimate';

const steps = [
  {key:'structure', label:'Estrutura'},
  {key:'contact', label:'Contato'},
  {key:'materials', label:'Conteúdo'},
  {key:'hosting', label:'Publicação'},
] as const;

const categories = [
  {id:'site', label:'Site'},
  {id:'special', label:'Blog ou loja virtual'},
  {id:'app', label:'Aplicativo'},
] as const;
type Category = typeof categories[number]['id'];

function Choices({field, value, options, onChange}: {
  field: string; value: string; options: Option[]; onChange: (value: string) => void;
}) {
  return options.map(({id,label,detail,price}) => <label key={id} className="rd-estimate-choice">
    <input type="radio" name={'site-estimate-'+field} value={id} checked={value===id} onChange={()=>onChange(id)} />
    <span><strong>{label}</strong>{detail && <small>{detail}</small>}</span>
    {price !== undefined && <span className="rd-estimate-price">{money.format(price)}</span>}
  </label>);
}

function BriefPrompt({structure}: {structure: string}) {
  if (structure === 'store') return <>O que você vende e quantos produtos quer lançar? Se já souber, informe a plataforma e como pretende receber pagamentos e enviar os pedidos.</>;
  if (structure === 'blog-site') return <>Quais páginas da sua empresa devem acompanhar o blog? Ex.: Serviços, Portfólio e Contato.</>;
  if (structure === 'wordpress') return <>Conte o que você quer publicar e quem vai atualizar o conteúdo.</>;
  return <>Conte o que o site precisa mostrar. Se já tiver um endereço ou referência, indique aqui.</>;
}

export default function SiteEstimate({initialApp}: {initialApp: boolean}) {
  const [category,setCategory] = useState<Category>(initialApp ? 'app' : 'site');
  const [index,setIndex] = useState(0);
  const [estimate,setEstimate] = useState<Estimate>(initialEstimate);
  const [referral,setReferral] = useState('');
  const [copyStatus,setCopyStatus] = useState('');
  const [showCopyText,setShowCopyText] = useState(false);
  const [editing,setEditing] = useState(false);
  const started = useRef(false);
  const completed = useRef(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const summaryField = useRef<HTMLTextAreaElement>(null);
  const step = steps[index];
  const app = category === 'app';
  const publication = publicationFor(estimate);
  const result = calculateEstimate(estimate);
  const hasPendingItems = result.pending.length > 0;
  const allItemsPending = hasPendingItems && !result.rows.length;
  const shownTotal = !estimate.structure ? 'Escolha o tipo de site' : allItemsPending ? 'Sob orçamento' : money.format(result.total);
  const totalLabel = allItemsPending || !estimate.structure ? 'Valor do serviço' :
    hasPendingItems ? 'Subtotal · pode mudar' : step ? 'Itens selecionados' : 'Total do serviço';
  const maxContentPages = commercialPages(estimate.structure) || contentPageLimit;
  const singlePage = estimate.structure === '1';
  const titles = [
    category === 'special' ? 'O que você quer publicar?' : 'Qual é a estrutura do seu site?',
    singlePage ? 'Como o visitante entra em contato nessa página?' : 'Como o visitante entra em contato no site?',
    'Quem prepara os textos e as imagens?', 'Onde você quer publicar?',
  ];
  const summary = !app && !step ? estimateSummary(estimate) : '';
  const canReview = steps.every(({key}) => Boolean(estimate[key]));

  useEffect(() => { setReferral(readReferral()); }, []);
  useEffect(() => {
    if (!showCopyText) return;
    summaryField.current?.focus();
    summaryField.current?.select();
  }, [showCopyText]);

  function goTo(next: number) {
    if (next === steps.length && !completed.current) {
      completed.current = true;
      track('estimate_complete');
    }
    setIndex(next);
    setCopyStatus('');
    setShowCopyText(false);
    requestAnimationFrame(() => heading.current?.focus());
  }

  function changeCategory(next: Category) {
    if (next === category) return;
    const currentStructureIsSpecial = specialProjects.some(({id}) => id === estimate.structure);
    if (next !== 'app' && estimate.structure && currentStructureIsSpecial !== (next === 'special')) {
      setEstimate(current => ({...initialEstimate, timing:current.timing}));
    }
    setCategory(next);
    setIndex(0);
    setEditing(false);
    setCopyStatus('');
    setShowCopyText(false);
  }

  function select(key: typeof steps[number]['key'], value: string) {
    if (key === 'structure' && !started.current) {
      started.current = true;
      track('estimate_start');
    }
    setEstimate(current => {
      const updated = {...current, [key]: value};
      if (key === 'structure' && value !== current.structure) {
        updated.contentPages = commercialPages(value) || 1;
        updated.brief = '';
      }
      if (key === 'contact' && value !== current.contact) updated.contactDetail = '';
      if (!publicationFor(updated).options.some(option => option.id === updated.hosting)) updated.hosting = '';
      return updated;
    });
  }

  function track(event: 'estimate_start' | 'estimate_complete' | 'estimate_copy') {
    window.dispatchEvent(new CustomEvent('ravyt:sales-event', {detail:event}));
  }

  function editStep(next: number) {
    setEditing(true);
    goTo(next);
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus('Orçamento copiado.');
      track('estimate_copy');
    } catch {
      setShowCopyText(true);
      setCopyStatus('O texto está selecionado. Use a opção de copiar do seu dispositivo.');
    }
  }

  const change = (value: string) => { if (step) select(step.key, value); };
  return <section id={estimateId} className="rd-estimate" aria-labelledby="site-estimate-heading" tabIndex={-1}>
    <div className="rd-estimate-top">
      <div>
        <p className="rd-estimate-name">Simulador de orçamento</p>
        {!app && <p className="rd-estimate-step">{step ? `Etapa ${index+1} de ${steps.length} · ${step.label}` : 'Resumo do orçamento'}</p>}
      </div>
      {!app && <p className="rd-estimate-total" role="status"><small>{totalLabel}</small><strong className={!estimate.structure ? 'rd-estimate-prompt' : undefined}>{shownTotal}</strong></p>}
    </div>

    {(app || index === 0) && <fieldset className="rd-estimate-types">
      <legend>O que você quer criar?</legend>
      {categories.map(({id, label}) => <label key={id}>
        <input type="radio" name="site-estimate-category" value={id} checked={category === id} onChange={() => changeCategory(id)} />
        {label}
      </label>)}
    </fieldset>}

    {!app && <progress aria-label="Progresso da simulação" max={steps.length} value={Math.min(index+1,steps.length)} />}
    <h2 id="site-estimate-heading" tabIndex={-1} ref={heading}>{app ? 'O que o aplicativo precisa fazer?' :
      step ? titles[index] : 'Seu orçamento de site'}</h2>

    {app ? <>
      <p className="rd-estimate-note">Conte quem vai usar e qual tarefa precisa funcionar primeiro. A Ravyt avalia o escopo para preparar a proposta.</p>
      <ProposalForm appBrief />
    </> : <>
      {step?.key === 'structure' && <>
        {category === 'site' && <>
          <p className="rd-estimate-note">Uma página pode reunir até cinco seções no mesmo endereço, como Sobre, Serviços e Contato.</p>
          <details className="rd-estimate-details rd-estimate-page-guide">
            <summary>Como contar páginas e projetos do portfólio</summary>
            <p className="rd-estimate-note">Uma galeria com vários projetos pode ocupar uma única página. Se cada projeto tiver seu próprio endereço, fotos e descrição, conte cada página de projeto à parte. A Política de Privacidade e o aviso de cookies já estão incluídos.</p>
          </details>
        </>}
        <div className={'rd-estimate-options'+(category === 'site' ? ' rd-estimate-pages' : '')} role="radiogroup" aria-labelledby="site-estimate-heading">
          <Choices field={step.key} options={category === 'site' ? pageOptions : specialProjects} value={estimate.structure} onChange={change} />
        </div>
        {requiresBrief(estimate.structure) && <label className="rd-estimate-field">O que você já sabe sobre o projeto? (opcional)
          <small><BriefPrompt structure={estimate.structure} /></small>
          <textarea rows={2} maxLength={400} value={estimate.brief}
            onChange={event => setEstimate(current => ({...current, brief:event.target.value}))} />
        </label>}
      </>}

      {step?.key === 'contact' && <>
        <div className="rd-estimate-options" role="radiogroup" aria-labelledby="site-estimate-heading">
          <Choices field={step.key} options={contactOptions} value={estimate.contact} onChange={change} />
        </div>
        {['crm','other','custom'].includes(estimate.contact) && <>
          <label className="rd-estimate-field">Qual ferramenta você quer integrar? (opcional)
            <input type="text" value={estimate.contactDetail} maxLength={100} placeholder="Ex.: HubSpot ou Calendly"
              onChange={event=>setEstimate(current=>({...current, contactDetail:event.target.value}))} />
          </label>
          <p className="rd-estimate-note">A Ravyt confirma a compatibilidade. Assinaturas da ferramenta ou do conector, quando necessárias, são pagas aos fornecedores.</p>
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
          <p className="rd-estimate-note">Textos e imagens formam um pacote por página. Se você já tem fotos ou textos, a Ravyt pode aproveitar esse material na produção.</p>
        </>}
      </>}

      {step?.key === 'hosting' && <>
        <p className="rd-estimate-note">{publication.help} {publicationFee}</p>
        <div className="rd-estimate-options" role="radiogroup" aria-labelledby="site-estimate-heading">
          <Choices field={step.key} options={publication.options} value={estimate.hosting} onChange={change} />
        </div>
        <label className="rd-estimate-field">Quando você precisa do site? (opcional)
          <select value={estimate.timing} onChange={event=>setEstimate(current=>({...current,timing:event.target.value}))}>
            <option value="">Selecione, se já souber</option>
            {timingOptions.map(option => <option key={option}>{option}</option>)}
          </select>
        </label>
      </>}

      {!step && <>
        <ul className="rd-estimate-edits" aria-label="Editar escolhas do orçamento">
          <li><button type="button" className="rd-estimate-back" onClick={()=>editStep(0)}>Editar estrutura</button></li>
          <li><button type="button" className="rd-estimate-back" onClick={()=>editStep(1)}>Editar contato</button></li>
          <li><button type="button" className="rd-estimate-back" onClick={()=>editStep(2)}>Editar conteúdo</button></li>
          <li><button type="button" className="rd-estimate-back" onClick={()=>editStep(3)}>Editar publicação</button></li>
        </ul>
        <p className="rd-estimate-note">{result.structure} · {result.contact}{estimate.contactDetail.trim() ? ' ('+estimate.contactDetail.trim()+')' : ''}</p>
        {estimate.brief.trim() && <p className="rd-estimate-note rd-estimate-brief"><strong>O que você precisa.</strong> {estimate.brief.trim()}</p>}
        {estimate.timing && <p className="rd-estimate-note"><strong>Quando você precisa.</strong> {estimate.timing}.</p>}
        {result.rows.length > 0 && <dl className="rd-estimate-breakdown">{result.rows.map(({label,amount})=>
          <div key={label}><dt>{label}</dt><dd>{money.format(amount)}</dd></div>)}</dl>}
        {hasPendingItems ? <>
          <p className="rd-estimate-note"><strong>{allItemsPending ? pendingNotice : partialNotice}</strong></p>
          <ul className="rd-estimate-pending" aria-label="Itens que a Ravyt precisa analisar">{result.pending.map(item => <li key={item}>{item}</li>)}</ul>
        </> : <p className="rd-estimate-note"><strong>{fixedNotice}</strong></p>}
        <p className="rd-estimate-note"><strong>Publicação.</strong> {result.hosting} {publicationFee}</p>
        {result.providerCosts.length > 0 && <p className="rd-estimate-note"><strong>Custos de fornecedores.</strong> {result.providerCosts.join(' ')}</p>}
        <details className="rd-estimate-details">
          <summary>O que está incluído e como funciona a contratação</summary>
          <p className="rd-estimate-note"><strong>Textos e imagens.</strong> {result.materials}</p>
          <p className="rd-estimate-note">{termsNote}</p>
        </details>
        <p className="rd-estimate-note"><strong>Incluído na criação.</strong> {legalItems}. {revisionPolicy}</p>
        <div className="rd-estimate-controls">
          <button type="button" className="rd-estimate-back" onClick={copySummary}>Copiar orçamento</button>
          <a className="rv-button" href={estimateWhatsApp(summary,referral)} target="_blank" rel="noopener noreferrer"
            data-contact-cta>{hasPendingItems ? 'Pedir análise pelo WhatsApp' : 'Continuar no WhatsApp'} <span className="rd-arrow rd-arrow-up" aria-hidden="true" /></a>
        </div>
        {copyStatus && <p className="rd-estimate-note" role="status">{copyStatus}</p>}
        {showCopyText && <label className="rd-estimate-field">Resumo para copiar<textarea ref={summaryField} value={summary} rows={5} readOnly /></label>}
        <p className="rd-estimate-note">O WhatsApp abre com suas escolhas preenchidas. Você revisa a mensagem antes de enviar.</p>
      </>}

      {step && <div className="rd-estimate-controls">
        {index > 0 && <button type="button" className="rd-estimate-back" onClick={()=>goTo(index-1)}>Voltar</button>}
        <button type="button" className="rv-button" disabled={!estimate[step.key]} onClick={()=>goTo(editing && canReview ? steps.length : index+1)}>
          {index === steps.length-1 || (editing && canReview) ? 'Ver orçamento' : 'Continuar'} <span className="rd-arrow rd-arrow-up" aria-hidden="true" />
        </button>
      </div>}
    </>}
    <noscript><p className="rd-estimate-note"><a href={quoteHref()}>Descreva seu projeto pelo formulário</a>.</p></noscript>
  </section>;
}
