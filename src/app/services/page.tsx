import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Les prestations de SitEO pour la création de votre site internet",
    description: "Création de site internet sur-mesure, référencement naturel, maintenance, hébergement, formation Wordpress, audit, conseil, etc. Découvrez toutes les prestations de SitEO pour la création de votre site internet."
};

const Services = () => {
    return (
        <div className='container-servicesPage'>
            <h1>Les prestations de SitEO</h1>
        </div>
    );
};

export default Services;