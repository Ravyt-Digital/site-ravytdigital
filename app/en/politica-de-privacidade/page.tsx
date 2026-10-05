import RegionalLegalNotice from "@/components/i18n/RegionalLegalNotice";
import { pageMetadata } from "@/locales/en/lib/metadata";
import type { Metadata } from "next";
import LegalPage from "@/locales/en/components/LegalPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Understand how Ravyt Digital handles personal data, cookie preferences and data subject requests.",
  alternates: { canonical: `${SITE_URL}/en/politica-de-privacidade` },
});

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Privacy and transparency" title="Privacy Policy" updated="October 5, 2026">
      <p className="legal-lead"> Ravyt Digital respects your privacy. This policy clearly explains which data may be processed during your interaction with our website and contact channels. </p>
      <h2> 1. Who is responsible for the data </h2>
      <p> Ravyt Digital acts as the controller of personal data related to this website and commercial contacts received through its channels. Questions or requests can be sent to <a href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a>.</p>
      <h2> 2. What information may be collected </h2>
      <ul>
        <li> Information you choose to send directly via WhatsApp or email, under the rules of the chosen channel; </li>
        <li> Name, company, email, phone number, services of interest and message when you submit the contact form; </li>
        <li> Essential technical data, such as IP address, device type, browser and security logs provided by the hosting infrastructure; </li>
        <li> Your choice regarding cookies and measurement features, stored locally on your device. </li>
      </ul>
      <p> Measurement events do not include names, email addresses, phone numbers, message content, health data or other information entered in forms. </p>
      <h2> 3. What we use this information for </h2>
      <p> Data may be used to respond to requests, prepare proposals, provide contracted services, maintain website security and operation, improve the experience and comply with legal or regulatory obligations. </p>
      <h2> 4. Grounds for processing </h2>
      <p>Where applicable, GDPR Article 6 grounds are: consent for optional measurement and advertising; steps requested before a contract and contract performance for inquiries and services; legal obligations for required records; and legitimate interests, subject to balancing, for security. Consent can be withdrawn. US state privacy duties apply where their legal scope is met; LGPD obligations also remain applicable to processing within its scope.</p>
      <h2> 5. Cookies and local storage </h2>
      <p> The website uses essential storage to remember your privacy choice. After acceptance, our own monitoring, Google Analytics managed through Google Tag Manager, the Meta Pixel and the Meta Conversions API record page views, scrolling, downloads, video interactions, internal searches, contact-channel clicks and completed form submissions. We do not send these tools personal data entered in forms or message content. Meta measurement may support attribution, remarketing and advertising campaign optimization. You can revoke or change your authorization using the “Change privacy preferences” button at the bottom of every page. </p>
      <h2> 6. Sharing </h2>
      <p> We do not sell personal data. Information may only be shared with providers necessary for hosting, communication, security, measurement and service delivery, including Google and Meta when consent has been given, within the appropriate limits for each purpose, or when legally required. </p>
      <h2> 7. Retention and security </h2>
      <p> Data is kept only for the time necessary for the stated purpose, the commercial relationship or compliance with applicable obligations. We adopt reasonable organizational and security measures, although no digital environment is completely immune to risks. </p>
      <h2> 8. Your rights </h2>
      <p> Under applicable law, you may request confirmation of processing, access, correction, information about sharing, anonymization, blocking or deletion where applicable, and revoke consent. To exercise your rights, use the email address provided on this page. </p>
      <h2> 9. External links and updates </h2>
      <p> Email links and other services follow those platforms’ own policies. This policy may be updated to reflect changes to the website, services or legislation; the current version’s date will always be shown at the top. </p>
    <RegionalLegalNotice lang="en" kind="privacy"/>
    </LegalPage>
  );
}
