import Link from 'next/link';
import React from 'react';
import LogoFooter from './LogoFooter';


const footer = () => {
    return (
        <footer className='bg-gray-800 text-white text-center p-4'>
            <div className="container-footer w-full flex justify-center items-start font-title flex-wrap gap-4">
                <div className="logo-container w-full md:w-[9%] lg:w-[10%] xl:w-[10%] flex flex-col justify-center items-center">
                    < LogoFooter />
                </div>
                <div className="links-container w-full md:max-w-[25%] lg:max-w-[25%] xl:max-w-[25%] flex flex-col justify-start">
                    <h4 className="font-bold text-lg">SitEO.</h4>
                    <Link href="/tarifs" className="text-sm cursor-pointer" aria-label="Navigation vers la page des tarifs">
                        Tarifs
                    </Link>
                    <Link href="/faq" className="text-sm cursor-pointer" aria-label="Navigation vers la page foire aux questions">
                        FAQ
                    </Link>
                    <Link href="/blog" className="text-sm cursor-pointer" aria-label="Navigation vers le blog">
                        Blog
                    </Link>
                </div>
                <div className="site-container w-full md:max-w-[25%] lg:max-w-[25%] xl:max-w-[25%] flex flex-col">
                    <h4 className="text-lg">Site</h4>
                    <Link href="/mentions-legales" className="text-sm cursor-pointer" aria-label="Navigation vers la page des mentions légales">
                        Mentions légales & CGV
                    </Link>
                    <Link href="/sitemap" className="text-sm cursor-pointer" aria-label="Navigation vers le plan du site">
                        Plan du site
                    </Link>
                </div>
                <div className="contact-container w-full md:max-w-[25%] lg:max-w-[25%] xl:max-w-[25%] flex flex-col items-center gap-1">
                    <h4 className="text-lg">Coordonnées</h4>
                    <p className="text-sm">Tel: <a href='phoneto:0660369669' className='cursor-pointer'>06.60.36.96.69</a></p>
                    <p className="text-sm">Email: <a href="mailto:teo.conrath.pro@gmail.com" className='cursor-pointer'>teo.conrath.pro[at]gmail.com</a></p>
                    <a href="https://www.linkedin.com/in/teoconrath/" target='blank' className="cursor-pointer w-[30px] h-[30px]" aria-label="Lien vers le profil Linkedin de Téo Conrath">
                        <img src="../../../logo/icon/linkedin.webp" alt="Logo Linkedin" />
                    </a>
                </div>
            </div>
            <p className="font-title text-sm w-full text-center mt-3">
                © {new Date().getFullYear()} SitEO. All rights reserved.
            </p>
        </footer>
    );
};

export default footer;