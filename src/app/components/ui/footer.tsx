import React from 'react';

const footer = () => {
    return (
        <footer className='bg-gray-800 text-white text-center p-4'>
            <div className="container-footer w-full flex justify-center items-center">
                <div className="contact-container w-full md:w-[30%] lg:w-[30%] xl:w-[30%]">
                    <h4 className="font-title text-lg">Contact</h4>
                    <p className="text-sm">Tel: <a href='phoneto:0660369669' className='cursor-pointer'>06.60.36.96.69</a></p>
                    <p className="text-sm">Email: <a href="mailto:teo.conrath.pro@gmail.com" className='cursor-pointer'>teo.conrath.pro[at]gmail.com</a></p>
                </div>
            </div>
            <p className="font-title text-sm w-full text-center mt-3">
                © {new Date().getFullYear()} SitEO. All rights reserved.
            </p>
        </footer>
    );
};

export default footer;