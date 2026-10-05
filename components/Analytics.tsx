"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { destinationEvent, type AnalyticsEvent } from "@/lib/analytics";

const GTM_ID = "GTM-T9C5DS9C";
const META_PIXEL_ID = "2030474547612558";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
    __ravytGtmLoaded?: boolean;
    __ravytMetaPixelLoaded?: boolean;
  }
}

function consent() {
  try { return localStorage.getItem("ravyt_cookie_consent_v1") === "accepted"; }
  catch { return false; }
}
function send(event: AnalyticsEvent, path: string, destination?: string) {
  if (!consent()) return;
  const payload = JSON.stringify({ event, path, ...(destination ? { destination } : {}) });
  if (navigator.sendBeacon?.("/api/analytics", new Blob([payload], { type: "application/json" }))) return;
  void fetch("/api/analytics", { method: "POST", headers: { "content-type": "application/json" }, body: payload, keepalive: true }).catch(() => {});
}

function updateGoogleConsent(granted: boolean) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) { window.dataLayer.push(args); };
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function loadGoogleTagManager() {
  if (window.__ravytGtmLoaded) return;
  window.__ravytGtmLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

function loadMetaPixel() {
  if (window.__ravytMetaPixelLoaded) return;
  window.__ravytMetaPixelLoaded = true;
  const fbq = function (...args: unknown[]) {
    if ((fbq as typeof fbq & { callMethod?: (...values: unknown[]) => void }).callMethod) {
      (fbq as typeof fbq & { callMethod: (...values: unknown[]) => void }).callMethod(...args);
    } else {
      (fbq as typeof fbq & { queue: unknown[][] }).queue.push(args);
    }
  } as typeof window.fbq & { queue: unknown[][]; loaded: boolean; version: string };
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  window.fbq = fbq;
  window._fbq = fbq;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
  window.fbq("init", META_PIXEL_ID);
}

function trackMeta(event: "PageView" | "Contact" | "Lead") {
  if (consent()) window.fbq?.("track", event);
}

export default function Analytics() {
  const path = usePathname();
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag(...args: unknown[]) { window.dataLayer.push(args); };
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });

    const applyConsent = (accepted: boolean) => {
      updateGoogleConsent(accepted);
      if (accepted) {
        loadGoogleTagManager();
        loadMetaPixel();
      }
    };
    applyConsent(consent());
    const onConsent = (event: Event) => applyConsent((event as CustomEvent).detail === "accepted");
    window.addEventListener("ravyt:consent", onConsent);
    return () => window.removeEventListener("ravyt:consent", onConsent);
  }, []);
  useEffect(() => {
    let sent = false;
    const view = () => {
      if (!sent && consent()) {
        send("page_view", path);
        trackMeta("PageView");
        sent = true;
      }
    };
    view();
    window.addEventListener("ravyt:consent", view);
    return () => window.removeEventListener("ravyt:consent", view);
  }, [path]);
  useEffect(() => {
    const click = (event: MouseEvent) => {
      const anchor = event.target instanceof Element ? event.target.closest("a") : null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (href.startsWith("https://wa.me/")) { send("whatsapp_click", path); return trackMeta("Contact"); }
      if (href.startsWith("mailto:")) { send("email_click", path); return trackMeta("Contact"); }
      if (href.startsWith("tel:")) { send("phone_click", path); return trackMeta("Contact"); }
      try {
        const url = new URL(href, window.location.href);
        const destination = url.pathname.replace(/\/$/, "") || "/";
        const targetEvent = url.origin === window.location.origin ? destinationEvent(destination) : null;
        if (targetEvent && destination !== path) return send(targetEvent, path, destination);
      } catch { /* Invalid links do not produce measurement events. */ }
      if (anchor.dataset.track === "primary_cta_click") send("primary_cta_click", path);
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, [path]);
  useEffect(() => {
    const lead = () => trackMeta("Lead");
    window.addEventListener("ravyt:lead", lead);
    return () => window.removeEventListener("ravyt:lead", lead);
  }, []);
  return null;
}
