'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../../context/context';

const header = () => {
    const { menuOpen, setMenuOpen, toggleTheme, isDarkMode}  = useContext(AppContext);
    console.log('isDarkMode', isDarkMode);
    
    const toggleMenu = () => {
        console.log('toggleMenu');
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="flex justify-between items-center p-4 shadow-lg z-10">
            <div className="container-logo w-[100px] cursor-pointer">
                <a href="/">
                    { isDarkMode ?
                        <img src="/logo/siteo-white.webp" alt="Logo siteo" className='w-full'/>
                        :
                        <img src="/logo/siteo.webp" alt="Logo siteo" className='w-full'/>
                    }
                </a>
            </div>
            <div className="container-nav flex items-center flex-nowrap gap-2">
                <nav className="gap-4 font-title font-bold tracking-wider hidden lg:flex xl:flex">
                    <Link href="/" className="cursor-pointer hover:text-secondary" aria-label="Navigation vers la page d'accueil" >
                        Accueil
                    </Link>
                    <Link href="/tarifs" className="cursor-pointer hover:text-secondary" aria-label="Navigation vers la page des tarifs" >
                        Tarifs
                    </Link>
                    <Link href="/services" className="cursor-pointer hover:text-secondary" aria-label="Navigation vers la page des services" >
                        Services
                    </Link>
                    <Link href="/portfolio" className="hover:text-secondary cursor-pointer" aria-label="Navigation vers le portefolio">
                        Portfolio
                    </Link>
                    <Link href="/faq" className="cursor-pointer hover:text-secondary" aria-label="Navigation vers la page foire aux questions">
                        FAQ
                    </Link>
                    <Link href="/contact" className="cursor-pointer hover:text-secondary" aria-label="Navigation vers la page de contact">
                        Contact
                    </Link>
                </nav>
                <div className="container-darkmode justify-center items-center w-[30px] h-[30px] border-2 border-secondary rounded-full cursor-pointer hidden lg:flex xl:flex" onClick={toggleTheme}>
                    <FontAwesomeIcon icon={faMoon} className='w-full h-full text-secondary' />
                </div>
                <div className={ isDarkMode ? 'container-burgerMenu-icon sm:block md:block lg:hidden xl:hidden text-light' : 'container-burgerMenu-icon sm:block md:block lg:hidden xl:hidden text-dark'} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </header>
    );
};

export default header;