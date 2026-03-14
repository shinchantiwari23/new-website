import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Interactions } from "./components/Interactions";

// Screenshots
import ss1 from "@/assets/ss1.png";
import ss2 from "@/assets/ss2.png";
import ss3 from "@/assets/ss3.png";
import ss4 from "@/assets/ss4.png";

// Integration logos
import excelLogo from "@/assets/SVG/excel.svg";
import gsheetsLogo from "@/assets/SVG/googleSheets.svg";
import salesforceLogo from "@/assets/SVG/salesforce.svg";
import hubspotLogo from "@/assets/SVG/hubspot.svg";
import snowflakeLogo from "@/assets/SVG/snowflake.svg";
import quickbooksLogo from "@/assets/SVG/quickbooks.svg";
import stripeLogo from "@/assets/SVG/stripe.svg";
import airtableLogo from "@/assets/SVG/airtable.svg";
import tableauLogo from "@/assets/SVG/tableau.svg";
import xeroLogo from "@/assets/SVG/xero.svg";
import databricksLogo from "@/assets/SVG/databricks.svg";
import gaLogo from "@/assets/SVG/googleanalytics.svg";
import postgresLogo from "@/assets/SVG/postgresql.svg";
import notionLogo from "@/assets/SVG/notion.svg";
import bigqueryLogo from "@/assets/SVG/googleBigquery.svg";
import mongodbLogo from "@/assets/SVG/mongoDB.svg";
import mysqlLogo from "@/assets/SVG/mysql.svg";
import zendeskLogo from "@/assets/SVG/zendesk.svg";
import shopifyLogo from "@/assets/SVG/shopify.svg";
import awsLogo from "@/assets/SVG/aws.svg";
import lookerLogo from "@/assets/SVG/looker.svg";
import ripplingLogo from "@/assets/SVG/rippling.svg";
import zohoLogo from "@/assets/SVG/zohoBooks.svg";
import microsoftSQLLogo from "@/assets/SVG/microsoftsql.svg";

// ── Structured data ───────────────────────────────────────────────

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
  operatingSystem: "Windows, Mac",
  description:
    "Lexa AI is the Excel add-in that answers FP&A questions in plain English — charts, forecasts, variance analysis, and outlier detection in seconds.",
  url: "https://www.trylexa.com",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Lexa AI integrate with Excel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lexa installs as an Excel add-in directly from Microsoft AppSource. Once installed, it appears as a sidebar panel that you can open in any workbook.",
      },
    },
    {
      "@type": "Question",
      name: "Is my financial data secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Lexa processes queries without persistently storing your spreadsheet data. All connections are encrypted and we follow SOC 2 Type II standards.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "AI Data Analyst for FP&A Teams in Excel",
  description:
    "Lexa AI is the Excel add-in that answers your FP&A questions in plain English — charts, forecasts, variance analysis, and outlier detection in seconds.",
  alternates: { canonical: "/" },
};

// ── Data ──────────────────────────────────────────────────────────

const marqueeLogos = [
  { src: excelLogo, name: "Excel" },
  { src: gsheetsLogo, name: "Google Sheets" },
  { src: salesforceLogo, name: "Salesforce" },
  { src: hubspotLogo, name: "HubSpot" },
  { src: snowflakeLogo, name: "Snowflake" },
  { src: quickbooksLogo, name: "QuickBooks" },
  { src: stripeLogo, name: "Stripe" },
  { src: airtableLogo, name: "Airtable" },
  { src: tableauLogo, name: "Tableau" },
  { src: xeroLogo, name: "Xero" },
  { src: databricksLogo, name: "Databricks" },
  { src: gaLogo, name: "Google Analytics" },
];

