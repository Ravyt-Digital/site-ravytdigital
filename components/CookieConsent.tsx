"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ravyt_cookie_consent_v1";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try { setVisible(!window.localStorage.getItem(STORAGE_KEY)); }
      catch { setVisible(true); }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const choose = (value: "accepted" | "rejected" | "custom") => {
    const preferences = value === "accepted" ? { necessary:true, analytics:true, marketing:true } : value === "rejected" ? { necessary:true, analytics:false, marketing:false } : { necessary:true, analytics, marketing };
    try { window.localStorage.setItem(STORAGE_KEY, preferences.analytics ? "accepted" : "rejected"); window.localStorage.setItem(`${STORAGE_KEY}_categories`, JSON.stringify(preferences)); } catch {}
    window.dispatchEvent(new CustomEvent("ravyt:consent", { detail: preferences.analytics ? "accepted" : "rejected" }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="cookie-banner" aria-label="Preferências de cookies" aria-live="polite">
      <div><strong>Você escolhe como navegar.</strong><p>Cookies necessários ficam ativos. Analíticos e marketing dependem da sua escolha. <a href="/politica-de-cookies">Política de Cookies</a> · <a href="/politica-de-privacidade">Privacidade</a> · <a href="/termos-de-uso">Termos</a>.</p>{customizing ? <div className="cookie-categories"><label><input type="checkbox" checked disabled/> Necessários</label><label><input type="checkbox" checked={analytics} onChange={e=>setAnalytics(e.target.checked)}/> Analíticos</label><label><input type="checkbox" checked={marketing} onChange={e=>setMarketing(e.target.checked)}/> Marketing</label></div> : null}</div>
      <div className="cookie-actions"><button type="button" onClick={() => choose("rejected")}>Recusar</button><button type="button" onClick={() => customizing ? choose("custom") : setCustomizing(true)}>{customizing ? "Salvar escolhas" : "Personalizar"}</button><button className="cookie-accept" type="button" onClick={() => choose("accepted")}>Aceitar</button></div>
    </aside>
  );
}
