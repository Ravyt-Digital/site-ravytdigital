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
 return <><div className="privacy-settings shell"><button ref={opener} type="button" onClick={()=>{openedFromSettings.current=true;setVisible(true);requestAnimationFrame(()=>panel.current?.focus({preventScroll:true}));}}> Modifier les préférences de confidentialité </button></div>{<PriceText>{visible&&<aside ref={panel} tabIndex={-1} className="cookie-banner" aria-label="Préférences de confidentialité"><div><strong> Mesure des visites : vous choisissez. </strong><p> Avec votre autorisation, nous enregistrons les visites et les clics pour améliorer le site. Votre choix est enregistré dans ce navigateur. <a href="/fr/politica-de-cookies"> Politique relative aux cookies </a> · <a href="/fr/politica-de-privacidade"> Confidentialité </a>.</p><label className="cookie-option"><input type="checkbox" checked={analytics} onChange={e=>setAnalytics(e.target.checked)}/>  Autoriser la mesure des visites et des clics </label></div><div className="cookie-actions"><button onClick={()=>choose(false)}> Refuser </button><button onClick={()=>choose(analytics)}> Enregistrer le choix </button><button onClick={()=>choose(true)}> Accepter </button></div></aside>}</PriceText>}</>;
}
