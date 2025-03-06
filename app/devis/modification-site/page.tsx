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
            <h1 className='font-title font-bold text-center text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-secondary text-shadow-white'>Modification / Refonte de votre site</h1>
            <h3 className='font-bold text-center text-xl text-gray-400'>Vous avez déjà un site internet et vous souhaitez changer son apparence ou ses contenus ?</h3>
            <h2 className='font-bold text-center text-xl text-amber-500'>Demander un devis pour la modification de votre site web par un développeur !</h2>
            <FormDevis devisType='Devis Modification de site existant' />
        </div>
    );
};

export default ModificationSite;