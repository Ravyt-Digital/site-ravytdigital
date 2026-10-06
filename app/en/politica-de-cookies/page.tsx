import RegionalLegalNotice from "@/components/i18n/RegionalLegalNotice";
import { pageMetadata } from "@/locales/en/lib/metadata";
import type { Metadata } from "next";
import LegalPage from "@/locales/en/components/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description: "How Ravyt Digital uses essential storage and consent-based measurement.",
  alternates: { canonical: "/en/politica-de-cookies" },
});

export default function CookiePolicyPage() {
  return <LegalPage eyebrow="Privacy and choice" title="Cookie Policy" updated="October 5, 2026">
    <p className="legal-lead"> This policy explains how the Ravyt Digital website uses local storage and measurement technologies. </p>
    <h2> 1. Essential storage </h2>
    <p> We use strictly necessary local storage to record your choice to accept or refuse measurement features. This feature is not used to create profiles. </p>
    <p> An essential cookie remembers your chosen language for up to 12 months, preserving your preference on future visits. </p>
    <h2> 2. Consent-based measurement </h2>
    <p> Metricool, Google Analytics, the Meta Pixel, the Meta Conversions API and our own measurement are only activated after acceptance. They may record page views, scrolling, external clicks, downloads, video interactions, internal searches, WhatsApp, email and phone clicks, primary calls to action and completed form submissions. None of these events includes names, email addresses, phone numbers, message content, health data or additional form contents. </p>
    <h2> 3. Refusal </h2>
    <p> If you refuse, nonessential Metricool, Google and Meta measurement features remain disabled. WhatsApp and email links continue to work normally. </p>
    <h2> 4. Changing your choice </h2><p> Use “Change privacy preferences” at the bottom of any page. If you refuse, new events stop being sent. Meta measurement may be used for advertising campaign attribution and optimization, always subject to your acceptance. </p><h2> 5. Contact </h2>
    <p> Questions can be sent to <a href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a>.</p>
  <RegionalLegalNotice lang="en" kind="cookies"/>
    </LegalPage>;
}
