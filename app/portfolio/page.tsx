"use client";
import React from 'react';
import CustomSlider from '../components/ui/CustomSlider';

const Portfolio = () => {
    return (
        <div className="container-portfolio flex flex-col items-center justify-start w-full p-5 min-h-[calc(100vh-159px)]">
            <h1 className='text-center font-bold font-title md:text-6xl lg:text-6xl xl:text-6xl text-4xl text-secondary m-7'>Projets réalisés</h1>
            <section className='container-opco w-full flex items-center justify-center flex-col gap-3'>
                <h2 className='text-center font-bold font-title text-3xl text-dark'>OP & Co</h2>
                <p className='text-center text-xl font-title text-secondary'>Réalisation d'un site Wordpress pour une Correctrice / Relectrice à son compte.</p>
                <article className='flex flex-col items-center justify-center rounded-lg m-5 w-[90%] md:w-[80%] lg:w-[60%] xl:w-[45%] bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border border-white/18'>
                    <header className='bg-gray-100 flex w-full justify-start items-center p-5 rounded-t-lg gap-2'>
                        <div className='h-3 w-3 bg-gray-400 rounded-full'></div>
                        <div className='h-3 w-3 bg-gray-400 rounded-full'></div>
                        <div className='h-3 w-3 bg-gray-400 rounded-full'></div>
                    </header>
                    <main className='slider-container w-full h-[750px] md:h-[450px] lg:h-[450px] xl:h-[450px]'>
                        <CustomSlider site="opandco"/>
                    </main>
                </article>
            </section>
            <section className='container-addm w-full flex items-center justify-center flex-col gap-3 m-10'>
                <h2 className='text-center font-bold font-title text-3xl text-dark'>Au détour des mots</h2>
                <p className='text-center text-xl font-title text-secondary'>Réalisation d'un site sur-mesure chercher des livres et les ajouter à sa pile à lire.</p>
                <article className='flex flex-col items-center justify-center rounded-lg m-5 w-[90%] md:w-[80%] lg:w-[60%] xl:w-[45%] bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border border-white/18'>
                    <header className='bg-gray-100 flex w-full justify-start items-center p-5 rounded-t-lg gap-2'>
                        <div className='h-3 w-3 bg-gray-400 rounded-full'></div>
                        <div className='h-3 w-3 bg-gray-400 rounded-full'></div>
                        <div className='h-3 w-3 bg-gray-400 rounded-full'></div>
                    </header>
                    <main className='slider-container w-full h-[750px] md:h-[450px] lg:h-[450px] xl:h-[450px]'>
                        <CustomSlider site="addm"/>
                    </main>
                </article>
            </section>
        </div>
    );
};

export default Portfolio;