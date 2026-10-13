'use client';
import {useRef} from 'react';
export default function OnePageMenu(){const menu=useRef<HTMLDetailsElement>(null);return <details className="op-mobile-menu" ref={menu}><summary>Menu <span aria-hidden="true">☰</span></summary><nav aria-label="Navegação no celular" onClick={()=>{if(menu.current)menu.current.open=false;}}>{[['plano','O plano'],['exemplos','Exemplos'],['como-funciona','Como funciona'],['sobre','Quem somos'],['duvidas','Dúvidas'],['contato','Contato']].map(([id,label])=><a key={id} href={'#'+id}>{label}</a>)}</nav></details>;}
