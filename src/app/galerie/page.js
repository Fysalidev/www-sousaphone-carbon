import Image from "next/image";
import Revelation from "@/components/Revelation";
import {
  EtiquetteDoree,
  ParagrapheSection,
  SectionEditoriale,
} from "@/components/SectionsEditoriales";

export const metadata = {
  title: "Galerie — Sousaphone Carbon",
  description:
    "L'atelier, l'instrument et les musiciens en situation : découvrez le Sousaphone Carbon en images.",
};

// Page galerie : l'en-tête suit la colonne éditoriale du site (étiquette
// dorée, h1 serif, filet or), puis la grille des photos s'étend plus
// large (max-w-6xl) — une composition rythmée plutôt qu'une grille
// uniforme : le cycle alterne une grande image pleine largeur, une
// ligne de 2, une ligne de 3, puis de nouveau 2 — 33 photos = 4
// cycles + la grande de clôture. Remplacer un fichier public/galerie/
// galerie-XX.webp met à jour la galerie sans toucher au code —
// actualiser juste largeur/hauteur ci-dessous si le ratio change
// beaucoup (le cadrage object-cover absorbe les petites écarts).

// Photos de la galerie : src, alt et dimensions intrinsèques.
const PHOTOS = [
  {
    src: "/galerie/galerie-01.webp",
    alt: "Sousaphone en laiton de profil sur fond noir, pavillon doré au premier plan",
    largeur: 2028,
    hauteur: 1141,
  },
  {
    src: "/galerie/galerie-02.webp",
    alt: "Détail du Sousaphone Carbon",
    largeur: 900,
    hauteur: 1268,
  },
  {
    src: "/galerie/galerie-03.webp",
    alt: "Musicien avec son Sousaphone Carbon",
    largeur: 900,
    hauteur: 1268,
  },
  {
    src: "/galerie/galerie-04.webp",
    alt: "Sousaphone Carbon vu de trois quarts",
    largeur: 1521,
    hauteur: 1141,
  },
  {
    src: "/galerie/galerie-05.webp",
    alt: "Le Sousaphone Carbon en scène",
    largeur: 1200,
    hauteur: 649,
  },
  {
    src: "/galerie/galerie-06.webp",
    alt: "Sousaphone Carbon en pleine lumière",
    largeur: 2400,
    hauteur: 3197,
  },
  {
    src: "/galerie/galerie-07.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1016,
    hauteur: 1612,
  },
  {
    src: "/galerie/galerie-08.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1006,
    hauteur: 1400,
  },
  {
    src: "/galerie/galerie-09.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 948,
    hauteur: 1696,
  },
  {
    src: "/galerie/galerie-10.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1201,
    hauteur: 1600,
  },
  {
    src: "/galerie/galerie-11.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 2000,
    hauteur: 1501,
  },
  {
    src: "/galerie/galerie-12.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 2000,
    hauteur: 1501,
  },
  {
    src: "/galerie/galerie-13.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 2000,
    hauteur: 1502,
  },
  {
    src: "/galerie/galerie-14.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1502,
    hauteur: 2000,
  },
  {
    src: "/galerie/galerie-15.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1501,
    hauteur: 2000,
  },
  {
    src: "/galerie/galerie-16.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1501,
    hauteur: 2000,
  },
  {
    src: "/galerie/galerie-17.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1501,
    hauteur: 2000,
  },
  {
    src: "/galerie/galerie-18.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1501,
    hauteur: 2000,
  },
  {
    src: "/galerie/galerie-19.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1501,
    hauteur: 2000,
  },
  {
    src: "/galerie/galerie-20.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1502,
    hauteur: 2000,
  },
  {
    src: "/galerie/galerie-21.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1501,
    hauteur: 2000,
  },
  {
    src: "/galerie/galerie-22.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 2000,
    hauteur: 1501,
  },
  {
    src: "/galerie/galerie-23.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1501,
    hauteur: 2000,
  },
  {
    src: "/galerie/galerie-24.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1501,
    hauteur: 2000,
  },
  {
    src: "/galerie/galerie-25.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1501,
    hauteur: 2000,
  },
  {
    src: "/galerie/galerie-26.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1600,
    hauteur: 1200,
  },
  {
    src: "/galerie/galerie-27.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1200,
    hauteur: 1600,
  },
  {
    src: "/galerie/galerie-28.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1600,
    hauteur: 1200,
  },
  {
    src: "/galerie/galerie-29.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1200,
    hauteur: 1600,
  },
  {
    src: "/galerie/galerie-30.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1202,
    hauteur: 1600,
  },
  {
    src: "/galerie/galerie-31.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1202,
    hauteur: 1600,
  },
  {
    src: "/galerie/galerie-32.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1600,
    hauteur: 1200,
  },
  {
    src: "/galerie/galerie-33.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 2000,
    hauteur: 740,
  },
];

