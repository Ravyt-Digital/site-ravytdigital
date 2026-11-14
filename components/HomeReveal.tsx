'use client';

import {useEffect} from 'react';

export default function HomeReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const targets = document.querySelectorAll<HTMLElement>(
      '.rv-home :is([data-home-reveal], .rv-project, #guias .rd-article-card)',
    );
    const observer = new IntersectionObserver(entries => {
      for (const {isIntersecting, target} of entries) {
        if (!isIntersecting) continue;
        target.setAttribute('data-reveal-state', 'shown');
        observer.unobserve(target);
      }
    }, {threshold: 0.05});

    for (const target of targets) {
      if (target.getBoundingClientRect().top < window.innerHeight) continue;
      target.dataset.revealState = 'waiting';
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
      for (const target of targets) delete target.dataset.revealState;
    };
  }, []);

  return null;
}
