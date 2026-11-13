"use client";

import { useRef, useState } from 'react';
import { homeContent } from '@/lib/home-content';

const links: Record<string, string> = {
  'ananda-oliveira': 'https://ananda-oliveira-imagem.ravytdigital.chatgpt.site/',
  'capoeira-haute-savoie': 'https://capoeira-haute-savoie.ravytdigital.chatgpt.site/',
  'cerest-tiangua': 'https://cerest-tiangua.ravytdigital.chatgpt.site/',
};

export default function PortfolioGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [project, select] = useState<(typeof homeContent.projects)[number]>();
  function cards(demo: boolean) {
    return <div className="rv-projects">{homeContent.projects.filter(item => item.demo === demo).map(item =>
      <article className="rv-project" id={'projeto-' + item.id} key={item.id}>
        <button type="button" className="rv-project-image" aria-label={'Ampliar captura de ' + item.name}
          onClick={() => { select(item); dialog.current?.showModal(); }}>
          <img src={item.image.replace('.webp', '-800.webp')}
            srcSet={`${item.image.replace('.webp', '-480.webp')} 480w, ${item.image.replace('.webp', '-800.webp')} 800w`}
            sizes="(max-width:600px) 92vw, (max-width:950px) 45vw, 380px"
            alt={'Página inicial de ' + item.name} width={800} height={385} loading="lazy" />
          <span aria-hidden="true">Ampliar +</span>
        </button>
        <div>
          <p className="rv-eyebrow">{item.category}</p>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          {demo ? <span className="rv-demo-label">Projeto conceitual</span> :
            <a className="rv-text-link" href={links[item.id]} target="_blank" rel="noopener noreferrer">Visitar site <span aria-hidden="true">↗</span></a>}
        </div>
      </article>)}</div>;
  }
  return <>
    {cards(false)}
    <details className="rd-demo-list"><summary>Ver projetos conceituais</summary>{cards(true)}</details>
    <dialog ref={dialog} className="rv-project-dialog" aria-labelledby="project-dialog-title" onClose={() => select(undefined)}>
      {project && <>
        <div className="rv-project-dialog-header"><h3 id="project-dialog-title">{project.name}</h3>
          <button type="button" onClick={() => dialog.current?.close()}>Fechar ×</button></div>
        <img src={project.image} alt={'Captura ampliada de ' + project.name} width={1440} height={689} />
      </>}
    </dialog>
  </>;
}
