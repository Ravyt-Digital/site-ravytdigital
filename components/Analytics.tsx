"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "ravyt_cookie_consent_v1";

function hasConsent() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "accepted";
  } catch {
    return false;
  }
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    let sent = false;
    const sendPageView = () => {
      if (sent || !hasConsent()) return;
      sent = true;
      const payload = JSON.stringify({
        path: pathname,
        referrer: document.referrer || null,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        occurredAt: new Date().toISOString(),
      });

      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/analytics", new Blob([payload], { type: "application/json" }));
      } else {
        void fetch("/api/analytics", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: payload,
          keepalive: true,
        });
      }
    };

    const onConsent = (event: Event) => {
      if ((event as CustomEvent<string>).detail === "accepted") sendPageView();
    };

    sendPageView();
    window.addEventListener("ravyt:consent", onConsent);
    return () => window.removeEventListener("ravyt:consent", onConsent);
  }, [pathname]);

  useEffect(() => {
    const onConversion = (event: Event) => {
      if (!hasConsent()) return;
      const name = (event as CustomEvent<string>).detail;
      if (!["form_start", "form_submit", "thank_you_view"].includes(name)) return;
      const payload = JSON.stringify({ event:name, path:pathname, occurredAt:new Date().toISOString() });
      if (navigator.sendBeacon) navigator.sendBeacon("/api/analytics", new Blob([payload], {type:"application/json"}));
    };
    window.addEventListener("ravyt:conversion", onConversion);
    return () => window.removeEventListener("ravyt:conversion", onConversion);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[data-track]");
      if (!link || !hasConsent()) return;
      const eventName = link.dataset.track;
      if (!eventName || !["whatsapp_click", "email_click", "primary_cta_click"].includes(eventName)) return;
      const payload = JSON.stringify({ event: eventName, path: pathname, occurredAt: new Date().toISOString() });
      if (navigator.sendBeacon) navigator.sendBeacon("/api/analytics", new Blob([payload], { type: "application/json" }));
      else void fetch("/api/analytics", { method: "POST", headers: { "content-type": "application/json" }, body: payload, keepalive: true });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}
