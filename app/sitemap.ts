import type {MetadataRoute} from 'next';
import {SITE_URL} from '@/lib/site';
import {articles, blogPath} from '@/lib/site-articles';
import {siteSegmentPaths} from '@/lib/site-segments';
import {appPath, websitePath} from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', websitePath, appPath, blogPath, '/indique', ...siteSegmentPaths, ...articles.map(article => article.path)]
    .map(path => ({url: SITE_URL + path}));
}
