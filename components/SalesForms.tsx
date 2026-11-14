'use client';

import {useState, type FormEvent} from 'react';
import {commercialWhatsApp} from '@/lib/home-content';
import {readUtms} from '@/lib/utm';
import {plans, questions, recommendPlan, type PlanId} from '@/lib/plans';

function signal(event: string) {
  window.dispatchEvent(new CustomEvent('ravyt:sales-event', {detail: event}));
}

export function PlanAdvisor() {
  const [result, setResult] = useState<{plan: typeof plans[number]; summary: string}>();
  const [copied, setCopied] = useState(false);

  function recommend(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const answers = questions.map((_, i) => Number(data.get('question-' + i)));
    const plan = recommendPlan(answers);
    const summary = questions.map((question, i) => question.options[answers[i]]).join('\n');
    setCopied(false);
    setResult({plan, summary});
    signal('diagnostic_complete');
  }

  return <div className="rd-form-box">
    <form onSubmit={recommend}>
      <div className="rd-fields">
        {questions.map((question, index) => <label key={question.label}>{question.label}
          <select name={'question-' + index} required defaultValue="" onChange={() => setResult(undefined)}>
            <option value="" disabled>Selecione</option>
            {question.options.map((option, i) => <option value={i} key={option}>{option}</option>)}
          </select>
        </label>)}
      </div>
      <button className="rv-button" type="submit">Ver recomendação <span aria-hidden="true">↗</span></button>
    </form>
    {result && <div className="rd-result">
      <div role="status"><p>Recomendação inicial</p><h3>{result.plan.name} · {result.plan.priceNote === 'a partir de' && 'a partir de '}{result.plan.price}</h3>
        <p>{result.plan.description}</p></div>
      <div className="rd-actions">
        <a className="rv-button" href={'/proposta?plano=' + result.plan.id} onClick={() => signal('diagnostic_contact_request')}>Solicitar proposta</a>
        <a className="rv-text-link" href={commercialWhatsApp('Olá! O consultor indicou o ' + result.plan.name + '.\n' + result.summary)}>Conversar no WhatsApp ↗</a>
        <button type="button" className="rd-link-button" onClick={async () => {
          try {
            await navigator.clipboard.writeText(result.plan.name + '\n' + result.summary);
            setCopied(true);
          } catch {
            setCopied(false);
          }
        }}>{copied ? 'Resumo copiado' : 'Copiar resumo'}</button>
      </div>
    </div>}
  </div>;
}

const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign'] as const;
const referralKey = 'ravyt-referral';
const idPattern = /^[a-zA-Z0-9_-]{3,40}$/;

export function rememberReferral() {
  const code = new URLSearchParams(location.search).get('ref');
  if (code && idPattern.test(code)) {
    try { sessionStorage.setItem(referralKey, code); } catch {}
  }
}

export function ProposalForm({kind = 'proposta', initialPlan, segment}: {kind?: 'proposta' | 'parceria'; initialPlan?: PlanId | 'google'; segment?: string}) {
  const partner = kind === 'parceria';
  const [pending, setPending] = useState(false);
  const [receipt, setReceipt] = useState('');
  const [error, setError] = useState('');
  const [requestId, setRequestId] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    const query = new URLSearchParams(location.search);
    const directRef = query.get('ref');
    let storedRef = '';
    try {
      storedRef = sessionStorage.getItem(referralKey) ?? '';
    } catch {}
    const referral = directRef && idPattern.test(directRef) ? directRef : storedRef;
    const utms = readUtms();
    const campaign = Object.fromEntries(campaignKeys.map(key => [key, utms[key]]));
    const id = requestId || crypto.randomUUID();
    setRequestId(id);
    setPending(true);
    setError('');
    try {
      const response = await fetch('/api/propostas', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...fields, kind, segment, referral, campaign, requestId: id}),
        signal: AbortSignal.timeout(15000),
      });
      const reply = await response.json() as {reference?: string; error?: string};
      if (!response.ok || !reply.reference) throw new Error(reply.error || 'O envio falhou. Tente novamente ou use o WhatsApp.');
      setReceipt(reply.reference);
      if (!partner) signal('form_submit');
    } catch (failure) {
      setError(failure instanceof Error && failure.message.includes('fetch')
        ? 'O envio falhou. Tente novamente ou use o WhatsApp.'
        : failure instanceof Error && !['TimeoutError', 'SyntaxError'].includes(failure.name)
          ? failure.message : 'O envio falhou. Tente novamente ou use o WhatsApp.');
    } finally {
      setPending(false);
    }
  }

  if (receipt) return <div className="rd-form-box rd-result" role="status">
    <h2>{partner ? 'Interesse em parceria recebido' : 'Solicitação recebida'}</h2>
    <p>Protocolo <strong>{receipt}</strong>. A equipe vai analisar as informações e retornar pelo contato informado.</p>
  </div>;

  return <form className="rd-form-box rd-proposal-form" onSubmit={submit}>
    <div className="rd-fields">
      <label>Seu nome<input name="name" autoComplete="name" required maxLength={100} /></label>
      <label>{partner ? 'Empresa ou atividade (opcional)' : 'Nome da empresa'}<input name="business" autoComplete="organization" required={!partner} maxLength={140} /></label>
      <label>WhatsApp com DDD ou e-mail<input name="contact" autoComplete="on" required maxLength={160} /></label>
      {!partner && <label>Em que podemos ajudar?
        <select name="plan" defaultValue={initialPlan ?? 'nao-sei'} required>
          {plans.map(plan => <option key={plan.id} value={plan.id}>{plan.name}</option>)}
          <option value="google">Perfil da Empresa no Google</option><option value="nao-sei">Preciso de orientação</option>
        </select>
      </label>}
      <label className="rd-wide">{partner ? 'Como você pretende indicar a Ravyt?' : 'O que você precisa no seu projeto?'}
        <textarea name="description" required minLength={10} maxLength={1200} rows={4} placeholder={partner ? 'Conte um pouco sobre sua atividade e as empresas com que você trabalha.' : 'Conte o que sua empresa oferece e o que o site precisa resolver.'} />
      </label>
    </div>
    <div hidden aria-hidden="true"><label>Preencha apenas se for um robô<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <label className="rd-privacy-check"><input type="checkbox" name="consent" value="sim" required />
      <span>Autorizo a Ravyt a usar esses dados para responder à minha solicitação. Leia a <a href="#privacidade">Política de Privacidade</a>.</span>
    </label>
    {error && <p className="rd-error" role="alert">{error}</p>}
    <button className="rv-button" disabled={pending} type="submit">{pending ? 'Enviando…' : partner ? 'Enviar interesse em parceria' : 'Enviar pedido de proposta'} <span aria-hidden="true">↗</span></button>
  </form>;
}