// Rythme de la composition, répété sur toute la série : une grande
// pleine largeur, une ligne de 2 (moyennes), une ligne de 3
// (petites), de nouveau 2 — 33 photos = 4 cycles + la grande de
// clôture.
const CYCLE = [
  "grande",
  "moyenne",
  "moyenne",
  "petite",
  "petite",
  "petite",
  "moyenne",
  "moyenne",
];

// Empreinte de chaque taille : colonnes occupées (grille de 2
// colonnes en mobile, 6 au-delà de 768px), ratio d'affichage —
// l'object-cover cadre la photo dans son emplacement — et sizes
// pour l'optimiseur (la grille s'affiche au maximum à 1152px).
const EMPREINTES = {
  grande: {
    classes: "col-span-2 md:col-span-6 aspect-[16/10]",
    sizes: "(min-width: 72rem) 1152px, 100vw",
  },
  moyenne: {
    classes: "col-span-1 md:col-span-3 aspect-[4/5]",
    sizes: "(min-width: 48rem) 552px, 100vw",
  },
  petite: {
    classes: "col-span-1 md:col-span-2 aspect-[3/4]",
    sizes: "(min-width: 48rem) 368px, 50vw",
  },
};

export default function GaleriePage() {
  return (
    <main className="flex flex-col bg-black">
      <SectionEditoriale titreAria="titre-galerie">
        <EtiquetteDoree>GALERIE</EtiquetteDoree>
        {/* Titre principal de la page : TitreSection produit des h2
            (sur l'accueil, le h1 vit dans le hero) — ici le h1 est
            posé directement, avec le même traitement visuel. */}
        <h1
          id="titre-galerie"
          className="font-serif-carte mt-4 text-4xl min-[768px]:text-5xl min-[1440px]:text-6xl font-semibold leading-tight text-white"
        >
          L&rsquo;instrument en images.
        </h1>
        <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#C9A96A]" />
        <ParagrapheSection>
          L&rsquo;atelier, l&rsquo;instrument et les musiciens en situation.
        </ParagrapheSection>
      </SectionEditoriale>
      {/* Grille des photos : plus large que la colonne éditoriale
          (max-w-6xl), composition en grille de 6 colonnes rythmée
          par le cycle. Au survol : éclat, zoom dans le cadre et
          filet or en contour (l'outline ne décale pas la grille). */}
      <section aria-label="Photos" className="px-6 pb-20 min-[768px]:pb-28">
        <Revelation>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-6">
            {PHOTOS.map(({ src, alt, largeur, hauteur }, index) => {
              const empreinte = EMPREINTES[CYCLE[index % CYCLE.length]];
              return (
                <figure
                  key={src}
                  className={`group overflow-hidden rounded-2xl outline-1 -outline-offset-1 outline-transparent transition-[outline-color] duration-300 ease-out hover:outline-[#C9A96A] motion-reduce:transition-none ${empreinte.classes}`}
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={largeur}
                    height={hauteur}
                    sizes={empreinte.sizes}
                    className="h-full w-full object-cover brightness-90 transition-[filter,transform] duration-500 ease-out group-hover:scale-105 group-hover:brightness-100 motion-reduce:transition-none"
                  />
                </figure>
              );
            })}
          </div>
        </Revelation>
      </section>
    </main>
  );
}
