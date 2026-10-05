import { headers } from "next/headers";
import { regionalPaymentText } from "@/lib/i18n/regional";
export default async function StructuredData({ data }: { data: object }) {
  const currency = (await headers()).get("x-ravyt-currency") ?? "USD";
  const json = JSON.stringify(data, (_key, value) => typeof value === "string" ? regionalPaymentText(value, currency) : value);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json.replace(/</g, "\\u003c") }} />;
}
