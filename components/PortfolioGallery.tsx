"use client";

import { useRef, useState } from 'react';
import { homeContent } from '@/lib/home-content';

export default function PortfolioGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [project, select] = useState<(typeof homeContent.projects)[number]>();
  return <>
    <div className="rv-projects">{homeContent.projects.map(item =>
      <article className="rv-project" id={'projeto-' + item.id} key={item.id}>
        <button type="button" className="rv-project-image" aria-label={'Ampliar captura de ' + item.name}
          onClick={() => { select(item); dialog.current?.showModal(); }}>
          <img src={item.image.replace('.webp', '-800.webp')}
            srcSet={`${item.image.replace('.webp', '-480.webp')} 480w, ${item.image.replace('.webp', '-800.webp')} 800w`}
            sizes="(max-width:550px) 92vw, (max-width:1250px) 45vw, 580px"
            alt={'Página inicial de ' + item.name} width={800} height={385} loading="lazy" />
          <span aria-hidden="true">Ampliar +</span>
        </button>
        <div>
          <p className="rv-eyebrow">{item.category}</p>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <span className="rv-demo-label">Projeto conceitual</span>
        </div>
      </article>)}</div>
    <dialog ref={dialog} className="rv-project-dialog" aria-labelledby="project-dialog-title" onClose={() => select(undefined)}>
      {project && <>
        <div className="rv-project-dialog-header"><h3 id="project-dialog-title">{project.name}</h3>
          <button type="button" onClick={() => dialog.current?.close()}>Fechar ×</button></div>
        <img src={project.image} alt={'Captura ampliada de ' + project.name} width={1440} height={689} />
      </>}
    </dialog>
  </>;
}
