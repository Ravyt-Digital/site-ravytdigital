import { ChecklistCard } from '@/components/ChecklistResource';
import { BlogHeader, BlogFooter } from "@/locales/en/components/BlogChrome";
import { Cases, FinalCTA } from "@/locales/en/components/Commercial";
import { pageMetadata } from "@/locales/en/lib/metadata";
export const metadata=pageMetadata({title:"Ravyt Digital website portfolio",description:"Explore moving previews of websites created by Ravyt Digital: conceptual demonstrations and published sites.",alternates:{canonical:"/en/cases"}});
export default function Page(){return <><BlogHeader/><main className="rv" id="conteudo" tabIndex={-1}><section className="rv-page-hero"><div className="shell"><p className="rv-label"> Website portfolio </p><h1> Every business calls for <br/><em>  its own experience. </em></h1><p className="rv-lead"> Explore the moving website previews. Projects marked as conceptual demonstrations feature illustrative brands and proposals; the others are published websites. </p></div></section><section className="rv-section"><div className="shell"><Cases/></div></section><ChecklistCard lang="en"/><FinalCTA/></main><BlogFooter/></>;}
