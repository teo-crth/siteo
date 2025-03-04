import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTruckFast, 
    faMobileScreenButton,
    faEnvelope,
    faPaintBrush, 
    faChartLine, 
    faFilter, 
    faCreditCard, 
    faShirt, 
    faPercent, 
    faSliders,
    faFile,
    faLanguage,
    faGears,
    faCirclePlus,
    faShieldHalved,
    faFloppyDisk,
    faDownload,
    faPenToSquare
} from '@fortawesome/free-solid-svg-icons';
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
                <h2 className='font-title font-bold text-center text-4xl w-full mb-3'>Prix pour la création d'un site web</h2>
                <article className="card-landing rounded-xl shadow-lg h-[600px] w-[350px] bg-indigo-200 relative">
                    <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg h-[100px] w-full flex flex-col items-center justify-center relative'>
                        <h3 className='font-title font-bold text-4xl'>Site vitrine</h3>
                        <p className='font-title text-xl absolute bottom-2'>(1 page)</p>
                    </header>
                    <h4 className='font-title font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center p-5 text-dark'>De 450€ à 1 200€</h4>
                    <main className='flex flex-col items-center justify-center p-7 gap-3 text-dark'>
                        <p className='text-justify text-lg'>Présentation de votre entreprise ou projet en une seule page, claire, ergonomique et rapide à charger</p>
                        <ul className='list-tarifs font-title font-bold flex flex-col mt-5 gap-3'>
                            <div className="container-li flex items-center gap-2">
                                <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faTruckFast} /></span>
                                <li className='text-lg'>Livraison rapide</li>
                            </div>
                            <div className="container-li flex items-center gap-2">
                                <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faMobileScreenButton} /></span>
                                <li className='text-lg'>Responsive design</li>
                            </div>
                            <div className="container-li flex items-center gap-2">
                                <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faEnvelope} /></span>
                                <li className='text-lg'>Formulaire de contact</li>
                            </div>
                        </ul>
                    </main>
                    <div className="container-buttons flex gap-3 justify-center items-center mt-[15px] w-full absolute bottom-5">
                        <Button type='button' className='bg-secondary hover:bg-indigo-800 px-5' text="DEVIS" router='/devis'/>
                    </div>
                </article>
                <article className="card-vitrine rounded-xl shadow-lg h-[600px] w-[350px] bg-indigo-200 relative">
                    <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg w-full h-[100px] flex flex-col items-center justify-center'>
                        <h3 className='font-title font-bold text-4xl text-center'>Site vitrine +</h3>
                    </header>
                    <h4 className='font-title font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center text-dark p-5 '>De 750€ à 3 000€</h4>
                    <main className='flex flex-col items-center justify-center text-dark p-7 gap-3'>
                        <p className='text-justify text-lg'>Site de présentation de votre activité. Avec un nombre de pages et de fonctionnalités adaptées à vos besoins.</p>
                        <ul className='list-tarifs font-title font-bold flex flex-col mt-5 gap-3'>
                        <div className="container-li flex items-center gap-2">
                            <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faPaintBrush} /></span>
                            <li className='font-title font-bold text-lg'>Charte graphique</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                            <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faMobileScreenButton} /></span>
                            <li className='font-title font-bold text-lg'>Responsive design</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                            <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faChartLine} /></span>
                            <li className='font-title font-bold text-lg'>Optimisation SEO</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                            <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faEnvelope} /></span>
                            <li className='font-title font-bold text-lg'>Formulaire de contact</li>
                        </div>
                        </ul>
                    </main>
                    <div className="container-buttons flex gap-3 justify-center items-center mt-[15px] w-full absolute bottom-5">
                        <Button type='button' className='bg-secondary hover:bg-indigo-800 px-5' text="DEVIS" router='/devis'/>
                    </div>
                </article>
                <article className="card-ecommerce rounded-xl shadow-lg h-[600px] w-[350px] bg-indigo-200 relative">
                    <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg w-full h-[100px] flex flex-col items-center justify-center'>
                        <h3 className='font-title font-bold text-4xl text-center'>Site E-commerce</h3>
                    </header>
                    <h4 className='font-title font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center text-dark p-5'>De 3 000€ à 7 000€</h4>
                    <main className='flex flex-col items-center justify-center text-dark p-7 gap-3'>
                        <p className='text-center'>Création d'un site e-commerce avec tunnel d'achat, panier, page produit et paiement sécurisé</p>
                        <ul className='list-tarifs font-title font-bold flex flex-col mt-5 gap-3'>
                        <div className="container-li flex items-center gap-2">
                            <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faFilter} /></span>
                            <li className='text-lg'>Tunnel d'achat</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                            <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faCreditCard} /></span>
                            <li className='text-lg'>Paiement sécurisé</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                            <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faShirt} /></span>
                            <li className='text-lg'>Pages produits</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                            <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faPercent} /></span>
                            <li className='text-lg'>Code promotionnel</li>
                        </div>
                        </ul>
                    </main>
                    <div className="container-buttons flex gap-3 justify-center items-center mt-[15px] w-full absolute bottom-5">
                        <Button type='button' className='bg-secondary hover:bg-indigo-800 px-5' text="DEVIS" router='/devis'/>
                    </div>
                </article>
            </section>
            <section className="container-tarifs-divers flex flex-wrap items-start justify-center w-full gap-5">
                <h2 className='font-title font-bold text-center text-4xl w-full p-10'>Prestations annexes</h2>
                <article className='card-modification rounded-xl shadow-lg bg-indigo-200 w-[95%] md:w-[45%] lg:md:w-[45%] xl:md:w-[45%] min-h-[510px] relative'>
                    <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg text-center'>
                        <h3 className='font-title font-bold text-2xl text-center'>Modification / Refonte d'un site existant</h3>
                    </header>
                    <h4 className='font-title font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center text-dark p-5'>De 200€ à 1 200€</h4>
                    <main className='flex flex-col items-center justify-center text-dark p-7 gap-3'>
                        <p className='text-justify'>Changement graphique du site, modification structurel ou ajout de fonctionnalités.</p>
                        <ul className='list-tarifs font-title font-bold flex flex-col mt-5 gap-3'>
                        <div className="container-li flex items-center gap-2">
                            <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faPaintBrush} /></span>
                            <li className='text-lg'>Refonte visuelle</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                            <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faSliders} /></span>
                            <li className='text-lg'>Ajout de fonctionnalités</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                            <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faFile} /></span>
                            <li className='text-lg'>Ajout de pages</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                            <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faLanguage} /></span>
                            <li className='text-lg'>Traduction en anglais</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                            <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faChartLine} /></span>
                            <li className='text-lg'>Optimisation SEO</li>
                        </div>
                        </ul>
                    </main>
                    <div className="container-buttons flex gap-3 justify-center items-center mt-[15px] w-full absolute bottom-5">
                        <Button type='button' className='bg-secondary hover:bg-indigo-800 px-5' text="DEVIS" router='/devis'/>
                    </div>
                </article>
                <article className="card-formation rounded-xl shadow-lg bg-indigo-200 w-[95%] md:w-[45%] lg:md:w-[45%] xl:md:w-[45%] min-h-[510px]">
                    <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg text-center'>
                        <h3 className='font-title font-bold text-2xl text-center'>Formation Wordpress</h3>
                    </header>
                    <h4 className='font-title font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center text-dark p-5'>De 100€ à 300€</h4>
                    <main className='flex flex-col items-center justify-center text-dark p-7 gap-3'>
                        <p className='text-justify'>Formation à l'utilisation de Wordpress pour gérer votre site internet</p>
                        <ul className='list-tarifs font-title font-bold flex flex-col mt-5 gap-3'>
                        <div className="container-li flex items-center gap-2">
                        <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faCirclePlus} /></span>
                            <li className='font-title font-bold text-lg'>Création de contenu</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                            <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faFile} /></span>
                            <li className='font-title font-bold text-lg'>Ajout de pages & d'articles de blog</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                            <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faGears} /></span>
                            <li className='font-title font-bold text-lg'>Mise à jour de plugin</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                            <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faChartLine} /></span>
                            <li className='font-title font-bold text-lg'>Optimisation SEO</li>
                        </div>
                        </ul>
                    </main>
                    <div className="container-buttons flex gap-3 justify-center items-center mt-[15px] mb-[15px] w-full">
                        <Button type='button' className='bg-secondary hover:bg-indigo-800 px-5' text="DEVIS" router='/devis'/>
                    </div>
                </article>
                <article className="card-maintenance  rounded-xl shadow-lg bg-indigo-200 w-[95%] md:w-[45%] lg:md:w-[45%] xl:md:w-[45%] min-h-[510px]">
                    <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg text-center'>
                        <h3 className='font-title font-bold text-2xl text-center'>Maintenance ponctuelle</h3>
                    </header>
                    <h4 className='font-title font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center text-dark p-5'>30€ / heure</h4>
                    <main className='flex flex-col items-center justify-center text-dark p-7 gap-3'>
                        <p className='text-center'>Mise à jour de votre site internet, sauvegarde, sécurité, etc.</p>
                        <ul className='list-tarifs font-title font-bold flex flex-col mt-5 gap-3'>
                        <div className="container-li flex items-center gap-2">
                        <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faPenToSquare} /></span>
                            <li className='font-title font-bold text-lg'>Modification de texte</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                        <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faDownload} /></span>
                            <li className='font-title font-bold text-lg'>Mise à jour de version</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                        <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faFloppyDisk} /></span>
                            <li className='font-title font-bold text-lg'>Sauvegarde</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                        <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faShieldHalved} /></span>
                            <li className='font-title font-bold text-lg'>Sécurité</li>
                        </div>
                        <div className="container-li flex items-center gap-2">
                        <span className='w-10 flex justify-center'><FontAwesomeIcon icon={faChartLine} /></span>
                            <li className='font-title font-bold text-lg'>Optimisation SEO</li>
                        </div>
                        </ul>
                    </main>
                    <div className="container-buttons flex gap-3 justify-center items-center mt-[15px] mb-[15px] w-full">
                        <Button type='button' className='bg-secondary hover:bg-indigo-800 px-5' text="DEVIS" router='/devis'/>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default Tarifs;