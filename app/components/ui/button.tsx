"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type: "button" | "submit" | "reset";
    className: string;
    disabled?: boolean;
    router?: string;
}

const Button: React.FC<ButtonProps> = ({text, onClick, type, className, router}) => {
    const routerPush = useRouter();

    if (router) {
        return (
            <button onClick={() => routerPush.push(router)} type={type} className={className + ' px-4 py-2 shadow-lg hover:bg-primary-dark font-title font-bold text-light hover:text-light light-mode:hover:text-light rounded-full cursor-pointer'}>
                {text}            
            </button>
        );
    }

    return (
        <button onClick={onClick} type={type} className={className + ' px-4 py-2 shadow-lg hover:bg-primary-dark font-title font-bold text-light hover:text-light light-mode:hover:text-light rounded-full cursor-pointer'}>
            {text}            
        </button>
    );
};

export default Button;