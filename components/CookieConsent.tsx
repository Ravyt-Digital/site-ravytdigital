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

 return <><div className="privacy-settings shell"><button ref={opener} type="button" onClick={()=>{openedFromSettings.current=true;setVisible(true);requestAnimationFrame(()=>panel.current?.focus({preventScroll:true}));}}>Alterar preferências de privacidade</button></div>{<PriceText>{visible&&<aside ref={panel} tabIndex={-1} className="cookie-banner" aria-label="Preferências de privacidade"><div><strong>Cookies e privacidade: você escolhe.</strong><p>Ao aceitar, você autoriza a medição de visitas e cliques pela Ravyt, Google e Meta, além de atribuição e personalização de publicidade. Ao recusar, esses recursos ficam desativados; o site continua funcionando. Você pode mudar sua escolha no final da página. <a href="/politica-de-cookies">Política de Cookies</a> · <a href="/politica-de-privacidade">Privacidade</a>.</p></div><div className="cookie-actions"><button onClick={()=>choose(false)}>Recusar</button><button onClick={()=>choose(true)}>Aceitar</button></div></aside>}</PriceText>}</>;
}
