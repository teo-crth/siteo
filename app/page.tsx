import Link from "next/link";
import Button from './components/ui/button';
import type { Metadata } from "next";

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
        <h3 className="text-center font-bold font-title md:text-xl lg:text-xl xl:text-xl text-lg text-gray-600 z-2">Site vitrine, Blog, Site E-commerce</h3>
        <div className="container-button w-full flex justify-center mt-5">
          <Link href="/devis/site-web" className="cursor-pointer z-2" aria-label="Navigation vers la page de demande de devis">
            <Button text="Demander un devis" type="button" className="bg-secondary text-light z-2" />
          </Link>
        </div>
      </section>
      <div className="separator w-vw bg-secondary h-[100px] mt-15 relative">
        <span className="corner-left absolute w-[150px] h-[150px] bg-secondary -top-[150px] z-1 overflow-hidden border-0">
          <span className="absolute bg-white w-[300px] h-[300px] rounded-full bottom-0"></span>
        </span>
        <span className="corner-right absolute w-[150px] h-[150px] bg-white right-0 -z-0 overflow-hidden">
          <span className="absolute bg-secondary w-[300px] h-[300px] rounded-full top-0 right-0 z-1"></span>
        </span>
      </div>
      <section className="container-quiSuisJe flex flex-col items-center justify-center gap-5 bg-secondary text-white pb-10">
        <h2 className="font-bold font-title text-4xl text-white z-2">Qui suis-je ?</h2>
        <h3 className="text-xl text-center z-2">Je suis un développeur web freelance basé à Aix-en-Provence. </h3>
        <p className="text-xl text-justify w-[95%] md:w-[60%] lg:w-[50%] xl:w-[40%]">Je propose mes services pour la création de sites internet sur-mesure, le référencement naturel, la maintenance, l'hébergement, la formation Wordpress, l'audit, le conseil, etc. Je vous accompagne dans la réalisation de votre projet web, de la conception à la mise en ligne, en passant par le développement et l'optimisation de votre site internet.</p>
      </section>
    </div>
  );
}