const integrationCards = [
  { src: excelLogo, name: "Excel", status: "live" },
  { src: gsheetsLogo, name: "Google Sheets", status: "live" },
  { src: salesforceLogo, name: "Salesforce", status: "live" },
  { src: hubspotLogo, name: "HubSpot", status: "live" },
  { src: snowflakeLogo, name: "Snowflake", status: "live" },
  { src: quickbooksLogo, name: "QuickBooks", status: "live" },
  { src: stripeLogo, name: "Stripe", status: "live" },
  { src: airtableLogo, name: "Airtable", status: "live" },
  { src: xeroLogo, name: "Xero", status: "live" },
  { src: tableauLogo, name: "Tableau", status: "soon" },
  { src: postgresLogo, name: "PostgreSQL", status: "live" },
  { src: bigqueryLogo, name: "BigQuery", status: "soon" },
  { src: databricksLogo, name: "Databricks", status: "soon" },
  { src: gaLogo, name: "Google Analytics", status: "live" },
  { src: mongodbLogo, name: "MongoDB", status: "soon" },
  { src: mysqlLogo, name: "MySQL", status: "live" },
  { src: lookerLogo, name: "Looker", status: "soon" },
  { src: shopifyLogo, name: "Shopify", status: "live" },
  { src: notionLogo, name: "Notion", status: "soon" },
  { src: zendeskLogo, name: "Zendesk", status: "soon" },
  { src: ripplingLogo, name: "Rippling", status: "soon" },
  { src: awsLogo, name: "AWS", status: "soon" },
  { src: zohoLogo, name: "Zoho Books", status: "soon" },
  { src: microsoftSQLLogo, name: "SQL Server", status: "live" },
];

const features = [
  {
    icon: "💬",
    title: "Conversational Analysis",
    desc: "Ask questions in plain English. Lexa understands your spreadsheet context and executes changes automatically — no formulas needed.",
  },
  {
    icon: "📊",
    title: "Instant Chart Creation",
    desc: "Generate bar, line, waterfall, scatter, heatmap and 8+ more chart types from your data in seconds. Board-ready formatting built in.",
  },
  {
    icon: "🔍",
    title: "Outlier & Anomaly Detection",
    desc: "AI-powered scanning for missing values, statistical outliers, and duplicate entries — highlighted in-sheet before they become costly mistakes.",
  },
  {
    icon: "🔌",
    title: "50+ Native Integrations",
    desc: "Pull live data from Salesforce, HubSpot, Snowflake, QuickBooks and dozens more directly into your Excel workflow.",
  },
  {
    icon: "🐛",
    title: "Formula Debugger",
    desc: "Paste any broken formula and Lexa diagnoses the issue, explains the error in plain language, and suggests a working fix instantly.",
  },
  {
    icon: "⚡",
    title: "Autopilot Mode",
    desc: "Let Lexa run autonomously — format tables, restructure data, clean duplicates, and apply formulas without waiting for approval at every step.",
  },
];

const showcaseRows = [
  {
    eyebrow: "Natural Language",
    title: "Ask Any Finance Question in Plain English",
    desc: "No more hunting through pivot tables or writing complex formulas. Just type what you need — 'Show me Q3 revenue by region vs last year' — and Lexa handles the rest, live in your spreadsheet.",
    points: ["Context-aware across your entire workbook", "Cross-sheet and cross-tab analysis", "Natural language to formula conversion"],
    image: ss2,
    alt: "Lexa AI chat interface showing natural language query for revenue analysis",
  },
  {
    eyebrow: "Visualizations",
    title: "Instant Charts and Board-Ready Visuals",
    desc: "From a single prompt, Lexa creates bar, line, waterfall, scatter, and heatmap charts — automatically formatted, labeled, and ready for your next board deck or stakeholder report.",
    points: ["12+ chart types including waterfall and heatmap", "Auto-labeling, colors, and axis formatting", "One-click export to PowerPoint or PDF"],
    image: ss3,
    alt: "Lexa AI generating charts and visualizations in Excel",
    reverse: true,
  },
  {
    eyebrow: "Data Quality",
    title: "Smart Anomaly Detection, Automatically",
    desc: "Lexa continuously monitors your data and flags statistical outliers, missing values, and data quality issues — highlighting them in-sheet so you catch errors before your numbers go to leadership.",
    points: ["Z-score and IQR-based outlier detection", "Duplicate and missing value identification", "Variance alerts with drill-down explanations"],
    image: ss4,
    alt: "Lexa AI outlier and anomaly detection in Excel spreadsheet",
  },
];

