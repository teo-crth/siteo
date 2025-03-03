"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from '@formspree/react';
import ContactForm from '../components/ContactForm';
import Button from '../components/ui/button';

const Contact = () => {
    const [state, handleSubmit] = useForm("xdkaqywz");
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };

    if (state.succeeded) {
        return (
            <div className="container-contact flex flex-col items-center justify-center w-full p-5 min-h-[calc(100vh-159px)]">
                <div className="container-messageContact border bg-green-700 light-mode:bg-light text-light light-mode:text-dark rounded-lg shadow-md p-5 flex flex-col items-center justify-center w-80">
                    <p className='font-title font-bold text-2xl text-center p-2 text-light bg-green-700 rounded-2xl'>Email envoyé !</p>
                    <Button text="Retour à l'accueil" className='border-2 border-light' onClick={handleClick} type={'button'} />
                </div>
            </div>           
        );
    }

    return (
        <div className='container-contactPage p-5 flex justify-center items-center flex-col gap-5'>
            <h1 className='font-title font-bold text-center text-4xl'>Contact</h1>
            <ContactForm handleSubmit={handleSubmit} state={state}/>
        </div>
    );
};

export default Contact;