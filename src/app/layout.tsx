import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trylexa.com"),
  title: {
    default: "Lexa AI | FP&A Platform for Planning and Reporting",
    template: "%s | Lexa AI",
  },
  description:
    "Lexa AI is a privacy-first FP&A platform for forecasting, reporting, variance analysis, and finance automation.",
  applicationName: "Lexa AI",
  keywords: [
    "Lexa AI",
    "FP&A software",
    "financial planning and analysis",
    "finance AI",
    "forecasting software",
    "budgeting software",
    "management reporting",
    "excel automation",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.trylexa.com",
    siteName: "Lexa AI",
    title: "Lexa AI | FP&A Platform for Planning and Reporting",
    description:
      "Unify planning, reporting, and analysis with a finance-native AI platform built for modern FP&A teams.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Lexa AI - FP&A platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexa AI | FP&A Platform for Planning and Reporting",
    description:
      "Unify planning, reporting, and analysis with a finance-native AI platform built for modern FP&A teams.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
