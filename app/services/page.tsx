import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Les prestations de SitEO pour la création de votre site internet",
    description: "Création de site internet sur-mesure, référencement naturel, maintenance, hébergement, formation Wordpress, audit, conseil, etc. Découvrez toutes les prestations de SitEO pour la création de votre site internet."
};

const Services = () => {
    return (
        <div className='container-servicesPage p-5'>
            <h1 className='font-title font-bold text-center text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-secondary'>Prestations d'un développeur professionnel</h1>
            <div className="container-sections flex flex-col gap-5 w-full p-5">
                <h2 className="font-title font-bold text-center text-4xl w-full">Création de site web & choix du format le plus adapté à vos problèmatiques</h2>
                <div className="sites flex flex-wrap justify-center items-start gap-3">
                    <section className='section-surmesure flex justify-center items-start p-5 w-[95%] md:w-[32%] lg:w-[32%] xl:w-[32%]'>
                        <div className="card bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-4xl border-white/18 p-5 flex flex-col justify-start items-center gap-5 min-h-[300px]">
                            <h2 className='font-title font-bold text-center text-4xl'>Site internet sur-mesure</h2>
                            <ul className='text-lg font-title font-bold tracking-wider text-light text-justify flex justify-center items-center flex-wrap gap-1'>
                                <li className='bg-secondary rounded-full px-3 py-0.5'>Adaptabilité</li>
                                <li className='bg-secondary rounded-full px-3 py-0.5'>Performance</li>
                                <li className='bg-secondary rounded-full px-3 py-0.5'>Fonctionnalités personnalisées</li>
                                <li className='bg-secondary rounded-full px-3 py-0.5'>Optimisation SEO</li>
                            </ul>
                            <details>
                                <summary className='font-title text-lg'>Cliquez pour afficher le texte</summary>
                                <p className='text-justify text-lg'>En tant que <strong>développeur web freelance</strong>, je vous propose des sites internet sur-mesure, conçus pour répondre précisément à vos <strong>besoins spécifiques</strong> et adaptés à votre secteur d'activité. Que vous soyez une petite entreprise, une startup ou une organisation ayant des exigences uniques, je crée des solutions web parfaitement alignées avec vos objectifs.</p>
                                <p className='text-justify text-lg'>Un site web personnalisé vous permet de vous <strong>démarquer de la concurrence</strong> en offrant une <strong>expérience utilisateur unique</strong>, tout en respectant les standards de performance, de sécurité et d’optimisation pour le <strong>référencement SEO</strong>. Que vous ayez besoin d'un site vitrine, d'une plateforme e-commerce, ou d'une application web complexe, je suis spécialisé dans la création de sites adaptés à chaque type de projet et secteur, y compris le commerce en ligne, l'immobilier, les services professionnels, les sites pour restaurateurs, les sites de portfolio, et plus encore.</p>
                            </details>
                            <Link href='/faq/#pourquoi-choisir-un-site-internet-sur-mesure' className='text-center cursor-pointer text-blue-400 rounded-full w-full md:w-[70%] lg:w-[70%] xl:w-[70%]' aria-label="Naviguer vers la page Pourquoi choisir un site internet sur-mesure ?">
                                <p className='text-lg underline'>Pourquoi choisir un site internet sur-mesure ?</p>
                            </Link>
                        </div>
                    </section>
                    <section className='section-wordpress flex justify-center items-start p-5 w-[95%] md:w-[32%] lg:w-[32%] xl:w-[32%]'>
                        <div className="card bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-4xl border-white/18 p-5 flex flex-col justify-start items-center gap-5 min-h-[300px]">
                            <h2 className='font-title font-bold text-center text-4xl'>Site internet Wordpress</h2>
                            <ul className='text-lg font-title font-bold tracking-wider text-light text-justify flex justify-center items-center flex-wrap gap-1'>
                                <li className='bg-secondary rounded-full px-3 py-0.5'>Solution clé en main</li>
                                <li className='bg-secondary rounded-full px-3 py-0.5'>Facilité de gestion</li>
                                <li className='bg-secondary rounded-full px-3 py-0.5'>Indépendance</li>
                                <li className='bg-secondary rounded-full px-3 py-0.5'>Optimisation SEO</li>
                            </ul>
                            <details>
                                <summary className='font-title text-lg'>Cliquez pour afficher le texte</summary>
                                <p className='text-justify text-lg'><strong>Vous cherchez une solution rapide, efficace et flexible pour créer un site internet ?</strong> Je vous propose des sites WordPress personnalisés, parfaitement adaptés à vos besoins spécifiques et à votre secteur d'activité. WordPress est une plateforme idéale pour créer un <strong>site web performant et évolutif</strong>. Plus de <strong>40% des sites web dans le monde</strong> sont développés avec WordPress, ce qui en fait l'une des solutions les plus populaires et les plus fiables pour la création de sites internet.</p>
                                <p className='text-justify text-lg'>Avec WordPress, vous bénéficiez d'un système de <strong>gestion de contenu (CMS)</strong> facile à utiliser, vous permettant de mettre à jour votre contenu <strong>sans compétences techniques</strong>. De plus, WordPress est l'une des plateformes les plus référencées par Google, ce qui vous offre une meilleure visibilité SEO dès le lancement de votre site.</p>
                            </details>
                            <Link href='/faq/#pourquoi-choisir-un-site-wordpress-personnalise' className='text-center cursor-pointer text-blue-400 rounded-full w-full md:w-[70%] lg:w-[70%] xl:w-[70%]' aria-label="Naviguer vers la page Pourquoi choisir un site internet sur-mesure ?">
                                <p className='text-lg underline'>Pourquoi choisir un site WordPress personnalisé ?</p>
                            </Link>
                        </div>
                    </section>
                    <section className='section-vitrine flex justify-center items-start p-5 w-[95%] md:w-[32%] lg:w-[32%] xl:w-[32%]'>
                        <div className="card bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-4xl border-white/18 p-5 flex flex-col justify-start items-center gap-5 min-h-[300px]">
                            <h2 className='font-title font-bold text-center text-4xl'>Site vitrine</h2>
                            <ul className='text-lg font-title font-bold tracking-wider text-light text-justify flex justify-center items-center flex-wrap gap-1'>
                                <li className='bg-secondary rounded-full px-3 py-0.5'>Création rapide</li>
                                <li className='bg-secondary rounded-full px-3 py-0.5'>Tarifs réduits</li>
                                <li className='bg-secondary rounded-full px-3 py-0.5'>Visibilité</li>
                                <li className='bg-secondary rounded-full px-3 py-0.5'>Mise à jour facile</li>
                            </ul>
                            <details>
                                <summary className='font-title text-lg'>Cliquez pour afficher le texte</summary>
                                <p className='text-justify text-lg'>Que vous soyez un artisan, une petite entreprise, un restaurant, ou une association, un site vitrine est la première étape pour établir une <strong>présence professionnelle sur le web</strong>. Un site vitrine permet de présenter de manière claire et attractive vos services, votre équipe, vos réalisations ou produits sans nécessiter un budget conséquent. Il offre également une <strong>visibilité accrue</strong> grâce à son optimisation pour le référencement SEO. Ce site aura une ou plusieurs pages à but essentiellement explicatif et un formulaire de contact renvoyant sur votre email.</p>
                            </details>
                            <Link href='/faq/#pourquoi-choisir-un-site-vitrine' className='text-center cursor-pointer text-blue-400 rounded-full w-full md:w-[70%] lg:w-[70%] xl:w-[70%]' aria-label="Naviguer vers la page Pourquoi choisir un site internet sur-mesure ?">
                                <p className='text-lg underline'>Pourquoi choisir un site vitrine ?</p>
                            </Link>
                        </div>
                    </section>
                </div>
                <section className='section-modification flex justify-center items-center p-5 w-full'>
                    <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-4xl border-white/18 p-5 w-[95%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col justify-center items-center gap-2">
                        <h2 className='font-title font-bold text-center text-4xl'>Modification de site internet</h2>
                        <ul className='text-lg font-title font-bold tracking-wider text-light text-justify flex justify-center items-center flex-wrap gap-1'>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Modification de textes</li>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Refonte visuelle</li>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Ajout ou suppression de page</li>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Amélioration du référencement gratuit</li>
                        </ul>
                        <details>
                            <summary className='font-title text-lg'>Cliquez pour afficher le texte</summary>
                            <p className='text-justify text-lg'>Vous avez déjà un site internet que vous souhaitez mettre à jour en <strong>modifiant le contenu</strong> ou faire une <strong>refonte graphique</strong> ? Je réponds à votre besoin ! Ajout de nouvelles images, illustrations, création de charte graphique ou changement dans la strucutre du site, contactez-moi.</p>
                        </details>
                    </div>
                </section>
                <section className='section-seo flex justify-center items-center p-5 w-full'>
                    <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-4xl border-white/18 p-5 w-[95%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col justify-center items-center gap-2">
                        <h2 className='font-title font-bold text-center text-4xl'>Référencement naturel (SEO)</h2>
                        <ul className='text-lg font-title font-bold tracking-wider text-light text-justify flex justify-center items-center flex-wrap gap-1'>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Champ sémantique adapté à votre secteur</li>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Maillage interne</li>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Amélioration du classement sur Google</li>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Optimisation des contenus</li>
                        </ul>
                        <details>
                            <summary className='font-title text-lg'>Cliquez pour afficher le texte</summary>
                            <p className='text-justify text-lg'>Le référencement naturel (SEO) est un levier essentiel pour améliorer la visibilité de votre site internet sur Google et d'autres moteurs de recherche. En tant que consultant SEO freelance, je vous propose des services d'optimisation SEO, afin de vous aider à atteindre vos objectifs. Grâce à une stratégie SEO adaptée à votre secteur d'activité et à vos besoins spécifiques, vous pourrez obtenir un <strong>meilleur classement</strong> dans les résultats de recherche. Le SEO consiste à rendre votre site plus visible <strong>sans publicité payante</strong> et ainsi attirer plus de clients potentiels. Grâce à des techniques éprouvées, votre site sera <strong>mieux référencé</strong> et plus facilement accessible à vos futurs clients, augmentant ainsi votre trafic.</p>
                        </details>
                        <Link href='/faq/#strategie-seo-cest-quoi' className='text-center cursor-pointer text-blue-400 rounded-full w-full md:w-[70%] lg:w-[70%] xl:w-[70%]' aria-label="Naviguer vers la page Pourquoi choisir un site internet sur-mesure ?">
                            <p className='text-lg underline'>Stratégie SEO (référencement naturel), c'est quoi exactement ?</p>
                        </Link>
                    </div> 
                </section>
                <section className='section-maintenance flex justify-center items-center p-5 w-full'>
                    <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-4xl border-white/18 p-5 w-[95%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col justify-center items-center gap-2">
                        <h2 className='font-title font-bold text-center text-4xl'>Maintenance de site internet</h2>
                        <ul className='text-lg font-title font-bold tracking-wider text-light text-justify flex justify-center items-center flex-wrap gap-1'>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Support technique</li>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Mises à jour régulières</li>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Amélioration de la performance</li>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Correction des bugs et des erreurs</li>
                        </ul>
                        <details>
                            <summary className='font-title text-lg'>Cliquez pour afficher le texte</summary>
                            <p className='text-justify text-lg'>La maintenance de site internet englobe plusieurs actions visant à optimiser le site, corriger les erreurs, améliorer l'expérience utilisateur, et assurer une mise à jour régulière des contenus et des fonctionnalités. Cela vous permet de rester compétitif, d’éviter les pannes et d’assurer une <strong>performance optimale</strong> pour vos visiteurs.</p>
                        </details>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;