// ——— Données de la galerie ———
// Emplacements de la galerie partagés avec l'accueil, qui y lit ses
// vignettes. Chaque photo déposée dans public/galerie/ ajoute son
// entrée dans PHOTOS — la vignette de l'accueil correspondante
// bascule alors du placeholder à l'image. La page /galerie garde
// sa propre trame dans src/app/galerie/page.js.

// Nombre d'emplacements numérotés de la galerie — le bandeau
// d'ouverture (00) s'ajoute par-dessus, hors numérotation.
export const NOMBRE_PHOTOS = 33;

// Trame alignée de la composition, motif 2–3–1 répété : une ligne
// de 2 (moyennes), une ligne de 3 (petites), une grande pleine
// colonne — cinq motifs complets, une ligne de 2 puis la grande de
// clôture (33 photos). Les numéros de photo suivent l'ordre de
// lecture du motif déroulé (moyennes 01–02, petites 03–05, grande
// 06, puis 07...) ; le bandeau d'ouverture (00) précède le motif.
export const CYCLE = [
  "moyenne",
  "moyenne",
  "petite",
  "petite",
  "petite",
  "grande",
];

// Empreinte de chaque taille : ratio d'affichage — l'object-cover
// cadre la photo dans son emplacement —, dimensions conseillées
// pour la source (rétina 2×, la galerie s'affichant au maximum à
// 1152px de large) et sizes pour l'optimiseur d'images. Les
// colonnes ne vivent plus ici : la page galerie rend chaque ligne
// dans sa propre grille (2 colonnes, 3 à partir de 768px, la
// grande pleine colonne).
export const EMPREINTES = {
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

// Photos déposées, par numéro d'emplacement. Table vide en attendant
// le retrait du préfixe « XX - » des dépôts (XX-01 → galerie-01.webp,
// etc.) ; chaque renommage se rebranche ici, ex. :
//   "01": { src: "/galerie/galerie-01.webp", alt: "…", largeur: 1130, hauteur: 1410 }
// Photos déposées, par numéro d'emplacement. Vignettes câblées à la
// fin, après la passe galerie (les dépôts se câblent d'abord dans
// src/app/galerie/page.js) ; chaque dépôt se rebranche ici, ex. :
//   "01": { src: "/galerie/galerie-01.webp", alt: "…", largeur: 1130, hauteur: 1410 }
export const PHOTOS = {};
