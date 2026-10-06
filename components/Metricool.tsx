"use client";
import {useEffect} from "react";
import {usePathname} from "next/navigation";
import {savedConsent} from "@/lib/privacy-consent";
import {recordMetricoolVisit} from "@/lib/metricool";

export default function Metricool(){
 const path=usePathname();
 useEffect(()=>{
  let active=true,recorded=false;
  const allowed=()=>active&&savedConsent()==="accepted";
  const visit=()=>{
   if(recorded||!allowed())return;
   recorded=true;
   void recordMetricoolVisit(allowed);
  };
  visit();
  window.addEventListener("ravyt:consent",visit);
  return()=>{active=false;window.removeEventListener("ravyt:consent",visit);};
 },[path]);
 return null;
}
