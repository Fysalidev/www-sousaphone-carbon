// ——— Données de la galerie ———
// Source unique des emplacements de la galerie : la page /galerie
// s'en sert pour la grille complète, l'accueil pour ses trois
// vignettes. Chaque photo déposée dans public/galerie/ ajoute son
// entrée dans PHOTOS — l'emplacement correspondant (et la vignette
// de l'accueil, pour 01 à 03) bascule alors du placeholder à
// l'image.

// Nombre d'emplacements de la galerie.
export const NOMBRE_PHOTOS = 33;

// Trame de la composition : la galerie se lit en lignes composées,
// répétées sur toute la série — une grande pleine page, une ligne
// de 2 (moyennes), une ligne de 3 (petites), de nouveau 2 —
// 33 photos = 4 répétitions + la grande de clôture. Les numéros de
// photo suivent l'ordre de lecture du motif déroulé (grande 01,
// moyennes 02–03, petites 04–06, moyennes 07–08, puis 09...).
export const LIGNES = [
  ["grande"],
  ["moyenne", "moyenne"],
  ["petite", "petite", "petite"],
  ["moyenne", "moyenne"],
];

// Empreinte de chaque taille : ratio d'affichage — l'object-cover
// cadre la photo dans son emplacement —, `grille` porte les colonnes
// de la ligne qui la contient (les grandes vivent hors grille,
// pleine page : chaîne vide), dimensions conseillées pour la source
// (rétina 2×, les lignes contenues s'affichant au maximum à 1152px,
// les grandes à la largeur de l'écran) et sizes pour l'optimiseur
// d'images.
export const EMPREINTES = {
  grande: {
    classes: "aspect-[16/10]",
    grille: "",
    conseils: "≈ 2880 × 1800 px",
    ratio: "16/10",
    sizes: "100vw",
  },
  moyenne: {
    classes: "aspect-[4/5]",
    grille: "grid-cols-2",
    conseils: "≈ 1130 × 1410 px",
    ratio: "4/5",
    sizes: "(min-width: 48rem) 552px, 50vw",
  },
  petite: {
    classes: "aspect-[3/4]",
    grille: "grid-cols-2 md:grid-cols-3",
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
