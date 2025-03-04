"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { ValidationError, useForm } from '@formspree/react';
import Button from '../components/ui/button';

const Contact = () => {
    const FORM_ID : string = process.env.NEXT_PUBLIC_FORMSPREE_ID || '';
    const [state, handleSubmit] = useForm(FORM_ID);
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
            <form onSubmit={handleSubmit} className='container-form w-full md:w-1/2 lg:w-1/3 min-h-100 flex flex-col items-start justify-between text-center gap-2 shadow-lg bg-secondary text-light rounded-xl p-5'>
            <h3 className='font-text font-bold text-xl text-center w-full'>Formulaire de contact</h3>
            
            <label className="mt-[5px] font-bold" htmlFor="email">Email</label>
            <input
                placeholder='mon-mail@gmail.com'
                id="email"
                type="email"
                name="email"
                className='pl-2 border border-light text-white placeholder-white rounded-md'
                required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label className="mt-[5px] font-bold" htmlFor="objet">Objet du message</label>
            <input
                id="objet"
                type="text"
                placeholder='Demande de renseignements'
                name="objet"
                className='pl-2 border border-light text-white placeholder-white rounded-md w-full'
                required
            />
            <ValidationError prefix="Objet" field="objet" errors={state.errors} />

            <label className="mt-[5px] font-bold" htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                placeholder="Ecrivez votre message ici"
                className='min-h-30 pl-2 border border-light text-white placeholder-white rounded-md w-full'
                required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <div className="container-buttons flex gap-3 justify-center items-center mt-[15px] w-full">
                <Button type='submit' disabled={state.submitting} className='bg-secondary hover:bg-indigo-800  border-2 border-light' text="Envoyer" />
            </div>
         </form>
        </div>
    );
};

export default Contact;