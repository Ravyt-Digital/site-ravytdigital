export const analyticsEvents = ["page_view", "primary_cta_click", "form_submit"] as const;
export type AnalyticsEvent = typeof analyticsEvents[number];
