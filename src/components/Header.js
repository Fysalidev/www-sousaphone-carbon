"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

const LIENS = [
  { href: "/", label: "ACCUEIL" },
  { href: "/instrument", label: "SOUSAPHONE CARBON" },
  { href: "/galerie", label: "GALERIE" },
  { href: "/contact", label: "CONTACT" },
];

const COULEUR_ACTIF = "text-white";
const COULEUR_INACTIF = "text-white transition-colors hover:text-[#B69660]";
const CLASSES_BOUTON_ROND =
  "inline-flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full outline-1 -outline-offset-1 outline-stone-800 transition-colors hover:outline-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const CLASSES_BOUTON_FERMER =
  "inline-flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full outline-2 -outline-offset-1 text-[#B69660] outline-[#B69660] transition-colors hover:text-white hover:outline-white focus-visible:outline-offset-2 focus-visible:outline-white";
const CLASSES_TRANSITION_MENU =
  "transition-all duration-500 ease-out motion-reduce:transition-none";
const SELECTEUR_FOCUSABLES =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const classesEntree = (ouvert) =>
  `${CLASSES_TRANSITION_MENU} ${
    ouvert ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
  }`;

const delaiEntree = (ouvert, rang) => ({
  transitionDelay: ouvert ? `${120 + rang * 60}ms` : "0ms",
});

function IconeCroix({ epaisseur = 1.5 }) {
  return (
    <svg
      className="size-4"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={epaisseur}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M3 3l10 10" />
      <path d="M13 3L3 13" />
    </svg>
  );
}

function IconeBurger() {
  return (
    <svg
      className="size-4"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M2 4h12" />
      <path d="M2 8h12" />
      <path d="M2 12h12" />
    </svg>
  );
}

function BadgeFrance() {
  return (
    <span className="inline-flex items-center gap-1.5 overflow-hidden pl-2.5">
      <span className="text-[10px] font-bold text-stone-400">FRANCE</span>
      <span className="inline-flex h-1 w-4 items-start justify-start overflow-hidden rounded-xs">
        <span className="h-1 w-1.5 bg-sky-700" />
        <span className="h-1 w-1.5 bg-white" />
        <span className="h-1 w-1.5 bg-red-700" />
      </span>
    </span>
  );
}

function LogoHeader() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 overflow-hidden rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white min-[680px]:flex-col min-[680px]:items-start min-[680px]:gap-1"
    >
      <Image
        src="/logo-header-sm.webp"
        alt="Sousophone Carbon"
        width={68}
        height={32}
        className="h-8 w-auto min-[680px]:hidden"
        priority
      />
      <Image
        src="/logo-header-lg.webp"
        alt="Sousophone Carbon"
        width={185}
        height={48}
        className="hidden h-12 w-auto min-[680px]:block"
      />
      <BadgeFrance />
    </Link>
  );
}

function LienNav({
  href,
  label,
  actif,
  classesBase,
  onClick,
  couleurActif = COULEUR_ACTIF,
  couleurInactif = COULEUR_INACTIF,
}) {
  return (
    <Link
      href={href}
      aria-current={actif ? "page" : undefined}
      onClick={onClick}
      className={`${classesBase} ${
        actif ? couleurActif : couleurInactif
      }`}
    >
      {label}
    </Link>
  );
}

