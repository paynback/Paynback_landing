import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "../components/layout/Footer";
import Header from "@/components/layout/Header";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import JsonLd from "@/components/seo/JsonLd";
import Analytics from "@/components/seo/Analytics";
import {
  buildMetadata,
  getSiteUrl,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const defaultTitle = "PayNback — India's first in-store shopping reward app";
const defaultDescription =
  "PayNback connects users with nearby merchants offering exclusive discounts, cashback and rewards for in-store shopping across India.";

const socialMeta = buildMetadata({
  title: defaultTitle,
  description: defaultDescription,
  path: "/",
});

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: defaultTitle,
    template: "%s | PayNback",
  },
  description: defaultDescription,
  applicationName: "PayNback",
  alternates: socialMeta.alternates,
  openGraph: socialMeta.openGraph,
  twitter: socialMeta.twitter,
  robots: socialMeta.robots,
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          other: {
            "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
          },
        }
      : {}),
  },
  icons: {
    icon: "/Icons/pnb-blue-logo.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="flex min-h-screen min-h-dvh flex-col">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
