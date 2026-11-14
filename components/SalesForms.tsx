'use client';

import {useState, type FormEvent} from 'react';
import {readUtms} from '@/lib/utm';
import {readReferral} from '@/lib/referral';
import {projectTypes, type ProjectType} from '@/lib/services';
import {timingOptions} from '@/lib/site-estimate';

function signal(event: string) {
  window.dispatchEvent(new CustomEvent('ravyt:sales-event', {detail: event}));
}

const submitError = 'O envio falhou. Tente novamente.';
const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign'] as const;
export function ProposalForm({kind = 'proposta', initialType, segment, appBrief = false}: {
  kind?: 'proposta' | 'parceria'; initialType?: ProjectType; segment?: string; appBrief?: boolean;
}) {
  const partner = kind === 'parceria';
  const [pending, setPending] = useState(false);
  const [receipt, setReceipt] = useState('');
  const [error, setError] = useState('');
  const [requestId, setRequestId] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    const referral = readReferral();
    const {timing, ...answers} = fields;
    const description = appBrief && typeof timing === 'string' && timing ?
      answers.description + '\\n\\nPrazo desejado: ' + timing : answers.description;
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
        body: JSON.stringify({...answers, description, kind, segment, referral, campaign, requestId: id}),
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

  return <form className={appBrief ? 'rd-proposal-form rd-app-brief' : 'rd-form-box rd-proposal-form'} onSubmit={submit}>
    <div className="rd-fields">
      {appBrief && <label className="rd-wide">Quem vai usar o aplicativo e para quê?
        <textarea name="description" required minLength={10} maxLength={1100} rows={3}
          placeholder="Ex.: meus clientes precisam agendar e acompanhar o atendimento pelo celular." />
      </label>}
      <label>Seu nome<input name="name" autoComplete="name" required maxLength={100} /></label>
      <label>{partner ? 'Empresa ou atividade (opcional)' : appBrief ? 'Empresa ou atividade' : 'Nome da empresa'}<input name="business" autoComplete="organization" required={!partner} maxLength={140} /></label>
      <label>WhatsApp com DDD ou e-mail<input name="contact" autoComplete="on" required maxLength={160} /></label>
      {appBrief && <>
        <input type="hidden" name="projectType" value="aplicativo" />
        <label>Quando você precisa? (opcional)
          <select name="timing"><option value="">Selecione, se já souber</option>
            {timingOptions.map(option => <option key={option}>{option}</option>)}
          </select>
        </label>
      </>}
      {!partner && !appBrief && <label>Tipo de projeto
        <select name="projectType" defaultValue={initialType ?? ''} required>
          <option value="" disabled>Selecione</option>
          {projectTypes.map(type => <option key={type.id} value={type.id}>{type.label}</option>)}
        </select>
      </label>}
      {!appBrief && <label className="rd-wide">{partner ? 'Como você pretende indicar a Ravyt?' : 'O que você precisa no seu projeto?'}
        <textarea name="description" required minLength={10} maxLength={1200} rows={4}
          placeholder={partner ? 'Conte um pouco sobre sua atividade e as empresas com que você trabalha.' :
            'Conte quem vai usar e o que precisa funcionar. Se já tem um site ou aplicativo, inclua o endereço.'} />
      </label>}
    </div>
    <div hidden aria-hidden="true"><label>Preencha apenas se for um robô<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <label className="rd-privacy-check"><input type="checkbox" name="consent" value="sim" required />
      <span>Autorizo a Ravyt a usar esses dados para responder à minha solicitação. Leia a <a href="#privacidade">Política de Privacidade</a>.</span>
    </label>
    {error && <p className="rd-error" role="alert">{error}</p>}
    <button className="rv-button" disabled={pending} type="submit">{pending ? 'Enviando…' : partner ? 'Enviar interesse em parceria' : 'Enviar pedido de orçamento'} <span className="rd-arrow rd-arrow-up" aria-hidden="true" /></button>
  </form>;
}
