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
      <section className="presentation m-15 flex flex-col justify-center items-center">
        <h1 className="text-center font-bold font-title md:text-6xl lg:text-6xl xl:text-6xl text-4xl text-secondary text-shadow-white">Création de sites web sur-mesure</h1>
        <h2 className="text-center font-bold font-title md:text-2xl lg:text-2xl xl:text-2xl text-xl text-dark z-2">Développeur freelance à Aix-en-Provence</h2>
        <h3 className="text-center font-bold font-title md:text-xl lg:text-xl xl:text-xl text-lg text-gray-400 z-2">Site vitrine, Blog, Site E-commerce</h3>
        <div className="container-illustration w-full md:w-[50%] lg:w-[35%] xl:w-[20%] p-5 z-2">
          <img className="w-full h-full object-cover" src="/images/illustration.png" alt="illustration colorée d'une personne en position de super-héro devant une page web" />
        </div>
        <div className="container-button w-full flex flex-wrap gap-5 justify-center z-2">
          <Link href="/devis/site-web" className="cursor-pointer z-2" aria-label="Navigation vers la page de demande de devis">
            <Button text="DEMANDER UN DEVIS" type="button" className="bg-secondary px-10 py-3 text-xl text-light z-2 hover:bg-light hover:text-secondary border-4 border-transparent hover:border-secondary hover:border-solid box-border" />
          </Link>
        </div>
      </section>
      <Separator type="1" />
      <section className="container-quiSuisJe flex flex-col items-center justify-center gap-5 bg-secondary text-white pb-20 px-5">
        <h2 className="font-bold font-title md:text-6xl lg:text-6xl xl:text-6xl text-4xl text-white text-center z-2">Qui suis-je ?</h2>
        <div className="container-profilImage w-[200px] h-[200px] rounded-full bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border-2 border-light z-2">
          <img className="w-full h-full object-cover rounded-full" src="/images/profil-2.webp" alt="Photo de profil Téo développeur freelance à Aix-en-Provence" />
        </div>
        <h3 className="text-4xl text-center z-2"><strong>Développeur web à Aix-en-Provence</strong>. </h3>
        <p className="text-xl text-justify w-[95%] md:w-[60%] lg:w-[50%] xl:w-[40%] z-2"><strong>Diplômé en informatique & en Marketing digital</strong>, je propose mes services pour la <strong>création de sites internet</strong> sur-mesure, le <strong>référencement naturel</strong>, <strong>la maintenance</strong>, <strong>l'hébergement</strong>, la <strong>formation Wordpress</strong>, l'audit, le conseil, etc. Je vous accompagne dans la réalisation de votre projet web, de la conception à la mise en ligne, en passant par le développement et l'optimisation de votre site internet.</p>
        <div className="container-illustration w-[50%] md:w-[50%] lg:w-[35%] xl:w-[20%] p-5 z-2">
          <img className="w-full h-full object-cover" src="/images/illustration-3.png" alt="illustration colorée d'une personne en position de super-héro devant une page web" />
        </div>
      </section>
      <Separator type="2" />
      <section className="container-quiSuisJe flex flex-col items-center justify-center gap-5 pb-20 px-5">
        <h2 className="font-bold font-title md:text-6xl lg:text-6xl xl:text-6xl text-4xl text-secondary z-2 text-center text-shadow-white">Mes services</h2>
        <div className="container-illustration w-[50%] md:w-[350%] lg:w-[25%] xl:w-[15%] p-5 z-2 bg-light/35 rounded-full">
          <img className="w-full h-full object-cover" src="/images/illustration-4.png" alt="illustration colorée d'une personne en position de super-héro devant une page web" />
        </div>
        <div className="container-cards-services w-full flex flex-wrap justify-center items-center gap-3 z-2 mt-7">
          <Link href="/tarifs" className="cursor-pointer z-2 w-[95%] md:w-[32%] lg:w-[25%] xl:w-[20%]" aria-label="Navigation vers la page des tarifs">
            <article className='cards-services flex justify-center items-center'>
              <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-xl border-white/18 w-full flex flex-col justify-center items-center gap-2">
                <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg h-[100px] w-full flex flex-col items-center justify-center relative'>
                  <h3 className='font-title font-bold text-center text-2xl md:text-4xl'>Création de site</h3>
                </header>
                <ul className='text-lg font-title font-bold tracking-wider text-light text-center flex justify-center items-start p-5 flex-wrap gap-1'>
                  <li className='bg-secondary rounded-full px-3 py-0.5'>Charte graphique</li>
                  <li className='bg-secondary rounded-full px-3 py-0.5'>Performance</li>
                  <li className='bg-secondary rounded-full px-3 py-0.5'>Responsive</li>
                  <li className='bg-secondary rounded-full px-3 py-0.5'>Optimisation SEO</li>
                </ul>
              </div>
            </article>
          </Link>
          <Link href="/tarifs" className="cursor-pointer z-2 w-[95%] md:w-[32%] lg:w-[25%] xl:w-[20%]" aria-label="Navigation vers la page des tarifs">
            <article className='cards-services flex justify-center items-center'>
              <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-xl border-white/18 w-full flex flex-col justify-center items-center gap-2">
                <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg h-[100px] w-full flex flex-col items-center justify-center relative'>
                  <h3 className='font-title font-bold text-center text-2xl md:text-4xl'>Modification de site</h3>
                </header>
                <ul className='text-lg font-title font-bold tracking-wider text-light text-center flex justify-center items-center flex-wrap p-5 gap-1'>
                  <li className='bg-secondary rounded-full px-3 py-0.5'>Refonte graphique</li>
                  <li className='bg-secondary rounded-full px-3 py-0.5'>Ajout de pages</li>
                  <li className='bg-secondary rounded-full px-3 py-0.5'>Performance</li>
                  <li className='bg-secondary rounded-full px-3 py-0.5'>Contenus</li>
                </ul>
              </div>
            </article>
          </Link>
          <Link href="/tarifs" className="cursor-pointer z-2 w-[95%] md:w-[32%] lg:w-[25%] xl:w-[20%]" aria-label="Navigation vers la page des tarifs">
            <article className='cards-services flex justify-center items-center'>
              <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-xl border-white/18 w-full flex flex-col justify-center items-center gap-2">
                <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg h-[100px] w-full flex flex-col items-center justify-center relative'>
                  <h3 className='font-title font-bold text-center text-2xl md:text-4xl'>Formation</h3>
                </header>
                <ul className='text-lg font-title font-bold tracking-wider text-light text-center flex justify-center items-center flex-wrap p-5 gap-1'>
                  <li className='bg-secondary rounded-full px-3 py-0.5'>Wordpress</li>
                  <li className='bg-secondary rounded-full px-3 py-0.5'>HTML / CSS</li>
                  <li className='bg-secondary rounded-full px-3 py-0.5'>Javascript</li>
                  <li className='bg-secondary rounded-full px-3 py-0.5'>Outils</li>
                  <li className='bg-secondary rounded-full px-3 py-0.5'>Hébergement</li>
                </ul>
              </div>
            </article>
          </Link>
        </div>
      </section>
    </div>
  );
}
