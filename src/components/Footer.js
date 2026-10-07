"use client";

// Pied de page reprenant le langage visuel de la modale du header
// (MenuPleinEcran) : fond photo assombri, logo et séparateur doré, sections
// DÉCOUVRIR / ÉCHANGER, réseaux sociaux et pied légal. Les éléments communs
// proviennent de MenuCommun.js. Contrairement à la modale : pas de bouton
// fermer, pas de sémantique dialog ni d'animations d'entrée.

import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  CLASSES_SEPARATEUR_BARRE,
  Intertitre,
  LARGEUR_SEPARATEUR,
  LienMenu,
  ListeReseaux,
  LogoMenu,
  PiedLegal,
  SeparateurDore,
} from "./MenuCommun";

// Liens de navigation de la section DÉCOUVRIR.
const LIENS = [
  { href: "/", label: "ACCUEIL" },
  { href: "/instrument", label: "SOUSAPHONE CARBON" },
  { href: "/galerie", label: "GALERIE" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="relative overflow-x-clip bg-black">
      {/* Fond photo assombri et voile dégradé, purement décoratifs. */}
      <Image
        src="/menu-fond.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-[40%_50%] brightness-75 contrast-125"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/70 via-neutral-800/65 to-black/85"
      />

      {/* Barre du logo, séparée du contenu par le trait doré. */}
      <div className="relative z-10 flex w-full px-6 pt-10 pb-3.5">
        <LogoMenu />
        <span
          aria-hidden="true"
          style={LARGEUR_SEPARATEUR}
          className={CLASSES_SEPARATEUR_BARRE}
        />
      </div>

      {/* Slogan masqué sur petites et moyennes largeurs ; à partir de 900px
          il est toujours centré sur la droite (ancre à 72% de la largeur),
          sans risque de chevauchement avec la colonne de liens. */}
      <p className="pointer-events-none absolute top-[62%] left-[72%] z-10 hidden -translate-x-1/2 -translate-y-1/2 font-slogan text-4xl min-[900px]:block min-[1024px]:text-5xl min-[1440px]:text-6xl tracking-wide text-[#C9A96A]">
        KEEP COOL PLAY SOUSAPHONE CARBON
      </p>

      <nav
        aria-label="Navigation pied de page"
        className="relative z-10 flex flex-col"
      >
        <ul className="flex w-full max-w-169.75 flex-col px-6 pt-6 pb-8">
          <li className="pb-2">
            <Intertitre>DÉCOUVRIR</Intertitre>
          </li>
          {LIENS.map(({ href, label }) => (
            <li key={href}>
              <LienMenu href={href} label={label} actif={pathname === href} />
            </li>
          ))}

          <li className="pb-2 pt-4">
            <Intertitre>ÉCHANGER</Intertitre>
          </li>
          <li>
            <LienMenu
              href="/contact"
              label="Contact"
              actif={pathname === "/contact"}
            />
            <p className="pb-2 text-xs min-[420px]:text-sm text-stone-200">
              Atelier en France, sur rendez-vous
            </p>
          </li>

          {/* Réseaux sociaux, bornés par le second trait doré. */}
          <li className="mt-4 pb-4 pt-6">
            <ListeReseaux />
            <SeparateurDore />
          </li>

          {/* Mentions légales, confidentialité et copyright. */}
          <li className="pt-4">
            <PiedLegal />
          </li>
        </ul>
      </nav>
    </footer>
  );
}
