'use client';
import { useEffect, useRef } from 'react';

export default function PortfolioPreview({ slug, name }: { slug: string; name: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.2 });
    observer.observe(video);
    return () => { observer.disconnect(); video.pause(); };
  }, []);

  return <div className="rv-project-image">
    <video ref={videoRef} muted loop playsInline preload="none" poster={`/projects/portfolio/${slug}.webp`} aria-label={`Prévia em movimento do site ${name}`}>
      <source src={`/projects/portfolio/${slug}.mp4`} type="video/mp4" />
    </video>
  </div>;
}
