'use client';
import {createContext,useContext,Children,cloneElement,isValidElement,type ReactNode} from 'react';
import {baselineRates,convertPrice} from '@/lib/i18n/regional';
const RegionalContext=createContext<{currency:string;lang:string}>({currency:'USD',lang:'pt'});
export function RegionalProvider({children,lang,currency='USD'}:{children:ReactNode;lang:string;currency?:string}) {
 return <RegionalContext.Provider value={{currency,lang}}>{children}</RegionalContext.Provider>;
}
export function PriceText({children}:{children:ReactNode}){
 const {currency,lang}=useContext(RegionalContext);
 function format(node:ReactNode):ReactNode{
  if(typeof node==='string')return convertPrice(node,currency,baselineRates,lang);
  return Children.map(node,child=>isValidElement<{children?:ReactNode}>(child)&&child.props.children!==undefined?cloneElement(child,{},format(child.props.children)):child);
 }
 return <>{format(children)}</>;
}
export function ExchangeNote(){return null;}
const languages=[
 {code:'pt',flag:'br',label:'Brasil — Português'},
 {code:'en',flag:'us',label:'USA — English'},
 {code:'fr',flag:'fr',label:'France — Français'},
 {code:'es',flag:'es',label:'España — Español'},
];
export function LanguageSwitcher(){
 const {lang}=useContext(RegionalContext);
 function chooseLanguage(next:string){
  document.cookie=`ravyt_language=${next}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`;
  const path=location.pathname.replace(/^\/(en|fr|es)(?=\/|$)/,'')||'/';
  location.assign((next==='pt'?path:'/'+next+(path==='/'?'':path))+location.search+location.hash);
 }
 return <div className="rv-language" role="group" aria-label={{pt:'Idioma',en:'Language',fr:'Langue',es:'Idioma'}[lang]??'Language'}>
  {languages.map(({code,flag,label})=><button key={code} type="button" className="rv-language-flag" aria-label={label} title={label} aria-pressed={lang===code} onClick={()=>chooseLanguage(code)}><img src={`/flags/${flag}.svg`} width={20} height={14} alt="" aria-hidden="true" /></button>)}
 </div>;
}
