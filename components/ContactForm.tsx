'use client';
import {useRef,useState,type FormEvent} from 'react';
import HCaptcha,{type CaptchaHandle} from './HCaptcha';
import {readUtms} from '@/lib/utm';
import {contactErrors,formatPhone,leadFields,submitLead,type DiagnosticResult} from '@/lib/diagnostic.mjs';
export default function ContactForm({answers,result}:{answers:number[];result:DiagnosticResult}){
 const formRef=useRef<HTMLFormElement>(null),sending=useRef(false),captchaToken=useRef(''),captcha=useRef<CaptchaHandle>(null);
 const [phone,setPhone]=useState(''),[errors,setErrors]=useState<Partial<Record<'name'|'phone'|'consent'|'captcha',string>>>({}),[status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle');
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();if(sending.current)return;
  const form=event.currentTarget,values=new FormData(form);
  if(values.get('botcheck'))return;
  const contact={name:String(values.get('name')||''),phone,profile:String(values.get('profile')||'')};
  const next:Partial<Record<'name'|'phone'|'consent'|'captcha',string>>=contactErrors({...contact,consent:values.get('consent')==='on'});if(!captchaToken.current)next.captcha='Conclua a verificação de segurança antes de enviar.';setErrors(next);
  const first=Object.keys(next)[0];if(first){form.querySelector<HTMLElement>(first==='captcha'?'[data-captcha-focus]':`[name="${first}"]`)?.focus();return;}
  sending.current=true;setStatus('sending');
  try{await submitLead({...leadFields(answers,result,contact,readUtms()),'h-captcha-response':captchaToken.current});setStatus('success');window.dispatchEvent(new CustomEvent('ravyt:lead'));}
  catch{setStatus('error');}finally{captchaToken.current='';captcha.current?.reset();sending.current=false;}
 }
 if(status==='success')return <section className="dg-success" role="status" aria-live="polite"><span className="dg-success-icon" aria-hidden="true">✓</span><h2>Sua solicitação foi enviada!</h2><p>Recebemos suas informações. A equipe da Ravyt poderá entrar em contato pelo WhatsApp informado para conversar sobre seu projeto.</p></section>;
 return <section className="dg-contact" aria-labelledby="contact-title"><p className="dg-eyebrow">Próximo passo</p><h2 id="contact-title">Solicite um contato de <em>Ytala Cabral.</em></h2><p>Agora que conhecemos um pouco mais sobre o seu trabalho, você pode solicitar uma conversa para entender quais melhorias fazem sentido para sua presença digital.</p>
 <form ref={formRef} id="contato-form" action="https://api.web3forms.com/submit" method="POST" onSubmit={submit} noValidate>
 <input type="hidden" name="access_key" value="12456711-3ce4-4bee-bdf2-30d72e95328c"/><input type="hidden" name="subject" value="Novo Diagnóstico Ravyt | Tianguá"/><input type="hidden" name="from_name" value="Diagnóstico Ravyt Digital"/><input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" className="dg-honeypot"/>
 <fieldset disabled={status==='sending'}><legend className="sr-only">Seus dados de contato</legend>
 <div className="dg-fields"><div><label htmlFor="lead-name">Nome <span>(obrigatório)</span></label><input id="lead-name" name="name" autoComplete="name" required maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name?'name-error':undefined} onChange={()=>setErrors(e=>({...e,name:undefined}))}/>{errors.name&&<p className="dg-error" id="name-error">{errors.name}</p>}</div>
 <div><label htmlFor="lead-phone">WhatsApp <span>(obrigatório)</span></label><input id="lead-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel-national" placeholder="(88) 99999-9999" required maxLength={15} value={phone} onChange={e=>{setPhone(formatPhone(e.target.value));setErrors(v=>({...v,phone:undefined}));}} aria-invalid={!!errors.phone} aria-describedby={errors.phone?'phone-help phone-error':'phone-help'}/><small id="phone-help">Informe um celular brasileiro com DDD.</small>{errors.phone&&<p className="dg-error" id="phone-error">{errors.phone}</p>}</div>
 <div className="dg-field-wide"><label htmlFor="lead-profile">Site ou rede social profissional <span>(opcional)</span></label><input id="lead-profile" name="profile" type="text" maxLength={250} placeholder="https://seusite.com.br ou @seuperfil" autoCapitalize="none" spellCheck={false}/></div></div>
 <label className="dg-consent"><input name="consent" type="checkbox" required aria-invalid={!!errors.consent} aria-describedby={errors.consent?'consent-error':undefined} onChange={()=>setErrors(e=>({...e,consent:undefined}))}/><span>Autorizo a Ravyt Digital a utilizar os dados informados para responder à minha solicitação e entrar em contato sobre os serviços apresentados, conforme a <a href="#privacidade">Política de Privacidade</a>.</span></label>
 {errors.consent&&<p className="dg-error" id="consent-error">{errors.consent}</p>}
 <HCaptcha ref={captcha} onToken={token=>{captchaToken.current=token;setErrors(e=>({...e,captcha:undefined}));}}/>{errors.captcha&&<p className="dg-error" role="alert">{errors.captcha}</p>}
 <button className="dg-button" type="submit">{status==='sending'?'Enviando solicitação…':'Solicitar contato de Ytala'}<span aria-hidden="true">↗</span></button>
 </fieldset><div role="status" aria-live="polite">{status==='error'&&<p className="dg-error dg-send-error">Não foi possível enviar sua solicitação agora. Suas respostas foram mantidas. Tente novamente em alguns instantes.</p>}</div>
 <p className="dg-form-note">Seus dados são enviados somente ao solicitar contato. Não envie senhas ou informações sensíveis.</p>
 </form></section>;
}
