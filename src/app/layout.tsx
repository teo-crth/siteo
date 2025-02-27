import type { Metadata } from "next";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
