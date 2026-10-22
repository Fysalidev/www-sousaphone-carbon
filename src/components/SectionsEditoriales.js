import Image from "next/image";
import Revelation from "./Revelation";

// ——— Primitives des sections éditoriales ———
// Étiquette dorée, grand titre serif, paragraphe, bandeau logo et
// coquille de section — la structure commune aux sections de toutes
// les pages, séparée des fichiers page pour les alléger.

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

// Bandeau d'ouverture de section : le logo en tête de chaque section
// éditoriale — même asset que le séparateur historique, même
// traitement (encre noire inversée en blanc), taille resserrée
// (h-16 / h-20) alignée sur la colonne éditoriale. Purement
// décoratif (aria-hidden, alt vide).
export function BandeauLogo() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto max-w-3xl pb-8 min-[768px]:pb-10"
    >
      <Image
        src="/logos/logo-inter.png"
        alt=""
        width={1750}
        height={698}
        sizes="(min-width: 768px) 200px, 160px"
        className="h-16 min-[768px]:h-20 w-auto invert"
      />
    </div>
  );
}

// Coquille des sections éditoriales : colonne lisible centrée
// (max-w-3xl) ; le titre porte l'ancre aria référencée par `titreAria`.
// `classe` écarte la mesure pour une section donnée (ex. padding
// vertical élargi d'une clôture) ; `bandeau` pose le logo en tête de
// section (BandeauLogo). Le contenu passe par <Revelation> : il
// apparaît en fondu à l'arrivée dans la fenêtre (désactivé avec
// prefers-reduced-motion, visible sans JavaScript).
export function SectionEditoriale({
  titreAria,
  children,
  classe = "",
  bandeau = false,
}) {
  return (
    <section
      aria-labelledby={titreAria}
      className={`px-6 py-12 min-[768px]:py-16 ${classe}`}
    >
      {bandeau && <BandeauLogo />}
      <div className="mx-auto max-w-3xl">
        <Revelation>{children}</Revelation>
      </div>
    </section>
  );
}
