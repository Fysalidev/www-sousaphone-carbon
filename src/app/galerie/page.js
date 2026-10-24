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

// Page galerie : la trame vit dans LIGNES ci-dessous — chaque ligne
// de la série est composée à la main, sans motif répété. Chaque photo
// passe par l'optimiseur d'images (next/image, fill + sizes de
// l'empreinte) : chaque emplacement reçoit la variante taillée à sa
// taille réelle. Emplacement vide : placeholder pointillé avec le
// fichier attendu et son ratio.

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

// ——— Trame éditoriale ———
// La série se lit en lignes composées une à une : grandes qui
// ouvrent et respirent, duos et trios décalés qui cassent les
// alignements stricts, panoramiques qui changent de registre. Une
// ligne = un tableau d'emplacements ; `decalage` enfoncé l'item vers
// le bas à partir de 768px (en rem, multiples du gap de 1.5 rem :
// 12 = 3rem, 24 = 6rem) — sur mobile les lignes restent posées.
// Les numéros de photo suivent l'ordre de lecture ; les photos déjà
// déposées (01–14) tombent chacune sur une empreinte à son ratio
// natif, les panoramiques n'existent qu'au-delà.
const LIGNES = [
  [{ taille: "grande" }],
  [{ taille: "moyenne" }, { taille: "moyenne", decalage: 12 }],
  [
    { taille: "petite" },
    { taille: "petite", decalage: 24 },
    { taille: "petite", decalage: 12 },
  ],
  [{ taille: "moyenne", decalage: 12 }, { taille: "moyenne" }],
  [{ taille: "grande" }],
  [{ taille: "moyenne" }, { taille: "moyenne", decalage: 12 }],
  [
    { taille: "petite", decalage: 12 },
    { taille: "petite" },
    { taille: "petite", decalage: 24 },
  ],
  [{ taille: "panoramique" }],
  [{ taille: "moyenne", decalage: 12 }, { taille: "moyenne" }],
  [
    { taille: "petite" },
    { taille: "petite", decalage: 12 },
    { taille: "petite", decalage: 24 },
  ],
  [{ taille: "grande" }],
  [{ taille: "moyenne" }, { taille: "moyenne", decalage: 12 }],
  [
    { taille: "petite", decalage: 24 },
    { taille: "petite", decalage: 12 },
    { taille: "petite" },
  ],
  [{ taille: "panoramique" }],
  [{ taille: "moyenne", decalage: 12 }, { taille: "moyenne" }],
  [
    { taille: "petite" },
    { taille: "petite", decalage: 24 },
    { taille: "petite", decalage: 12 },
  ],
  [{ taille: "grande" }],
];

// Chaînes littérales des décalages : Tailwind doit les voir en
// clair dans le source pour générer les utilitaires.
const DECALAGES = {
  12: "md:mt-12",
  24: "md:mt-24",
};

// Colonnes de la ligne selon son remplissage : les duos et trios
// vivent en 2 colonnes sur mobile (le trio s'enveloppe en 2 + 1),
// le trio passe à 3 colonnes à partir de 768px.
const GRILLES_LIGNE = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-2 md:grid-cols-3",
};

// Empreinte de chaque taille : ratio d'affichage — l'object-cover
// cadre la photo dans son emplacement —, dimensions conseillées
// pour la source (rétina 2×, la galerie s'affichant au maximum à
// 1152px de large) et sizes pour l'optimiseur d'images.
const EMPREINTES = {
  grande: {
    classes: "aspect-[16/10]",
    conseils: "≈ 2304 × 1440 px",
    ratio: "16/10",
    sizes: "(min-width: 72rem) 1152px, 100vw",
  },
  panoramique: {
    classes: "aspect-[21/9]",
    conseils: "≈ 2304 × 990 px",
    ratio: "21/9",
    sizes: "(min-width: 72rem) 1152px, 100vw",
  },
  moyenne: {
    classes: "aspect-[4/5]",
    conseils: "≈ 1130 × 1410 px",
    ratio: "4/5",
    sizes: "(min-width: 48rem) 552px, 50vw",
  },
  petite: {
    classes: "aspect-[3/4]",
    conseils: "≈ 740 × 985 px",
    ratio: "3/4",
    sizes: "(min-width: 48rem) 368px, 50vw",
  },
};

// Emplacements numérotés dans l'ordre de lecture de LIGNES.
let compteur = 0;
const LIGNES_NUMEROTEES = LIGNES.map((ligne) =>
  ligne.map(({ taille, decalage }) => ({
    taille,
    decalage,
    numero: String(++compteur).padStart(2, "0"),
  })),
);

// Emplacement photo : carte arrondie, zoom et filet or au survol ;
// `self-start` préserve le ratio de l'empreinte — sans lui, la
// grille étirerait chaque carte à la hauteur de sa ligne et
// recadrerait la photo. Emplacement vide : placeholder pointillé
// avec le fichier attendu, son ratio et la consigne d'alt.
function EmplacementGalerie({ taille, numero, decalage = 0 }) {
  const empreinte = EMPREINTES[taille];
  const photo = PHOTOS[numero];
  const decalageClasse = DECALAGES[decalage] ?? "";
  return photo ? (
    <figure
      className={`group relative self-start overflow-hidden rounded-2xl outline-1 -outline-offset-1 outline-transparent transition-[outline-color] duration-300 ease-out hover:outline-[#C9A96A] motion-reduce:transition-none ${decalageClasse} ${empreinte.classes}`}
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
      className={`flex flex-col items-center justify-center gap-1 self-start rounded-2xl border border-dashed border-[#C9A96A]/30 bg-stone-900 p-4 text-center ${decalageClasse} ${empreinte.classes}`}
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
}

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
      {/* Trame de la galerie : chaque ligne de LIGNES se rend dans sa
          propre grille, contenue (px-6, max-w-6xl) ; les décalages
          verticaux — desktop uniquement — font respirer la série en
          cascade, les grandes et panoramiques ouvrent des respirations
          pleine colonne. Les photos passent par l'optimiseur d'images
          (next/image, fill + sizes de l'empreinte) ; emplacement vide :
          placeholder pointillé avec le fichier attendu et son ratio. */}
      <section aria-label="Photos" className="px-6 pb-20 min-[768px]:pb-28">
        <Revelation>
          <div className="mx-auto flex max-w-6xl flex-col gap-6">
            {LIGNES_NUMEROTEES.map((ligne, indexLigne) => (
              <div
                key={indexLigne}
                className={`grid gap-6 ${GRILLES_LIGNE[ligne.length]}`}
              >
                {ligne.map(({ taille, numero, decalage }) => (
                  <EmplacementGalerie
                    key={numero}
                    taille={taille}
                    numero={numero}
                    decalage={decalage}
                  />
                ))}
              </div>
            ))}
          </div>
        </Revelation>
      </section>
    </main>
  );
}
