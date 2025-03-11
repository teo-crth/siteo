import React from 'react';
import type { Metadata } from "next";
import FormDevis from '../../components/ui/FormDevis';

export const metadata: Metadata = {
    title: "Demander un devis gratuit pour la création d'un site vitrine",
    description: "Création de site vitrine sur-mesure, référencement naturel, maintenance, hébergement, formation Wordpress, audit, conseil, etc. Découvrez toutes les prestations de SitEO pour la création de votre site internet."
};

const DevisVitrinePlus = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Pourquoi demander un devis pour la création de votre site vitrine multipages ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Si vous êtes à la recherche d'un professionnel pour la création de votre site internet à Aix-en-Provence ou ailleurs, vous êtes au bon endroit ! Je vous propose des solutions sur mesure pour concevoir un site internet qui répond parfaitement à vos besoins. Que vous soyez une entreprise, un indépendant, ou que vous ayez un projet personnel, nous avons l’expertise nécessaire pour créer le site qui répondra à vos besoins. Obtenez dès maintenant un devis personnalisé et transparent, adapté à votre projet web."
                }
            },
            {
                "@type": "Question",
                "name": "Quel est le prix d'un site vitrine ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pour un site vitrine avec plusieurs pages la fourchette est entre 750 € et 3 000 €. La fourchette est aussi large car cela dépend grandement des besoins du client en terme fonctionnel. La moyenne pour une PME est entre 1000 et 1 500 €."
                }
            }
        ]
    };

    return (
        <div className='container-devisPage p-8 pb-20 gap-4 font-title flex flex-col justify-start items-center w-full'>
            <h1 className='font-bold text-center md:text-6xl lg:text-6xl xl:text-6xl text-4xl text-secondary text-shadow-white'>Demander un devis pour un site vitrine professionnel</h1>
            <p  className=' font-bold text-center text-2xl'>(Plusieurs pages)</p>
            <h2 className='font-bold text-center text-xl text-amber-500'>Discutons de votre projet de création d'un site par un développeur !</h2>
            <FormDevis devisType='Devis site vitrine (1page)' />
            <section className="container-text flex flex-col justify-center items-center gap-4 w-[95%] md:w-[60%] lg:w-[50%] xl:w-[40%] p-5">
                <h3 className='font-bold text-center text-xl'>Pourquoi demander un devis pour la création de votre site vitrine multipages ?</h3>
                <p className='text-xl text-justify'>Si vous êtes à la recherche d'un professionnel pour la <strong>création de votre site internet à Aix-en-Provence</strong> ou ailleurs, vous êtes au bon endroit ! Je vous propose des solutions sur mesure pour concevoir un site internet qui répond parfaitement à vos besoins. Que vous soyez une entreprise, un indépendant, ou que vous ayez un projet personnel, nous avons l’expertise nécessaire pour créer le site qui répondra à vos besoins. Obtenez dès maintenant un <strong>devis personnalisé</strong> et transparent, adapté à votre projet web.</p>
                <p className='text-xl text-justify'><strong>La réalisation d'un devis pour un site web est gratuit et ne vous engage à rien !</strong></p>
                <h3 className='font-bold text-center text-xl'>Quel est le prix d'un site vitrine ?</h3>
                <p className='text-xl text-justify'>Pour un site vitrine avec plusieurs pages la fourchette est entre 750 € et 3 000 €. La fourchette est aussi large car cela dépend grandement des besoins du client en terme fonctionnel. La moyenne pour une PME est entre 1000 et 1 500 €.</p>
            </section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
        </div>
    );
};

export default DevisVitrinePlus;