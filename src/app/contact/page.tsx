import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contactez SitEO pour la création de votre site internet",
    description: "Vous avez besoin d'un site internet ? Contactez SitEO pour la création de votre site internet sur-mesure, référencement naturel, maintenance, hébergement, formation Wordpress, audit, conseil, etc."
};

const Contact = () => {
    return (
        <div className='container-contactPage p-5'>
            <h1 className='font-title font-bold text-center text-4xl'>Contact</h1>
        </div>
    );
};

export default Contact;