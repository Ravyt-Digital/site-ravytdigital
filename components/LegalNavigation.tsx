'use client';
import {useEffect} from 'react';
export default function LegalNavigation(){useEffect(()=>{
 const reveal=()=>{const hash=window.location.hash.slice(1);if(!['privacidade','termos','cookies'].includes(hash))return;const dialog=document.getElementById(hash==='cookies'?'privacidade':hash);if(dialog instanceof HTMLDialogElement&&!dialog.open)dialog.showModal();if(hash==='cookies')document.getElementById('cookies')?.scrollIntoView();};
 const click=(event:MouseEvent)=>{const target=event.target instanceof Element?event.target:null;if(target?.closest('[data-close-legal]')){target.closest('dialog')?.close();return;}const href=target?.closest('a')?.getAttribute('href');if(href&&['#privacidade','#termos','#cookies'].includes(href)){event.preventDefault();if(window.location.hash!==href)history.pushState(null,'',href);reveal();}};
 const closed=()=>{if(['#privacidade','#termos','#cookies'].includes(window.location.hash))history.replaceState(null,'',window.location.pathname+window.location.search);};
 const dialogs=document.querySelectorAll('dialog.dg-legal-dialog');dialogs.forEach(dialog=>dialog.addEventListener('close',closed));document.addEventListener('click',click);window.addEventListener('hashchange',reveal);reveal();
 return()=>{dialogs.forEach(dialog=>dialog.removeEventListener('close',closed));document.removeEventListener('click',click);window.removeEventListener('hashchange',reveal);};
 },[]);return null;}
