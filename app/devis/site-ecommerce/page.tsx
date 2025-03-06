import React from 'react';
import type { Metadata } from "next";
import Head from 'next/head';
import FormDevis from '../../components/ui/FormDevis';

export const metadata: Metadata = {
    title: "Demander un devis gratuit pour la création d'un site E-commerce",
    description: "Création de site E-commerce sur-mesure, référencement naturel, maintenance, hébergement, formation Wordpress, audit, conseil, etc. Découvrez toutes les prestations de SitEO pour la création de votre site internet."
};

const Ecommerce = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Pourquoi demander un devis pour la création de votre site e-commerce ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Lorsque vous souhaitez lancer votre activité en ligne, la création de site e-commerce est une étape cruciale pour réussir. Demander un devis pour la création de site e-commerce vous permet de bien comprendre les coûts associés à votre projet et d'obtenir une solution adaptée à vos besoins. Un site e-commerce performant ne se limite pas à une simple boutique en ligne, il doit être conçu pour maximiser les ventes, offrir une expérience utilisateur fluide et être optimisé pour le référencement SEO. Obtenir un devis personnalisé pour la création de votre site e-commerce vous permettra de connaître le budget nécessaire pour développer des fonctionnalités spécifiques comme un système de paiement sécurisé, la gestion de stocks, des intégrations avec des solutions logistiques, et une interface utilisateur moderne. En outre, cela vous garantit que le développement du site e-commerce répondra à vos objectifs commerciaux tout en respectant les bonnes pratiques en matière de référencement naturel (SEO), pour que votre site soit visible sur les moteurs de recherche comme Google. Un devis pour site e-commerce vous aide également à comparer les offres de différentes agences spécialisées, à choisir des solutions adaptées à votre secteur et à déterminer la meilleure plateforme pour vos besoins (WooCommerce, Shopify, PrestaShop, etc.). Avec un devis clair et détaillé, vous êtes assuré de faire un choix éclairé et d’investir dans un site e-commerce durable qui soutiendra la croissance de votre entreprise."
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
                <div className='container-devisPage p-8 pb-20 gap-3 sm:p-15 font-title flex flex-col items-center justify-start w-full'>
                    <h1 className='font-bold text-center md:text-6xl lg:text-6xl xl:text-6xl text-4xl text-secondary text-shadow-white'>Demander un devis pour un site E-commerce</h1>
                    <h3 className='font-bold text-center text-xl text-gray-400'>Site avec un CMS (prestashop)</h3>
                    <h2 className='font-bold text-center text-xl text-amber-500'>Discutons de votre projet de création d'un site e-commerce par un développeur !</h2>
                    <FormDevis devisType='Devis site e-commerce' />
                    <section className="container-text flex flex-col justify-center items-center gap-4 w-[95%] md:w-[60%] lg:w-[50%] xl:w-[40%] p-5">
                        <h3 className='font-bold text-center text-xl'>Pourquoi demander un devis pour la création de votre site e-commerce ?</h3>
                        <p className='text-xl text-justify'>Lorsque vous souhaitez lancer votre activité en ligne, la création de site e-commerce est une étape cruciale pour réussir. Demander un devis pour la création de site e-commerce vous permet de bien comprendre les coûts associés à votre projet et d'obtenir une solution adaptée à vos besoins. Un site e-commerce performant ne se limite pas à une simple boutique en ligne, il doit être conçu pour maximiser les ventes, offrir une expérience utilisateur fluide et être optimisé pour le référencement SEO.</p>
                        <p className='text-xl text-justify'>Obtenir un devis personnalisé pour la création de votre site e-commerce vous permettra de connaître le budget nécessaire pour développer des fonctionnalités spécifiques comme un système de paiement sécurisé, la gestion de stocks, des intégrations avec des solutions logistiques, et une interface utilisateur moderne. En outre, cela vous garantit que le développement du site e-commerce répondra à vos objectifs commerciaux tout en respectant les bonnes pratiques en matière de référencement naturel (SEO), pour que votre site soit visible sur les moteurs de recherche comme Google.</p>
                        <p className='text-xl text-justify'>Un devis pour site e-commerce vous aide également à comparer les offres de différentes agences spécialisées, à choisir des solutions adaptées à votre secteur et à déterminer la meilleure plateforme pour vos besoins (WooCommerce, Shopify, PrestaShop, etc.). Avec un devis clair et détaillé, vous êtes assuré de faire un choix éclairé et d’investir dans un site e-commerce durable qui soutiendra la croissance de votre entreprise.</p>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Ecommerce;