const testimonials = [
  {
    stars: "★★★★★",
    quote: "Cut our monthly close and reporting from 3 days to under 4 hours. The outlier detection alone has saved us from two costly reporting errors that would have gone straight to the board.",
    name: "Sarah Kim",
    role: "VP Finance, Series B SaaS",
    initials: "SK",
    color: "#1a3a28",
  },
  {
    stars: "★★★★★",
    quote: "Our Salesforce pipeline data flows directly into Excel and Lexa lets us slice it any way we want — by rep, stage, region — in seconds. RevOps has never been this fast.",
    name: "Marcus Rivera",
    role: "RevOps Lead, Enterprise SaaS",
    initials: "MR",
    color: "#2d7a4e",
  },
  {
    stars: "★★★★★",
    quote: "I asked Lexa to build our board deck charts in plain language. It created all 12 charts in under 3 minutes, correctly formatted and labeled. Genuinely transformative for a lean finance team.",
    name: "Jamie Park",
    role: "CFO, Growth-stage Startup",
    initials: "JP",
    color: "#0a1a10",
  },
];

const pricingPlans = [
  {
    tier: "Starter",
    price: "$0",
    period: "Free forever",
    features: [
      "50 AI queries / month",
      "5 chart types",
      "Excel add-in",
      "Basic formula debugger",
      "Email support",
    ],
    cta: "Get started free",
    ctaClass: "price-cta-outline",
    featured: false,
  },
  {
    tier: "Pro",
    price: "$29",
    period: "per user / month",
    badge: "Most Popular",
    features: [
      "Unlimited AI queries",
      "All 12 chart types",
      "20+ integrations",
      "Autopilot mode",
      "Advanced outlier detection",
      "Priority support",
    ],
    cta: "Start 14-day free trial",
    ctaClass: "price-cta-green",
    featured: true,
  },
  {
    tier: "Enterprise",
    price: "Custom",
    period: "Contact sales",
    features: [
      "Everything in Pro",
      "50+ integrations",
      "SSO & SAML",
      "Dedicated CSM",
      "Custom data retention",
      "SLA guarantee",
    ],
    cta: "Talk to sales",
    ctaClass: "price-cta-outline",
    featured: false,
  },
];

const faqItems = [
  {
    q: "How does Lexa AI integrate with Excel?",
    a: "Lexa installs as an add-in directly from Microsoft AppSource — no IT involvement required. Once installed, a sidebar panel appears in any Excel workbook. Click to open it, connect your data sources, and start asking questions.",
  },
  {
    q: "Is my financial data secure with Lexa?",
    a: "Yes. Lexa processes your queries without persistently storing your spreadsheet data on our servers. All connections are end-to-end encrypted (TLS 1.3), and we follow SOC 2 Type II security standards.",
  },
  {
    q: "What integrations are available?",
    a: "Lexa connects with 50+ platforms including Salesforce, HubSpot, Google Analytics, Snowflake, QuickBooks, Xero, Stripe, Airtable, and more. New integrations are added every month based on customer requests.",
  },
  {
    q: "Can my entire FP&A team use Lexa together?",
    a: "Yes. Pro and Enterprise plans support team workspaces with shared chat history, templates, and role-based permission controls. Everyone sees the same data, with the same governance controls your finance team requires.",
  },
  {
    q: "What's the difference between Chat and Autopilot mode?",
    a: "In Chat mode, Lexa confirms each change before applying it to your spreadsheet — great for precise, step-by-step work. Autopilot mode lets Lexa execute a sequence of tasks autonomously, perfect for repetitive formatting, data cleaning, or batch reporting.",
  },
];

// ── Component ─────────────────────────────────────────────────────

