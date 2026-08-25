"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const TYPEFORM_ID = "wr1pvhAx";
const TYPEFORM_URL = `https://form.typeform.com/to/${TYPEFORM_ID}`;
const THANK_YOU_URL = "https://ravytdigital.com/obrigado";

type EmbedStatus = "loading" | "ready" | "error";

export default function TypeformEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<EmbedStatus>("loading");

  useEffect(() => {
    if (status === "error") return;

    const startedAt = Date.now();
    const interval = window.setInterval(() => {
      if (containerRef.current?.querySelector("iframe")) {
        setStatus("ready");
        window.clearInterval(interval);
      } else if (Date.now() - startedAt > 12000) {
        setStatus("error");
        window.clearInterval(interval);
      }
    }, 250);

    return () => window.clearInterval(interval);
  }, [status]);

  return (
    <div className="typeform-shell" ref={containerRef} data-status={status}>
      <div
        data-tf-widget={TYPEFORM_ID}
        data-tf-hide-headers
        data-tf-hide-footer
        data-tf-redirect-url={THANK_YOU_URL}
      />

      {status === "loading" ? (
        <div className="form-state" role="status" aria-live="polite">
          <span className="loading-spinner" aria-hidden="true" />
          <strong>Carregando formulário</strong>
          <p>Aguarde um instante.</p>
        </div>
      ) : null}

      {status === "error" ? (
        <div className="form-state form-state-error" role="alert">
          <strong>Não foi possível carregar o formulário.</strong>
          <p>Você pode abri-lo em uma nova aba ou falar diretamente com nossa equipe.</p>
          <div className="form-state-actions">
            <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer">Abrir formulário</a>
            <a href="https://wa.me/5588996956479" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
          </div>
        </div>
      ) : null}

      <noscript>
        <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer">Abrir formulário de contato</a>
      </noscript>
      <Script
        src="https://embed.typeform.com/next/embed.js"
        strategy="lazyOnload"
        onError={() => setStatus("error")}
      />
    </div>
  );
}
