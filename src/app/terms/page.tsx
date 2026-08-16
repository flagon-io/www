import type { Metadata } from "next";
import { Frame } from "@/components/frame";
import { LegalLayout } from "@/components/legal-layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Draft terms of service for Flagon, Inc.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <Frame>
      <LegalLayout title="Terms of Service" updated="August 16, 2026">
        <h2>1. Agreement to terms</h2>
        <p>
          These Terms of Service (the &ldquo;Terms&rdquo;) govern your access to
          and use of the websites, applications, and services offered by Flagon,
          Inc. (&ldquo;Flagon,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By
          accessing or using the services, you agree to be bound by these Terms.
          If you do not agree, do not use the services.
        </p>

        <h2>2. Early access and alpha</h2>
        <p>
          The services are offered on an early-access, alpha basis. Features may
          change, break, or be removed at any time, and availability is not
          guaranteed. We may impose or modify usage limits, suspend features, or
          discontinue the services in whole or in part without notice.
        </p>

        <h2>3. Accounts and eligibility</h2>
        <p>
          You must be able to form a binding contract to use the services and
          are responsible for activity under your account. Keep your credentials
          secure and notify us promptly of any unauthorized use.
        </p>

        <h2>4. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>break the law or infringe the rights of others;</li>
          <li>
            probe, scan, or test the vulnerability of the services without
            authorization, or breach security or authentication measures;
          </li>
          <li>
            interfere with or disrupt the integrity or performance of the
            services; or
          </li>
          <li>
            misuse the services in a way that could harm Flagon or other users.
          </li>
        </ul>

        <h2>5. Your content</h2>
        <p>
          You retain ownership of the content and data you submit to the
          services. You grant Flagon a limited license to host, process, and
          display that content solely to operate and improve the services. You
          are responsible for ensuring you have the rights to your content.
        </p>

        <h2>6. Intellectual property</h2>
        <p>
          The services, including their software, design, and the Flagon name
          and marks, are owned by Flagon, Inc. and protected by intellectual
          property laws. These Terms do not grant you any right to our marks
          without our prior written permission.
        </p>

        <h2>7. Third-party services</h2>
        <p>
          The services may link to or integrate with third-party products. We
          are not responsible for third-party services, and your use of them is
          governed by their own terms.
        </p>

        <h2>8. Disclaimers</h2>
        <p>
          The services are provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; without warranties of any kind, whether express or
          implied, including fitness for a particular purpose and
          non-infringement. This is especially true during early access.
        </p>

        <h2>9. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Flagon, Inc. will not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of data, revenue, or profits, arising
          from your use of the services.
        </p>

        <h2>10. Changes</h2>
        <p>
          We may update these Terms from time to time. If we make material
          changes, we will take reasonable steps to notify you. Your continued
          use of the services after changes take effect constitutes acceptance.
        </p>

        <h2>11. Governing law</h2>
        <p>
          These Terms are governed by the laws of the State of Delaware, without
          regard to its conflict-of-laws rules. Jurisdiction and venue will be
          finalized before general availability.
        </p>

        <h2>12. Contact</h2>
        <p>
          Questions about these Terms? Reach us in the{" "}
          <a href={site.links.discord} target="_blank" rel="noreferrer">
            Flagon Discord
          </a>
          . A formal legal contact will be published before Flagon leaves early
          access.
        </p>
      </LegalLayout>
    </Frame>
  );
}
