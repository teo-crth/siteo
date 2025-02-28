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
                    <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-lg border-white/18 p-5 w-[95%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col gap-2">
                        <h2 className='font-title font-bold text-center text-4xl'>Site internet sur-mesure</h2>
                        <ul className='list-disc list-inside text-lg font-title font-bold '>
                            <li>Adaptabilité</li>
                            <li>Performance</li>
                            <li>Fonctionnalités personnalisées</li>
                            <li>Optimisation SEO</li>
                        </ul>
                        <p className='text-justify text-lg'>En tant que <strong>développeur web freelance</strong>, je vous propose des sites internet sur-mesure, conçus pour répondre précisément à vos <strong>besoins spécifiques</strong> et adaptés à votre secteur d'activité. Que vous soyez une petite entreprise, une startup ou une organisation ayant des exigences uniques, je crée des solutions web parfaitement alignées avec vos objectifs.</p>
                        <p className='text-justify text-lg'>Un site web personnalisé vous permet de vous <strong>démarquer de la concurrence</strong> en offrant une <strong>expérience utilisateur unique</strong>, tout en respectant les standards de performance, de sécurité et d’optimisation pour le <strong>référencement SEO</strong>. Que vous ayez besoin d'un site vitrine, d'une plateforme e-commerce, ou d'une application web complexe, je suis spécialisé dans la création de sites adaptés à chaque type de projet et secteur, y compris le commerce en ligne, l'immobilier, les services professionnels, les sites pour restaurateurs, les sites de portfolio, et plus encore.</p>
                        <Link href='/faq/pourquoi-choisir-un-site-internet-sur-mesure' className='text-center cursor-pointer text-secondary' aria-label="Naviguer vers la page Pourquoi choisir un site internet sur-mesure ?">
                            <p className='text-lg'>Pourquoi choisir un site internet sur-mesure ?</p>
                        </Link>
                    </div>
                </section>
                <section className='section-wordpress flex justify-center items-center p-5 w-full'>
                    <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-lg border-white/18 p-5 w-[95%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
                        <h2 className='font-title font-bold text-center text-2xl'>Site internet Wordpress</h2>
                        <p className='text-center'>Site internet créé avec Wordpress, un CMS simple d'utilisation et très répandu.</p>
                    </div>
                </section>
                <section className='section-vitrine flex justify-center items-center p-5 w-full'>
                    <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-lg border-white/18 p-5 w-[95%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
                        <h2 className='font-title font-bold text-center text-2xl'>Site vitrine</h2>
                        <p className='text-center'>Site internet vitrine pour présenter votre activité, vos produits et vos services.</p>
                    </div>
                </section>
                <section className='section-modification flex justify-center items-center p-5 w-full'>
                    <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-lg border-white/18 p-5 w-[95%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
                        <h2 className='font-title font-bold text-center text-2xl'>Modification de site internet</h2>
                        <p className='text-center'>Modification de site internet existant, ajout de fonctionnalités, optimisation, etc.</p>
                    </div>
                </section>
                <section className='section-seo flex justify-center items-center p-5 w-full'>
                    <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-lg border-white/18 p-5 w-[95%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
                        <h2 className='font-title font-bold text-center text-2xl'>Référencement naturel (SEO)</h2>
                        <p className='text-center'>Optimisation du site internet pour les moteurs de recherche (Google, Bing, etc.)</p>
                    </div> 
                </section>
                <section className='section-maintenance flex justify-center items-center p-5 w-full'>
                    <div className="card bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border rounded-lg border-white/18 p-5 w-[95%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
                        <h2 className='font-title font-bold text-center text-2xl'>Maintenance de site internet</h2>
                        <p className='text-center'>Maintenance régulière du site internet pour garantir son bon fonctionnement.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;