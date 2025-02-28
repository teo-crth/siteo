import React from 'react';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type: "button" | "submit" | "reset";
    className: string;
}

const Button: React.FC<ButtonProps> = ({text, onClick, type, className}) => {
    return (
        <button onClick={onClick} type={type} className={className + ' px-4 py-2 shadow-lg hover:bg-primary-dark font-text font-bold text-light hover:text-light light-mode:hover:text-light rounded-full cursor-pointer'}>
            {text}            
        </button>
    );
};

export default Button;