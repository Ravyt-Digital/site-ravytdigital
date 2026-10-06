/** Metricool's supplied tracker, loaded once and shared by route transitions. */
export const METRICOOL_HASH = "29a15d18b61f71e682b80421adbaf485";
export const METRICOOL_SCRIPT = "https://tracker.metricool.com/resources/be.js";
declare global {
 interface Window { beTracker?: {t(options:{hash:string}):void}; }
}
let loading: Promise<void> | undefined;
function loadTracker(): Promise<void> {
 if (window.beTracker) return Promise.resolve();
 if (loading) return loading;
 loading = new Promise<void>((resolve,reject) => {
  const script=document.createElement("script");
  script.id="ravyt-metricool";
  script.type="text/javascript";
  script.async=true;
  script.src=METRICOOL_SCRIPT;
  script.onload=()=>resolve();
  script.onerror=()=>{script.remove();loading=undefined;reject(new Error("Metricool could not load"));};
  document.head.appendChild(script);
 });
 return loading;
}
/** Recheck both consent and route after the external script loads. */
export async function recordMetricoolVisit(allowed:()=>boolean) {
 if(!allowed())return;
 try{await loadTracker();if(allowed())window.beTracker?.t({hash:METRICOOL_HASH});}catch{/* Tracking errors do not interrupt the site. */}
}
