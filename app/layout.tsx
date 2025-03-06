import type { Metadata } from "next";
import React from "react";
import Head from "next/head";
import { AppProvider } from "../context/context";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import BurgerMenu from "./components/ui/burgerMenu";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siteo - Création de site Web",
  description: "Vous avez besoin d'un site Web ? Nous sommes là pour vous aider ! Obtenez un site professionnel et sur-mesure et bien référencé. Contactez-nous dès maintenant !",
  verification: {
    google: "RIQOS-Fty0kis8RDCJMLYiQUwHzEQhddqkZYEVPjBmY",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Siteo",
    "alternateName": "SitEO",
    "url": `${BASE_URL}`,
  };

  return (
    <html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <body>
        <AppProvider>
          <Header />
          <main className="min-h-[calc(100vh-152px)]">
            {children}
          </main>
          <Footer />
          <BurgerMenu />
        </AppProvider>
      </body>

    </html>
  );
}
