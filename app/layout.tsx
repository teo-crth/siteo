import type { Metadata } from "next";
import React from "react";
import { AppProvider } from "../context/context";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import BurgerMenu from "./components/ui/burgerMenu";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siteo - Création de site Web",
  description: "Vous avez besoin d'un site Web ? Nous sommes là pour vous aider ! Obtenez un site professionnel et sur-mesure et bien référencé. Contactez-nous dès maintenant !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">
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
