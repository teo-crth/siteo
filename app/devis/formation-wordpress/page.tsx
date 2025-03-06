import React from 'react';
import type { Metadata } from "next";
import Head from 'next/head';
import FormDevis from '../../components/ui/FormDevis';

export const metadata: Metadata = {
    title: "Formation Wordpress avec un développeur web professionnel",
    description: "Formation wordpress : création de contenu, ajout de pages & d'articles de blog, outils et plugins, référencement naturel, etc. Découvrez les formations Wordpress de SitEO."
};

const FormationWordpress = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Pourquoi demander un devis pour une formation WordPress ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Si vous souhaitez créer un site web facilement et efficacement, une formation WordPress est une excellente option. WordPress est l'une des plateformes les plus populaires pour créer des sites internet, que ce soit un site vitrine, un site e-commerce ou un blog. Demander un devis pour une formation WordPress vous permet de connaître le coût d'une formation sur mesure, adaptée à vos besoins, que vous soyez débutant ou souhaitiez approfondir vos compétences en développement web. Une formation WordPress complète vous apprendra à maîtriser les fonctionnalités essentielles de la plateforme, comme l'installation, la personnalisation des thèmes, la gestion des plugins, et le référencement SEO. Vous pourrez ainsi créer un site professionnel, optimisé pour les moteurs de recherche et adapté à vos objectifs. Un devis formation WordPress détaillé vous donnera une vision claire des services inclus dans la formation, tels que des modules sur la sécurité, la gestion des utilisateurs, et les meilleures pratiques en matière de design. En obtenant un devis personnalisé pour votre formation WordPress, vous serez en mesure de comparer les offres proposées par différentes agences ou formateurs et de choisir celle qui répond le mieux à vos attentes. Vous pourrez également savoir si la formation inclut un suivi post-formation pour vous aider à appliquer ce que vous avez appris sur vos projets réels. Si vous souhaitez apprendre à créer des sites web de manière plus technique, une formation HTML CSS est un excellent point de départ. Ces deux langages sont les fondations du développement web, et maîtriser le HTML et le CSS vous permettra de créer des sites web personnalisés, adaptés à vos besoins et entièrement contrôlés par vous. Demander un devis pour une formation HTML CSS vous permettra d’obtenir une estimation des coûts pour apprendre ces technologies indispensables, que ce soit pour une utilisation personnelle ou professionnelle."
            }
          },
          {
            "@type": "Question",
            "name": "La formation concerne-t-elle uniquement Wordpress ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Si vos besoins concernent uniquement une formation wordpress oui. Cependant, je propose également des formations HTML, CSS, ou javascript. Afin d'acquérir un socle de connaissance solide sur le fonctionnement d'un site web et comment couvrir les besoins les plus courants."
            }
          }
        ]
      }; 

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <main>
                <div className='container-devisPage p-8 pb-20 gap-2 sm:p-15 font-title min-h-[calc(100vh-159px)] flex flex-col justify-center items-center w-full'>
                    <h1 className='font-bold text-center md:text-6xl lg:text-6xl xl:text-6xl text-4xl text-secondary text-shadow-white'>Demander un devis pour une formation Wordpress</h1>
                    <h3 className='font-bold text-center text-xl text-gray-600'>Contenu de la formation adaptée à vos objectifs</h3>
                    <h2 className='font-bold text-center text-xl text-amber-500'>Discutons de vos besoins de formation en développement !</h2>
                    <FormDevis devisType='Devis Formation Wordpress' />
                    <section className="container-text flex flex-col justify-center items-center gap-4 w-[95%] md:w-[60%] lg:w-[50%] xl:w-[40%] p-5">
                        <h3 className='font-bold text-center text-xl'>La formation concerne-t-elle uniquement Wordpress ?</h3>
                        <p className='text-xl text-justify'>Si vos besoins concernent uniquement une formation wordpress oui. Cependant, je propose également des formations HTML, CSS, ou javascript. Afin d'acquérir un socle de connaissance solide sur le fonctionnement d'un site web et comment couvrir les besoins les plus courants.</p>
                        <h3 className='font-bold text-center text-xl'>Pourquoi demander un devis pour une formation WordPress et/ou HTML, CSS ?</h3>
                        <p className='text-xl text-justify'>Si vous souhaitez créer un site web facilement et efficacement, une formation WordPress est une excellente option. WordPress est l'une des plateformes les plus populaires pour créer des sites internet, que ce soit un site vitrine, un site e-commerce ou un blog. Demander un devis pour une formation WordPress vous permet de connaître le coût d'une formation sur mesure, adaptée à vos besoins, que vous soyez débutant ou souhaitiez approfondir vos compétences en développement web.</p>
                        <p className='text-xl text-justify'>Une formation WordPress complète vous apprendra à maîtriser les fonctionnalités essentielles de la plateforme, comme l'installation, la personnalisation des thèmes, la gestion des plugins, et le référencement SEO. Vous pourrez ainsi créer un site professionnel, optimisé pour les moteurs de recherche et adapté à vos objectifs. Un devis formation WordPress détaillé vous donnera une vision claire des services inclus dans la formation, tels que des modules sur la sécurité, la gestion des utilisateurs, et les meilleures pratiques en matière de design.</p>
                        <p className='text-xl text-justify'>En obtenant un devis personnalisé pour votre formation WordPress, vous serez en mesure de comparer les offres proposées par différentes agences ou formateurs et de choisir celle qui répond le mieux à vos attentes. Vous pourrez également savoir si la formation inclut un suivi post-formation pour vous aider à appliquer ce que vous avez appris sur vos projets réels.</p>
                        <p className='text-xl text-justify'>Si vous souhaitez apprendre à créer des sites web de manière plus technique, une formation HTML CSS est un excellent point de départ. Ces deux langages sont les fondations du développement web, et maîtriser le HTML et le CSS vous permettra de créer des sites web personnalisés, adaptés à vos besoins et entièrement contrôlés par vous. Demander un devis pour une formation HTML CSS vous permettra d’obtenir une estimation des coûts pour apprendre ces technologies indispensables, que ce soit pour une utilisation personnelle ou professionnelle.</p>
                    </section>
                </div>
            </main>
        </>
    );
};

export default FormationWordpress;