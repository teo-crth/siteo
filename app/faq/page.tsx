import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ - Toutes vos questions sur la création d'un site par un freelance",
    description: "Vous avez des questions sur la création d'un site par un freelance ? Découvrez toutes les réponses à vos questions sur la création de site web."
};

const Faq = () => {
    return (
        <div className='container-faqPage flex flex-col items-center justify-start w-full p-8 pb-20 gap-5 sm:p-15 min-h-[calc(100vh-159px)]'>
            <h1 className='font-title font-bold text-center text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-secondary'>FAQ - Toutes vos questions sur la création d'un site par un freelance</h1>
            <section className='container-questions font-title'>
                <div className="question-1 mb-5">
                    <details className='w-full border-b border-gray-300'>
                        <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='pourquoi-choisir-un-site-internet-sur-mesure'>Pourquoi choisir un site internet sur-mesure ?</summary>
                        <p className='text-xl text-justify mb-2'><strong>Adaptabilité :</strong> Chaque projet est développé en tenant compte des particularités de votre secteur, qu’il soit luxe, tourisme, santé, finance ou éducation, afin de garantir une solution web optimale.</p>
                        <p className='text-xl text-justify mb-2'><strong>Fonctionnalités personnalisées :</strong> J’intègre des fonctionnalités avancées qui répondent spécifiquement à vos besoins métier, telles que des formulaires personnalisés, des portails client, des systèmes de gestion de contenu (CMS) ou encore des systèmes de réservation en ligne.</p>
                        <p className='text-xl text-justify mb-2'><strong>Design responsive :</strong> Tous mes sites sont adaptés aux mobiles et optimisés pour le référencement SEO, assurant une visibilité accrue et une expérience utilisateur fluide sur tous les appareils.</p>
                        <p className='text-xl text-justify mb-2'><strong>Performance et sécurité :</strong> Je m’assure que chaque site soit rapide, sécurisé, et évolutif, afin de garantir une meilleure expérience utilisateur et un excellent classement SEO sur Google.</p>
                        <p className='text-xl text-justify mb-2'>Développez votre présence en ligne avec un site web sur-mesure qui reflète vos valeurs, vos services et qui répond aux attentes spécifiques de vos clients dans votre secteur d’activité. Contactez-moi dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé pour la création de votre site internet sur-mesure.</p>
                    </details>
                </div>
                <div className="question-2 mb-5">
                    <details className='w-full border-b border-gray-300'>
                        <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='pourquoi-choisir-un-site-wordpress-personnalise'>Pourquoi choisir un site WordPress personnalisé ?</summary>
                        <p className='text-xl text-justify mb-2'>
                            Solution clé en main : Je vous propose des sites WordPress sur-mesure, avec des thèmes et des plugins adaptés spécifiquement à votre secteur d'activité, qu'il s'agisse de commerce en ligne, de portfolio, de blog, ou de site vitrine pour votre entreprise.
                            Optimisation SEO : Chaque site est développé en respectant les bonnes pratiques du référencement SEO afin d'améliorer votre visibilité sur Google et attirer plus de clients.
                            Adaptabilité à votre secteur : Que vous soyez dans le tourisme, l’immobilier, les services professionnels, la restauration, ou toute autre industrie, je crée des sites WordPress parfaitement adaptés à vos besoins spécifiques.
                            Facilité de gestion : Grâce à l’interface intuitive de WordPress, vous pouvez gérer et mettre à jour facilement votre site web, sans avoir besoin de connaissances techniques approfondies.
                            Design responsive : Tous les sites sont optimisés pour être adaptés aux mobiles, garantissant une expérience utilisateur fluide sur tous les appareils et un meilleur classement SEO.
                            Avec WordPress, vous pouvez évoluer facilement avec votre entreprise, en ajoutant des fonctionnalités personnalisées, des sections ou des pages spécifiques à vos besoins. Que vous ayez besoin d'un blog, d'un e-commerce avec WooCommerce, ou d'un site corporate, WordPress est une solution flexible et scalable.
                        </p>
                    </details>
                </div>
                <div className="question-3 mb-5">
                    <details className='w-full border-b border-gray-300'>
                        <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='pourquoi-choisir-un-site-vitrine'>Pourquoi choisir un site vitrine ?</summary>
                        <p className='text-xl text-justify mb-2'>
                            Solution clé en main : Je vous propose des sites WordPress sur-mesure, avec des thèmes et des plugins adaptés spécifiquement à votre secteur d'activité, qu'il s'agisse de commerce en ligne, de portfolio, de blog, ou de site vitrine pour votre entreprise.
                            Optimisation SEO : Chaque site est développé en respectant les bonnes pratiques du référencement SEO afin d'améliorer votre visibilité sur Google et attirer plus de clients.
                            Adaptabilité à votre secteur : Que vous soyez dans le tourisme, l’immobilier, les services professionnels, la restauration, ou toute autre industrie, je crée des sites WordPress parfaitement adaptés à vos besoins spécifiques.
                            Facilité de gestion : Grâce à l’interface intuitive de WordPress, vous pouvez gérer et mettre à jour facilement votre site web, sans avoir besoin de connaissances techniques approfondies.
                            Design responsive : Tous les sites sont optimisés pour être adaptés aux mobiles, garantissant une expérience utilisateur fluide sur tous les appareils et un meilleur classement SEO.
                            Avec WordPress, vous pouvez évoluer facilement avec votre entreprise, en ajoutant des fonctionnalités personnalisées, des sections ou des pages spécifiques à vos besoins. Que vous ayez besoin d'un blog, d'un e-commerce avec WooCommerce, ou d'un site corporate, WordPress est une solution flexible et scalable.
                        </p>
                    </details>
                </div>
                <div className="question-4 mb-5">
                    <details className='w-full border-b border-gray-300'>
                        <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='strategie-seo-cest-quoi'>Stratégie SEO (référencement naturel), c'est quoi exactement ?</summary>
                        <p className='text-xl text-justify mb-2'>
                            Amélioration du classement sur Google : Un référencement naturel bien optimisé permet à votre site d’apparaître en première page des résultats de recherche pour des mots-clés pertinents.
                            Ciblage de votre audience : En choisissant les bons mots-clés, j'aide votre entreprise à se positionner sur des requêtes spécifiques liées à votre secteur d'activité, attirant ainsi un trafic ciblé et de qualité.
                            Optimisation technique du site : Un audit SEO complet permet d'optimiser les aspects techniques de votre site, comme la vitesse de chargement, l’architecture de l’information, et les balises HTML, afin de garantir une expérience utilisateur fluide et une meilleure indexation par les moteurs de recherche.
                            Optimisation des contenus : Je vous aide à produire des contenus de qualité, optimisés pour le SEO, afin d'attirer et retenir vos visiteurs. Cela inclut l'optimisation des titres, des métas descriptions, des images et des articles de blog.
                            Référencement local : Si vous avez un commerce local, je m'assure que votre site soit optimisé pour le référencement local afin d'attirer des clients dans votre région et augmenter vos visites en magasin.
                            Audit SEO et suivi des performances : Je réalise des audits réguliers et des rapports détaillés pour suivre les performances de votre site et ajuster les actions SEO en fonction des résultats obtenus.
                            Le référencement naturel est une stratégie durable qui génère des résultats sur le long terme. Contrairement à la publicité payante (SEA), le SEO vous permet de construire une présence en ligne solide qui continue de croître avec le temps, sans avoir à payer pour chaque clic.
                            Optimisez votre site pour le référencement naturel et attirez plus de visiteurs qualifiés grâce à une stratégie SEO personnalisée. Contactez-moi dès aujourd'hui pour discuter de votre projet et recevoir un audit SEO gratuit.
                        </p>
                    </details>
                </div>

            </section>
        </div>
    );
};

export default Faq;