import React from 'react';
import type { Metadata } from "next";
import FormDevis from '../../components/ui/FormDevis';

export const metadata: Metadata = {
    title: "Formation Wordpress avec un développeur web professionnel",
    description: "Formation wordpress : création de contenu, ajout de pages & d'articles de blog, outils et plugins, référencement naturel, etc. Découvrez les formations Wordpress de SitEO."
};

const FormationWordpress = () => {
    return (
        <div className='container-devisPage p-8 pb-20 gap-16 sm:p-15 font-title min-h-[calc(100vh-159px)]'>
            <h1 className='font-bold text-center md:text-6xl lg:text-6xl xl:text-6xl text-4xl text-secondary'>Demander un devis pour une formation Wordpress</h1>
            <h2 className='font-bold text-center text-xl text-gray-600'>Contenu de la formation adaptée à vos objectifs</h2>
            <FormDevis devisType='Devis Formation Wordpress' />
        </div>
    );
};

export default FormationWordpress;