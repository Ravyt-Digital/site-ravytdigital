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

  return null;
}
