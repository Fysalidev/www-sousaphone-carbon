"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LIENS = [
  { href: "/", label: "ACCUEIL" },
  { href: "/instrument", label: "SOUSAPHONE CARBON" },
  { href: "/galerie", label: "GALERIE" },
  { href: "/contact", label: "CONTACT" },
];

const RESEAUX = [
  { href: "https://www.facebook.com", label: "Facebook" },
  { href: "https://www.instagram.com", label: "Instagram" },
];

const COULEUR_ACTIF = "text-white";
const COULEUR_ACTIF_MENU = "text-white transition-colors hover:text-[#B69660]";
const COULEUR_INACTIF = "text-white transition-colors hover:text-[#B69660]";
const CLASSES_BOUTON_ROND =
  "inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full outline-1 -outline-offset-1 outline-stone-800 transition-colors hover:outline-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const CLASSES_BOUTON_FERMER =
  "inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full outline-2 -outline-offset-1 text-[#B69660] outline-[#B69660] transition-colors hover:text-white hover:outline-white focus-visible:outline-offset-2 focus-visible:outline-white";
const CLASSES_LIEN_RESEAU =
  "inline-flex size-14 items-center justify-center rounded-full outline-2 -outline-offset-1 text-white outline-white transition-colors hover:text-[#B69660] hover:outline-[#B69660] focus-visible:outline-offset-2 focus-visible:outline-[#B69660]";
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

function IconeFacebook() {
  return (
    <svg
      className="size-8"
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
      className="size-8"
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
      className="flex items-center gap-2.5 overflow-hidden min-[680px]:flex-col min-[680px]:items-start min-[680px]:gap-1"
    >
      <Image
        src="/logoheader.webp"
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
}) {
  return (
    <Link
      href={href}
      aria-current={actif ? "page" : undefined}
      onClick={onClick}
      className={`${classesBase} ${
        actif ? couleurActif : COULEUR_INACTIF
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
  return (
    <div
      ref={refDialogue}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
      aria-hidden={!ouvert}
      inert={!ouvert}
      className={`fixed inset-0 z-50 flex flex-col bg-black transition-opacity duration-300 ease-out motion-reduce:transition-none ${
        ouvert ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {ouvert && (
        <>
          <Image
            src="/menu-fond.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={60}
            className="pointer-events-none object-cover object-[40%_50%] brightness-75 contrast-125"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/70 via-neutral-800/65 to-black/85"
          />
        </>
      )}
      <div className="relative z-10 flex w-full items-center justify-end gap-6 overflow-hidden px-6 pt-10 pb-5">
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
        className="relative z-10 flex flex-1 items-start overflow-y-auto"
      >
        <ul className="flex w-full max-w-169.75 flex-col px-6 pt-24 pb-10">
          <li
            style={delaiEntree(ouvert, 0)}
            className={`pb-6 ${classesEntree(ouvert)}`}
          >
            <p className="font-display text-[32px] font-medium leading-snug text-stone-100">
              Un instrument d&rsquo;exception, pensé comme une œuvre d&rsquo;art,
              joué comme une évidence.
            </p>
            <p className="mt-3 text-base text-stone-200">
              Fabriqué en France, façonné à la main. Parlons de votre futur
              Sousaphone Carbon.
            </p>
          </li>
          <li
            style={delaiEntree(ouvert, 0)}
            className={`pb-3 pt-6 ${classesEntree(ouvert)}`}
          >
            <p className="text-sm font-bold tracking-[0.25em] text-[#C9A96A]">
              DÉCOUVRIR
            </p>
          </li>
          {LIENS.map(({ href, label }, index) => {
            const actif = pathname === href;
            return (
              <Fragment key={href}>
                {href === "/contact" && (
                  <li
                    style={delaiEntree(ouvert, index)}
                    className={`pb-3 pt-6 ${classesEntree(ouvert)}`}
                  >
                    <p className="text-sm font-bold tracking-[0.25em] text-[#C9A96A]">
                      ÉCHANGER
                    </p>
                  </li>
                )}
                <li
                  style={delaiEntree(ouvert, index)}
                  className={classesEntree(ouvert)}
                >
                  <LienNav
                    href={href}
                    label={label}
                    actif={actif}
                    classesBase="block py-3 text-2xl font-semibold lowercase first-letter:uppercase focus-visible:underline focus-visible:underline-offset-4 focus-visible:decoration-[#B69660]"
                    couleurActif={COULEUR_ACTIF_MENU}
                    onClick={fermer}
                  />
                </li>
              </Fragment>
            );
          })}
          <li
            style={delaiEntree(ouvert, LIENS.length)}
            className={`border-b-[3px] border-[#B69660] pb-6 pt-8 ${classesEntree(ouvert)}`}
          >
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
                    className={CLASSES_LIEN_RESEAU}
                  >
                    <Icone />
                  </a>
                );
              })}
            </div>
          </li>
          <li
            style={delaiEntree(ouvert, LIENS.length + 1)}
            className={`pt-4 ${classesEntree(ouvert)}`}
          >
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
              © Sousaphone Carbon 2026 — Tous droits réservés
            </p>
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
