import Image from "next/image";
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

// Page galerie : mêmes primitives éditoriales que l'accueil (étiquette
// dorée, titre serif, filet or, colonne max-w-3xl) puis une grille en
// colonnes CSS — effet masonry sans JavaScript, chaque photo garde
// son ratio naturel. La page est la cible des vignettes de la
// section galerie de l'accueil.

// Photos de la galerie : src, alt et dimensions intrinsèques (le
// ratio pilote la hauteur dans la grille). Les 33 photos vivent
// dans public/galerie/ ; les alt des dépôts récents restent
// génériques — à affiner quand leur contenu sera décrit.
const PHOTOS = [
  {
    src: "/galerie/galerie-1.webp",
    alt: "Sousaphone Carbon mis en situation",
    largeur: 900,
    hauteur: 1268,
  },
  {
    src: "/galerie/galerie-2.webp",
    alt: "Détail du Sousaphone Carbon",
    largeur: 900,
    hauteur: 1268,
  },
  {
    src: "/galerie/galerie-3.webp",
    alt: "Musicien avec son Sousaphone Carbon",
    largeur: 900,
    hauteur: 1268,
  },
  {
    src: "/galerie/galerie-4.webp",
    alt: "Sousaphone Carbon vu de trois quarts",
    largeur: 1521,
    hauteur: 1141,
  },
  {
    src: "/galerie/galerie-5.webp",
    alt: "Le Sousaphone Carbon en scène",
    largeur: 1200,
    hauteur: 649,
  },
  {
    src: "/galerie/galerie-6.webp",
    alt: "Sousaphone Carbon en pleine lumière",
    largeur: 2400,
    hauteur: 3197,
  },
  {
    src: "/galerie/galerie-7.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1016,
    hauteur: 1612,
  },
  {
    src: "/galerie/galerie-8.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1006,
    hauteur: 1400,
  },
  {
    src: "/galerie/galerie-9.webp",
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
        {/* Effet de survol : la photo est légèrement voilée au repos
            (brightness-90) ; au survol elle s'éclaire, zoome
            discrètement dans son cadre (overflow-hidden) et un filet
            or se dessine en contour — l'outline, contrairement à une
            bordure, ne décale pas la masonry. */}
        <div className="mt-12 columns-1 gap-6 min-[768px]:columns-2 min-[1200px]:columns-3">
          {PHOTOS.map(({ src, alt, largeur, hauteur }) => (
            <figure
              key={src}
              className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl outline-1 -outline-offset-1 outline-transparent transition-[outline-color] duration-300 ease-out hover:outline-[#C9A96A] motion-reduce:transition-none"
            >
              <Image
                src={src}
                alt={alt}
                width={largeur}
                height={hauteur}
                sizes="(min-width: 75rem) 30vw, (min-width: 48rem) 45vw, 100vw"
                className="h-auto w-full brightness-90 transition-[filter,transform] duration-500 ease-out group-hover:scale-105 group-hover:brightness-100 motion-reduce:transition-none"
              />
            </figure>
          ))}
        </div>
      </SectionEditoriale>
    </main>
  );
}
