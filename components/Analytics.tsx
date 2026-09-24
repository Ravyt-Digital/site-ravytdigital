"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { destinationEvent, type AnalyticsEvent } from "@/lib/analytics";

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
export default function Analytics() {
  const path = usePathname();
  useEffect(() => {
    let sent = false;
    const view = () => { if (!sent && consent()) { send("page_view", path); sent = true; } };
    view();
    window.addEventListener("ravyt:consent", view);
    return () => window.removeEventListener("ravyt:consent", view);
  }, [path]);
  useEffect(() => {
    const click = (event: MouseEvent) => {
      const anchor = event.target instanceof Element ? event.target.closest("a") : null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (href.startsWith("https://wa.me/")) return send("whatsapp_click", path);
      if (href.startsWith("mailto:")) return send("email_click", path);
      if (href.startsWith("tel:")) return send("phone_click", path);
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
  return null;
}
