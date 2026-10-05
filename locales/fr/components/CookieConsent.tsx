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

 return <><div className="privacy-settings shell"><button ref={opener} type="button" onClick={()=>{openedFromSettings.current=true;setVisible(true);requestAnimationFrame(()=>panel.current?.focus({preventScroll:true}));}}> Modifier les préférences de confidentialité </button></div>{<PriceText>{visible&&<aside ref={panel} tabIndex={-1} className="cookie-banner" aria-label="Préférences de confidentialité"><div><strong>Cookies et confidentialité : à vous de choisir.</strong><p>Accepter autorise Ravyt, Google et Meta à mesurer les visites et clics et à soutenir l’attribution et la personnalisation publicitaires. Refuser désactive ces outils facultatifs ; le site reste accessible. Vous pouvez modifier votre choix en bas de page. <a href="/fr/politica-de-cookies"> Politique relative aux cookies </a> · <a href="/fr/politica-de-privacidade"> Confidentialité </a>.</p></div><div className="cookie-actions"><button onClick={()=>choose(false)}> Refuser </button><button onClick={()=>choose(true)}> Accepter </button></div></aside>}</PriceText>}</>;
}
