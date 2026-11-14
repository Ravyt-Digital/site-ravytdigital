import type {MetadataRoute} from 'next';
import {SITE_URL} from '@/lib/site';
import {articles, blogPath} from '@/lib/site-articles';
import {websitePath} from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', websitePath, blogPath, '/indique', ...articles.map(article => article.path)]
    .map(path => ({url: SITE_URL + path}));
}
