import React from 'react';
import Link from "next/link";

const Blog = () => {
    return (
        <div className='container-blog flex flex-col items-center justify-start w-full p-8 pb-20 gap-5'>
            <h1 className='font-title font-bold text-center text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-secondary text-shadow-white mb-10'>Blog d'un développeur Aixois</h1>
            <section className="container-articles w-full md:w-[75%] flex flex-wrap justify-center items-start gap-5">
                <Link href="/blog/pourquoi-chaque-pme-a-besoin-d-un-site-web-professionnel-en-2025" className="cursor-pointer w-full md:w-[31%]" aria-label="Navigation vers l'article sur l'importance d'un site web pour les PME">
                    <article className='container-article bg-indigo-200 font-title rounded-xl shadow-lg'>
                        <header className="container-img w-full h-[200px] rounded-t-xl">
                            <img className="w-full h-full object-cover rounded-t-xl" src="/images/articles/pme-2025.webp" alt="photo de halles avec plusieurs commerçants" />
                        </header>
                        <main className='container-text p-5 font-title'>
                            <h2 className='font-bold text-xl text-secondary mb-2'>Pourquoi chaque PME a besoin d'un site web professionnel en 2025 ?</h2>
                            <p className='text-md text-justify text-dark mb-2 md:h-[200px] overflow-hidden'>En 2025, avoir un site web professionnel est essentiel pour les petites et moyennes entreprises (PME). Il permet d’augmenter la visibilité en ligne, d'améliorer la crédibilité et de rendre l'entreprise accessible 24/7, ce qui est crucial pour attirer de nouveaux clients.</p>
                            <Link href="/blog/pourquoi-chaque-pme-a-besoin-d-un-site-web-professionnel-en-2025" className="cursor-pointer text-blue-700" aria-label="Navigation vers l'article sur l'importance d'un site web pour les PME">Lire la suite ...</Link>
                        </main>
                    </article>
                </Link>
                <Link href="/blog/comment-travailler-avec-un-freelance-pour-la-creation-d-un-site-web" className="cursor-pointer w-full md:w-[31%]" aria-label="Navigation vers l'article sur les étapes de travail avec un freelance pour la création d'un site web">
                    <article className='container-article bg-indigo-200 font-title rounded-xl shadow-lg'>
                        <header className="container-img w-full h-[200px] rounded-t-xl">
                            <img className="w-full h-full object-cover rounded-t-xl" src="/images/articles/freelance-scrabble.webp" alt="Photo de lettres de scrabbles sur une table en marbre formant le mot freelance" />
                        </header>
                        <main className='container-text p-5 font-title'>
                            <h2 className='font-bold text-xl text-secondary mb-2'>Comment Travailler avec un Freelance pour la Création d'un Site Web ? Étapes Clés à Suivre</h2>
                            <p className='text-md text-justify text-dark mb-2 md:h-[200px] overflow-hidden'>Travailler avec un freelance pour la création d’un site web peut offrir de nombreux avantages : flexibilité, expertise sur-mesure et une approche personnalisée. Cependant, il est essentiel de bien comprendre les étapes du processus.</p>
                            <Link href="/blog/comment-travailler-avec-un-freelance-pour-la-creation-d-un-site-web" className="cursor-pointer text-blue-700" aria-label="Navigation vers l'article sur les étapes de travail avec un freelance pour la création d'un site web">Lire la suite ...</Link>
                        </main>
                    </article>
                </Link>
            </section>
        </div>
    );
};

export default Blog;