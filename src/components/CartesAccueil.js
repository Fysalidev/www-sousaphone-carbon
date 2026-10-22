import Image from "next/image";
import Link from "next/link";

// ——— Cartes de contenu de l'accueil ———
// Cartes à bordure dorée (Exigence, Équipe), attributs iconés et
// vignettes galerie — tout le contenu « en boîte » de la page
// d'accueil, séparé du fichier page pour l'alléger.

// Bloc corps (expertise, innovations, passion) : carte à bordure
// dorée — numéro doré en Montserrat, intitulé en Bodoni Moda,
// paragraphe — empilée verticalement comme sur la maquette mobile.
export function BlocCorps({ numero, titre, children }) {
  return (
    <article className="rounded-2xl border border-[#C9A96A]/40 p-6">
      <p className="numero-carte font-sans font-bold text-[#C9A96A]">
        {numero}
      </p>
      <h3 className="titre-carte font-serif-carte mt-2 font-medium text-white">
        {titre}
      </h3>
      <p className="paragraphe-carte font-sans mt-3 leading-relaxed text-stone-300">
        {children}
      </p>
    </article>
  );
}

// Carte membre : même langage que les cartes Exigence — bordure
// dorée, numéro doré en Montserrat, nom en Bodoni Moda — la ligne
// de rôle en petites capitales espacées ne s'affiche que si le
// membre en a un.
export function CarteMembre({ numero, nom, role }) {
  return (
    <article className="rounded-2xl border border-[#C9A96A]/40 p-6">
      <p className="numero-carte font-sans font-bold text-[#C9A96A]">
        {numero}
      </p>
      <h3 className="titre-carte font-serif-carte mt-2 font-medium text-white">
        {nom}
      </h3>
      {role && (
        <p className="etiquette-doree font-sans mt-3 font-bold tracking-[0.25em] text-[#C9A96A]">
          {role}
        </p>
      )}
    </article>
  );
}

// Pastille circulaire à fond doré contenant une icône au trait noir :
// langage des cercles de réseaux du menu, décliné pour le contenu.
// Purement décorative : les textes portent le sens.
export function PastilleIcone({ children }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#C9A96A] text-black"
    >
      {children}
    </span>
  );
}

export function IconeMesures() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 21v-7" />
      <path d="M4 10V3" />
      <path d="M12 21v-9" />
      <path d="M12 8V3" />
      <path d="M20 21v-5" />
      <path d="M20 12V3" />
      <path d="M1 14h6" />
      <path d="M9 8h6" />
      <path d="M17 16h6" />
    </svg>
  );
}

export function IconeFaitMain() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 11V6a2 2 0 0 0-4 0v5" />
      <path d="M14 10V4a2 2 0 0 0-4 0v6" />
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
      <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8v-2a2 2 0 1 1 4 0" />
    </svg>
  );
}

// Clé anglaise : réglage et contrôle individuel de chaque instrument.
export function IconeCleAnglaise() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

// Attribut iconé (sur mesure, fait main) : pastille à gauche, intitulé
// et phrase à droite.
export function AttributIcone({ Icone, titre, children }) {
  return (
    <div className="flex items-start gap-4">
      <PastilleIcone>
        <Icone />
      </PastilleIcone>
      <div>
        <h3 className="legende-attribut font-bold tracking-[0.25em] text-white">
          {titre}
        </h3>
        <p className="paragraphe-section mt-2 leading-relaxed text-stone-300">
          {children}
        </p>
      </div>
    </div>
  );
}

// Vignette de la section galerie : photo cliquable vers la page
// galerie, cadrage portrait unifié (3/4) dans une carte à bordure
// dorée comme les cartes de contenu — le survol renforce la bordure
// et zoome légèrement l'image.
export function VignetteGalerie({ src, alt }) {
  return (
    <Link
      href="/galerie"
      aria-label="Voir la galerie"
      className="group block overflow-hidden rounded-2xl border border-[#C9A96A]/40 transition-colors hover:border-[#C9A96A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <Image
        src={src}
        alt={alt}
        width={900}
        height={1268}
        sizes="(min-width: 768px) 240px, 100vw"
        className="aspect-[3/4] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
      />
    </Link>
  );
}

// Placeholder de vignette : même carte cliquable vers la galerie,
// en attente du dépôt du fichier indiqué — même langage que les
// placeholders de la page galerie (contour pointillé, nom du
// fichier attendu, ratio et consigne d'alt : décrire la scène
// visible en 10–20 mots, pas le nom du produit).
export function VignetteGalerieVide({ numero }) {
  return (
    <Link
      href="/galerie"
      aria-label="Voir la galerie"
      className="flex aspect-[3/4] flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-[#C9A96A]/30 bg-stone-900 p-4 text-center transition-colors hover:border-[#C9A96A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <p className="text-xs min-[768px]:text-sm font-bold text-[#C9A96A]">
        galerie-{numero}.webp
      </p>
      <p className="text-[10px] min-[768px]:text-xs text-stone-300">3/4</p>
      <p className="text-[10px] min-[768px]:text-xs text-stone-400">
        ≈ 740 × 985 px
      </p>
      <p className="text-[10px] min-[768px]:text-xs text-stone-500">
        alt&nbsp;: décrire la scène en 10–20 mots
      </p>
    </Link>
  );
}
