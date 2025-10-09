import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CENTRALE VTC 06 | Chauffeur Privé Nice Monaco Cannes - 06 30 17 45 63",
  description: "CENTRALE VTC 06 - 1ère centrale de chauffeurs privés VTC sur la Côte d'Azur. Service 24h/24, chauffeur en 10-15 min. Tarifs fixes. Nice, Monaco, Cannes, Menton. ☎ 06 30 17 45 63",
  keywords: "VTC Nice, chauffeur privé Côte d'Azur, taxi Nice, VTC Monaco, transfert aéroport Nice, VTC Cannes, VTC Menton, chauffeur privé 06, transport VTC Nice Monaco, centrale VTC",
  openGraph: {
    title: "CENTRALE VTC 06 - Chauffeur Privé Nice Monaco Cannes",
    description: "Service de chauffeur privé VTC disponible 24h/24 sur la Côte d'Azur. Tarifs fixes, réservation immédiate au 06 30 17 45 63",
    locale: "fr_FR",
    type: "website",
    siteName: "CENTRALE VTC 06",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16565329282"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16565329282');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
