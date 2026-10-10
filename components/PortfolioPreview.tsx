'use client';
import { useEffect, useRef } from 'react';

export default function PortfolioPreview({ slug, name }: { slug: string; name: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!video.src) video.src = `/projects/portfolio/${slug}.mp4`;
        video.play().then(() => video.classList.add('is-playing')).catch(() => {});
      } else video.pause();
    }, { threshold: 0.2 });
    observer.observe(video);
    return () => { observer.disconnect(); video.pause(); };
  }, [slug]);

  return <div className="rv-project-image">
    <picture><source media="(max-width:700px)" srcSet={`/projects/portfolio/${slug}-400.webp`}/><img src={`/projects/portfolio/${slug}.webp`} srcSet={`/projects/portfolio/${slug}-400.webp 400w, /projects/portfolio/${slug}.webp 720w`} sizes="(max-width:700px) calc(100vw - 48px), (max-width:1230px) calc((100vw - 76px) / 2), 576px" width="720" height="494" loading="lazy" decoding="async" alt={`Prévia do site ${name}`}/></picture>
    <video ref={videoRef} muted loop playsInline preload="none" aria-label={`Prévia em movimento do site ${name}`} />
  </div>;
}
