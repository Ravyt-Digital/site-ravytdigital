'use client';


import {PriceText} from "@/components/i18n/Regional";
import Link from 'next/link';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { readUtms, utmNames, type UtmName } from '@/lib/utm';

const services = ['Google', 'SEO', "Website Creation"] as const;
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
    if (!name) next.name = "Enter your name.";
    if (!email) next.email = "Enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email.";
    if (!phone) next.phone = "Enter your WhatsApp number.";
    if (!selected.length) next.services = "Select at least one service.";
    if (!message) next.message = "Tell us a little about your project.";
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
    // Keep campaign attribution when present; omit empty fields from the email.
    for (const key of utmNames) {
      if (currentUtms[key]) values.set(key, currentUtms[key]);
      else values.delete(key);
    }
    values.set('page_url', window.location.href);
    values.set('referrer', document.referrer);

    sendingRef.current = true;
    setFeedback('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: values });
      const result = await response.json() as { success?: boolean };
      if (!response.ok || result?.success !== true) throw new Error('Submission failed');
      formRef.current?.reset();
      setSelected([]);
      setErrors({});
      setFeedback('success');
      window.dispatchEvent(new CustomEvent('ravyt:lead'));
    } catch {
      setFeedback('error');
    } finally {
      sendingRef.current = false;
    }
  }

  return <form ref={formRef} id="contato-form" className="rv-contact-form" action="https://api.web3forms.com/submit" method="POST" onSubmit={submit} noValidate>
    <input type="hidden" name="access_key" value="12456711-3ce4-4bee-bdf2-30d72e95328c" />
    <input type="hidden" name="subject" value="New lead from the Ravyt Digital website" />
    {<PriceText>{utmNames.map(key => <input key={key} type="hidden" name={key} value={utm[key]} readOnly />)}</PriceText>}
    <input type="hidden" name="page_url" value={origin.page_url} readOnly />
    <input type="hidden" name="referrer" value={origin.referrer} readOnly />
    <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" className="rv-honeypot" />
    <div className="rv-contact-fields">
      <div className="rv-contact-field"><label htmlFor="contact-name"> Name <span aria-hidden="true">*</span></label><input id="contact-name" name="name" type="text" autoComplete="name" maxLength={100} required aria-invalid={!!errors.name} aria-describedby={errors.name ? 'contact-name-error' : undefined} onChange={() => clearError('name')} />{<PriceText>{errors.name && <span className="rv-contact-error" id="contact-name-error">{<PriceText>{errors.name}</PriceText>}</span>}</PriceText>}</div>
      <div className="rv-contact-field"><label htmlFor="contact-company"> Company </label><input id="contact-company" name="company" type="text" autoComplete="organization" maxLength={150} /></div>
      <div className="rv-contact-field"><label htmlFor="contact-email">E-mail <span aria-hidden="true">*</span></label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={150} required aria-invalid={!!errors.email} aria-describedby={errors.email ? 'contact-email-error' : undefined} onChange={() => clearError('email')} />{<PriceText>{errors.email && <span className="rv-contact-error" id="contact-email-error">{<PriceText>{errors.email}</PriceText>}</span>}</PriceText>}</div>
      <div className="rv-contact-field"><label htmlFor="contact-phone">WhatsApp <span aria-hidden="true">*</span></label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} required aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'contact-phone-error' : undefined} onChange={() => clearError('phone')} />{<PriceText>{errors.phone && <span className="rv-contact-error" id="contact-phone-error">{<PriceText>{errors.phone}</PriceText>}</span>}</PriceText>}</div>
    </div>
    <fieldset className="rv-contact-services" aria-invalid={!!errors.services} aria-describedby={errors.services ? 'contact-services-error' : undefined}>
      <legend> Which services are you looking for? <span aria-hidden="true">*</span></legend>
      <div className="rv-contact-options">{<PriceText>{services.map(service => <label className="rv-contact-option" key={service}><input type="checkbox" name="services[]" value={service} checked={selected.includes(service)} onChange={() => toggleService(service)} /><span className="rv-contact-check" aria-hidden="true">✓</span><span>{<PriceText>{service}</PriceText>}</span></label>)}</PriceText>}</div>
      {<PriceText>{errors.services && <span className="rv-contact-error" id="contact-services-error">{<PriceText>{errors.services}</PriceText>}</span>}</PriceText>}
    </fieldset>
    <div className="rv-contact-field rv-contact-message"><label htmlFor="contact-message"> Tell us a little about your project <span aria-hidden="true">*</span></label><textarea id="contact-message" name="message" rows={6} required maxLength={4000} placeholder="Briefly explain what you need, your goals or any information that can help us understand your project better." aria-invalid={!!errors.message} aria-describedby={errors.message ? 'contact-message-error' : undefined} onChange={() => clearError('message')} />{<PriceText>{errors.message && <span className="rv-contact-error" id="contact-message-error">{<PriceText>{errors.message}</PriceText>}</span>}</PriceText>}</div>
    <button className="rv-button rv-contact-submit" type="submit" disabled={feedback === 'sending'}>{<PriceText>{feedback === 'sending' ? 'Enviando...' : "Send message"}</PriceText>} <span aria-hidden="true">↗</span></button>
    <div className="rv-contact-feedback" role="status" aria-live="polite" aria-atomic="true">{<PriceText>{feedback === 'success' && <div className="rv-contact-success"><strong> Message sent successfully. </strong><p> We have received your details and will contact you soon. </p></div>}</PriceText>}{<PriceText>{feedback === 'error' && <p className="rv-contact-failure"> Your message could not be sent right now. Please try again shortly. </p>}</PriceText>}</div>
    <p className="rv-contact-consent"> By submitting this form, you agree that Ravyt Digital may use the details provided to contact you about your request. Consult the <Link href="/en/politica-de-privacidade"> Privacy Policy </Link>.</p>
  </form>;
}
