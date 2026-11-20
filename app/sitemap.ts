import type {MetadataRoute} from 'next';
import {SITE_URL} from '@/lib/site';
import {websitePath} from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', websitePath, '/indique']
    .map(path => ({url: SITE_URL + path}));
}
