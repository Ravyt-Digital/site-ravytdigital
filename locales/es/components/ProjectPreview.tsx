"use client";


import {PriceText} from "@/components/i18n/Regional";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type ProjectPreviewProps = {
  src: string;
  image: string;
  title: string;
  category: string;
};

export default function ProjectPreview({ src, image, title, category }: ProjectPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const openerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const opener = openerRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "Tab" && closeRef.current) {
        const dialog = closeRef.current.closest<HTMLElement>("[role='dialog']");
        const focusable = dialog?.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex='-1'])",
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", closeWithEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeWithEscape);
      opener?.focus();
    };
  }, [isOpen]);

  const modal = isOpen ? (
    <div
      className="project-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
    >
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <header className="project-modal-header">
          <div>
            <span>{<PriceText>{category}</PriceText>}</span>
            <h2 id={titleId}>{<PriceText>{title}</PriceText>}</h2>
          </div>
          <div className="project-modal-actions">
            <a href={src} target="_blank" rel="noopener noreferrer">
               Abrir en una pestaña nueva <span aria-hidden="true">↗</span>
            </a>
            <button ref={closeRef} type="button" onClick={() => setIsOpen(false)} aria-label={`Fechar projeto ${title}`}>
               Cerrar <span aria-hidden="true">×</span>
            </button>
          </div>
        </header>
        <div className="project-modal-site">
          <iframe src={src} title={`Site completo do projeto ${title}`} />
        </div>
      </section>
    </div>
  ) : null;

  return (
    <>
      <div className="project-static-preview" aria-hidden="true">
        <Image
          src={image}
          alt=""
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          unoptimized
        />
      </div>
      <button
        ref={openerRef}
        className="project-open-button"
        type="button"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-label={`Abrir o projeto ${title} em uma janela de visualização`}
      >
        <span> Conocer el proyecto </span>
        <i aria-hidden="true">↗</i>
      </button>
      {<PriceText>{typeof document !== "undefined" && modal ? createPortal(modal, document.body) : null}</PriceText>}
    </>
  );
}
