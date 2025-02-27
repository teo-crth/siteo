import React from 'react';

const header = () => {
    return (
        <header className="bg-gray-800 flex justify-between items-center p-4 bg-white">
            <div className="container-logo w-[100px]">
                <img src="/logo/siteo-black.webp" alt="Logo siteo" className='w-full'/>
            </div>
        </header>
    );
};

export default header;