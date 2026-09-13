"use client";
import { useEffect, useRef, useState } from "react";
const KEY = "ravyt_cookie_consent_v1";
export default function CookieConsent() {
 const [visible,setVisible]=useState(false);
 const [analytics,setAnalytics]=useState(false);
 const opener=useRef<HTMLButtonElement>(null);
 const panel=useRef<HTMLElement>(null);
 useEffect(()=>{const t=setTimeout(()=>{try{const choice=localStorage.getItem(KEY);setAnalytics(choice==="accepted");setVisible(!["accepted","rejected"].includes(choice??""));}catch{setVisible(true);}},0);return()=>clearTimeout(t);},[]);
 useEffect(()=>{if(!visible||!panel.current)return;const el=panel.current;const observer=new ResizeObserver(()=>{document.documentElement.style.setProperty("--consent-height",`${el.getBoundingClientRect().height+28}px`);});observer.observe(el);return()=>{observer.disconnect();document.documentElement.style.removeProperty("--consent-height");};},[visible]);
 function choose(accepted:boolean){try{localStorage.setItem(KEY,accepted?"accepted":"rejected");localStorage.removeItem(`${KEY}_categories`);}catch{}setAnalytics(accepted);window.dispatchEvent(new CustomEvent("ravyt:consent",{detail:accepted?"accepted":"rejected"}));setVisible(false);opener.current?.focus();}
 return <><div className="privacy-settings shell"><button ref={opener} type="button" onClick={()=>{setVisible(true);requestAnimationFrame(()=>panel.current?.focus());}}>Alterar preferências de privacidade</button></div>{visible&&<aside ref={panel} tabIndex={-1} className="cookie-banner" aria-label="Preferências de privacidade"><div><strong>Medição de visitas: você escolhe.</strong><p>Com sua autorização, registramos visitas e cliques para melhorar o site. Sua escolha fica salva neste navegador. <a href="/politica-de-cookies">Política de Cookies</a> · <a href="/politica-de-privacidade">Privacidade</a>.</p><label className="cookie-option"><input type="checkbox" checked={analytics} onChange={e=>setAnalytics(e.target.checked)}/> Permitir medição de visitas e cliques</label></div><div className="cookie-actions"><button onClick={()=>choose(false)}>Recusar</button><button onClick={()=>choose(analytics)}>Salvar escolha</button><button onClick={()=>choose(true)}>Aceitar</button></div></aside>}</>;
}
