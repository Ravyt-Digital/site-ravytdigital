'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { readUtms, utmNames, type UtmName } from '@/lib/utm';

const services = ['Google', 'SEO', 'Criação de Sites'] as const;
type Field = 'name' | 'email' | 'phone' | 'message' | 'services';
type Errors = Partial<Record<Field, string>>;
type Feedback = 'idle' | 'sending' | 'success' | 'error';
const emptyUtms = Object.fromEntries(utmNames.map(name => [name, ''])) as Record<UtmName, string>;

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const sendingRef = useRef(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [feedback, setFeedback] = useState<Feedback>('idle');
  const [utm, setUtm] = useState(emptyUtms);
  const [origin, setOrigin] = useState({ page_url: '', referrer: '' });

  useEffect(() => {
    setUtm(readUtms());
    setOrigin({ page_url: window.location.href, referrer: document.referrer });
  }, []);

  function toggleService(service: string) {
    setSelected(previous => previous.includes(service) ? previous.filter(item => item !== service) : [...previous, service]);
    setErrors(previous => ({ ...previous, services: undefined }));
    if (feedback !== 'sending') setFeedback('idle');
  }

  function clearError(field: Field) {
    if (errors[field]) setErrors(previous => ({ ...previous, [field]: undefined }));
    if (feedback === 'error') setFeedback('idle');
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sendingRef.current) return;
    const form = event.currentTarget;
    const values = new FormData(form);
    const name = String(values.get('name') || '').trim();
    const email = String(values.get('email') || '').trim();
    const phone = String(values.get('phone') || '').trim();
    const message = String(values.get('message') || '').trim();
    const next: Errors = {};
    if (!name) next.name = 'Informe seu nome.';
    if (!email) next.email = 'Informe seu e-mail.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Informe um e-mail válido.';
    if (!phone) next.phone = 'Informe seu WhatsApp.';
    if (!selected.length) next.services = 'Selecione pelo menos um serviço.';
    if (!message) next.message = 'Conte um pouco sobre seu projeto.';
    setErrors(next);
    setFeedback('idle');
    const first = (Object.keys(next) as Field[])[0];
    if (first) {
      const selector = first === 'services' ? 'input[name="services[]"]' : `[name="${first}"]`;
      form.querySelector<HTMLElement>(selector)?.focus();
      return;
    }

    values.set('name', name);
    values.set('email', email);
    values.set('phone', phone);
    values.set('message', message);
    // Web3Forms expects a comma-separated value for multiple checkboxes in AJAX submissions.
    values.set('services[]', selected.join(', '));
    const currentUtms = readUtms();
    setUtm(currentUtms);
    for (const key of utmNames) values.set(key, currentUtms[key]);
    values.set('page_url', window.location.href);
    values.set('referrer', document.referrer);

    sendingRef.current = true;
    setFeedback('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: values });
      const result = await response.json();
      if (!response.ok || result?.success !== true) throw new Error('Submission failed');
      formRef.current?.reset();
      setSelected([]);
      setErrors({});
      setFeedback('success');
    } catch {
      setFeedback('error');
    } finally {
      sendingRef.current = false;
    }
  }

  return <form ref={formRef} id="contato-form" className="rv-contact-form" action="https://api.web3forms.com/submit" method="POST" onSubmit={submit} noValidate>
    <input type="hidden" name="access_key" value="12456711-3ce4-4bee-bdf2-30d72e95328c" />
    <input type="hidden" name="subject" value="Novo lead pelo site da Ravyt Digital" />
    {utmNames.map(key => <input key={key} type="hidden" name={key} value={utm[key]} readOnly />)}
    <input type="hidden" name="page_url" value={origin.page_url} readOnly />
    <input type="hidden" name="referrer" value={origin.referrer} readOnly />
    <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" className="rv-honeypot" />
    <div className="rv-contact-fields">
      <div className="rv-contact-field"><label htmlFor="contact-name">Nome <span aria-hidden="true">*</span></label><input id="contact-name" name="name" type="text" autoComplete="name" maxLength={100} required aria-invalid={!!errors.name} aria-describedby={errors.name ? 'contact-name-error' : undefined} onChange={() => clearError('name')} />{errors.name && <span className="rv-contact-error" id="contact-name-error">{errors.name}</span>}</div>
      <div className="rv-contact-field"><label htmlFor="contact-company">Empresa</label><input id="contact-company" name="company" type="text" autoComplete="organization" maxLength={150} /></div>
      <div className="rv-contact-field"><label htmlFor="contact-email">E-mail <span aria-hidden="true">*</span></label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={150} required aria-invalid={!!errors.email} aria-describedby={errors.email ? 'contact-email-error' : undefined} onChange={() => clearError('email')} />{errors.email && <span className="rv-contact-error" id="contact-email-error">{errors.email}</span>}</div>
      <div className="rv-contact-field"><label htmlFor="contact-phone">WhatsApp <span aria-hidden="true">*</span></label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} required aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'contact-phone-error' : undefined} onChange={() => clearError('phone')} />{errors.phone && <span className="rv-contact-error" id="contact-phone-error">{errors.phone}</span>}</div>
    </div>
    <fieldset className="rv-contact-services" aria-invalid={!!errors.services} aria-describedby={errors.services ? 'contact-services-error' : undefined}>
      <legend>Quais serviços você procura? <span aria-hidden="true">*</span></legend>
      <div className="rv-contact-options">{services.map(service => <label className="rv-contact-option" key={service}><input type="checkbox" name="services[]" value={service} checked={selected.includes(service)} onChange={() => toggleService(service)} /><span className="rv-contact-check" aria-hidden="true">✓</span><span>{service}</span></label>)}</div>
      {errors.services && <span className="rv-contact-error" id="contact-services-error">{errors.services}</span>}
    </fieldset>
    <div className="rv-contact-field rv-contact-message"><label htmlFor="contact-message">Conte um pouco sobre seu projeto <span aria-hidden="true">*</span></label><textarea id="contact-message" name="message" rows={6} required maxLength={4000} placeholder="Explique brevemente o que você precisa, seus objetivos ou qualquer informação que possa nos ajudar a entender melhor seu projeto." aria-invalid={!!errors.message} aria-describedby={errors.message ? 'contact-message-error' : undefined} onChange={() => clearError('message')} />{errors.message && <span className="rv-contact-error" id="contact-message-error">{errors.message}</span>}</div>
    <button className="rv-button rv-contact-submit" type="submit" disabled={feedback === 'sending'}>{feedback === 'sending' ? 'Enviando...' : 'Enviar mensagem'} <span aria-hidden="true">↗</span></button>
    <div className="rv-contact-feedback" role="status" aria-live="polite" aria-atomic="true">{feedback === 'success' && <div className="rv-contact-success"><strong>Mensagem enviada com sucesso.</strong><p>Recebemos seus dados e entraremos em contato em breve.</p></div>}{feedback === 'error' && <p className="rv-contact-failure">Não foi possível enviar sua mensagem agora. Tente novamente em alguns instantes.</p>}</div>
    <p className="rv-contact-consent">Ao enviar este formulário, você concorda que a Ravyt Digital utilize os dados informados para entrar em contato sobre sua solicitação. Consulte a <Link href="/politica-de-privacidade">Política de Privacidade</Link>.</p>
  </form>;
}
