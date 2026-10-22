import Image from "next/image";
import Revelation from "./Revelation";

// ——— Primitives des sections éditoriales de l'accueil ———
// Étiquette dorée, grand titre serif, paragraphe, coquille de section
// et séparateur logo — la structure commune aux cinq sections de la
// page d'accueil, séparée du fichier page pour l'alléger.

// Étiquette dorée de section : le « branding » SC Sousaphone Carbon qui
// surmonte chaque grand titre, même traitement que l'accroche du hero.
export function EtiquetteDoree({ children }) {
  return (
    <p className="etiquette-doree font-bold tracking-[0.25em] text-[#C9A96A]">
      {children}
    </p>
  );
}

// Grand titre serif de section (Bodoni Moda) : très généreux
// sur mobile comme sur la maquette, à cheval sur deux lignes quand
// la phrase est longue. Un filet or court sous le titre relie les
// sections éditoriales de la page.
export function TitreSection({ id, children }) {
  return (
    <div>
      <h2
        id={id}
        className="titre-section font-serif-carte mt-4 font-semibold leading-tight text-white"
      >
        {children}
      </h2>
      <div aria-hidden="true" className="mt-6 h-px w-16 bg-[#C9A96A]" />
    </div>
  );
}

// Paragraphe de corps de section : colonne lisible (36rem par
// défaut), texte clair sur fond noir — `largeur` permet d'écarter
// la mesure pour un paragraphe donné (ex. aligné sur la colonne
// éditoriale complète).
export function ParagrapheSection({ children, largeur = "max-w-xl" }) {
  return (
    <p
      className={`paragraphe-section mt-6 ${largeur} leading-relaxed text-stone-300`}
    >
      {children}
    </p>
  );
}

// Séparateur de sections : logos/logo-inter.png (recadré à la main, le
// cadrage final est porté par l'asset), aligné à gauche sur la
// colonne éditoriale — même structure que SectionEditoriale (px-6
// pleine largeur, colonne max-w-3xl centrée), pour poser son bord
// gauche exactement à l'aplomb du texte. Son encre est noire sur
// fond transparent, le filtre CSS `invert` la rend blanche à
// l'affichage. Purement décoratif (aria-hidden, alt vide). Rythme
// allégé (py-8 / py-10) : le logo garde sa taille signature, l'air
// autour est réduit pour que les transitions respirent sans étirer
// la page — l'espace reste identique au-dessus et en dessous.
export function SeparateurSection() {
  return (
    <div aria-hidden="true" className="w-full px-6 py-8 min-[768px]:py-10">
      <div className="mx-auto max-w-3xl">
        <Image
          src="/logos/logo-inter.png"
          alt=""
          width={1750}
          height={698}
          /* Le logo s'affiche à hauteur fixe (h-24 mobile, h-32
             desktop), soit ~240px / ~320px de large : sans `sizes`,
             l'optimiseur servirait la variante 3840px issue des
             dimensions intrinsèques — 30KB perdus par séparateur. */
          sizes="(min-width: 768px) 340px, 250px"
          className="h-24 min-[768px]:h-32 w-auto invert"
        />
      </div>
    </div>
  );
}

// Coquille des sections éditoriales : colonne lisible centrée
// (max-w-3xl) ; le titre porte l'ancre aria référencée par `titreAria`.
// Rythme vertical partagé avec le séparateur (py-12 / py-16) : chaque
// transition section→logo→section est symétrique, sans empilement
// des paddings. `classe` écarte la mesure pour une section donnée
// (ex. padding vertical élargi de la clôture). Le contenu passe par
// <Revelation> : il apparaît en fondu à l'arrivée dans la fenêtre
// (désactivé avec prefers-reduced-motion, visible sans JavaScript).
export function SectionEditoriale({ titreAria, children, classe = "" }) {
  return (
    <section
      aria-labelledby={titreAria}
      className={`px-6 py-12 min-[768px]:py-16 ${classe}`}
    >
      <div className="mx-auto max-w-3xl">
        <Revelation>{children}</Revelation>
      </div>
    </section>
  );
}
