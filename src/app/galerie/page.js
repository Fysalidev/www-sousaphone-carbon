import Image from "next/image";
import Revelation from "@/components/Revelation";
import {
  EtiquetteDoree,
  ParagrapheSection,
  SectionEditoriale,
} from "@/components/SectionsEditoriales";

export const metadata = {
  title: "Galerie",
  description:
    "L'atelier, l'instrument et les musiciens en situation : découvrez le Sousaphone Carbon en images.",
};

// Page galerie, codée en dur : la composition (cycle, empreintes) et
// les photos déposées vivent directement ici. Chaque photo est
// rendue par un <img> brut — le src est le chemin exact du fichier
// dans public/galerie/, sans optimiseur ni transformation : ce qui
// s'affiche est le fichier déposé, vérifiable en ouvrant l'URL.

// Photos déposées, par numéro d'emplacement.
const PHOTOS = {
  "01": {
    src: "/galerie/galerie-01.webp",
    alt: "Sousaphone en laiton de profil sur fond noir, pavillon doré au premier plan",
  },
  "02": {
    src: "/galerie/galerie-02.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
  "03": {
    src: "/galerie/galerie-03.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
  "04": {
    src: "/galerie/galerie-04.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
  "05": {
    src: "/galerie/galerie-05.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
  "06": {
    src: "/galerie/galerie-06.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
  "07": {
    src: "/galerie/galerie-07.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
  "08": {
    src: "/galerie/galerie-08.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
  "09": {
    src: "/galerie/galerie-09.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
  10: {
    src: "/galerie/galerie-10.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
  11: {
    src: "/galerie/galerie-11.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
  12: {
    src: "/galerie/galerie-12.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
  13: {
    src: "/galerie/galerie-13.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
  14: {
    src: "/galerie/galerie-14.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
};

// Nombre d'emplacements de la galerie.
const NOMBRE_PHOTOS = 33;

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
// l'object-cover cadre la photo dans son emplacement —, dimensions
// conseillées pour la source (rétina 2×) et sizes pour l'optimiseur
// d'images (mêmes valeurs que DonneesGalerie.js).
const EMPREINTES = {
  grande: {
    classes: "col-span-2 md:col-span-6 aspect-[16/10]",
    conseils: "≈ 2304 × 1440 px",
    ratio: "16/10",
    sizes: "(min-width: 72rem) 1152px, 100vw",
  },
  moyenne: {
    classes: "col-span-1 md:col-span-3 aspect-[4/5]",
    conseils: "≈ 1130 × 1410 px",
    ratio: "4/5",
    sizes: "(min-width: 48rem) 552px, 50vw",
  },
  petite: {
    classes: "col-span-1 md:col-span-2 aspect-[3/4]",
    conseils: "≈ 740 × 985 px",
    ratio: "3/4",
    sizes: "(min-width: 48rem) 368px, 50vw",
  },
};

export default function GaleriePage() {
  return (
    <main className="flex flex-col bg-black">
      <SectionEditoriale titreAria="titre-galerie" bandeau>
        <EtiquetteDoree>GALERIE</EtiquetteDoree>
        <h1
          id="titre-galerie"
          className="titre-section font-serif-carte mt-4 font-semibold leading-tight text-white"
        >
          L&rsquo;instrument en images.
        </h1>
        <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#C9A96A]" />
        <ParagrapheSection>
          L&rsquo;atelier, l&rsquo;instrument et les musiciens en situation.
        </ParagrapheSection>
      </SectionEditoriale>
      {/* Grille des photos : max-w-6xl, composition en 6 colonnes
          rythmée par le cycle. Les photos passent par l'optimiseur
          d'images (next/image, fill + sizes de l'empreinte) : la
          galerie est entièrement intégrée, plus besoin de servir
          les fichiers bruts — chaque cellule reçoit la variante
          taillée à sa taille réelle. Emplacement vide : placeholder
          pointillé avec le fichier attendu et son ratio. */}
      <section aria-label="Photos" className="px-6 pb-20 min-[768px]:pb-28">
        <Revelation>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-6">
            {Array.from({ length: NOMBRE_PHOTOS }, (_, index) => {
              const empreinte = EMPREINTES[CYCLE[index % CYCLE.length]];
              const numero = String(index + 1).padStart(2, "0");
              const photo = PHOTOS[numero];
              return photo ? (
                <figure
                  key={numero}
                  className={`group relative overflow-hidden rounded-2xl outline-1 -outline-offset-1 outline-transparent transition-[outline-color] duration-300 ease-out hover:outline-[#C9A96A] motion-reduce:transition-none ${empreinte.classes}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={empreinte.sizes}
                    loading="lazy"
                    className="object-cover brightness-90 transition-[filter,transform] duration-500 ease-out group-hover:scale-105 group-hover:brightness-100 motion-reduce:transition-none"
                  />
                </figure>
              ) : (
                <figure
                  key={numero}
                  className={`flex flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-[#C9A96A]/30 bg-stone-900 p-4 text-center ${empreinte.classes}`}
                >
                  <figcaption className="text-xs min-[768px]:text-sm font-bold text-[#C9A96A]">
                    galerie-{numero}.webp
                  </figcaption>
                  <p className="text-[10px] min-[768px]:text-xs text-stone-300">
                    {empreinte.ratio}
                  </p>
                  <p className="text-[10px] min-[768px]:text-xs text-stone-400">
                    {empreinte.conseils}
                  </p>
                  <p className="text-[10px] min-[768px]:text-xs text-stone-500">
                    alt&nbsp;: décrire la scène en 10–20 mots
                  </p>
                </figure>
              );
            })}
          </div>
        </Revelation>
      </section>
    </main>
  );
}
