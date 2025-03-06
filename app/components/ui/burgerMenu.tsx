"use client";
import React, { useContext } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMoon } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../../context/context';

const burgerMenu = () => {
    const { menuOpen, setMenuOpen, toggleTheme, isDarkMode } = useContext(AppContext);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickNav = () => {
        setMenuOpen(false);
    }

    if (!menuOpen) return null;

    return (
        <div className={ isDarkMode ? 'container-burgerMenu min-h-screen z-65 shadow-lg flex flex-col justify-start w-[70%] left-0 bottom-0 h-full items-center bg-dark text-light fixed' : 'container-burgerMenu fixed min-h-full z-65 shadow-lg flex flex-col justify-start w-[70%] left-0 bottom-0 h-full items-center bg-light text-dark'}>
            <header className="container-header-burger flex justify-end items-center p-3 w-full">
                <div className="container-close-icon flex justify-center items-center border-2 border-secondary w-[30px] h-[30px] rounded-full p-5 cursor-pointer" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faXmark} className='text-2xl'/>
                </div>
            </header>
            <h2 className='text-center font-title font-bold text-2xl text-secondary text-shadow-white'>Menu</h2>
            <nav className='font-title font-bold tracking-wider flex flex-col text-left text-xl gap-7 p-15 w-full'>
                <Link href="/" className="cursor-pointer hover:text-secondary" aria-label="Navigation vers la page d'accueil" onClick={handleClickNav}>
                    Accueil
                </Link>
                <Link href="/services" className="cursor-pointer hover:text-secondary" aria-label="Navigation vers la page des services" onClick={handleClickNav}>
                    Services
                </Link>
                <Link href="/tarifs" className="cursor-pointer hover:text-secondary" aria-label="Navigation vers la page des tarifs" onClick={handleClickNav}>
                        Tarifs
                </Link>
                <Link href="/portfolio" className="hover:text-secondary cursor-pointer" aria-label="Navigation vers le portefolio" onClick={handleClickNav}>
                    Portfolio
                </Link>
                <Link href="/faq" className="cursor-pointer hover:text-secondary" aria-label="Navigation vers la page foire aux questions" onClick={handleClickNav}>
                    FAQ
                </Link>
                <Link href="/contact" className="cursor-pointer hover:text-secondary" aria-label="Navigation vers la page de contact" onClick={handleClickNav}>
                    Contact
                </Link>
            </nav>
            <div className={ isDarkMode ? "container-darkmode w-[50px] h-[50px] cursor-pointer rounded-full text-2xl bg-light text-dark flex justify-center items-center" : "container-darkmode w-[50px] h-[50px] cursor-pointer rounded-full text-2xl bg-secondary text-white flex justify-center items-center"} onClick={toggleTheme}>
                <FontAwesomeIcon icon={faMoon} className='w-full h-full' /> 
            </div>
        </div>
    );
};

export default burgerMenu;