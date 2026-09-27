"use client";

import { useEffect } from "react";

const targets = [
  ".rv-label", "h2", ".rv-intro", ".rv-heading > a",
  ".rv-path li", ".rv-pillars article", ".rv-flow", ".rv-flow-base",
  ".rv-included .rv-split > div > p:not(.rv-label)", ".rv-deliverables li",
  ".rv-offer-price", ".rv-cases article", ".rv-team article",
  ".rv-text-link", ".rv-faq details", ".rv-final .rv-button",
].join(",");

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    document.querySelectorAll<HTMLElement>("main.rv section:not(.rv-hero)").forEach(section => {
      let order = 0;
      section.querySelectorAll<HTMLElement>(targets).forEach(element => {
        const group = element.closest(".rv-pillars article, .rv-offer-price, .rv-cases article, .rv-team article, .rv-faq details");
        if (group && group !== element) return;
        element.style.setProperty("--reveal-delay", `${Math.min(order++, 4) * 75}ms`);
        if (element.getBoundingClientRect().top < window.innerHeight * 0.88) {
          element.classList.add("is-visible");
        } else {
          element.classList.add("reveal-pending");
          observer.observe(element);
        }
      });
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
