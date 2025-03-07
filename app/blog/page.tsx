import React from 'react';

const Blog = () => {
    return (
        <div className='container-blog flex flex-col items-center justify-start w-full p-8 pb-20 gap-5 sm:p-15'>
            <h1 className='font-title font-bold text-center text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-secondary text-shadow-white'>Blog d'un développeur Aixois</h1>
            <section className="container-articles w-full flex flex-wrap justify-center items-start gap-5">
                <p className='font-title font-bold text-center text-xl'>Aucun articles disponibles</p>
            </section>
        </div>
    );
};

export default Blog;