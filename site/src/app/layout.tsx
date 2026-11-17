import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ContactChrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { businessJsonLd, site } from "@/lib/site";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
  applicationName: site.businessName,
  authors: [{ name: site.doctorName }],
  creator: site.businessName,
  category: "health",
  robots: { index: true, follow: true },
  alternates: site.publicSiteUrl ? { canonical: site.publicSiteUrl } : undefined,
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    locale: "en_IN",
    type: "website",
    siteName: site.businessName,
    url: site.publicSiteUrl || undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.metaDescription,
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#102A43",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const json = JSON.stringify(businessJsonLd()).replace(/</g, "\\u003c");
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="overflow-x-clip antialiased">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <ContactChrome />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
      </body>
    </html>
  );
}
