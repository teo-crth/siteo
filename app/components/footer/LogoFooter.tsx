"use client";
import React, { useContext } from 'react';
import { AppContext } from '../../../context/context';

const LogoFooter = () => {
    const { isDarkMode } = useContext(AppContext);

    return (
        <>
        
            <div className='container-img-logo-footer hidden md:flex lg:flex xl:flex md:w-[100px] lg:w-[100px] xl:w-[100px]'>
                <img src="../../../logo/siteo-carre-white.webp" alt="Logo SitEO." />
            </div>
            <div className='container-img-logo-footer flex md:hidden lg:hidden xl:hidden w-[50%]'>
                <img src="../../../logo/siteo-white.webp" alt="Logo SitEO." />
            </div>
        </>

    );
};

export default LogoFooter;