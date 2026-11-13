"use client";

import { useState } from 'react';
import { homeContent } from '@/lib/home-content';

const projects = homeContent.projects.filter(project => !project.demo);

export default function HeroProjects() {
  const [index, setIndex] = useState(0);
  const [hasChanged, setHasChanged] = useState(false);
  const project = projects[index];

  function changeProject(direction: number) {
    setHasChanged(true);
    setIndex(current => (current + direction + projects.length) % projects.length);
  }

  return <section className="rd-showcase" aria-labelledby="hero-projects-title">
    <div className="rd-showcase-light" aria-hidden="true" />
    <header className="rd-showcase-header">
      <h2 id="hero-projects-title">Projetos em destaque</h2>
      <span aria-hidden="true">{String(index + 1).padStart(2, '0')} <i>/</i> {String(projects.length).padStart(2, '0')}</span>
    </header>
    <div className="rd-showcase-frame">
      <div className="rd-showcase-screen">
        <img key={project.id} className={hasChanged ? 'rd-showcase-transition' : undefined}
          src={project.image.replace('.webp', '-800.webp')}
          srcSet={`${project.image.replace('.webp', '-480.webp')} 480w, ${project.image.replace('.webp', '-800.webp')} 800w`}
          sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 800px) 590px, 52vw"
          alt={'Página inicial do site desenvolvido para ' + project.name}
          width={800} height={project.id === 'antonia-moreira' ? 500 : 383}
          fetchPriority={hasChanged ? 'auto' : 'high'} />
      </div>
      <div className="rd-showcase-footer">
        <a className="rd-showcase-project" href={'#projeto-' + project.id}>
          <span><strong>{project.name}</strong><small>{project.category}</small></span>
          <span className="rd-arrow rd-arrow-diagonal" aria-hidden="true" />
        </a>
        <div className="rd-showcase-controls">
          <button type="button" aria-label="Projeto anterior" onClick={() => changeProject(-1)}><span aria-hidden="true">←</span></button>
          <button type="button" aria-label="Próximo projeto" onClick={() => changeProject(1)}><span aria-hidden="true">→</span></button>
        </div>
      </div>
    </div>
    <span className="rd-visually-hidden" aria-live="polite" aria-atomic="true">{hasChanged ? `${project.name}, projeto ${index + 1} de ${projects.length}` : ''}</span>
  </section>;
}
