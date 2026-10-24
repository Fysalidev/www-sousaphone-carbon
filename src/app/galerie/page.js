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
//   "06": { src: "/galerie/galerie-06.webp", alt: "…" }
// Le bandeau d'ouverture (01) est en place ; les autres emplacements
// restent en placeholder. Les dépôts en attente de renumérotation
// vivent dans public/galerie/ sous le préfixe « XX - » : un cran de
// plus (NN+1) les fait retomber sur leur empreinte native.
const PHOTOS = {
  // Bandeau d'ouverture : galerie-01.webp (2304×852, pile la
  // consigne de l'empreinte). L'alt décrira la scène réelle à la
  // relecture.
  "01": {
    src: "/galerie/galerie-01.webp",
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
// La série ouvre sur un bandeau panoramique pleine colonne (numéro
// 01, première image de la série), puis se lit en lignes alignées,
// motif 2–3–1 répété : une ligne de 2 (moyennes), une ligne de 3
// (petites), une grande pleine colonne — cinq motifs complets, une
// ligne de 2 puis la grande de clôture (34 photos au total). Les
// numéros de photo suivent l'ordre de lecture : le bandeau en 01
// décale la série d'un cran (moyennes 02–03 / 08–09 / 14–15,
// petites 04–06 / 10–12, grandes 16/10 en 07 et 13, etc.).
const LIGNES = [
  ["bandeau"],
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
// de 3 vivent en 2 colonnes sur mobile, la ligne de 3 passe à 3
// colonnes à partir de 768px — sur mobile sa quatrième cellule
// (libérée par l'enveloppement en 2×2) reçoit la carte de marque
// ci-dessous.
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
  bandeau: {
    classes: "aspect-[2304/852]",
    conseils: "≈ 2304 × 852 px",
    ratio: "2304/852",
    sizes: "(min-width: 72rem) 1152px, 100vw",
  },
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

// Carte de marque des lignes de 3 : sur mobile, le trio
// s'enveloppe en 2×2 et la carte ferme la grille à la place de la
// cellule vide — étiquette dorée et phrase courte, même langage
// que les cartes de contenu (bord or, coins adoucis). Sans ratio :
// la cellule s'étire à la hauteur de la photo voisine. Desktop :
// masquée (md:hidden), la rangée de 3 est déjà complète.
// Répétée à chaque trio en défilement mobile, elle est purement
// décorative : aria-hidden pour ne pas marteler la marque aux
// lecteurs d'écran.
function CarteMarque() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-[#C9A96A]/40 p-4 text-center md:hidden"
    >
      <p className="text-xs max-[399px]:tracking-widest font-bold tracking-[0.25em] text-[#C9A96A]">
        SOUSAPHONE CARBON
      </p>
      <p className="text-[10px] min-[768px]:text-xs leading-relaxed text-stone-300">
        Pièce unique artisanale en fibre de carbone.
      </p>
    </div>
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
          propre grille, contenue (px-6, max-w-6xl) — bandeau
          panoramique d'ouverture en ligne 1, lignes de 2 et de 3
          alignées, grandes pleine colonne aux lignes 4, 7, 10, 13,
          16 et 18 (clôture) ; sur mobile, chaque trio se ferme
          en 2×2 par la carte de marque. Les photos passent par
          l'optimiseur d'images (next/image, fill + sizes de
          l'empreinte) ; emplacement vide : placeholder pointillé
          avec le fichier attendu et son ratio. */}
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
                {/* Ligne de 3 : la carte de marque ferme la grille
                    mobile en 2×2 (cellule vide de l'enveloppement). */}
                {ligne.length === 3 && <CarteMarque />}
              </div>
            ))}
          </div>
        </Revelation>
      </section>
    </main>
  );
}
