import type { Metadata } from "next";
import { SITE_URL } from "./site";
export function pageMetadata(meta:Metadata):Metadata {const title=typeof meta.title==="string"?meta.title:"Ravyt Digital";const url=String(meta.alternates?.canonical??SITE_URL);return {...meta,openGraph:{type:"website",locale:"pt_BR",siteName:"Ravyt Digital",title,description:meta.description??undefined,url,images:[{url:"/brand/ravyt-social-card.jpg",width:1200,height:630,alt:"Ravyt Digital"}]},twitter:{card:"summary_large_image",title,description:meta.description??undefined,images:["/brand/ravyt-social-card.jpg"]}};}
