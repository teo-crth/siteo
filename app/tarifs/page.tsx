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
        <div className="container-tarifs flex flex-col items-center justify-start w-full p-8 pb-20 gap-5">
            <h1 className='text-center font-bold font-title text-6xl text-secondary text-shadow-white'>Mes tarifs</h1>
            <section className="container-tarifs-site flex flex-wrap items-start justify-center w-full gap-3">
                <h2 className='font-title font-bold text-center text-4xl w-full mb-3'>Prix pour la création d'un site web</h2>
                <article className="card-landing rounded-xl shadow-lg h-[600px] w-[350px] bg-indigo-200 relative">
                    <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg h-[100px] w-full flex flex-col items-center justify-center relative'>
                        <h3 className='font-title font-bold text-4xl'>Site vitrine</h3>
                        <p className='font-title text-xl absolute bottom-2'>(1 page)</p>
                    </header>
                    <h4 className='font-title font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center p-5 text-dark'>De 300€ à 1 200€</h4>
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
                        <Button type='button' className='bg-secondary hover:bg-indigo-800 px-7' text="DEVIS" router='/devis/site-vitrine'/>
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
                        <Button type='button' className='bg-secondary hover:bg-indigo-800 px-7' text="DEVIS" router='/devis/site-vitrine-plus'/>
                    </div>
                </article>
                <article className="card-ecommerce rounded-xl shadow-lg h-[600px] w-[350px] bg-indigo-200 relative">
                    <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg w-full h-[100px] flex flex-col items-center justify-center'>
                        <h3 className='font-title font-bold text-4xl text-center'>Site E-commerce</h3>
                    </header>
                    <h4 className='font-title font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center text-dark p-5'>De 3 000€ à 7 000€</h4>
                    <main className='flex flex-col items-center justify-center text-dark p-7 gap-3'>
                        <p className='text-justify text-lg'>Création d'un site e-commerce avec tunnel d'achat, panier, page produit et paiement sécurisé</p>
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
                        <Button type='button' className='bg-secondary hover:bg-indigo-800 px-7' text="DEVIS" router='/devis/site-ecommerce'/>
                    </div>
                </article>
            </section>
            <section className="container-tarifs-divers flex flex-wrap items-start justify-center w-full gap-5">
                <h2 className='font-title font-bold text-center text-4xl w-full pt-10'>Prestations annexes</h2>
                <article className='card-modification rounded-xl shadow-lg bg-indigo-200 w-[95%] md:w-[45%] lg:w-[45%] xl:w-[45%] min-h-[650px]'>
                    <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg w-full h-[100px] flex flex-col items-center justify-center'>
                        <h3 className='font-title font-bold text-4xl text-center'>Modification site existant</h3>
                    </header>
                    <h4 className='font-title font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center text-dark pt-5'>De 200€ à 1 200€</h4>
                    <main className='flex flex-col items-center justify-center text-dark p-7 gap-3'>
                        <p className='text-justify text-lg'>Que vous souhaitiez moderniser l'apparence graphique de votre site, ajouter de nouvelles fonctionnalités, ou améliorer sa structure, je vous accompagnerais en tant que développeur informatique.  Un site web performant et attrayant est une des clés pour le succès de votre entreprise.</p>
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
                    <div className="container-buttons flex gap-3 justify-center items-center mt-[15px] mb-[15px] w-full">
                        <Button type='button' className='bg-secondary hover:bg-indigo-800 px-7' text="DEVIS" router='/devis/modification-site'/>
                    </div>
                </article>
                <article className="card-formation rounded-xl shadow-lg bg-indigo-200 w-[95%] md:w-[45%] lg:w-[45%] xl:w-[45%] min-h-[650px]">
                    <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg w-full h-[100px] flex flex-col items-center justify-center'>
                        <h3 className='font-title font-bold text-4xl text-center'>Formation Wordpress</h3>
                    </header>
                    <h4 className='font-title font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center text-dark p-5'>De 100€ à 300€</h4>
                    <main className='flex flex-col items-center justify-center text-dark p-7 gap-3'>
                        <p className='text-justify text-lg'>Formation à l'utilisation de Wordpress pour gérer votre site internet. Découvrez notre formation complète à l'utilisation de WordPress, conçue pour vous aider à gérer efficacement votre site internet. Que vous soyez débutant ou souhaitiez approfondir vos connaissances, cette formation vous offre des outils pratiques pour créer et optimiser votre contenu en ligne.</p>
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
                        <Button type='button' className='bg-secondary hover:bg-indigo-800 px-7' text="DEVIS" router='/devis/formation-wordpress'/>
                    </div>
                </article>
                <article className="card-maintenance  rounded-xl shadow-lg bg-indigo-200 w-[95%] md:w-[45%] lg:w-[45%] xl:w-[45%]  min-h-[650px]">
                    <header className='header-card bg-secondary text-light rounded-t-xl p-3 shadow-lg w-full h-[100px] flex flex-col items-center justify-center'>
                        <h3 className='font-title font-bold text-4xl text-center'>Maintenance ponctuelle</h3>
                    </header>
                    <h4 className='font-title font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center text-dark p-5'>30€ / heure</h4>
                    <main className='flex flex-col items-center justify-center text-dark p-7 gap-3'>
                        <p className='text-justify text-lg'>Mise à jour de votre site internet, sauvegarde, sécurité, etc. Idéal lorsque vous avez besoin de rajouter / modifier du texte, mettre à jour la version PHP ou les plugins du site.</p>
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
                        <Button type='button' className='bg-secondary hover:bg-indigo-800 px-7' text="Contactez-moi" router='/contact'/>
                    </div>
                </article>
            </section>
            <section className='container-fourchette flex flex-col items-center justify-center w-full gap-5 font-title'>
                <h2 className='text-center font-bold md:text-6xl lg:text-6xl xl:text-6xl text-4xl m-10 text-secondary text-shadow-white'>Comprendre les fourchettes de prix</h2>
                <article className='card-fourchette flex flex-col justify-center items-center rounded-xl w-[95%] md:w-[60%] lg:w-[60%] xl:w-[60%] bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border border-white/18'>
                    <h3 className='w-full text-center font-bold text-2xl p-5'>Pourquoi autant d'écart de prix pour un même type de site ?</h3>
                    <p className='text-justify text-xl p-4 w-full'>Certains clients ont des besoins spécifiques en terme de fonctionnalités ou de graphisme. Ces spécificités peuvent doubler le temps de travail pour réaliser leur site. C'est pourquoi les fourchettes de prix peuvent être importantes. </p>
                    <p className='text-justify text-xl p-4 w-full'>C'est pour cela qu'il est important d'être le plus précis possible dans la description de vos besoins afin que le devis puisse être ajusté au mieux. Un rendez-vous téléphonique gratuit est idéal pour un devis bien estimé !</p>
                    <Link href='/blog/comment-travailler-avec-un-freelance-pour-la-creation-d-un-site-web' className='text-center font-bold text-xl p-5 text-blue-500 cursor-pointer' aria-label="Navigation vers un article récapitulant les étapes lors d'un contrat de création de site internet" >
                        Si le devis nous convient, quelles sont les prochaines étapes ?
                    </Link>
                </article>
            </section>

        </div>
    );
};

export default Tarifs;