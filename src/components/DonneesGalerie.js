// ——— Données de la galerie ———
// Emplacements de la galerie partagés avec l'accueil, qui y lit ses
// vignettes. Chaque photo déposée dans public/galerie/ ajoute son
// entrée dans PHOTOS — la vignette de l'accueil correspondante
// bascule alors du placeholder à l'image. La page /galerie garde
// sa propre trame dans src/app/galerie/page.js.

// Nombre d'emplacements de la galerie.
export const NOMBRE_PHOTOS = 34;

// Trame alignée de la composition, motif 2–3–1 répété : le bandeau
// panoramique d'ouverture (01), puis une ligne de 2 (moyennes), une
// ligne de 3 (petites), une grande pleine colonne — cinq motifs
// complets, une ligne de 2 puis la grande de clôture. Les numéros
// de photo suivent l'ordre de lecture du motif déroulé (moyennes
// 02–03, petites 04–06, grande 07, puis 08...).
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
// la renumérotation des dépôts « XX - galerie-NN.webp » (un cran de
// plus : XX-01 → galerie-02.webp sur l'emplacement 02, etc.) ;
// chaque renommage se rebranche ici, ex. :
//   "02": { src: "/galerie/galerie-02.webp", alt: "…", largeur: 1130, hauteur: 1410 }
export const PHOTOS = {};
