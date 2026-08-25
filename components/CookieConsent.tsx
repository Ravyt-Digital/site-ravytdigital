"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ravyt_cookie_consent_v1";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try { setVisible(!window.localStorage.getItem(STORAGE_KEY)); }
      catch { setVisible(true); }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const choose = (value: "accepted" | "rejected") => {
    try { window.localStorage.setItem(STORAGE_KEY, value); } catch {}
    window.dispatchEvent(new CustomEvent("ravyt:consent", { detail: value }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="cookie-banner" aria-label="Preferências de cookies" aria-live="polite">
      <div><strong>Você escolhe como navegar.</strong><p>Usamos armazenamento essencial para lembrar sua preferência. Recursos de medição só podem ser ativados com o seu aceite. <a href="/politica-de-privacidade">Saiba mais</a>.</p></div>
      <div className="cookie-actions"><button type="button" onClick={() => choose("rejected")}>Recusar</button><button className="cookie-accept" type="button" onClick={() => choose("accepted")}>Aceitar</button></div>
    </aside>
  );
}
