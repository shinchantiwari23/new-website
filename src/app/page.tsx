import type { Metadata } from "next";
import Link from "next/link";

const integrations = [
  "Excel",
  "Google Sheets",
  "NetSuite",
  "QuickBooks",
  "Xero",
  "Salesforce",
  "HubSpot",
  "Snowflake",
];

const featureRows = [
  {
    title: "Plan faster with driver-based forecasting",
    copy:
      "Build rolling forecasts from your operational drivers, not static formulas. Lexa keeps assumptions structured, auditable, and easy to explain.",
    points: ["Scenario planning in minutes", "Version control for assumptions", "Board-ready forecast narratives"],
  },
  {
    title: "Close and report without spreadsheet chaos",
    copy:
      "Automate consolidations and reporting packs across entities while preserving finance-grade controls and review workflows.",
    points: ["Automated management reports", "Entity and department rollups", "Approval-ready output for leadership"],
  },
  {
    title: "Ask finance questions in plain language",
    copy:
      "Your team can query revenue, burn, margin, and variance directly. Lexa returns answers tied to source data and logic.",
    points: ["Natural language analysis", "Transparent calculation trails", "AI support with privacy controls"],
  },
];

const faqItems = [
  {
    question: "What does Lexa AI do for FP&A teams?",
    answer:
      "Lexa AI helps FP&A teams automate planning, reporting, and variance analysis while keeping finance controls and model transparency.",
  },
  {
    question: "Does Lexa AI work with spreadsheets and ERPs?",
    answer:
      "Yes. Lexa AI connects with spreadsheet tools and common finance systems to centralize data and streamline monthly workflows.",
  },
  {
    question: "Is Lexa AI privacy-first?",
    answer:
      "Yes. Lexa AI is built with privacy-first controls so finance teams can use AI without compromising sensitive financial data.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lexa AI",
  url: "https://www.trylexa.com",
  logo: "https://www.trylexa.com/opengraph-image",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@trylexa.com",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lexa AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Lexa AI is a privacy-first FP&A platform for forecasting, reporting, variance analysis, and finance automation.",
  url: "https://www.trylexa.com",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: "FP&A Platform for Planning, Forecasting, and Reporting",
  description:
    "Lexa AI helps finance teams automate forecasting, reporting, and variance analysis with privacy-first AI and deep spreadsheet integrations.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="topbar wrap">
        <Link href="/" className="brand" aria-label="Lexa home">
          <span className="brand-mark" aria-hidden="true" />
          <span>Lexa</span>
        </Link>
        <nav className="topnav" aria-label="Primary">
          <a href="#integrations">Integrations</a>
          <a href="#platform">Platform</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="btn btn-ghost" href="mailto:hello@trylexa.com">
          Talk to Sales
        </a>
      </header>

      <main>
        <section className="hero wrap">
          <p className="live-pill">We are live. New workspaces are onboarding now.</p>
          <h1>The FP&amp;A copilot for teams that outgrow messy spreadsheets.</h1>
          <p className="hero-copy">
            Lexa unifies planning, analysis, and reporting with privacy-first AI. Move from manual
            reconciliation to decision-ready finance in one connected workflow.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:hello@trylexa.com?subject=Book%20a%20Lexa%20Demo">
              Book a Demo
            </a>
            <a className="btn btn-ghost" href="#integrations">
              Explore Integrations
            </a>
          </div>

          <div className="metric-grid" id="outcomes">
            <article>
              <h3>45%</h3>
              <p>faster monthly planning cycles</p>
            </article>
            <article>
              <h3>60%</h3>
              <p>less manual reporting effort</p>
            </article>
            <article>
              <h3>99.9%</h3>
              <p>calculation consistency across models</p>
            </article>
          </div>
        </section>

        <section className="integrations wrap" id="integrations">
          <div className="section-head">
            <p className="eyebrow">Integrations</p>
            <h2>Connect your existing finance stack in days, not quarters.</h2>
          </div>
          <div className="logo-cloud" role="list" aria-label="Integrations">
            {integrations.map((item) => (
              <span key={item} role="listitem" className="logo-pill">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="platform wrap" id="platform">
          <div className="section-head">
            <p className="eyebrow">Platform</p>
            <h2>Designed for modern finance teams, not generic BI workflows.</h2>
          </div>
          <div className="feature-stack">
            {featureRows.map((feature) => (
              <article key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
                <ul>
                  {feature.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="cta wrap" id="faq">
          <h2>Replace patchwork FP&amp;A tooling with one finance-native system.</h2>
          <p>
            Launch quickly, keep your existing data model, and give every stakeholder trustworthy
            numbers.
          </p>
          <a className="btn btn-primary" href="mailto:hello@trylexa.com?subject=Get%20Started%20with%20Lexa">
            Start with Lexa
          </a>
        </section>

        <section className="platform wrap">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from finance teams evaluating Lexa AI.</h2>
          </div>
          <div className="feature-stack">
            {faqItems.map((item) => (
              <article className="feature-card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
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
