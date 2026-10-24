import Image from "next/image";
import Revelation from "@/components/Revelation";

export const metadata = {
  title: "Galerie",
  description:
    "L'atelier, l'instrument, de l'idée à la vie : découvrez le Sousaphone Carbon en images.",
};

// Page galerie : la trame vit dans LIGNES ci-dessous — chaque ligne
// de la série est composée à la main. Chaque photo passe par
// l'optimiseur d'images (next/image, fill + sizes de l'empreinte) :
// chaque emplacement reçoit la variante taillée à sa taille réelle.
// Emplacement vide : placeholder pointillé avec le fichier attendu
// et son ratio.

// Photos câblées, par numéro d'emplacement : chaque dépôt se câble
// ici, ex. :
//   "01": { src: "/galerie/galerie-01.webp", alt: "…" }
// En place : bandeau (00) et images carrées 01–03. Les emplacements
// suivants restent en placeholder, chaque source définitive se
// câble ici au fil de la validation.
const PHOTOS = {
  // Bandeau d'ouverture : galerie-00.webp (2304×852, pile la
  // consigne de l'empreinte). L'alt décrira la scène réelle à la
  // relecture.
  "00": {
    src: "/galerie/galerie-00.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
  // Emplacement 01 (carré) : galerie-01.webp, exportée en WebP q85
  // depuis sources/galerie-01.jpg (3264×3264, carré — affichage
  // entier, sans recadrage). L'alt décrira la scène réelle à la
  // relecture.
  "01": {
    src: "/galerie/galerie-01.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
  // Emplacement 02 (carré) : galerie-02.webp, exportée en WebP q85
  // depuis sources/galerie-02.jpg (3264×3264, carré — affichage
  // entier, sans recadrage). L'alt décrira la scène réelle à la
  // relecture.
  "02": {
    src: "/galerie/galerie-02.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
  // Emplacement 03 (carré) : galerie-03.webp, exportée en WebP q85
  // depuis sources/galerie-03.jpg (3264×3264, carré — affichage
  // entier, sans recadrage). L'alt décrira la scène réelle à la
  // relecture.
  "03": {
    src: "/galerie/galerie-03.webp",
    alt: "Photographie du Sousaphone Carbon",
  },
};

// Photo d'ouverture du hero : dédiée au hero, hors numérotation de
// la trame — déposée dans public/galerie/ (2304×1440, pile le 16/10
// de l'empreinte). L'alt décrira la scène réelle à la relecture.
const PHOTO_HERO = {
  src: "/galerie/hero-galerie.webp",
  alt: "Photographie du Sousaphone Carbon",
};

// ——— Trame alignée ———
// La galerie se construit ligne par ligne, au fil des dépôts : le
// bandeau panoramique d'ouverture (00) puis des images carrées
// pleine colonne, une par ligne — les portraits et les paysages
// s'y fondent par object-cover (recadrage centré), chaque dépôt
// vise la consigne carrée, 2304×2304. En place aujourd'hui : le
// bandeau, les photos 01–03 ; chaque dépôt
// suivant ajoute sa ligne carrée.
const LIGNES = [
  ["bandeau"],
  ["grande"],
  ["grande"],
  ["grande"],
  // Placeholder suivant, en attente du prochain dépôt.
  ["grande"],
];

// Empreinte de chaque taille : ratio d'affichage — l'object-cover
// cadre la photo dans son emplacement —, dimensions conseillées
// pour la source (rétina 2×, la galerie s'affichant au maximum à
// 1152px de large) et sizes pour l'optimiseur d'images.
const EMPREINTES = {
  bandeau: {
    classes: "aspect-[2304/852]",
    conseils: "≈ 2304 × 852 px",
    ratio: "2304/852",
    sizes: "(min-width: 72rem) 1152px, 100vw",
  },
  // Images de la série : carrées, pleine colonne.
  grande: {
    classes: "aspect-square",
    conseils: "≈ 2304 × 2304 px",
    ratio: "1/1",
    sizes: "(min-width: 72rem) 1152px, 100vw",
  },
};

// Emplacements numérotés dans l'ordre de lecture de LIGNES — le
// bandeau garde le 00, hors numérotation ; la série numérotée
// commence à 01.
let compteur = 0;
const LIGNES_NUMEROTEES = LIGNES.map((ligne) =>
  ligne.map((taille) => ({
    taille,
    numero: taille === "bandeau" ? "00" : String(++compteur).padStart(2, "0"),
  })),
);

// Emplacement photo : carte arrondie, zoom et filet or au survol ;
// emplacement vide : placeholder pointillé avec le fichier attendu,
// son ratio et la consigne d'alt.
function EmplacementGalerie({ taille, numero }) {
  const empreinte = EMPREINTES[taille];
  const photo = PHOTOS[numero];
  return photo ? (
    <figure
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
}

export default function GaleriePage() {
  return (
    <main className="flex flex-col bg-black">
      {/* Hero galerie : même mécanique que les heroes d'accueil et
          d'instrument — fond dégradé doré haut/bas, cascade
          hero-entree à l'arrivée, accroche et titre Montserrat sur
          les rampes continues de globals.css (hero-accroche,
          hero-titre, hero-promesse — aucune taille ici). Compacité
          assumée : pas de hauteur d'écran verrouillée, la galerie
          est une page de défilement et la série doit rester proche.
          La photo d'ouverture est dédiée au hero — hors
          numérotation de la trame, comme hero-desktop.webp sur
          l'accueil : galerie/hero-galerie.webp (2304×1440, pile 16/10)
          vit dans la colonne de la grille (max-w-6xl) ; elle se
          câble dans PHOTO_HERO ci-dessus. */}
      <section
        aria-labelledby="titre-galerie"
        className="hero flex flex-col bg-linear-to-b from-[#C9A96A]/10 via-transparent to-[#C9A96A]/10 px-6 pt-12 pb-12 text-center min-[768px]:pt-16 min-[768px]:pb-16"
      >
        <p className="hero-entree hero-accroche font-bold tracking-[0.25em] text-[#C9A96A] [animation-delay:150ms]">
          GALERIE
        </p>
        <h1
          id="titre-galerie"
          className="hero-entree hero-titre mx-auto mt-4 max-w-3xl font-sans font-bold leading-[1.125] text-white [animation-delay:300ms]"
        >
          Sousaphone Carbon
        </h1>
        <p className="hero-entree hero-promesse mx-auto mt-6 text-base leading-relaxed text-stone-200 [animation-delay:450ms]">
          L&rsquo;atelier, l&rsquo;instrument, de l&rsquo;idée à la vie.
        </p>
        <div className="hero-entree mx-auto mt-10 w-full max-w-6xl min-[768px]:mt-12 [animation-delay:600ms]">
          {PHOTO_HERO ? (
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src={PHOTO_HERO.src}
                alt={PHOTO_HERO.alt}
                fill
                priority
                sizes="(min-width: 72rem) 1152px, calc(100vw - 3rem)"
                className="object-cover brightness-90"
              />
            </div>
          ) : (
            <figure className="flex aspect-[16/10] flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-[#C9A96A]/30 bg-stone-900 p-4 text-center">
              <figcaption className="text-xs min-[768px]:text-sm font-bold text-[#C9A96A]">
                galerie/hero-galerie.webp
              </figcaption>
              <p className="text-[10px] min-[768px]:text-xs text-stone-300">
                16/10
              </p>
              <p className="text-[10px] min-[768px]:text-xs text-stone-400">
                ≈ 2304 × 1440 px
              </p>
              <p className="text-[10px] min-[768px]:text-xs text-stone-500">
                alt&nbsp;: décrire la scène en 10–20 mots
              </p>
            </figure>
          )}
        </div>
      </section>
      {/* Trame de la galerie : chaque ligne de LIGNES se rend dans
          sa propre grille, contenue (px-6, max-w-6xl) — bandeau en
          ligne 1, puis les lignes s'ajoutent au fil des dépôts,
          une image carrée pleine colonne par photo. Les photos
          passent par l'optimiseur d'images (next/image, fill +
          sizes de l'empreinte) ; emplacement vide : placeholder
          pointillé avec le fichier attendu et son ratio. */}
      <section
        aria-label="Photos"
        className="px-6 pt-12 pb-20 min-[768px]:pt-16 min-[768px]:pb-28"
      >
        <Revelation>
          <div className="mx-auto flex max-w-6xl flex-col gap-6">
            {LIGNES_NUMEROTEES.map((ligne, indexLigne) => (
              <div key={indexLigne} className="grid grid-cols-1 gap-6">
                {ligne.map(({ taille, numero }) => (
                  <EmplacementGalerie
                    key={numero}
                    taille={taille}
                    numero={numero}
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
