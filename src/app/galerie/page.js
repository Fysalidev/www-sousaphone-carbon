import Image from "next/image";
import Revelation from "@/components/Revelation";

export const metadata = {
  title: "Galerie",
  description:
    "L'atelier, l'instrument et les musiciens en situation : découvrez le Sousaphone Carbon en images.",
};

// Page galerie : la trame vit dans LIGNES ci-dessous — chaque ligne
// de la série est composée à la main. Chaque photo passe par
// l'optimiseur d'images (next/image, fill + sizes de l'empreinte) :
// chaque emplacement reçoit la variante taillée à sa taille réelle.
// Emplacement vide : placeholder pointillé avec le fichier attendu
// et son ratio.

// Photos câblées, par numéro d'emplacement : la trame s'évalue
// pour l'instant sur ses seuls placeholders — la table est vide.
// Chaque dépôt se câble ici, ex. :
//   "06": { src: "/galerie/galerie-06.webp", alt: "…" }
// Les fichiers déjà déposés (01–14) portent chacun le ratio de
// leur emplacement : les rebrancher ne demande que l'entrée
// src/alt correspondante.
const PHOTOS = {};

// Photo d'ouverture du hero : dédiée au hero, hors numérotation de
// la trame — déposée dans public/galerie/ (2304×1440, pile le 16/10
// de l'empreinte). L'alt décrira la scène réelle à la relecture.
const PHOTO_HERO = {
  src: "/galerie/hero-galerie.webp",
  alt: "Photographie du Sousaphone Carbon",
};

// ——— Trame alignée ———
// La série se lit en lignes alignées, motif 2–3–1 répété : une ligne
// de 2 (moyennes), une ligne de 3 (petites), une grande pleine
// colonne — cinq motifs complets, une ligne de 2 puis la grande de
// clôture (33 photos). Les numéros de photo suivent l'ordre de
// lecture ; les fichiers déposés sont renumérotés pour que chaque
// photo tombe sur une empreinte à son ratio natif (06 et 12 :
// larges 16/10 des grandes, 01–02 / 07–08 / 13–14 : portraits 4/5
// des lignes de 2, 03–05 / 09–11 : portraits 3/4 des lignes de 3).
const LIGNES = [
  ["moyenne", "moyenne"],
  ["petite", "petite", "petite"],
  ["grande"],
  ["moyenne", "moyenne"],
  ["petite", "petite", "petite"],
  ["grande"],
  ["moyenne", "moyenne"],
  ["petite", "petite", "petite"],
  ["grande"],
  ["moyenne", "moyenne"],
  ["petite", "petite", "petite"],
  ["grande"],
  ["moyenne", "moyenne"],
  ["petite", "petite", "petite"],
  ["grande"],
  ["moyenne", "moyenne"],
  ["grande"],
];

// Colonnes de la ligne selon son remplissage : les lignes de 2 et
// de 3 vivent en 2 colonnes sur mobile (la ligne de 3 s'enveloppe
// en 2 + 1), la ligne de 3 passe à 3 colonnes à partir de 768px.
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
  ligne.map((taille) => ({
    taille,
    numero: String(++compteur).padStart(2, "0"),
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
                photos/hero-galerie.webp
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
      {/* Trame de la galerie : chaque ligne de LIGNES se rend dans sa
          propre grille, contenue (px-6, max-w-6xl) — lignes de 2 et
          de 3 alignées, grandes pleine colonne aux lignes 3, 6, 9,
          12, 15 et 17 (clôture). Les photos passent par l'optimiseur
          d'images (next/image, fill + sizes de l'empreinte) ;
          emplacement vide : placeholder pointillé avec le fichier
          attendu et son ratio. */}
      <section
        aria-label="Photos"
        className="px-6 pt-12 pb-20 min-[768px]:pt-16 min-[768px]:pb-28"
      >
        <Revelation>
          <div className="mx-auto flex max-w-6xl flex-col gap-6">
            {LIGNES_NUMEROTEES.map((ligne, indexLigne) => (
              <div
                key={indexLigne}
                className={`grid gap-6 ${GRILLES_LIGNE[ligne.length]}`}
              >
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
