"use client";

import {PriceText} from "@/components/i18n/Regional";
import { useEffect, useRef, useState } from "react";
import {savedConsent,saveConsent} from "@/lib/privacy-consent";
export default function CookieConsent() {
 const [visible,setVisible]=useState(false);
 const opener=useRef<HTMLButtonElement>(null);
 const panel=useRef<HTMLElement>(null);
 const openedFromSettings=useRef(false);
 useEffect(()=>{const t=setTimeout(()=>{try{const choice=savedConsent();setVisible(!["accepted","rejected"].includes(choice??""));}catch{setVisible(true);}},0);return()=>clearTimeout(t);},[]);
 useEffect(()=>{if(!visible||!panel.current)return;const el=panel.current;const observer=new ResizeObserver(()=>{document.documentElement.style.setProperty("--consent-height",`${el.getBoundingClientRect().height+28}px`);});observer.observe(el);return()=>{observer.disconnect();document.documentElement.style.removeProperty("--consent-height");};},[visible]);
 function choose(accepted:boolean){const previous=savedConsent();const choice=saveConsent(accepted);window.dispatchEvent(new CustomEvent("ravyt:consent",{detail:choice}));setVisible(false);if(previous==="accepted"&&choice==="rejected"){location.reload();return;}if(openedFromSettings.current){opener.current?.focus({preventScroll:true});openedFromSettings.current=false;}}

 return <><div className="privacy-settings shell"><button ref={opener} type="button" onClick={()=>{openedFromSettings.current=true;setVisible(true);requestAnimationFrame(()=>panel.current?.focus({preventScroll:true}));}}> Cambiar preferencias de privacidad </button></div>{<PriceText>{visible&&<aside ref={panel} tabIndex={-1} className="cookie-banner" aria-label="Preferencias de privacidad"><div><strong>Cookies y privacidad: tú eliges.</strong><p>Aceptar autoriza a Ravyt, Google y Meta a medir visitas y clics y apoyar la atribución y personalización publicitaria. Rechazar mantiene desactivadas estas herramientas opcionales; el sitio sigue funcionando. Puedes cambiar tu elección al final de la página. <a href="/es/politica-de-cookies"> Política de cookies </a> · <a href="/es/politica-de-privacidade"> Privacidad </a>.</p></div><div className="cookie-actions"><button onClick={()=>choose(false)}> Rechazar </button><button onClick={()=>choose(true)}> Aceptar </button></div></aside>}</PriceText>}</>;
}
