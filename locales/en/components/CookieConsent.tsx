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
 return <><div className="privacy-settings shell"><button ref={opener} type="button" onClick={()=>{openedFromSettings.current=true;setVisible(true);requestAnimationFrame(()=>panel.current?.focus({preventScroll:true}));}}> Change privacy preferences </button></div>{<PriceText>{visible&&<aside ref={panel} tabIndex={-1} className="cookie-banner" aria-label="Privacy preferences"><div><strong> Visit measurement: you choose. </strong><p> With your permission, we record visits and clicks to improve the website. Your choice is saved in this browser. <a href="/en/politica-de-cookies"> Cookie Policy </a> · <a href="/en/politica-de-privacidade"> Privacy </a>.</p><label className="cookie-option"><input type="checkbox" checked={analytics} onChange={e=>setAnalytics(e.target.checked)}/>  Allow visit and click measurement </label></div><div className="cookie-actions"><button onClick={()=>choose(false)}> Reject </button><button onClick={()=>choose(analytics)}> Save choice </button><button onClick={()=>choose(true)}> Accept </button></div></aside>}</PriceText>}</>;
}
