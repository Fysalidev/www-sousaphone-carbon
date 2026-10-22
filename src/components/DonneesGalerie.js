// ——— Données de la galerie ———
// Source unique des emplacements de la galerie : la page /galerie
// s'en sert pour la grille complète, l'accueil pour ses trois
// vignettes. Chaque photo déposée dans public/galerie/ ajoute son
// entrée dans PHOTOS — l'emplacement correspondant (et la vignette
// de l'accueil, pour 01 à 03) bascule alors du placeholder à
// l'image.

// Nombre d'emplacements de la galerie.
export const NOMBRE_PHOTOS = 33;

// Rythme de la composition, répété sur toute la série : une grande
// pleine largeur, une ligne de 2 (moyennes), une ligne de 3
// (petites), de nouveau 2 — 33 photos = 4 cycles + la grande de
// clôture.
export const CYCLE = [
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
// l'object-cover cadre la photo dans son emplacement — dimensions
// conseillées pour la source (rétina 2×, la grille s'affichant au
// maximum à 1152px) et sizes pour l'optimiseur.
export const EMPREINTES = {
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

// Photos déposées, par numéro d'emplacement.
export const PHOTOS = {
  "01": {
    src: "/galerie/galerie-01.webp",
    alt: "Sousaphone en laiton de profil sur fond noir, pavillon doré au premier plan",
    largeur: 2028,
    hauteur: 1141,
  },
  "02": {
    src: "/galerie/galerie-02.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1130,
    hauteur: 1410,
  },
  "03": {
    src: "/galerie/galerie-03.webp",
    alt: "Photographie du Sousaphone Carbon",
    largeur: 1130,
    hauteur: 1410,
  },
};
