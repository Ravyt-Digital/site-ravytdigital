export const analyticsEvents = ["page_view", "primary_cta_click", "whatsapp_click", "diagnostic_open", "diagnostic_view", "diagnostic_start", "diagnostic_complete", "diagnostic_contact_request", "plan_click", "form_submit"] as const;
export type AnalyticsEvent = typeof analyticsEvents[number];

// One business action has one event ID. Meta's existing hosted Conversions API
// connection receives the Pixel events; do not add a second server integration.
export const metaEvents: Record<AnalyticsEvent, {eventName: string; custom?: boolean}> = {
  page_view: {eventName: "PageView"},
  primary_cta_click: {eventName: "Falar com Especialistas", custom: true},
  whatsapp_click: {eventName: "Contact"},
  diagnostic_open: {eventName: "Diagnostico", custom: true},
  diagnostic_view: {eventName: "ViewContent"},
  diagnostic_start: {eventName: "DiagnosticStart", custom: true},
  diagnostic_complete: {eventName: "DiagnosticComplete", custom: true},
  diagnostic_contact_request: {eventName: "DiagnosticContactRequest", custom: true},
  plan_click: {eventName: "PlanClick", custom: true},
  form_submit: {eventName: "Lead"},
};
