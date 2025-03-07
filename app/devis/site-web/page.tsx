import React from 'react';
import type { Metadata } from "next";
import FormDevis from '../../components/ui/FormDevis';

export const metadata: Metadata = {
    title: "Demander un devis gratuit pour la création d'un site web",
    description: "Création de site web sur-mesure, référencement naturel, maintenance, hébergement, formation Wordpress, audit, conseil, etc. Découvrez toutes les prestations de SitEO pour la création de votre site internet."
};

const Devis = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Pourquoi demander un devis pour la création de votre site internet ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Demander un devis pour la création de site internet ou de site web est une étape essentielle pour toute entreprise souhaitant établir une présence en ligne professionnelle. Que vous soyez une petite entreprise, une startup ou une société déjà établie, un site internet bien conçu est crucial pour atteindre vos clients potentiels, augmenter votre visibilité et favoriser la croissance de votre activité. Un site web moderne doit non seulement être esthétique mais aussi offrir une navigation fluide et des fonctionnalités adaptées à vos besoins. Un devis création site internet vous permet de connaître les coûts associés à la conception de votre site, qu’il s’agisse d'un site vitrine, e-commerce, blog ou plateforme plus complexe. Un bon devis vous donnera également un aperçu des services inclus, tels que la création de contenu, le référencement SEO, l'optimisation de la vitesse du site et la sécurité des données. Avec un devis détaillé pour la création de votre site web, vous pourrez comparer différentes offres de professionnels ou d’agences spécialisées. Cela vous permettra de choisir la solution la mieux adaptée à vos attentes, à votre budget et à votre stratégie digitale. Un devis bien structuré vous offre aussi une vision claire du délai de réalisation et des étapes du projet."
                }
            }
        ]
    };

    return (
        <div className='container-devisPage p-8 pb-20 sm:p-15 font-title flex flex-col items-center justify-start w-full gap-3'>
            <h1 className='font-bold text-center md:text-6xl lg:text-6xl xl:text-6xl text-4xl text-secondary text-shadow-white'>Demander un devis pour un site web professionnel</h1>
            <h3 className='font-bold text-center text-xl text-gray-400'>Site sur-mesure ou Wordpress</h3>
            <h2 className='font-bold text-center text-xl text-amber-500'>Discutons de votre projet de création de site internet par un développeur !</h2>
            <FormDevis devisType='Devis site-web' />
            <section className="container-text flex flex-col justify-center items-center gap-4 w-[95%] md:w-[60%] lg:w-[50%] xl:w-[40%] p-5">
                <h3 className='font-bold text-center text-xl'>Pourquoi demander un devis pour la création de votre site internet ?</h3>
                <p className='text-xl text-justify'>Demander un devis pour la création de site internet ou de site web est une étape essentielle pour toute entreprise souhaitant établir une présence en ligne professionnelle. Que vous soyez une petite entreprise, une startup ou une société déjà établie, un site internet bien conçu est crucial pour atteindre vos clients potentiels, augmenter votre visibilité et favoriser la croissance de votre activité.</p>
                <p className='text-xl text-justify'>Un site web moderne doit non seulement être esthétique mais aussi offrir une navigation fluide et des fonctionnalités adaptées à vos besoins. Un devis création site internet vous permet de connaître les coûts associés à la conception de votre site, qu’il s’agisse d'un site vitrine, e-commerce, blog ou plateforme plus complexe. Un bon devis vous donnera également un aperçu des services inclus, tels que la création de contenu, le référencement SEO, l'optimisation de la vitesse du site et la sécurité des données.</p>
                <p className='text-xl text-justify'>Avec un devis détaillé pour la création de votre site web, vous pourrez comparer différentes offres de professionnels ou d’agences spécialisées. Cela vous permettra de choisir la solution la mieux adaptée à vos attentes, à votre budget et à votre stratégie digitale. Un devis bien structuré vous offre aussi une vision claire du délai de réalisation et des étapes du projet.</p>
            </section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
        </div>
    );
};

export default Devis;