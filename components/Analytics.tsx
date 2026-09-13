"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
function consent(){try{return localStorage.getItem("ravyt_cookie_consent_v1")==="accepted";}catch{return false;}}
function send(event:string,path:string){
 if(!consent())return;
 const payload=JSON.stringify({event,path,occurredAt:new Date().toISOString()});
 if(navigator.sendBeacon?.("/api/analytics",new Blob([payload],{type:"application/json"})))return;
 void fetch("/api/analytics",{method:"POST",headers:{"content-type":"application/json"},body:payload,keepalive:true}).catch(()=>{});
}
export default function Analytics(){const path=usePathname();
 useEffect(()=>{let sent=false;const view=()=>{if(!sent&&consent()){send("page_view",path);sent=true;}};view();window.addEventListener("ravyt:consent",view);return()=>window.removeEventListener("ravyt:consent",view);},[path]);
 useEffect(()=>{const click=(e:MouseEvent)=>{const a=e.target instanceof Element?e.target.closest("a"):null;if(!a)return;const href=a.getAttribute("href")??"";const event=href.startsWith("https://wa.me/")?"whatsapp_click":href.startsWith("mailto:")?"email_click":href.startsWith("tel:")?"phone_click":a.dataset.track==="primary_cta_click"?"primary_cta_click":null;if(event)send(event,path);};document.addEventListener("click",click);return()=>document.removeEventListener("click",click);},[path]);return null;}
