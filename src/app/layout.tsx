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
  metadataBase: new URL("https://dharma-labs.my.id"),
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
      { url: "/logo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/logo/apple-touch-icon.png",
  },
  openGraph: {
    title: "Dharma Lab - Solusi Digital & Keamanan",
    description:
      "Teknologi untuk melindungi, mengembangkan, dan mempercepat bisnis Anda. Layanan: Cybersecurity, Website, Landing Page, Aplikasi, dan Strategi Digital.",
    url: "https://dharma-labs.my.id",
    siteName: "Dharma Lab",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dharma Labs - IT Solutions & Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharma Lab - Solusi Digital & Keamanan",
    description:
      "Teknologi untuk melindungi, mengembangkan, dan mempercepat bisnis Anda.",
    images: ["/logo/og-image.png"],
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
    canonical: "https://dharma-labs.my.id",
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
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dharma Lab",
              description: "Solusi Digital & Keamanan",
              url: "https://dharma-labs.my.id",
              logo: "https://dharma-labs.my.id/logo/favicon-512.png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["Indonesian", "English"],
              },
              sameAs: [
                "https://wa.me/6288230525469",
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
