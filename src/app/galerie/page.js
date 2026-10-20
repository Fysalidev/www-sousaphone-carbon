import Image from "next/image";
import Revelation from "@/components/Revelation";
import {
  CYCLE,
  EMPREINTES,
  NOMBRE_PHOTOS,
  PHOTOS,
} from "@/components/DonneesGalerie";
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
// cycles + la grande de clôture.
//
// La grille affiche un placeholder par emplacement (nom de fichier
// attendu dans public/galerie/, ratio et dimensions conseillées) ;
// chaque photo déposée bascule son emplacement en <Image> — les
// données (cycle, empreintes, photos) vivent dans
// components/DonneesGalerie.js, partagées avec les vignettes de
// l'accueil.

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
          par le cycle. Emplacement rempli : la photo, avec l'effet
          de survol (éclat, zoom, filet or — l'outline ne décale pas
          la grille). Emplacement vide : placeholder pointillé. */}
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
                  className={`group overflow-hidden rounded-2xl outline-1 -outline-offset-1 outline-transparent transition-[outline-color] duration-300 ease-out hover:outline-[#C9A96A] motion-reduce:transition-none ${empreinte.classes}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.largeur}
                    height={photo.hauteur}
                    sizes={empreinte.sizes}
                    className="h-full w-full object-cover brightness-90 transition-[filter,transform] duration-500 ease-out group-hover:scale-105 group-hover:brightness-100 motion-reduce:transition-none"
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
                </figure>
              );
            })}
          </div>
        </Revelation>
      </section>
    </main>
  );
}
