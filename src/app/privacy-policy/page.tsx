import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Lexa AI collects, uses, and protects your information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const policySections = [
  {
    title: "Information We Collect",
    body:
      "We collect information you provide directly (such as contact details and account data) and information generated through your use of the service, including usage and device data.",
    items: [
      "Contact and account details (name, email, company name).",
      "Usage data (features used, pages visited, log data).",
      "Device and connection data (browser type, IP address, time zone).",
    ],
  },
  {
    title: "How We Use Information",
    body:
      "We use information to operate, improve, and secure the service, to communicate with you, and to comply with legal obligations.",
    items: [
      "Provide and improve Lexa AI features and support.",
      "Maintain security, prevent abuse, and enforce policies.",
      "Send service updates, product information, and administrative messages.",
    ],
  },
  {
    title: "How We Share Information",
    body:
      "We do not sell your personal information. We share data with service providers who help us run the platform, and when required by law or to protect rights and safety.",
    items: [
      "Vendors who process data on our behalf under contractual safeguards.",
      "Legal or regulatory requests where disclosure is required.",
      "Business transfers if Lexa AI is involved in a merger or acquisition.",
    ],
  },
  {
    title: "Data Retention",
    body:
      "We retain information for as long as necessary to provide the service and meet legal obligations. Retention periods depend on data type and contractual requirements.",
  },
  {
    title: "Security",
    body:
      "We use administrative, technical, and physical safeguards designed to protect information. No system is 100% secure, so we encourage responsible use and access controls.",
  },
  {
    title: "Your Choices",
    body:
      "You can request access, correction, or deletion of your information, and opt out of non-essential communications. Contact us to submit a request.",
  },
  {
    title: "Children's Privacy",
    body:
      "Lexa AI is not intended for children under 13, and we do not knowingly collect personal information from children.",
  },
  {
    title: "International Transfers",
    body:
      "If you access the service from outside the United States, your information may be processed in the United States or other jurisdictions where we or our providers operate.",
  },
  {
    title: "Contact Us",
    body:
      "Questions about this policy? Email us at hello@trylexa.com.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="site-shell">
      <header className="topbar wrap">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true" />
          Lexa AI
        </Link>
        <nav className="topnav" aria-label="Primary">
          <a href="mailto:hello@trylexa.com">Contact</a>
          <a href="mailto:hello@trylexa.com?subject=Get%20Started%20with%20Lexa">Get started</a>
        </nav>
      </header>

      <main className="legal wrap">
        <div className="legal-card">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: March 12, 2026</p>
          <p className="legal-intro">
            This Privacy Policy explains how Lexa AI collects, uses, and shares information when you use our
            website and services.
          </p>
        </div>

        <div className="legal-body">
          {policySections.map((section) => (
            <section key={section.title} className="legal-section">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.items ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </main>

      <footer className="footer wrap">
        <p>© {new Date().getFullYear()} Lexa. Built for high-performance finance teams.</p>
        <div>
          <a href="mailto:hello@trylexa.com">Contact</a>
          <span aria-hidden="true"> · </span>
          <Link href="/privacy-policy">Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
