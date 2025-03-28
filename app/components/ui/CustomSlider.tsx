"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CustomSliderProps {
    site: string;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ site }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 4
    };

    return (
        <Slider {...settings} className='w-full h-[550px] md:h-[450px] lg:h-[450px] xl:h-[450px]'>
            <div className='w-full h-[550px] md:h-[450px] lg:h-[450px] xl:h-[450px]'>
                {site === "opandco" && (
                    <img
                        className="object-cover object-top h-full w-full rounded-b-lg"
                        src={isMobile ? "/images/opandco/op-1-mobile.png" : "/images/opandco/op-1.png"}
                        alt="Image page d'accueil OP&Co"
                    />
                )}
                {site === "addm" && (
                    <img
                        className="object-cover object-top h-full w-full rounded-b-lg"
                        src={isMobile ? "/images/addm/addm-accueil-1-mobile.png" : "/images/addm/addm-accueil.png"}
                        alt="Image page d'accueil au détour des mots"
                    />
                )}
                {site === "beerhunter" && (
                    <img
                        className="object-cover object-top h-full w-full rounded-b-lg"
                        src={isMobile ? "/images/beerhunter/accueil-mobile.png" : "/images/beerhunter/accueil.png"}
                        alt="Image page d'accueil beerhunter"
                    />
                )}
            </div>
            <div className='w-full h-[550px] md:h-[450px] lg:h-[450px] xl:h-[450px]'>
                {site === "opandco" && (
                    <img
                        className="object-cover object-top h-full w-full rounded-b-lg"
                        src={isMobile ? "/images/opandco/op-2-mobile.png" : "/images/opandco/op-2.png"}
                        alt="Image tarifs OP&Co"
                    />
                )}
                {site === "addm" && (
                    <img
                        className="object-cover object-top h-full w-full rounded-b-lg"
                        src={isMobile ? "/images/addm/addm-menu-mobile.png" : "/images/addm/addm-accueil-2.png"}
                        alt="Image page d'accueil avec des livres au détour des mots"
                    />
                )}
                {site === "beerhunter" && (
                    <img
                        className="object-cover object-top h-full w-full rounded-b-lg"
                        src={isMobile ? "/images/beerhunter/barpage-mobile.png" : "/images/beerhunter/barpage.png"}
                        alt="Image page d'un bar beerhunter"
                    />
                )}
            </div>
            <div className='w-full h-[550px] md:h-[450px] lg:h-[450px] xl:h-[450px]'>
                {site === "opandco" && (
                    <img
                        className="object-cover object-top h-full w-full rounded-b-lg"
                        src={isMobile ? "/images/opandco/op-3-mobile.png" : "/images/opandco/op-3.png"}
                        alt="Image page d'accueil OP&Co"
                    />
                )}
                {site === "addm" && (
                    <img
                        className="object-cover object-top h-full w-full rounded-b-lg"
                        src={isMobile ? "/images/addm/addm-bookPage-mobile.png" : "/images/addm/addm-bookPage.png"}
                        alt="Image page d'accueil avec des livres au détour des mots"
                    />
                )}
                {site === "beerhunter" && (
                    <img
                        className="object-cover object-top h-full w-full rounded-b-lg"
                        src={isMobile ? "/images/beerhunter/signup-mobile.png" : "/images/beerhunter/signup.png"}
                        alt="Image page d'inscription beerhunter"
                    />
                )}
            </div>
            <div className='w-full h-[550px] md:h-[450px] lg:h-[450px] xl:h-[450px]'>
                {site === "opandco" && (
                    <img
                        className="object-cover object-top h-full w-full rounded-b-lg"
                        src={isMobile ? "/images/opandco/op-4-mobile.png" : "/images/opandco/op-4.png"}
                        alt="Image page d'accueil OP&Co"
                    />
                )}
                {site === "addm" && (
                    <img
                        className="object-cover object-top h-full w-full rounded-b-lg"
                        src={isMobile ? "/images/addm/addm-search-mobile.png" : "/images/addm/addm-search.png"}
                        alt="Image page d'accueil avec des livres au détour des mots"
                    />
                )}
                {site === "beerhunter" && (
                    <img
                        className="object-cover object-top h-full w-full rounded-b-lg"
                        src={isMobile ? "/images/beerhunter/beerpage-mobile.png" : "/images/beerhunter/beerpage.png"}
                        alt="Image page d'inscription beerhunter"
                    />
                )}
            </div>
        </Slider>
    );
};

export default CustomSlider;
