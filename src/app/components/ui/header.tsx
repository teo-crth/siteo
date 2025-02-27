import React from 'react';

const header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md z-10">
            <div className="container-logo w-[100px] cursor-pointer">
                <a href="/">
                    <img src="/logo/siteo.webp" alt="Logo siteo" className='w-full'/>
                </a>
            </div>
            <div className="container-nav">
                <nav>
                    <ul className="flex gap-4 font-title font-bold tracking-wider text-black">
                        <li>
                            <a href="/" className="cursor-pointer hover:text-secondary">Accueil</a>
                        </li>
                        <li>
                            <a href="/services" className="cursor-pointer hover:text-secondary">Services</a>
                        </li>
                        <li>
                            <a href="/portfolio" className="cursor-pointer hover:text-secondary">Portfolio</a>
                        </li>
                        <li>
                            <a href="/faq" className="cursor-pointer hover:text-secondary">FAQ</a>
                        </li>
                        <li>
                            <a href="/contact" className="cursor-pointer hover:text-secondary">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default header;