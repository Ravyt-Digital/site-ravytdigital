'use client';
import {useEffect} from 'react';
export default function LegalNavigation(){useEffect(()=>{const reveal=()=>{const hash=window.location.hash.slice(1);if(!['privacidade','termos','cookies'].includes(hash))return;const target=document.getElementById(hash);const details=target?.closest('details');if(details)details.open=true;};reveal();window.addEventListener('hashchange',reveal);return()=>window.removeEventListener('hashchange',reveal);},[]);return null;}
