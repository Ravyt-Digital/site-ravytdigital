import type {Metadata} from 'next';
export const metadata:Metadata={title:'Página não encontrada | Ravyt Digital',robots:{index:false,follow:true}};
export default function NotFound(){return <main id="conteudo" className="not-found-page"><div className="shell"><p>Erro 404</p><h1>Este endereço não está disponível.</h1><p>A Ravyt reúne suas informações em uma única página.</p><a className="rv-button" href="/">Ir para a página principal</a></div></main>;}