function NavDesktop({ pathname }) {
  return (
    <nav
      aria-label="Navigation principale"
      className="hidden items-center min-[680px]:flex"
    >
      <ul className="flex items-center gap-8">
        {LIENS.map(({ href, label }) => (
          <li key={href}>
            <LienNav
              href={href}
              label={label}
              actif={pathname === href}
              classesBase="text-sm font-medium focus-visible:underline focus-visible:underline-offset-4"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MenuPleinEcran({ pathname, ouvert, fermer, refDialogue, refFermer }) {
  // Le fond photo reste monté après la première ouverture pour permettre le
  // fondu de sortie ; il n'est jamais chargé tant que le menu n'a pas servi.
  const [fondVisible, setFondVisible] = useState(false);

  if (ouvert && !fondVisible) {
    setFondVisible(true);
  }

  return (
    <div
      ref={refDialogue}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
      aria-hidden={!ouvert}
      inert={!ouvert}
      className={`fixed inset-x-0 top-0 z-50 flex h-dvh w-full flex-col bg-black transition-[opacity,visibility] duration-300 ease-out motion-reduce:transition-none ${
        ouvert
          ? "visible opacity-100"
          : "invisible pointer-events-none opacity-0"
      }`}
    >
      {fondVisible && (
        <>
          <Image
            src="/menu-fond.jpg"
            alt=""
            fill
            sizes="100vw"
            className={`pointer-events-none object-cover object-[40%_50%] brightness-75 contrast-125 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
              ouvert ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 bg-linear-to-b from-black/70 via-neutral-800/65 to-black/85 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
              ouvert ? "opacity-100" : "opacity-0"
            }`}
          />
        </>
      )}
      <div className="relative z-10 flex w-full items-center justify-between gap-6 px-6 pt-10 pb-3.5">
        <LogoMenu onClick={fermer} />
        <span
          aria-hidden="true"
          style={LARGEUR_SEPARATEUR}
          className={CLASSES_SEPARATEUR_BARRE}
        />
        <button
          type="button"
          ref={refFermer}
          onClick={fermer}
          aria-label="Fermer le menu"
          className={CLASSES_BOUTON_FERMER}
        >
          <IconeCroix epaisseur={2} />
        </button>
      </div>
      <nav
        aria-label="Menu"
        className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden"
      >
        <ul className="flex min-h-0 w-full max-w-169.75 flex-1 flex-col px-6 pt-6 pb-8">
          <li
            style={delaiEntree(ouvert, 0)}
            className={`pb-4 [@media(max-height:600px)]:hidden ${classesEntree(ouvert)}`}
          >
            <p className="font-display text-xl min-[420px]:text-2xl font-medium leading-snug text-stone-100">
              Un instrument d&rsquo;exception, pensé comme une œuvre d&rsquo;art,
              joué comme une évidence.
            </p>
            <p className="mt-2 text-xs min-[420px]:text-sm text-stone-200">
              Fabriqué en France, façonné à la main. Parlons de votre futur
              Sousaphone Carbon.
            </p>
          </li>
          <li
            style={delaiEntree(ouvert, 0)}
            className={`pb-2 pt-4 ${classesEntree(ouvert)}`}
          >
            <Intertitre>DÉCOUVRIR</Intertitre>
          </li>
          {LIENS.map(({ href, label }, index) => {
            const actif = pathname === href;
            return (
              <Fragment key={href}>
                {href === "/contact" && (
                  <li
                    style={delaiEntree(ouvert, index)}
                    className={`pb-2 pt-4 ${classesEntree(ouvert)}`}
                  >
                    <Intertitre>ÉCHANGER</Intertitre>
                  </li>
                )}
                <li
                  style={delaiEntree(ouvert, index)}
                  className={classesEntree(ouvert)}
                >
                  <LienMenu
                    href={href}
                    label={label}
                    actif={actif}
                    onClick={fermer}
                  />
                </li>
                {href === "/contact" && (
                  <li
                    style={delaiEntree(ouvert, index)}
                    className={classesEntree(ouvert)}
                  >
                    <p className="pb-2 text-xs min-[420px]:text-sm text-stone-200">
                      Atelier en France, sur rendez-vous
                    </p>
                  </li>
                )}
              </Fragment>
            );
          })}
          <li
            style={delaiEntree(ouvert, LIENS.length)}
            className={`mt-auto pb-4 pt-6 ${classesEntree(ouvert)}`}
          >
            <ListeReseaux />
            <SeparateurDore />
          </li>
          <li
            style={delaiEntree(ouvert, LIENS.length + 1)}
            className={`pt-4 ${classesEntree(ouvert)}`}
          >
            <PiedLegal />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [ouvert, setOuvert] = useState(false);
  const refBurger = useRef(null);
  const refDialogue = useRef(null);
  const refFermer = useRef(null);
  const [dernierPathname, setDernierPathname] = useState(pathname);

  // Referme la modale si la route change sans passer par un lien du menu
  // (bouton retour du navigateur). Ajustement d'état pendant le rendu :
  // motif recommandé à la place d'un effet avec setState.
  if (pathname !== dernierPathname) {
    setDernierPathname(pathname);
    setOuvert(false);
  }

  // À l'ouverture : verrouille le scroll de la page, place le focus sur le
  // bouton fermer, piège la navigation clavier dans la modale (Tab, Maj+Tab,
  // Échap) et referme le menu si l'écran passe en desktop.
  useEffect(() => {
    if (!ouvert) return;

    const boutonBurger = refBurger.current;
    const overflowInitial = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    refFermer.current?.focus();

    const surTouche = (e) => {
      if (e.key === "Escape") {
        setOuvert(false);
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = Array.from(
        refDialogue.current?.querySelectorAll(SELECTEUR_FOCUSABLES) ?? [],
      ).filter((el) => el.getClientRects().length > 0);
      if (focusables.length === 0) return;
      const index = focusables.indexOf(document.activeElement);
      if (e.shiftKey && index <= 0) {
        e.preventDefault();
        focusables[focusables.length - 1].focus();
      } else if (
        !e.shiftKey &&
        (index === -1 || index === focusables.length - 1)
      ) {
        e.preventDefault();
        focusables[0].focus();
      }
    };

    const mediaDesktop = window.matchMedia("(min-width: 680px)");
    const surEcranLarge = (e) => {
      if (e.matches) setOuvert(false);
    };
    mediaDesktop.addEventListener("change", surEcranLarge);

    window.addEventListener("keydown", surTouche);
    return () => {
      window.removeEventListener("keydown", surTouche);
      mediaDesktop.removeEventListener("change", surEcranLarge);
      document.body.style.overflow = overflowInitial;
      if (boutonBurger?.offsetParent !== null) boutonBurger?.focus();
    };
  }, [ouvert]);

  return (
    <header className="sticky top-0 z-30 bg-black">
      <div
        inert={ouvert}
        className="flex w-full items-center justify-between gap-6 overflow-hidden px-6 pt-10 pb-5"
      >
        <LogoHeader />
        <NavDesktop pathname={pathname} />
        <button
          type="button"
          ref={refBurger}
          onClick={() => setOuvert((v) => !v)}
          aria-expanded={ouvert}
          aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
          className={`${CLASSES_BOUTON_ROND} min-[680px]:hidden`}
        >
          {ouvert ? <IconeCroix epaisseur={2} /> : <IconeBurger />}
        </button>
      </div>

      <MenuPleinEcran
        pathname={pathname}
        ouvert={ouvert}
        fermer={() => setOuvert(false)}
        refDialogue={refDialogue}
        refFermer={refFermer}
      />
    </header>
  );
}
