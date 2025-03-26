import React from 'react';

const page = () => {
    return (
        <div className='container-faqPage flex flex-col items-center justify-start w-full p-8 pb-20 gap-5 font-title'>
            <h1 className='font-bold text-center text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-secondary text-shadow-white'>Mentions légales</h1>

            <section className='w-full md:w-[60%] lg:w-[60%] xl:w-[60%] text-left'>
                <p className='text-lg text-justify'>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site Siteo l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>
                
                <h2 className='text-2xl font-bold pt-5'>Edition du site</h2>
                <p className='text-lg text-justify'>Le présent site, accessible à l’URL www.siteo-web.fr (le « Site »), est édité par : Téo Conrath, résidant 6 allée des peupliers, de nationalité Française (France), né(e) le 23/06/1994</p>
                
                <h2 className='text-2xl font-bold pt-5'>Hébergement</h2>
                <p className='text-lg text-justify'>Le Site est hébergé par la société Hostinger International LTD, situé 61 Lordou Vironos str. 6023 Larnaca, Chypre, (contact téléphonique ou email : https://www.hostinger.fr/contact).</p>
                
                <h2 className='text-2xl font-bold pt-5'>Directeur de publication</h2>
                <p className='text-lg text-justify'>Le directeur de la publication du site est Téo Conrath.</p>
                <h2 className='text-2xl font-bold pt-5'>Propriété intellectuelle</h2>
                <p className='text-lg text-justify'>Tous les contenus présents sur ce site (textes, images, logos, etc.) sont la propriété exclusive de Téo Conrath ou de ses partenaires et sont protégés par la législation en vigueur sur la propriété intellectuelle.</p>
                <h2 className='text-2xl font-bold pt-5'>Nous contacter</h2>
                <p className='text-lg text-justify'>Par téléphone : +33660369669</p>
                <p className='text-lg text-justify'>Par email : teo.conrath.pro@gmail.com</p>
                <p className='text-lg text-justify'>Par courrier : 6 allée des peupliers, 13100 Aix-en-Provence</p>
            </section>
        </div>
    );
};

export default page;