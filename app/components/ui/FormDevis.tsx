"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ValidationError, useForm } from '@formspree/react';
import Button from './button';

export default function CustomGoogleForm({ devisType }: { devisType: string }) {
    const FORM_ID: string = process.env.NEXT_PUBLIC_FORMSPREE_ID || '';
    const [state, handleSubmit] = useForm(FORM_ID);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        objet: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        phone: '',
      });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "phone") {
            const phonePattern = /^(?:\+33|0)[1-9](?:[ -]?[0-9]{2}){4}$/;
            if (!phonePattern.test(value)) {
              setErrors({ ...errors, phone: 'Numéro de téléphone invalide' });
            } else {
              setErrors({ ...errors, phone: '' });
            }
          }
    };

    const handleClick = () => {
        router.push('/');
    };

    // Gérer la soumission du formulaire
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Ajouter devisType au début de l'objet avant soumettre le formulaire
        const updatedObjet = `${devisType} - ${formData.objet}`;

        // Construire l'objet du formulaire
        const formDataToSubmit = {
            ...formData,
            objet: updatedObjet, // Mettre à jour le champ objet
        };

        const phonePattern = /^(?:\+33|0)[1-9](?:[ -]?[0-9]{2}){4}$/;
        if (!phonePattern.test(formData.phone)) {
          setErrors({ ...errors, phone: 'Numéro de téléphone invalide' });
          return;
        }

        handleSubmit(formDataToSubmit);
    };

    if (state.succeeded) {
        return (
            <div className="container-contact flex flex-col items-center justify-center w-full p-5">
                <div className="container-messageContact border bg-green-700 light-mode:bg-light text-light light-mode:text-dark rounded-lg shadow-md p-5 flex flex-col items-center justify-center w-80">
                    <p className='font-title font-bold text-2xl text-center p-2 text-light bg-green-700 rounded-2xl'>Devis envoyé !</p>
                    <Button text="Retour à l'accueil" className='border-2 border-dark' onClick={handleClick} type={'button'} />
                </div>
            </div>
        );
    }

    return (
        <div className="container-formDevis w-[95%] md:w-[60%] lg:w-[50%] xl:w-[40%] p-5">
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 font-title">
                <input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                
                <input
                    type="text"
                    name="objet"
                    placeholder="Objet"
                    value={formData.objet}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />
                <ValidationError prefix="Objet" field="objet" errors={state.errors} />
                
                <input
                    type="phone"
                    name="phone"
                    placeholder="Téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="^(?:\+33|0)[1-9](?:[ -]?[0-9]{2}){4}$"
                    title="Veuillez entrer un numéro de téléphone valide"
                    required
                    className="p-2 border rounded"
                />
                {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
                <textarea
                    name="message"
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                
                <button type="submit" className="bg-secondary text-white p-2 rounded cursor-pointer text-xl" disabled={state.submitting}>
                    Envoyer
                </button>
            </form>
        </div>
    );
}
