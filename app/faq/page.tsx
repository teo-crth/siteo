import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Toutes vos questions sur la création d'un site par un freelance",
  description: "Vous avez des questions sur la création d'un site par un freelance ? Découvrez toutes les réponses à vos questions sur la création de site web."
};

const Faq = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Pourquoi choisir un site internet sur-mesure ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adaptabilité : Chaque projet est développé en tenant compte des particularités de votre secteur, qu’il soit luxe, tourisme, santé, finance ou éducation, afin de garantir une solution web optimale. Fonctionnalités personnalisées : J’intègre des fonctionnalités avancées qui répondent spécifiquement à vos besoins métier, telles que des formulaires personnalisés, des portails client, des systèmes de gestion de contenu (CMS) ou encore des systèmes de réservation en ligne. Design responsive : Tous mes sites sont adaptés aux mobiles et optimisés pour le référencement SEO, assurant une visibilité accrue et une expérience utilisateur fluide sur tous les appareils. Performance et sécurité : Je m’assure que chaque site soit rapide, sécurisé, et évolutif, afin de garantir une meilleure expérience utilisateur et un excellent classement SEO sur Google. Développez votre présence en ligne avec un site web sur-mesure qui reflète vos valeurs, vos services et qui répond aux attentes spécifiques de vos clients dans votre secteur d’activité. Contactez-moi dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé pour la création de votre site internet sur-mesure."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi choisir un site WordPress personnalisé ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "      Solution clé en main : Je vous propose des sites WordPress sur-mesure, avec des thèmes et des plugins adaptés spécifiquement à votre secteur d'activité, qu'il s'agisse de commerce en ligne, de portfolio, de blog, ou de site vitrine pour votre entreprise. Optimisation SEO : Chaque site est développé en respectant les bonnes pratiques du référencement SEO afin d'améliorer votre visibilité sur Google et attirer plus de clients. Adaptabilité à votre secteur : Que vous soyez dans le tourisme, l’immobilier, les services professionnels, la restauration, ou toute autre industrie, je crée des sites WordPress parfaitement adaptés à vos besoins spécifiques. Facilité de gestion : Grâce à l’interface intuitive de WordPress, vous pouvez gérer et mettre à jour facilement votre site web, sans avoir besoin de connaissances techniques approfondies. Design responsive : Tous les sites sont optimisés pour être adaptés aux mobiles, garantissant une expérience utilisateur fluide sur tous les appareils et un meilleur classement SEO. Avec WordPress, vous pouvez évoluer facilement avec votre entreprise, en ajoutant des fonctionnalités personnalisées, des sections ou des pages spécifiques à vos besoins. Que vous ayez besoin d'un blog, d'un e-commerce avec WooCommerce, ou d'un site corporate, WordPress est une solution flexible et scalable."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi choisir un site vitrine ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "      Solution clé en main : Je vous propose des sites WordPress sur-mesure, avec des thèmes et des plugins adaptés spécifiquement à votre secteur d'activité, qu'il s'agisse de commerce en ligne, de portfolio, de blog, ou de site vitrine pour votre entreprise. Optimisation SEO : Chaque site est développé en respectant les bonnes pratiques du référencement SEO afin d'améliorer votre visibilité sur Google et attirer plus de clients. Adaptabilité à votre secteur : Que vous soyez dans le tourisme, l’immobilier, les services professionnels, la restauration, ou toute autre industrie, je crée des sites WordPress parfaitement adaptés à vos besoins spécifiques. Facilité de gestion : Grâce à l’interface intuitive de WordPress, vous pouvez gérer et mettre à jour facilement votre site web, sans avoir besoin de connaissances techniques approfondies. Design responsive : Tous les sites sont optimisés pour être adaptés aux mobiles, garantissant une expérience utilisateur fluide sur tous les appareils et un meilleur classement SEO. Avec WordPress, vous pouvez évoluer facilement avec votre entreprise, en ajoutant des fonctionnalités personnalisées, des sections ou des pages spécifiques à vos besoins. Que vous ayez besoin d'un blog, d'un e-commerce avec WooCommerce, ou d'un site corporate, WordPress est une solution flexible et scalable."
        }
      },
      {
        "@type": "Question",
        "name": "Stratégie SEO (référencement naturel), c'est quoi exactement ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Amélioration du classement sur Google : Un référencement naturel bien optimisé permet à votre site d’apparaître en première page des résultats de recherche pour des mots-clés pertinents. Ciblage de votre audience : En choisissant les bons mots-clés, j'aide votre entreprise à se positionner sur des requêtes spécifiques liées à votre secteur d'activité, attirant ainsi un trafic ciblé et de qualité. Optimisation technique du site : Un audit SEO complet permet d'optimiser les aspects techniques de votre site, comme la vitesse de chargement, l’architecture de l’information, et les balises HTML, afin de garantir une expérience utilisateur fluide et une meilleure indexation par les moteurs de recherche. Optimisation des contenus : Je vous aide à produire des contenus de qualité, optimisés pour le SEO, afin d'attirer et retenir vos visiteurs. Cela inclut l'optimisation des titres, des métas descriptions, des images et des articles de blog. Référencement local : Si vous avez un commerce local, je m'assure que votre site soit optimisé pour le référencement local afin d'attirer des clients dans votre région et augmenter vos visites en magasin. Audit SEO et suivi des performances : Je réalise des audits réguliers et des rapports détaillés pour suivre les performances de votre site et ajuster les actions SEO en fonction des résultats obtenus. Le référencement naturel est une stratégie durable qui génère des résultats sur le long terme. Contrairement à la publicité payante (SEA), le SEO vous permet de construire une présence en ligne solide qui continue de croître avec le temps, sans avoir à payer pour chaque clic. Optimisez votre site pour le référencement naturel et attirez plus de visiteurs qualifiés grâce à une stratégie SEO personnalisée. Contactez-moi dès aujourd'hui pour discuter de votre projet et recevoir un audit SEO gratuit."
        }
      }
    ]
  };


  return (
    <div className='container-faqPage flex flex-col items-center justify-start w-full p-8 pb-20 gap-5'>
      <h1 className='font-title font-bold text-center text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-secondary text-shadow-white'>Foire aux questions</h1>
      <h1 className='font-title font-bold text-center text-2xl md:text-4xl lg:text-4xl xl:text-4xl'>Toutes vos questions sur la création d'un site par un freelance</h1>
      <section className='container-questions-seo font-title w-full'>
        <h2 className="font-title font-bold text-center text-2xl md:text-4xl w-full p-10 text-secondary text-shadow-white">Développeur freelance</h2>
        <div className="question mb-5">
          <details className='w-full border-b border-gray-300'>
            <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='services-proposes'>Quels services proposez-vous en tant que développeur freelance ?</summary>
            <ul className='font-bold text-xl text-justify px-7 md:px-20 mb-2'>
              <li className='list-disc list-item'>Création de site ou d'application</li>
              <li className='list-disc list-item'>Modification de site déja existant</li>
              <li className='list-disc list-item'>Audit SEO</li>
              <li className='list-disc list-item'>Maintenance des sites créés</li>
              <li className='list-disc list-item'>Formation</li>
            </ul>
          </details>
        </div>
        <div className="question mb-5">
          <details className='w-full border-b border-gray-300'>
            <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='travailler-freelance-etapes'>Travailler avec un freelance, quelles sont les étapes ?</summary>
            <ul className='text-xl text-justify px-7 md:px-20 mb-2'>
              <li className='list-decimal list-item font-bold'>Discuter de vos attentes et du projet</li>
              <p  className='pb-2'>Cette première phase permettra de comprendre vos besoins précis, afin d'établir un devis au plus juste. Il s'agira d'une prise de contact par téléphone, visio ou en présentiel pour discuter de la portée du projet, des fonctionnalités spécifiques et des attentes précises.</p>

              <li className='list-decimal list-item font-bold'>Livraison d'un devis & des délais</li>
              <p  className='pb-2'>Grâce aux informations collectées lors de la phase de discussion, un devis détaillé vous sera envoyé. Ce devis comportera le coût global de la prestation, le détail des fonctionnalités à développer, ainsi que les délais estimés pour chaque phase du projet.</p>

              <li className='list-decimal list-item font-bold'>Signature d'un contrat</li>
              <p  className='pb-2'>Une fois le devis accepté, un contrat formel sera signé pour officialiser l'accord. Ce contrat définira les conditions du projet, notamment les responsabilités de chaque partie, les délais de livraison, les conditions de paiement et les éventuelles révisions. Ainsi que le versement d'un accompte de 30% du montant total.</p>

              <li className='list-decimal list-item font-bold'>Mise en place d'une communication régulière</li>
              <p  className='pb-2'>Pendant le déroulement du projet, une communication régulière est essentielle. Nous resterons en contact à travers des réunions de suivi, des échanges par email, ou via des outils collaboratifs (en fonction de ce qui vous convient le mieux) pour vous tenir informé de l'avancée du travail.</p>

              <li className='list-decimal list-item font-bold'>Révisions et ajustements</li>
              <p  className='pb-2'>Lors du processus de développement, il peut être nécessaire de faire des ajustements. Après chaque phase, des révisions seront effectuées pour garantir que le travail corresponde exactement à vos attentes. Cela inclut des modifications en fonction de vos retours.</p>

              <li className='list-decimal list-item font-bold'>Paiement</li>
              <p  className='pb-2'>Après validation de votre part sur tous les aspects du site, il est maintenant prêt ! Il ne reste plus qu'à effectuer un versement par virement de la somme restante dûe.</p>

              <li className='list-decimal list-item font-bold'>Livraison du site</li>
              <p  className='pb-2'>Une fois le paiement effectué, le site ou l'application vous sera livré. Vous aurez accès à tous les fichiers nécessaires, ainsi que toute la documentation requise pour l'usage ou l'administration du projet, selon la nature de celui-ci.</p>

              <li className='list-decimal list-item font-bold'>Maintenance si nécessaire</li>
              <p  className='pb-2'>Après la livraison, si vous souhaitez bénéficier d'un suivi, d'une maintenance continue, ou de mises à jour régulières, un contrat de maintenance pourra être mis en place. Cela permet de garantir que votre site ou application reste performant, sécurisé et adapté à l'évolution de vos besoins.</p>
            </ul>
          </details>
        </div>
        <div className="question mb-5">
          <details className='w-full border-b border-gray-300'>
            <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='technologies'>Quelles technologies maîtrisez-vous ?</summary>
            <ul className='font-bold text-xl text-justify px-7 md:px-20 mb-2'>
              <li className='list-disc list-item'>Wordpress / Prestashop / Drupal</li>
              <li className='list-disc list-item'>Javascript & Framework (React, Node, Vue.js)</li>
              <li className='list-disc list-item'>Typescript</li>
              <li className='list-disc list-item'>HTML / CSS</li>
              <li className='list-disc list-item'>SQL</li>
              <li className='list-disc list-item'>Hébergement & Nom de domaine</li>
            </ul>
          </details>
        </div>
        <div className="question mb-5">
          <details className='w-full border-b border-gray-300'>
            <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='freelance-ou-agence'>Pourquoi choisir un développeur freelance plutôt qu’une agence ?</summary>
            <p className='text-xl text-justify mb-2'>Choisir un développeur freelance plutôt qu’une agence de développement présente plusieurs avantages, selon les besoins spécifiques de votre projet. Voici quelques raisons qui peuvent vous convaincre d'opter pour un développeur freelance :</p>
            <ul className='text-xl text-justify px-7 md:px-20 mb-2'>
              <li className='list-decimal list-item font-bold'>Flexibilité et personnalisation</li>
              <p  className='pb-2'>Un développeur freelance offre une flexibilité qu'une agence ne peut pas toujours égaler. Étant une seule personne, le freelance peut rapidement s’adapter à vos demandes et apporter des ajustements immédiats. De plus, vous travaillez directement avec la personne qui développe votre projet, ce qui permet une approche plus personnalisée. Le freelance peut vraiment prendre le temps de comprendre vos objectifs et ajuster son travail en conséquence, sans passer par plusieurs intermédiaires.</p>
            
              <li className='list-decimal list-item font-bold'>Coût généralement plus bas</li>
              <p  className='pb-2'>Les agences, en raison de leurs structures et de leurs coûts fixes (salaires d’employés, frais généraux, etc.), sont souvent plus coûteuses. En revanche, un développeur freelance a moins de charges fixes, ce qui lui permet de proposer des tarifs plus compétitifs. Vous avez donc plus de chance de trouver une offre adaptée à votre budget tout en bénéficiant d'une qualité professionnelle.</p>

              <li className='list-decimal list-item font-bold'>Communication directe</li>
              <p  className='pb-2'>Lorsque vous travaillez avec une agence, la communication passe souvent par un chef de projet ou d’autres intermédiaires. Cela peut entraîner des retards, des malentendus et une perte d'informations. Avec un développeur freelance, la communication est directe et transparente. Vous pouvez échanger rapidement, poser des questions et obtenir des réponses instantanées, ce qui accélère la prise de décision et rend le projet plus fluide.</p>

              <li className='list-decimal list-item font-bold'>Expertise spécialisée</li>
              <p  className='pb-2'>Un freelance se spécialise généralement dans une ou plusieurs technologies précises. S'il a l'expertise nécessaire pour votre projet, vous aurez un travail très pointu et de qualité. Contrairement à une agence qui peut avoir une équipe avec des compétences générales, un freelance peut vous offrir une expertise ciblée qui répond exactement à vos besoins techniques.</p>

              <li className='list-decimal list-item font-bold'>Suivi personnalisé</li>
              <p  className='pb-2'>Vous bénéficiez d'un suivi plus attentif. Puisque vous êtes son seul client (ou un client prioritaire), il mettra un point d’honneur à respecter vos exigences et à livrer un travail de qualité. Vous aurez également un meilleur contrôle sur les délais et les révisions, sans que cela ne passe par plusieurs couches de validation.</p>

              <li className='list-decimal list-item font-bold'>Rapidité et réactivité</li>
              <p  className='pb-2'>Un développeur freelance est généralement plus réactif et peut répondre plus rapidement aux modifications demandées. Les délais sont souvent plus courts, et les changements sont plus faciles à intégrer dans le projet. Travailler avec un freelance peut être un bon choix si vous avez des délais serrés ou des besoins de dernière minute.</p>

              <li className='list-decimal list-item font-bold'> Moins de bureaucratie</li>
              <p  className='pb-2'>Avec un freelance, la gestion administrative est plus simple. Vous n'avez pas à vous soucier des contrats ou des accords complexes comme cela peut être le cas avec une agence. Les échanges sont plus fluides, et le processus de collaboration est plus informel, ce qui peut rendre la gestion de projet plus rapide et moins lourde.</p>
            </ul>
          </details>
        </div>
        <div className="question mb-5">
          <details className='w-full border-b border-gray-300'>
            <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='temps-creation-site'>Combien de temps prend la création d'un site web ou d'une application ?</summary>
            <p className='text-xl text-justify mb-2'>La durée nécessaire pour créer un site web ou une application dépend de plusieurs facteurs, notamment la complexité du projet, les fonctionnalités spécifiques, le type de plateforme (site web ou application mobile), et l'implication des parties prenantes. Voici un aperçu des délais approximatifs pour différents types de projets :</p>
            <ul className='text-xl text-justify px-7 md:px-20 mb-2'>
              <li className='list-decimal list-item font-bold'>Création d’un site web simple (1 à 3 pages)</li>
              <p  className='pb-2'><strong>Durée estimée :</strong> 1 à 3 semaines.</p>

              <li className='list-decimal list-item font-bold'>Site web d’entreprise standard (entre 3 à 15 pages)</li>
              <p  className='pb-2'><strong>Durée estimée :</strong> 3 à 8 semaines.</p>

              <li className='list-decimal list-item font-bold'>Site web e-commerce</li>
              <p  className='pb-2'><strong>Durée estimée :</strong> 2 à 4 mois.</p>

              <li className='list-decimal list-item font-bold'>Application mobile simple (iOS/Android)</li>
              <p  className='pb-2'><strong>Durée estimée :</strong> 2 à 4 mois.</p>

              <li className='list-decimal list-item font-bold'> Application mobile complexe (iOS/Android)</li>
              <p  className='pb-2'><strong>Durée estimée :</strong> 4 à 9 mois.</p>

              <li className='list-decimal list-item font-bold'>Site web ou application sur mesure (fonctionnalités avancées)</li>
              <p  className='pb-2'><strong>Durée estimée :</strong> 3 mois à 1 an.</p>
            </ul>
          </details>
        </div>
        <div className="question mb-5">
          <details className='w-full border-b border-gray-300'>
            <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='paiement'>Quel est le processus de paiement pour un développeur freelance ?</summary>
            <p className='text-xl text-justify mb-2'>Un accompte de 30% doit être versé par virement à la signature du contrat, afin de limiter les risques des mauvais payeurs. Le paiement restant dûe sera demandé à la livraison du site internet</p>
          </details>
        </div>
      </section>
      <section className='container-clients font-title w-full'>
        <h2 className="font-title font-bold text-center text-2xl md:text-4xl w-full p-10 text-secondary text-shadow-white">Qui sont mes clients ?</h2>
        <div className="question mb-5">
          <details className='w-full border-b border-gray-300'>
            <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='creation-site-associations'>Création de site pour les PME</summary>
            <p className='text-xl text-justify mb-2'>Pour une PME (Petite et Moyenne Entreprise), avoir un site web professionnel est désormais un impératif pour se développer et se démarquer dans un marché de plus en plus compétitif. La création de site pour les PME par un développeur spécialisé permet de doter votre entreprise d'un outil puissant pour améliorer votre visibilité en ligne, générer de nouveaux prospects et renforcer votre crédibilité. Un site bien conçu est bien plus qu’une simple vitrine virtuelle, c’est un outil stratégique pour dynamiser la croissance de votre PME.</p>
          </details>
        </div>
        <div className="question mb-5">
          <details className='w-full border-b border-gray-300'>
            <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='creation-site-associations'>Création de site pour les associations</summary>
            <p className='text-xl text-justify mb-2'>La création de site pour les associations est un levier essentiel pour améliorer la visibilité en ligne, toucher un public plus large, et communiquer efficacement sur vos projets. Un site web bien conçu permet à votre association de gagner en crédibilité, de rendre ses actions visibles, et de faciliter les interactions avec les membres, les partenaires et les donateurs.La création de site pour les associations est un levier essentiel pour améliorer la visibilité en ligne, toucher un public plus large, et communiquer efficacement sur vos projets. Un site web bien conçu permet à votre association de gagner en crédibilité, de rendre ses actions visibles, et de faciliter les interactions avec les membres, les partenaires et les donateurs.</p>
            <p className='text-xl text-justify mb-2'>Pour que votre association soit correctement représentée sur Internet, il est crucial de faire appel à un développeur spécialisé qui saura répondre à vos besoins spécifiques tout en optimisant votre site pour le référencement naturel (SEO). Un site web bien développé et bien référencé est un outil puissant pour attirer de nouveaux membres, dynamiser les campagnes de collecte de fonds, et informatiser les démarches administratives.</p>
          </details>
        </div>
        <div className="question mb-5">
        <details className='w-full border-b border-gray-300'>
            <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='creation-site-restaurateurs'>Création de site pour les restaurateurs</summary>
            <p className='text-xl text-justify mb-2'>Un site personnalisé pour refléter l'image de votre restaurant. Chaque restaurant a sa propre ambiance, son propre style et ses spécialités culinaires. Un site web personnalisé vous permet de refléter cette identité et d’offrir une expérience unique à vos visiteurs. Grâce à l’expertise d’un développeur, vous pouvez créer un design de site en accord avec votre univers (gastronomique, moderne, traditionnel, etc.), tout en mettant en avant <strong>vos plats, vos menus et votre histoire</strong>. Un site bien conçu servira d'extension de votre restaurant, renforçant ainsi votre image de marque.</p>
            <p className='text-xl text-justify mb-2'>De plus, un site bien référencé vous amènera une clientèle diversifiée.</p>
          </details>
        </div>
      </section>
      <section className='container-questions-sites font-title w-full'>
        <h2 className="font-title font-bold text-center text-2xl md:text-4xl w-full p-10 text-secondary text-shadow-white">Quel type de site privilégier ?</h2>
        <div className="question mb-5">
          <details className='w-full border-b border-gray-300'>
            <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='pourquoi-choisir-un-site-internet-sur-mesure'>Pourquoi choisir un site internet sur-mesure ?</summary>
            <p className='text-xl text-justify mb-2'><strong>Adaptabilité :</strong> Chaque projet est développé en tenant compte des particularités de votre secteur, qu’il soit luxe, tourisme, santé, finance ou éducation, afin de garantir une solution web optimale.</p>
            <p className='text-xl text-justify mb-2'><strong>Fonctionnalités personnalisées :</strong> J’intègre des fonctionnalités avancées qui répondent spécifiquement à vos besoins métier, telles que des formulaires personnalisés, des portails client, des systèmes de gestion de contenu (CMS) ou encore des systèmes de réservation en ligne.</p>
            <p className='text-xl text-justify mb-2'><strong>Design responsive :</strong> Tous mes sites sont adaptés aux mobiles et optimisés pour le référencement SEO, assurant une visibilité accrue et une expérience utilisateur fluide sur tous les appareils.</p>
            <p className='text-xl text-justify mb-2'><strong>Performance et sécurité :</strong> Je m’assure que chaque site soit rapide, sécurisé, et évolutif, afin de garantir une meilleure expérience utilisateur et un excellent classement SEO sur Google.</p>
            <p className='text-xl text-justify mb-2'>Développez votre présence en ligne avec un site web sur-mesure qui reflète vos valeurs, vos services et qui répond aux attentes spécifiques de vos clients dans votre secteur d’activité. Contactez-moi dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé pour la création de votre site internet sur-mesure.</p>
          </details>
        </div>
        <div className="question mb-5">
          <details className='w-full border-b border-gray-300'>
            <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='pourquoi-choisir-un-site-wordpress-personnalise'>Pourquoi choisir un site WordPress personnalisé ?</summary>
            <p className='text-xl text-justify mb-2'><strong>Solution clé en main :</strong> Je vous propose des sites WordPress sur-mesure, avec des thèmes et des plugins adaptés spécifiquement à votre secteur d'activité, qu'il s'agisse de commerce en ligne, de portfolio, de blog, ou de site vitrine pour votre entreprise.</p>
            <p className='text-xl text-justify mb-2'><strong>Optimisation SEO :</strong> Chaque site est développé en respectant les bonnes pratiques du référencement SEO afin d'améliorer votre visibilité sur Google et attirer plus de clients.</p>
            <p className='text-xl text-justify mb-2'><strong>Adaptabilité à votre secteur :</strong> Que vous soyez dans le tourisme, l’immobilier, les services professionnels, la restauration, ou toute autre industrie, je crée des sites WordPress parfaitement adaptés à vos besoins spécifiques.</p>
            <p className='text-xl text-justify mb-2'><strong>Facilité de gestion :</strong> Grâce à l’interface intuitive de WordPress, vous pouvez gérer et mettre à jour facilement votre site web, sans avoir besoin de connaissances techniques approfondies.</p>
            <p className='text-xl text-justify mb-2'><strong>Design responsive :</strong> Tous les sites sont optimisés pour être adaptés aux mobiles, garantissant une expérience utilisateur fluide sur tous les appareils et un meilleur classement SEO.</p>
            <p className='text-xl text-justify mb-2'>Avec WordPress, vous pouvez évoluer facilement avec votre entreprise, en ajoutant des fonctionnalités personnalisées, des sections ou des pages spécifiques à vos besoins. Que vous ayez besoin d'un blog, d'un e-commerce avec WooCommerce, ou d'un site corporate, WordPress est une solution flexible et scalable.</p>
          </details>
        </div>
        <div className="question mb-5">
          <details className='w-full border-b border-gray-300'>
            <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='pourquoi-choisir-un-site-vitrine'>Pourquoi choisir un site vitrine ?</summary>
            <p className='text-xl text-justify mb-2'><strong>Solution clé en main :</strong> Je vous propose des sites WordPress sur-mesure, avec des thèmes et des plugins adaptés spécifiquement à votre secteur d'activité, qu'il s'agisse de commerce en ligne, de portfolio, de blog, ou de site vitrine pour votre entreprise.</p>
            <p className='text-xl text-justify mb-2'><strong>Optimisation SEO :</strong> Chaque site est développé en respectant les bonnes pratiques du référencement SEO afin d'améliorer votre visibilité sur Google et attirer plus de clients.</p>
            <p className='text-xl text-justify mb-2'><strong>Adaptabilité à votre secteur :</strong> Que vous soyez dans le tourisme, l’immobilier, les services professionnels, la restauration, ou toute autre industrie, je crée des sites WordPress parfaitement adaptés à vos besoins spécifiques.</p>
            <p className='text-xl text-justify mb-2'><strong>Facilité de gestion :</strong> Grâce à l’interface intuitive de WordPress, vous pouvez gérer et mettre à jour facilement votre site web, sans avoir besoin de connaissances techniques approfondies.</p>
            <p className='text-xl text-justify mb-2'><strong>Design responsive :</strong> Tous les sites sont optimisés pour être adaptés aux mobiles, garantissant une expérience utilisateur fluide sur tous les appareils et un meilleur classement SEO.</p>
            <p className='text-xl text-justify mb-2'>Avec WordPress, vous pouvez évoluer facilement avec votre entreprise, en ajoutant des fonctionnalités personnalisées, des sections ou des pages spécifiques à vos besoins. Que vous ayez besoin d'un blog, d'un e-commerce avec WooCommerce, ou d'un site corporate, WordPress est une solution flexible et scalable.</p>
          </details>
        </div>
      </section>
      <section className='container-questions-seo font-title w-full'>
        <h2 className="font-title font-bold text-center text-2xl md:text-4xl w-full p-10 text-secondary text-shadow-white">Comprendre le référencement naturel (SEO)</h2>
        <div className="question mb-5">
          <details className='w-full border-b border-gray-300'>
            <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='strategie-seo-cest-quoi'>Stratégie SEO (référencement naturel), c'est quoi exactement ?</summary>
            <p className='text-xl text-justify mb-2'><strong>Amélioration du classement sur Google :</strong> Un référencement naturel bien optimisé permet à votre site d’apparaître en première page des résultats de recherche pour des mots-clés pertinents.</p>
            <p className='text-xl text-justify mb-2'><strong>Ciblage de votre audience :</strong> En choisissant les bons mots-clés, j'aide votre entreprise à se positionner sur des requêtes spécifiques liées à votre secteur d'activité, attirant ainsi un trafic ciblé et de qualité.</p>
            <p className='text-xl text-justify mb-2'><strong>Optimisation technique du site :</strong> Un audit SEO complet permet d'optimiser les aspects techniques de votre site, comme la vitesse de chargement, l’architecture de l’information, et les balises HTML, afin de garantir une expérience utilisateur fluide et une meilleure indexation par les moteurs de recherche.</p>
            <p className='text-xl text-justify mb-2'><strong>Optimisation des contenus :</strong> Je vous aide à produire des contenus de qualité, optimisés pour le SEO, afin d'attirer et retenir vos visiteurs. Cela inclut l'optimisation des titres, des métas descriptions, des images et des articles de blog.</p>
            <p className='text-xl text-justify mb-2'><strong>Référencement local :</strong> Si vous avez un commerce local, je m'assure que votre site soit optimisé pour le référencement local afin d'attirer des clients dans votre région et augmenter vos visites en magasin.</p>
            <p className='text-xl text-justify mb-2'><strong>Audit SEO et suivi des performances :</strong> Je réalise des audits réguliers et des rapports détaillés pour suivre les performances de votre site et ajuster les actions SEO en fonction des résultats obtenus.</p>
            <p className='text-xl text-justify mb-2'><strong>Le référencement naturel</strong> est une stratégie durable qui génère des résultats sur le long terme. Contrairement à la publicité payante (SEA), le SEO vous permet de construire une présence en ligne solide qui continue de croître avec le temps, sans avoir à payer pour chaque clic. Optimisez votre site pour le référencement naturel et attirez plus de visiteurs qualifiés grâce à une stratégie SEO personnalisée. Contactez-moi dès aujourd'hui pour discuter de votre projet et recevoir un audit SEO gratuit.</p>
          </details>
        </div>
      </section>
      <section className='container-questions-seo font-title w-full'>
        <h2 className="font-title font-bold text-center text-2xl md:text-4xl w-full p-10 text-secondary text-shadow-white">Un site internet responsive, ça veut dire quoi ?</h2>
        <div className="question mb-5">
          <details className='w-full border-b border-gray-300'>
            <summary className='font-bold text-2xl cursor-pointer p-1 marker:text-secondary' id='responsive-explications'>Site web responsive : explication</summary>
            <p className='text-xl text-justify mb-2'>Un <strong>site internet responsive</strong> désigne un site web conçu pour offrir une expérience utilisateur optimale <strong>quel que soit le type d'appareil</strong> utilisé pour y accéder. En d'autres termes, un site responsive <strong>s'adapte automatiquement</strong> à la taille de l'écran, que ce soit un <strong>ordinateur de bureau</strong>, un <strong>smartphone</strong> ou une <strong>tablette</strong>. Ce design flexible permet de garantir que le contenu du site reste <strong>accessible et lisible</strong>, sans nécessiter de zoom ou de défilement horizontal excessif.</p>
            <h3 className='font-bold text-xl'>Pourquoi est-ce important ?</h3>
            <p className='text-xl text-justify mb-2'>Aujourd'hui, une grande majorité des utilisateurs accède à Internet via leurs smartphones et tablettes. Si un site web n'est pas responsive, il peut devenir <strong>difficile à naviguer</strong> sur ces appareils mobiles, ce qui peut entraîner une <strong>mauvaise expérience utilisateur</strong>. Un site non adapté pourrait décourager les visiteurs, ce qui peut <strong>impacter négativement</strong> votre taux de conversion ou votre image de marque. De plus Google repère les sites qui ne sont pas conçu pour les mobiles et les <strong>pénalisent</strong> en les référençants moins bien.</p>
          </details>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
};

export default Faq;