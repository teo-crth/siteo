import React from 'react';
import Button from './components/ui/button';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className='container-404 font-title flex flex-col gap-5 justify-center items-center h-screen'>
            <h1 className='font-bold text-center text-4xl'>404 : Page Introuvable</h1>
            <h2 className='font-bold text-center text-2xl'>Félicitation ! Seuls les aventuriers prennent le risque de se perdre.</h2>
            <div className="container-img w-[80%] mb-5">
                <img src="/images/nofound.webp" className='rounded-full shadow-[18px_10px_0px_0px]  shadow-secondary' alt="Photo d'une personne avec des ski en pleine montagne dans la poudreuse" />
            </div>
            <Link href='/' aria-label="Navigation vers la page d'accueil">
                <Button type='button' className='bg-secondary hover:bg-indigo-800 px-7 text-xl' text="Retour à l'accueil" />
            </Link>
        </div>
    );
};

export default NotFoundPage;