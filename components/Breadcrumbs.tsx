import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import StructuredData from "./StructuredData";

type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items, structured = true }: { items: Crumb[]; structured?: boolean }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.name,
      item: new URL(item.href, SITE_URL).href,
    })),
  };
  return <>
    <nav className="content-breadcrumbs" aria-label="Caminho da página">
      <ol>{items.map((item, index) => <li key={item.href}>
        {index === items.length - 1 ? <span aria-current="page">{item.name}</span> : <Link href={item.href}>{item.name}</Link>}
      </li>)}</ol>
    </nav>
    {structured && <StructuredData data={schema} />}
  </>;
}
