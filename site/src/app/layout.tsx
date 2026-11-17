import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { businessJsonLd, site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F8FAFC",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
  applicationName: site.businessName,
  authors: [{ name: site.doctorName }],
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    siteName: site.businessName,
    locale: "en_IN",
    type: "website",
    ...(site.publicSiteUrl ? { url: site.publicSiteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.metaDescription,
  },
  ...(site.publicSiteUrl
    ? {
        metadataBase: new URL(site.publicSiteUrl),
        alternates: { canonical: site.publicSiteUrl },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = JSON.stringify(businessJsonLd()).replace(/</g, "\\u003c");

  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} h-full`}>
      <body className="min-h-full bg-paper text-navy antialiased">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      </body>
    </html>
  );
}
