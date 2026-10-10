import type {CSSProperties} from 'react';
import {webpVariants} from '@/lib/webp-variants';
type Props={src:string;alt:string;width:number;height:number;className?:string;style?:CSSProperties;priority?:boolean;loading?:'lazy'|'eager';sizes?:string};
export default function ResponsiveWebp({src,alt,width,height,className,style,priority=false,loading='lazy',sizes='(max-width:700px) calc(100vw - 48px), 850px'}:Props){
 const variant=webpVariants[src];
 return <picture>{variant&&<source media="(max-width:700px)" srcSet={variant.mobile}/>}<img src={variant?.desktop??src} width={width} height={height} alt={alt} className={className} style={style} loading={priority?'eager':loading} fetchPriority={priority?'high':undefined} decoding="async" sizes={sizes}/></picture>;
}
