'use client';
import {forwardRef,useEffect,useImperativeHandle,useRef,useState} from 'react';
import {loadHCaptcha,WEB3FORMS_HCAPTCHA_SITEKEY,type HCaptchaApi} from '@/lib/hcaptcha';
export interface CaptchaHandle{reset():void;}
const HCaptcha=forwardRef<CaptchaHandle,{onToken:(token:string)=>void}>(({onToken},ref)=>{
 const container=useRef<HTMLDivElement>(null),widget=useRef<string|null>(null),api=useRef<HCaptchaApi|null>(null),callback=useRef(onToken);
 const [status,setStatus]=useState<'loading'|'ready'|'verified'|'error'>('loading'),[attempt,setAttempt]=useState(0);
 callback.current=onToken;
 useImperativeHandle(ref,()=>({reset(){callback.current('');if(api.current&&widget.current!==null)api.current.reset(widget.current);setStatus('ready');}}),[]);
 useEffect(()=>{let active=true;
  setStatus('loading');
  loadHCaptcha().then(hcaptcha=>{if(!active||!container.current)return;api.current=hcaptcha;
   widget.current=hcaptcha.render(container.current,{sitekey:WEB3FORMS_HCAPTCHA_SITEKEY,size:'compact',theme:'light',hl:'pt',callback:(token:string)=>{if(active){callback.current(token);setStatus('verified');}},'expired-callback':()=>{if(active){callback.current('');setStatus('ready');}},'chalexpired-callback':()=>{if(active){callback.current('');setStatus('ready');}},'error-callback':()=>{if(active){callback.current('');setStatus('error');}}});setStatus('ready');
  }).catch(()=>{if(active){callback.current('');setStatus('error');}});
  return()=>{active=false;if(api.current&&widget.current!==null){if(api.current.remove)api.current.remove(widget.current);else api.current.reset(widget.current);}widget.current=null;};
 },[attempt]);
 return <div className="dg-captcha" data-captcha-focus tabIndex={-1} aria-label="Verificação de segurança"><div ref={container} className="h-captcha" data-sitekey={WEB3FORMS_HCAPTCHA_SITEKEY}/><p className="dg-captcha-status" role="status">{status==='loading'?'Carregando verificação de segurança…':status==='verified'?'Verificação concluída.':status==='error'?'Não foi possível carregar ou concluir a verificação. Tente novamente.':'Confirme que você é uma pessoa para enviar.'}</p>{status==='error'&&<button className="dg-back" type="button" onClick={()=>{callback.current('');setAttempt(v=>v+1);}}>Tentar a verificação novamente</button>}</div>;
});
HCaptcha.displayName='HCaptcha';export default HCaptcha;
