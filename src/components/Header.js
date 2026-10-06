"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LIENS = [
  { href: "/", label: "ACCUEIL" },
  { href: "/instrument", label: "SOUSAPHONE CARBON" },
  { href: "/galerie", label: "GALERIE" },
  { href: "/contact", label: "CONTACT" },
];

const COULEUR_ACTIF = "text-[#B69660]";
const COULEUR_INACTIF = "text-[#8C7448] transition-colors hover:text-white";
const CLASSES_BOUTON_ROND =
  "inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full outline outline-1 outline-offset-[-1px] outline-stone-800 transition-colors hover:outline-stone-600";

function IconeCroix() {
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
        priority
      />
      <BadgeFrance />
    </Link>
  );
}

function LienNav({ href, label, actif, classesBase, onClick }) {
  return (
    <Link
      href={href}
      aria-current={actif ? "page" : undefined}
      onClick={onClick}
      className={`${classesBase} ${
        actif ? COULEUR_ACTIF : COULEUR_INACTIF
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
              classesBase="text-sm font-medium"
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
      <div className="flex w-full items-center justify-end gap-6 overflow-hidden px-6 pt-10 pb-5">
        <button
          type="button"
          ref={refFermer}
          onClick={fermer}
          aria-label="Fermer le menu"
          className={CLASSES_BOUTON_ROND}
        >
          <IconeCroix />
        </button>
      </div>
      <nav aria-label="Menu" className="flex flex-1 items-center overflow-y-auto">
        <ul className="flex w-full max-w-[679px] flex-col px-6 py-10">
          {LIENS.map(({ href, label }, index) => {
            const actif = pathname === href;
            return (
              <li
                key={href}
                style={{
                  transitionDelay: ouvert ? `${120 + index * 60}ms` : "0ms",
                }}
                className={`border-b border-white/10 last:border-b-0 transition-all duration-500 ease-out motion-reduce:transition-none ${
                  ouvert
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <LienNav
                  href={href}
                  label={label}
                  actif={actif}
                  classesBase="block py-4 text-2xl font-semibold"
                  onClick={fermer}
                />
              </li>
            );
          })}
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

    refFermer.current?.focus();

    const surTouche = (e) => {
      if (e.key === "Escape") {
        setOuvert(false);
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = refDialogue.current?.querySelectorAll(
        "a[href], button:not([disabled])",
      );
      if (!focusables || focusables.length === 0) return;
      const premier = focusables[0];
      const dernier = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === premier) {
        e.preventDefault();
        dernier.focus();
      } else if (!e.shiftKey && document.activeElement === dernier) {
        e.preventDefault();
        premier.focus();
      }
    };

    window.addEventListener("keydown", surTouche);
    return () => {
      window.removeEventListener("keydown", surTouche);
      refBurger.current?.focus();
    };
  }, [ouvert]);

  return (
    <header className="sticky top-0 z-30 bg-black">
      <div className="flex w-full items-center justify-between gap-6 overflow-hidden px-6 pt-10 pb-5">
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
          {ouvert ? <IconeCroix /> : <IconeBurger />}
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
