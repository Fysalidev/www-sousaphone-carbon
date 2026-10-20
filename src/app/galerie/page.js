import Revelation from "@/components/Revelation";
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
// ligne de 2, une ligne de 3, puis de nouveau 2.
//
// ÉTAT PROVISOIRE — plan de câblage : chaque emplacement affiche un
// placeholder avec le nom du fichier attendu (public/galerie/) et le
// ratio à respecter. Une fois les 33 photos déposées sous ces noms
// exacts, remplacer le rendu des placeholders par <Image> (décommenter
// le bloc en bas de page).

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
// colonnes en mobile, 6 au-delà de 768px), ratio d'affichage et
// dimensions conseillées pour la photo source (rétina 2×, la grille
// s'affichant au maximum à 1152px de large).
const EMPREINTES = {
  grande: {
    classes: "col-span-2 md:col-span-6 aspect-[16/10]",
    ratio: "16/10",
    conseils: "≈ 2304 × 1440 px",
  },
  moyenne: {
    classes: "col-span-1 md:col-span-3 aspect-[4/5]",
    ratio: "4/5",
    conseils: "≈ 1130 × 1410 px",
  },
  petite: {
    classes: "col-span-1 md:col-span-2 aspect-[3/4]",
    ratio: "3/4",
    conseils: "≈ 740 × 985 px",
  },
};

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
      {/* Plan de câblage : chaque emplacement indique le fichier
          attendu dans public/galerie/ et son ratio. Les placeholders
          reprennent exactement la place des futures photos (mêmes
          colonnes, mêmes ratios) pour valider la composition. */}
      <section
        aria-label="Emplacements"
        className="px-6 pb-20 min-[768px]:pb-28"
      >
        <Revelation>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-6">
            {Array.from({ length: NOMBRE_PHOTOS }, (_, index) => {
              const empreinte = EMPREINTES[CYCLE[index % CYCLE.length]];
              const numero = String(index + 1).padStart(2, "0");
              return (
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
