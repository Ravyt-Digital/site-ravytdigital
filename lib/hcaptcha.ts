export const WEB3FORMS_HCAPTCHA_SITEKEY='50b2fe65-b00b-4b9e-ad62-3ba471098be2';
export interface HCaptchaApi{render(container:HTMLElement,options:Record<string,unknown>):string;reset(widget:string):void;remove?(widget:string):void;}
declare global{interface Window{hcaptcha?:HCaptchaApi;ravytCaptchaReady?:()=>void;}}
let loading:Promise<HCaptchaApi>|null=null;
export function loadHCaptcha():Promise<HCaptchaApi>{
 if(loading)return loading;
 if(window.hcaptcha)return Promise.resolve(window.hcaptcha);
 loading=new Promise((resolve,reject)=>{
  const script=document.createElement('script');let settled=false;
  const fail=()=>{if(settled)return;settled=true;clearTimeout(timer);loading=null;script.remove();delete window.ravytCaptchaReady;reject(new Error('Captcha indisponível.'));};
  const timer=setTimeout(fail,20000);
  window.ravytCaptchaReady=()=>{if(settled)return;if(!window.hcaptcha){fail();return;}settled=true;clearTimeout(timer);resolve(window.hcaptcha);delete window.ravytCaptchaReady;};
  script.src='https://js.hcaptcha.com/1/api.js?onload=ravytCaptchaReady&render=explicit&recaptchacompat=off&hl=pt';script.async=true;script.defer=true;script.onerror=fail;document.head.appendChild(script);
 });
 return loading;
}
