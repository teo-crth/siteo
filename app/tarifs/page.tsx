import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import Button from '../components/ui/button';

export const metadata: Metadata = {
    title: "Tarifs développeur freelance : Création de site web",
    description: "Création de site internet sur-mesure, référencement naturel, maintenance, hébergement, formation Wordpress, audit, conseil, etc. Découvrez toutes les tarifs de SitEO pour la création de votre site internet."
};


const Tarifs = () => {
    return (
        <div className="container-portfolio flex flex-col items-center justify-start w-full p-8 pb-20 gap-5 sm:p-20 min-h-[calc(100vh-159px)]">
            <h1 className='text-center font-bold font-title md:text-6xl lg:text-6xl xl:text-6xl text-4xl text-secondary'>Mes tarifs en tant que développeur freelance</h1>
            <section className="container-tarifs-site flex flex-wrap items-start justify-center w-full gap-3">
                <h2 className='font-title font-bold text-center text-4xl w-full p-10'>Prix pour la création d'un site web</h2>
                <article className="card-vitrine rounded-xl shadow-lg h-[600px] w-[350px] bg-indigo-200">
                    <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg h-[100px] flex flex-col items-center justify-center'>
                        <h3 className='font-title font-bold text-4xl text-center'>Site vitrine +</h3>
                    </header>
                    <h4 className='font-title font-bold text-4xl text-center p-5'>De 750€ à 3 000€</h4>
                    <main className='flex flex-col items-center justify-center p-7 gap-3'>
                        <p className='text-justify text-lg'>Site de présentation de votre activité. Avec un nombre de pages et de fonctionnalités adaptées à vos besoins.</p>
                        <ul className='list-tarifs font-title font-bold gap-2'>
                            <li className='font-title font-bold text-lg'>Charte graphique</li>
                            <li className='font-title font-bold text-lg'>Responsive design</li>
                            <li className='font-title font-bold text-lg'>Optimisation SEO</li>
                            <li className='font-title font-bold text-lg'>Formulaire de contact</li>
                        </ul>
                    </main>
                    <div className="container-buttons flex gap-3 justify-center items-center mt-[15px] w-full">
                        <Button type='button' className='bg-secondary hover:bg-indigo-800 px-5' text="DEVIS" router='/devis'/>
                    </div>
                </article>
                <article className="card-landing rounded-xl shadow-lg h-[600px] w-[350px] bg-indigo-200">
                    <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg h-[100px] flex flex-col items-center justify-center'>
                        <h3 className='font-title font-bold text-4xl'>Site vitrine</h3>
                        <p className='font-title text-xl'>(1 page)</p>
                    </header>
                    <p className='text-center'>Présentation de votre entreprise ou projet en une seule page, claire, ergonomique et rapide à charger</p>
                    <ul className='list-tarifs'>
                        <li className='font-title font-bold text-lg'>De 450€ à 1 200€</li>
                        <li className='font-title font-bold text-lg'>Livraison rapide</li>
                        <li className='font-title font-bold text-lg'>Responsive design</li>
                        <li className='font-title font-bold text-lg'>Formulaire de contact</li>
                    </ul>
                </article>
                <article className="card-ecommerce rounded-xl shadow-lg h-[600px] w-[350px]">
                    <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg h-[100px] flex flex-col items-center justify-center'>
                        <h3 className='font-title font-bold text-4xl text-center'>Site E-commerce</h3>
                    </header>
                    <p className='text-center'>Création d'un site e-commerce avec tunnel d'achat, panier, page produit et paiement sécurisé</p>
                    <ul className='list-tarifs'>
                        <li className='font-title font-bold text-lg'>De 3 000€ à 7 000€</li>
                        <li className='font-title font-bold text-lg'>Tunnel d'achat</li>
                        <li className='font-title font-bold text-lg'>Paiement sécurisé</li>
                        <li className='font-title font-bold text-lg'>Pages produits</li>
                        <li className='font-title font-bold text-lg'>Code promotionnel</li>
                    </ul>
                </article>
            </section>
            <section className="container-tarifs-divers flex flex-col items-center justify-start w-full">
                <h2 className='font-title font-bold text-center text-4xl w-full p-10'>Prestations annexes</h2>
                <article className='card-modification'>
                    <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg text-center'>
                        <h3 className='font-title font-bold text-2xl text-center'>Modification / Refonte d'un site existant</h3>
                    </header>
                    <p className='text-center'>Changement graphique du site, modification structurel ou ajout de fonctionnalités.</p>
                    <ul className='list-tarifs'>
                        <li className='font-title font-bold text-lg'>De 200€ à 1 200€</li>
                        <li className='font-title font-bold text-lg'>Refonte visuelle</li>
                        <li className='font-title font-bold text-lg'>Ajout de fonctionnalités</li>
                        <li className='font-title font-bold text-lg'>Ajout de pages</li>
                        <li className='font-title font-bold text-lg'>Traduction en anglais</li>
                        <li className='font-title font-bold text-lg'>Optimisation SEO</li>
                    </ul>
                </article>
                <article className="card-formation">
                    <h3 className='font-title font-bold text-2xl text-center'>Formation Wordpress</h3>
                    <p className='text-center'>Formation à l'utilisation de Wordpress pour gérer votre site internet</p>
                    <ul className='list-tarifs'>
                        <li className='font-title font-bold text-lg'>De 100€ à 300€</li>
                        <li className='font-title font-bold text-lg'>Création de contenu</li>
                        <li className='font-title font-bold text-lg'>Ajout de pages & d'articles de blog</li>
                        <li className='font-title font-bold text-lg'>Mise à jour de plugin</li>
                        <li className='font-title font-bold text-lg'>Optimisation SEO</li>
                    </ul>
                </article>
                <article className="card-maintenance">
                    <h3 className='font-title font-bold text-2xl text-center'>Maintenance ponctuelle</h3>
                    <p className='text-center'>Mise à jour de votre site internet, sauvegarde, sécurité, etc.</p>
                    <ul className='list-tarifs'>
                        <li className='font-title font-bold text-lg'>30€ / heure</li>
                        <li className='font-title font-bold text-lg'>Modification de texte</li>
                        <li className='font-title font-bold text-lg'>Mise à jour de version</li>
                        <li className='font-title font-bold text-lg'>Sauvegarde</li>
                        <li className='font-title font-bold text-lg'>Sécurité</li>
                        <li className='font-title font-bold text-lg'>Optimisation SEO</li>
                    </ul>
                </article>
            </section>
        </div>
    );
};

export default Tarifs;