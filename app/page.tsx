import Link from "next/link";
import Button from './components/ui/button';
import type { Metadata } from "next";
import Separator from "./components/ui/Separator";

export const metadata: Metadata = {
  title: "Création de site internet - Demandez un devis gratuit",
  description: "Création de site internet sur-mesure, référencement naturel, maintenance, hébergement, formation Wordpress, audit, conseil, etc. Découvrez toutes les prestations de SitEO pour la création de votre site internet."
};

export default function Home() {

  return (
    <div className="container-homePage pb-20 gap-16 w-full">
      <section className="presentation m-15">
        <h1 className="text-center font-bold font-title md:text-6xl lg:text-6xl xl:text-6xl text-4xl text-secondary">Création de sites web sur-mesure</h1>
        <h2 className="text-center font-bold font-title md:text-2xl lg:text-2xl xl:text-2xl text-xl text-dark z-2">Développeur freelance à Aix-en-Provence</h2>
        <h3 className="text-center font-bold font-title md:text-xl lg:text-xl xl:text-xl text-lg text-gray-400 z-2">Site vitrine, Blog, Site E-commerce</h3>
        <div className="container-button w-full flex justify-center mt-5">
          <Link href="/devis/site-web" className="cursor-pointer z-2" aria-label="Navigation vers la page de demande de devis">
            <Button text="Demander un devis" type="button" className="bg-secondary text-light z-2" />
          </Link>
        </div>
      </section>
      <Separator type="1"/>
      <section className="container-quiSuisJe flex flex-col items-center justify-center gap-5 bg-secondary text-white pb-20 px-5">
        <h2 className="font-bold font-title text-4xl text-white z-2">Qui suis-je ?</h2>
        <div className="container-profilImage w-[200px] h-[200px] rounded-full bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border-2 border-light z-2">
          <img className="w-full h-full object-cover rounded-full" src="/images/profil-2.webp" alt="Photo de profil Téo développeur freelance à Aix-en-Provence" />
        </div>
        <h3 className="text-4xl text-center z-2"><strong>Développeur web freelance à Aix-en-Provence</strong>. </h3>
        <p className="text-xl text-justify w-[95%] md:w-[60%] lg:w-[50%] xl:w-[40%] z-2"><strong>Diplômé en informatique & en Marketing digital</strong>, je propose mes services pour la <strong>création de sites internet</strong> sur-mesure, le <strong>référencement naturel</strong>, <strong>la maintenance</strong>, <strong>l'hébergement</strong>, la <strong>formation Wordpress</strong>, l'audit, le conseil, etc. Je vous accompagne dans la réalisation de votre projet web, de la conception à la mise en ligne, en passant par le développement et l'optimisation de votre site internet.</p>
      </section>
      <Separator type="2"/>
    </div>
  );
}
