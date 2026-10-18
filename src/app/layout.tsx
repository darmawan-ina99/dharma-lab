import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dharma.lab"),
  title: {
    default: "Dharma Lab - Solusi Digital & Keamanan",
    template: "%s | Dharma Lab",
  },
  description:
    "Dharma Lab menyediakan solusi digital lengkap: Cybersecurity, Pembuatan Website, Landing Page, Modifikasi Aplikasi, Hoshin Strategy, dan layanan digital lainnya. Lindungi, kembangkan, dan percepat bisnis Anda.",
  keywords: [
    "Dharma Lab",
    "Cybersecurity Indonesia",
    "Jasa Pembuatan Website",
    "Landing Page Profesional",
    "Modifikasi Aplikasi",
    "Hoshin Strategy",
    "Solusi Digital",
    "Keamanan Siber",
    "Konsultan IT Jakarta",
  ],
  authors: [{ name: "Dharma Lab" }],
  creator: "Dharma Lab",
  publisher: "Dharma Lab",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%236366f1'/%3E%3Cstop offset='50%25' stop-color='%23a855f7'/%3E%3Cstop offset='100%25' stop-color='%23ec4899'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' rx='22' fill='url(%23g)'/%3E%3Cpath d='M30 35 L50 25 L70 35 L70 65 L50 75 L30 65 Z' fill='none' stroke='white' stroke-width='4' stroke-linejoin='round'/%3E%3Ccircle cx='50' cy='50' r='8' fill='white'/%3E%3C/svg%3E",
      },
    ],
  },
  openGraph: {
    title: "Dharma Lab - Solusi Digital & Keamanan",
    description:
      "Teknologi untuk melindungi, mengembangkan, dan mempercepat bisnis Anda. Layanan: Cybersecurity, Website, Landing Page, Aplikasi, dan Strategi Digital.",
    url: "https://dharma.lab",
    siteName: "Dharma Lab",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharma Lab - Solusi Digital & Keamanan",
    description:
      "Teknologi untuk melindungi, mengembangkan, dan mempercepat bisnis Anda.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://dharma.lab",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Google Analytics - using Next.js Script component */}
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_title: 'Dharma Lab',
                page_location: window.location.href,
              });
            `,
          }}
        />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dharma Lab",
              description: "Solusi Digital & Keamanan",
              url: "https://dharma.lab",
              logo: "https://dharma.lab/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["Indonesian", "English"],
              },
              sameAs: [
                "https://wa.me/6281234567890",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster position="top-right" richColors />
      </body>
    </html>
  );
}
