import type { Metadata } from "next";
import { Frame } from "@/components/frame";
import { LegalLayout } from "@/components/legal-layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Draft privacy policy for Flagon, Inc.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <Frame>
      <LegalLayout title="Privacy Policy" updated="August 16, 2026">
        <h2>1. Overview</h2>
        <p>
          This Privacy Policy explains how Flagon, Inc. (&ldquo;Flagon,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects, uses, and shares
          information when you use our websites and services. During early
          access, our data practices may evolve alongside the product.
        </p>

        <h2>2. Information we collect</h2>
        <ul>
          <li>
            <strong>Account information</strong> you provide, such as name,
            email, and organization details.
          </li>
          <li>
            <strong>Content and usage data</strong> generated as you use the
            services, including projects, environments, and settings.
          </li>
          <li>
            <strong>Technical data</strong> such as IP address, device and
            browser information, and log data.
          </li>
        </ul>

        <h2>3. How we use information</h2>
        <ul>
          <li>to provide, maintain, and improve the services;</li>
          <li>to communicate with you about updates, security, and support;</li>
          <li>to monitor, secure, and troubleshoot the services; and</li>
          <li>to comply with legal obligations.</li>
        </ul>

        <h2>4. How we share information</h2>
        <p>
          We do not sell your personal information. We may share information with
          service providers who process data on our behalf, when required by
          law, or in connection with a business transfer. Any such sharing is
          subject to appropriate safeguards.
        </p>

        <h2>5. Cookies and analytics</h2>
        <p>
          We may use cookies and similar technologies to keep you signed in,
          remember preferences, and understand how the services are used. You can
          control cookies through your browser settings.
        </p>

        <h2>6. Data retention</h2>
        <p>
          We retain information for as long as needed to provide the services and
          for legitimate business or legal purposes. When no longer needed, we
          take reasonable steps to delete or anonymize it.
        </p>

        <h2>7. Security</h2>
        <p>
          We use administrative, technical, and physical safeguards designed to
          protect your information. No method of transmission or storage is
          completely secure, particularly during early access.
        </p>

        <h2>8. Your choices and rights</h2>
        <p>
          Depending on where you live, you may have rights to access, correct,
          delete, or port your personal information, or to object to certain
          processing. We will honor applicable rights and describe how to
          exercise them before general availability.
        </p>

        <h2>9. International users</h2>
        <p>
          We operate from the United States. If you access the services from
          elsewhere, your information may be transferred to and processed in the
          United States and other countries.
        </p>

        <h2>10. Children</h2>
        <p>
          The services are not directed to children under 13, and we do not
          knowingly collect personal information from them.
        </p>

        <h2>11. Changes</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make
          material changes, we will take reasonable steps to notify you.
        </p>

        <h2>12. Contact</h2>
        <p>
          Questions about privacy? Reach us in the{" "}
          <a href={site.links.discord} target="_blank" rel="noreferrer">
            Flagon Discord
          </a>
          . A formal privacy contact will be published before Flagon leaves early
          access.
        </p>
      </LegalLayout>
    </Frame>
  );
}
