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
            <h1 className='font-title font-bold text-center text-4xl'>Prestations lors de la création d'un site internet</h1>
            <div className="container-sections flex flex-col gap-5 w-full">
                <section className='section-surmesure flex justify-center items-center p-5 w-full'>
                    <div className="card bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-lg border-white/18 p-5 w-[95%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col justify-center items-center gap-2">
                        <h2 className='font-title font-bold text-center text-4xl'>Site internet sur-mesure</h2>
                        <ul className='text-lg font-title font-bold tracking-wider text-light text-justify flex justify-center items-center flex-wrap gap-1'>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Adaptabilité</li>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Performance</li>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Fonctionnalités personnalisées</li>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Optimisation SEO</li>
                        </ul>
                        <p className='text-justify text-lg'>En tant que <strong>développeur web freelance</strong>, je vous propose des sites internet sur-mesure, conçus pour répondre précisément à vos <strong>besoins spécifiques</strong> et adaptés à votre secteur d'activité. Que vous soyez une petite entreprise, une startup ou une organisation ayant des exigences uniques, je crée des solutions web parfaitement alignées avec vos objectifs.</p>
                        <p className='text-justify text-lg'>Un site web personnalisé vous permet de vous <strong>démarquer de la concurrence</strong> en offrant une <strong>expérience utilisateur unique</strong>, tout en respectant les standards de performance, de sécurité et d’optimisation pour le <strong>référencement SEO</strong>. Que vous ayez besoin d'un site vitrine, d'une plateforme e-commerce, ou d'une application web complexe, je suis spécialisé dans la création de sites adaptés à chaque type de projet et secteur, y compris le commerce en ligne, l'immobilier, les services professionnels, les sites pour restaurateurs, les sites de portfolio, et plus encore.</p>
                        <Link href='/faq/pourquoi-choisir-un-site-internet-sur-mesure' className='text-center cursor-pointer text-secondary bg-light rounded-full w-full md:w-[70%] lg:w-[70%] xl:w-[70%]' aria-label="Naviguer vers la page Pourquoi choisir un site internet sur-mesure ?">
                            <p className='text-lg underline'>Pourquoi choisir un site internet sur-mesure ?</p>
                        </Link>
                    </div>
                </section>
                <section className='section-wordpress flex justify-center items-center p-5 w-full'>
                    <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-lg border-white/18 p-5 w-[95%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col justify-center items-center gap-2">
                        <h2 className='font-title font-bold text-center text-4xl'>Site internet Wordpress</h2>
                        <ul className='text-lg font-title font-bold tracking-wider text-light text-justify flex justify-center items-center flex-wrap gap-1'>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Solution clé en main</li>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Facilité de gestion</li>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Indépendance</li>
                            <li className='bg-secondary rounded-full px-3 py-0.5'>Optimisation SEO</li>
                        </ul>
                        <p className='text-justify text-lg'><strong>Vous cherchez une solution rapide, efficace et flexible pour créer un site internet ?</strong> Je vous propose des sites WordPress personnalisés, parfaitement adaptés à vos besoins spécifiques et à votre secteur d'activité. WordPress est une plateforme idéale pour créer un <strong>site web performant et évolutif</strong>. Plus de <strong>40% des sites web dans le monde</strong> sont développés avec WordPress, ce qui en fait l'une des solutions les plus populaires et les plus fiables pour la création de sites internet.</p>
                        <p className='text-justify text-lg'>Avec WordPress, vous bénéficiez d'un système de <strong>gestion de contenu (CMS)</strong> facile à utiliser, vous permettant de mettre à jour votre contenu <strong>sans compétences techniques</strong>. De plus, WordPress est l'une des plateformes les plus référencées par Google, ce qui vous offre une meilleure visibilité SEO dès le lancement de votre site.</p>
                        <Link href='/faq/pourquoi-choisir-un-site-wordpress-personnalise' className='text-center cursor-pointer text-secondary bg-light rounded-full w-full md:w-[70%] lg:w-[70%] xl:w-[70%]' aria-label="Naviguer vers la page Pourquoi choisir un site internet sur-mesure ?">
                            <p className='text-lg underline'>Pourquoi choisir un site WordPress personnalisé ?</p>
                        </Link>
                    </div>
                </section>
                <section className='section-vitrine flex justify-center items-center p-5 w-full'>
                    <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-lg border-white/18 p-5 w-[95%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col justify-center items-center gap-2">
                        <h2 className='font-title font-bold text-center text-4xl'>Site vitrine</h2>
                        <p className='text-justify text-lg'>Site internet vitrine pour présenter votre activité, vos produits et vos services.</p>
                    </div>
                </section>
                <section className='section-modification flex justify-center items-center p-5 w-full'>
                    <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-lg border-white/18 p-5 w-[95%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col justify-center items-center gap-2">
                        <h2 className='font-title font-bold text-center text-4xl'>Modification de site internet</h2>
                        <p className='text-justify text-lg'>Modification de site internet existant, ajout de fonctionnalités, optimisation, etc.</p>
                    </div>
                </section>
                <section className='section-seo flex justify-center items-center p-5 w-full'>
                    <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-lg border-white/18 p-5 w-[95%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col justify-center items-center gap-2">
                        <h2 className='font-title font-bold text-center text-4xl'>Référencement naturel (SEO)</h2>
                        <p className='text-justify text-lg'>Optimisation du site internet pour les moteurs de recherche (Google, Bing, etc.)</p>
                    </div> 
                </section>
                <section className='section-maintenance flex justify-center items-center p-5 w-full'>
                    <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-lg border-white/18 p-5 w-[95%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col justify-center items-center gap-2">
                        <h2 className='font-title font-bold text-center text-4xl'>Maintenance de site internet</h2>
                        <p className='text-justify text-lg'>Maintenance régulière du site internet pour garantir son bon fonctionnement.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;