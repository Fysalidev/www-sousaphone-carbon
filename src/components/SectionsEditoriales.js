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
    <p className="text-[10px] min-[768px]:text-xs min-[1555px]:text-sm font-bold tracking-[0.25em] text-[#C9A96A]">
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
        className="font-serif-carte mt-4 text-4xl min-[768px]:text-5xl min-[1440px]:text-6xl font-semibold leading-tight text-white"
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
      className={`mt-6 ${largeur} text-sm min-[640px]:text-base leading-relaxed text-stone-300`}
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
// l'affichage. Purement décoratif (aria-hidden, alt vide). Même
// rythme vertical que les sections (py-12 / py-16) : l'espace qui
// l'entoure est identique au-dessus et en dessous, à chaque
// transition.
export function SeparateurSection() {
  return (
    <div aria-hidden="true" className="w-full px-6 py-12 min-[768px]:py-16">
      <div className="mx-auto max-w-3xl">
        <Image
          src="/logos/logo-inter.png"
          alt=""
          width={1750}
          height={698}
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
// des paddings. Le contenu passe par <Revelation> : il apparaît en
// fondu à l'arrivée dans la fenêtre (désactivé avec
// prefers-reduced-motion, visible sans JavaScript).
export function SectionEditoriale({ titreAria, children }) {
  return (
    <section
      aria-labelledby={titreAria}
      className="px-6 py-12 min-[768px]:py-16"
    >
      <div className="mx-auto max-w-3xl">
        <Revelation>{children}</Revelation>
      </div>
    </section>
  );
}
