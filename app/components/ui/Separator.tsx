"use client";
import React, { useContext } from 'react';
import { AppContext } from '../../../context/context';


const Separator = ({ type }: { type: string }) => {
    const { isDarkMode } = useContext(AppContext);

    return (
        <>
            {type === "1" && (
                <div className="separator w-vw bg-secondary h-[100px] mt-15 relative">
                    <span className="corner-left absolute w-[150px] h-[150px] bg-secondary -top-[150px] z-1 overflow-hidden border-0">
                        <span className={ isDarkMode ? "absolute bg-dark w-[300px] h-[300px] rounded-full bottom-0" : "absolute bg-white w-[300px] h-[300px] rounded-full bottom-0"}></span>
                    </span>
                    <span className={ isDarkMode ? "corner-right absolute w-[150px] h-[150px] bg-dark right-0 -z-0 overflow-hidden" : "corner-right absolute w-[150px] h-[150px] bg-white right-0 -z-0 overflow-hidden"}>
                        <span className="absolute bg-secondary w-[300px] h-[300px] rounded-full top-0 right-0 z-1"></span>
                    </span>
                </div>
            )}
            {type === "2" && (
                <div className={ isDarkMode ? "separator w-vw bg-dark h-[100px] relative" : "separator w-vw bg-white h-[100px] relative"}>
                    <span className={ isDarkMode ? "corner-left absolute w-[150px] h-[150px] bg-dark z-1 -top-[150px] overflow-hidden border-0" : "corner-left absolute w-[150px] h-[150px] bg-white z-1 -top-[150px] overflow-hidden border-0"}>
                        <span className={ isDarkMode ? "absolute bg-secondary w-[300px] h-[300px] rounded-full bottom-0 left-0 z-0" : "absolute bg-secondary w-[300px] h-[300px] rounded-full bottom-0"}></span>
                    </span>
                    <span className={ isDarkMode ? "corner-right absolute w-[150px] h-[150px] bg-secondary right-0 -z-0 overflow-hidden" : "corner-right absolute w-[150px] h-[150px] bg-secondary right-0 -z-0 overflow-hidden"}>
                        <span className={ isDarkMode ? "absolute bg-dark w-[300px] h-[300px] rounded-full top-0 right-0 z-1" : "absolute bg-white w-[300px] h-[300px] rounded-full top-0 right-0 z-1"}></span>
                    </span>
                </div>
            )}
        </>
    );
};

export default Separator;