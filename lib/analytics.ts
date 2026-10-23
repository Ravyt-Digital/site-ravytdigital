export const analyticsEvents = ["page_view", "primary_cta_click", "whatsapp_click", "diagnostic_open", "diagnostic_start", "plan_click", "form_submit"] as const;
export type AnalyticsEvent = typeof analyticsEvents[number];
