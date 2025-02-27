import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ - Toutes vos questions sur la création d'un site par un freelance",
    description: "Vous avez des questions sur la création d'un site par un freelance ? Découvrez toutes les réponses à vos questions sur la création de site web."
};

const Faq = () => {
    return (
        <div className='container-faqPage min-h-screen p-5'>
            <h1 className='text-center font-title text-4xl'>FAQ - Toutes vos questions sur la création d'un site par un freelance</h1>
        </div>
    );
};

export default Faq;