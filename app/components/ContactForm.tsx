"use client";
import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import { ValidationError } from '@formspree/react';
import Button from './ui/button';

interface ContactFormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    state: {
        errors: any[];
        submitting: boolean;
    };
}

const ContactForm: React.FC<ContactFormProps> = ({ handleSubmit, state }) => {
    const { isDarkMode } = useContext(AppContext);

    return (
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
    );
};

export default ContactForm;