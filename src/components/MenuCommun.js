"use client";

// Éléments partagés entre la modale plein écran du header (MenuPleinEcran)
// et le footer : les deux partagent le même langage visuel (logo, séparateurs
// dorés, intertitres, liens de navigation, réseaux sociaux, pied légal).

import Image from "next/image";
import Link from "next/link";

// Liens vers les réseaux sociaux de la marque.
// TODO : remplacer par les vraies pages Facebook/Instagram du luthier.
export const RESEAUX = [
  { href: "https://www.facebook.com", label: "Facebook" },
  { href: "https://www.instagram.com", label: "Instagram" },
];

// Largeur du séparateur doré : dérivée de la hauteur rendue du logo (h-16 = 64px)
// et du ratio natif du PNG 300x105. Suit automatiquement la largeur du bloc logo.
export const LARGEUR_SEPARATEUR = { width: "calc(64px * 300 / 105)" };

// Trait doré calé au bas de la barre du logo ; le parent doit être `relative`.
export const CLASSES_SEPARATEUR_BARRE =
  "pointer-events-none absolute bottom-0 left-3 h-px bg-[#B69660]/40";

function IconeFacebook() {
  return (
    <svg
      className="size-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconeInstagram() {
  return (
    <svg
      className="size-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

const ICONES_RESEAUX = [IconeFacebook, IconeInstagram];

// Intertitre doré des sections de navigation (DÉCOUVRIR, ÉCHANGER).
export function Intertitre({ children }) {
  return (
    <p className="text-xs font-bold tracking-[0.25em] text-[#C9A96A]">
      {children}
    </p>
  );
}

// Lien de navigation du menu : minuscules avec capitale initiale, graisse
// régulière au repos puis semi-bold au survol, cible tactile de 44px de haut.
// `actif` pose aria-current="page" sur la page courante.
export function LienMenu({ href, label, actif, onClick }) {
  return (
    <Link
      href={href}
      aria-current={actif ? "page" : undefined}
      onClick={onClick}
      className="block text-base leading-11 min-[420px]:text-lg font-normal lowercase first-letter:uppercase hover:font-semibold focus-visible:underline focus-visible:underline-offset-4 focus-visible:decoration-[#B69660] text-white transition-colors"
    >
      {label}
    </Link>
  );
}

// Rangée des boutons réseaux sociaux (cercles à contour blanc, ouverture
// dans un nouvel onglet, libellé accessible pour chaque icône).
export function ListeReseaux() {
  return (
    <div className="flex items-center gap-4">
      {RESEAUX.map(({ href, label }, index) => {
        const Icone = ICONES_RESEAUX[index];
        return (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="inline-flex size-12 items-center justify-center rounded-full outline-2 -outline-offset-1 text-white outline-white transition-colors hover:text-[#B69660] hover:outline-[#B69660] focus-visible:outline-offset-2 focus-visible:outline-[#B69660]"
          >
            <Icone />
          </a>
        );
      })}
    </div>
  );
}

// Séparateur doré en flux (après une rangée d'éléments), de la largeur du logo.
export function SeparateurDore() {
  return (
    <span
      aria-hidden="true"
      style={LARGEUR_SEPARATEUR}
      className="mt-4 block h-px bg-[#B69660]/40"
    />
  );
}

// Logo du menu (h-16), lien vers l'accueil.
// Les marges négatives compensent le padding transparent du PNG pour que
// l'alignement se fasse sur le contenu visible du logo.
// `onClick` sert à fermer la modale dans le header ; absent dans le footer.
export function LogoMenu({ onClick }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="-my-3.5 -ml-3 shrink-0 rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <Image
        src="/logo-sans-bg-300px.png"
        alt="Sousaphone Carbon"
        width={300}
        height={105}
        className="h-16 w-auto"
      />
    </Link>
  );
}

// Mentions légales / confidentialité et copyright (année dynamique).
export function PiedLegal() {
  return (
    <>
      <p className="text-xs">
        <Link
          href="/mentions-legales"
          className="text-stone-200 transition-colors hover:text-white focus-visible:underline focus-visible:underline-offset-4"
        >
          Mentions légales
        </Link>
        <span aria-hidden="true" className="mx-2 text-stone-500">
          |
        </span>
        <Link
          href="/confidentialite"
          className="text-stone-200 transition-colors hover:text-white focus-visible:underline focus-visible:underline-offset-4"
        >
          Confidentialité
        </Link>
      </p>
      <p className="mt-2 text-xs text-stone-200">
        © Sousaphone Carbon {new Date().getFullYear()} — Tous droits réservés
      </p>
    </>
  );
}
