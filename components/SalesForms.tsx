'use client';

import {useState, type FormEvent} from 'react';
import {readUtms} from '@/lib/utm';
import {projectTypes, type ProjectType} from '@/lib/services';

function signal(event: string) {
  window.dispatchEvent(new CustomEvent('ravyt:sales-event', {detail: event}));
}

const submitError = 'O envio falhou. Tente novamente.';
const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign'] as const;
const referralKey = 'ravyt-referral';
const idPattern = /^[a-zA-Z0-9_-]{3,40}$/;

export function rememberReferral() {
  const code = new URLSearchParams(location.search).get('ref');
  if (code && idPattern.test(code)) {
    try { sessionStorage.setItem(referralKey, code); } catch {}
  }
}

export function ProposalForm({kind = 'proposta', initialType, segment}: {kind?: 'proposta' | 'parceria'; initialType?: ProjectType; segment?: string}) {
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
      if (!response.ok || !reply.reference) throw new Error(reply.error || submitError);
      setReceipt(reply.reference);
      if (!partner) signal('form_submit');
    } catch (failure) {
      setError(failure instanceof Error && !['TypeError', 'TimeoutError', 'SyntaxError'].includes(failure.name)
        ? failure.message : submitError);
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
      {!partner && <label>Tipo de projeto
        <select name="projectType" defaultValue={initialType ?? ''} required>
          <option value="" disabled>Selecione</option>
          {projectTypes.map(type => <option key={type.id} value={type.id}>{type.label}</option>)}
        </select>
      </label>}
      <label className="rd-wide">{partner ? 'Como você pretende indicar a Ravyt?' : 'O que você precisa no seu projeto?'}
        <textarea name="description" required minLength={10} maxLength={1200} rows={4} placeholder={partner ? 'Conte um pouco sobre sua atividade e as empresas com que você trabalha.' : 'Conte quem vai usar e o que precisa funcionar. Se já tem um site ou aplicativo, inclua o endereço.'} />
      </label>
    </div>
    <div hidden aria-hidden="true"><label>Preencha apenas se for um robô<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <label className="rd-privacy-check"><input type="checkbox" name="consent" value="sim" required />
      <span>Autorizo a Ravyt a usar esses dados para responder à minha solicitação. Leia a <a href="#privacidade">Política de Privacidade</a>.</span>
    </label>
    {error && <p className="rd-error" role="alert">{error}</p>}
    <button className="rv-button" disabled={pending} type="submit">{pending ? 'Enviando…' : partner ? 'Enviar interesse em parceria' : 'Enviar pedido de orçamento'} <span className="rd-arrow rd-arrow-up" aria-hidden="true" /></button>
  </form>;
}
