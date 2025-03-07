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
            <div className="container-contact flex flex-col items-center justify-start w-full p-8 pb-20 gap-5 sm:p-15">
                <div className="container-messageContact border bg-green-700 light-mode:bg-light text-light light-mode:text-dark rounded-lg shadow-md p-5 flex flex-col items-center justify-center w-80">
                    <p className='font-title font-bold text-2xl text-center p-2 text-light bg-green-700 rounded-2xl'>Email envoyé !</p>
                    <Button text="Retour à l'accueil" className='border-2 border-dark' onClick={handleClick} type={'button'} />
                </div>
            </div>           
        );
    }

    return (
        <div className='container-contactPage flex flex-col items-center justify-start w-full p-8 pb-20 gap-5 font-title'>
            <h1 className='font-bold text-center md:text-6xl lg:text-6xl xl:text-6xl text-4xl text-secondary text-shadow-white'>Contact</h1>
            <form onSubmit={handleSubmit} className='container-form w-full md:w-[60%] lg:w-1/2 min-h-100 flex flex-col items-start justify-between text-center gap-2 shadow-lg bg-indigo-200 text-light rounded-xl'>
                <header className='w-full bg-secondary flex items-center justify-center p-2 rounded-t-xl shadow-2xl h-[70px]'>
                    <h3 className='font-text font-bold text-xl text-center w-full'>FORMULAIRE DE CONTACT</h3>
                </header>
                <main className='p-5 flex flex-col items-start justify-between text-center gap-5 w-full text-dark'>
                    <label className="mt-[5px] font-bold text-xl" htmlFor="email">Email</label>
                    <input
                        placeholder='mon-mail@gmail.com'
                        id="email"
                        type="email"
                        name="email"
                        className='pl-2 border border-dark text-dark placeholder-dark text-xl rounded-md w-full'
                        required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <label className="mt-[5px] font-bold text-xl" htmlFor="objet">Objet du message</label>
                    <input
                        id="objet"
                        type="text"
                        placeholder='Demande de renseignements'
                        name="objet"
                        className='pl-2 border border-dark text-dark placeholder-dark text-xl rounded-md w-full'
                        required
                    />
                    <ValidationError prefix="Objet" field="objet" errors={state.errors} />
                    <label className="mt-[5px] font-bold text-xl" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Ecrivez votre message ici"
                        className='min-h-30 pl-2 border border-dark text-dark placeholder-dark text-xl rounded-md w-full'
                        required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    <div className="container-buttons flex gap-3 justify-center items-center text-xl mt-[15px] w-full">
                        <Button type='submit' disabled={state.submitting} className='bg-secondary hover:bg-indigo-800  border-2 border-light px-7' text="Envoyer" />
                    </div>
                </main>
            </form>
        </div>
    );
};

export default Contact;