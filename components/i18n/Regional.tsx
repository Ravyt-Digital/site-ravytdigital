'use client';
import {createContext,useContext,Children,cloneElement,isValidElement,type ReactNode} from 'react';
import {formatPrices,regionalPaymentText} from '@/lib/i18n/regional';
const RegionalContext=createContext<{lang:string;country:string}>({lang:'pt',country:''});
export function RegionalProvider({children,lang,country='' }:{children:ReactNode;lang:string;country?:string}) {
 return <RegionalContext.Provider value={{lang,country}}>{children}</RegionalContext.Provider>;
}
export function PriceText({children}:{children:ReactNode}){
 const {country}=useContext(RegionalContext);
 function format(node:ReactNode):ReactNode{
  if(typeof node==='string')return formatPrices(regionalPaymentText(node,country));
  return Children.map(node,child=>isValidElement<{children?:ReactNode}>(child)&&child.props.children!==undefined?cloneElement(child,{},format(child.props.children)):child);
 }
 return <>{format(children)}</>;
}
export function useRegional(){return useContext(RegionalContext);}
const languages=[
 {code:'pt',label:'Brasil — Português'},
 {code:'en',label:'USA — English'},
 {code:'fr',label:'France — Français'},
 {code:'es',label:'España — Español'},
];
export function LanguageSwitcher(){
 const {lang}=useContext(RegionalContext);
 function chooseLanguage(next:string){
  document.cookie=`ravyt_language=${next}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`;
  const path=location.pathname.replace(/^\/(en|fr|es)(?=\/|$)/,'')||'/';
  const query=new URLSearchParams(location.search);
  query.delete('lang');
  const search=query.toString();
  location.assign((next==='pt'?path:'/'+next+(path==='/'?'':path))+(search?'?'+search:'')+location.hash);
 }
 return <div className="rv-language" role="group" aria-label={{pt:'Idioma',en:'Language',fr:'Langue',es:'Idioma'}[lang]??'Language'}>
  <label className="rv-language-select"><span>{{pt:'Idioma',en:'Language',fr:'Langue',es:'Idioma'}[lang]??'Language'}</span><select value={lang} onChange={event=>chooseLanguage(event.target.value)}>{languages.map(({code,label})=><option key={code} value={code}>{label}</option>)}</select></label>
 </div>;
}