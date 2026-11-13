import type {MetadataRoute} from 'next';
import {SITE_URL} from '@/lib/site';
import {guides} from '@/lib/guides';
import {googleBusinessPath} from '@/lib/google-business';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '/', '/site-profissional', googleBusinessPath, '/quanto-custa-criar-um-site',
    '/site-institucional-paginas-essenciais', '/indique', ...guides.map(guide => '/' + guide.slug),
  ].map(path => ({url: SITE_URL + path}));
}
