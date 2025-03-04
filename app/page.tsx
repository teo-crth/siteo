import Link from "next/link";
import Button from "./components/ui/button";


export default function Home() {

  return (
    <div className="container-homePage p-8 pb-20 gap-16 sm:p-15">
      <section className="presentation">
        <h1 className="text-center font-bold font-title md:text-6xl lg:text-6xl xl:text-6xl text-4xl text-secondary">Création de sites web sur-mesure</h1>
        <h2 className="text-center font-bold font-title md:text-2xl lg:text-2xl xl:text-2xl text-xl text-dark">Développeur freelance à Aix-en-Provence</h2>
        <h3 className="text-center font-bold font-title md:text-xl lg:text-xl xl:text-xl text-lg text-gray-600">Site vitrine, Blog, Site E-commerce</h3>
        <div className="container-button w-full flex justify-center mt-5">
          <Link href="/devis-site-internet" className="cursor-pointer" aria-label="Navigation vers la page de demande de devis">
            <Button text="Demander un devis" type="button" className="bg-secondary text-light" />
          </Link>
        </div>
      </section>
    </div>
  );
}
