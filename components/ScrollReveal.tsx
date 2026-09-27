"use client";
import { useEffect } from "react";
export default function ScrollReveal(){
  useEffect(()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const nodes=document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.08,rootMargin:'0px 0px -30px 0px'});
    nodes.forEach(node=>{if(node.getBoundingClientRect().top<window.innerHeight){node.classList.add('is-visible')}else{node.classList.add('reveal-pending');observer.observe(node)}});
    return ()=>observer.disconnect();
  },[]);
  return null;
}
