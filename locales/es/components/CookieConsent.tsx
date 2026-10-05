"use client";

import {PriceText} from "@/components/i18n/Regional";
import { useEffect, useRef, useState } from "react";
const KEY = "ravyt_cookie_consent_v1";
export default function CookieConsent() {
 const [visible,setVisible]=useState(false);
 const [analytics,setAnalytics]=useState(false);
 const opener=useRef<HTMLButtonElement>(null);
 const panel=useRef<HTMLElement>(null);
 const openedFromSettings=useRef(false);
 useEffect(()=>{const t=setTimeout(()=>{try{const choice=localStorage.getItem(KEY);setAnalytics(choice==="accepted");setVisible(!["accepted","rejected"].includes(choice??""));}catch{setVisible(true);}},0);return()=>clearTimeout(t);},[]);
 useEffect(()=>{if(!visible||!panel.current)return;const el=panel.current;const observer=new ResizeObserver(()=>{document.documentElement.style.setProperty("--consent-height",`${el.getBoundingClientRect().height+28}px`);});observer.observe(el);return()=>{observer.disconnect();document.documentElement.style.removeProperty("--consent-height");};},[visible]);
 function choose(accepted:boolean){try{localStorage.setItem(KEY,accepted?"accepted":"rejected");localStorage.removeItem(`${KEY}_categories`);}catch{}setAnalytics(accepted);window.dispatchEvent(new CustomEvent("ravyt:consent",{detail:accepted?"accepted":"rejected"}));setVisible(false);if(openedFromSettings.current){opener.current?.focus({preventScroll:true});openedFromSettings.current=false;}}
 return <><div className="privacy-settings shell"><button ref={opener} type="button" onClick={()=>{openedFromSettings.current=true;setVisible(true);requestAnimationFrame(()=>panel.current?.focus({preventScroll:true}));}}> Cambiar preferencias de privacidad </button></div>{<PriceText>{visible&&<aside ref={panel} tabIndex={-1} className="cookie-banner" aria-label="Preferencias de privacidad"><div><strong> Medición de visitas: tú eliges. </strong><p> Con tu autorización, registramos visitas y clics para mejorar el sitio. Tu elección queda guardada en este navegador. <a href="/es/politica-de-cookies"> Política de cookies </a> · <a href="/es/politica-de-privacidade"> Privacidad </a>.</p><label className="cookie-option"><input type="checkbox" checked={analytics} onChange={e=>setAnalytics(e.target.checked)}/>  Permitir la medición de visitas y clics </label></div><div className="cookie-actions"><button onClick={()=>choose(false)}> Rechazar </button><button onClick={()=>choose(analytics)}> Guardar elección </button><button onClick={()=>choose(true)}> Aceptar </button></div></aside>}</PriceText>}</>;
}
