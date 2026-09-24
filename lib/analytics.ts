export const servicePaths = [
  "/gestao-de-midias-sociais",
  "/criacao-de-sites-online",
  "/social-media-para-psicologos-parentais",
] as const;
export const quotePaths = [
  "/quanto-custa-gestao-de-midias-sociais",
  "/quanto-custa-criar-um-site",
] as const;
export const analyticsEvents = [
  "page_view", "whatsapp_click", "email_click", "phone_click", "primary_cta_click",
  "service_page_click", "quote_page_click",
] as const;
export type AnalyticsEvent = typeof analyticsEvents[number];

export function destinationEvent(path: string): AnalyticsEvent | null {
  if (servicePaths.some(item => item === path)) return "service_page_click";
  if (quotePaths.some(item => item === path)) return "quote_page_click";
  return null;
}
