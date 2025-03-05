import React from 'react';
import type { Metadata } from "next";
import FormDevis from '../../components/ui/FormDevis';

export const metadata: Metadata = {
    title: "Vous avez besoin de modifier / améliorer votre site ? C'est par ici !",
    description: "Découvrez les prestation d'un développeur freelance. Refonte graphique, ajout ou suppression de page, création de fonctionnalités."
};

const ModificationSite = () => {
    return (
        <div className='container-servicesPage flex flex-col items-center justify-start w-full p-8 pb-20 gap-5 sm:p-15'>
            <h1 className='font-title font-bold text-center text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-secondary'>Modification / Refonte de votre site</h1>
            <FormDevis devisType='Devis Modification de site existant' />
        </div>
    );
};

export default ModificationSite;