export const utmNames = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
export type UtmName = typeof utmNames[number];

export function readUtms(): Record<UtmName, string> {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(utmNames.map(name => {
    const incoming = params.get(name)?.trim();
    if (incoming) {
      try { sessionStorage.setItem(`ravyt_${name}`, incoming); } catch { /* Storage is optional. */ }
    }
    let stored = '';
    try { stored = sessionStorage.getItem(`ravyt_${name}`) || ''; } catch { /* Storage is optional. */ }
    return [name, incoming || stored];
  })) as Record<UtmName, string>;
}
