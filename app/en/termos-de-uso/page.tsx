import { pageMetadata } from "@/locales/en/lib/metadata";
import type { Metadata } from "next";
import LegalPage from "@/locales/en/components/LegalPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: "Conditions for accessing and using the Ravyt Digital website.",
  alternates: { canonical: `${SITE_URL}/termos-de-uso` },
});

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Access conditions" title="Terms of Use">
      <p className="legal-lead"> By browsing the Ravyt Digital website, you agree to these terms. If you disagree with any condition, stop using the website. </p>
      <h2> 1. Website purpose </h2>
      <p> This website presents Ravyt Digital, its Google, website and SEO services, and content about digital presence. The content is institutional and informational. </p>
      <h2> 2. Proposals and service agreements </h2>
      <p> Messages, estimates, examples and website content do not constitute a contract or final offer. Each project’s scope, schedule, prices, responsibilities and conditions will be defined in a proposal and contract sent to the client before payment. </p>
      <h2> 3. Intellectual property </h2>
      <p> The brand, visual identity, texts, layouts, graphics, code and other content produced by Ravyt are protected by applicable law. Copying, adapting, publishing, selling or exploiting these materials without permission is prohibited, subject to the rights of identified clients and third parties. </p>
      <h2> 4. Appropriate use </h2>
      <p> You agree not to use the website to violate laws, third-party rights, security measures or service availability; introduce malicious code; attempt unauthorized access; or reproduce content improperly. </p>
      <h2> 5. Third-party links and services </h2>
      <p> The website may link to email services or external pages. Ravyt does not control the availability, content or policies of those environments, which are governed by their own terms. </p>
      <h2> 6. Availability and information </h2>
      <p> We aim to keep the website current and working properly, but outages, maintenance or outdated information may occur. Nothing in these terms excludes rights that cannot be waived under applicable law. </p>
      <h2> 7. Privacy </h2>
      <p> Personal data processing related to the website is explained in our <a href="/en/politica-de-privacidade"> Privacy Policy </a>.</p>
      <h2> 8. Changes and legislation </h2>
      <p> These terms may be updated to reflect changes to the website or services. The current version is identified by the date shown at the top and interpreted under Brazilian law, observing the legal rules on jurisdiction. </p>
      <h2> 9. Contact </h2>
      <p> Questions about these terms can be sent to <a href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a>.</p>
    </LegalPage>
  );
}