export default function Home() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav className="nav">
        <Link href="/" className="nav-logo" aria-label="Lexa AI home">
          <div className="nav-logo-mark" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 14L9 4L15 14H3Z" fill="#3eb877" />
              <path d="M6.5 14L9 9.5L11.5 14H6.5Z" fill="#0a1a10" />
            </svg>
          </div>
          Lexa
        </Link>

        <ul className="nav-links" aria-label="Primary navigation">
          <li><a href="#features">Features</a></li>
          <li><a href="#integrations">Integrations</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        <div className="nav-actions">
          <a className="nav-btn-ghost" href="mailto:hello@trylexa.com">Log in</a>
          <a className="nav-btn-primary" href="mailto:hello@trylexa.com?subject=Lexa%20AI%20Demo">
            Get started free
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-glow-side" aria-hidden="true" />

        <div className="hero-inner">
          {/* Content */}
          <div className="hero-content">
            <div className="hero-badge" aria-label="Status badge">
              <div className="hero-badge-live" aria-hidden="true" />
              Now live on Microsoft AppSource
            </div>

            <h1 className="hero-title">
              The AI analyst <em>built<br />for your FP&amp;A</em> team
            </h1>

            <p className="hero-sub">
              Ask questions in plain English. Get instant charts, forecasts,
              variance analysis, and outlier detection — all without leaving
              your Excel spreadsheet.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-green btn-lg"
                href="https://appsource.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install free for Excel →
              </a>
              <a
                className="btn btn-outline-light btn-lg"
                href="mailto:hello@trylexa.com?subject=Lexa%20AI%20Demo"
              >
                <span aria-hidden="true">▶</span> Book a demo
              </a>
            </div>

            <div className="hero-proof">
              <span className="hero-stars" aria-label="4.8 out of 5 stars">★★★★★</span>
              <span>4.8 / 5</span>
              <div className="hero-proof-sep" aria-hidden="true" />
              <span>Trusted by <strong>8,400+</strong> finance professionals</span>
            </div>
          </div>

          {/* Visual */}
          <div className="hero-visual">
            {/* Excel window frame */}
            <div className="xl-frame" role="img" aria-label="Lexa AI Excel add-in interface">
              <div className="xl-chrome" aria-hidden="true">
                <div className="xl-dots">
                  <div className="xl-dot" style={{ background: "#ff5f57" }} />
                  <div className="xl-dot" style={{ background: "#febc2e" }} />
                  <div className="xl-dot" style={{ background: "#28c840" }} />
                </div>
                <span className="xl-chrome-label">Lexa AI — Excel Add-in</span>
              </div>
              <div className="xl-body">
                <Image
                  src={ss1}
                  alt="Lexa AI sidebar open in Microsoft Excel showing FP&A analysis"
                  priority
                  sizes="(max-width: 900px) 90vw, 50vw"
                />
              </div>
            </div>

            {/* Floating metric pills */}
            <div className="fp fp-1" aria-hidden="true">
              <div className="fp-dot" style={{ background: "#3eb877" }} />
              Revenue up 24% MoM ↑
            </div>
            <div className="fp fp-2" aria-hidden="true">
              <div className="fp-dot" style={{ background: "#f59e0b" }} />
              3 outliers detected
            </div>
            <div className="fp fp-3" aria-hidden="true">
              <div className="fp-dot" style={{ background: "#3eb877" }} />
              Forecast updated ✓
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────── */}
      <div className="stats-bar" role="region" aria-label="Key metrics">
        <div className="stats-inner">
          <div className="stat-item fade-in">
            <div className="stat-number">45%</div>
            <div className="stat-label">faster monthly reporting cycles</div>
          </div>
          <div className="stat-item fade-in" style={{ transitionDelay: "0.1s" }}>
            <div className="stat-number">60%</div>
            <div className="stat-label">reduction in manual analysis work</div>
          </div>
          <div className="stat-item fade-in" style={{ transitionDelay: "0.2s" }}>
            <div className="stat-number">8,400+</div>
            <div className="stat-label">finance teams worldwide</div>
          </div>
        </div>
      </div>

      {/* ── LOGO MARQUEE ────────────────────────────────────────── */}
      <div className="logos-section" aria-label="Integration partners">
        <p className="logos-label">Works with the tools your team already uses</p>
        <div className="logos-track-wrapper">
          <div className="logos-track" aria-hidden="true">
            {/* First set */}
            {marqueeLogos.map((logo) => (
              <div className="logo-item" key={logo.name}>
                <img src={logo.src} width={26} height={26} alt="" />
                <span>{logo.name}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {marqueeLogos.map((logo) => (
              <div className="logo-item" key={`dup-${logo.name}`}>
                <img src={logo.src} width={26} height={26} alt="" />
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURES ────────────────────────────────────────────── */}
      <section className="features-section" id="features" aria-labelledby="features-heading">
        <div className="wrap">
          <div className="features-header">
            <div className="section-eyebrow">Capabilities</div>
            <h2 className="section-title" id="features-heading">
              Everything your FP&amp;A team<br />needs — in one sidebar
            </h2>
            <p className="section-sub">
              From natural language queries to automated chart generation,
              Lexa handles the heavy lifting so your analysts can focus on
              what matters: insights, not spreadsheet mechanics.
            </p>
          </div>

          <div className="features-grid">
            {features.map((f) => (
              <div className="feat-card fade-in" key={f.title}>
                <div className="feat-icon" aria-hidden="true">{f.icon}</div>
                <h3 className="feat-title">{f.title}</h3>
                <p className="feat-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE ────────────────────────────────────── */}
      <section className="showcase-section" aria-labelledby="showcase-heading">
        <div className="wrap">
          <div className="showcase-header fade-in">
            <div className="section-eyebrow">How it works</div>
            <h2 className="section-title" id="showcase-heading">
              See Lexa in action
            </h2>
            <p className="section-sub">
              From question to insight in seconds. Lexa lives inside Excel
              so your workflow never changes — only the speed does.
            </p>
          </div>

          {showcaseRows.map((row) => (
            <div
              className={`showcase-row${row.reverse ? " reverse" : ""} fade-in`}
              key={row.title}
            >
              <div className="showcase-content">
                <div className="section-eyebrow">{row.eyebrow}</div>
                <h3>{row.title}</h3>
                <p>{row.desc}</p>
                <ul className="showcase-points">
                  {row.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="showcase-visual">
                <Image
                  src={row.image}
                  alt={row.alt}
                  sizes="(max-width: 900px) 90vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTEGRATIONS ────────────────────────────────────────── */}
      <section className="integrations-section" id="integrations" aria-labelledby="int-heading">
        <div className="int-bg-glow" aria-hidden="true" />
        <div className="wrap">
          <div className="integrations-header fade-in">
            <div className="section-eyebrow">Integrations</div>
            <h2 className="section-title" id="int-heading">
              Connect your entire data stack
            </h2>
            <p className="section-sub">
              50+ native integrations. More added every week. Your live data,
              unified in Excel — no ETL pipelines required.
            </p>
          </div>

          <div className="int-grid fade-in">
            {integrationCards.map((card) => (
              <div className="int-card" key={card.name}>
                <div className="int-card-logo">
                  <img src={card.src} width={36} height={36} alt={card.name} />
                </div>
                <div className="int-card-name">{card.name}</div>
                <div className={`int-card-status ${card.status}`}>
                  {card.status === "live" ? "Live" : "Coming soon"}
                </div>
              </div>
            ))}
          </div>

          <div className="int-cta fade-in">
            <a
              className="btn btn-outline-light"
              href="mailto:hello@trylexa.com?subject=Lexa%20Integrations"
            >
              Request an integration →
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────── */}
      <section className="testimonials-section" aria-labelledby="testi-heading">
        <div className="wrap">
          <div className="testimonials-header fade-in">
            <div className="section-eyebrow">Testimonials</div>
            <h2 className="section-title" id="testi-heading">
              Finance teams love Lexa
            </h2>
            <p className="section-sub">
              From Series A startups to Fortune 500 finance departments — see
              what FP&amp;A teams are saying.
            </p>
          </div>

          <div className="testi-grid">
            {testimonials.map((t) => (
              <div className="testi-card fade-in" key={t.name}>
                <div className="testi-stars" aria-label="5 stars">{t.stars}</div>
                <p className="testi-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testi-author">
                  <div
                    className="testi-avatar"
                    style={{ background: t.color }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────── */}
      <section className="pricing-section" id="pricing" aria-labelledby="pricing-heading">
        <div className="wrap">
          <div className="pricing-header fade-in">
            <div className="section-eyebrow">Pricing</div>
            <h2 className="section-title" id="pricing-heading">
              Simple, transparent pricing
            </h2>
            <p className="section-sub">
              Start free. Scale as your team grows. No surprises.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div
                className={`price-card fade-in${plan.featured ? " featured" : ""}`}
                key={plan.tier}
              >
                {plan.badge && <div className="price-badge">{plan.badge}</div>}
                <div className="price-tier">{plan.tier}</div>
                <div className="price-amount">{plan.price}</div>
                <div className="price-period">{plan.period}</div>
                <div className="price-divider" aria-hidden="true" />
                <ul className="price-features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <div className="price-check" aria-hidden="true">✓</div>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  className={`price-cta ${plan.ctaClass}`}
                  href="mailto:hello@trylexa.com?subject=Lexa%20Pricing"
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="faq-section" id="faq" aria-labelledby="faq-heading">
        <div className="wrap">
          <div className="faq-layout">
            <div>
              <div className="faq-header fade-in">
                <div className="section-eyebrow">FAQ</div>
                <h2 className="section-title" id="faq-heading">
                  Common questions from finance teams
                </h2>
              </div>

              <div className="faq-list fade-in">
                {faqItems.map((item) => (
                  <details className="faq-item" key={item.q}>
                    <summary>
                      {item.q}
                      <div className="faq-icon" aria-hidden="true">+</div>
                    </summary>
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <div className="faq-side fade-in" aria-label="Get started with Lexa">
              <h3>Ready to transform your FP&amp;A workflow?</h3>
              <p>
                Join 8,400+ finance professionals who&apos;ve moved from
                manual spreadsheet analysis to conversational AI-powered
                insights.
              </p>
              <a
                className="faq-side-btn"
                href="https://appsource.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install free for Excel
              </a>
              <a
                className="faq-side-secondary"
                href="mailto:hello@trylexa.com?subject=Lexa%20Demo"
              >
                Schedule a 30-min demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="cta-bg-glow" aria-hidden="true" />
        <div className="cta-inner wrap">
          <div className="cta-eyebrow">Get started today</div>
          <h2 id="cta-heading">
            Stop wrestling<br /><em>with your spreadsheet</em>
          </h2>
          <p>
            Join 8,400+ finance professionals who let Lexa do the heavy
            lifting — so they can focus on the analysis that matters.
          </p>
          <div className="cta-actions">
            <a
              className="btn btn-green btn-lg"
              href="https://appsource.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install free for Excel →
            </a>
            <a
              className="btn btn-outline-light btn-lg"
              href="mailto:hello@trylexa.com?subject=Lexa%20Demo"
            >
              Schedule a demo
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="footer" role="contentinfo">
        <div className="footer-main">
          <div>
            <div className="footer-brand-logo">
              <div className="footer-logo-mark" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M3 14L9 4L15 14H3Z" fill="#3eb877" />
                  <path d="M6.5 14L9 9.5L11.5 14H6.5Z" fill="#112b1e" />
                </svg>
              </div>
              Lexa AI
            </div>
            <p className="footer-tagline">
              The AI data analyst that lives inside Excel. Built for finance
              and operations teams who live in spreadsheets.
            </p>
            <div className="footer-badges">
              <span className="footer-badge">SOC 2 Type II</span>
              <span className="footer-badge">GDPR Ready</span>
              <span className="footer-badge">Microsoft AppSource</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#integrations">Integrations</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Roadmap</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Templates</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">API Status</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="mailto:hello@trylexa.com">Contact</a></li>
              <li><a href="mailto:hello@trylexa.com?subject=Careers">Careers</a></li>
              <li><Link href="/privacy-policy">Privacy</Link></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© {new Date().getFullYear()} Lexa AI. All rights reserved.</span>
          <span className="footer-copy">Built for high-performance finance teams worldwide ✦</span>
        </div>
      </footer>

      <Interactions />
    </div>
  );
}
