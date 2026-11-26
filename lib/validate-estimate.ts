import {pageOptions, specialProjects, contactOptions, materialOptions, publicationFor, timingOptions, contentPageLimit, initialEstimate, type Estimate} from './site-estimate';

export function validateEstimate(value: unknown): Estimate | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const input = value as Record<string, unknown>;
  const read = (key: string, max: number) => typeof input[key] === 'string' && (input[key] as string).length <= max ? (input[key] as string).trim() : null;
  const structure = read('structure', 30), contact = read('contact', 30), materials = read('materials', 30), hosting = read('hosting', 30);
  const brief = read('brief', 400), contactDetail = read('contactDetail', 100), timing = read('timing', 100);
  const contentPages = input.contentPages;
  if (!structure || !contact || !materials || !hosting || brief === null || contactDetail === null || timing === null ||
      typeof contentPages !== 'number' || !Number.isInteger(contentPages) || contentPages < 1 || contentPages > contentPageLimit) return null;
  if (![...pageOptions, ...specialProjects].some(x => x.id === structure) ||
      !contactOptions.some(x => x.id === contact) || !materialOptions.some(x => x.id === materials) ||
      (timing && !timingOptions.some(x => x === timing))) return null;
  const estimate = {...initialEstimate, structure, contact, materials, hosting, brief, contactDetail, timing, contentPages};
  return publicationFor(estimate).options.some(x => x.id === hosting) ? estimate : null;
}
