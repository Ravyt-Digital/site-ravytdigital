"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { metaEvents, type AnalyticsEvent } from "@/lib/analytics";

import {savedConsent} from "@/lib/privacy-consent";

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

function consent() { return savedConsent() === "accepted"; }

function send(event: AnalyticsEvent, path: string, context: Record<string, string> = {}) {
  if (!consent()) return;
  const eventId = crypto.randomUUID();
  const parameters = {page_path: path, ...context};
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({event: "ravyt_"+event, event_id: eventId, ...parameters});
  const meta = metaEvents[event];
  // Scope dispatch to this Pixel, including an ID for browser/server deduplication.
  window.fbq?.(meta.custom ? "trackSingleCustom" : "trackSingle", META_PIXEL_ID,
    meta.eventName, parameters, {eventID: eventId});
  const payload = JSON.stringify({ event, path, event_id: eventId, ...context });
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

export default function Analytics() {
  const path = usePathname();
  const viewedPath = useRef<string | null>(null);
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
      accepted = accepted && consent();
      updateGoogleConsent(accepted);
      window.fbq?.("consent", accepted ? "grant" : "revoke");
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
    if (viewedPath.current !== path) viewedPath.current = null;
    const view = () => {
      if (viewedPath.current !== path && consent()) {
        send("page_view", path);
        if (path === "/diagnostico") send("diagnostic_view", path);
        viewedPath.current = path;
      }
    };
    view();
    window.addEventListener("ravyt:consent", view);
    return () => window.removeEventListener("ravyt:consent", view);
  }, [path]);
  useEffect(() => {
    const click = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      if (event.target.closest('button[data-open-contact]')) {
        const section = event.target.closest('section')?.id;
        const placement = section && ["inicio", "planos", "equipe", "diagnostico"].includes(section) ? section : "outro";
        send("primary_cta_click", path, {cta_location: placement}); return;
      }
      if (event.target.closest('button[data-diagnostic-start]')) { send("diagnostic_start", path); return; }
      if (event.target.closest('button[data-diagnostic-contact]')) { send("diagnostic_contact_request", path); return; }
      const href = event.target.closest('a')?.getAttribute('href') ?? '';
      if (href.startsWith('https://wa.me/')) {
        const destination = new URL(href).pathname;
        const specialist = destination === '/5588996956479' ? 'ytala' : destination === '/5588996777332' ? 'marcio' : 'outro';
        send("whatsapp_click", path, {contact_channel: "whatsapp", specialist});
      }
      else if (href === '/diagnostico') send("diagnostic_open", path);
      else if (href === '#planos' || href === '/#planos') send("plan_click", path);
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, [path]);
  useEffect(() => {
    const lead = () => send("form_submit", path);
    const complete = () => send("diagnostic_complete", path);
    window.addEventListener("ravyt:lead", lead);
    window.addEventListener("ravyt:diagnostic-complete", complete);
    return () => {
      window.removeEventListener("ravyt:lead", lead);
      window.removeEventListener("ravyt:diagnostic-complete", complete);
    };
  }, [path]);
  return null;
}
