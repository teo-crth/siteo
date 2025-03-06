import React from 'react';
import type { Metadata } from "next";
import Head from 'next/head';
import FormDevis from '../../components/ui/FormDevis';

export const metadata: Metadata = {
    title: "Demander un devis gratuit pour la création d'un site vitrine",
    description: "Création de site vitrine sur-mesure, référencement naturel, maintenance, hébergement, formation Wordpress, audit, conseil, etc. Découvrez toutes les prestations de SitEO pour la création de votre site internet."
};

const DevisPage = () => {

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Pourquoi demander un devis pour la création de votre site vitrine ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La création d'un site vitrine est un excellent moyen de présenter votre entreprise en ligne et de mettre en avant vos produits ou services. Demander un devis pour la création de site vitrine vous permet d'obtenir une estimation claire et précise des coûts nécessaires pour construire un site internet qui reflète l'image de votre entreprise et qui soit à la fois esthétique et fonctionnel. Un site vitrine est souvent la première vitrine numérique de votre entreprise. Il doit donc être conçu pour attirer l'attention de vos visiteurs tout en offrant une navigation simple et optimisée. Avec un devis création de site vitrine, vous pouvez définir les fonctionnalités dont vous avez besoin, comme une page de présentation, une galerie d'images, une section de témoignages clients, ainsi que des options de contact claires. Vous aurez également l'opportunité de choisir le design, le contenu et les options de référencement naturel (SEO) pour optimiser la visibilité de votre site sur Google. Le devis pour un site vitrine vous permet également de comparer les offres des agences spécialisées dans la création de sites vitrine. Vous pourrez ainsi choisir la solution la plus adaptée à vos besoins, qu’il s’agisse d’une solution clé en main ou d’un développement sur mesure. Avec un devis détaillé, vous avez la garantie que votre site vitrine sera conçu selon vos attentes et optimisé pour le référencement afin d'attirer plus de prospects et de clients potentiels."
            }
          }
        ]
      }; 
                            
    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <main>
                <div className='container-devisPage font-title p-8 pb-20 sm:p-15 flex flex-col items-center justify-start w-full gap-3'>
                    <h1 className=' font-bold text-center md:text-6xl lg:text-6xl xl:text-6xl text-4xl text-secondary text-shadow-white'>Demander un devis pour un site vitrine professionnel</h1>
                    <p  className=' font-bold text-center text-2xl'>(1 page)</p>
                    <h3 className='font-bold text-center text-xl text-gray-400'>Site sur-mesure ou Wordpress</h3>
                    <h2 className='font-bold text-center text-xl text-amber-500'>Discutons de votre projet de création d'une landing page par un développeur !</h2>
                    <FormDevis devisType='Devis site vitrine (1page)' />
                    <section className="container-text flex flex-col justify-center items-center gap-4 w-[95%] md:w-[60%] lg:w-[50%] xl:w-[40%] p-5">
                        <h3 className='font-bold text-center text-xl'>Pourquoi demander un devis pour la création de votre site vitrine ?</h3>
                        <p className='text-xl text-justify'>La création d'un site vitrine est un excellent moyen de présenter votre entreprise en ligne et de mettre en avant vos produits ou services. Demander un devis pour la création de site vitrine vous permet d'obtenir une estimation claire et précise des coûts nécessaires pour construire un site internet qui reflète l'image de votre entreprise et qui soit à la fois esthétique et fonctionnel.</p>
                        <p className='text-xl text-justify'>Un site vitrine est souvent la première vitrine numérique de votre entreprise. Il doit donc être conçu pour attirer l'attention de vos visiteurs tout en offrant une navigation simple et optimisée. Avec un devis création de site vitrine, vous pouvez définir les fonctionnalités dont vous avez besoin, comme une page de présentation, une galerie d'images, une section de témoignages clients, ainsi que des options de contact claires. Vous aurez également l'opportunité de choisir le design, le contenu et les options de référencement naturel (SEO) pour optimiser la visibilité de votre site sur Google.</p>
                        <p className='text-xl text-justify'>Le devis pour un site vitrine vous permet également de comparer les offres des agences spécialisées dans la création de sites vitrine. Vous pourrez ainsi choisir la solution la plus adaptée à vos besoins, qu’il s’agisse d’une solution clé en main ou d’un développement sur mesure. Avec un devis détaillé, vous avez la garantie que votre site vitrine sera conçu selon vos attentes et optimisé pour le référencement afin d'attirer plus de prospects et de clients potentiels.</p>
                    </section>
                </div>
            </main>
        </>
    );
};

export default DevisPage;