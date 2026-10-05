import { ChecklistCard } from '@/components/ChecklistResource';
import { BlogHeader, BlogFooter } from "@/locales/fr/components/BlogChrome";
import { Cases, FinalCTA } from "@/locales/fr/components/Commercial";
import { pageMetadata } from "@/locales/fr/lib/metadata";
export const metadata=pageMetadata({title:"Portfolio de sites de Ravyt Digital",description:"Explorez les aperçus animés de sites créés par Ravyt Digital : démonstrations conceptuelles et sites publiés.",alternates:{canonical:"/fr/cases"}});
export default function Page(){return <><BlogHeader/><main className="rv" id="conteudo" tabIndex={-1}><section className="rv-page-hero"><div className="shell"><p className="rv-label"> Portfolio de sites </p><h1> Chaque entreprise appelle <br/><em>  une expérience qui lui est propre. </em></h1><p className="rv-lead"> Explorez les aperçus animés des sites. Les projets identifiés comme démonstrations conceptuelles présentent des marques et des propositions illustratives ; les autres sont des sites publiés. </p></div></section><section className="rv-section"><div className="shell"><Cases/></div></section><ChecklistCard lang="fr"/><FinalCTA/></main><BlogFooter/></>;}
