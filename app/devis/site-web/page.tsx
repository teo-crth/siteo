import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Demander un devis gratuit pour la création d'un site web",
    description: "Création de site web sur-mesure, référencement naturel, maintenance, hébergement, formation Wordpress, audit, conseil, etc. Découvrez toutes les prestations de SitEO pour la création de votre site internet."
};

const Devis = () => {
    return (
        <div className='container-devisPage p-8 pb-20 gap-16 sm:p-15 font-title'>
            <h1 className='font-bold text-center md:text-6xl lg:text-6xl xl:text-6xl text-4xl text-secondary'>Demander un devis pour un site web professionnel</h1>
            <h2 className='font-bold text-center text-xl text-gray-600'>Site sur-mesure ou Wordpress</h2>
        </div>
    );
};

export default Devis;