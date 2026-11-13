import type {MetadataRoute} from 'next';
import {SITE_URL} from '@/lib/site';
import {guides} from '@/lib/guides';
export default function sitemap():MetadataRoute.Sitemap{return [{url:SITE_URL+'/'},{url:SITE_URL+'/site-profissional'},{url:SITE_URL+'/indique'},...guides.map(g=>({url:SITE_URL+'/'+g.slug}))];}
