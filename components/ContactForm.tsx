'use client';
import {useEffect,useRef,useState} from 'react';
import {contactErrors,formatPhone,whatsappMessage,whatsappUrl,WHATSAPP_BASE,type DiagnosticAnswers,type DiagnosticResult} from '@/lib/diagnostic.mjs';
export default function ContactForm({answers,result,onBack,active=true}:{answers:DiagnosticAnswers;result:DiagnosticResult;onBack?:()=>void;active?:boolean}){
 const section=useRef<HTMLElement>(null),heading=useRef<HTMLHeadingElement>(null),locked=useRef(false),timer=useRef<ReturnType<typeof setTimeout>|null>(null),messageRef=useRef<HTMLTextAreaElement>(null);
 const [name,setName]=useState(''),[phone,setPhone]=useState(''),[profile,setProfile]=useState(''),[consent,setConsent]=useState(false);
 const [errors,setErrors]=useState<Partial<Record<'name'|'phone'|'consent',string>>>({}),[busy,setBusy]=useState(false),[prepared,setPrepared]=useState(''),[notice,setNotice]=useState('');
 useEffect(()=>{if(!active)return;heading.current?.focus({preventScroll:true});const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;section.current?.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});},[active]);
 useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current);},[]);
 // An edited answer invalidates any previously prepared message.
 useEffect(()=>{setPrepared('');setNotice('');},[answers]);
 function edited(){setPrepared('');setNotice('');}
 function openConversation(url:string){
  if(locked.current)return;
  locked.current=true;setBusy(true);
  try{
   // No personal URL is placed in an anchor, the data layer, storage, or our API.
   window.open(url,'_blank','noopener,noreferrer');
   window.dispatchEvent(new CustomEvent('ravyt:diagnostic-whatsapp-click'));
   setNotice('Tentamos abrir o WhatsApp. Revise e envie a mensagem por lá. Se a conversa não abriu ou ficou sem o texto, use as opções abaixo.');
  }catch{setNotice('Não foi possível abrir o WhatsApp. Você pode copiar a mensagem abaixo e abrir a conversa.');}
  timer.current=setTimeout(()=>{locked.current=false;setBusy(false);},2000);
 }
 function prepareConversation(){
  if(locked.current)return;
  const next=contactErrors({name,phone,consent});setErrors(next);
  const first=Object.keys(next)[0];if(first){document.getElementById(first==='consent'?'lead-consent':`lead-${first}`)?.focus();return;}
  const message=whatsappMessage(answers,result,{name,phone,profile});setPrepared(message);openConversation(whatsappUrl(message));
 }
 async function copyMessage(){
  if(!prepared||!consent)return;
  try{await navigator.clipboard.writeText(prepared);setNotice('Mensagem copiada. Abra a conversa, cole o texto e revise antes de enviar.');}
  catch{messageRef.current?.focus();messageRef.current?.select();setNotice('Selecione e copie a mensagem no campo abaixo. Depois, cole na conversa da Ravyt.');}
 }
 return <section ref={section} className="dg-contact" aria-labelledby="contact-title"><p className="dg-eyebrow">Próximo passo · opcional</p><h2 ref={heading} tabIndex={-1} id="contact-title">Converse sobre <em>seu diagnóstico.</em></h2><p>Nossa equipe pode ajudar você a entender as possibilidades de melhoria para seu negócio. Você também pode consultar seu resultado sem solicitar atendimento.</p>
 <div id="contato-form" role="group" aria-label="Dados para a conversa" data-private onKeyDown={event=>{if(event.key==='Enter'&&!event.nativeEvent.isComposing&&event.target instanceof HTMLInputElement&&event.target.type!=='checkbox'){event.preventDefault();prepareConversation();}}}>
 <fieldset><legend className="sr-only">Seus dados de contato</legend>
 <div className="dg-fields"><div><label htmlFor="lead-name">Nome <span>(obrigatório)</span></label><input id="lead-name" autoComplete="name" required maxLength={100} value={name} onChange={e=>{setName(e.target.value);setErrors(v=>({...v,name:undefined}));edited();}} aria-invalid={!!errors.name} aria-describedby={errors.name?'name-error':undefined}/>{errors.name&&<p className="dg-error" id="name-error" role="alert">{errors.name}</p>}</div>
 <div><label htmlFor="lead-phone">WhatsApp <span>(obrigatório)</span></label><input id="lead-phone" type="tel" inputMode="tel" autoComplete="tel-national" placeholder="(88) 99999-9999" required maxLength={15} value={phone} onChange={e=>{setPhone(formatPhone(e.target.value));setErrors(v=>({...v,phone:undefined}));edited();}} aria-invalid={!!errors.phone} aria-describedby={errors.phone?'phone-help phone-error':'phone-help'}/><small id="phone-help">Informe um celular brasileiro com DDD.</small>{errors.phone&&<p className="dg-error" id="phone-error" role="alert">{errors.phone}</p>}</div>
 <div className="dg-field-wide"><label htmlFor="lead-profile">Site ou perfil profissional <span>(opcional)</span></label><input id="lead-profile" type="text" maxLength={250} placeholder="https://seusite.com.br ou @seuperfil" autoCapitalize="none" spellCheck={false} value={profile} onChange={e=>{setProfile(e.target.value);edited();}}/></div></div>
 <p className="dg-form-note" id="whatsapp-privacy">Preparamos seus dados e respostas neste navegador. Ao continuar, o WhatsApp receberá essas informações no link de abertura, que pode ficar no histórico do navegador. A mensagem só será enviada à Ravyt quando você tocar em enviar no WhatsApp. Esse serviço externo tem suas próprias políticas. Não informe senhas ou dados sensíveis.</p>
 <label className="dg-consent"><input id="lead-consent" type="checkbox" required checked={consent} aria-invalid={!!errors.consent} aria-describedby={errors.consent?'whatsapp-privacy consent-error':'whatsapp-privacy'} onChange={e=>{setConsent(e.target.checked);setErrors(v=>({...v,consent:undefined}));edited();}}/><span>Autorizo expressamente o compartilhamento dos dados e das respostas informadas com o WhatsApp para preparar a mensagem e, se eu a enviar, com a Ravyt Digital para atender minha solicitação, conforme a <a href="#privacidade">Política de Privacidade</a>.</span></label>
 {errors.consent&&<p className="dg-error" id="consent-error" role="alert">{errors.consent}</p>}
 <button className="dg-button" type="button" onClick={prepareConversation} disabled={busy}>{busy?'Abrindo WhatsApp…':'Conversar sobre meu diagnóstico'}<span aria-hidden="true">↗</span></button>
 <p className="dg-form-note">Seu diagnóstico será preparado em uma mensagem para o WhatsApp. Você poderá revisar as informações antes de enviá-las.</p>
 {onBack&&<button className="dg-back dg-contact-back" type="button" onClick={onBack}>Voltar ao meu resultado</button>}
 </fieldset></div>
 <div role="status" aria-live="polite"><p className="dg-form-note">{notice}</p></div>
 {prepared&&consent&&<div className="dg-whatsapp-fallback" data-private><h3>Outra forma de iniciar a conversa</h3><p>Copie a mensagem e cole na conversa com a Ravyt. A abertura do WhatsApp não confirma envio nem recebimento.</p><label htmlFor="diagnostic-message">Mensagem para revisar e copiar</label><textarea id="diagnostic-message" ref={messageRef} readOnly value={prepared} rows={9} spellCheck={false}/><div className="dg-fallback-actions"><button type="button" className="dg-back" onClick={copyMessage}>Copiar mensagem</button><button type="button" className="dg-back" disabled={busy} onClick={()=>openConversation(WHATSAPP_BASE)}>Abrir conversa com a Ravyt ↗</button></div></div>}
 </section>;
}
