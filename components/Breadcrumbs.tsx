
import {PriceText} from "@/components/i18n/Regional";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import StructuredData from "./StructuredData";

type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items, structured = true, lang = 'pt' }: { items: Crumb[]; structured?: boolean; lang?: 'pt'|'en'|'fr'|'es' }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.name,
      item: new URL(item.href, SITE_URL).href,
    })),
  };
  return <>
    <nav className="content-breadcrumbs" aria-label={{pt:'Caminho da página',en:'Breadcrumb trail',fr:'Fil d’Ariane',es:'Ruta de la página'}[lang]}>
      <ol>{<PriceText>{items.map((item, index) => <li key={item.href}>
        {<PriceText>{index === items.length - 1 ? <span aria-current="page">{<PriceText>{item.name}</PriceText>}</span> : <Link href={item.href}>{<PriceText>{item.name}</PriceText>}</Link>}</PriceText>}
      </li>)}</PriceText>}</ol>
    </nav>
    {<PriceText>{structured && <StructuredData data={schema} />}</PriceText>}
  </>;
}
