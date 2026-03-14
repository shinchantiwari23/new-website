import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trylexa.com"),
  title: {
    default: "Lexa AI | AI Data Analyst for FP&A Teams in Excel",
    template: "%s | Lexa AI",
  },
  description:
    "Lexa AI is the Excel add-in that answers your FP&A questions in plain English — charts, forecasts, variance analysis, and outlier detection in seconds.",
  applicationName: "Lexa AI",
  keywords: [
    "FP&A AI",
    "Excel AI add-in",
    "financial planning and analysis",
    "finance AI",
    "forecasting software",
    "Excel automation",
    "variance analysis",
    "financial reporting automation",
    "Lexa AI",
  ],
  category: "technology",
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
    title: "Lexa AI | AI Data Analyst for FP&A Teams",
    description:
      "The Excel add-in that transforms your spreadsheets into a conversational data analyst. Built for FP&A teams.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Lexa AI — FP&A AI for Excel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexa AI | AI Data Analyst for FP&A Teams",
    description:
      "The Excel add-in that transforms your spreadsheets into a conversational data analyst. Built for FP&A teams.",
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
      <body className={`${dmSans.variable} ${instrumentSerif.variable}`}>{children}</body>
    </html>
  );
}
