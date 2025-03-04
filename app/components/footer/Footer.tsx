import Link from 'next/link';
import React from 'react';
import LogoFooter from './LogoFooter';


const footer = () => {
    return (
        <footer className='bg-gray-800 text-white text-center p-4'>
            <div className="container-footer w-full flex justify-center items-center font-title flex-wrap gap-4 relative">
                <div className="logo-container w-full md:w-[9%] lg:w-[10%] xl:w-[10%] flex flex-col justify-center items-center md:absolute lg:absolute xl:absolute left-3 mt-7">
                    < LogoFooter />
                </div>
                <div className="links-container w-full md:max-w-[28%] lg:max-w-[28%] xl:max-w-[28%] flex flex-wrap justify-center gap-1">
                    <h4 className="font-bold text-lg w-full">SitEO.</h4>
                    <div className="container-links flex flex-col md:flex-row lg:flex-row xl:flex-row gap-0.5 md:gap-5 lg:gap-5 xl:gap-5">
                        <Link href="/tarifs" className="text-md cursor-pointer" aria-label="Navigation vers la page des tarifs">
                            Tarifs
                        </Link>
                        <Link href="/faq" className="text-md cursor-pointer" aria-label="Navigation vers la page foire aux questions">
                            FAQ
                        </Link>
                        <Link href="/blog" className="text-md cursor-pointer" aria-label="Navigation vers le blog">
                            Blog
                        </Link>
                    </div>
                </div>
                <div className="site-container w-full md:max-w-[28%] lg:max-w-[28%] xl:max-w-[28%] flex flex-wrap justify-center gap-1">
                    <h4 className="text-lg w-full font-bold">Site</h4>
                    <div className="container-links flex flex-col md:flex-row lg:flex-row xl:flex-row gap-0.5 md:gap-5 lg:gap-5 xl:gap-5">
                        <Link href="/mentions-legales" className="text-md cursor-pointer" aria-label="Navigation vers la page des mentions légales">
                            Mentions légales & CGV
                        </Link>
                        <Link href="/sitemap" className="text-md cursor-pointer" aria-label="Navigation vers le plan du site">
                            Plan du site
                        </Link>
                    </div>
                </div>
                <div className="contact-container w-full md:max-w-[28%] lg:max-w-[28%] xl:max-w-[28%] flex flex-wrap justify-center gap-1">
                    <h4 className="text-lg w-full font-bold">Coordonnées</h4>
                    <div className="container-links flex flex-col md:flex-row lg:flex-row xl:flex-row gap-0.5 md:gap-5 lg:gap-5 xl:gap-5">
                        <p className="text-md">Tel: <a href='phoneto:0660369669' className='cursor-pointer'>06.60.36.96.69</a></p>
                        <p className="text-md">Email: <a href="mailto:teo.conrath.pro@gmail.com" className='cursor-pointer'>teo.conrath.pro[at]gmail.com</a></p>
                    </div>
                </div>
            </div>
            <p className="font-title text-sm w-full text-center mt-3">
                © {new Date().getFullYear()} SitEO. All rights reserved.
            </p>
        </footer>
    );
};

export default footer;